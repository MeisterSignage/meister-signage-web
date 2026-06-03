# Meister Signage — Design Rules

> Verbindliche Gestaltungs- und Code-Richtlinie für alle Seiten und Komponenten.
> Coding-Agents müssen diese Datei lesen, bevor sie neue Seiten oder Komponenten erstellen.

---

## 1. Seitenstruktur

Jede neue Seite wird ausschliesslich aus bestehenden Section-Komponenten aus `components/sections/` aufgebaut.
Keine frei erfundenen Layouts direkt in `page.tsx`.

## 2. Styles

Neue Styles nur über:
- `app/globals.css` (Design-Klassen und Tokens)
- `lib/design-tokens.ts` (Referenz-Werte)
- Bestehende Komponenten

Keine zufälligen Einzelklassen ohne System. Keine Inline-Styles (`style={{}}`).

## 3. Section-Inhalt

Jede neue Section braucht:
- Eyebrow-Label (`.eyebrow`)
- Headline (H2)
- Kurzen Leadtext
- Klaren CTA oder klaren Nutzen

## 4. Headlines

- H1 nur **einmal** pro Seite
- H2 für Section-Überschriften
- H3 für Card-Titel (via `.card-title`)
- **Jede H1/H2 Section-Headline MUSS `.heading-max-2` verwenden**
- Desktop maximal **2 Zeilen** — Tablet maximal 3 Zeilen — Mobile natürlicher Umbruch
- Keine lokalen `max-w-*` Klassen direkt auf H1/H2 setzen — Breite nur über `.heading-max-2`
- Kein Editorial-/Fashion-Magazin-Look, keine 4-zeiligen Headlines
- Hero-Headline: zusätzlich `.hero-title` (grosse, leichte Schrift)
- Section-Header-Block: `.section-header` wrappen (max-w 64rem)

## 5. Cards

Alle Cards verwenden:

```tsx
<div className="card card-hover ...">
  <p className="card-title">{title}</p>
  <p className="card-body">{description}</p>
</div>
```

- Gleicher Border: `var(--border-subtle)`
- Gleicher Hover: `.card-hover`
- Gleiche Padding-Basis: `.card` (1.25rem / 1.5rem)
- Gleiche Typografie: `.card-title` + `.card-body`

## 6. Buttons

| Typ | Verwendung | Klasse |
|-----|------------|--------|
| Primary | Standard-CTA | `.btn-primary` |
| Secondary | Zweite Option / Outline | `.btn-secondary` |

- **Nur zwei Varianten — kein `.btn-ghost` oder eigene Button-Stile**
- Primary: Magenta Fläche, weisse Schrift, Hover `#d9007c`
- Secondary: weisser Hintergrund, Magenta Border/Schrift, Hover füllt Magenta
- Keine lokalen Farbklassen auf `<a>`- oder `<button>`-Elementen
- Maximal 1 primärer CTA pro Section

## 7. Farben

Nur folgende Farben verwenden:

| Token | Wert | Verwendung |
|-------|------|------------|
| `--navy` | `#1a2744` | Texte, Überschriften, Hintergründe |
| `--magenta` | `#fe019a` | CTAs, Hover, Fokus, Akzentlinien |
| `--gold` | `#C9A84C` | Eyebrows, Linien, Nummern, Labels |
| `--offwhite` | `#f5f5f7` | Section-Hintergründe (alternierend) |
| `--cgray` | `#6B7280` | Body-Text, Beschreibungen |
| White | `#ffffff` | Card-Hintergründe |

- **Magenta** sparsam für CTA, Hover, Fokus-Akzente
- **Gold** nur für Labels, Linien, Nummern, kleine Akzente
- Keine anderen Farben ohne explizite Freigabe

## 8. Section-Abstände

Standard-Section: `.section-inner` (py-14/py-20)
Kompakte Section: `.section-inner-compact` (py-10/py-14)
Hero: darf grosszügiger sein

Sections alternieren: `bg-offwhite` ↔ `bg-white`

## 9. Bilder

- Immer in `public/images/`
- Dateinamen: `lowercase-kebab-case.webp`
- WebP bevorzugen, PNG nur wenn nötig
- Alt-Text zwingend — immer aussagekräftig
- Keine verzerrten Bilder
- Bilder vor Upload komprimieren (Ziel: <200 KB)
- Verhältnis definieren und einhalten

## 10. SEO

Jede Seite braucht:
- Genau eine H1
- `title` (eindeutig, <60 Zeichen)
- `description` (eindeutig, <160 Zeichen)
- Sprechende URL (kebab-case, Deutsch)
- Interne Links zu verwandten Seiten
- Open Graph Bild
- Canonical URL
- FAQ-Section wenn sinnvoll

## 11. Accessibility

- Alle Buttons und Links: klare `aria-label`-Attribute
- Alt-Texte bei allen Bildern
- Fokus-Stati NICHT entfernen
- Kontrast: mindestens 4.5:1
- Semantisches HTML (`<nav>`, `<main>`, `<section>`, `<article>`)
- Tastaturbedienung vollständig

## 12. Design-Verbote

Ohne explizite Freigabe verboten:
- Gradients
- Glassmorphism
- Grosse Box-Shadows
- Emojis in UI-Texten
- Zufällige Animationen
- Neue Farben
- Neue Button-Stile
- Neue Typografie-Ebenen

## 13. Vor jedem Push

1. `npm run build` — muss fehlerfrei sein
2. Seite visuell prüfen
3. Mobile prüfen (min. 375px Breite)
4. Kein horizontaler Scrollbalken

## 14. Coding-Agent-Regel

Jeder Coding-Agent muss:
1. `DESIGN_RULES.md` lesen (diese Datei)
2. Bestehende Komponenten lesen, bevor er neue baut
3. Keine Design-Änderungen ohne explizite Anweisung
4. Nie direkt deployen — Workflow: Entwurf → Build → Vorschau → Freigabe → Deploy

## 15. Content-Modell

- Seiteninhalte in `data/`-Dateien oder Content-Objekten in `page.tsx`
- Keine fixen Texte in Komponenten
- Komponenten sind generisch und wiederverwendbar

## 16. Ordnerstruktur

```
components/
  layout/      — Layout-Wrapper (Header, Footer, Nav)
  sections/    — Wiederverwendbare Section-Blöcke
  ui/          — Atomare UI-Elemente
lib/           — Utilities, Design-Tokens
data/          — Content-Dateien (kebab-case.ts)
public/
  images/      — Alle Bilder (lowercase-kebab-case)
app/           — Next.js App Router: Seiten + globals.css
```

## 17. Naming

| Typ | Format | Beispiel |
|-----|--------|---------|
| React-Komponenten | PascalCase.tsx | `HeroSection.tsx` |
| Daten-Dateien | kebab-case.ts | `industry-data.ts` |
| Bilder | lowercase-kebab-case | `chris-meister.webp` |
| CSS-Klassen | kebab-case | `.btn-primary` |

## 18. SEO-Standard

Jede Seite exportiert ein `metadata`-Objekt:

```ts
export const metadata: Metadata = {
  title: "Eindeutiger Seitentitel – Meister Signage",
  description: "Eindeutige Meta-Beschreibung unter 160 Zeichen.",
  openGraph: { ... },
};
```

## 19. Schema.org

Für relevante Seiten vorbereiten:
- `LocalBusiness` / `Organization` (Homepage)
- `Service` (Lösungsseiten)
- `FAQPage` (FAQ-Sections)
- `BreadcrumbList` (alle Unterseiten)

## 20. Performance-Ziele

- Bilder <200 KB, WebP-Format
- Keine unnötigen Libraries
- Keine Animationen ohne Nutzen
- Lighthouse-Ziel: 90+ in allen Kategorien

## 21. Formulare

- Spam-Schutz (Honeypot oder reCAPTCHA)
- Klare Erfolgsmeldung nach Absenden
- Fehlerzustände für alle Felder definiert
- DSGVO/DSG-konforme Hinweise

## 22. Deployment-Workflow

```
Entwurf → npm run build → Vorschau → Freigabe → git push → Deploy
```

KI-Agent darf nie ohne Freigabe in Produktion deployen.

## 23. Versionierung

- Keine grossen Änderungen ohne Commit-Kommentar
- Feature-Branches für grössere Änderungen: `git checkout -b feature/name`
- Commit-Messages: aussagekräftig, auf Englisch

## 24. Test-Checkliste vor Launch

- [ ] Desktop (1280px+)
- [ ] Tablet (768px)
- [ ] Mobile (375px)
- [ ] Navigation: alle Links korrekt
- [ ] Buttons: alle CTAs führen wohin
- [ ] Formulare: Absenden + Fehlerzustände
- [ ] SEO-Metadaten vorhanden
- [ ] Ladezeit akzeptabel
- [ ] Kein horizontaler Scrollbalken
- [ ] Bilder mit Alt-Text

## 25. Redaktionelle Regel

Jede Seite muss beantworten:
1. Für wen ist das?
2. Welches Problem löst es?
3. Was ist der Nutzen?
4. Warum Meister Signage?
5. Was ist der nächste Schritt?

## 26. Responsive Design

- Mobile First entwickeln
- Keine Desktop-only Layouts
- Jede Section funktioniert auf 375px / 768px / 1280px
- Kein Element wird auf kleinen Screens abgeschnitten

## 27. Maximale Breiten

| Bereich | Klasse / Wert |
|---------|---------------|
| Content | `max-w-content` (1200px) |
| Section-Header | `.section-header` (64rem) |
| Prose / Text | `max-w-prose` (640px) |
| **H1/H2 Headlines** | **`.heading-max-2` (16ch Desktop / 20ch Tablet)** |

## 28. Icon-System

Ausschliesslich `lucide-react`:

```tsx
<Icon className="h-5 w-5 text-navy" strokeWidth={1.5} />
```

- `strokeWidth={1.5}` überall
- Grössen: `h-4 w-4` (klein), `h-5 w-5` (standard), `h-6 w-6` (gross)
- Farbe über `text-*`-Klassen

## 29. Animationen

Erlaubt:
- `translateY` (max. 2–4px, Hover)
- `scale` (max. 0.98–1.05, Hover/Active)
- `opacity` (Fade-in)
- Timing: `var(--transition-base)` = 200ms ease

Verboten:
- Bouncing, Spinning, Flashy Animations
- CSS-Animationen ohne Nutzen für UX

## 30. CTA-Hierarchie

Pro Section: maximal 1 primärer CTA (`.btn-primary`).
Sekundäre CTAs (`.btn-secondary`) nur unterstützend.

## 31. Grid-System

```tsx
/* 3-spaltig */
<div className="card-grid card-grid-3">

/* 4-spaltig */
<div className="card-grid card-grid-4">
```

- Gap: immer `gap-4` (1rem)
- Kein abweichendes Gap ohne Begründung

## 32. Z-Index

| Element | Variable | Wert |
|---------|----------|------|
| Dropdown | `--z-dropdown` | 10 |
| Mobile Menu | `--z-mobile-menu` | 40 |
| Header | `--z-header` | 50 |
| Floating Icons | `--z-floating` | 50 |
| Modal | `--z-modal` | 100 |

## 33. Bilder-Standards

- Verhältnis für Hero: 4:3 oder 3:2
- Verhältnis für Cards: 16:9 oder quadratisch
- `object-cover` für alle Bilder mit fester Höhe
- `object-top` bei Personenfotos

## 34. Accessibility (Detail)

- `<button>` nur für Aktionen, `<a>` für Navigation
- `aria-label` bei Icons ohne sichtbaren Text
- `role="list"` bei `<ul>` ohne Default-Styling
- Fokus-Outline nicht mit `outline: none` entfernen

## 35. Page-Templates

Für neue Seiten eines dieser Templates verwenden:

| Template | Verwendung |
|----------|------------|
| Landingpage | Homepage, Kampagnenseiten |
| Branchenpage | Gastronomie, Retail, Hotellerie etc. |
| Lösungsseite | Kaufen, Mieten |
| Kontaktseite | Kontakt |
| Local SEO Page | Standortseiten |

Aufbau: Hero → Problem/Lösung → Benefits → Prozess → Proof → FAQ → CTA → Kontakt

## 36. Design-Lock für Agents

KI-Agenten dürfen **ohne explizite Freigabe**:

✅ Inhalte ändern (Texte, Daten)
✅ Cards hinzufügen
✅ Neue Seiten nach bestehendem Template bauen
✅ Bestehende Komponenten verwenden

❌ Designsystem ändern (`globals.css`)
❌ Farben ändern oder neue hinzufügen
❌ Neue Button-Stile erfinden
❌ Neue Typografie-Ebenen einführen
❌ Eigene Animations-Systeme bauen

## 37. Content-Stil

Texte immer:
- Sachlich und konkret
- Lösungsorientiert, nicht marketinglastig
- Keine Buzzwords, keine Übertreibungen
- Schweizer Rechtschreibung (kein «ss», «ss» stattdessen)
- Du-Anrede nur wenn explizit gewünscht, sonst Sie-Form

## 38. Komponenten-Dokumentation

Jede neue Komponente dokumentiert:

```tsx
/**
 * HeroSection — Einstiegsbereich mit Headline, Bullets und Bild
 * Props: eyebrow, title, subtitle, bullets, primaryCta, secondaryCta, imageSrc
 * Varianten: mit Bild / ohne Bild (Placeholder)
 */
```

## 39. Error-States

Jede Komponente definiert Fallbacks für:
- Kein Bild → visueller Placeholder
- Keine Daten → keine leeren Sections rendern
- Fehlender Text → Prop ist optional, keine broken UI

## 40. Dark Mode

Dark Mode ist **deaktiviert**:

```css
html { color-scheme: only light; }
```

Kein `dark:` Tailwind-Präfix verwenden. Kein automatisches Browser-Theming.

---

## 41. News-/Blog-Beiträge

News-Beiträge liegen als Markdown-Dateien in `content/news/`.

**Veröffentlichungsregel — absolut und ohne Ausnahme:**
Ein Beitrag ist erst öffentlich sichtbar, wenn im Frontmatter `status: published` steht.
`status: draft` bedeutet: der Beitrag existiert im Repository, wird aber **nicht** gebaut und **nicht** angezeigt.

```yaml
status: draft      # → unsichtbar, nicht im Build
status: published  # → sichtbar, wird gebaut und deployt
```

**KI-Agenten und Automationen dürfen `status` niemals auf `published` setzen.**
Das Setzen von `status: published` ist ausschliesslich Aufgabe von Christopher Meister.

Rohe KI-Entwürfe kommen zuerst in `content/news/drafts/` und werden erst nach
manueller Prüfung nach `content/news/` verschoben — weiterhin mit `status: draft`.

Weitere Regeln: `content/news/NEWS_GUIDELINES.md`
