'use client';

import React, { useEffect, useState } from 'react';
import { motion, AnimatePresence, useReducedMotion } from 'framer-motion';
import { Separator } from '@/components/ui/separator';
import { ArrowDownRight, CalendarDays, FileText } from 'lucide-react';
import { portfolioData } from '@/data/portfolio';
import { Spotlight } from '@/components/ui/spotlight-new';
import { TechBanner } from '@/components/ui/tech-banner';
import { handleAnchorClick } from '@/lib/scroll';

// v3.1 — Block 1 „Das ist Leon": Motto, Owner-Subline, Knöpfe „Gespräch buchen"
// und „Lebenslauf", Nachweise-Zeile. Rechts bleibt Platz für die Charakter-Figur;
// die Karte „Das baue ich" ist raus (Owner: doppelt zum zweiten Würfel).
// Motion des Templates bleibt: Spotlight, Punktraster, text-shiny, isExiting-Reveal,
// OFFEN-FÜR-AUSTAUSCH-Badge, runder Lebenslauf-Button.
// Drei Überschriften im Wechsel [Owner 04.09.2026]. „Technik mit Auftrag" ist raus:
// Testleser verstanden es erst nach dem Lesen der Texte, weil „Auftrag" zuerst die
// erteilte Arbeit meint. Die drei hier decken zusammen ab, wofür der Owner steht —
// Haltung, Gerechtigkeit gegenüber kleinen Betrieben, persönliche Beziehung.
const SLOGANS = ['IT aus Überzeugung', 'Auf Augenhöhe mit den Großen', 'Mehr als nur ein Auftrag'];

// Zwei GETRENNTE Ereignisse je Runde, ausdrücklich so gewollt [Owner: „ICH WILL DEN
// TEXT WECHSEL DANACH"]: Bei 4 s wischt der Farbbalken über die STEHENDE Zeile, erst bei
// 5 s wechselt der Text. Der Wisch maskiert den Wechsel also nicht, er geht ihm voraus.
const WISCH_BEI = 4000;
const WECHSEL_BEI = 5000;
const WISCH_DAUER = 0.7;
const WISCH_FARBE = '#0ea5e9';

const SUBLINE =
  'Die meiste Software nimmt: Zeit, Aufmerksamkeit, Nerven. Ich baue die andere Sorte — und ich baue nur, woran ich glaube. Angefangen hat es bei meinem Herzensprojekt, der NGO World Eden Era, wo niemand Budget für Umwege hatte. Geblieben ist die Überzeugung, dass ein Betrieb mit zwei Leuten dieselbe Qualität und dieselbe Freiheit verdient wie einer mit zweihundert.';
const SCHLUSSSATZ = 'Große Firmen haben Abteilungen dafür. Kleine haben mich.';
const NACHWEISE = [
  'EU AI Act Essentials · KI-Campus',
  'SC-900 · Microsoft',
  'ENISA-Grundlagen · EU Academy',
  'Cybersecurity Fundamentals · IBM',
];

export function HeroVisual({ isExiting = false }: { isExiting?: boolean }) {
  const { personal } = portfolioData;
  const reduce = useReducedMotion();
  const [slogan, setSlogan] = useState(0);
  const [wischt, setWischt] = useState(false);

  // Eine Runde pro Slogan: Wisch bei 4 s, Textwechsel bei 5 s. Der Effekt hängt an
  // `slogan`, startet also nach jedem Wechsel neu und hält den Takt sauber.
  // Wer weniger Bewegung eingestellt hat, bekommt eine feste Überschrift ohne Wechsel —
  // automatisch bewegter Text wäre sonst nicht anhaltbar (WCAG 2.2.2).
  useEffect(() => {
    if (reduce || !isExiting) return;
    const w = setTimeout(() => setWischt(true), WISCH_BEI);
    const t = setTimeout(() => {
      setWischt(false);
      setSlogan((i) => (i + 1) % SLOGANS.length);
    }, WECHSEL_BEI);
    return () => {
      clearTimeout(w);
      clearTimeout(t);
    };
  }, [slogan, reduce, isExiting]);

  return (
    <motion.div
      id="start"
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      className="relative min-h-screen w-full flex flex-col bg-background text-foreground overflow-hidden selection:bg-primary/20"
    >
      <div className="w-full absolute h-full z-0 bg-[radial-gradient(circle,_#888_0.5px,_transparent_0.5px)] dark:bg-[radial-gradient(circle,_#444_0.5px,_transparent_0.5px)] opacity-20 [background-size:24px_24px]" />

      <div className="absolute inset-0 z-[5] pointer-events-none overflow-hidden">
        <Spotlight
          duration={10}
          xOffset={120}
          translateY={-300}
          gradientFirst="radial-gradient(68.54% 68.72% at 55.02% 31.46%, hsla(0, 0%, 100%, .15) 0, hsla(0, 0%, 100%, .05) 50%, transparent 80%)"
          gradientSecond="radial-gradient(50% 50% at 50% 50%, hsla(0, 0%, 100%, .1) 0, hsla(0, 0%, 100%, .02) 80%, transparent 100%)"
          gradientThird="radial-gradient(50% 50% at 50% 50%, hsla(0, 0%, 100%, .08) 0, hsla(0, 0%, 100%, 0) 80%, transparent 100%)"
        />
      </div>

      <div className="relative flex-1 flex flex-col justify-center pt-36 pb-16 z-10 max-w-[105rem] w-full mx-auto">
        {/* Einspaltig, bis die Charakter-Figur des Owners kommt — sie bekommt dann
            wieder eine zweite Spalte rechts. */}
        <div className="grid w-full grid-cols-1 gap-12 px-6 md:pl-28 md:pr-12">
          <div className="flex flex-col">
            <motion.p
              initial={{ opacity: 0, x: -20 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8, delay: 0.2 }}
              className="mb-6 text-[10px] md:text-xs text-muted-foreground leading-relaxed font-medium uppercase tracking-[0.28em]"
            >
              {personal.name} · Leipzig
            </motion.p>

            {/* Wechselnde Hauptüberschrift. Die Größe ist kleiner als beim festen
                Dreizeiler „Technik mit Auftrag", weil der längste Slogan sonst vier
                Zeilen bräuchte; min-h hält die Höhe über alle drei stabil, sonst
                springt der halbe Hero bei jedem Wechsel. 2,05em = zwei Zeilen, gemessen
                am längsten Slogan („Auf Augenhöhe mit den Großen": 191 px bei 1440,
                136 px bei 1024, 76 px bei 390) — mehr wäre nur tote Fläche.
                leading-[0.92] statt enger: sonst schneidet der Farbverlauf Unterlängen ab. */}
            <h1 className="min-h-[2.05em] text-[clamp(2.5rem,7vw,8rem)] font-black leading-[0.92] tracking-tighter">
              <motion.span
                initial={{ opacity: 0, y: 30 }}
                animate={isExiting ? { opacity: 1, y: 0 } : { opacity: 0, y: 30 }}
                transition={{ duration: 1.2, ease: [0.16, 1, 0.3, 1] }}
                className="relative block overflow-hidden pb-[0.06em] will-change-transform"
              >
                <AnimatePresence mode="wait">
                  <motion.span
                    key={slogan}
                    initial={reduce ? false : { opacity: 0, y: 24 }}
                    animate={{ opacity: 1, y: 0 }}
                    exit={{ opacity: 0, y: -24, transition: { duration: 0.28 } }}
                    transition={{ duration: 0.5, ease: [0.16, 1, 0.3, 1] }}
                    className="block text-shiny"
                  >
                    {SLOGANS[slogan]}
                  </motion.span>
                </AnimatePresence>

                {/* Der Farbbalken aus dem Template — läuft über die stehende Zeile,
                    eine Sekunde BEVOR der Text wechselt. */}
                {wischt && (
                  <motion.span
                    initial={{ clipPath: 'inset(0 100% 0 0)' }}
                    animate={{
                      clipPath: [
                        'inset(0 100% 0 0)',
                        'inset(0 0% 0 0)',
                        'inset(0 0% 0 0)',
                        'inset(0 0 0 100%)',
                      ],
                    }}
                    transition={{
                      duration: WISCH_DAUER,
                      times: [0, 0.42, 0.58, 1],
                      ease: [0.85, 0, 0.15, 1],
                    }}
                    className="absolute inset-0 z-10 block"
                    style={{ backgroundColor: WISCH_FARBE }}
                  />
                )}
              </motion.span>
            </h1>

            <motion.p
              initial={{ opacity: 0, y: 20 }}
              animate={isExiting ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
              transition={{ duration: 1, delay: 0.4, ease: [0.16, 1, 0.3, 1] }}
              className="mt-8 max-w-[60ch] text-base md:text-xl leading-relaxed text-foreground/80"
            >
              {SUBLINE}
            </motion.p>

            {/* Der Satz, der die Position in acht Wörtern sagt — deshalb abgesetzt und
                schwerer als der Absatz darüber, aber kleiner als die Überschrift. */}
            <motion.p
              initial={{ opacity: 0, y: 20 }}
              animate={isExiting ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
              transition={{ duration: 1, delay: 0.5, ease: [0.16, 1, 0.3, 1] }}
              className="mt-6 max-w-[46ch] text-xl md:text-2xl font-bold leading-snug tracking-tight text-foreground"
            >
              {SCHLUSSSATZ}
            </motion.p>

            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={isExiting ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
              transition={{ duration: 1, delay: 0.55, ease: [0.16, 1, 0.3, 1] }}
              className="mt-8 flex flex-wrap items-center gap-4"
            >
              <a
                href="#buchen"
                onClick={(e) => handleAnchorClick(e, 'buchen')}
                className="group inline-flex items-center gap-3 rounded-full bg-foreground px-7 py-4 text-sm font-black uppercase tracking-widest text-background shadow-xl transition-transform duration-300 hover:-translate-y-0.5 focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-foreground"
              >
                <CalendarDays className="h-4 w-4" />
                Gespräch buchen
                <ArrowDownRight className="h-4 w-4 transition-transform duration-500 group-hover:rotate-[-45deg]" />
              </a>
              <a
                href={personal.resumeUrl}
                download="Leon-Poesken-Lebenslauf.pdf"
                className="inline-flex items-center gap-3 rounded-full border border-foreground/20 px-7 py-4 text-sm font-black uppercase tracking-widest text-foreground transition-colors duration-300 hover:bg-foreground/5 focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-foreground"
              >
                <FileText className="h-4 w-4" />
                Lebenslauf
              </a>
            </motion.div>

            <motion.div
              initial={{ opacity: 0 }}
              animate={isExiting ? { opacity: 1 } : { opacity: 0 }}
              transition={{ duration: 1, delay: 0.8 }}
              className="mt-10 flex flex-wrap items-center gap-x-3 gap-y-2 font-mono text-[10px] uppercase tracking-[0.22em] text-muted-foreground"
            >
              <span className="text-amber-600 dark:text-amber-400">Nachweise · laufend</span>
              {NACHWEISE.map((n) => (
                <span key={n} className="rounded border border-foreground/15 px-2 py-1">
                  {n}
                </span>
              ))}
            </motion.div>
          </div>

        </div>

        <div className="mx-auto max-w-[105rem] w-full px-6 md:px-20 mt-14 md:mt-16">
          <div className="mb-6 flex items-center gap-6">
            <Separator className="flex-1 h-[1px] bg-foreground/10 hidden md:block" />
            <div className="text-[10px] md:text-xs whitespace-nowrap font-bold tracking-[0.3em] text-muted-foreground uppercase">
              Womit ich baue
            </div>
            <Separator className="flex-1 h-[1px] bg-foreground/10 hidden md:block" />
          </div>
          {/* Fullstack-Banner aus dem Template, zurueckgeholt. */}
          <TechBanner />
        </div>
      </div>

      <div className="absolute left-0 top-1/2 z-40 hidden md:flex items-center -translate-y-1/2">
        <motion.div
          whileHover={{ x: 10 }}
          className="bg-white text-black py-10 px-4 text-[10px] font-black uppercase tracking-[0.5em] shadow-2xl rounded-r-3xl border-r border-y border-zinc-200"
        >
          <span className="[writing-mode:vertical-rl]">OFFEN FÜR AUSTAUSCH</span>
        </motion.div>
      </div>
    </motion.div>
  );
}
