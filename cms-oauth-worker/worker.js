/**
 * Decap CMS GitHub OAuth proxy — Cloudflare Worker.
 *
 * Endpoints:
 *   GET /auth      → redirects to github.com/login/oauth/authorize
 *   GET /callback  → exchanges the code for an access token and
 *                    forwards it back to the Decap popup via
 *                    window.postMessage().
 *
 * Required secrets (configure via `wrangler secret put …` or the
 * Cloudflare Dashboard → Worker → Settings → Variables):
 *   GITHUB_CLIENT_ID      — your GitHub OAuth App "Client ID"
 *   GITHUB_CLIENT_SECRET  — your GitHub OAuth App "Client Secret"
 */

export default {
  async fetch(request, env) {
    const url = new URL(request.url);

    if (url.pathname === "/auth")     return redirectToGithub(url, env);
    if (url.pathname === "/callback") return exchangeCode(url, env);

    return new Response(
      "Decap OAuth proxy — endpoints: /auth, /callback",
      { status: 200, headers: { "Content-Type": "text/plain" } },
    );
  },
};

function redirectToGithub(url, env) {
  const redirect = new URL("https://github.com/login/oauth/authorize");
  redirect.searchParams.set("client_id", env.GITHUB_CLIENT_ID);
  redirect.searchParams.set("scope", "repo,user");
  redirect.searchParams.set("redirect_uri", `${url.origin}/callback`);
  return Response.redirect(redirect.toString(), 302);
}

async function exchangeCode(url, env) {
  const code = url.searchParams.get("code");
  if (!code) {
    return htmlResponse(messageScript("error", { error: "missing_code" }));
  }

  let payload;
  try {
    const res = await fetch("https://github.com/login/oauth/access_token", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
        Accept: "application/json",
      },
      body: JSON.stringify({
        client_id: env.GITHUB_CLIENT_ID,
        client_secret: env.GITHUB_CLIENT_SECRET,
        code,
      }),
    });
    const data = await res.json();
    payload = data.access_token
      ? { token: data.access_token, provider: "github" }
      : { error: data.error || "token_exchange_failed" };
  } catch (err) {
    payload = { error: "network_error", detail: String(err) };
  }

  const kind = payload.token ? "success" : "error";
  return htmlResponse(messageScript(kind, payload));
}

function messageScript(kind, payload) {
  const json = JSON.stringify(payload).replace(/</g, "\\u003c");
  return `<!doctype html><html><head><meta charset="utf-8"><title>Authenticating…</title></head><body>
<p style="font-family:system-ui;padding:24px;color:#1a2744;">Authentifizierung…</p>
<script>
(function () {
  var msg  = "authorization:github:${kind}:" + ${JSON.stringify(json)};
  function send() {
    if (window.opener) {
      window.opener.postMessage(msg, "*");
    }
  }
  // Decap listens for the first "authorizing:github" and replies — then we send.
  window.addEventListener("message", function (e) {
    if (e.data === "authorizing:github") send();
  }, false);
  // Kick off the handshake.
  if (window.opener) window.opener.postMessage("authorizing:github", "*");
  // Fallback: send anyway after 500 ms if no handshake happens.
  setTimeout(send, 500);
  // Close window after 3 s — token is already handed back.
  setTimeout(function () { window.close(); }, 3000);
})();
</script>
</body></html>`;
}

function htmlResponse(html) {
  return new Response(html, {
    headers: { "Content-Type": "text/html; charset=utf-8" },
  });
}
