'use client';

import { useEffect, useState } from 'react';
import { motion } from 'framer-motion';
import { LoadingScreen } from '@/components/layout/LoadingScreen';
import { Hero } from '@/components/hero/Hero';

// Umbau nach Storyboard v4.6 (Gate passiert 02.09.2026), Abschnitt fuer Abschnitt.
// Abschnitt 1 = Preloader-Moment + Hero. Abschnitte 2-7 folgen je nach Owner-Abnahme.
export default function HomePage() {
  const [showPreloader, setShowPreloader] = useState(true);
  const [skipAnimation, setSkipAnimation] = useState(false);
  const [revealed, setRevealed] = useState(false);

  useEffect(() => {
    // Der Preloader laeuft einmal je Browser-Sitzung; danach erscheint der Hero direkt.
    if (sessionStorage.getItem('portfolioLoaded')) {
      setSkipAnimation(true);
      setShowPreloader(false);
      setRevealed(true);
    }
  }, []);

  return (
    <>
      {showPreloader && !skipAnimation ? (
        <LoadingScreen
          onExitStart={() => setRevealed(true)}
          onComplete={() => {
            setShowPreloader(false);
            sessionStorage.setItem('portfolioLoaded', 'true');
          }}
        />
      ) : null}

      <motion.main
        initial={skipAnimation ? false : { opacity: 0 }}
        animate={revealed ? { opacity: 1 } : { opacity: 0 }}
        transition={{ duration: skipAnimation ? 0 : 0.8 }}
        className="relative overflow-x-clip"
      >
        <Hero revealed={revealed} />

        {/* Platzhalter bis zur Abnahme von Abschnitt 1 — die Anker der Nav zeigen hierher. */}
        <section
          id="ursprung"
          className="mx-auto flex min-h-[40svh] w-full max-w-[105rem] items-center px-6 md:px-12 lg:px-20"
        >
          <p className="font-mono text-xs uppercase tracking-[0.28em] text-muted-foreground">
            Abschnitte 2–7 folgen — Ursprung · Methodik · Praxis · Profil · Kontakt
          </p>
          <span id="methodik" />
          <span id="praxis" />
          <span id="profil" />
          <span id="kontakt" />
        </section>
      </motion.main>
    </>
  );
}
