'use client';

import Link from 'next/link';
import { Linkedin, ArrowDownRight } from 'lucide-react';
import { handleAnchorClick } from '@/lib/scroll';

// Schlanker deutscher Footer (v3): Name, Ort, Anker der vier Blöcke, LinkedIn + Lebenslauf,
// Impressum + Datenschutz. Bewusst ohne GitHub-/Repo-/Instagram-Links (Owner-Regel) und
// ohne Motto (steht nur im Hero).
const LINKS = [
    { label: 'Ablauf', id: 'ablauf' },
    { label: 'Projekte', id: 'projekte' },
    { label: 'Buchen', id: 'buchen' },
];

export function Footer() {
    return (
        <footer className="relative z-20 border-t border-foreground/10 bg-background text-foreground">
            <div className="max-w-[1180px] mx-auto px-6 md:px-12 py-16">
                <div className="flex flex-col md:flex-row md:items-end md:justify-between gap-10">
                    <div>
                        <p className="text-3xl md:text-4xl font-black tracking-tighter">Leon Pösken</p>
                        <p className="mt-2 text-muted-foreground">Leipzig, Deutschland</p>
                    </div>

                    <nav aria-label="Abschnitte" className="flex flex-wrap gap-x-6 gap-y-2">
                        {LINKS.map((l) => (
                            <Link
                                key={l.id}
                                href={`/#${l.id}`}
                                onClick={(e) => handleAnchorClick(e, l.id)}
                                className="inline-flex min-h-11 items-center text-sm font-semibold text-muted-foreground hover:text-foreground transition-colors"
                            >
                                {l.label}
                            </Link>
                        ))}
                    </nav>
                </div>

                <div className="mt-12 flex flex-col sm:flex-row items-start sm:items-center gap-4">
                    <a
                        href="https://www.linkedin.com/in/leonpoesken/"
                        target="_blank"
                        rel="noopener noreferrer"
                        className="inline-flex items-center gap-2 rounded-full border border-foreground/20 px-6 py-3 text-sm font-bold hover:bg-foreground/5 transition-colors"
                    >
                        <Linkedin className="w-4 h-4" /> LinkedIn
                    </a>
                    <a
                        href="/Leon-Poesken-Lebenslauf.pdf"
                        download="Leon-Poesken-Lebenslauf.pdf"
                        className="inline-flex items-center gap-2 rounded-full bg-foreground text-background px-6 py-3 text-sm font-bold hover:opacity-90 transition-opacity"
                    >
                        Lebenslauf <ArrowDownRight className="w-4 h-4" />
                    </a>
                </div>

                <div className="mt-12 flex flex-col gap-3 text-xs font-mono text-muted-foreground sm:flex-row sm:items-center sm:justify-between">
                    <p>© {new Date().getFullYear()} Leon Pösken</p>
                    <nav aria-label="Rechtliches" className="flex gap-5">
                        <Link href="/datenschutz" className="hover:text-foreground transition-colors">
                            Datenschutz
                        </Link>
                    </nav>
                </div>
            </div>
        </footer>
    );
}
