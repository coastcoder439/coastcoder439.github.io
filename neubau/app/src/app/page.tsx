'use client';

import { useEffect, useState } from 'react';
import { motion, useReducedMotion } from 'framer-motion';
import { ArrowUpRight, Download } from 'lucide-react';
import { LoadingScreen } from '@/components/layout/LoadingScreen';
import { Hero } from '@/components/hero/Hero';
import { AbschnittKopf } from '@/components/portfolio/AbschnittKopf';
import { ProduktBlock } from '@/components/portfolio/ProduktBlock';
import { KachelReihe } from '@/components/portfolio/KachelReihe';
import {
  abschluss,
  abschnitte,
  disziplinen,
  ergebnisse,
  linkedinUrl,
  methodik,
  profil,
  resumeUrl,
  zertifikate,
} from '@/data/portfolio-content';

// Komplette Seite nach Storyboard v4.6, Chronologie in sieben Abschnitten:
// Hero -> Ursprung -> Methodik -> Praxis -> Keel -> Profil -> Abschluss.
export default function HomePage() {
  const [showPreloader, setShowPreloader] = useState(true);
  const [skipAnimation, setSkipAnimation] = useState(false);
  const [revealed, setRevealed] = useState(false);
  const reduceMotion = useReducedMotion();

  useEffect(() => {
    if (sessionStorage.getItem('portfolioLoaded')) {
      setSkipAnimation(true);
      setShowPreloader(false);
      setRevealed(true);
    }
  }, []);

  const ursprung = abschnitte[0];
  const praxis = abschnitte[1];
  const keel = abschnitte[2];

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
        transition={{ duration: skipAnimation || reduceMotion ? 0 : 0.8 }}
        className="relative overflow-x-clip"
      >
        <Hero revealed={revealed} />

        {/* 2 · Ursprung */}
        <section
          id={ursprung.id}
          aria-labelledby="ursprung-title"
          className="mx-auto w-full max-w-[105rem] px-6 py-24 md:px-12 md:py-32 lg:px-20"
        >
          <div id="ursprung-title">
            <AbschnittKopf
              nummer={ursprung.nummer}
              eyebrow={ursprung.eyebrow}
              headline={ursprung.headline}
              copy={ursprung.copy}
            />
          </div>
          <div className="mt-12">
            {ursprung.produkte.map((produkt, i) => (
              <ProduktBlock key={produkt.slug} produkt={produkt} index={i} />
            ))}
          </div>
        </section>

        {/* 3 · Methodik — die 3D-Boxen, zwei Reihen */}
        <section
          id="methodik"
          aria-labelledby="methodik-title"
          className="border-y border-foreground/10 bg-foreground/[0.02]"
        >
          <div className="mx-auto w-full max-w-[105rem] px-6 py-24 md:px-12 md:py-32 lg:px-20">
            <div id="methodik-title">
              <AbschnittKopf
                nummer={methodik.nummer}
                eyebrow={methodik.eyebrow}
                headline={methodik.headline}
                copy={methodik.copy}
              />
            </div>
            <div className="mt-12">
              <KachelReihe kacheln={disziplinen} />
            </div>
            <p className="mt-16 font-mono text-[11px] uppercase tracking-[0.28em] text-muted-foreground">
              {methodik.ueberleitung}
            </p>
            <div className="mt-6">
              <KachelReihe kacheln={ergebnisse} start={4} />
            </div>
          </div>
        </section>

        {/* 4 · Praxis */}
        <section
          id={praxis.id}
          aria-labelledby="praxis-title"
          className="mx-auto w-full max-w-[105rem] px-6 py-24 md:px-12 md:py-32 lg:px-20"
        >
          <div id="praxis-title">
            <AbschnittKopf
              nummer={praxis.nummer}
              eyebrow={praxis.eyebrow}
              headline={praxis.headline}
              copy={praxis.copy}
            />
          </div>
          <div className="mt-12">
            {praxis.produkte.map((produkt, i) => (
              <ProduktBlock key={produkt.slug} produkt={produkt} index={i} />
            ))}
          </div>
        </section>

        {/* 5 · Keel */}
        <section
          id={keel.id}
          aria-labelledby="keel-title"
          className="border-y border-foreground/10 bg-foreground/[0.02]"
        >
          <div className="mx-auto w-full max-w-[105rem] px-6 py-24 md:px-12 md:py-32 lg:px-20">
            <div id="keel-title">
              <AbschnittKopf
                nummer={keel.nummer}
                eyebrow={keel.eyebrow}
                headline={keel.headline}
                copy={keel.copy}
              />
            </div>
            <div className="mt-12">
              {keel.produkte.map((produkt, i) => (
                <ProduktBlock key={produkt.slug} produkt={produkt} index={i} />
              ))}
            </div>
          </div>
        </section>

        {/* 6 · Profil */}
        <section
          id="profil"
          aria-labelledby="profil-title"
          className="mx-auto w-full max-w-[105rem] px-6 py-24 md:px-12 md:py-32 lg:px-20"
        >
          <div id="profil-title">
            <AbschnittKopf
              nummer={profil.nummer}
              eyebrow={profil.eyebrow}
              headline={profil.headline}
              copy={profil.arbeitsweise}
            />
          </div>

          <div className="mt-16 grid gap-12 lg:grid-cols-[minmax(0,1fr)_minmax(0,1fr)]">
            <div>
              <h3 className="font-mono text-[11px] uppercase tracking-[0.28em] text-muted-foreground">
                Zertifikate
              </h3>
              <p className="mt-4 max-w-[52ch] text-base leading-relaxed text-foreground/75">
                {profil.zertifikateCopy}
              </p>
              <ul className="mt-8 space-y-px">
                {zertifikate.map((z) => (
                  <li
                    key={z.name}
                    className="flex flex-wrap items-center justify-between gap-3 border-t border-foreground/10 py-4"
                  >
                    <span className="font-semibold">{z.name}</span>
                    <span className="flex items-center gap-3">
                      <span className="font-mono text-[10px] uppercase tracking-[0.18em] text-muted-foreground">
                        {z.geber}
                      </span>
                      <span className="rounded-full border border-foreground/25 px-3 py-1 font-mono text-[10px] uppercase tracking-[0.18em] text-foreground/60">
                        läuft
                      </span>
                    </span>
                  </li>
                ))}
              </ul>
            </div>

            <div className="lg:pt-11">
              <h3 className="font-mono text-[11px] uppercase tracking-[0.28em] text-muted-foreground">
                Für wen
              </h3>
              <p className="mt-4 max-w-[52ch] text-base leading-relaxed text-foreground/75">
                {profil.fuerWen}
              </p>
              <a
                href={resumeUrl}
                download="Leon-Poesken-Lebenslauf.pdf"
                className="mt-8 inline-flex h-12 items-center gap-3 rounded-full border border-foreground/20 px-6 text-sm font-semibold transition-colors duration-300 hover:border-foreground/60 focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-foreground"
              >
                <Download aria-hidden="true" className="h-4 w-4" />
                Lebenslauf herunterladen
              </a>
            </div>
          </div>
        </section>

        {/* 7 · Abschluss */}
        <section
          id="kontakt"
          aria-labelledby="kontakt-title"
          className="border-t border-foreground/10 bg-foreground/[0.02]"
        >
          <div className="mx-auto w-full max-w-[105rem] px-6 py-24 md:px-12 md:py-32 lg:px-20">
            <p className="flex items-center gap-3 font-mono text-[11px] uppercase tracking-[0.28em] text-muted-foreground">
              <span className="text-foreground/40">{abschluss.nummer}</span>
              {abschluss.eyebrow}
            </p>
            <h2
              id="kontakt-title"
              className="text-shiny mt-5 text-[clamp(2.5rem,7vw,6rem)] font-black leading-[0.95] tracking-tighter"
            >
              {abschluss.headline}
            </h2>
            <p className="mt-6 max-w-[52ch] text-lg leading-relaxed text-foreground/75">
              {abschluss.copy}
            </p>
            <div className="mt-10 flex flex-wrap items-center gap-4">
              <a
                href={linkedinUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="group inline-flex h-12 items-center gap-3 rounded-full bg-foreground px-6 text-sm font-semibold text-background transition-transform duration-300 hover:-translate-y-0.5 focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-foreground"
              >
                Auf LinkedIn schreiben
                <ArrowUpRight
                  aria-hidden="true"
                  className="h-4 w-4 transition-transform duration-300 group-hover:translate-x-0.5 group-hover:-translate-y-0.5"
                />
              </a>
              <a
                href={resumeUrl}
                download="Leon-Poesken-Lebenslauf.pdf"
                className="inline-flex h-12 items-center gap-3 rounded-full border border-foreground/20 px-6 text-sm font-semibold transition-colors duration-300 hover:border-foreground/60 focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-foreground"
              >
                <Download aria-hidden="true" className="h-4 w-4" />
                Lebenslauf
              </a>
            </div>
          </div>
        </section>
      </motion.main>
    </>
  );
}
