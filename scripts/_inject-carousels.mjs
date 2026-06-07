/* One-off: inject authored `carousel:` sales-psychology copy into news frontmatter. */
import fs from "node:fs";
import path from "node:path";

const NEWS = path.join(process.cwd(), "content/news");

const COPY = {
  "digital-signage-events-tipps": {
    hook: "Ihr Messestand geht in der Halle unter?",
    hookSub: "Gedruckte Banner wirken statisch – und sind nach dem Event Abfall.",
    solution: "Digitale Displays, die Aufmerksamkeit ziehen – und wiederverwendbar sind.",
    solutionSub: "Agenda, Wegführung, Sponsoren – kurzfristig anpassbar, am Event und danach.",
    benefits: ["Mehr Blickfang als jedes Plakat", "Inhalte in Sekunden ändern – auch vor Ort", "Mieten statt kaufen für einmalige Anlässe"],
    cta: "Displays für Ihr nächstes Event?",
  },
  "digital-signage-hotellerie": {
    hook: "Empfang voller Aushänge und ausgedruckter Frühstückskarten?",
    hookSub: "Im kleinen Hotel wirkt das schnell unaufgeräumt – und kostet täglich Zeit.",
    solution: "Ein Display ersetzt Tafeln, Aushänge und Papierkarten.",
    solutionSub: "Begrüssung, Wegweisung, Tagesinfos – elegant an einem Ort.",
    benefits: ["Schon ab einem Display sinnvoll", "Gäste-Orientierung ohne Papierchaos", "Fügt sich ins Interieur statt aufzudrängen"],
    cta: "Empfangsdisplay fürs Hotel?",
  },
  "digital-signage-kmu": {
    hook: "Denken Sie, Digital Signage lohnt sich nur für grosse Ketten?",
    hookSub: "Zu teuer, zu kompliziert, zu viel Aufwand – die häufigsten Irrtümer.",
    solution: "Ein einziges Display bringt schon spürbaren Mehrwert.",
    solutionSub: "Richtig eingesetzt rechnet es sich auch für kleine Betriebe.",
    benefits: ["Einstieg ab einem Bildschirm", "Kein IT-Team nötig – Cloud-gesteuert", "Kauf oder Miete – planbar fürs Budget"],
    cta: "Mit einem Display starten?",
  },
  "digital-signage-kosten-schweiz": {
    hook: "Hardware ab CHF 999 – und dann?",
    hookSub: "Lizenz, Installation, Support: Posten, die in vielen Erstangeboten fehlen.",
    solution: "Transparente Gesamtkosten – ohne böse Überraschungen.",
    solutionSub: "Wir zeigen, was wirklich auf Sie zukommt, bevor Sie unterschreiben.",
    benefits: ["Alle Kostenpositionen offen auf dem Tisch", "Kauf oder Miete – klar kalkuliert", "Keine versteckten Lizenz- oder Supportgebühren"],
    cta: "Ehrliche Kostenübersicht?",
  },
  "digital-signage-mieten-oder-kaufen": {
    hook: "Digital Signage mieten oder kaufen?",
    hookSub: "Die falsche Wahl kostet schnell mehrere hundert Franken im Jahr.",
    solution: "Die richtige Entscheidung hängt von Ihrem Einsatz ab – wir helfen.",
    solutionSub: "Dauerhaft spricht für Kauf, temporär für Miete. Der Teufel liegt im Detail.",
    benefits: ["Kauf: günstiger auf Dauer", "Miete: flexibel, planbar, inkl. Service", "Beratung anhand echter KMU-Fälle"],
    cta: "Mieten oder kaufen – was passt?",
  },
  "digital-signage-retail": {
    hook: "Verbringen Sie die Sale-Saison wieder mit Plakatdruck?",
    hookSub: "Frühling, SSV, Black Friday, Weihnachten – jede Aktion neu drucken und aufhängen.",
    solution: "Das ganze Marketingjahr einmal planen – Displays übernehmen den Rest.",
    solutionSub: "Inhalte hochladen, Zeitfenster setzen, fertig.",
    benefits: ["Keine Plakatdruck-Logistik mehr", "Aktionen pünktlich, automatisch ausgespielt", "Mehr Aufmerksamkeit am Point of Sale"],
    cta: "Sale-Saison digital planen?",
  },
  "digitales-menueboard-vorteile": {
    hook: "Digitales Menüboard – und trotzdem keine Wirkung?",
    hookSub: "Fünf typische Setup-Fehler kosten Lesbarkeit und Aufmerksamkeit.",
    solution: "Richtig aufgesetzt schlägt ein Menüboard jede gedruckte Karte.",
    solutionSub: "Grösse, Kontrast, Schrift – wir machen es von Anfang an richtig.",
    benefits: ["Lesbar aus der richtigen Distanz", "Klare Hierarchie statt Textwüste", "Tagesaktuell in Sekunden"],
    cta: "Menüboard richtig aufsetzen?",
  },
  "spark-sortiment-vergleich": {
    hook: "Welches Display passt zu Ihrem Betrieb?",
    hookSub: "32, 43, 50 Zoll oder quadratisch – die Wahl entscheidet über die Wirkung.",
    solution: "Vier Spark-Modelle für die häufigsten Einsätze – klar verglichen.",
    solutionSub: "Vom kompakten Menüboard bis zur Spezialinstallation.",
    benefits: ["Spark 3: kompakt für Theke & POS", "Spark 4: 4K-Bestseller für mittlere Räume", "Spark 5: 50 Zoll für Schaufenster & Lobby"],
    cta: "Das passende Modell finden?",
  },
  "spark3-kompaktes-display": {
    hook: "Grosser Bildschirm für eine kleine Theke?",
    hookSub: "Oft Overkill – 32 Zoll reichen, wenn die Qualität stimmt.",
    solution: "Spark 3: das 32-Zoll-Profi-Display ab CHF 1.299.",
    solutionSub: "Hinter der Theke, neben der Kasse, im Eingang – kompakt und stark.",
    benefits: ["Profi-Features im Einstiegsmodell", "24/7-Dauerbetrieb spezifiziert", "Cloud-gesteuert, kein externer Player"],
    cta: "Kompakt einsteigen mit Spark 3?",
  },
  "spark4-vielseitiger-bestseller": {
    hook: "Zu klein wirkt verloren, zu gross sprengt den Raum?",
    hookSub: "Bei der Display-Grösse entscheidet der Sweet Spot.",
    solution: "Spark 4: 43 Zoll in 4K – unser meistverkauftes Modell.",
    solutionSub: "Gross genug für Wirkung, kompakt genug für die meisten Räume.",
    benefits: ["4K – scharf auch aus der Nähe", "Vielseitig für Gastro, Retail & Empfang", "Inhalte von überall zentral steuern"],
    cta: "Mit dem Bestseller starten?",
  },
  "sparkq-quadratisches-display": {
    hook: "Standard-Bildschirm im Querformat – schon wieder?",
    hookSub: "Nicht jeder Inhalt und nicht jeder Raum passt ins 16:9-Raster.",
    solution: "Spark Q+: 33 Zoll quadratisch für kreative Installationen.",
    solutionSub: "Gestalterische Freiheit, die im Markt selten ist.",
    benefits: ["Quadratisches Format als Hingucker", "Ideal für Concept Stores & Design-Empfänge", "Wirkungsvoll in Raster-Installationen"],
    cta: "Kreativ auffallen mit Spark Q+?",
  },
  "spark5-neues-modell": {
    hook: "Soll Ihr Schaufenster auch aus Distanz wirken?",
    hookSub: "Kleine Displays gehen in grossen Flächen schnell unter.",
    solution: "Spark 5: 50 Zoll in 4K für Schaufenster & Empfangshallen.",
    solutionSub: "Maximale Präsenz, wo Wirkung über Distanz entscheidet.",
    benefits: ["50 Zoll 4K – dominiert Schaufenster & Lobby", "24/7-Dauerbetrieb, auch im Dauereinsatz", "15.5 mm flach – wirkt wie ein gerahmtes Bild"],
    cta: "Grossflächig auffallen mit Spark 5?",
  },
  "was-ist-digital-signage": {
    hook: "Digital Signage – 2026 nicht mehr, was es mal war?",
    hookSub: "Einstieg, Installation und Risiko haben sich grundlegend verändert.",
    solution: "Fünf Trends, die den Einstieg für KMU einfacher machen.",
    solutionSub: "Günstiger, einfacher und risikoärmer als noch vor wenigen Jahren.",
    benefits: ["Einstieg ist deutlich günstiger", "Installation ohne grossen Aufwand", "Risiko niedrig dank Miete & Service"],
    cta: "2026 einsteigen?",
  },
};

function yaml(copy) {
  const q = (s) => JSON.stringify(s);
  const lines = [
    "carousel:",
    `  hook: ${q(copy.hook)}`,
    `  hookSub: ${q(copy.hookSub)}`,
    `  solution: ${q(copy.solution)}`,
    `  solutionSub: ${q(copy.solutionSub)}`,
    "  benefits:",
    ...copy.benefits.map((b) => `    - ${q(b)}`),
    `  cta: ${q(copy.cta)}`,
  ];
  return lines.join("\n");
}

let done = 0;
for (const file of fs.readdirSync(NEWS).filter((f) => f.endsWith(".md"))) {
  const slug = file.replace(/\.md$/, "");
  const copy = COPY[slug];
  if (!copy) continue;
  const full = path.join(NEWS, file);
  const raw = fs.readFileSync(full, "utf8");
  if (/^carousel:/m.test(raw)) {
    console.log(`= ${slug} (schon vorhanden)`);
    continue;
  }
  // Insert at the end of the frontmatter block (before the closing ---).
  const updated = raw.replace(/^(---\n[\s\S]*?)\n---/, (_m, fm) => `${fm}\n${yaml(copy)}\n---`);
  if (updated === raw) {
    console.log(`! ${slug} (Frontmatter nicht gefunden)`);
    continue;
  }
  fs.writeFileSync(full, updated, "utf8");
  console.log(`+ ${slug}`);
  done++;
}
console.log(`\n${done} Beiträge mit carousel-Copy ergänzt.`);
