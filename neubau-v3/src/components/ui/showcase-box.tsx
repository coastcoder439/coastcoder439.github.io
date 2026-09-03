"use client";

/**
 * ShowcaseBox — die kollabierte „Showcase"-Box aus dem Template (github-showcase.tsx
 * „GitHub Ecosystem" / kaggle-showcase.tsx „Kaggle Intelligence"), 1:1 in Optik und
 * Motion: dasselbe große runde Panel (rounded-[3rem], shadow-2xl, scale-in beim
 * Reinscrollen), derselbe Header (Icon + Sperr-Text), derselbe große Titel mit
 * Akzentwort, dieselben drei hochzählenden Counter, dieselbe Beschreibung rechts.
 * Der Vollbild-Modal-Grid des Originals (Kaggle-Achievements / GitHub-Repos, an eine
 * Live-API gebunden) bleibt weg — sein Inhalt gehört dem Template-Autor, nicht hierher.
 * Inhalt hier: Leons Automatisierungs-Spar-Beispiele. Zahlen sind BEISPIEL-Platzhalter.
 */

import React, { useState, useEffect, useRef } from "react";
import { motion, useInView, animate, useReducedMotion } from "framer-motion";

export type ShowcaseStat = { prefix?: string; value: number; suffix?: string; label: string };
export type ShowcaseInhalt = {
  accent: string; // exakt wie Original: beliebiger Hex (#39d353 grün, #20beff blau)
  icon: React.ComponentType<{ className?: string }>;
  kicker: string;
  titel: string;
  titelZweite: string; // zweite Zeile, davon ist das letzte Stück der Akzent
  akzent: string; // Akzentwort in der Akzentfarbe
  stats: ShowcaseStat[];
  beschreibung: string;
};

const springTransition = { type: "spring" as const, stiffness: 300, damping: 30 };

// Counter aus dem Original (kaggle-showcase.tsx) — zählt beim Sichtbarwerden hoch.
// Ergänzt: bei reduzierter Bewegung steht der Zielwert sofort (konsistent mit dem Rest).
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

export function ShowcaseBox({ inhalt }: { inhalt: ShowcaseInhalt }) {
  const Icon = inhalt.icon;
  return (
    <motion.div
      transition={springTransition}
      initial={{ opacity: 0, scale: 0.95 }}
      whileInView={{ opacity: 1, scale: 1 }}
      viewport={{ once: true }}
      className="relative w-[90vw] max-w-[980px] mx-auto bg-white dark:bg-[#0A0A0A] border border-black/5 dark:border-white/10 rounded-[3rem] shadow-2xl overflow-hidden transition-all duration-700 p-8 md:p-12"
    >
      <div className="flex flex-col md:flex-row items-start justify-between w-full gap-8 relative z-10">
        <div className="space-y-6 max-w-2xl">
          <div className="flex items-center gap-3" style={{ color: inhalt.accent }}>
            <Icon className="w-8 h-8" />
            <span className="text-sm font-bold tracking-[0.3em] uppercase opacity-70">{inhalt.kicker}</span>
          </div>
          <h2 className="text-4xl md:text-5xl lg:text-6xl font-bold tracking-tight leading-[0.9em] text-black dark:text-white">
            {inhalt.titel} <br />
            <span className="flex flex-wrap items-center gap-2">
              {inhalt.titelZweite} <span style={{ color: inhalt.accent }}>{inhalt.akzent}</span>
            </span>
          </h2>
          <div className="flex flex-row flex-wrap gap-8 items-center">
            {inhalt.stats.map((s) => (
              <div key={s.label} className="flex flex-col">
                <span className="text-3xl font-black tabular-nums tracking-tighter" style={{ color: inhalt.accent }}>
                  {s.prefix}
                  <Counter value={s.value} />
                  {s.suffix}
                </span>
                <span className="text-[10px] font-black uppercase opacity-40 tracking-widest">{s.label}</span>
              </div>
            ))}
          </div>
        </div>

        <p className="max-w-sm font-semibold text-lg text-black/50 dark:text-white/40 leading-relaxed pt-12 md:pt-20">
          {inhalt.beschreibung}
        </p>
      </div>
    </motion.div>
  );
}
