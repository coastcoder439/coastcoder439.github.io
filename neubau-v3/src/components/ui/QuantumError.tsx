'use client';

import React from 'react';
import Link from 'next/link';
import { motion } from 'framer-motion';
import { MoveLeft, RotateCcw } from 'lucide-react';

// v3: deutsche Fehlerseite (404 und 500). Ersetzt die englische Template-Fassung.
export function QuantumError({ type = '404', reset }: { type?: '404' | '500'; reset?: () => void }) {
    const is404 = type === '404';
    const badge = is404 ? 'Seite nicht gefunden' : 'Technischer Fehler';
    const text = is404
        ? 'Diese Adresse gibt es hier nicht. Zurück zur Startseite, dort steht alles.'
        : 'Da ist etwas schiefgelaufen. Lade die Seite neu oder geh zurück zur Startseite.';

    return (
        <div className="fixed inset-0 z-[99999] bg-white dark:bg-black flex flex-col items-center justify-center font-sans overflow-hidden select-none">
            <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8, ease: [0.16, 1, 0.3, 1] }}
                className="relative z-10 flex flex-col items-center px-6 text-center"
            >
                <h1 className="text-[9rem] font-black leading-none tracking-tighter text-foreground md:text-[16rem]">
                    {type}
                </h1>

                <div className="mt-6 flex max-w-md flex-col items-center gap-4">
                    <div className="rounded-full bg-foreground px-5 py-2 text-[10px] font-black uppercase tracking-[0.4em] text-background md:text-xs">
                        {badge}
                    </div>
                    <p className="mt-1 text-sm font-medium text-muted-foreground md:text-base">{text}</p>
                </div>

                <div className="mt-14 flex flex-col items-center gap-6 sm:flex-row">
                    <Link href="/">
                        <button className="group relative flex items-center gap-3 rounded-full bg-foreground px-8 py-4 text-sm font-bold tracking-wide text-background transition-all hover:pr-10">
                            <span>Zur Startseite</span>
                            <div className="absolute right-4 opacity-0 transition-opacity group-hover:opacity-100">
                                <MoveLeft size={16} className="rotate-180" />
                            </div>
                        </button>
                    </Link>

                    {!is404 && (
                        <button
                            onClick={() => (reset ? reset() : window.location.reload())}
                            className="flex items-center gap-3 text-sm font-bold tracking-wide text-muted-foreground transition-colors hover:text-foreground"
                        >
                            <RotateCcw size={16} />
                            <span>Neu laden</span>
                        </button>
                    )}

                    <button
                        onClick={() => window.history.back()}
                        className="flex items-center gap-3 text-sm font-bold tracking-wide text-muted-foreground transition-colors hover:text-foreground"
                    >
                        <MoveLeft size={16} />
                        <span>Zurück</span>
                    </button>
                </div>
            </motion.div>
        </div>
    );
}
