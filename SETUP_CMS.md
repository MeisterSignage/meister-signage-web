# CMS-Setup — Decap + Cloudflare Access

> Schritt-für-Schritt-Anleitung zur Aktivierung des CMS-Editors auf
> `https://www.meister-signage.ch/admin/`. Einmal eingerichtet,
> meldest du dich künftig per Google-Login mit 2FA an und kannst
> News-Beiträge und globale Kontaktdaten direkt im Browser editieren.

---

## Übersicht der Architektur

```
Browser (chris)
    │
    │  1) öffnet /admin/
    ▼
Cloudflare Access  ──►  fragt Google-Login + 2FA ab
    │  2) durchgelassen
    ▼
Decap CMS (statisches JS in /public/admin/)
    │  3) klickt "Mit GitHub anmelden"
    ▼
Cloudflare Worker  ──►  OAuth-Dance mit GitHub
    │  4) GitHub-Token im Browser-Speicher (von Decap)
    ▼
Decap committet Änderungen direkt nach `main`
    │
    ▼
Cloudflare Pages baut die Seite neu (1–2 Min)
    │
    ▼
Änderung ist live auf www.meister-signage.ch
```

---

## Schritt 1 — GitHub OAuth App anlegen

1. Gehe auf https://github.com/settings/developers → "OAuth Apps" → "New OAuth App".
2. Felder ausfüllen:
   - **Application name:** `Meister Signage CMS`
   - **Homepage URL:** `https://www.meister-signage.ch`
   - **Authorization callback URL:**
     `https://meister-signage-cms-auth.<deine-cf-subdomain>.workers.dev/callback`
     (den Worker legen wir gleich an — Domain notieren)
3. "Register application".
4. **Client ID kopieren** und sicher ablegen.
5. "Generate a new client secret" → **Client Secret kopieren** und sicher ablegen.

---

## Schritt 2 — Cloudflare Worker (OAuth-Proxy)

Decap braucht eine kleine serverseitige Brücke, damit das GitHub
Client-Secret nicht im Browser landet. Ein Cloudflare Worker
(kostenlos im Free-Tier) erledigt das.

1. Im Cloudflare-Dashboard → "Workers & Pages" → "Create Worker".
2. Name: `meister-signage-cms-auth`.
3. "Quick edit" → folgenden Code einfügen
   (Quelle: https://github.com/sterlingwes/netlify-cms-oauth-cloudflare,
   leicht angepasst):

```js
const OAUTH_GITHUB_AUTHORIZE_URL = "https://github.com/login/oauth/authorize";
const OAUTH_GITHUB_TOKEN_URL     = "https://github.com/login/oauth/access_token";

addEventListener("fetch", (event) => event.respondWith(handle(event.request)));

async function handle(req) {
  const url = new URL(req.url);
  if (url.pathname === "/auth")     return redirectToGithub(url);
  if (url.pathname === "/callback") return exchangeCode(url);
  return new Response("Not found", { status: 404 });
}

function redirectToGithub(url) {
  const redirect = new URL(OAUTH_GITHUB_AUTHORIZE_URL);
  redirect.searchParams.set("client_id", GITHUB_CLIENT_ID);
  redirect.searchParams.set("scope", "repo,user");
  redirect.searchParams.set("redirect_uri", `${url.origin}/callback`);
  return Response.redirect(redirect.toString(), 302);
}

async function exchangeCode(url) {
  const code = url.searchParams.get("code");
  const tokenRes = await fetch(OAUTH_GITHUB_TOKEN_URL, {
    method: "POST",
    headers: { "Content-Type": "application/json", "Accept": "application/json" },
    body: JSON.stringify({
      client_id:     GITHUB_CLIENT_ID,
      client_secret: GITHUB_CLIENT_SECRET,
      code,
    }),
  });
  const data = await tokenRes.json();
  const payload = data.access_token
    ? { token: data.access_token, provider: "github" }
    : { error: data.error || "unknown" };

  const html = `<!doctype html><html><body><script>
    (function(){
      function send(){ window.opener.postMessage("authorization:github:${data.access_token ? 'success' : 'error'}:${JSON.stringify(payload).replace(/"/g,'\\"')}", "*"); }
      window.addEventListener("message", send, false);
      window.opener.postMessage("authorizing:github", "*");
    })();
  </script></body></html>`;

  return new Response(html, { headers: { "Content-Type": "text/html" } });
}
```

4. "Save and Deploy".
5. Settings → Variables → "Add variable":
   - `GITHUB_CLIENT_ID` = Client ID aus Schritt 1 (Encrypt ✓)
   - `GITHUB_CLIENT_SECRET` = Client Secret aus Schritt 1 (Encrypt ✓)
6. Settings → Triggers → Custom Domain (optional) oder die
   `*.workers.dev`-URL behalten.
7. Die finale Worker-URL notieren (z.B.
   `https://meister-signage-cms-auth.meistersignage.workers.dev`).

---

## Schritt 3 — Decap-Config anpassen

In `public/admin/config.yml` die Zeile:

```yaml
base_url: https://meister-signage-cms-auth.<your-cf-subdomain>.workers.dev
```

durch die in Schritt 2 notierte Worker-URL ersetzen, committen + pushen.

---

## Schritt 4 — Cloudflare Access vor `/admin/*`

Damit nur du den Admin überhaupt erreichst (zusätzliche Sicherheitsebene
oben auf Decap):

1. Cloudflare Dashboard → "Zero Trust" → "Access" → "Applications" →
   "Add an application" → "Self-hosted".
2. Felder:
   - **Application name:** `Meister Signage Admin`
   - **Session duration:** `24 hours`
   - **Application domain:**
     - Subdomain: leer lassen (Apex)
     - Domain: `meister-signage.ch`
     - Path: `/admin*`
3. "Identity providers" → Google hinzufügen
   (falls noch nicht vorhanden, im Zero Trust Dashboard unter
   "Authentication" → "Login methods" konfigurieren).
4. "Configure policies":
   - **Policy name:** `Only Chris`
   - **Action:** `Allow`
   - **Include:** "Emails" → `chris@nr9.ch`
   - **Require:** "MFA Required" ✓ (erzwingt 2FA)
5. Save.

Optional auch für `test.meister-signage.ch/admin*` dieselbe App mit
zusätzlicher Domain hinzufügen.

---

## Schritt 5 — Cloudflare Pages Build-Hook

Damit Änderungen, die Decap committet, automatisch live gehen:

1. Cloudflare Dashboard → Pages → das `meister-signage`-Projekt
   öffnen.
2. Settings → "Builds & deployments" → "Production branch": `main` ✓
3. Automatische Deploys für `main` sollten standardmässig aktiv sein.

Ergebnis: Decap-Commit auf `main` → Cloudflare Pages baut → Live in 1–2 Min.

---

## Schritt 6 — Erster Login-Test

1. Öffne `https://www.meister-signage.ch/admin/`
2. Cloudflare Access fragt Google-Login (mit 2FA) ab → einloggen.
3. Decap-UI lädt → "Login mit GitHub" klicken.
4. GitHub-Login + 2FA → Berechtigung erteilen.
5. Du landest im Editor und siehst:
   - **News & Blog** — bestehende Posts editieren, neue anlegen
   - **Globale Daten → Kontaktdaten** — Telefon/E-Mail/WhatsApp ändern
6. Test: einen News-Post bearbeiten, "Save" → ein neuer Commit
   erscheint im Repo unter "Author: chris@nr9.ch (via Decap CMS)".
7. Ca. 1–2 Min später ist die Änderung live.

---

## Was du editieren kannst

| Bereich | Wirkung |
|---------|---------|
| **News & Blog** | Vollständige Markdown-Beiträge mit WYSIWYG, Bild-Upload, Status (Entwurf/veröffentlicht) |
| **Globale Daten → Kontaktdaten** | Telefon, E-Mail, WhatsApp-URL — wird auf der ganzen Seite an ~16 Stellen ausgespielt (Footer, jede Kontakt-Section, Floating-WhatsApp-Button, etc.) |

Weitere Inhalte (Hero-Texte der Landingpages, FAQ, Preise) können in
einer zweiten Iteration ergänzt werden — entweder bei Bedarf hinzufügen
oder direkt am Anfang das Komplettpaket einrichten.

---

## Was zu tun ist, wenn etwas schiefgeht

- **„OAuth callback URL mismatch":** Die Callback-URL in der
  GitHub-OAuth-App muss exakt mit der Worker-URL `/callback`
  übereinstimmen — auch das `https://`-Präfix.
- **„CORS-Fehler beim Login":** Worker-Code prüfen, `Access-Control-Allow-Origin`
  ist nicht nötig solange das Fenster per `postMessage` kommuniziert.
- **„Decap zeigt 404 nach Login":** `config.yml` → `branch: main`
  und `repo: MeisterSignage/meister-signage-web` prüfen.
- **„Cloudflare Access lässt mich nicht durch":** Im Zero-Trust-Dashboard
  unter "Logs" prüfen, welcher Block die Anfrage stoppt. Häufig ist
  die E-Mail-Schreibweise falsch.

---

## Sicherheitsschicht im Überblick

1. **Cloudflare Access vor `/admin/*`** — keine andere Person als
   `chris@nr9.ch` mit Google-2FA erreicht überhaupt die Decap-UI.
2. **GitHub OAuth + 2FA** — selbst wer Layer 1 überwinden würde,
   müsste zusätzlich dein GitHub-Konto übernehmen.
3. **Audit-Trail in Git** — jede Änderung ist ein Commit mit
   Autor-Information und kann via `git revert` in Sekunden
   rückgängig gemacht werden.
4. **Repo-Branch-Protection** (empfohlen): in GitHub
   Settings → Branches → `main` schützen, nur per Pull Request
   mergen. Decap committet dann auf einen Branch, du reviewst und
   mergst per Hand.
