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
 * ZU DEN ZAHLEN (überarbeitet 04.09.2026 nach Recherche gegen amtliche Quellen):
 * Die früheren Werte waren durchweg zu hoch. Korrigiert wurde nach:
 *  · Stundensatz: 45 € = Arbeitskosten je Arbeitsstunde (Statistisches Bundesamt 2025).
 *    Gesparte Bürozeit ist KEINE abrechenbare Zeit, deshalb nicht der Verrechnungssatz.
 *  · Gesamtplausibilität: KfW-Mittelstandspanel 2025 misst 11 Std/Monat Bürokratie bei
 *    Solo-Selbstständigen, 18 Std bei bis zu vier Mitarbeitern. Die Summe aller Beispiele
 *    muss darunter bleiben — vorher behaupteten sie zusammen 53 Std/Monat.
 *  · Zahlungsverzug: Creditreform Zahlungsindikator 2025 misst 7,5 Tage, nicht 12.
 *  · Steuerberater: Zeitgebühr nach § 13 StBVV (seit 01.07.2025) 66–164 €/Std,
 *    Mittelwert 115 € — hier bewusst mit 100 € gerechnet.
 *  · Online-Terminbuchung senkt Anrufe belegt um 10–25 %, nicht auf null: 72–73 % der
 *    Kunden buchen in Deutschland weiterhin telefonisch.
 * Genannt wird die Quelle, wo es eine gibt — NIE das Fehlen einer Quelle.
 * [Owner 04.09.2026: „Wieso schreibst Du Denkprozesse von dir auf die Website?"]
 * Eine Quelle zu nennen ist Staerke; ein fehlender Beleg gehoert in den Commit, nicht
 * vor den Kunden. Zahlen ohne Quelle stehen schlicht als Eingangsgroesse da.
 */

import React from "react";
import { FileText, MessageSquareReply, CalendarClock, Receipt, BellRing, PhoneCall } from "lucide-react";
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
      { value: 25, suffix: " Min", label: "statt 1 Std 45 Min je Vorgang" },
      { prefix: "~", value: 1, suffix: " Tag", label: "frei pro Monat" },
      { prefix: "≈ ", value: 350, suffix: " €", label: "im Monat, bei 45 € je Stunde" },
    ],
    beschreibung:
      "Auftragsdaten wandern von allein ins Angebot, in die Rechnung und in die Buchhaltung. Ein Vorgang, ein Klick.",
    detail: {
      rechnung: [
        { schritt: "Heute je Vorgang: Angebot, Rechnung, Buchung, Ablage", wert: "1 Std 45 Min" },
        { schritt: "Danach je Vorgang: prüfen und freigeben", wert: "25 Min" },
        { schritt: "Ersparnis je Vorgang", wert: "1 Std 20 Min" },
        { schritt: "Vorgänge im Monat", wert: "× 6" },
        { schritt: "Ersparnis im Monat", wert: "8 Std", hervor: true },
        { schritt: "Das ist rund ein Arbeitstag; bei 45 € je Stunde", wert: "≈ 350 €" },
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
        "Am Ende steht Prüfen und Freigeben, nicht Tippen.",
        "Weil nichts mehr abgeschrieben wird, entfällt die häufigste Fehlerquelle.",
      ],
      annahmen: [
        "6 Vorgänge im Monat.",
        "1 Std 45 Min Handarbeit je Vorgang über alle drei Schritte.",
        "45 € je Stunde — Arbeitskosten je Arbeitsstunde, Statistisches Bundesamt 2025.",
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
    akzent: "bestätigt.",
    stats: [
      { prefix: "< ", value: 1, suffix: " Min", label: "bis zur automatischen Bestätigung" },
      { value: 24, suffix: " h", label: "am Tag, auch am Wochenende" },
      { prefix: "≈ ", value: 800, suffix: " €", label: "Mehrumsatz im Monat, ein Auftrag" },
    ],
    beschreibung:
      "Die erste Bestätigung ist raus, bevor der Termin beim Kunden zu Ende ist. Passende Zeiten schlägt das System gleich mit vor.",
    detail: {
      rechnung: [
        { schritt: "Anfragen im Monat über Formular, Mail und Telefon", wert: "40" },
        { schritt: "Davon außerhalb der Arbeitszeit", wert: "12" },
        { schritt: "Heute im Schnitt bis zur ersten Antwort", wert: "4 Std" },
        { schritt: "Danach bis zur automatischen Bestätigung", wert: "< 1 Min" },
        { schritt: "Daraus zusätzlich gewonnen", wert: "1 Auftrag" },
        { schritt: "Bei 800 € Auftragswert — Umsatz, nicht Ersparnis", wert: "≈ 800 €", hervor: true },
      ],
      heute: [
        "Anfragen laufen über drei Kanäle nebeneinander ein.",
        "Die Antwort kommt abends oder am nächsten Morgen.",
        "Am Wochenende bleibt alles liegen.",
        "Wer gar nicht antwortet, bekommt den Auftrag sicher nicht.",
      ],
      danach: [
        "Jede Anfrage bekommt sofort eine Bestätigung mit den nächsten Schritten.",
        "Passende Termine schlägt das System gleich mit vor.",
        "Alle Kanäle laufen an einer Stelle zusammen.",
        "Morgens steht nur noch da, was wirklich eine persönliche Antwort braucht.",
      ],
      annahmen: [
        "Die erste Rückmeldung ist eine automatische Bestätigung, keine inhaltliche Antwort.",
        "40 Anfragen im Monat.",
        "800 € durchschnittlicher Auftragswert.",
        "Ein zusätzlicher Auftrag im Monat.",
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
      { prefix: "~", value: 3, suffix: " Std", label: "frei pro Monat" },
      { value: 24, suffix: " h", label: "buchbar, auch sonntags" },
      { value: 25, suffix: " %", label: "weniger Rückrufe" },
    ],
    beschreibung:
      "Kunden sehen freie Zeiten und buchen direkt. Erinnerungen gehen automatisch raus, abgesagte Termine rücken nach.",
    detail: {
      rechnung: [
        { schritt: "Termine pro Woche", wert: "20" },
        { schritt: "Abstimmung je Termin heute", wert: "8 Min" },
        { schritt: "Aufwand pro Woche", wert: "2 Std 40 Min" },
        { schritt: "Weniger Abstimmung durch Online-Buchung", wert: "25 %" },
        { schritt: "Frei pro Monat", wert: "≈ 3 Std", hervor: true },
      ],
      heute: [
        "Der Terminwunsch kommt per Telefon, meist zur Unzeit.",
        "Der Kalender ist nicht zur Hand, also folgt ein Rückruf.",
        "Jedes Verschieben kostet dieselbe Runde noch einmal.",
        "Erinnerungen gehen von Hand raus — oder eben nicht.",
      ],
      danach: [
        "Der Kunde sieht die freien Zeiten und bucht rund um die Uhr selbst.",
        "Bestätigung und Erinnerung gehen automatisch raus.",
        "Abgesagte Termine werden anderen sofort angeboten.",
        "Das Telefon bleibt für alle, die lieber anrufen — es wird nur seltener.",
      ],
      annahmen: [
        "20 Termine pro Woche.",
        "8 Min Abstimmung je Termin.",
        "25 % weniger Anrufe durch Online-Buchung.",
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
      { prefix: "~", value: 30, suffix: " Std", label: "eigene Zeit im Jahr" },
      { prefix: "≈ ", value: 200, suffix: " €", label: "im Monat, Zeit und Steuerbüro" },
      { value: 1, suffix: " Std", label: "weniger Nacharbeit beim Steuerbüro" },
    ],
    beschreibung:
      "Ein Foto genügt: Betrag, Datum und Kategorie liest das System aus und legt den Beleg dorthin, wo er hingehört.",
    detail: {
      rechnung: [
        { schritt: "Belege im Monat", wert: "60" },
        { schritt: "Heute je Beleg: sortieren, ablegen, aufbereiten", wert: "3 Min" },
        { schritt: "Aufwand im Monat", wert: "3 Std" },
        { schritt: "Danach je Beleg: fotografieren und prüfen", wert: "30 Sek" },
        { schritt: "Eigene Ersparnis im Monat", wert: "2 Std 30 Min" },
        { schritt: "Dazu weniger Nacharbeit beim Steuerbüro", wert: "1 Std" },
        { schritt: "Zeit und Steuerbüro zusammen", wert: "≈ 200 €", hervor: true },
      ],
      heute: [
        "Belege sammeln sich in der Tasche, im Auto und im Postfach.",
        "Einmal im Monat wird alles sortiert und für den Berater aufbereitet.",
        "Was fehlt, fällt erst beim Abschluss auf.",
        "Das Steuerbüro sortiert nach und stellt diese Zeit in Rechnung.",
      ],
      danach: [
        "Ein Foto beim Bezahlen genügt.",
        "Betrag, Datum und Kategorie liest das System aus.",
        "Der Beleg landet sofort am richtigen Platz.",
        "Das Steuerbüro bekommt alles vorsortiert und muss weniger nacharbeiten.",
      ],
      annahmen: [
        "60 Belege im Monat — Richtwert für Selbstständige und kleine Betriebe.",
        "3 Min eigene Handarbeit je Beleg.",
        "1 Std weniger Nacharbeit beim Steuerbüro.",
        "100 € je Stunde beim Steuerbüro. Die Zeitgebühr nach § 13 StBVV liegt seit Juli 2025 bei 66–164 €, im Mittel 115 €.",
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
      { value: 4, suffix: " Tage", label: "weniger Verzug" },
      { prefix: "≈ ", value: 900, suffix: " €", label: "weniger dauerhaft gebundenes Geld" },
      { value: 1, suffix: ". Tag", label: "nach Fälligkeit geht die Erinnerung" },
    ],
    beschreibung:
      "Zahlungserinnerungen gehen freundlich und pünktlich raus — ganz ohne Hinterhertelefonieren.",
    detail: {
      rechnung: [
        { schritt: "Offene Rechnungen im Monat", wert: "8" },
        { schritt: "Durchschnittlicher Rechnungsbetrag", wert: "900 €" },
        { schritt: "Monatsvolumen", wert: "7.200 €" },
        { schritt: "Das sind je Tag", wert: "240 €" },
        { schritt: "Verzug heute (Creditreform 2025: 7,5 Tage)", wert: "8 Tage" },
        { schritt: "Verzug danach", wert: "4 Tage" },
        { schritt: "4 Tage × 240 € weniger gebundenes Geld", wert: "≈ 900 €", hervor: true },
      ],
      heute: [
        "Die Rechnung geht raus, danach herrscht Stille.",
        "Erst beim Blick aufs Konto fällt auf, wer nicht gezahlt hat.",
        "Die Erinnerung kostet Überwindung und wird verschoben.",
        "Geld, das längst fällig ist, arbeitet beim Kunden statt im eigenen Betrieb.",
      ],
      danach: [
        "Das System gleicht Zahlungseingänge selbst ab.",
        "Am Tag nach Fälligkeit geht eine freundliche Erinnerung raus.",
        "Zweite und dritte Stufe folgen automatisch, im richtigen Ton.",
        "Auf einen Blick sichtbar: was offen ist und seit wann.",
      ],
      annahmen: [
        "8 offene Rechnungen, 900 € im Schnitt.",
        "8 Tage Verzug heute. Der Creditreform-Zahlungsindikator misst für Deutschland 7,5 Tage; bei Privatkunden ist es eher mehr.",
        "Halbierter Verzug durch pünktliche Erinnerungen.",
      ],
      dauer: "1 Woche",
    },
  },
  {
    accent: "#14b8a6",
    icon: PhoneCall,
    kicker: "Beispiel · Telefon & WhatsApp",
    titel: "Jeder Anruf wird",
    titelZweite: "",
    akzent: "angenommen.",
    stats: [
      { value: 2, suffix: " Sek", label: "bis abgenommen wird, rund um die Uhr" },
      { prefix: "≈ ", value: 1600, suffix: " €", label: "Mehrumsatz im Monat, zwei Aufträge" },
      { value: 97, suffix: " %", label: "der Betriebe: Kunden erwarten schnellere Antworten" },
    ],
    beschreibung:
      "Ein Sprachassistent geht ans Telefon, versteht das Anliegen und hält Adresse und Wunschtermin fest. Wer lieber schreibt, bekommt alles per WhatsApp.",
    detail: {
      rechnung: [
        { schritt: "Anrufe im Monat, die heute niemand annehmen kann", wert: "25" },
        { schritt: "Davon Anfragen mit Auftragspotenzial", wert: "8" },
        { schritt: "Davon gewonnen, weil sofort abgenommen wird", wert: "2" },
        { schritt: "Bei 800 € Auftragswert", wert: "≈ 1.600 €", hervor: true },
      ],
      heute: [
        "Das Telefon klingelt, während die Hände im Einsatz sind.",
        "Die Mailbox nimmt ab — viele legen wortlos wieder auf.",
        "Wer nicht durchkommt, ruft beim nächsten Betrieb an.",
        "Abends stapeln sich Rückrufe, die an dem Tag keiner mehr schafft.",
      ],
      danach: [
        "Der Sprachassistent nimmt jeden Anruf an und spricht ganz normal.",
        "Er hält Anliegen, Adresse und Wunschtermin fest.",
        "Dringendes stellt er sofort durch, alles andere kommt als Notiz an.",
        "Auf Wunsch geht die Zusammenfassung als WhatsApp-Nachricht raus.",
      ],
      annahmen: [
        "25 Anrufe im Monat, die heute unbeantwortet bleiben.",
        "8 davon mit Auftragspotenzial.",
        "2 zusätzlich gewonnene Aufträge im Monat.",
        "800 € durchschnittlicher Auftragswert.",
        "97 % der Handwerksbetriebe berichten, dass Kunden schnellere Antworten erwarten; 63 % tauschen sich bereits über WhatsApp und andere Messenger mit Kunden aus (Bitkom/ZDH 2025, 504 befragte Betriebe).",
      ],
      dauer: "2 Wochen",
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
