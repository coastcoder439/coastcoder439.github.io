"use client";

/**
 * v3.5 — „Wo setzen wir an?": die Side-Scroll-Karten-Strecke aus dem Template
 * (gepinnt, alles slidet horizontal, während man vertikal scrollt). In EINER Reihe:
 *   1. der Block-Reveal-Titel (Farbbalken wischen über den Text, aus der alten
 *      Kennzahlen-Sektion) — kommt als erste „Karte" mit.
 *   2. sechs Affirmations-Karten (wo der Kunde Zeit/Geld/Nerven spart), farbig akzentuiert.
 *   3. zwei Spar-Beispiel-Kästchen in der GitHub/Kaggle-Optik des Templates (großer Titel,
 *      Zahlen, Beschreibung) — BEISPIEL-Inhalte, vom Owner mit echten Zahlen ersetzbar.
 * Danach geht es vertikal weiter zur Buchen-Sektion (keine Schluss-Karte mehr hier).
 */

import React from "react";
import { motion, useScroll, useTransform, useReducedMotion } from "framer-motion";
import { Clock, Inbox, ClipboardCheck, LayoutDashboard, ShieldCheck, Sparkles, FileText, MessageSquareReply } from "lucide-react";

type Ersparnis = "Zeit" | "Geld" | "Nerven";

const KARTEN: { icon: React.ComponentType<{ className?: string }>; spart: Ersparnis; titel: string; text: string }[] = [
  { icon: Clock, spart: "Zeit", titel: "Deine Woche hat wieder Luft", text: "Die immer gleichen Handgriffe erledigt ein Ablauf im Hintergrund. Du kümmerst dich um das, wofür dich niemand ersetzen kann." },
  { icon: Inbox, spart: "Nerven", titel: "Keine Anfrage bleibt liegen", text: "Jede Nachricht bekommt sofort eine Antwort, auch wenn du beim Kunden bist oder längst Feierabend hast." },
  { icon: ClipboardCheck, spart: "Zeit", titel: "Schluss mit Abtippen", text: "Was in einem Programm steht, steht von allein auch im nächsten. Kein Copy-Paste, keine Zahlendreher." },
  { icon: LayoutDashboard, spart: "Nerven", titel: "Alles an einem Ort", text: "Statt fünf offener Tabs und drei Zetteln auf dem Tisch ein Bild, das immer stimmt." },
  { icon: ShieldCheck, spart: "Geld", titel: "Teure Fehler fallen vorher auf", text: "Ein Prüfschritt fängt ab, was dich sonst erst die Rechnung merken lässt." },
  { icon: Sparkles, spart: "Nerven", titel: "Die lästigste Aufgabe nie wieder", text: "Sag mir, was dich am meisten nervt. Die Chancen stehen gut, dass genau das sich automatisieren lässt." },
];

// akzent = Farbe des Icons/Tags/oberen Streifens je Ersparnis (bringt Farbe in die Karten).
const akzent: Record<Ersparnis, { icon: string; tag: string; strip: string; glow: string }> = {
  Zeit: { icon: "text-sky-500", tag: "text-sky-600 dark:text-sky-400 border-sky-500/40 bg-sky-500/10", strip: "bg-sky-500", glow: "bg-sky-500/15" },
  Geld: { icon: "text-emerald-500", tag: "text-emerald-600 dark:text-emerald-400 border-emerald-500/40 bg-emerald-500/10", strip: "bg-emerald-500", glow: "bg-emerald-500/15" },
  Nerven: { icon: "text-amber-500", tag: "text-amber-600 dark:text-amber-400 border-amber-500/40 bg-amber-500/10", strip: "bg-amber-500", glow: "bg-amber-500/15" },
};

// Spar-Beispiel-Kästchen (GitHub/Kaggle-Optik). BEISPIEL-Zahlen — vom Owner ersetzbar.
const BEISPIELE: {
  icon: React.ComponentType<{ className?: string }>;
  label: string;
  titel: string;
  akzent: string;
  desc: string;
  zahlen: { wert: string; label: string }[];
}[] = [
  {
    icon: FileText,
    label: "Beispiel · Angebote & Rechnungen",
    titel: "Vom Auftrag zur Rechnung,",
    akzent: "ohne Abtippen.",
    desc: "Auftragsdaten wandern von allein ins Angebot, in die Rechnung und in die Buchhaltung. Ein Vorgang, ein Klick.",
    zahlen: [
      { wert: "20 Min", label: "statt 4 Std je Vorgang" },
      { wert: "~2 Tage", label: "frei pro Monat" },
      { wert: "0", label: "Zahlendreher" },
    ],
  },
  {
    icon: MessageSquareReply,
    label: "Beispiel · Kundenanfragen",
    titel: "Jede Anfrage sofort",
    akzent: "beantwortet.",
    desc: "Eine erste Antwort geht raus, während du noch beim Kunden bist. Passende Termine schlägt das System selbst vor.",
    zahlen: [
      { wert: "< 1 Min", label: "bis zur ersten Antwort" },
      { wert: "rund um die Uhr", label: "auch nach Feierabend" },
      { wert: "0", label: "verpasste Anfragen" },
    ],
  },
];

function AffiKarte({ karte }: { karte: (typeof KARTEN)[number] }) {
  const Icon = karte.icon;
  const a = akzent[karte.spart];
  return (
    <div className="group relative flex h-[62vh] max-h-[440px] w-[78vw] max-w-[340px] flex-shrink-0 flex-col justify-between overflow-hidden rounded-2xl border border-foreground/10 bg-gradient-to-b from-foreground/[0.06] to-foreground/[0.01] p-8 shadow-xl transition-transform duration-500 hover:-translate-y-1 sm:w-[320px] md:w-[340px]">
      <div className={`absolute inset-x-0 top-0 h-1.5 ${a.strip}`} />
      <div className={`pointer-events-none absolute -right-12 -top-12 h-44 w-44 rounded-full ${a.glow} blur-2xl`} />
      <div className="flex items-center justify-between">
        <span className="grid h-14 w-14 place-content-center rounded-2xl border border-foreground/10 bg-background">
          <Icon className={`h-7 w-7 ${a.icon}`} />
        </span>
        <span className={`rounded-full border px-3 py-1 font-mono text-[10px] uppercase tracking-wider ${a.tag}`}>
          spart {karte.spart}
        </span>
      </div>
      <div>
        <h3 className="text-2xl font-black leading-tight tracking-tight text-foreground md:text-[26px]">{karte.titel}</h3>
        <p className="mt-4 text-base leading-relaxed text-muted-foreground">{karte.text}</p>
      </div>
    </div>
  );
}

function BeispielKarte({ beispiel }: { beispiel: (typeof BEISPIELE)[number] }) {
  const Icon = beispiel.icon;
  return (
    <div className="relative flex h-[66vh] max-h-[500px] w-[90vw] max-w-[680px] flex-shrink-0 flex-col justify-between overflow-hidden rounded-2xl border border-foreground/10 bg-gradient-to-br from-foreground/[0.06] to-transparent p-8 shadow-xl md:p-12">
      <div>
        <div className="mb-8 flex items-center gap-3">
          <span className="grid h-9 w-9 place-content-center rounded-lg bg-primary/15">
            <Icon className="h-5 w-5 text-primary" />
          </span>
          <span className="font-mono text-[11px] font-bold uppercase tracking-[0.24em] text-primary">{beispiel.label}</span>
        </div>
        <h3 className="max-w-[16ch] text-3xl font-black leading-[0.98] tracking-tighter text-foreground md:text-4xl lg:text-5xl">
          {beispiel.titel} <span className="text-primary">{beispiel.akzent}</span>
        </h3>
        <p className="mt-5 max-w-[46ch] text-base leading-relaxed text-muted-foreground md:text-lg">{beispiel.desc}</p>
      </div>
      <div className="mt-8 grid grid-cols-3 gap-4 border-t border-foreground/10 pt-6">
        {beispiel.zahlen.map((z) => (
          <div key={z.label}>
            <div className="text-2xl font-black tracking-tighter text-foreground md:text-3xl">{z.wert}</div>
            <div className="mt-1 font-mono text-[10px] uppercase leading-tight tracking-wider text-muted-foreground">{z.label}</div>
          </div>
        ))}
      </div>
    </div>
  );
}

// Block-Reveal-Titel (aus der alten Kennzahlen-Sektion): Farbbalken wischen Zeile für
// Zeile über den Text. Läuft als erste, breite „Karte" in der horizontalen Reihe mit.
const TITEL_ZEILEN = [
  { text: "Mehr Zeit.", color: "#0ea5e9" },
  { text: "Weniger Kosten.", color: "#10b981" },
  { text: "Ruhigere Nerven.", color: "#f59e0b" },
];

function RevealTitel() {
  // Wie bucket.tsx und Loader.tsx: bei reduzierter Bewegung kein Farbbalken-Wisch,
  // der Text steht sofort da (der scroll-gebundene Horizontal-Slide bleibt, weil
  // scroll-verknuepfte Bewegung nicht unter reduced-motion faellt).
  const reduce = useReducedMotion();
  return (
    <div className="flex h-[62vh] max-h-[440px] w-[86vw] max-w-[520px] flex-shrink-0 flex-col justify-center pr-4">
      <span className="mb-5 font-mono text-[10px] font-bold uppercase tracking-[0.32em] text-primary md:text-xs">
        Wo setzen wir an?
      </span>
      <div className="space-y-1 md:space-y-2">
        {TITEL_ZEILEN.map((line, i) => (
          <div key={line.text} className="relative block overflow-hidden py-1">
            <motion.p
              initial={reduce ? false : { opacity: 0 }}
              whileInView={{ opacity: 1 }}
              viewport={{ once: true, margin: "-20px" }}
              transition={{ delay: reduce ? 0 : i * 0.15 + 0.35, duration: 0.01 }}
              className="text-4xl font-black leading-[0.95] tracking-tighter text-foreground md:text-6xl lg:text-7xl"
            >
              {line.text}
            </motion.p>
            {!reduce && (
              <motion.div
                initial={{ clipPath: i % 2 === 0 ? "inset(0 100% 0 0)" : "inset(0 0 0 100%)" }}
                whileInView={{
                  clipPath:
                    i % 2 === 0
                      ? ["inset(0 100% 0 0)", "inset(0 0% 0 0)", "inset(0 0% 0 0)", "inset(0 0 0 100%)"]
                      : ["inset(0 0 0 100%)", "inset(0 0% 0 0)", "inset(0 0% 0 0)", "inset(0 100% 0 0)"],
                }}
                viewport={{ once: true, margin: "-20px" }}
                transition={{ duration: 0.75, times: [0, 0.45, 0.55, 1], delay: i * 0.15, ease: [0.85, 0, 0.15, 1] }}
                className="absolute inset-0 z-10"
                style={{ backgroundColor: line.color }}
              />
            )}
          </div>
        ))}
      </div>
      <p className="mt-6 max-w-[36ch] text-lg leading-relaxed text-muted-foreground">
        Das gibt dir eine Automatisierung zurück, die zu deinem Betrieb passt. Ein paar Stellen, an denen wir ansetzen.
      </p>
    </div>
  );
}

export function AnsatzScroll() {
  const ref = React.useRef<HTMLElement>(null);
  const trackRef = React.useRef<HTMLDivElement>(null);
  const { scrollYProgress } = useScroll({ target: ref });

  // Überbreite in Pixeln messen — so slidet die letzte Karte auf jedem Viewport
  // rechtsbündig herein, statt mit einem festen Prozentwert.
  const [ueberbreite, setUeberbreite] = React.useState(0);
  React.useEffect(() => {
    const messen = () => {
      const track = trackRef.current;
      if (!track || !track.parentElement) return;
      setUeberbreite(Math.max(0, track.scrollWidth - track.parentElement.clientWidth));
    };
    messen();
    const t = setTimeout(messen, 400);
    window.addEventListener("resize", messen);
    return () => {
      clearTimeout(t);
      window.removeEventListener("resize", messen);
    };
  }, []);
  const x = useTransform(scrollYProgress, [0, 1], [0, -ueberbreite]);

  return (
    <section ref={ref} id="ansatz" className="relative h-[420vh] bg-background">
      <div className="sticky top-0 flex h-screen items-center overflow-hidden">
        <motion.div ref={trackRef} style={{ x }} className="flex w-max items-center gap-6 px-6 md:gap-8 md:px-24">
          <RevealTitel />
          {KARTEN.map((k) => (
            <AffiKarte key={k.titel} karte={k} />
          ))}
          {BEISPIELE.map((b) => (
            <BeispielKarte key={b.label} beispiel={b} />
          ))}
        </motion.div>
      </div>
    </section>
  );
}
