# Live-Checkliste — Meister Signage

Stand: 2026-05-16
Ziel-Domain: **meister-signage.ch**
Aktuelle Stage: test.meister-signage.ch

Diese Liste ist eine Schritt-für-Schritt-Anleitung für den Domain-Wechsel.
Reihenfolge unbedingt einhalten — DNS-Änderungen propagieren bis zu 24h.

---

## Pre-flight (kann jetzt erledigt werden)

### Code-State im Repo (alles bereits erledigt ✅)
- [x] Alle absoluten URLs zeigen auf `https://www.meister-signage.ch`
- [x] `metadataBase` in `app/layout.tsx` gesetzt
- [x] `robots: { index: true, follow: true }` aktiv
- [x] `themeColor` für hell/dunkel definiert
- [x] `lang="de-CH"` auf `<html>`
- [x] Sitemap (`app/sitemap.ts`): 31 Production-URLs, keine Test-Domains
- [x] `public/robots.txt`: Sitemap referenziert, nur `/mieten/` disallowed (Legacy-Redirect)
- [x] Keine `noindex` / `nofollow` Tags im Code
- [x] Per-Page OG-Images via `opengraph-image.tsx` (alle 1200×630 PNG)
- [x] Favicons: `app/favicon.ico`, `app/apple-icon.png`, `app/icon.svg`, plus 16/32px PNG in `public/`
- [x] Schema.org: Organization + LocalBusiness + WebSite global; FAQ/Service/Breadcrumb/Article/About/Contact per Seite
- [x] Static Export funktioniert (`output: "export"`)

### Noch offen (vor Livegang erledigen)
- [ ] **Analytics**: aktuell keine GA4/Plausible/etc. eingebunden. Entscheiden:
      → GA4 mit Consent-Banner (FineDine, CookieFirst, …)
      → oder Plausible/Fathom (privacy-friendly, kein Banner nötig)
- [ ] **Google Search Console Property** für `meister-signage.ch` (NICHT www) vorbereiten
- [ ] **Bing Webmaster Tools** Account (optional, dauert 2min)
- [ ] **DNS-Records dokumentieren** (siehe unten)

---

## DNS-Setup

### Vor dem Switch

1. **Zonenfile von `meister-signage.ch` exportieren** (Backup)
2. **TTL absenken** auf 300s, 24h bevor Switch geplant → schnelle Propagation
3. **Plattform-Provider** (Vercel/Cloudflare Pages/Netlify) für Production einrichten,
   falls noch nicht — sonst weiter wie auf test-Subdomain
4. **Production-Build** lokal verifizieren:
   ```bash
   npm run build
   ```

### Switch (Reihenfolge)

1. **Production-Deployment** auslösen — neue Domain noch nicht aktiv
2. **A-Record** (apex `meister-signage.ch`) auf Hoster-IP zeigen
3. **CNAME** (www → apex) prüfen — Apex-Redirect-Strategie entscheiden:
   - 301 von `www` → `meister-signage.ch` ODER umgekehrt
   - Canonical-URLs im Code zeigen aktuell auf `www.meister-signage.ch`
   - **Wenn Apex (ohne www) bevorzugt** → Canonicals + sitemap + schemas anpassen!
4. **SSL-Zertifikat** ausstellen lassen (auto bei Vercel/Cloudflare)
5. **HTTPS-Redirect** verifizieren (http → https)

### Nach dem Switch

- [ ] `https://meister-signage.ch` öffnet ohne Zertifikatswarnung
- [ ] `https://www.meister-signage.ch` redirected korrekt (oder umgekehrt)
- [ ] `http://meister-signage.ch` → `https://...` (301)
- [ ] `test.meister-signage.ch` → 301 → `meister-signage.ch` (wichtig für SEO-Equity)

---

## CDN / Cache

- [ ] Cloudflare/CDN-Cache **purge all** direkt nach Switch
- [ ] Browser-Test in Inkognito-Fenster (umgeht lokalen Cache)
- [ ] DNS-Propagation prüfen: https://dnschecker.org/#A/meister-signage.ch

---

## Search Console (innerhalb 24h)

1. **Property hinzufügen** in https://search.google.com/search-console
   - Domain-Property `meister-signage.ch` (deckt www + non-www + http/https)
   - DNS-TXT-Verifizierung
2. **Sitemap einreichen**: `https://www.meister-signage.ch/sitemap.xml`
3. **URL-Prüfung** für Top-Seiten (Homepage, /digital-signage-kaufen, /digital-signage-mieten)
4. **Coverage-Bericht** beobachten (24-48h)
5. **Alte Test-Property** (test.meister-signage.ch) löschen ODER mit Redirect deindexieren
   lassen — falls indiziert war

---

## Bing / DuckDuckGo / Brave

- [ ] **Bing Webmaster Tools**: Property anlegen, Sitemap einreichen
- DuckDuckGo, Brave Search ziehen organisch nach (kein manuelles Submit nötig)

---

## Social-Sharing-Preview

Nach DNS-Propagation testen:

- [ ] **LinkedIn Post Inspector**: https://www.linkedin.com/post-inspector/
  → URL eintragen, "Refresh" klicken, Preview prüfen (OG-Image, Title, Desc)
- [ ] **Facebook Sharing Debugger**: https://developers.facebook.com/tools/debug/
  → URL prüfen, "Scrape Again" klicken
- [ ] **WhatsApp**: Link in eigenen Chat senden, Preview prüfen
- [ ] **Twitter / X Validator**: https://cards-dev.twitter.com/validator (legacy aber funktioniert)
- [ ] **OG-Validator** (alle auf einen Blick): https://www.opengraph.xyz/

Pro Seitentyp einmal prüfen:
- `/` (Home)
- `/digital-signage-kaufen`
- `/digital-signage-mieten`
- `/branchen/gastronomie`
- `/loesungen/led-walls`
- `/news/spark5-neues-modell`

---

## Structured Data

- [ ] **Rich Results Test**: https://search.google.com/test/rich-results
  Pro Seitentyp einmal prüfen, sollte zeigen:
  - Home: Organization + LocalBusiness + WebSite
  - Kaufen/Mieten: + FAQ + Service + Breadcrumb
  - Branchen/Loesungen-Detail: + Service + FAQ + Breadcrumb
  - News-Artikel: + Article + Breadcrumb
- [ ] **Schema.org Validator**: https://validator.schema.org/

---

## Lighthouse Live-Check (Mobile + Desktop)

- [ ] PageSpeed Insights für `https://www.meister-signage.ch`: https://pagespeed.web.dev
- Erwartung:
  - Performance Mobile: 90+
  - Performance Desktop: 95+
  - Accessibility: 95+
  - Best Practices: 95+
  - SEO: 100

Kritische Metriken:
- LCP < 2.5s
- CLS < 0.1
- INP < 200ms

---

## Console-Errors

- [ ] DevTools öffnen auf Production-URL — keine roten Errors
- [ ] Network-Tab: alle Requests 200 oder 304 (kein 404, kein 500)

---

## Redirects (alte URLs → neue)

Die Legacy-Kurzpfade existieren noch und sollen weiterleiten:

| Alt | Neu |
|---|---|
| `/gastronomie` | bleibt (eigenständige Seite) |
| `/retail` | bleibt |
| `/hotellerie` | bleibt |
| `/unternehmen` | bleibt |
| `/events` | bleibt |
| `/digitales-menueboard` | bleibt (oder → `/loesungen/digitale-menueboards`) |
| `/mieten` | → `/digital-signage-mieten` (client-side via `app/mieten/page.tsx`) |
| `/luzern` | → `/staedte/luzern` (falls von test-Domain bekannt) |
| `/blog` | → `/news` (falls von test-Domain bekannt) |

Wenn auf test.meister-signage.ch öffentliche Links zu `/luzern` oder `/blog` existieren,
serverseitige 301-Redirects einrichten (Cloudflare Rules oder `_redirects`-Datei je nach Host).

---

## Mobile

- [ ] iPhone Safari: Hero rendert, Burger-Menü öffnet, Formular nutzbar
- [ ] Android Chrome: gleich prüfen
- [ ] Tablet (iPad): Layout zwischen mobile + desktop sinnvoll

---

## Final Smoke-Test

Klick-durch nach Livegang:
- [ ] Logo → Home
- [ ] Lösungen-Dropdown → alle 5 Items erreichbar
- [ ] Branchen-Dropdown → alle 5 Items erreichbar
- [ ] "Beratung anfragen" auf Hero, im Footer, im finalen CTA → öffnet `/kontakt`
- [ ] Kontaktformular abschicken → Bestätigung erscheint, E-Mail kommt an
- [ ] Telefonlink im ContactSection → öffnet Telefon-App
- [ ] WhatsApp-Link → öffnet WhatsApp-Web/-App
- [ ] Mail-Link → öffnet Mail-Client
- [ ] `/digital-signage-kaufen` → Preise sichtbar, CTAs funktionieren
- [ ] `/digital-signage-mieten` → Pakete sichtbar
- [ ] News-Artikel öffnen
- [ ] 404 auslösen (`/abc-existiert-nicht`) → branded 404-Seite erscheint
- [ ] Sitemap `/sitemap.xml` lädt
- [ ] Robots `/robots.txt` lädt

---

## Rollback-Plan

Falls etwas grundlegend bricht:

1. **DNS zurückstellen** auf alte IP (TTL ist abgesenkt → ~5min)
2. **Cache purgen**
3. test-Subdomain bleibt parallel verfügbar zur Diagnose

---

## Nach 7 Tagen

- [ ] Search Console: Indexierung der wichtigsten Seiten geprüft
- [ ] Erste organische Impressionen sichtbar
- [ ] Analytics: Traffic kommt an
- [ ] 404-Report in Search Console: keine unerwarteten Seiten

---

**Nicht vergessen:**
- Visitenkarten / E-Mail-Signaturen / Google Business Profile / LinkedIn-Bio
  auf neue Domain aktualisieren.
