# News-Richtlinien — Meister Signage

> Verbindliche Redaktions- und Prozessregeln für alle News-/Blog-Beiträge.
> Gilt für menschliche Redakteure und KI-Agenten gleichermassen.

---

## 1. Tonalität

- **Sachlich und konkret** — keine leeren Marketingfloskeln
- **Lösungsorientiert** — immer aus Kundenperspektive denken
- **Nahbar und direkt** — persönlich, aber professionell
- **Keine Übertreibungen** — kein «revolutionär», «bahnbrechend», «einzigartig»
- **Sie-Form** — Leser werden gesiezt (ausser bei expliziter Ausnahme)
- **Schweizer Rechtschreibung** — kein «ß», stattdessen «ss» (z.B. «Strasse», «Grösse»)
- Kurze Sätze bevorzugen — max. 20 Wörter pro Satz als Faustregel
- Absätze: max. 3–4 Sätze

Meister-Signage-Stimme:
> «Wir erklären, was wir tun — verständlich, ohne technisches Imponiergehabe.»

---

## 2. Themenbereiche

Erlaubte Themen (priorisiert nach SEO-Wert):

| Bereich | Beispielthemen |
|---------|----------------|
| **Digital Signage Grundlagen** | Was ist Digital Signage, wie funktioniert es, was kostet es |
| **Branchen-Anwendungen** | Gastronomie, Retail, Hotellerie, Events, Unternehmen |
| **Produkte & Hardware** | Neue Modelle, Vergleiche, Einsatzbereiche |
| **Tipps & Anleitungen** | Content-Pflege, Displaywahl, Inhaltsgestaltung |
| **Trends & Markt** | Entwicklungen in der Schweiz und Europa |
| **Praxis-Einblicke** | Allgemeine Einsatzszenarien (keine ungeprüften Kundennamen) |
| **Lokale Relevanz** | Zentralschweiz, Luzern, Baar, Schweizweite Themen |

Nicht erlaubt:
- Politische Kommentare
- Branchenfremde Themen
- Werbung für Drittanbieter ohne Freigabe
- Ungeprüfte Statistiken oder Studien ohne Quellenangabe

---

## 3. SEO-Regeln

### Slug
- Kebab-case, Deutsch, beschreibend
- Kein Datum im Slug (ausser thematisch sinnvoll)
- Max. 60 Zeichen
- Beispiel: `digital-signage-gastronomie-tipps`

### Titel (`title`)
- Max. 60 Zeichen
- Enthält das Hauptkeyword
- Kein Clickbait
- Schweizer Schreibweise

### Beschreibung (`description`)
- 120–155 Zeichen
- Ergänzt den Titel, wiederholt ihn nicht
- Enthält Nutzen oder Kontext

### Keyword-Integration
- 1 Hauptkeyword pro Artikel (aus `SEO_KEYWORD_MAP.md` wählen)
- Keyword im Titel, in der ersten H2 und im ersten Absatz
- Keyword-Dichte: organisch, keine Stuffing
- Synonyme und Varianten verwenden

### Inhaltslänge
- Minimum: 400 Wörter
- Standard: 600–900 Wörter
- Tiefgehende Guides: 1000–1500 Wörter

### Struktur
- H2 für Hauptabschnitte
- H3 für Unterabschnitte
- Aufzählungen statt langer Fliesstext-Passagen

---

## 4. Interne Verlinkungsregeln

Jeder Beitrag enthält mindestens **2 interne Links**:

| Linkziel | Wann verlinken |
|----------|----------------|
| `/digital-signage-schweiz` | Bei allgemeinen Digital-Signage-Themen |
| `/gastronomie` | Bei Gastronomie-Inhalten |
| `/retail` | Bei Retail-/Handelsinhalten |
| `/hotellerie` | Bei Hotel-/Empfangsthemen |
| `/events` | Bei Event-Inhalten |
| `/unternehmen` | Bei Unternehmens-/Office-Themen |
| `/digital-signage-kaufen` | Bei Kaufthemen |
| `/digital-signage-mieten` | Bei Miet-/temporären Themen |
| `/was-kostet-digital-signage-schweiz` | Bei Kostenthemen |
| `/kontakt` | Am Ende jedes Beitrags als CTA |

**Regel:** Keine erfundenen Anker-Texte — Link-Text muss beschreiben, wohin er führt.

---

## 5. Frontmatter-Schema

Jeder Beitrag beginnt mit:

```yaml
---
title: "Titel des Beitrags"
description: "Meta-Beschreibung, 120–155 Zeichen."
date: "YYYY-MM-DD"
category: "Gastronomie | Retail | Hotellerie | Events | Unternehmen | Produkte | Tipps | Trends"
image: "/images/news/dateiname.webp"   # optional, falls Bild vorhanden
status: draft                           # IMMER draft — nie direkt published setzen
---
```

**Pflichtfelder:** `title`, `description`, `date`, `status`
**Optionale Felder:** `category`, `image`

---

## 6. Bildregeln

- Format: WebP, max. 200 KB
- Ablage: `public/images/news/`
- Dateiname: `lowercase-kebab-case.webp`
- Verhältnis: 16:9 (empfohlen) oder 4:3
- Alt-Text: im `image`-Feld oder im Artikel als `![Alt-Text](pfad)`
- **Keine Stock-Fotos mit sichtbaren Wasserzeichen**
- **Keine Fotos erkennbarer Personen ohne Einwilligung**

---

## 7. Was NIE in einen Beitrag darf

- ❌ Erfundene Kundennamen oder Projekte ohne Freigabe
- ❌ Ungeprüfte Zahlen («80% der Betriebe...» ohne Quelle)
- ❌ Konkrete Preise ohne Abstimmung mit Christopher Meister
- ❌ Versprechen oder Garantien
- ❌ Vergleiche mit Mitbewerbern (namentlich)
- ❌ Politische oder religiöse Aussagen
- ❌ Automatisch auf `status: published` setzen

---

## 8. Freigabeprozess

```
1. Draft erstellen → status: draft
2. Christopher Meister liest und prüft
3. Korrekturen einarbeiten
4. Christopher Meister setzt status: published
5. git commit + push → automatischer Build + Deploy
```

**Keine Ausnahmen.** KI-Agenten und Automationen dürfen `status` niemals auf `published` setzen.

Ein Beitrag ist erst live, wenn `status: published` in der Markdown-Datei gesetzt ist.

---

## 9. Qualitäts-Checkliste vor Freigabe

- [ ] Frontmatter vollständig und korrekt
- [ ] Status ist `draft` (Christopher setzt es auf `published`)
- [ ] Slug ist einzigartig und aussagekräftig
- [ ] Titel < 60 Zeichen
- [ ] Description 120–155 Zeichen
- [ ] Mindestens 2 interne Links
- [ ] Link zu `/kontakt` am Ende
- [ ] Schweizer Schreibweise geprüft
- [ ] Keine erfundenen Fakten
- [ ] Kein Clickbait
- [ ] Mindestens 400 Wörter Inhalt

---

## 10. Dateiablage

| Typ | Ordner |
|-----|--------|
| Fertige Drafts (bereit zur Prüfung) | `content/news/` |
| Rohe KI-Entwürfe (noch nicht zur Prüfung) | `content/news/drafts/` |
| Bilder | `public/images/news/` |

Sobald ein Draft in `content/news/drafts/` geprüft und bereinigt ist, wird er nach `content/news/` verschoben — **immer mit `status: draft`**.
