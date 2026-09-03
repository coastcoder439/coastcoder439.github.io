"use client";

/**
 * v3.2 — die beiden mittleren Blöcke, wieder template-treu (Owner 03.09.2026 nachts):
 *   AblaufSection   = Block 2 „So arbeite ich": das KOMPAKTE CubeBlock-Layout aus dem
 *                     Template (Würfel links, vier Punkte kompakt rechts) — NUR ergänzt
 *                     um die Würfeldrehung auf den gezeigten/gescrollten Schritt und die
 *                     Schritt-Farbe. Keine lange Sticky-Strecke mehr.
 *   ProjekteSection = Block 3: EINE Slideshow mit allen neun Projekten, gruppiert nach
 *                     Ursprung · Praxis · Keel, rechts das Live-Fenster des Projekts.
 * Sprache: die englischen Begriffe stehen als Überschrift (Schlagwörter), darunter je
 * ein Satz in normaler Sprache.
 */

import React from "react";
import { motion, useScroll, useMotionValueEvent } from "framer-motion";
import { ArrowDownRight } from "lucide-react";
import Loader, { faceColors } from "@/components/ui/Loader";
import { cn } from "@/lib/utils";
import { ProjectHoverShowcase, type ShowcaseProject } from "./ProjectHoverShowcase";

const Reveal = ({
  children,
  delay = 0,
  className,
}: {
  children: React.ReactNode;
  delay?: number;
  className?: string;
}) => (
  <motion.div
    initial={{ opacity: 0, y: 30 }}
    whileInView={{ opacity: 1, y: 0 }}
    viewport={{ once: true, margin: "-80px" }}
    transition={{ duration: 0.8, delay, ease: [0.16, 1, 0.3, 1] }}
    className={className}
  >
    {children}
  </motion.div>
);

const SectionHead = ({ nr, title }: { nr: string; title: string }) => (
  <div className="mb-10 md:mb-14">
    <Reveal>
      <div className="mb-5 flex items-center gap-4">
        <div className="h-px w-10 bg-primary/50" />
        <span className="font-mono text-[10px] font-bold uppercase tracking-[0.32em] text-primary md:text-xs">
          {nr}
        </span>
      </div>
      <h2 className="text-4xl font-black leading-[0.9] tracking-tighter text-foreground md:text-6xl lg:text-7xl">
        {title}
      </h2>
    </Reveal>
  </div>
);

const Copy = ({ children }: { children: React.ReactNode }) => (
  <Reveal>
    <p className="my-6 max-w-[66ch] border-l-[3px] border-primary/70 pl-5 text-lg leading-relaxed text-foreground/80 md:text-xl">
      {children}
    </p>
  </Reveal>
);

const SHELL = "relative mx-auto max-w-[1180px] px-6 py-24 md:px-12 md:py-32";

const SCHRITTE = [
  {
    titel: "Prompt Engineering",
    text: "Ich schaue mir an, wie du arbeitest, und finde das Muster darin. Was einmal sitzt, sitzt beim nächsten Fall wieder.",
  },
  {
    titel: "Context Engineering",
    text: "Die KI bekommt genau das Wissen, das deine Aufgabe braucht. Fehlt ihr etwas, rät sie — und das merkt man am Ergebnis.",
  },
  {
    titel: "Harness Engineering",
    text: "Die Regeln stehen im Code, nicht in einer Anleitung, an die sich jemand erinnern muss. Was nicht passieren darf, kann nicht passieren.",
  },
  {
    titel: "Skill Engineering",
    text: "Am Ende steht kein Konzept im Ordner, sondern etwas, das läuft — und das du weiterbenutzen kannst, ohne mich zu fragen.",
  },
];

const ERGEBNISSE = [
  {
    titel: "Websites",
    text: "Seiten, die eine Geschichte erzählen, statt Kacheln zu stapeln — wie die Radtour rund um einen E-Bike-Verleih.",
  },
  {
    titel: "Apps",
    text: "Werkzeuge mit Oberfläche: vom Diktat, das im Hintergrund mitschreibt, bis zum 3D-Modell, das man drehen kann.",
  },
  {
    titel: "Funnels",
    text: "Wege, auf denen aus Besuchern Anfragen werden. Einer entsteht gerade als Prototyp.",
  },
  {
    titel: "Automations",
    text: "Abläufe, die ohne Zuruf laufen: Ablage sortieren, Daten prüfen, Berichte schreiben.",
  },
];

/**
 * Das kompakte CubeBlock aus dem Template (Würfel links, Punkte rechts), ergänzt um
 * die einzige neue Sache: der Würfel dreht sich auf den Schritt, auf den man zeigt
 * (Hover/Fokus) oder der beim Scrollen an der Reihe ist. Der aktive Schritt trägt die
 * Farbe seiner Würfelseite. Kein Sticky, kein 200-vh-Spreizen.
 */
const CubeBlock = ({
  type,
  items,
  reverse = false,
}: {
  type: "disziplinen" | "ergebnisse";
  items: { titel: string; text: string }[];
  reverse?: boolean;
}) => {
  const ref = React.useRef<HTMLDivElement>(null);
  const { scrollYProgress } = useScroll({ target: ref, offset: ["start end", "end start"] });
  const [aktiv, setAktiv] = React.useState(0);
  // Ref statt State: der Scroll-Handler unten liest den aktuellen Wert, nicht eine
  // veraltete Closure — sonst überschrieb ein Scroll-Tick die Hover-Auswahl.
  const zeigerRef = React.useRef(false);
  const farben = faceColors(type);

  const zeige = (i: number) => {
    zeigerRef.current = true;
    setAktiv(i);
  };

  // Beim Durchscrollen läuft 1→4 langsam durch (mittlerer Sichtbarkeitsbereich);
  // Maus/Fokus übersteuern sofort.
  useMotionValueEvent(scrollYProgress, "change", (p) => {
    if (zeigerRef.current) return;
    const norm = Math.min(0.999, Math.max(0, (p - 0.15) / 0.7));
    setAktiv(Math.floor(norm * items.length));
  });

  return (
    <div
      ref={ref}
      className={cn(
        "grid grid-cols-1 items-center gap-10 lg:grid-cols-2 lg:gap-16",
        reverse && "lg:[&>*:first-child]:order-2"
      )}
    >
      <Reveal className="flex min-h-[360px] items-center justify-center">
        <div className="h-[420px] w-full max-w-[420px]">
          <Loader type={type} activeFace={aktiv} />
        </div>
      </Reveal>
      <Reveal delay={0.1}>
        <ol className="space-y-4" onMouseLeave={() => { zeigerRef.current = false; }}>
          {items.map((it, i) => {
            const an = aktiv === i;
            return (
              <li key={it.titel}>
                <button
                  type="button"
                  onMouseEnter={() => zeige(i)}
                  onFocus={() => zeige(i)}
                  onBlur={() => { zeigerRef.current = false; }}
                  aria-current={an}
                  className={cn(
                    "w-full rounded-lg border-l-[3px] px-4 py-3 text-left transition-all duration-500 focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-current",
                    an ? "bg-foreground/[0.04]" : "border-l-transparent opacity-55 hover:opacity-90"
                  )}
                  style={an ? { borderLeftColor: farben[i] } : undefined}
                >
                  <span className="flex items-baseline gap-3">
                    <span
                      className="font-mono text-xs transition-colors duration-500"
                      style={{ color: an ? farben[i] : undefined }}
                    >
                      {String(i + 1).padStart(2, "0")}
                    </span>
                    <span
                      className="text-lg font-bold tracking-tight transition-colors duration-500 md:text-xl"
                      style={{ color: an ? farben[i] : undefined }}
                    >
                      {it.titel}
                    </span>
                  </span>
                  <span className="mt-1.5 block max-w-[52ch] text-base leading-relaxed text-muted-foreground">
                    {it.text}
                  </span>
                </button>
              </li>
            );
          })}
        </ol>
      </Reveal>
    </div>
  );
};

const GRUPPE_URSPRUNG = "Ursprung · World Eden Era";
const GRUPPE_PRAXIS = "Praxis · Prototypen";
const GRUPPE_KEEL = "Keel · eigenes System";

const PROJEKTE: ShowcaseProject[] = [
  { id: "oasis", group: GRUPPE_URSPRUNG, name: "Oasis-Simulator", tag: "Live · Präsentation", url: "https://world-eden-era.org/project-oasis/", desc: "Mein Herzensprojekt, ursprünglich von mir gebaut und heute mit meiner Orga weiterentwickelt: eine Aquaponik-Oase als 3D-Modell, das man im Browser drehen kann, dazu eine Rechnung, die Wetter und Klima in Ertrag und Kosten übersetzt." },
  { id: "wee", group: GRUPPE_URSPRUNG, name: "WEE CRM", tag: "Live · Prototyp", url: "https://showcase-wee-crm.vercel.app", desc: "Spendenverwaltung für die gemeinnützige UG: Kontakte, Spenden, Import aus Tabellen, und ein Protokoll, das festhält, wer was geändert hat. Stand: getesteter Prototyp." },
  { id: "drive", group: GRUPPE_URSPRUNG, name: "Drive-Automatisierung", tag: "Ohne Live-Ansicht", desc: "Der Vereins-Drive räumt sich selbst auf: eine Datei legt fest, wo was hingehört, ein Skript sortiert danach und meldet, was nicht passt. 233 Dateien standen im Plan, jeder Lauf schreibt einen Bericht." },
  { id: "wlbike", group: GRUPPE_PRAXIS, name: "WL Bike Rental", tag: "Live · Prototyp", url: "https://showcase-wl-bike.vercel.app", desc: "Eine Seite für einen E-Bike-Verleih an der Ostsee, erzählt als Radtour: vom Wald über den Bodden bis an den Strand, und jedes Angebot ist eine Station unterwegs. Stand: Prototyp." },
  { id: "nordwind", group: GRUPPE_PRAXIS, name: "Nordwind Studio", tag: "Live · Prototyp", url: "https://showcase-nordwind.vercel.app", desc: "Ein Cockpit für einen Print-on-Demand-Shop: sieben Agenten übernehmen den Weg von der Designfreigabe bis zur Umsatzsteuer. Läuft im Browser, ohne Server. 96 Belege gehen auf den Cent auf. Stand: Prototyp." },
  { id: "funnel", group: GRUPPE_PRAXIS, name: "Funnel Desk", tag: "Live · Prototyp", url: "https://showcase-funnel-desk.vercel.app/dashboard", desc: "Mehrere Zielgruppen nebeneinander, für jede derselbe Weg von der ersten Berührung bis zur festen Kundschaft — und ein Überblick, wo jemand hängen bleibt. Stand: Prototyp." },
  { id: "keel", group: GRUPPE_KEEL, name: "Keel Showcase", tag: "Live · zum Durchklicken", url: "https://keel-showcase.vercel.app", desc: "Die Oberfläche von Keel zum Ausprobieren: Website-Baukasten, Social Media, Shop. Ohne Anmeldung, direkt hier im Fenster." },
  { id: "harness", group: GRUPPE_KEEL, name: "Keel-Harness", tag: "Ohne Live-Ansicht", desc: "Ein Bausatz, der KI-Agenten diszipliniert arbeiten lässt: feste Regeln, Sperren vor riskanten Schritten, ein Dashboard mit Messwerten. Ein Satz an den Agenten genügt, und er richtet sich im Projekt selbst ein." },
  { id: "flowvoice", group: GRUPPE_KEEL, name: "FlowVoice", tag: "Ohne Live-Ansicht", desc: "Diktieren unter Windows: Taste drücken, sprechen, der Text steht im Fenster, in dem man gerade arbeitet. Vier Erkennungs-Engines zur Wahl, von komplett offline bis Cloud." },
];

export function AblaufSection() {
  return (
    <section id="ablauf" className={cn("relative z-20 bg-background text-foreground", SHELL)}>
      <SectionHead nr="Ablauf" title="So arbeite ich." />
      <Copy>
        Was in der Aquaponik funktioniert, funktioniert auch im Verleih, im Shop und im
        Agenten-System. Vier Dinge, die ich dafür beherrsche — fahr mit der Maus darüber,
        der Würfel dreht sich mit.
      </Copy>

      <div className="mt-10">
        <CubeBlock type="disziplinen" items={SCHRITTE} />
      </div>

      <Reveal className="mb-8 mt-24">
        <div className="flex items-center gap-4">
          <ArrowDownRight className="h-5 w-5 text-primary" />
          <span className="font-mono text-[10px] font-bold uppercase tracking-[0.32em] text-primary md:text-xs">
            Und das kommt dabei heraus
          </span>
        </div>
      </Reveal>

      <CubeBlock type="ergebnisse" items={ERGEBNISSE} reverse />
    </section>
  );
}

export function ProjekteSection() {
  return (
    <section id="projekte" className={cn("relative z-20 border-t border-foreground/10 bg-background text-foreground", SHELL)}>
      <SectionHead nr="Projekte" title="Echte Probleme, echte Lösungen." />
      <Copy>
        Neun Projekte aus drei Ecken: die gemeinnützige UG, mit der alles anfing, Prototypen
        für Kundenprobleme, und Keel — mein eigenes System. Wo eine Vorschau möglich ist,
        siehst du die echte Oberfläche, kein Bild.
      </Copy>
      <div className="mt-10">
        <ProjectHoverShowcase projects={PROJEKTE} />
      </div>
    </section>
  );
}
