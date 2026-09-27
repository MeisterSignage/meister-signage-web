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

export const RENTAL_INCLUDED = ["Standardeinrichtung", "Software-Lizenz", "Wandhalterung"];
export const OPTIONAL_FLOOR_STAND_MONTHLY = 50;
export const RENTAL_FOOTNOTE = "Preise pro Display und Monat bei einer Laufzeit von 12 Monaten. Standardeinrichtung, Softwarelizenz und Wandhalterung inklusive.";

export const RENTAL_FAQS = [
  {
    question: "Was kostet die Display-Miete?",
    answer: "Die Spark-Displays mieten Sie bei einer Laufzeit von 12 Monaten ab CHF 119 pro Display und Monat. Standardeinrichtung, Softwarelizenz, Wandhalterung und persönliche Betreuung sind inklusive. Für 1, 3 oder 6 Monate gelten die Monatsraten in unserem Laufzeitvergleich. Lieferung auf Anfrage, Abholung möglich. Vor-Ort-Montage und Rückholung vereinbaren wir separat.",
  },
  {
    question: "Welche Displays können gemietet werden?",
    answer: "Neben den Spark-Displays können digitale Stelen, Battery-Boards, mobile Displays, doppelseitige Displays, Eventdisplays, Menüboards, Empfangsdisplays und digitale Leitsysteme gemietet werden. Stelen und Battery-Boards offerieren wir auf Anfrage. Gemeinsam wählen wir das passende Format.",
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
    answer: "Die Geräte werden vorkonfiguriert; eine Wandhalterung ist inklusive. Lieferung auf Anfrage, Abholung möglich. Montage und Inbetriebnahme vor Ort sowie Rückholung sind zusätzliche Leistungen nach Absprache. Der Aufwand richtet sich nach Einsatzort, Entfernung und Geräteanzahl.",
  },
  {
    question: "Wie kurzfristig sind Mietlösungen möglich?",
    answer: "Je nach Verfügbarkeit auch sehr kurzfristig. Für Events empfehlen wir, frühzeitig anzufragen, damit Inhalte, Layout und Lieferung in Ruhe vorbereitet werden können.",
  },
  {
    question: "Wie lange muss ich mindestens mieten?",
    answer: "Unsere Spark-Mietstaffel bietet Laufzeiten von 1, 3, 6 und 12 Monaten. Der jeweilige Monatsbetrag gilt für die vereinbarte gesamte Laufzeit. Die beworbenen Ab-Preise beziehen sich auf 12 Monate. Kürzere Einsätze, zum Beispiel für Events, offerieren wir auf Anfrage.",
  },
  {
    question: "Was ist im Mietpreis enthalten?",
    answer: "Im Mietpreis enthalten sind das Display, die Standardeinrichtung, die Softwarelizenz, eine Wandhalterung und persönliche Betreuung. Ein Bodenständer kann optional für CHF 50 pro Monat dazugemietet werden. Lieferung, Vor-Ort-Montage, Rückholung und individuelle Inhaltserstellung erfolgen separat nach Absprache.",
  },
  {
    question: "Gibt es eine zusätzliche Einrichtungspauschale?",
    answer: "Nein. Die Standardeinrichtung ist bereits in allen Spark-Monatsmieten enthalten. Es fällt dafür keine separate Einrichtungspauschale an. Zusätzliche Leistungen wie Vor-Ort-Montage oder individuelle Inhaltserstellung vereinbaren wir vorab separat.",
  },
  {
    question: "Kann ich einen Bodenständer dazumieten?",
    answer: "Ja. Ein passender Bodenständer ist optional für CHF 50 pro Monat erhältlich. Dieser Aufpreis kommt zur Display-Miete hinzu. Die Wandhalterung ist bereits im Display-Mietpreis enthalten.",
  },
  {
    question: "Kann ich später kaufen statt mieten?",
    answer: "Das kann individuell besprochen werden. Die Miete eignet sich auch gut, um Digital Signage zuerst im Alltag zu testen, bevor eine langfristige Kaufentscheidung getroffen wird.",
  },
];
