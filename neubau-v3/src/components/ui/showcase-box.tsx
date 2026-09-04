"use client";

/**
 * ShowcaseBox — die Showcase-Box aus dem Template (github-showcase.tsx „GitHub Ecosystem"
 * / kaggle-showcase.tsx „Kaggle Intelligence"), 1:1 in Optik und Motion.
 *
 * Zugeklappt: das große runde Panel mit Header, großem Titel und drei hochzählenden
 * Zahlen. Aufgeklappt: der Vollbildschirm des Templates — Portal-Overlay mit
 * Weichzeichner, gerundetes Panel, Schließen-Knopf oben rechts, darin ein Grid aus
 * Panels mit den magnetischen Badge-Überschriften.
 *
 * Inhalt hier: Leons Automatisierungs-Beispiele. Zugeklappt steht das Ergebnis,
 * aufgeklappt die RECHNUNG dahinter — mit offen benannten Annahmen, damit keine Zahl
 * als Zusage dasteht, sondern als Beispiel, das man nachrechnen kann.
 */

import React, { useState, useEffect, useRef } from "react";
import { createPortal } from "react-dom";
import { motion, AnimatePresence, useInView, animate, useReducedMotion } from "framer-motion";
import { Maximize2, Minimize2 } from "lucide-react";
import { cn } from "@/lib/utils";
import { getLenis } from "@/lib/scroll";

export type ShowcaseStat = { prefix?: string; value: number; suffix?: string; label: string };

/** Die Rechnung hinter der Zahl, plus was sich im Alltag ändert. */
export type ShowcaseDetail = {
  /** Rechenweg Zeile für Zeile. `hervor` markiert die Ergebniszeile. */
  rechnung: { schritt: string; wert: string; hervor?: boolean }[];
  heute: string[];
  danach: string[];
  /** Worauf die Rechnung beruht — offen benannt, damit sie nachrechenbar bleibt. */
  annahmen: string[];
  dauer: string;
};

export type ShowcaseInhalt = {
  accent: string;
  icon: React.ComponentType<{ className?: string }>;
  kicker: string;
  titel: string;
  titelZweite: string;
  akzent: string;
  stats: ShowcaseStat[];
  beschreibung: string;
  detail: ShowcaseDetail;
};

const springTransition = { type: "spring" as const, stiffness: 300, damping: 30 };

// Counter aus dem Original (kaggle-showcase.tsx) — zählt beim Sichtbarwerden hoch.
// Ergänzt: bei reduzierter Bewegung steht der Zielwert sofort.
function Counter({ value, duration = 1.5 }: { value: number; duration?: number }) {
  const reduce = useReducedMotion();
  const [count, setCount] = useState(reduce ? value : 0);
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true });

  useEffect(() => {
    if (reduce) {
      setCount(value);
      return;
    }
    if (isInView && value > 0) {
      const controls = animate(0, value, {
        duration,
        onUpdate: (latest) => setCount(Math.floor(latest)),
        ease: "easeOut",
      });
      return () => controls.stop();
    }
  }, [isInView, value, duration, reduce]);

  return <span ref={ref}>{count.toLocaleString("de-DE")}</span>;
}

// InteractiveBadge aus dem Template: magnetischer Pill, der sich zur Maus neigt und
// dessen Fläche beim Überfahren von links einläuft. Überschrift der Detail-Panels.
function InteractiveBadge({
  children,
  className,
  fillColor,
  rotation = 0,
}: {
  children: React.ReactNode;
  className?: string;
  fillColor: string;
  rotation?: number;
}) {
  const ref = useRef<HTMLDivElement>(null);
  const [position, setPosition] = useState({ x: 0, y: 0 });

  const handleMouse = (e: React.MouseEvent<HTMLDivElement>) => {
    if (!ref.current) return;
    const { clientX, clientY } = e;
    const { height, width, left, top } = ref.current.getBoundingClientRect();
    setPosition({ x: (clientX - (left + width / 2)) * 0.2, y: (clientY - (top + height / 2)) * 0.2 });
  };

  return (
    <motion.div
      ref={ref}
      onMouseMove={handleMouse}
      onMouseLeave={() => setPosition({ x: 0, y: 0 })}
      animate={{ x: position.x, y: position.y, rotate: rotation }}
      transition={{ type: "spring", stiffness: 150, damping: 15, mass: 0.1 }}
      className="relative z-20 w-fit"
    >
      <motion.h3
        className={cn(
          "group relative overflow-hidden rounded-full px-6 py-2.5 text-lg font-black shadow-lg",
          className,
        )}
        whileHover={{ scale: 1.05 }}
      >
        <div
          className="absolute inset-0 h-full w-full origin-left scale-x-0 transition-transform duration-300 ease-out group-hover:scale-x-100"
          style={{ backgroundColor: fillColor }}
        />
        <span className="relative z-10 transition-colors duration-300 group-hover:text-black">{children}</span>
      </motion.h3>
    </motion.div>
  );
}

/** Ein Panel im Detail-Grid — gleiche Machart wie im Template. */
function Panel({
  ueberschrift,
  accent,
  weit = false,
  children,
}: {
  ueberschrift: string;
  accent: string;
  weit?: boolean;
  children: React.ReactNode;
}) {
  return (
    <div
      className={cn(
        "relative rounded-[2rem] border border-black/5 bg-[#F8F8F8] p-8 dark:border-white/5 dark:bg-[#111111]",
        weit && "lg:col-span-2",
      )}
    >
      <div className="flex flex-col gap-7">
        <InteractiveBadge className="bg-white text-black dark:bg-zinc-800 dark:text-white" fillColor={accent}>
          {ueberschrift}
        </InteractiveBadge>
        {children}
      </div>
    </div>
  );
}

/** Aufzählung mit farbigem Punkt statt Listenzeichen. */
function Punkte({ eintraege, accent }: { eintraege: string[]; accent: string }) {
  return (
    <ul className="flex flex-col gap-4">
      {eintraege.map((e) => (
        <li key={e} className="flex gap-3 text-[15px] leading-relaxed text-black/70 dark:text-white/60">
          <span className="mt-[9px] h-1.5 w-1.5 flex-shrink-0 rounded-full" style={{ backgroundColor: accent }} />
          <span>{e}</span>
        </li>
      ))}
    </ul>
  );
}

export function ShowcaseBox({ inhalt }: { inhalt: ShowcaseInhalt }) {
  const Icon = inhalt.icon;
  const [offen, setOffen] = useState(false);
  const [mounted, setMounted] = useState(false);

  useEffect(() => setMounted(true), []);

  // Scroll sperren, solange der Vollbildschirm offen ist (wie im Template über Lenis),
  // und mit Escape schließen.
  useEffect(() => {
    const lenis = getLenis() as { stop?: () => void; start?: () => void } | null;
    if (!offen) {
      lenis?.start?.();
      document.documentElement.style.overflow = "";
      return;
    }
    lenis?.stop?.();
    document.documentElement.style.overflow = "hidden";
    const beiTaste = (e: KeyboardEvent) => {
      if (e.key === "Escape") setOffen(false);
    };
    window.addEventListener("keydown", beiTaste);
    return () => {
      window.removeEventListener("keydown", beiTaste);
      lenis?.start?.();
      document.documentElement.style.overflow = "";
    };
  }, [offen]);

  const kopf = (
    <>
      {/* pr-16: rechts sitzt der runde Knopf — ohne den Abstand liegt er auf dem Kicker. */}
      <div className="flex items-center gap-3 pr-16" style={{ color: inhalt.accent }}>
        <Icon className="h-8 w-8" />
        <span className="text-sm font-bold uppercase tracking-[0.3em] opacity-70">{inhalt.kicker}</span>
      </div>
      <h2 className="text-4xl font-bold leading-[0.9em] tracking-tight text-black dark:text-white md:text-5xl lg:text-6xl">
        {inhalt.titel} <br />
        <span className="flex flex-wrap items-center gap-2">
          {inhalt.titelZweite} <span style={{ color: inhalt.accent }}>{inhalt.akzent}</span>
        </span>
      </h2>
    </>
  );

  return (
    <>
      <motion.div
        transition={springTransition}
        initial={{ opacity: 0, scale: 0.95 }}
        whileInView={{ opacity: 1, scale: 1 }}
        viewport={{ once: true }}
        onClick={() => setOffen(true)}
        className="group/master relative mx-auto w-[90vw] max-w-[980px] cursor-pointer overflow-hidden rounded-[3rem] border border-black/5 bg-white p-8 shadow-2xl transition-all duration-700 dark:border-white/10 dark:bg-[#0A0A0A] md:p-12"
      >
        <motion.button
          type="button"
          onClick={(e) => {
            e.stopPropagation();
            setOffen(true);
          }}
          whileHover={{ scale: 1.1 }}
          whileTap={{ scale: 0.9 }}
          aria-label={`Rechenbeispiel öffnen: ${inhalt.titel} ${inhalt.titelZweite} ${inhalt.akzent}`.replace(/\s+/g, " ")}
          className="absolute right-8 top-8 z-50 rounded-full bg-black p-4 text-white shadow-2xl dark:bg-white dark:text-black"
        >
          <Maximize2 size={22} />
        </motion.button>

        <div className="relative z-10 flex w-full flex-col items-start justify-between gap-8 md:flex-row">
          <div className="max-w-2xl space-y-6">
            {kopf}
            <div className="flex flex-row flex-wrap items-center gap-8">
              {inhalt.stats.map((s) => (
                <div key={s.label} className="flex flex-col">
                  <span className="text-3xl font-black tracking-tighter tabular-nums" style={{ color: inhalt.accent }}>
                    {s.prefix}
                    <Counter value={s.value} />
                    {s.suffix}
                  </span>
                  <span className="text-[10px] font-black uppercase tracking-widest opacity-40">{s.label}</span>
                </div>
              ))}
            </div>
          </div>

          <div className="max-w-sm pt-12 md:pt-20">
            <p className="text-lg font-semibold leading-relaxed text-black/50 dark:text-white/40">
              {inhalt.beschreibung}
            </p>
            {/* Steht IMMER da, nicht nur beim Überfahren: Die Zahlen oben sind
                Rechenbeispiele mit offenen Annahmen, keine Zusagen. Im zugeklappten
                Zustand ist die Zahl sonst ungeschützt. */}
            <p className="mt-6 text-[13px] leading-relaxed text-black/45 dark:text-white/35">
              Rechenbeispiel mit offen genannten Annahmen — deine Zahlen rechnen wir im
              Gespräch durch.
            </p>
            <span
              className="mt-3 inline-block font-mono text-[11px] font-bold uppercase tracking-[0.24em] opacity-60 transition-opacity duration-500 group-hover/master:opacity-100"
              style={{ color: inhalt.accent }}
            >
              Rechenweg ansehen
            </span>
          </div>
        </div>
      </motion.div>

      {mounted &&
        createPortal(
          <AnimatePresence>
            {offen && (
              <>
              <motion.div
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                exit={{ opacity: 0 }}
                transition={{ duration: 0.3 }}
                className="fixed inset-0 z-[9999] overflow-y-auto bg-white/70 backdrop-blur-md dark:bg-black/80"
                onClick={() => setOffen(false)}
                data-lenis-prevent
              >
                <motion.div
                  initial={{ opacity: 0, scale: 0.9, y: 40 }}
                  animate={{ opacity: 1, scale: 1, y: 0 }}
                  exit={{ opacity: 0, scale: 0.9, y: 40 }}
                  transition={springTransition}
                  onClick={(e) => e.stopPropagation()}
                  role="dialog"
                  aria-modal="true"
                  aria-label={`Rechenbeispiel: ${inhalt.titel} ${inhalt.titelZweite} ${inhalt.akzent}`.replace(/\s+/g, " ")}
                  className="relative mx-auto my-10 w-full max-w-[1600px] rounded-[3rem] border border-black/10 bg-white p-6 shadow-2xl dark:border-white/10 dark:bg-[#0A0A0A] md:p-12"
                >
                  <div className="mb-10 max-w-2xl space-y-6 pr-16">{kopf}</div>

                  <div className="grid grid-cols-1 gap-4 md:grid-cols-2 lg:grid-cols-3">
                    <Panel ueberschrift="Die Rechnung" accent={inhalt.accent} weit>
                      <div className="flex flex-col">
                        {inhalt.detail.rechnung.map((z, i) => (
                          <div
                            key={z.schritt}
                            className={cn(
                              "flex items-baseline justify-between gap-6 border-b border-black/5 py-4 dark:border-white/5",
                              i === 0 && "pt-0",
                              z.hervor && "border-b-0 pt-6",
                            )}
                          >
                            <span
                              className={cn(
                                "text-[15px] leading-snug text-black/70 dark:text-white/60",
                                z.hervor && "text-base font-bold text-black dark:text-white",
                              )}
                            >
                              {z.schritt}
                            </span>
                            <span
                              className={cn(
                                "flex-shrink-0 font-mono text-base font-bold tabular-nums text-black dark:text-white",
                                z.hervor && "text-2xl tracking-tighter",
                              )}
                              style={z.hervor ? { color: inhalt.accent } : undefined}
                            >
                              {z.wert}
                            </span>
                          </div>
                        ))}
                      </div>
                    </Panel>

                    <Panel ueberschrift="Bis es läuft" accent={inhalt.accent}>
                      <div className="flex flex-col gap-3">
                        <span className="text-5xl font-black tracking-tighter" style={{ color: inhalt.accent }}>
                          {inhalt.detail.dauer}
                        </span>
                        <span className="text-[15px] leading-relaxed text-black/70 dark:text-white/60">
                          von der ersten Aufnahme bis zu dem Punkt, an dem es ohne dich läuft.
                        </span>
                      </div>
                    </Panel>

                    <Panel ueberschrift="Heute" accent={inhalt.accent}>
                      <Punkte eintraege={inhalt.detail.heute} accent={inhalt.accent} />
                    </Panel>

                    <Panel ueberschrift="Danach" accent={inhalt.accent}>
                      <Punkte eintraege={inhalt.detail.danach} accent={inhalt.accent} />
                    </Panel>

                    <Panel ueberschrift="Womit gerechnet" accent={inhalt.accent}>
                      <Punkte eintraege={inhalt.detail.annahmen} accent={inhalt.accent} />
                      <p className="text-[13px] leading-relaxed text-black/40 dark:text-white/30">
                        Deine Zahlen sind andere. Im Gespräch rechnen wir es mit deinen durch.
                      </p>
                    </Panel>
                  </div>
                </motion.div>
              </motion.div>

              {/* Der Schließknopf steht NEBEN dem Overlay, nicht darin: Das Overlay
                  trägt einen Weichzeichner (backdrop-filter), und der erzeugt für
                  seine Kinder einen eigenen Bezugsrahmen — "fixed" würde darin wie
                  "absolute" wirken und der Knopf wäre am unteren Ende des bis zu
                  2500 px hohen Dialogs aus dem Bild gescrollt. Am Handy gibt es keine
                  Escape-Taste, also muss er immer erreichbar bleiben. */}
              <motion.button
                type="button"
                initial={{ opacity: 0, scale: 0.8 }}
                animate={{ opacity: 1, scale: 1 }}
                exit={{ opacity: 0, scale: 0.8 }}
                onClick={() => setOffen(false)}
                whileHover={{ scale: 1.1 }}
                whileTap={{ scale: 0.9 }}
                aria-label="Rechenbeispiel schließen"
                className="fixed right-5 top-5 z-[10000] rounded-full bg-black p-4 text-white shadow-2xl dark:bg-white dark:text-black"
              >
                <Minimize2 size={22} />
              </motion.button>
              </>
            )}
          </AnimatePresence>,
          document.body,
        )}
    </>
  );
}
