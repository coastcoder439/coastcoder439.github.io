'use client';

import { useState, useEffect } from 'react';
import { motion, AnimatePresence, useReducedMotion } from 'framer-motion';

interface LoadingScreenProps {
    onComplete?: () => void;
    onExitStart?: () => void;
    duration?: number;
}

// Ladebildschirm: kein Name, kein Motto (Owner) — aber ein Wort, das die Wartezeit
// benennt statt sie zu verschweigen [Owner 04.09.2026: „Da könnte man hinschreiben,
// willkommen … währenddessen lädt die Seite"]. Hinter dem Vorhang lädt die Startseite
// vollständig; gemessen 04.09.: alle Abrufe nach 1,8 s fertig, Vorhang bis 2,7 s.
const WORDS: string[] = ['Willkommen'];

// Derselbe Block-Reveal wie bei „Mehr Zeit. Weniger Kosten. Ruhigere Nerven."
// (AnsatzScroll → RevealTitel): ein Farbbalken wischt über die Zeile und gibt den Text
// dahinter frei. Blau ist die erste Farbe jener Reihe, damit der Bogen zusammenpasst.
const WISCH_FARBE = '#0ea5e9';

export function LoadingScreen({ onComplete, onExitStart, duration }: LoadingScreenProps) {
    const [isLoading, setIsLoading] = useState(true);
    const reduce = useReducedMotion();

    const handleAnimationComplete = () => {
        // Small pause at the end for impact before exiting
        setTimeout(() => {
            setIsLoading(false);
            onExitStart?.();
            setTimeout(() => {
                onComplete?.();
            }, 1200); // Increased slightly for smoother overlap
        }, 300);
    };

    useEffect(() => {
        // Das Wort braucht Zeit zum Erscheinen (0,15 s Verzug + 0,6 s Einblendung) und
        // danach einen Moment zum Stehen. 1200 ms + 300 ms Pause + 1200 ms Vorhang
        // ergeben rund 2,7 s — dieselbe Länge wie bisher, jetzt mit Inhalt.
        const t = setTimeout(handleAnimationComplete, 1200);
        return () => clearTimeout(t);
    }, []);

    return (
        <AnimatePresence mode="wait">
            {isLoading && (
                <motion.div
                    initial={{ y: 0 }}
                    exit={{
                        y: "-100%",
                        transition: {
                            duration: 1.2,
                            ease: [0.7, 0, 0.3, 1]
                        }
                    }}
                    className="fixed inset-0 z-[1000] flex flex-col items-center justify-center bg-background overflow-hidden will-change-transform"
                >
                    <motion.div
                        initial={{ opacity: 0, y: 20 }}
                        animate={{ opacity: 1, y: 0 }}
                        exit={{
                            opacity: 0,
                            y: -40,
                            transition: { duration: 0.6, ease: [0.33, 1, 0.68, 1] }
                        }}
                        // Kein Flex-Container: der Wisch-Wrapper wuerde darin auf ein paar
                        // Pixel schrumpfen (gemessen: 28 px statt der Wortbreite).
                        className="relative w-full max-w-[720px] px-6 text-center will-change-transform"
                    >
                        {WORDS.map((word, i) => (
                            <span key={word} className="relative inline-block overflow-hidden py-1 align-middle">
                                <motion.span
                                    initial={reduce ? false : { opacity: 0 }}
                                    animate={{ opacity: 1 }}
                                    transition={{ delay: reduce ? 0 : i * 0.15 + 0.34, duration: 0.01 }}
                                    className="block text-4xl sm:text-5xl md:text-6xl font-black tracking-tighter text-foreground"
                                >
                                    {word}
                                </motion.span>
                                {!reduce && (
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
                                            duration: 0.8,
                                            times: [0, 0.42, 0.58, 1],
                                            delay: i * 0.15 + 0.1,
                                            ease: [0.85, 0, 0.15, 1],
                                        }}
                                        className="absolute inset-0 z-10 block"
                                        style={{ backgroundColor: WISCH_FARBE }}
                                    />
                                )}
                            </span>
                        ))}
                    </motion.div>

                    {/* Subtle aesthetic dot */}
                    <motion.div
                        animate={{ opacity: [0.2, 0.5, 0.2] }}
                        transition={{ duration: 2, repeat: Infinity }}
                        exit={{ opacity: 0, transition: { duration: 0.3 } }}
                        className="absolute bottom-12 w-1.5 h-1.5 rounded-full bg-foreground/10"
                    />
                </motion.div>
            )}
        </AnimatePresence>
    );
}