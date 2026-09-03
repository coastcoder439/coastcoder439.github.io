"use client";

/**
 * v3.4 — ersetzt die Kennzahlen-Strecke (Owner: die Zahlen-Box interessiert keinen Kunden).
 * Nutzt die Side-Scroll-Karten-Motion aus dem Template (HorizontalScrollCarousel: gepinnte
 * Strecke, Karten schieben horizontal, während man vertikal scrollt). Inhalt jetzt
 * kundenzentriert: positive Affirmationen, die den Kunden überlegen lassen, wo er Zeit,
 * Geld und Nerven spart und was wir gemeinsam umsetzen.
 */

import React from "react";
import { motion, useScroll, useTransform } from "framer-motion";
import { Clock, Inbox, ClipboardCheck, LayoutDashboard, ShieldCheck, Sparkles, ArrowRight, CalendarDays } from "lucide-react";
import { handleAnchorClick } from "@/lib/scroll";

type Ersparnis = "Zeit" | "Geld" | "Nerven";

const KARTEN: { icon: React.ComponentType<{ className?: string }>; spart: Ersparnis; titel: string; text: string }[] = [
  {
    icon: Clock,
    spart: "Zeit",
    titel: "Deine Woche hat wieder Luft",
    text: "Die immer gleichen Handgriffe erledigt ein Ablauf im Hintergrund. Du kümmerst dich um das, wofür dich niemand ersetzen kann.",
  },
  {
    icon: Inbox,
    spart: "Nerven",
    titel: "Keine Anfrage bleibt liegen",
    text: "Jede Nachricht bekommt sofort eine Antwort, auch wenn du beim Kunden bist oder längst Feierabend hast.",
  },
  {
    icon: ClipboardCheck,
    spart: "Zeit",
    titel: "Schluss mit Abtippen",
    text: "Was in einem Programm steht, steht von allein auch im nächsten. Kein Copy-Paste, keine Zahlendreher.",
  },
  {
    icon: LayoutDashboard,
    spart: "Nerven",
    titel: "Alles an einem Ort",
    text: "Statt fünf offener Tabs und drei Zetteln auf dem Tisch ein Bild, das immer stimmt.",
  },
  {
    icon: ShieldCheck,
    spart: "Geld",
    titel: "Teure Fehler fallen vorher auf",
    text: "Ein Prüfschritt fängt ab, was dich sonst erst die Rechnung merken lässt.",
  },
  {
    icon: Sparkles,
    spart: "Nerven",
    titel: "Die lästigste Aufgabe nie wieder",
    text: "Sag mir, was dich am meisten nervt. Die Chancen stehen gut, dass genau das sich automatisieren lässt.",
  },
];

const tagFarbe: Record<Ersparnis, string> = {
  Zeit: "text-sky-600 dark:text-sky-400 border-sky-500/40 bg-sky-500/10",
  Geld: "text-emerald-600 dark:text-emerald-400 border-emerald-500/40 bg-emerald-500/10",
  Nerven: "text-amber-600 dark:text-amber-400 border-amber-500/40 bg-amber-500/10",
};

function Karte({ karte }: { karte: (typeof KARTEN)[number] }) {
  const Icon = karte.icon;
  return (
    <div className="group relative flex h-[62vh] max-h-[440px] w-[78vw] max-w-[360px] flex-shrink-0 flex-col justify-between overflow-hidden rounded-2xl border border-foreground/10 bg-foreground/[0.03] p-8 shadow-xl transition-colors duration-500 hover:bg-foreground/[0.06] sm:w-[340px] md:w-[360px]">
      <div className="pointer-events-none absolute -right-10 -top-10 h-40 w-40 rounded-full bg-primary/5 opacity-0 blur-2xl transition-opacity duration-500 group-hover:opacity-100" />
      <div className="flex items-center justify-between">
        <span className="grid h-12 w-12 place-content-center rounded-xl border border-foreground/10 bg-background">
          <Icon className="h-6 w-6 text-foreground" />
        </span>
        <span className={`rounded-full border px-3 py-1 font-mono text-[10px] uppercase tracking-wider ${tagFarbe[karte.spart]}`}>
          spart {karte.spart}
        </span>
      </div>
      <div>
        <h3 className="text-2xl font-black leading-tight tracking-tight text-foreground md:text-3xl">{karte.titel}</h3>
        <p className="mt-4 text-base leading-relaxed text-muted-foreground">{karte.text}</p>
      </div>
    </div>
  );
}

// Abschluss-Karte: der Denkanstoß mündet in die Terminbuchung.
function SchlussKarte() {
  return (
    <div className="group relative flex h-[62vh] max-h-[440px] w-[78vw] max-w-[360px] flex-shrink-0 flex-col justify-between overflow-hidden rounded-2xl bg-foreground p-8 text-background shadow-xl sm:w-[340px] md:w-[360px]">
      <span className="grid h-12 w-12 place-content-center rounded-xl bg-background/15">
        <CalendarDays className="h-6 w-6" />
      </span>
      <div>
        <h3 className="text-2xl font-black leading-tight tracking-tight md:text-3xl">Fällt dir gerade was ein?</h3>
        <p className="mt-4 text-base leading-relaxed text-background/80">
          Dann lass uns eine halbe Stunde darüber reden. Unverbindlich, und danach weißt du, ob sich der Aufwand lohnt.
        </p>
        <a
          href="#buchen"
          onClick={(e) => handleAnchorClick(e, "buchen")}
          className="mt-6 inline-flex items-center gap-2 rounded-full bg-background px-6 py-3 text-sm font-black uppercase tracking-widest text-foreground transition-transform duration-300 hover:-translate-y-0.5 focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-background"
        >
          Gespräch buchen <ArrowRight className="h-4 w-4" />
        </a>
      </div>
    </div>
  );
}

export function AnsatzScroll() {
  const ref = React.useRef<HTMLElement>(null);
  const trackRef = React.useRef<HTMLDivElement>(null);
  const { scrollYProgress } = useScroll({ target: ref });

  // Die Überbreite in Pixeln messen (Karten-Reihe minus sichtbarer Bereich) — so
  // scrollt die letzte Karte auf JEDEM Viewport genau rechtsbündig herein, statt
  // mit einem festen Prozentwert, der nur auf einer Breite passt.
  const [ueberbreite, setUeberbreite] = React.useState(0);
  React.useEffect(() => {
    const messen = () => {
      const track = trackRef.current;
      if (!track || !track.parentElement) return;
      setUeberbreite(Math.max(0, track.scrollWidth - track.parentElement.clientWidth));
    };
    messen();
    window.addEventListener("resize", messen);
    return () => window.removeEventListener("resize", messen);
  }, []);
  const x = useTransform(scrollYProgress, [0, 1], [0, -ueberbreite]);

  return (
    <section ref={ref} id="ansatz" className="relative h-[300vh] bg-background">
      <div className="sticky top-0 flex h-screen flex-col overflow-hidden">
        <div className="z-20 flex-shrink-0 px-6 pt-24 md:px-24 md:pt-28">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8, ease: [0.16, 1, 0.3, 1] }}
          >
            <span className="font-mono text-[10px] font-bold uppercase tracking-[0.32em] text-primary md:text-xs">
              Wo setzen wir an?
            </span>
            <h2 className="mt-4 max-w-4xl text-4xl font-black leading-[0.95] tracking-tighter text-foreground md:text-6xl lg:text-7xl">
              Wo gehen dir gerade Zeit, Geld und Nerven verloren?
            </h2>
            <p className="mt-5 max-w-2xl text-lg leading-relaxed text-muted-foreground">
              Überleg mal beim Weiterscrollen. Genau an diesen Stellen fangen wir an.
            </p>
          </motion.div>
        </div>

        <div className="relative mt-8 flex flex-1 items-center md:mt-10">
          <motion.div ref={trackRef} style={{ x }} className="flex w-max gap-6 px-6 md:gap-8 md:px-24">
            {KARTEN.map((k) => (
              <Karte key={k.titel} karte={k} />
            ))}
            <SchlussKarte />
          </motion.div>
        </div>
      </div>
    </section>
  );
}
