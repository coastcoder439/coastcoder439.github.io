'use client';

import { motion, useReducedMotion } from 'framer-motion';
import { ArrowDown, Download } from 'lucide-react';
import { Spotlight } from '@/components/ui/spotlight-new';
import { resumeUrl } from '@/data/leon-portfolio';

// Abschnitt 1 nach Storyboard v4.6: Headline und Subline sind Owner-Text,
// Look aus der Vorversion (Spotlight, Punktraster, Glanz-Typografie), keine
// Icons in Woertern, kein Foto, kein Screenshot.
export const HERO_HEADLINE = 'Technik mit Auftrag.';
export const HERO_SUBLINE =
  'Die Mitgründung einer NGO brachte mich zum KI-Systembau. Durch die IT-Welt begleitete mich eine Frage: Was zählt wirklich? Heute ist aus diesem holistischen Gedanken mehr als nur eine Methodik geworden — deinen Weg finden und ihn gemeinsam gehen.';

export function Hero({ revealed = true }: { revealed?: boolean }) {
  const reduceMotion = useReducedMotion();
  const show = revealed || reduceMotion;
  const ease = [0.16, 1, 0.3, 1] as const;

  const reveal = (delay: number) => ({
    initial: reduceMotion ? false : { opacity: 0, y: 28 },
    animate: show ? { opacity: 1, y: 0 } : { opacity: 0, y: 28 },
    transition: { duration: reduceMotion ? 0 : 1.1, delay: reduceMotion ? 0 : delay, ease },
  });

  return (
    <section
      id="start"
      aria-labelledby="hero-title"
      className="relative flex min-h-[100svh] w-full flex-col overflow-hidden bg-background text-foreground selection:bg-primary/20"
    >
      <div
        aria-hidden="true"
        className="absolute inset-0 z-0 bg-[radial-gradient(circle,_#888_0.5px,_transparent_0.5px)] opacity-20 [background-size:24px_24px] dark:bg-[radial-gradient(circle,_#444_0.5px,_transparent_0.5px)]"
      />
      <div aria-hidden="true" className="pointer-events-none absolute inset-0 z-[5] overflow-hidden">
        <Spotlight
          duration={10}
          xOffset={120}
          translateY={-300}
          gradientFirst="radial-gradient(68.54% 68.72% at 55.02% 31.46%, hsla(0, 0%, 100%, .15) 0, hsla(0, 0%, 100%, .05) 50%, transparent 80%)"
          gradientSecond="radial-gradient(50% 50% at 50% 50%, hsla(0, 0%, 100%, .1) 0, hsla(0, 0%, 100%, .02) 80%, transparent 100%)"
          gradientThird="radial-gradient(50% 50% at 50% 50%, hsla(0, 0%, 100%, .08) 0, hsla(0, 0%, 100%, 0) 80%, transparent 100%)"
        />
      </div>

      <div className="relative z-10 mx-auto flex w-full max-w-[105rem] flex-1 flex-col justify-center px-6 pb-24 pt-32 md:px-12 lg:px-20">
        <motion.p
          {...reveal(0.05)}
          className="mb-6 font-mono text-[11px] font-medium uppercase tracking-[0.28em] text-muted-foreground md:text-xs"
        >
          Leon Pösken · KI-Systembau
        </motion.p>

        <motion.h1
          id="hero-title"
          {...reveal(0.15)}
          className="text-shiny max-w-[10ch] text-[clamp(3rem,10vw,11rem)] font-black leading-[0.9] tracking-tighter will-change-transform"
        >
          {HERO_HEADLINE}
        </motion.h1>

        <motion.p
          {...reveal(0.35)}
          className="mt-10 max-w-[60ch] text-lg leading-relaxed text-foreground/80 md:text-xl md:leading-relaxed"
        >
          {HERO_SUBLINE}
        </motion.p>

        <motion.div {...reveal(0.5)} className="mt-12 flex flex-wrap items-center gap-4">
          <a
            href="#ursprung"
            className="group inline-flex h-12 items-center gap-3 rounded-full bg-foreground px-6 text-sm font-semibold text-background transition-transform duration-300 hover:-translate-y-0.5 focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-foreground"
          >
            Zu den Systemen
            <ArrowDown aria-hidden="true" className="h-4 w-4 transition-transform duration-300 group-hover:translate-y-0.5" />
          </a>
          <a
            href={resumeUrl}
            download="Leon-Poesken-Lebenslauf.pdf"
            className="inline-flex h-12 items-center gap-3 rounded-full border border-foreground/20 px-6 text-sm font-semibold text-foreground transition-colors duration-300 hover:border-foreground/60 focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-foreground"
          >
            <Download aria-hidden="true" className="h-4 w-4" />
            Lebenslauf
          </a>
        </motion.div>
      </div>
    </section>
  );
}
