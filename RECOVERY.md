# Recovery — wenn etwas schiefgeht

> Kurzanleitung für die häufigsten "Oh nein"-Momente nach einer
> CMS-Änderung oder einem versehentlichen Commit. In der Reihenfolge
> der Wahrscheinlichkeit.

---

## 1. Ich habe gerade einen Eintrag im CMS bearbeitet und es sieht falsch aus

Solange die letzte Änderung der jüngste Commit auf `main` ist, kannst
du sie in 30 Sekunden zurückrollen.

### Schnellster Weg — direkt im GitHub-Browser

1. https://github.com/MeisterSignage/meister-signage-web/commits/main öffnen
2. Den obersten Commit anklicken (= deine letzte CMS-Aktion)
3. Oben rechts auf das **„Revert"**-Symbol (oder Three-Dot-Menü → Revert) klicken
4. GitHub erstellt einen Revert-Commit, der die Änderung rückgängig macht
5. „Create pull request" → falls Branch Protection aktiv: PR mergen.
   Sonst: GitHub fragt nicht und committet direkt.
6. Cloudflare Pages baut, ~1–2 Min später ist der Stand von vorher wieder live

Wenn du dir unsicher bist: bevor du auf "Revert" drückst, klick auf
„Files changed" und schau, ob die Diff wirklich das ist, was du
loswerden willst.

---

## 2. Ich habe einen Eintrag versehentlich gelöscht

Decap löscht durch einen Git-Commit, der die Datei entfernt. Die
Wiederherstellung läuft genauso wie Punkt 1 — den „Delete"-Commit
reverten.

Alternativ kannst du die Datei aus einem älteren Stand auch direkt
aus GitHub holen:

1. https://github.com/MeisterSignage/meister-signage-web/commits/main
2. Den Commit *vor* dem Löschen finden
3. Auf den Commit klicken → „Browse files"
4. Zur gelöschten Datei navigieren (z.B. `content/landingpages/loesungen/software.json`)
5. Oben rechts „Raw"-Button → Inhalt kopieren
6. Im CMS einen neuen Eintrag mit demselben Slug anlegen und Inhalt
   einfügen, oder die Datei in GitHub direkt neu anlegen

---

## 3. Die ganze Live-Seite wirkt seltsam / Bilder fehlen / Layout kaputt

Falls eine CMS-Änderung den Build zerstört, baut Cloudflare Pages
das letzte erfolgreiche Deployment automatisch nicht aus — du siehst
dann den letzten funktionierenden Stand. In dem Fall:

1. https://dash.cloudflare.com/ → Pages → `meister-signage` öffnen
2. Reiter „Deployments" → erkennen, welcher Deploy „Failed" ist
3. Den letzten **„Success"** identifizieren und „Rollback to this deployment" klicken
4. Sofort wieder online

Parallel: den fehlgeschlagenen Commit auf GitHub finden und reverten,
sonst baut Pages bei der nächsten kleinen Änderung wieder den
kaputten Stand drauf.

---

## 4. Ich kann mich nicht mehr einloggen (`/admin/`)

Drei mögliche Ursachen, jede mit eigener Behandlung:

### a) Browser-Server-Passwort vergessen

Du hast das Server-Passwort verloren, das du im Novatrend-cPanel
unter „Datenschutz für Ordner" gesetzt hast.

→ Im Novatrend-Kundenpanel: Datenschutz für Ordner → `/admin`
  öffnen → neuen Benutzer mit neuem Passwort anlegen, alten löschen.

### b) GitHub-Login schlägt fehl

→ Prüfe https://github.com/settings/security:
  - Two-factor authentication noch aktiv?
  - Sind „Personal access tokens" widerrufen worden?
→ Prüfe https://github.com/settings/developers:
  - Meister Signage CMS OAuth App noch aktiv?
  - Callback-URL stimmt mit Worker-URL überein?

### c) Cloudflare Worker antwortet nicht

→ Test direkt:
  ```bash
  curl -I https://meister-signage-cms-auth.lingering-mountain-b769.workers.dev/auth
  ```
  Sollte HTTP 302 mit Location-Header zu github.com liefern.
→ Bei Fehler im Cloudflare Dashboard → Workers → Logs prüfen.

---

## 5. Ich habe etwas direkt auf GitHub gepusht, das ich nicht wollte

Solange du nicht `force push` gemacht hast:

```bash
cd /Users/meister/Downloads/meister-signage
git log --oneline -10                    # finde den Commit-Hash
git revert <commit-hash>
git push
```

Bei `force push` mit Datenverlust: das letzte erfolgreiche
Deployment in Cloudflare Pages identifizieren (siehe Punkt 3) — der
Source-Code lässt sich darüber nicht wiederherstellen, aber zumindest
die Live-Seite läuft weiter, während du die Inhalte manuell aus
dem alten Build (`out/`-Verzeichnis im letzten Deployment-Artefakt)
zurückbaust.

**Force-Push auf `main` ist verboten** — falls die Branch Protection
das nicht schon technisch verhindert (siehe SETUP_CMS.md).

---

## 6. Notfall-Kontakte

| Service       | Wo / Wer                                                |
|---------------|---------------------------------------------------------|
| Hosting       | Novatrend Support — https://www.novatrend.ch/support    |
| DNS / Domain  | gleicher Registrar wie aktuell — Account-Login parat    |
| Cloudflare    | Cloudflare Dashboard → Support (kostenlos)              |
| GitHub        | https://github.com/contact (kostenlos)                  |

---

## Was zukünftig automatisch helfen würde

- **Branch Protection auf `main`** verhindert versehentlichen
  Force-Push und kann CMS-Commits via Pull Request laufen lassen.
- **Cloudflare Pages "Preview"-Deployments** für Pull Requests —
  jeder CMS-Commit landet auf einer Preview-URL, du klickst durch,
  approvest, mergst.

Wenn du eine dieser Schutzschichten haben willst — sag Bescheid,
dann richten wir das ein.
