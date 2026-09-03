"use client";

/**
 * v3.1 — die beiden mittleren Blöcke (Owner 03.09.2026 abends):
 *   AblaufSection   = Block 2 „So arbeite ich": der Würfel bleibt beim Scrollen stehen
 *                     und dreht sich auf den Schritt, auf den man zeigt — beim Scrollen
 *                     läuft 1→4 von selbst durch, die Maus übersteuert sofort.
 *                     Der aktive Schritt trägt die Farbe seiner Würfelseite.
 *   ProjekteSection = Block 3: EINE Slideshow mit allen neun Projekten, gruppiert nach
 *                     Ursprung · Praxis · Keel, rechts das Live-Fenster des Projekts.
 * Sprache: die englischen Begriffe stehen als Überschrift (Schlagwörter), darunter je
 * ein Satz in normaler Sprache — kein Stakkato, keine Baukasten-Sätze.
 */

import React from "react";
import { motion } from "framer-motion";
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

// Würfel 1 — die vier Disziplinen. Englischer Begriff als Schlagwort, darunter
// ein Satz, wie ihn ein Mensch sagen würde.
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

// Würfel 2 — was dabei herauskommt.
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
 * Ein Würfel, der stehen bleibt, und vier Schritte, die daran vorbeilaufen.
 * Die Auswahl kommt entweder vom Scrollen (1→4 über die Länge der Strecke) oder
 * von der Maus/Tastatur — was zuletzt kam, gilt.
 */
function CubeWalk({
  type,
  items,
  reverse = false,
  label,
}: {
  type: "disziplinen" | "ergebnisse";
  items: { titel: string; text: string }[];
  reverse?: boolean;
  label: string;
}) {
  const [aktiv, setAktiv] = React.useState(0);
  const [zeigerFuehrt, setZeigerFuehrt] = React.useState(false);
  const schrittRefs = React.useRef<(HTMLLIElement | null)[]>([]);
  const farben = faceColors(type);

  // Welcher Schritt steht gerade in der Bildschirmmitte? Ein Beobachter auf einem
  // schmalen Band in der Mitte ist verlässlicher als ein Scroll-Fortschritt, der
  // beim ersten Bild noch kein gemessenes Layout hat.
  React.useEffect(() => {
    const beobachter = new IntersectionObserver(
      (eintraege) => {
        if (zeigerFuehrt) return;
        const treffer = eintraege.find((e) => e.isIntersecting);
        if (!treffer) return;
        const i = schrittRefs.current.indexOf(treffer.target as HTMLLIElement);
        if (i >= 0) setAktiv(i);
      },
      { rootMargin: "-45% 0px -45% 0px", threshold: 0 }
    );
    schrittRefs.current.forEach((el) => el && beobachter.observe(el));
    return () => beobachter.disconnect();
  }, [zeigerFuehrt]);

  return (
    <div className="relative lg:min-h-[200vh]">
      <div
        className={cn(
          "grid grid-cols-1 gap-10 lg:grid-cols-2 lg:gap-16",
          reverse && "lg:[&>*:first-child]:order-2"
        )}
      >
        {/* Der Würfel bleibt beim Scrollen stehen und dreht sich mit. */}
        <div className="lg:sticky lg:top-0 lg:flex lg:h-screen lg:items-center">
          <div className="mx-auto h-[380px] w-full max-w-[460px] lg:h-[480px]">
            <Loader type={type} activeFace={aktiv} />
          </div>
        </div>

        <ol className="space-y-3 lg:space-y-0" onMouseLeave={() => setZeigerFuehrt(false)}>
          {items.map((it, i) => {
            const an = aktiv === i;
            return (
              <li
                key={it.titel}
                ref={(el) => {
                  schrittRefs.current[i] = el;
                }}
                className="lg:flex lg:min-h-[50vh] lg:items-center"
              >
                <button
                  type="button"
                  onMouseEnter={() => {
                    setZeigerFuehrt(true);
                    setAktiv(i);
                  }}
                  onFocus={() => {
                    setZeigerFuehrt(true);
                    setAktiv(i);
                  }}
                  onBlur={() => setZeigerFuehrt(false)}
                  aria-current={an}
                  className={cn(
                    "w-full rounded-xl border-l-[3px] px-5 py-4 text-left transition-all duration-500 focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-current",
                    an ? "bg-foreground/[0.04]" : "border-l-transparent opacity-50 hover:opacity-90"
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
                      className="text-2xl font-black tracking-tight transition-colors duration-500 md:text-3xl"
                      style={{ color: an ? farben[i] : undefined }}
                    >
                      {it.titel}
                    </span>
                  </span>
                  <span className="mt-2 block max-w-[52ch] text-base leading-relaxed text-muted-foreground">
                    {it.text}
                  </span>
                </button>
              </li>
            );
          })}
        </ol>
      </div>

      <p className="mt-6 font-mono text-[10px] uppercase tracking-[0.28em] text-muted-foreground">
        {label}
      </p>
    </div>
  );
}

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

      <CubeWalk type="disziplinen" items={SCHRITTE} label="Prompt · Context · Harness · Skill Engineering" />

      <Reveal className="mb-8 mt-12">
        <div className="flex items-center gap-4">
          <ArrowDownRight className="h-5 w-5 text-primary" />
          <span className="font-mono text-[10px] font-bold uppercase tracking-[0.32em] text-primary md:text-xs">
            Und das kommt dabei heraus
          </span>
        </div>
      </Reveal>

      <CubeWalk type="ergebnisse" items={ERGEBNISSE} reverse label="Websites · Apps · Funnels · Automations" />
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
