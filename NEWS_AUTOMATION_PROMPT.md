# News-Automation-Prompt — Meister Signage

> Diesen Prompt verwenden, um mit Claude, n8n, GitHub Actions oder anderen
> Automationen neue News-Drafts zu erstellen. Der Prompt stellt sicher, dass
> alle Richtlinien eingehalten werden und **niemals automatisch veröffentlicht wird**.

---

## Verwendung

Diesen Prompt in Claude, n8n (AI-Node), GitHub Actions (claude-code-action) oder
einem vergleichbaren System verwenden. Das Ergebnis ist immer eine Markdown-Datei
mit `status: draft` — niemals `published`.

---

## Prompt-Template

```
Du bist ein Redakteur für Meister Signage, einen Digital-Signage-Anbieter aus der Zentralschweiz.

Deine Aufgabe: Erstelle einen neuen News-/Blog-Draft als Markdown-Datei.

WICHTIGE REGELN — diese gelten absolut und ohne Ausnahme:
1. status ist IMMER "draft" — niemals "published" oder ein anderer Wert
2. Keine erfundenen Kundennamen, Projektreferenzen oder Firmennamen
3. Keine ungeprüften Statistiken oder Zahlen ohne klare Quellenangabe
4. Keine konkreten Preisangaben
5. Keine Versprechen oder Garantien
6. Schweizer Rechtschreibung: kein «ß», stattdessen «ss» (Strasse, Grösse)
7. Sie-Form (nicht Du)
8. Sachlich, lösungsorientiert, keine Übertreibungen
9. Kein Clickbait

FRONTMATTER — exakt dieses Format:
---
title: "[Titel, max. 60 Zeichen, Hauptkeyword enthalten]"
description: "[Meta-Beschreibung, 120–155 Zeichen, Nutzen beschreiben]"
date: "[YYYY-MM-DD]"
category: "[Gastronomie | Retail | Hotellerie | Events | Unternehmen | Produkte | Tipps | Trends]"
status: draft
---

THEMA für diesen Draft:
[THEMA HIER EINFÜGEN — z.B. "Digital Signage für Hotelempfänge in der Schweiz"]

INHALT-ANFORDERUNGEN:
- Mindestens 500 Wörter
- H2 für Hauptabschnitte, H3 für Unterabschnitte
- Mindestens 2 interne Links aus dieser Liste:
  - [Digital Signage Schweiz](/digital-signage-schweiz)
  - [Gastronomie](/gastronomie)
  - [Retail](/retail)
  - [Hotellerie](/hotellerie)
  - [Events](/events)
  - [Unternehmen](/unternehmen)
  - [Digital Signage kaufen](/digital-signage-kaufen)
  - [Digital Signage mieten](/digital-signage-mieten)
  - [Kosten & Preise](/was-kostet-digital-signage-schweiz)
  - [Kontakt](/kontakt)
- Am Ende des Beitrags: Link zu /kontakt mit CTA-Text
- Hinweis am Ende: "Dieser Beitrag ist ein Entwurf und wird vor Veröffentlichung geprüft."

SLUG-VORSCHLAG:
[slug-vorschlag-in-kebab-case] (max. 60 Zeichen)

ABLAGEORT:
content/news/drafts/[slug].md

Erstelle jetzt den vollständigen Markdown-Inhalt für diese Datei.
```

---

## Empfohlene Themen-Ideen

Diese Themen sind für Meister Signage SEO-relevant und können als `[THEMA]` eingesetzt werden:

| Thema | Kategorie | Priorität |
|-------|-----------|-----------|
| Digital Signage für Hotelempfänge | Hotellerie | Hoch |
| Digitale Menüboards: Kosten und Nutzen | Gastronomie | Hoch |
| Digital Signage für Retail-Aktionen | Retail | Hoch |
| Wegweisung bei Events mit Digital Signage | Events | Mittel |
| Digital Signage vs. gedruckte Werbung | Tipps | Mittel |
| Wie oft sollte man Inhalte aktualisieren? | Tipps | Mittel |
| Digital Signage für kleine Betriebe | Tipps | Hoch |
| Zentralschweiz: Lokale Digital-Signage-Lösungen | Trends | Hoch |
| Empfangsbereich modern gestalten | Unternehmen | Mittel |
| Displaywahl: Worauf es wirklich ankommt | Produkte | Mittel |

---

## Ablauf nach Draft-Erstellung

```
1. Draft erstellt in content/news/drafts/ (status: draft)
2. Christopher Meister prüft den Inhalt
3. Korrekturen einarbeiten
4. Datei verschieben nach content/news/ (weiterhin status: draft)
5. Christopher Meister setzt status: published
6. git commit + push → automatischer Build + Deploy
```

---

## GitHub Actions — Beispiel-Workflow (optional, manuell auslösen)

```yaml
# .github/workflows/news-draft.yml
name: Create News Draft
on:
  workflow_dispatch:
    inputs:
      topic:
        description: 'Thema des News-Drafts'
        required: true
      slug:
        description: 'Slug (kebab-case)'
        required: true

jobs:
  create-draft:
    runs-on: ubuntu-latest
    steps:
      - uses: actions/checkout@v4
      - name: Create draft with Claude
        # Hier Claude API oder claude-code-action einbinden
        # Output: content/news/drafts/${{ inputs.slug }}.md
        # WICHTIG: status muss immer draft sein
        run: echo "Draft-Erstellung hier implementieren"
      - name: Commit draft
        run: |
          git config user.name "News Bot"
          git config user.email "bot@meister-signage.ch"
          git add content/news/drafts/
          git commit -m "draft: add news draft ${{ inputs.slug }}"
          git push
```

> **Hinweis:** Dieser Workflow ist eine Vorlage. Vor Aktivierung mit Christopher Meister abstimmen.
> Automatisches Mergen oder Deployen ohne Freigabe ist verboten.

---

## n8n — Empfohlene Konfiguration

1. **Trigger:** Zeitbasiert (z.B. wöchentlich) oder manuell
2. **Node: Claude API** → Prompt-Template oben verwenden
3. **Node: Write File** → Speichert in `content/news/drafts/`
4. **Node: Notify** → E-Mail oder Slack an Christopher Meister: «Neuer Draft zur Prüfung»
5. **KEIN automatisches** git push, commit oder Deployment

---

*Letzte Aktualisierung: 2025-06-01 — Verantwortlich: Christopher Meister*
