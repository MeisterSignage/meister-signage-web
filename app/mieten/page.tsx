import type { Metadata } from "next";
import HeroSection from "@/components/sections/HeroSection";
import ProblemSolutionSection from "@/components/sections/ProblemSolutionSection";
import BenefitsSection from "@/components/sections/BenefitsSection";
import ProcessSection from "@/components/sections/ProcessSection";
import FAQSection from "@/components/sections/FAQSection";
import CTASection from "@/components/sections/CTASection";
import ContactSection from "@/components/sections/ContactSection";
import { MonitorPlay, CalendarRange, Zap, BadgeCheck, MapPin, Package } from "lucide-react";

export const metadata: Metadata = {
  title: "Bildschirm mieten | Meister Signage",
  description:
    "Bildschirme und Digital-Signage-Lösungen flexibel mieten für Events, Pop-ups, Messen oder temporäre Einsätze. Persönlich betreut und schlüsselfertig umgesetzt.",
};

export default function MietenPage() {
  return (
    <>
      <HeroSection
        eyebrow="Bildschirme und Digital Signage mieten"
        title="Bildschirme flexibel mieten statt kaufen."
        subtitle="Professionelle Displays für Events, Messen, Pop-ups und temporäre Einsätze – schlüsselfertig eingerichtet, geliefert und persönlich betreut."
        bullets={[
          "Flexible Mietdauer – tageweise oder für längere Einsätze",
          "Schlüsselfertig: Transport, Aufbau und Einrichtung möglich",
          "Professionelle Präsentation ohne grosse Vorabinvestition",
        ]}
        primaryCta={{ label: "Beratung anfragen", href: "/kontakt" }}
        secondaryCta={{ label: "Digital Signage kaufen", href: "/loesungen" }}
      />

      <ProblemSolutionSection
        eyebrow="Kaufen lohnt sich nicht immer"
        title="Für temporäre Einsätze ist Mieten die clevere Alternative."
        subtitle="Wer Displays nur für einen Event, eine Messe oder eine Kampagne braucht, muss nicht investieren – Mieten ist flexibler, günstiger und unkomplizierter."
        problemsLabel="Warum Kaufen nicht immer passt"
        solutionsLabel="Warum Mieten besser ist"
        problems={[
          {
            title: "Hohe Vorabinvestition für einmaligen Einsatz",
            description:
              "Wer Displays nur für einen Event kauft, trägt Kosten für Lagerung, Wartung und Wertverlust – auch wenn die Screens danach monatelang ungenutzt stehen.",
          },
          {
            title: "Aufwändige Logistik ohne Erfahrung",
            description:
              "Transport, Montage, Stromversorgung und Einrichtung eines digitalen Setups erfordern Planung und Erfahrung – Fehler auf der Bühne sind teuer.",
          },
          {
            title: "Ungewissheit über den richtigen Displaytyp",
            description:
              "Welche Grösse, welche Helligkeit, welche Halterung – ohne Fachkenntnis sind Fehlkäufe vorprogrammiert.",
          },
        ]}
        solutions={[
          {
            title: "Kein Kapitaleinsatz für temporäre Einsätze",
            description:
              "Sie zahlen nur für die Zeit, in der Sie die Displays wirklich brauchen – ohne Investitionsrisiko und ohne laufende Unterhaltskosten.",
          },
          {
            title: "Alles aus einer Hand – von der Lieferung bis zum Abbau",
            description:
              "Transport, Aufbau, Einrichtung und Abbau können vollständig übernommen werden – damit Sie sich auf Ihren Event konzentrieren können.",
          },
          {
            title: "Genau die richtige Lösung für Ihren Einsatz",
            description:
              "Wir beraten Sie, welche Displays, Halterungen und Konfiguration für Ihre Veranstaltung oder Ihren Standort am besten passen.",
          },
        ]}
      />

      <BenefitsSection
        eyebrow="Was Sie gewinnen"
        title="Professionelle Bildschirmpräsenz – ohne dauerhaften Aufwand."
        subtitle="Digital Signage mieten heisst: professioneller Auftritt beim nächsten Einsatz, ohne die Verantwortung für Lagerung, Wartung und Technik."
        benefits={[
          {
            icon: CalendarRange,
            title: "Flexible Mietdauer",
            description:
              "Ob ein Tag, ein Wochenende oder mehrere Wochen – die Mietdauer richtet sich nach Ihrem Bedarf, nicht nach starren Paketen.",
          },
          {
            icon: Package,
            title: "Schlüsselfertig geliefert",
            description:
              "Displays werden vorbereitet, geliefert und bei Bedarf vor Ort aufgebaut und eingerichtet – betriebsbereit vom ersten Moment an.",
          },
          {
            icon: MonitorPlay,
            title: "Passende Displaygrössen für jeden Einsatz",
            description:
              "Von kompakten Bildschirmen für Pop-up-Stands bis zu grossen Displays für Bühnenhintergründe oder Messestände.",
          },
          {
            icon: BadgeCheck,
            title: "Professioneller Eindruck ohne Investition",
            description:
              "Hochwertige Displays hinterlassen beim Publikum, bei Sponsoren und bei Kunden einen gepflegten und modernen Eindruck.",
          },
          {
            icon: Zap,
            title: "Schnelle Bereitstellung",
            description:
              "Kein langer Vorlauf nötig. Nach kurzer Absprache können Displays vorbereitet und termingerecht bereitgestellt werden.",
          },
          {
            icon: MapPin,
            title: "Lokale Betreuung aus der Zentralschweiz",
            description:
              "Kurze Transportwege, direkter Ansprechpartner und persönliche Unterstützung – vor, während und nach dem Einsatz.",
          },
        ]}
      />

      <ProcessSection
        eyebrow="So läuft die Vermietung"
        title="Von der Anfrage bis zur Rückgabe – einfach und klar."
        subtitle="Kein komplizierter Prozess. Wir klären gemeinsam den Bedarf und kümmern uns um den Rest."
        steps={[
          {
            number: 1,
            title: "Bedarf und Termin klären",
            description:
              "Wir besprechen, wie viele Displays gebraucht werden, welche Grössen passen, wann und wo der Einsatz stattfindet.",
          },
          {
            number: 2,
            title: "Inhalte vorbereiten und konfigurieren",
            description:
              "Die Displays werden mit Ihren Inhalten bespielt und getestet – damit am Einsatztag alles sofort funktioniert.",
          },
          {
            number: 3,
            title: "Lieferung, Aufbau und Übergabe",
            description:
              "Auf Wunsch liefern und bauen wir vor Ort auf – inklusive Einführung, damit Ihr Team die Screens eigenständig bedienen kann.",
          },
          {
            number: 4,
            title: "Abbau und Rückgabe",
            description:
              "Nach dem Einsatz übernehmen wir den Abbau und die Rücknahme – kein Aufwand für Sie, kein Hektik nach dem Event.",
          },
        ]}
      />

      <FAQSection
        eyebrow="Häufige Fragen"
        title="Was Sie zur Bildschirmmiete wissen sollten."
        subtitle="Die wichtigsten Antworten rund um die Vermietung von Displays und Digital-Signage-Lösungen."
        faqs={[
          {
            question: "Für welche Einsätze eignet sich die Vermietung?",
            answer:
              "Die Vermietung ist ideal für Events, Messen, Kongresse, Pop-up-Stores, temporäre Promotionen oder saisonale Kampagnen – also überall dort, wo Displays nur für einen begrenzten Zeitraum benötigt werden.",
          },
          {
            question: "Welche Displaygrössen sind verfügbar?",
            answer:
              "Das aktuelle Angebot besprechen wir direkt mit Ihnen. Wir helfen Ihnen, die richtige Grösse für Ihren Einsatzort und Ihre Anforderungen zu finden.",
          },
          {
            question: "Können Sie die Displays auch aufbauen und einrichten?",
            answer:
              "Ja. Transport, Aufbau, Einrichtung und Abbau können vollständig übernommen werden – entweder als Komplett-Service oder nur einzelne Teile davon, je nach Ihrem Bedarf.",
          },
          {
            question: "Wie früh muss ich die Miete anfragen?",
            answer:
              "Je früher, desto sicherer. Für grössere Setups oder aufwändigere Einrichtungen empfehlen wir mindestens eine Woche Vorlauf. Kurzfristige Anfragen versuchen wir, wenn möglich zu erfüllen.",
          },
          {
            question: "Was passiert, wenn ein Display während des Events ausfällt?",
            answer:
              "Wir sind als lokaler Anbieter schnell erreichbar und reagieren unkompliziert. Je nach Setup und Vorlaufzeit können wir auch Ersatzgeräte bereitstellen.",
          },
        ]}
      />

      <CTASection
        eyebrow="Verfügbarkeit anfragen"
        title="Bildschirme für Ihren nächsten Einsatz reservieren?"
        subtitle="Kurz erklären, wann und wie viele Displays Sie brauchen – wir melden uns mit einer konkreten Offerte."
        primaryCta={{ label: "Beratung anfragen", href: "/kontakt" }}
        secondaryCta={{ label: "Digital Signage kaufen", href: "/loesungen" }}
      />

      <ContactSection
        eyebrow="Persönlicher Kontakt"
        title="Sie möchten Bildschirme für einen Event oder Einsatz mieten?"
        subtitle="Schreiben Sie kurz, was Sie vorhaben. Wir melden uns persönlich und unkompliziert."
        contactName="Chris Meister"
        role="Meister Signage"
        phone="+41 76 452 66 87"
        email="info@meister-signage.ch"
        whatsapp="https://wa.me/41764526687"
        imageSrc="/images/Chris-Meister.png"
      />
    </>
  );
}
