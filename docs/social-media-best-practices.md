# Social-Media Best Practices — Instagram & LinkedIn

> Referenz für das automatische Posting (News → Make → LinkedIn/Instagram).
> Stand: **Juni 2026**. Quellen am Ende. Bei grösseren Plattform-Updates neu prüfen.

---

## 1. Bildgrössen (Pixel)

### Instagram

| Format | Pixel | Seitenverhältnis | Einsatz |
|---|---|---|---|
| **Portrait (empfohlen)** | **1080 × 1350** | 4:5 | Feed-Post — maximale Bildfläche im Feed, drängt den nächsten Post aus dem Bild |
| Quadrat | 1080 × 1080 | 1:1 | Feed-Post, sicher für Grid |
| Landscape | 1080 × 566 | 1.91:1 | Feed-Post (kleinste Darstellung) |
| Stories / Reels | 1080 × 1920 | 9:16 | wichtige Inhalte 250 px von oben/unten weg |

- **Format:** JPEG. Über die API (Make) max. **8 MiB**, Seitenverhältnis muss zwischen **4:5 und 1.91:1** liegen, Breite max. 1440 px.

### LinkedIn

| Format | Pixel | Seitenverhältnis | Einsatz |
|---|---|---|---|
| **Einzelbild (Standard)** | **1200 × 627** | 1.91:1 | klassischer Bild-/Link-Post |
| Quadrat | 1080 × 1080 | 1:1 | Feed, mobil grösser |
| Portrait | 1080 × 1350 | 4:5 | dominiert mobil, gut für Carousel/Dokument |
| Carousel / Dokument | 1080 × 1080 oder 1080 × 1350 | 1:1 / 4:5 | höchste Verweildauer |

- Bei einem **Link-Post** zieht LinkedIn das **Vorschaubild aus dem `og:image` der Seite** (Ziel: 1200 × 627). Ein separat hochgeladenes Bild ist dann nicht nötig.

---

## 2. Hashtags

| | Instagram | LinkedIn |
|---|---|---|
| **Anzahl** | **3–5** (Meta-Empfehlung), NICHT 30 | **3–5** |
| **Platzierung** | in der Caption (IG indexiert Caption-Text für die Suche) | am **Ende** des Posts |
| **Veraltet** | Hashtags im ersten Kommentar verstecken bringt nichts mehr | Hashtag-Spam schadet eher |

- **Relevanz vor Menge.** Wenige, thematisch passende Hashtags schlagen viele generische.

---

## 3. Text / Caption

### Instagram
- **Limit:** 2'200 Zeichen. **Aber:** nur die **ersten ~125 Zeichen** erscheinen vor dem „… mehr".
- **Hook in die erste Zeile** (Frage, starke Aussage, überraschende Zahl) — das Wichtigste nach vorne.
- **Zeilenumbrüche** zur Gliederung, **Call-to-Action** am Ende.
- **Caption-SEO:** IG-Suche indexiert die Wörter — keyword-reiche, klare Captions statt nur Hashtags.
- **Algorithmus 2026:** **Saves & DM-Shares** zählen mehr als Likes. **Carousels** haben die höchste Engagement-Rate (~10 %) vor Einzelbild (~7 %) und Reels (~6 %).

### LinkedIn
- **Limit:** 3'000 Zeichen. **Optimal: 1'300–1'900 Zeichen** (~47 % mehr Engagement als kurze Posts).
- **„Mehr anzeigen"-Cutoff** bei ~140–210 Zeichen mobil → **starker Hook in den ersten ~200 Zeichen**.
- **Struktur:** kurze Absätze, Zeilenumbrüche, Bullets. CTA am Ende.
- **Algorithmus 2026:** die **ersten ~60 Minuten** entscheiden über die Reichweite (frühe Interaktion wichtig).

---

## 4. Links

### Instagram
- **Keine klickbaren Links in der Caption.** Konvention: **„Link in Bio"** (oder den Link als Klartext nennen — nicht klickbar). Für wechselnde Beiträge ggf. ein Bio-Link-Tool nutzen.

### LinkedIn
- **Externe Links im Post-Text kosten Reichweite** — je nach Quelle **~26–60 % weniger Reach**.
- Der alte Trick **„Link in den ersten Kommentar"** wird vom Algorithmus inzwischen **ebenfalls erkannt** und bringt kaum noch Vorteil.
- **Empfehlung / Abwägung:**
  - **Ziel = Blog-Traffic** → Link im Post lassen (klickbare Vorschau, etwas weniger Reach). Für ein kleines Unternehmen meist die richtige Wahl.
  - **Ziel = maximale Reichweite** → ohne Link posten und Interessierte im Kommentar/Profil weiterleiten.

---

## 5. Abgleich mit unserem Auto-Posting

Pipeline: `Dienstag-Publish → Deploy → Make-Webhook → LinkedIn (Link-Post) + Instagram (Foto-Post)`
(Code: `scripts/notify-social.mjs`, `scripts/generate-social-images.mjs`)

| Aspekt | Aktuell | Best Practice | To-do? |
|---|---|---|---|
| **IG-Bild** | 1080 × 1080 (1:1) JPEG | 1080 × 1350 (4:5) ist optimal | **optional**: auf 4:5 umstellen (Achtung: Landscape-Quellbilder werden stärker beschnitten) |
| **LinkedIn-Bild** | Link-Post → `og:image` der Seite | 1200 × 627 og:image | **prüfen**: og:image der News-Seiten = 1200 × ~630 ✓ |
| **Hashtags** | max. 5, in der Caption | 3–5 | ✓ umgesetzt |
| **Caption-Hook** | Titel als erste Zeile | Hook in erster Zeile ✓ | ok |
| **Caption-Text** | IG kompakt (Einstieg + 3 Bullets); LinkedIn länger (2–3 Absätze + bis 4 Bullets) | IG kurz, LinkedIn ~1'300+ | ✓ getrennte Captions |
| **IG-Link** | URL als Klartext in Caption | „Link in Bio" üblich | optional: Hinweis „Link in Bio" ergänzen |
| **LinkedIn-Link** | im Post-Text (klickbare Vorschau) | Reach-Penalty, aber gut für Traffic | bewusst so gelassen (Traffic-Ziel) |

### Offene Optimierungs-Ideen (nicht zwingend)
1. **IG-Bild auf 4:5 (1080 × 1350)** für mehr Feed-Fläche — nur sinnvoll, wenn die Quellbilder den Beschnitt vertragen.
2. **„Link in Bio"-Hinweis** in der IG-Caption (IG-Links sind nicht klickbar).
3. **Carousels** als Format mit dem höchsten Engagement im Hinterkopf behalten (manuell, nicht automatisierbar über diese Pipeline).

_Umgesetzt: Hashtags auf max. 5, getrennte (längere) LinkedIn-Caption._

---

## Quellen (Stand Juni 2026)

- Buffer — Instagram Post Size Guide 2026: https://buffer.com/resources/instagram-image-size/
- Hootsuite — Social media image sizes (Juni 2026): https://blog.hootsuite.com/social-media-image-sizes-guide/
- Foxy AI — Instagram Hashtag Strategy 2026: https://foxy.ai/academy/optimal-number-of-hashtags-how-many-should-i-use-on-instagram
- Letter Counter — Instagram Character Limit 2026: https://lettercounter.org/blog/instagram-character-limit-guide/
- ConnectSafely — LinkedIn Hashtags 2026: https://connectsafely.ai/articles/linkedin-hashtags
- ConnectSafely — Ideal LinkedIn Post Length 2026: https://connectsafely.ai/articles/ideal-linkedin-post-length-engagement-guide-2026
- Postiv AI — LinkedIn Post Specs 2026: https://postiv.ai/blog/linkedin-posts-specs
- LinkBoost — LinkedIn Algorithm 2026: https://www.linkboost.co/blog/linkedin-algorithm-2026-guide/
- LinkedIn Help — Image specs for Pages: https://www.linkedin.com/help/linkedin/answer/a563309/image-specifications-for-your-linkedin-pages-and-career-pages
