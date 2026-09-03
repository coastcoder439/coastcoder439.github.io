"use client";

/**
 * SavingsShowcase — eigene Sektion (#beispiele) NACH der horizontalen Affirmations-
 * Strecke. Ihr Kopf („Was das konkret bringt / Fünf Beispiele, ganz konkret") wird noch
 * horizontal in der Strecke hereingeschoben (SektionsWechsel in AnsatzScroll); hier
 * folgt direkt der vertikale Sticky-Stack: man scrollt top-down, die Boxen stapeln sich
 * übereinander — wie die Original-Showcase-Boxen (github-/kaggle-showcase) im Template.
 *
 * Die Zahlen sind RECHENBEISPIELE, keine Zusagen: jeder Kicker sagt „Beispiel · …" und
 * jede Geld-Zahl trägt ihre Rechengrundlage im Label. Der Owner ersetzt sie durch seine
 * echten Kästchen-Inhalte.
 */

import React from "react";
import { FileText, MessageSquareReply, CalendarClock, Receipt, BellRing } from "lucide-react";
import { ShowcaseStack } from "@/components/ui/showcase-stack";
import { ShowcaseBox, type ShowcaseInhalt } from "@/components/ui/showcase-box";

// Akzentfarben aus der Template-Palette (github-showcase #39d353, kaggle-showcase
// #20beff / #a855f7 / #fb923c); die letzte auf Rose gezogen, weil das Template-Gelb
// auf weißem Grund nicht lesbar wäre.
const BEISPIELE: ShowcaseInhalt[] = [
  {
    accent: "#39d353",
    icon: FileText,
    kicker: "Beispiel · Angebote & Rechnungen",
    titel: "Vom Auftrag zur Rechnung,",
    titelZweite: "ohne",
    akzent: "Abtippen.",
    stats: [
      { value: 20, suffix: " Min", label: "statt 4 Std je Vorgang" },
      { prefix: "~", value: 2, suffix: " Tage", label: "frei pro Monat" },
      { value: 0, label: "Zahlendreher" },
    ],
    beschreibung:
      "Auftragsdaten wandern von allein ins Angebot, in die Rechnung und in die Buchhaltung. Ein Vorgang, ein Klick.",
  },
  {
    accent: "#20beff",
    icon: MessageSquareReply,
    kicker: "Beispiel · Kundenanfragen",
    titel: "Jede Anfrage sofort",
    titelZweite: "",
    akzent: "beantwortet.",
    stats: [
      { prefix: "< ", value: 1, suffix: " Min", label: "bis zur ersten Antwort" },
      { value: 24, suffix: " h", label: "am Tag erreichbar" },
      { value: 0, label: "verpasste Anfragen" },
    ],
    beschreibung:
      "Eine erste Antwort geht raus, während du noch beim Kunden bist. Passende Termine schlägt das System selbst vor.",
  },
  {
    accent: "#a855f7",
    icon: CalendarClock,
    kicker: "Beispiel · Termine",
    titel: "Termine buchen sich",
    titelZweite: "",
    akzent: "von selbst.",
    stats: [
      { prefix: "~", value: 6, suffix: " Std", label: "frei pro Woche" },
      { prefix: "≈ ", value: 1300, suffix: " €", label: "pro Monat, bei 50 € Stundensatz" },
      { value: 0, label: "Telefonrunden zur Absprache" },
    ],
    beschreibung:
      "Kunden sehen freie Zeiten und buchen direkt. Erinnerungen gehen automatisch raus, abgesagte Termine rücken nach.",
  },
  {
    accent: "#fb923c",
    icon: Receipt,
    kicker: "Beispiel · Belege & Buchhaltung",
    titel: "Belege sortieren sich",
    titelZweite: "",
    akzent: "von allein.",
    stats: [
      { prefix: "~", value: 8, suffix: " Std", label: "weniger pro Monat" },
      { prefix: "≈ ", value: 400, suffix: " €", label: "weniger Vorbereitung beim Steuerbüro" },
      { value: 0, label: "verlorene Belege" },
    ],
    beschreibung:
      "Ein Foto genügt: Betrag, Datum und Kategorie liest das System aus und legt den Beleg dorthin, wo er hingehört.",
  },
  {
    accent: "#f43f5e",
    icon: BellRing,
    kicker: "Beispiel · Zahlungen",
    titel: "Kein Geld bleibt",
    titelZweite: "",
    akzent: "liegen.",
    stats: [
      { value: 12, suffix: " Tage", label: "schneller bezahlt" },
      { prefix: "≈ ", value: 2400, suffix: " €", label: "weniger offene Posten im Schnitt" },
      { value: 0, label: "vergessene Erinnerungen" },
    ],
    beschreibung:
      "Zahlungserinnerungen gehen freundlich und pünktlich raus, ohne dass du jemandem hinterhertelefonierst.",
  },
];

export function SavingsShowcase() {
  return (
    <section id="beispiele" className="relative bg-background">
      <ShowcaseStack>
        {BEISPIELE.map((b) => (
          <ShowcaseBox key={b.kicker} inhalt={b} />
        ))}
      </ShowcaseStack>
    </section>
  );
}
