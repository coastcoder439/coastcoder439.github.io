"use client";

/**
 * v3 — zwei Blöcke der Vier-Block-Struktur (Owner 03.09.2026):
 *   AblaufSection   = Block 2 „So läuft es mit dir": Würfel 1 dreht die vier Schritte
 *                     aus Kundensicht (= Prompt/Context/Harness/Skill), Würfel 2 zeigt,
 *                     was dabei rauskommt.
 *   ProjekteSection = Block 3: EINE Slideshow mit allen neun Projekten, gruppiert nach
 *                     Ursprung · Praxis · Keel, rechts das Live-Fenster des Projekts (keine Screenshots).
 * Block 1 (Hero) und Block 4 (Buchen) liegen in HeroVisual bzw. CTASection.
 * Projekt-Texte wörtlich aus „Klare Kante" v4.6 (Praxis-Regel: kein Auftrags-/
 * Bezahlverhältnis behaupten, Prototyp-Vermerk als letzter Satz).
 */

import React from "react";
import { motion } from "framer-motion";
import { ArrowDownRight } from "lucide-react";
import Loader from "@/components/ui/Loader";
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

const CubeBlock = ({
  type,
  items,
  reverse = false,
}: {
  type: "disziplinen" | "ergebnisse";
  items: { title: string; sub: string; desc: string }[];
  reverse?: boolean;
}) => (
  <div
    className={cn(
      "grid grid-cols-1 items-center gap-10 lg:grid-cols-2 lg:gap-16",
      reverse && "lg:[&>*:first-child]:order-2"
    )}
  >
    <Reveal className="flex min-h-[360px] items-center justify-center">
      <div className="h-[420px] w-full max-w-[420px]">
        <Loader type={type} />
      </div>
    </Reveal>
    <Reveal delay={0.1}>
      <ol className="space-y-6">
        {items.map((it) => (
          <li key={it.title}>
            <h3 className="text-lg font-bold text-foreground md:text-xl">{it.title}</h3>
            <span className="mt-0.5 block font-mono text-[10px] uppercase tracking-[0.24em] text-primary">
              {it.sub}
            </span>
            <p className="mt-1.5 max-w-[52ch] text-base leading-relaxed text-muted-foreground">
              {it.desc}
            </p>
          </li>
        ))}
      </ol>
    </Reveal>
  </div>
);

const SHELL = "relative mx-auto max-w-[1180px] px-6 py-24 md:px-12 md:py-32";

// Würfel 1 — die vier Schritte aus Kundensicht; jede Würfelseite ist einer davon.
const SCHRITTE = [
  { title: "1 · Muster erkennen", sub: "Prompt-Engineering", desc: "Dein Problem ist selten neu. Ich finde das Muster dahinter — einmal erkannt, lässt es sich von einem Anwendungsfall auf deinen übertragen." },
  { title: "2 · Das Ganze sehen", sub: "Context-Engineering", desc: "Erst dein kompletter Ablauf, dann das Werkzeug: Welches Wissen die Aufgabe braucht, entscheidet der Blick aufs Ganze." },
  { title: "3 · Regeln in Code gießen", sub: "Harness-Engineering", desc: "Regeln statt Vertrauen: Disziplin steckt im Code, nicht im Prompt. Wächter, Gates und Messwerte halten Agenten ehrlich — in deinem Projekt wie in jedem anderen." },
  { title: "4 · Können übergeben", sub: "Skill-Engineering", desc: "Was sich bewährt hat, bleibt bei dir als abrufbares Können — geladen, wenn die Aufgabe es braucht, statt als Konzeptpapier im Ordner." },
];

// Würfel 2 — was dabei rauskommt (Texte aus dem Gate-Dokument).
const ERGEBNISSE = [
  { title: "Websites", sub: "Ergebnis", desc: "Seiten, die eine Geschichte erzählen statt Kacheln zu stapeln — wie die Radtour-Story rund um einen E-Bike-Verleih." },
  { title: "Apps", sub: "Ergebnis", desc: "Werkzeuge mit Oberfläche: vom Diktat-Overlay bis zum drehbaren 3D-Modell." },
  { title: "Funnels", sub: "Ergebnis", desc: "Strecken, die aus Besuchern Anfragen machen — ein Funnel-Builder entsteht gerade als Prototyp." },
  { title: "Automations", sub: "Ergebnis", desc: "Abläufe, die ohne Zuruf laufen: Ablage-Regeln, Agenten, Prüfschritte." },
];

const GRUPPE_URSPRUNG = "Ursprung · World Eden Era";
const GRUPPE_PRAXIS = "Praxis · Prototypen";
const GRUPPE_KEEL = "Keel · eigenes System";

const PROJEKTE: ShowcaseProject[] = [
  { id: "oasis", group: GRUPPE_URSPRUNG, name: "Oasis-Simulator", tag: "Live · Präsentation", url: "https://world-eden-era.org/project-oasis/", desc: "Mein Herzensprojekt — ursprünglich von mir entwickelt, heute gemeinsam mit meiner Orga weiterentwickelt: die Aquaponik-Oase als drehbares 3D-Modell im Browser (272 MB aus Blender) plus eine Simulation, die Wetter und Klima in Ertrag und Kosten einrechnet." },
  { id: "wee", group: GRUPPE_URSPRUNG, name: "WEE CRM", tag: "Live · Prototyp", url: "https://showcase-wee-crm.vercel.app", desc: "Fundraising-CRM der gUG, im Aufbau: Kontakte, Spenden, CSV-Import, Audit-Log auf React 19 und Supabase. Der Stand: ein getesteter Prototyp." },
  { id: "drive", group: GRUPPE_URSPRUNG, name: "Drive-Automatisierung", tag: "Ohne Live-Ansicht", desc: "Der Vereins-Drive gehorcht einer YAML als einziger Wahrheitsquelle. Python verteilt die Ablage-Regeln und meldet Abweichungen — 233 Dateien im Migrationsplan, jeder Lauf mit Abgleichsbericht." },
  { id: "wlbike", group: GRUPPE_PRAXIS, name: "WL Bike Rental", tag: "Live · Prototyp", url: "https://showcase-wl-bike.vercel.app", desc: "Scroll-Story rund um einen E-Bike-Verleih an der Ostsee: eine Radtour von Wald über Bodden bis Strand, jedes Angebot eine Station. Gebaut in Next.js, jeder Scroll-Zustand per Playwright-Screenshot verifiziert — der Stand: ein Prototyp." },
  { id: "nordwind", group: GRUPPE_PRAXIS, name: "Nordwind Studio", tag: "Live · Prototyp", url: "https://showcase-nordwind.vercel.app", desc: "Demo-Cockpit für Print-on-Demand auf Shopify: sieben KI-Agenten von Designfreigabe bis USt-Voranmeldung, im Browser durchklickbar ohne Server. 96 Belege treffen die GuV auf 0,00 Euro genau — der Stand: ein Prototyp." },
  { id: "funnel", group: GRUPPE_PRAXIS, name: "Funnel Desk", tag: "Live · Prototyp", url: "https://showcase-funnel-desk.vercel.app/dashboard", desc: "Akquise-Trichter im Vergleich: mehrere Zielgruppen nebeneinander, dieselben sechs Stufen von Reichweite bis Bindung, Betreiber-Dashboard plus mobile Auslieferung. Gedacht im Verbund mit Social-Dashboard und CRM — der Stand: ein Prototyp." },
  { id: "keel", group: GRUPPE_KEEL, name: "Keel Showcase", tag: "Live · zum Durchklicken", url: "https://keel-showcase.vercel.app", desc: "Die Keel-Oberfläche zum Durchklicken: Website-Builder, Social Media, Commerce. Ohne Server, ohne Anmeldung — direkt hier eingebettet." },
  { id: "harness", group: GRUPPE_KEEL, name: "Keel-Harness", tag: "Ohne Live-Ansicht", desc: "Ein Bausatz, der KI-Agenten diszipliniert arbeiten lässt: Wächter-Hooks, Dauer-Regeln, Mess-Dashboard. Ein Satz an den Agenten installiert ihn in jeden Projektordner." },
  { id: "flowvoice", group: GRUPPE_KEEL, name: "FlowVoice", tag: "Ohne Live-Ansicht", desc: "Diktat für Windows: Hotkey drücken, sprechen — der Text steht im aktiven Fenster. Vier Erkennungs-Engines zur Wahl, von komplett lokal bis Groq." },
];

export function AblaufSection() {
  return (
    <section id="ablauf" className={cn("relative z-20 bg-background text-foreground", SHELL)}>
      <SectionHead nr="Ablauf — so läuft es mit dir" title="Erkennen. Sehen. Bauen. Übergeben." />
      <Copy>
        Was in der Aquaponik hält, trägt im Verleih, im Print-on-Demand, im Agenten-System. Vier
        Schritte, mit denen ich dein Problem in ein laufendes System übersetze — jede Seite des
        Würfels ist einer davon.
      </Copy>
      <div className="mt-10">
        <CubeBlock type="disziplinen" items={SCHRITTE} />
      </div>
      <Reveal className="mb-8 mt-24">
        <div className="flex items-center gap-4">
          <ArrowDownRight className="h-5 w-5 text-primary" />
          <span className="font-mono text-[10px] font-bold uppercase tracking-[0.32em] text-primary md:text-xs">
            Was dabei rauskommt
          </span>
        </div>
      </Reveal>
      <CubeBlock type="ergebnisse" items={ERGEBNISSE} reverse />
    </section>
  );
}

export function ProjekteSection() {
  return (
    <section id="projekte" className={cn("relative z-20 bg-background text-foreground border-t border-foreground/10", SHELL)}>
      <SectionHead nr="Projekte — die Schritte an echten Problemen" title="Echte Probleme, echte Lösungen." />
      <Copy>
        Neun Projekte, drei Herkünfte: die NGO, an der alles begann — Prototypen für echte
        Probleme — Keel, mein eigenes System. Wo eine Vorschau möglich ist, siehst du die echte Oberfläche,
        kein Bild.
      </Copy>
      <div className="mt-10">
        <ProjectHoverShowcase projects={PROJEKTE} />
      </div>
    </section>
  );
}
