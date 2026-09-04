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
import { Clock, Inbox, ClipboardCheck, LayoutDashboard, ShieldCheck, Sparkles, ArrowDown } from "lucide-react";

type Ersparnis = "Zeit" | "Geld" | "Nerven";

const KARTEN: { icon: React.ComponentType<{ className?: string; strokeWidth?: number }>; spart: Ersparnis; titel: string; text: string }[] = [
  { icon: Clock, spart: "Zeit", titel: "Die Woche hat wieder Luft", text: "Die immer gleichen Handgriffe erledigt ein Ablauf im Hintergrund. Übrig bleibt die Arbeit, für die es niemanden sonst gibt." },
  { icon: Inbox, spart: "Nerven", titel: "Keine Anfrage bleibt liegen", text: "Jede Nachricht bekommt sofort eine Antwort — auch mitten im Termin, auch längst nach Feierabend." },
  { icon: ClipboardCheck, spart: "Zeit", titel: "Schluss mit Abtippen", text: "Was in einem Programm steht, steht von allein auch im nächsten. Kein Copy-Paste, keine Zahlendreher." },
  { icon: LayoutDashboard, spart: "Nerven", titel: "Alles an einem Ort", text: "Statt fünf offener Tabs und drei Zetteln auf dem Tisch ein Bild, das immer stimmt." },
  { icon: ShieldCheck, spart: "Geld", titel: "Teure Fehler fallen vorher auf", text: "Ein Prüfschritt fängt ab, was sonst erst auf der Rechnung auffällt." },
  { icon: Sparkles, spart: "Nerven", titel: "Die lästigste Aufgabe nie wieder", text: "Die lästigste Aufgabe im Betrieb ist meistens genau die, die sich am besten automatisieren lässt." },
];

// akzent = Farbe je Ersparnis. Kein Pill-Stil mehr — die Ersparnis steht als reiner
// Text da, nicht als Knopf, der keiner ist.
const akzent: Record<Ersparnis, { icon: string; kicker: string; strip: string; glow: string }> = {
  Zeit: { icon: "text-sky-500", kicker: "text-sky-600 dark:text-sky-400", strip: "bg-sky-500", glow: "bg-sky-500/15" },
  Geld: { icon: "text-emerald-500", kicker: "text-emerald-600 dark:text-emerald-400", strip: "bg-emerald-500", glow: "bg-emerald-500/15" },
  Nerven: { icon: "text-amber-500", kicker: "text-amber-600 dark:text-amber-400", strip: "bg-amber-500", glow: "bg-amber-500/15" },
};

function AffiKarte({ karte }: { karte: (typeof KARTEN)[number] }) {
  const Icon = karte.icon;
  const a = akzent[karte.spart];
  return (
    <div className="group relative flex h-[62vh] max-h-[440px] w-[78vw] max-w-[340px] flex-shrink-0 flex-col justify-start overflow-hidden rounded-2xl border border-foreground/10 bg-gradient-to-b from-foreground/[0.06] to-foreground/[0.01] p-8 shadow-xl transition-transform duration-500 hover:-translate-y-1 sm:w-[320px] md:w-[340px]">
      <div className={`absolute inset-x-0 top-0 h-1.5 ${a.strip}`} />
      <div className={`pointer-events-none absolute -right-14 -top-14 h-44 w-44 rounded-full ${a.glow} blur-2xl`} />

      {/* Das Symbol trägt die Karte als großes, ruhiges Zeichen — statt klein in einem
          gerahmten Kästchen zu sitzen, wie es jede zweite Seite macht. */}
      <Icon
        className={`pointer-events-none absolute -bottom-6 -right-8 h-48 w-48 ${a.icon} opacity-[0.10] transition-transform duration-700 group-hover:scale-105`}
        strokeWidth={1.1}
      />

      {/* Die Ersparnis als Kicker, nicht als Knopf. */}
      <span className={`absolute left-8 top-9 font-mono text-[10px] font-bold uppercase tracking-[0.28em] ${a.kicker}`}>
        spart {karte.spart}
      </span>

      <div className="relative z-10 mt-12">
        <h3 className="text-2xl font-black leading-[1.1] tracking-tight text-foreground md:text-[27px]">{karte.titel}</h3>
        <p className="mt-4 text-base leading-relaxed text-muted-foreground">{karte.text}</p>
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
        Am Ende steht eine Automatisierung, die zum Betrieb passt. Ein paar Stellen, an denen wir ansetzen.
      </p>
    </div>
  );
}

// Letztes Panel der horizontalen Strecke: der Kopf der NÄCHSTEN Sektion wird noch von
// rechts hereingeschoben (der Sektionswechsel folgt damit der Slider-Bewegung, statt sie
// zu brechen). Erst danach geht es vertikal weiter durch die Spar-Beispiele.
// w-screen + negatives Margin gegen das Track-Padding: am Ende der Strecke füllt dieses
// Panel den GANZEN Bildschirm, die letzte Karte ist links raus. Ohne das stünde es nur
// neben der letzten Karte und der Wechsel würde sich anfühlen wie „einfach weiter runter".
function SektionsWechsel() {
  return (
    <div className="-mr-6 flex h-screen w-screen flex-shrink-0 flex-col items-center justify-center px-6 text-center md:-mr-24 md:px-24">
      <span className="mb-5 font-mono text-[10px] font-bold uppercase tracking-[0.32em] text-primary md:text-xs">
        Was das konkret bringt
      </span>
      <h2 className="text-5xl font-black leading-[0.95] tracking-tighter text-foreground md:text-7xl lg:text-8xl">
        Fünf Beispiele,
        <br />
        ganz konkret.
      </h2>
      <p className="mt-6 max-w-[46ch] text-lg leading-relaxed text-muted-foreground">
        Was eine Automatisierung an Zeit und Geld zurückholt. Die Zahlen sind Rechenbeispiele,
        keine Versprechen.
      </p>
      <span className="mt-10 inline-flex items-center gap-3 font-mono text-[10px] font-bold uppercase tracking-[0.28em] text-muted-foreground md:text-xs">
        <ArrowDown className="h-4 w-4 animate-bounce" />
        weiter nach unten
      </span>
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
    <section ref={ref} id="ansatz" className="relative h-[440vh] bg-background">
      <div className="sticky top-0 flex h-screen items-center overflow-hidden">
        <motion.div ref={trackRef} data-ansatz-track style={{ x }} className="flex w-max items-center gap-6 px-6 md:gap-8 md:px-24">
          <RevealTitel />
          {KARTEN.map((k) => (
            <AffiKarte key={k.titel} karte={k} />
          ))}
          <SektionsWechsel />
        </motion.div>
      </div>
    </section>
  );
}
