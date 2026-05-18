# CMS OAuth Worker

Cloudflare-Worker, der den GitHub-OAuth-Flow für Decap CMS abwickelt.
Ohne diesen Worker bleibt der „Mit GitHub einloggen"-Button im
Decap-Login stumm — er versucht, ein nicht-existierendes Backend zu
erreichen.

## 5-Minuten-Setup

Voraussetzungen: macOS / Linux Terminal, ein Cloudflare-Konto und
ein GitHub-Konto. Wrangler wird automatisch via `npx` geladen — du
brauchst es nicht global zu installieren.

### 1. GitHub OAuth App erstellen

1. https://github.com/settings/developers → **OAuth Apps** → **New OAuth App**.
2. Felder:
   - **Application name:** `Meister Signage CMS`
   - **Homepage URL:** `https://www.meister-signage.ch`
   - **Authorization callback URL:** vorerst irgendetwas (z.B. `https://example.com/callback`) — passen wir gleich an.
3. **Register application**.
4. Auf der nächsten Seite:
   - **Client ID** kopieren (sieht aus wie `Ov23li…`)
   - **Generate a new client secret** klicken → **Client Secret** kopieren (wird nur einmal angezeigt!)

### 2. Worker deployen

Aus dem Projekt-Root:

```bash
cd cms-oauth-worker
npx wrangler login                 # öffnet Browser, einmaliges Cloudflare-OAuth
npx wrangler deploy
```

Wrangler zeigt am Ende eine URL der Form
`https://meister-signage-cms-auth.<dein-account>.workers.dev`.
**Diese URL notieren.**

### 3. Secrets setzen

```bash
npx wrangler secret put GITHUB_CLIENT_ID
# → Wert eingeben (Client ID aus Schritt 1), Enter

npx wrangler secret put GITHUB_CLIENT_SECRET
# → Wert eingeben (Client Secret aus Schritt 1), Enter
```

### 4. GitHub OAuth App: Callback-URL korrigieren

Zurück nach https://github.com/settings/developers → die OAuth-App
öffnen → **Authorization callback URL** auf die in Schritt 2
erhaltene URL plus `/callback` setzen, also z.B.:

```
https://meister-signage-cms-auth.deinaccount.workers.dev/callback
```

→ **Update application**.

### 5. Decap-Config im Hauptrepo anpassen

In `public/admin/config.yml` die `base_url`-Zeile durch die in
Schritt 2 erhaltene Worker-URL ersetzen (ohne `/callback`):

```yaml
backend:
  name: github
  repo: MeisterSignage/meister-signage-web
  branch: main
  base_url: https://meister-signage-cms-auth.deinaccount.workers.dev
  auth_endpoint: auth
```

Commit + Push:

```bash
cd ..    # zurück ins Projekt-Root
git add public/admin/config.yml
git commit -m "CMS: wire Decap OAuth backend to Cloudflare Worker"
git push
```

Cloudflare Pages baut neu (1–2 Min).

### 6. Testen

1. `https://www.meister-signage.ch/admin/index.html` öffnen
   (oder `/admin/` falls dein Host Verzeichnis-Indexe auflöst).
2. „Mit GitHub einloggen" → Popup → GitHub-Login + 2FA → Authorize.
3. Du landest im Decap-Editor.

## Wenn der Login danach immer noch nicht funktioniert

Wahrscheinlichste Ursachen, geordnet:

- **Callback-URL stimmt nicht überein.** GitHub OAuth App zeigt
  exakt auf `<worker-url>/callback`, nicht auf `/auth`.
- **base_url im Decap-Config ohne `/callback` lassen.** Decap hängt
  `/auth` automatisch an.
- **Popup-Blocker.** Browser-Popup-Blocker deaktivieren für die
  meister-signage.ch-Domain.
- **Secrets fehlen.** `npx wrangler secret list` zeigt, was gesetzt
  ist — beide müssen drin sein.
- **Worker liefert 500.** `npx wrangler tail` zeigt Live-Logs während
  du den Login-Versuch wiederholst.

## Updates später

Wenn am Worker-Code etwas geändert wird, einfach erneut
`npx wrangler deploy` aus diesem Verzeichnis ausführen. Secrets
bleiben über Deploys hinweg erhalten.
