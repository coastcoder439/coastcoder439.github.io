"use client";

/**
 * v3 — Mittelteil der Seite (Owner 03.09.2026, Vier-Block-Struktur):
 *   Block 2  Ablauf   = AblaufSection (Würfel) + AuditFunnel-Aufzieher „Muster erkennen, Systeme bauen."
 *   Block 3  Projekte = ProjekteSection (eine Slideshow) + gekürzte Kennzahlen-Strecke „Alles geprüft"
 * Die These-Karte („Das Ganze sehen") ist auf Owner-Anweisung komplett raus; ihre Sätze
 * leben in der Ablauf-Einleitung, in Schritt 3 und im Buchen-Text. Ebenso raus: das
 * Identitäts-Panel und der „Über mich"-Vorspann. Template-Motion, die bleibt: Aufzieher
 * mit Chips (Bucket), gepinnte Kennzahlen-Strecke mit Rand- und Exit-Animation.
 */

import React, { useRef } from "react";
import { motion, useScroll, useTransform, useSpring, useMotionValueEvent, AnimatePresence } from "framer-motion";
import Testimonial1 from "@/components/ui/testimonial-1";
import Bucket from "@/components/ui/bucket";
import { AblaufSection, ProjekteSection } from "@/components/sections/StoryContent";

// Kennzahlen-Panel („Alles geprüft") — Template-Panel, blendet bei 0.45–0.6 aus.
const CoreEngineeringPanel = ({ scrollYProgress }: { scrollYProgress: any }) => {
    const opacity = useTransform(scrollYProgress, [0.45, 0.6], [1, 0]);
    const scale = useTransform(scrollYProgress, [0.45, 0.6], [1, 0.9]);
    const blur = useTransform(scrollYProgress, [0.45, 0.6], [0, 10]);

    return (
        <div className="w-screen h-full flex items-center justify-center bg-background transition-colors duration-500 overflow-hidden">
            <motion.div
                style={{ opacity, scale, filter: `blur(${blur}px)`, willChange: "transform, opacity, filter" }}
                className="w-full h-full flex items-center justify-center"
            >
                <Testimonial1 />
            </motion.div>
        </div>
    );
};

// Aufzieher: großer Satz in Differenz-Mischung + die vier Schritte als rotierende Chips.
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
        <div ref={sectionRef} className="relative overflow-visible group min-h-[80vh] md:min-h-[120vh] flex items-center justify-center bg-background z-10 pb-10 md:pb-32">
            <div className="flex flex-col items-center text-center py-20 md:py-40 space-y-12 md:space-y-16 pointer-events-none w-full origin-top">
                <motion.div
                    style={{ y: yExit, scale: scaleExit, opacity: opacityExit }}
                    className="space-y-6 md:space-y-10 flex flex-col items-center px-6 relative z-10 mix-blend-difference w-full"
                >
                    <motion.h2
                        style={{ scale, willChange: "transform" }}
                        className="text-4xl md:text-6xl lg:text-[7rem] font-black text-white max-w-7xl tracking-tighter leading-[0.9] lg:px-6 uppercase text-center"
                    >
                        Muster erkennen, <br />
                        <motion.span
                            initial={{ opacity: 0, y: 15 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            transition={{ delay: 0.4 }}
                            className="text-white italic font-serif-elegant font-light tracking-normal"
                        >
                            Systeme bauen
                        </motion.span>.
                    </motion.h2>
                </motion.div>

                <motion.div
                    style={{ y: yExit, scale: scaleExit, opacity: opacityExit }}
                    className="flex flex-col items-center gap-8 pt-12 pointer-events-auto w-full px-6"
                >
                    <motion.div
                        initial={{ opacity: 0 }}
                        whileInView={{ opacity: 1 }}
                        transition={{ delay: 0.1, duration: 0.8 }}
                        className="w-full max-w-4xl mx-auto"
                    >
                        <Bucket />
                    </motion.div>
                </motion.div>
            </div>
            <div className="absolute inset-0 pointer-events-none opacity-[0.03] mix-blend-overlay">
                <div className="absolute inset-0 bg-[url('/noise.svg')]" />
            </div>
        </div>
    );
};

// Gepinnte Kennzahlen-Strecke, 220vh statt 600vh (Owner: einkürzen, nicht rausnehmen).
const ScrollHijackSection = () => {
    const sectionRef = useRef<HTMLDivElement>(null);
    const { scrollYProgress } = useScroll({ target: sectionRef });
    const smoothProgress = useSpring(scrollYProgress, { stiffness: 80, damping: 25, mass: 0.5 });
    const [showBorder, setShowBorder] = React.useState(true);

    const borderOpacity = useTransform(smoothProgress, [0.1, 0.15], [1, 0]);
    // Das Panel blendet intern bei 0.45–0.6 aus; auf der kurzen Strecke bleibt es voll sichtbar.
    const panelProgress = useTransform(smoothProgress, [0, 1], [0, 0.45]);

    useMotionValueEvent(smoothProgress, "change", (v: any) => {
        if (v >= 0.2 && showBorder) setShowBorder(false);
        if (v < 0.15 && !showBorder) setShowBorder(true);
    });

    const { scrollYProgress: exitProgressRaw } = useScroll({ target: sectionRef, offset: ["end end", "end start"] });
    const exitProgress = useSpring(exitProgressRaw, { stiffness: 100, damping: 30, restDelta: 0.001 });
    const exitScale = useTransform(exitProgress, [0, 1], [1, 0.85]);
    const exitOpacity = useTransform(exitProgress, [0, 1], [1, 0]);
    const exitBorderRadius = useTransform(exitProgress, [0, 1], ["0px", "40px"]);

    return (
        <div id="geprueft" ref={sectionRef} className="relative h-[220vh]">
            <div className="sticky top-0 h-screen w-full overflow-hidden z-10">
                <motion.div
                    style={{ scale: exitScale, opacity: exitOpacity, borderRadius: exitBorderRadius }}
                    className="w-full h-full relative origin-center"
                >
                    <AnimatePresence>
                        {showBorder && (
                            <motion.div
                                initial={{ opacity: 1 }}
                                exit={{ opacity: 0, transition: { duration: 0.3 } }}
                                style={{
                                    opacity: borderOpacity,
                                    maskImage: "linear-gradient(to bottom, black 0%, transparent 100%)",
                                    WebkitMaskImage: "linear-gradient(to bottom, black 0%, transparent 100%)",
                                }}
                                className="absolute top-0 left-0 right-0 h-48 border-t-2 border-x-2 border-neutral-200 dark:border-zinc-800 rounded-t-[50px] md:rounded-t-[80px] pointer-events-none z-[100]"
                            />
                        )}
                    </AnimatePresence>
                    <div className="h-full w-full">
                        <CoreEngineeringPanel scrollYProgress={panelProgress} />
                    </div>
                </motion.div>
            </div>
        </div>
    );
};

export default function AboutSection() {
    return (
        <section className="relative bg-background text-foreground dark:bg-black dark:text-white transition-colors duration-500">
            <AblaufSection />
            <AuditFunnel />
            <ProjekteSection />
            <ScrollHijackSection />
        </section>
    );
}
