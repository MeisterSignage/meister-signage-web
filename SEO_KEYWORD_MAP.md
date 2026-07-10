# SEO & GEO Keyword Map – Meister Signage

Verbindliche Keyword-, Seiten- und Prompt-Struktur. **Vor jeder neuen SEO-Seite konsultieren.**
Ziel: keine Keyword-Kannibalisierung, klare Funnel-Zuordnung, Zitierfähigkeit in KI-Antworten (GEO).

> Stand: laufend gepflegt. Bildet den **Ist-Zustand** der live gebauten Seiten ab.
> Legende Funnel: **TOFU** = informierend (oberer Trichter) · **MOFU** = vergleichend ·
> **BOFU** = entscheidungs-/kaufnah. GEO-Prompt = typische Frage, mit der die Zielgruppe
> ein KI-System (ChatGPT/Perplexity/Gemini) zum Thema befragt.

---

## 1. Hauptthema

**Digital Signage Schweiz** (Fokusregion Zentralschweiz, Sitz Baar/Zug)

---

## 2. Seitenarchitektur (URL-Muster)

| Bereich | URL-Muster | Rendering |
|---------|-----------|-----------|
| Money Pages | `/<keyword>` (flach) | eigene `app/`-Route |
| Branchen | `/branchen/<slug>` | `app/branchen/[slug]` |
| Lösungen | `/loesungen/<slug>` | `app/loesungen/[slug]` |
| Städte (Lokal-SEO) | `/staedte/<slug>` | `app/staedte/[slug]` |
| Wissen (Ratgeber) | `/wissen/<slug>` | `app/wissen/[slug]` |
| News | `/news/<slug>` | `app/news/[slug]` |

**Wichtig:** Branchen liegen unter `/branchen/…`, **nicht** flach unter `/gastronomie`.
Neue Seiten dem passenden Muster zuordnen, nicht flach anlegen.

---

## 3. Money Pages (live)

| URL | Primäres Keyword | Suchintention | Funnel | GEO-Prompt (Beispiel) |
|-----|-----------------|---------------|--------|-----------------------|
| `/` | digital signage (Marke) | navigational | Einstieg | „Wer bietet Digital Signage in der Zentralschweiz?" |
| `/digital-signage-schweiz` | digital signage schweiz | kommerziell | MOFU | „Was ist Digital Signage und was kostet es in der Schweiz?" |
| `/digital-signage-kaufen` | digital signage kaufen | transaktional | **BOFU** | „Wo kann ich in der Schweiz Digital-Signage-Displays kaufen?" |
| `/digital-signage-mieten` | digital signage mieten | transaktional | **BOFU** | „Kann man Digital-Signage-Displays für Events mieten?" |
| `/was-kostet-digital-signage-schweiz` | digital signage kosten schweiz | kommerziell-vergleichend | MOFU | „Was kostet Digital Signage pro Bildschirm?" |
| `/digital-signage-anbieter-vergleich` | digital signage anbieter vergleich | kommerziell-vergleichend | MOFU | „Welcher Digital-Signage-Anbieter passt für ein KMU in der Schweiz?" |
| `/digital-signage-wie-red-bull` | digital signage wie red bull | informierend/inspiration | TOFU→MOFU | „Wie nutzt Red Bull Digital Signage am Verkaufspunkt?" |

---

## 4. Übersichts-/Hub-Seiten (live)

| URL | Primäres Keyword | Funnel | Rolle |
|-----|-----------------|--------|-------|
| `/branchen` | digital signage branchen | MOFU | Hub → verteilt auf Branchen-Cluster |
| `/loesungen` | digital signage lösungen | MOFU | Hub → verteilt auf Lösungs-Cluster |
| `/loesungen/displays` | digital signage displays | MOFU | Display-Typen-Übersicht |
| `/wissen` | digital signage ratgeber | TOFU | Hub → verteilt auf Wissen-Cluster |
| `/news` | digital signage news | TOFU | Editorial / Freshness |

---

## 5. Branchen-Cluster (live) – `/branchen/<slug>`

Alle MOFU (branchenspezifische Kaufabsicht). GEO-Prompt-Muster: „Digital Signage für &lt;Branche&gt; – was bringt das?"

| Slug | Primäres Keyword |
|------|-----------------|
| `gastronomie` | digital signage gastronomie |
| `hotellerie` | digital signage hotellerie |
| `retail` | digital signage retail / einzelhandel |
| `events` | digital signage events / messen |
| `gesundheit` | digital signage praxis / gesundheit |
| `unternehmen` | digital signage unternehmen / empfang |

---

## 6. Lösungs-Cluster (live) – `/loesungen/<slug>`

Produkt-/Lösungsseiten, überwiegend MOFU (Produktabsicht). GEO-Prompt-Muster:
„Wofür eignet sich &lt;Lösung&gt;?" / „Was kostet &lt;Lösung&gt;?"

| Slug | Primäres Keyword | Funnel |
|------|-----------------|--------|
| `software` | digital signage software | MOFU |
| `digitale-menueboards` | digitale menüboards | MOFU |
| `indoor-signage` | indoor signage | MOFU |
| `led-walls` | led wall / videowand | MOFU |
| `stretched-display` | stretched bar display | MOFU |
| `transparentes-display` | transparentes display | MOFU |
| `high-brightness-display` | high brightness display | MOFU |
| `doppelseitige-displays` | doppelseitige displays | MOFU |
| `mobile-displays` | mobile displays / akkubetrieben | MOFU |
| `digitale-infostele` | digitale infostele | MOFU |
| `interaktive-terminals-kiosks` | interaktive terminals / kiosk | MOFU |
| `digitaler-empfang` | digitaler empfang | MOFU |
| `empfangsdisplays` | empfangsdisplays | MOFU |
| `digitale-raumbeschilderung` | digitale raumbeschilderung | MOFU |
| `digitale-leitsysteme` | digitale leitsysteme | MOFU |
| `digitale-schaufensterwerbung` | digitale schaufensterwerbung / schaufenster-display | MOFU |
| `digitales-werbedisplay` | digitales werbedisplay | MOFU |
| `digitale-kundenstopper` | digitaler kundenstopper | MOFU |
| `event-displays` | event-displays mieten | **BOFU** |

---

## 7. Städte / Lokal-SEO (live) – `/staedte/<slug>`

Alle **BOFU** (hohe lokale Kaufabsicht). Keyword-Muster: „digital signage &lt;stadt&gt;".
GEO-Prompt-Muster: „Digital-Signage-Anbieter in &lt;Stadt&gt;?"

`aarau` · `baden` · `basel` · `bern` · `chur` · `luzern` · `olten` · `solothurn` ·
`st-gallen` · `winterthur` · `zuerich` · `zug`

> URL-Muster `/staedte/<slug>` beibehalten – Seiten sind indexiert. **Nicht** auf
> `/digital-signage-<stadt>` umbauen (12 Redirects, Ranking-Risiko).

---

## 8. Wissen-Cluster (live) – `/wissen/<slug>`

Alle **TOFU** (informierend). Zentrale GEO-/AI-Overview-Seiten – hier zählt der
Quick-Answer-Block in den ersten 40–60 Wörtern. Überschrift = Nutzerfrage.

| Slug | Primäres Keyword / Frage |
|------|--------------------------|
| `was-ist-digital-signage` | was ist digital signage |
| `digital-signage-software` | digital signage software erklärt |
| `digital-signage-mieten-oder-kaufen` | digital signage mieten oder kaufen |
| `digital-signage-vorteile-nachteile` | digital signage vorteile nachteile |
| `digital-signage-groesse-waehlen` | digital signage grösse / bildschirmgrösse |
| `digital-signage-nachhaltigkeit` | digital signage nachhaltigkeit |
| `digitale-menueboards` | was sind digitale menüboards |
| `digitale-leitsysteme` | was sind digitale leitsysteme |
| `digitale-kundenstopper` | was ist ein digitaler kundenstopper |
| `outdoor-displays` | outdoor displays digital signage |

---

## 9. Geplante Seiten / offene Content-Lücken

Echte Lücken (weder gebaut noch durch bestehende Seite abgedeckt):

| Geplante URL | Keyword | Funnel | Hinweis |
|--------------|---------|--------|---------|
| `/digital-signage-beispiele` | digital signage beispiele | TOFU | Referenz-/Use-Case-Seite, GEO-stark |
| `/digital-signage-kmu` | digital signage kmu | MOFU | Zielgruppen-Seite Kleinbetriebe |
| `/staedte/zentralschweiz` | digital signage zentralschweiz | BOFU | Regions-Dach über die Städte |

Vor dem Bau prüfen, ob eine bestehende Lösungs-/Branchenseite das Keyword bereits
abdeckt (Kannibalisierung vermeiden).

---

## 10. Interne Verlinkungsregeln

Jede Money Page verlinkt auf:
- `/kontakt`
- `/was-kostet-digital-signage-schweiz`
- eine passende Branchen- **oder** Lösungsseite

Zusätzlich:
- **Ankertext = beschreibendes Keyword** der Zielseite – niemals „hier klicken" / „mehr".
- Branchen-Hub ↔ passende Lösungsseiten gegenseitig verlinken (Themen-Autorität).
- Wissen-Artikel (TOFU) verlinken auf die passende Money-/Lösungsseite (BOFU) – Funnel schliessen.

---

## 11. Pflichtfelder für jede neue SEO-Seite

Keine neue SEO-Seite ohne:

**SEO**
- [ ] Zielkeyword (aus dieser Map – keine Dublette)
- [ ] Suchintention + Funnel-Stufe (TOFU/MOFU/BOFU)
- [ ] Meta Title
- [ ] Meta Description
- [ ] H1
- [ ] CTA
- [ ] Interne Links (siehe Kap. 10) mit beschreibendem Ankertext

**GEO / KI-Sichtbarkeit**
- [ ] Quick-Answer-Block: Kernaussage in den ersten 40–60 Wörtern
- [ ] mind. 1 Ziel-Prompt definiert (Kap. 3–8) und in ChatGPT/Perplexity gegengetestet
- [ ] Überschriften als Fragen, wo zur Suchintention passend (H2/H3)
- [ ] FAQ-Abschnitt + FAQPage-Schema
- [ ] passendes Schema (Article / Product / Service / LocalBusiness …)
- [ ] „Zuletzt aktualisiert"-Datum sichtbar (Freshness-Signal)
- [ ] konkrete Fakten statt Floskeln (Masse, Preise, Normen statt „hochwertig")

---

## 12. Pflege-Rhythmus

- **8–12-Wochen-Update-Zyklus** für Kernseiten (Content, Datum, Schema-Check).
- **Quartalsweise** Ziel-Prompts erneut in ChatGPT/Perplexity/Gemini testen (KI-Antworten
  ändern sich schneller als klassische Rankings) und Lücken hier als neue Zeilen ergänzen.
