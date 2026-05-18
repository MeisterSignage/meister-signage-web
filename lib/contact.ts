/**
 * Globale Kontaktdaten — gepflegt im CMS unter Globale Daten → Kontaktdaten.
 * Single source of truth für Telefonnummer, E-Mail, WhatsApp und Ansprechperson.
 *
 * Lädt einmalig zur Build-Zeit aus content/site/contact.json. Änderungen am
 * JSON triggern via Decap → GitHub-Commit → Auto-Rebuild → live.
 */
import contactRaw from "@/content/site/contact.json";

export type ContactInfo = {
  name: string;
  role: string;
  phone: string;            // E.164 form, z.B. +41764526687
  phoneDisplay: string;     // Anzeigeform, z.B. "+41 76 452 66 87"
  email: string;
  whatsapp: string;         // wa.me URL
};

export const CONTACT: ContactInfo = contactRaw as ContactInfo;
