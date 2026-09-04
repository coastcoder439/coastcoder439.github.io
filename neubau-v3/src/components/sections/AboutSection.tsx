"use client";

/**
 * v3.4 — Mittelteil der Seite:
 *   AblaufSection   Block 2 „So arbeite ich" (Würfel + vier Schritte)
 *   AuditFunnel     Aufzieher „Muster erkennen, Systeme bauen." mit den vier Chips und
 *                   dem Mauseffekt (automatisierbare Programme fliegen in die Box)
 *   ProjekteSection Block 3 (Slideshow mit Live-iframes)
 *   AnsatzScroll    „Wo setzen wir an?" — die Side-Scroll-Karten aus dem Template mit
 *                   Kunden-Affirmationen (ersetzt die alte Kennzahlen-Strecke mit Zahlen).
 */

import React, { useRef } from "react";
import { motion, useScroll, useTransform, useSpring } from "framer-motion";
import Bucket from "@/components/ui/bucket";
import { AblaufSection, ProjekteSection } from "@/components/sections/StoryContent";
import { AnsatzScroll } from "@/components/sections/AnsatzScroll";
import { SavingsShowcase } from "@/components/sections/SavingsShowcase";
import { SnapZone } from "@/components/ui/snap-zone";

// Programme, die man automatisiert (verschiedene Branchen) — NICHT der Coding-Stack
// (der steht schon im Banner). Diese fliegen beim Mausbewegen in die Box.
const TRAIL = [
  "/apps/gmail.svg", "/apps/googlecalendar.svg", "/apps/googlesheets.svg", "/apps/slack.svg",
  "/apps/notion.svg", "/apps/trello.svg", "/apps/salesforce.svg", "/apps/hubspot.svg",
  "/apps/mailchimp.svg", "/apps/shopify.svg", "/apps/whatsapp.svg", "/apps/zapier.svg",
];

// Aufzieher: großer Satz in Differenz-Mischung + die vier Schritte als rotierende Chips,
// dazu der Mauseffekt (Programm-Logos fliegen in die Box).
const AuditFunnel = () => {
  const sectionRef = useRef(null);
  const { scrollYProgress } = useScroll({ target: sectionRef, offset: ["start end", "end start"] });
  const scale = useTransform(scrollYProgress, [0, 0.5], [0.6, 1]);

  const { scrollYProgress: exitProgressRaw } = useScroll({ target: sectionRef, offset: ["start start", "end start"] });
  const exitProgress = useSpring(exitProgressRaw, { stiffness: 100, damping: 30, restDelta: 0.001 });
  const yExit = useTransform(exitProgress, [0, 1], ["0%", "40%"]);
  const scaleExit = useTransform(exitProgress, [0, 1], [1, 0.85]);
  const opacityExit = useTransform(exitProgress, [0, 1], [1, 0]);

  return (
    <div ref={sectionRef} className="relative z-10 flex min-h-[80vh] items-center justify-center overflow-visible bg-background pb-10 md:min-h-[120vh] md:pb-32">
      <div className="pointer-events-none flex w-full origin-top flex-col items-center space-y-12 py-20 text-center md:space-y-16 md:py-40">
        <motion.div
          style={{ y: yExit, scale: scaleExit, opacity: opacityExit }}
          className="relative z-10 flex w-full flex-col items-center space-y-6 px-6 mix-blend-difference md:space-y-10"
        >
          <motion.h2
            style={{ scale, willChange: "transform" }}
            className="max-w-7xl text-center text-4xl font-black uppercase leading-[0.9] tracking-tighter text-white md:text-6xl lg:px-6 lg:text-[7rem]"
          >
            Muster erkennen, <br />
            <motion.span
              initial={{ opacity: 0, y: 15 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.4 }}
              className="font-serif-elegant font-light italic tracking-normal text-white"
            >
              Systeme bauen.
            </motion.span>
          </motion.h2>
        </motion.div>

        <motion.div
          style={{ y: yExit, scale: scaleExit, opacity: opacityExit }}
          className="pointer-events-auto flex w-full flex-col items-center gap-8 px-6 pt-12"
        >
          <motion.div
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            transition={{ delay: 0.1, duration: 0.8 }}
            className="mx-auto w-full max-w-4xl"
          >
            <Bucket trailImages={TRAIL} />
          </motion.div>
        </motion.div>
      </div>
      <div className="pointer-events-none absolute inset-0 opacity-[0.03] mix-blend-overlay">
        <div className="absolute inset-0 bg-[url('/noise.svg')]" />
      </div>
    </div>
  );
};

export default function AboutSection() {
  return (
    <section className="relative bg-background text-foreground transition-colors duration-500 dark:bg-black dark:text-white">
      <AblaufSection />
      <AuditFunnel />
      <ProjekteSection />
      <AnsatzScroll />
      <SavingsShowcase />
      {/* Führt den Scroll durch Strecke + Stapel (Snap-Punkte), rendert nichts. */}
      <SnapZone />
    </section>
  );
}
