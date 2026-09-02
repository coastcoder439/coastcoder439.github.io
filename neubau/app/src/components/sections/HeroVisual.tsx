'use client';

import React from 'react';
import { motion } from 'framer-motion';
import { Separator } from '@/components/ui/separator';
import { ArrowDownRight } from 'lucide-react';
import { portfolioData } from '@/data/portfolio';
import { Spotlight } from '@/components/ui/spotlight-new';

// Umbau nach Storyboard-Abgleich (Owner 02.09.): Emoji-Woerter, Icons in
// Woertern, GitHub-Links und Foto-ProfileCard sind RAUS. Die Motion des
// Templates bleibt: Spotlight, Punktraster, text-shiny-Glanz, isExiting-Reveal,
// OFFEN-FUER-AUSTAUSCH-Badge, animierter Lebenslauf-Button.
const HEADLINE = 'Technik mit Auftrag.';
const SUBLINE =
  'Die Mitgründung einer NGO brachte mich zum KI-Systembau. Durch die IT-Welt begleitete mich eine Frage: Was zählt wirklich? Heute ist aus diesem holistischen Gedanken mehr als nur eine Methodik geworden — deinen Weg finden und ihn gemeinsam gehen.';

export function HeroVisual({ isExiting = false }: { isExiting?: boolean }) {
  const { personal } = portfolioData;

  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      className="relative min-h-screen w-full flex flex-col bg-background text-foreground overflow-hidden selection:bg-primary/20"
    >
      {/* Punktraster (Template) */}
      <div className="w-full absolute h-full z-0 bg-[radial-gradient(circle,_#888_0.5px,_transparent_0.5px)] dark:bg-[radial-gradient(circle,_#444_0.5px,_transparent_0.5px)] opacity-20 [background-size:24px_24px]" />

      {/* Spotlight (Template) */}
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

      <main className="relative flex-1 flex flex-col justify-center pt-40 pb-20 z-10 max-w-[105rem] w-full mx-auto">
        <div className="flex relative gap-6 w-full flex-col px-6 md:pl-28 md:pr-8">
          <motion.p
            initial={{ opacity: 0, x: -20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="text-[10px] md:text-xs text-muted-foreground leading-relaxed font-medium uppercase tracking-[0.28em]"
          >
            {personal.name} · KI-Systembau
          </motion.p>

          <motion.h1
            initial={{ opacity: 0, y: 30 }}
            animate={isExiting ? { opacity: 1, y: 0 } : { opacity: 0, y: 30 }}
            transition={{ duration: 1.2, ease: [0.16, 1, 0.3, 1] }}
            className="text-[clamp(3rem,11vw,13rem)] font-black leading-[0.85] tracking-tighter text-shiny will-change-transform max-w-[14ch]"
          >
            {HEADLINE}
          </motion.h1>

          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={isExiting ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
            transition={{ duration: 1, delay: 0.25, ease: [0.16, 1, 0.3, 1] }}
            className="mt-4 max-w-[62ch] text-base md:text-xl leading-relaxed text-foreground/80"
          >
            {SUBLINE}
          </motion.p>
        </div>

        {/* Separator: LEIPZIG + animierter Lebenslauf-Button (Template-Motion) */}
        <div className="mx-auto max-w-[105rem] w-full px-6 md:px-20 mt-14 md:mt-24">
          <div className="flex items-center gap-6">
            <Separator className="flex-1 h-[1px] bg-foreground/10 hidden md:block" />
            <div className="text-[10px] md:text-xs whitespace-nowrap font-bold tracking-[0.3em] text-muted-foreground uppercase">
              LEIPZIG, DE — 2026
            </div>
            <a
              href={personal.resumeUrl}
              download="Leon-Poesken-Lebenslauf.pdf"
              aria-label="Lebenslauf herunterladen"
              className="group flex items-center focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-foreground rounded-full"
            >
              <motion.div className="relative flex items-center bg-zinc-100 dark:bg-white h-12 w-12 group-hover:w-44 rounded-full transition-all duration-500 ease-[0.23,1,0.32,1] overflow-hidden shadow-xl">
                <span className="whitespace-nowrap opacity-0 group-hover:opacity-100 transition-opacity duration-200 group-hover:delay-150 text-[10px] font-black uppercase tracking-widest text-zinc-900 dark:text-black pl-6 pr-12">
                  Lebenslauf
                </span>
                <div className="absolute right-0 flex items-center justify-center size-12 text-zinc-900 dark:text-black group-hover:rotate-45 transition-transform duration-500">
                  <ArrowDownRight className="w-5 h-5" />
                </div>
              </motion.div>
            </a>
          </div>
        </div>
      </main>

      {/* OFFEN-FUER-AUSTAUSCH-Badge (Template-Feeling; ohne Foto/GitHub) */}
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
