export const RENTAL_TERMS = [1, 3, 6, 12] as const;
export type RentalTerm = (typeof RENTAL_TERMS)[number];

interface RentalPackage {
  model: string;
  size: string;
  spec: string;
  desc: string;
  imageSrc: string;
  badge?: string;
  monthlyPrices: Record<RentalTerm, number>;
}

export const RENTAL_PACKAGES: RentalPackage[] = [
  {
    model: "Spark 3", size: '32"', spec: "Full HD",
    desc: "Kompakt und präzise — ideal für Theken, Point-of-Sale und kleine Flächen.",
    imageSrc: "/images/products/Spark3-Design.webp",
    monthlyPrices: { 1: 419, 3: 229, 6: 159, 12: 119 },
  },
  {
    model: "Spark 4", size: '43"', spec: "4K UHD",
    desc: "Vielseitig und präsent — für Retail, Hotellerie und Gastronomie.",
    imageSrc: "/images/products/Spark4-Design.webp",
    monthlyPrices: { 1: 439, 3: 239, 6: 179, 12: 129 },
  },
  {
    model: "Spark 5", size: '50"', spec: "4K UHD", badge: "Beliebtestes Mietmodell",
    desc: "Grossflächig und dominant — perfekt für Events, Messen und grosse Räume.",
    imageSrc: "/images/products/Spark5-Design.webp",
    monthlyPrices: { 1: 459, 3: 259, 6: 189, 12: 139 },
  },
  {
    model: "Spark Q+", size: '33"', spec: "Full HD quadr.",
    desc: "Das quadratische Format für kreative Konzepte und besondere Inszenierungen.",
    imageSrc: "/images/products/SparkQ-Design.webp",
    monthlyPrices: { 1: 479, 3: 269, 6: 199, 12: 149 },
  },
];

export const MEISTER_RENTAL_DISPLAYS = [
  { model: 'Meister Signage 43″', size: '43″', monthlyPrices: { 1: 439, 3: 239, 6: 179, 12: 129 } },
  { model: 'Meister Signage 55″', size: '55″', monthlyPrices: { 1: 459, 3: 259, 6: 189, 12: 139 } },
];

export const MEISTER_DISPLAY_DETAILS = "4K UHD (3840 × 2160), 500 Nits, Android 14, 4 GB RAM und 64 GB Speicher. LCD im Format 16:9, ohne Touch, mit integrierten Lautsprechern (2 × 5 W).";
export const MEISTER_RENTAL_CONDITIONS = "Bereitstellung, Funktionsprüfung, kurze Einweisung und normale Reinigung inklusive. Displayständer optional CHF 50 pro Ständer und Monat. Lieferung, Montage vor Ort und Rückholung separat nach Absprache. Preise exkl. MWST.";

export const RENTAL_INCLUDED = ["Standardeinrichtung", "Software-Lizenz", "Wandhalterung"];
export const OPTIONAL_FLOOR_STAND_MONTHLY = 50;
export const RENTAL_FOOTNOTE = "Preise pro Display und Monat bei einer Laufzeit von 12 Monaten. Standardeinrichtung, Softwarelizenz und Wandhalterung inklusive.";

export const RENTAL_FAQS = [
  { question: "Was gilt für Rückgabe, Schäden und Verlängerung?", answer: "Rückgabetermin, Rückholung, Zustand bei Rückgabe, Umgang mit Schäden, allfällige Kaution und eine Verlängerung halten wir vor Mietbeginn schriftlich fest. Ein Monatsbetrag bedeutet keine freie monatliche Kündigung: Es gilt die vereinbarte Laufzeit. Ein vorzeitiger Wechsel oder Kauf wird gesondert vereinbart." },
  {
    question: "Was kostet die Display-Miete?",
    answer: "Die Spark-Displays mieten Sie bei einer Laufzeit von 12 Monaten ab CHF 119 pro Display und Monat. Standardeinrichtung, Softwarelizenz, Wandhalterung und persönliche Betreuung sind inklusive. Für 1, 3 oder 6 Monate gelten die Monatsraten in unserem Laufzeitvergleich. Lieferung auf Anfrage, Abholung möglich. Vor-Ort-Montage und Rückholung vereinbaren wir separat.",
  },
  {
    question: "Welche Displays können gemietet werden?",
    answer: "Unser Mietsortiment umfasst Spark 3, Spark 4, Spark 5 und Spark Q+, Meister Signage 43″ und 55″, die Meister Stele 55″ mit Touch im Hochformat sowie das akkubetriebene Meister Board 43″ mit 3’000 Nits. Die Meister-Displays haben feste Monatsstaffeln. Stele und Board offerieren wir auf Anfrage.",
  },
  {
    question: "Eignen sich Mietdisplays für Events?",
    answer: "Ja. Mietdisplays eignen sich für Messen, Tagungen, Anlässe und Pop-ups. Einsätze unter einem Monat offerieren wir auf Anfrage. Inhaltsvorbereitung, Lieferung, Aufbau und Rückholung können nach Absprache zusätzlich gebucht werden.",
  },
  {
    question: "Können Inhalte vorbereitet werden?",
    answer: "Ja. Auf Wunsch übernehmen wir die Vorbereitung der Inhalte — Templates, Texte, Bilder und Zeitpläne. Diese zusätzliche Leistung stimmen wir vorab mit Ihnen ab und weisen sie separat in der Offerte aus.",
  },
  {
    question: "Gibt es Unterstützung beim Aufbau?",
    answer: "Die Geräte werden vorbereitet; bei Spark ist eine Wandhalterung inklusive. Lieferung auf Anfrage, Abholung möglich. Montage und Inbetriebnahme vor Ort sowie Rückholung sind zusätzliche Leistungen nach Absprache. Der Aufwand richtet sich nach Einsatzort, Entfernung und Geräteanzahl.",
  },
  {
    question: "Wie kurzfristig sind Mietlösungen möglich?",
    answer: "Je nach Verfügbarkeit auch sehr kurzfristig. Für Events empfehlen wir, frühzeitig anzufragen, damit Inhalte, Layout und Lieferung in Ruhe vorbereitet werden können.",
  },
  {
    question: "Wie lange muss ich mindestens mieten?",
    answer: "Unsere Mietstaffel für Spark- und Meister-Signage-Displays bietet Laufzeiten von 1, 3, 6 und 12 Monaten. Der jeweilige Monatsbetrag gilt für die vereinbarte gesamte Laufzeit. Die beworbenen Ab-Preise beziehen sich auf 12 Monate. Kürzere Einsätze, zum Beispiel für Events, offerieren wir auf Anfrage.",
  },
  {
    question: "Was ist im Mietpreis enthalten?",
    answer: "Die Spark-Pakete enthalten Display, Standardeinrichtung, Softwarelizenz, Wandhalterung und persönliche Betreuung. Bei den Meister-Geräten sind Bereitstellung, Funktionsprüfung, kurze Einweisung und normale Reinigung inklusive. Software und Halterungen stimmen wir passend zum Einsatz ab. Ein Bodenständer kann optional für CHF 50 pro Monat dazugemietet werden. Lieferung, Vor-Ort-Montage, Rückholung und individuelle Inhaltserstellung erfolgen separat nach Absprache.",
  },
  {
    question: "Gibt es eine zusätzliche Einrichtungspauschale?",
    answer: "Nein. Die Bereitstellung ist in allen Mietpreisen enthalten. Bei Spark ist die Standardeinrichtung ebenfalls inklusive. Es fällt dafür keine separate Einrichtungspauschale an. Zusätzliche Leistungen wie Vor-Ort-Montage oder individuelle Inhaltserstellung vereinbaren wir vorab separat.",
  },
  {
    question: "Kann ich einen Bodenständer dazumieten?",
    answer: "Ja. Ein passender Bodenständer ist optional für CHF 50 pro Monat erhältlich. Dieser Aufpreis kommt zur Display-Miete hinzu. Bei Spark ist die Wandhalterung bereits im Mietpreis enthalten.",
  },
  {
    question: "Was kosten Meister Signage 43 und 55 Zoll zur Miete?",
    answer: "Meister Signage 43″ kostet bei 1, 3, 6 oder 12 Monaten Laufzeit jeweils CHF 439, 239, 179 oder 129 pro Monat. Meister Signage 55″ kostet entsprechend CHF 459, 259, 189 oder 139 pro Monat. Alle Preise exkl. MWST, Bereitstellung inklusive. Beide Modelle bieten 4K UHD, 500 Nits, Android 14, 4 GB RAM und 64 GB Speicher; sie haben keinen Touchscreen.",
  },
  {
    question: "Kann ich die Mietgeräte selbst transportieren?",
    answer: "Die Meister-Displays und das Meister Board 43″ können in einem geeigneten Pkw transportiert werden. Platzangebot, Verpackung und Ladungssicherung müssen passen. Die grosse, schwere Meister Stele 55″ benötigt einen geeigneten Transporter. Lieferung, Aufstellung und Rückholung offerieren wir separat; Zufahrt, Treppen, Lift und Personalbedarf klären wir vorab.",
  },
  {
    question: "Welche Helligkeit hat das Meister Board 43 Zoll?",
    answer: "Das akkubetriebene Meister Board 43″ hat eine Helligkeit von 3’000 Nits. Es ist ein digitaler Kundenstopper für wechselnde Standorte. Mietpreis und Mietdauer auf Anfrage. Akkulaufzeit und Eignung für den konkreten Aufstellort klären wir vor der Buchung.",
  },
  {
    question: "Kann ich später kaufen statt mieten?",
    answer: "Das kann individuell besprochen werden. Die Miete eignet sich auch gut, um Digital Signage zuerst im Alltag zu testen, bevor eine langfristige Kaufentscheidung getroffen wird.",
  },
];
