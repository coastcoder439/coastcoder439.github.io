"use client";

/**
 * SavingsShowcase — eigene Sektion (#beispiele) NACH der horizontalen Affirmations-
 * Strecke. Ihr Kopf („Was das konkret bringt / Fünf Beispiele, ganz konkret") wird noch
 * horizontal in der Strecke hereingeschoben (SektionsWechsel in AnsatzScroll); hier
 * folgt direkt der vertikale Sticky-Stack: man scrollt top-down, die Boxen stapeln sich
 * übereinander — wie die Original-Showcase-Boxen im Template.
 *
 * Jede Box lässt sich aufklappen (Template-Vollbildschirm) und zeigt dahinter die
 * RECHNUNG: Rechenweg Zeile für Zeile, was heute passiert, was danach passiert, die
 * Annahmen offen benannt, und wie lange die Umsetzung dauert.
 *
 * Alle Zahlen sind Rechenbeispiele mit sichtbarer Grundlage, keine Zusagen — die
 * Annahmen stehen im aufgeklappten Zustand ausdrücklich dabei.
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
    detail: {
      rechnung: [
        { schritt: "Heute je Vorgang: Angebot, Rechnung, Buchung, Ablage", wert: "4 Std" },
        { schritt: "Danach je Vorgang: prüfen und freigeben", wert: "20 Min" },
        { schritt: "Ersparnis je Vorgang", wert: "3 Std 40" },
        { schritt: "Vorgänge im Monat", wert: "× 5" },
        { schritt: "Ersparnis im Monat", wert: "18 Std" },
        { schritt: "Das sind an Arbeitszeit", wert: "≈ 2 Tage", hervor: true },
        { schritt: "Bei 50 € Stundensatz entspricht das", wert: "≈ 900 €" },
      ],
      heute: [
        "Das Angebot entsteht von Hand, oft aus einem alten kopiert.",
        "Dieselben Daten wandern anschließend in die Rechnung.",
        "Die Rechnung wird ein drittes Mal ins Buchhaltungsprogramm getippt.",
        "Beim Abtippen verrutscht irgendwann eine Zahl, und das fällt erst spät auf.",
      ],
      danach: [
        "Die Auftragsdaten werden einmal erfasst.",
        "Angebot, Rechnung und Buchung entstehen daraus automatisch.",
        "Du prüfst und gibst frei, statt zu tippen.",
        "Weil nichts mehr abgeschrieben wird, gibt es keine Zahlendreher.",
      ],
      annahmen: [
        "5 Vorgänge im Monat.",
        "4 Std Handarbeit je Vorgang über alle drei Schritte.",
        "50 € Stundensatz für die eigene Arbeitszeit.",
        "Die vorhandenen Programme lassen sich verbinden.",
      ],
      dauer: "2–3 Wochen",
    },
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
    detail: {
      rechnung: [
        { schritt: "Anfragen im Monat über Formular, Mail und Telefon", wert: "40" },
        { schritt: "Davon außerhalb der Arbeitszeit", wert: "12" },
        { schritt: "Heute im Schnitt bis zur ersten Antwort", wert: "4 Std" },
        { schritt: "Danach bis zur ersten Antwort", wert: "< 1 Min" },
        { schritt: "Anfragen, die heute abspringen, weil es zu lange dauert", wert: "3" },
        { schritt: "Bei 800 € Auftragswert sind das im Monat", wert: "≈ 2.400 €", hervor: true },
      ],
      heute: [
        "Anfragen laufen über drei Kanäle nebeneinander ein.",
        "Die Antwort kommt abends oder am nächsten Morgen.",
        "Am Wochenende bleibt alles liegen.",
        "Wer schneller eine Antwort bekommt, bekommt den Auftrag.",
      ],
      danach: [
        "Jede Anfrage bekommt sofort eine Bestätigung mit den nächsten Schritten.",
        "Passende Termine schlägt das System gleich mit vor.",
        "Alle Kanäle laufen an einer Stelle zusammen.",
        "Du siehst morgens nur noch, was wirklich deine Antwort braucht.",
      ],
      annahmen: [
        "40 Anfragen im Monat.",
        "800 € durchschnittlicher Auftragswert.",
        "3 Anfragen im Monat, die heute wegen der Wartezeit abspringen.",
      ],
      dauer: "1–2 Wochen",
    },
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
    detail: {
      rechnung: [
        { schritt: "Termine pro Woche", wert: "25" },
        { schritt: "Abstimmung je Termin heute: Anruf, Rückruf, Verschieben", wert: "15 Min" },
        { schritt: "Aufwand pro Woche", wert: "6 Std 15" },
        { schritt: "Danach: der Kunde bucht selbst", wert: "0 Min" },
        { schritt: "Ersparnis im Monat", wert: "≈ 27 Std", hervor: true },
        { schritt: "Bei 50 € Stundensatz entspricht das", wert: "≈ 1.300 €" },
      ],
      heute: [
        "Der Terminwunsch kommt per Telefon, meist zur Unzeit.",
        "Der Kalender ist nicht zur Hand, also folgt ein Rückruf.",
        "Jedes Verschieben kostet dieselbe Runde noch einmal.",
        "Erinnerungen schickst du von Hand, oder eben nicht.",
      ],
      danach: [
        "Der Kunde sieht deine freien Zeiten und bucht selbst.",
        "Bestätigung und Erinnerung gehen automatisch raus.",
        "Abgesagte Termine werden anderen sofort angeboten.",
        "Dein Kalender bleibt in jedem Programm derselbe.",
      ],
      annahmen: [
        "25 Termine pro Woche.",
        "15 Min Abstimmung je Termin über alle Rückrufe hinweg.",
        "50 € Stundensatz für die eigene Arbeitszeit.",
      ],
      dauer: "1 Woche",
    },
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
    detail: {
      rechnung: [
        { schritt: "Belege im Monat", wert: "120" },
        { schritt: "Heute je Beleg: sortieren, abtippen, ablegen", wert: "4 Min" },
        { schritt: "Aufwand im Monat", wert: "8 Std", hervor: true },
        { schritt: "Danach je Beleg: fotografieren", wert: "10 Sek" },
        { schritt: "Aufbereitung beim Steuerbüro heute", wert: "5 Std" },
        { schritt: "Bei 80 € Stundensatz entspricht das", wert: "≈ 400 €" },
      ],
      heute: [
        "Belege sammeln sich in der Tasche, im Auto und im Postfach.",
        "Einmal im Monat wird alles sortiert und abgetippt.",
        "Was fehlt, fällt erst beim Abschluss auf.",
        "Das Steuerbüro sortiert nach und stellt das in Rechnung.",
      ],
      danach: [
        "Ein Foto beim Bezahlen genügt.",
        "Betrag, Datum und Kategorie liest das System aus.",
        "Der Beleg landet sofort am richtigen Platz.",
        "Das Steuerbüro bekommt alles fertig sortiert.",
      ],
      annahmen: [
        "120 Belege im Monat.",
        "4 Min Handarbeit je Beleg.",
        "5 Std Aufbereitung beim Steuerbüro zu 80 € je Stunde.",
      ],
      dauer: "1–2 Wochen",
    },
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
    detail: {
      rechnung: [
        { schritt: "Offene Rechnungen im Schnitt", wert: "8" },
        { schritt: "Durchschnittlicher Rechnungsbetrag", wert: "900 €" },
        { schritt: "Offener Betrag insgesamt", wert: "7.200 €" },
        { schritt: "Heute im Schnitt über dem Zahlungsziel", wert: "12 Tage" },
        { schritt: "Danach: Erinnerung am Tag nach Fälligkeit", wert: "0 Tage" },
        { schritt: "Dauerhaft weniger offen", wert: "≈ 2.400 €", hervor: true },
      ],
      heute: [
        "Die Rechnung geht raus, danach herrscht Stille.",
        "Erst beim Blick aufs Konto fällt auf, wer nicht gezahlt hat.",
        "Die Erinnerung kostet Überwindung und wird verschoben.",
        "Geld, das dir zusteht, arbeitet beim Kunden statt bei dir.",
      ],
      danach: [
        "Das System gleicht Zahlungseingänge selbst ab.",
        "Am Tag nach Fälligkeit geht eine freundliche Erinnerung raus.",
        "Zweite und dritte Stufe folgen automatisch, im richtigen Ton.",
        "Du siehst auf einen Blick, was offen ist und seit wann.",
      ],
      annahmen: [
        "8 offene Rechnungen im Schnitt.",
        "900 € durchschnittlicher Rechnungsbetrag.",
        "12 Tage Überschreitung des Zahlungsziels heute.",
        "Ein Drittel davon löst sich durch pünktliche Erinnerungen.",
      ],
      dauer: "1 Woche",
    },
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
