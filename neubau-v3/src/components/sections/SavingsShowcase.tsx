"use client";

/**
 * SavingsShowcase — eigene Sektion (#beispiele) NACH der horizontalen Affirmations-
 * Strecke. Die Spar-Beispiele laufen hier als vertikaler Sticky-Stack (ShowcaseStack
 * aus dem Template): man scrollt top-down, die Boxen stapeln sich übereinander — genau
 * wie die Original-Showcase-Boxen (github-/kaggle-showcase) im Template. Inhalt = Leons
 * Automatisierungs-Beispiele; die Zahlen sind BEISPIEL-Platzhalter, bis der Owner die
 * echten Kästchen schickt.
 */

import React from "react";
import { FileText, MessageSquareReply } from "lucide-react";
import { ShowcaseStack } from "@/components/ui/showcase-stack";
import { ShowcaseBox, type ShowcaseInhalt } from "@/components/ui/showcase-box";

// Erste Box im „GitHub Ecosystem"-Grün (#39d353), zweite im „Kaggle Intelligence"-Blau
// (#20beff) — die Original-Akzentfarben der Template-Boxen.
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
];

export function SavingsShowcase() {
  return (
    <section id="beispiele" className="relative bg-background pt-24 md:pt-32">
      <div className="mx-auto mb-4 max-w-3xl px-6 text-center md:mb-8">
        <span className="font-mono text-[10px] font-bold uppercase tracking-[0.32em] text-primary md:text-xs">
          Was das konkret bringt
        </span>
        <h2 className="mt-4 text-3xl font-black leading-[0.95] tracking-tighter text-foreground md:text-5xl">
          Zwei Beispiele, ganz konkret
        </h2>
      </div>
      <ShowcaseStack>
        {BEISPIELE.map((b) => (
          <ShowcaseBox key={b.kicker} inhalt={b} />
        ))}
      </ShowcaseStack>
    </section>
  );
}
