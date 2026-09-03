'use client';

import Link from 'next/link';
import { Linkedin, ArrowDownRight } from 'lucide-react';

// Schlanker deutscher Footer: Name, Motto, Anker, LinkedIn + CV. Bewusst ohne
// GitHub-/Repo-/Instagram-Links (Owner-Regel: „ohne GitHub, das ist privat").
const LINKS = [
    { label: 'Ablauf', id: 'ablauf' },
    { label: 'Projekte', id: 'projekte' },
    { label: 'Buchen', id: 'buchen' },
];

function goTo(e: React.MouseEvent, id: string) {
    if (typeof window === 'undefined' || window.location.pathname !== '/') return;
    const el = document.getElementById(id);
    if (!el) return;
    e.preventDefault();
    const y = el.getBoundingClientRect().top + window.scrollY - 80;
    const lenis = (window as any).lenis;
    if (lenis?.scrollTo) lenis.scrollTo(y);
    else window.scrollTo({ top: y, behavior: 'smooth' });
}

export function Footer() {
    return (
        <footer className="relative z-20 border-t border-foreground/10 bg-background text-foreground">
            <div className="max-w-[1180px] mx-auto px-6 md:px-12 py-16">
                <div className="flex flex-col md:flex-row md:items-end md:justify-between gap-10">
                    <div>
                        <p className="text-3xl md:text-4xl font-black tracking-tighter">Leon Pösken</p>
                        <p className="mt-2 text-muted-foreground">KI-Systembau · Leipzig</p>
                    </div>

                    <nav className="flex flex-wrap gap-x-6 gap-y-2">
                        {LINKS.map((l) => (
                            <Link
                                key={l.id}
                                href={`/#${l.id}`}
                                onClick={(e) => goTo(e, l.id)}
                                className="text-sm font-semibold text-muted-foreground hover:text-foreground transition-colors"
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

                <p className="mt-12 text-xs font-mono text-muted-foreground">
                    © {new Date().getFullYear()} Leon Pösken
                </p>
            </div>
        </footer>
    );
}
