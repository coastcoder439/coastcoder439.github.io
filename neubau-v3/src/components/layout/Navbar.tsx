'use client';

import { useState, useCallback, useEffect } from 'react';
import { motion, AnimatePresence, useScroll, useMotionValueEvent } from 'framer-motion';
import { usePathname } from 'next/navigation';
import Link from 'next/link';
import { Menu, X, ArrowDownRight } from 'lucide-react';
import { cn } from '@/lib/utils';

import { AnimatedThemeToggler } from '@/components/ui/animated-theme-toggler';
import { usePreloadState } from '@/components/ui/arc-preloader-hero';
import { scrollToId } from '@/lib/scroll';

// Feste Nav v3: Start · Ablauf · Projekte · Buchen · CV-Button. Anker scrollen auf der Startseite; Lenis laeuft als root,
// also bleibt window-Scroll nativ und scrollTo greift.
const NAV = [
    { label: 'Start', id: '' },
    { label: 'Ablauf', id: 'ablauf' },
    { label: 'Projekte', id: 'projekte' },
    { label: 'Buchen', id: 'buchen' },
];

export function Navbar() {
    const pathname = usePathname();
    const { scrollY } = useScroll();

    const [isVisible, setIsVisible] = useState(true);
    const [isScrolled, setIsScrolled] = useState(false);
    const [isMenuOpen, setIsMenuOpen] = useState(false);
    const [lastScrollY, setLastScrollY] = useState(0);
    const [mounted, setMounted] = useState(false);

    const { isPreloading: isPreloadActive } = usePreloadState();

    useEffect(() => setMounted(true), []);

    useEffect(() => {
        document.body.style.overflow = isMenuOpen ? 'hidden' : '';
        return () => { document.body.style.overflow = ''; };
    }, [isMenuOpen]);

    useEffect(() => { setIsMenuOpen(false); }, [pathname]);

    // Escape schliesst das mobile Menue (sonst ist es nur per Maus zu verlassen).
    useEffect(() => {
        if (!isMenuOpen) return;
        const onKey = (e: KeyboardEvent) => { if (e.key === 'Escape') setIsMenuOpen(false); };
        window.addEventListener('keydown', onKey);
        return () => window.removeEventListener('keydown', onKey);
    }, [isMenuOpen]);

    useMotionValueEvent(scrollY, 'change', (latest) => {
        if (isMenuOpen) return;
        const direction = latest > lastScrollY ? 'down' : 'up';
        setIsScrolled(latest > 50);
        setIsVisible(!(direction === 'down' && latest > 100));
        setLastScrollY(latest);
    });

    const onNav = useCallback((e: React.MouseEvent, id: string) => {
        if (pathname === '/') {
            e.preventDefault();
            scrollToId(id);
        }
        setIsMenuOpen(false);
    }, [pathname]);

    const navVariants = {
        visible: { y: 0, opacity: 1 },
        hidden: { y: -100, opacity: 0 },
    };

    return (
        <>
            <motion.nav
                variants={navVariants}
                initial="hidden"
                animate={!isPreloadActive && (isVisible || isMenuOpen) ? 'visible' : 'hidden'}
                transition={{ duration: 0.4, ease: [0.25, 0.1, 0.25, 1] }}
                className="fixed top-0 left-0 right-0 z-[100]"
            >
                <div className="max-w-[1600px] mx-auto px-6 md:px-12 lg:px-24 py-4 md:py-6">
                    <motion.div
                        className={cn(
                            'flex items-center justify-between transition-all duration-500 rounded-full',
                            isScrolled ? 'glass-strong px-6 py-3' : 'py-2'
                        )}
                        layout
                    >
                        <Link
                            href="/"
                            onClick={(e) => onNav(e, '')}
                            aria-label="Leon Pösken — zum Seitenanfang"
                            className="relative group min-w-[120px] rounded-sm focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-current"
                        >
                            <span aria-hidden="true" className="grid h-9 w-9 place-content-center rounded-lg bg-foreground font-black text-sm text-background">LP</span>
                        </Link>

                        {/* Desktop Nav */}
                        <div className="hidden lg:flex items-center gap-1">
                            {NAV.map((item) => (
                                <Link
                                    key={item.label}
                                    href={item.id ? `/#${item.id}` : '/'}
                                    onClick={(e) => onNav(e, item.id)}
                                    className="relative px-4 py-2 text-sm font-bold rounded-full text-muted-foreground hover:text-foreground hover:bg-muted/60 transition-all duration-300"
                                >
                                    {item.label}
                                </Link>
                            ))}
                            <a
                                href="/Leon-Poesken-Lebenslauf.pdf"
                                download="Leon-Poesken-Lebenslauf.pdf"
                                className="ml-2 inline-flex items-center gap-2 rounded-full bg-foreground text-background px-5 py-2.5 text-sm font-bold hover:opacity-90 transition-opacity"
                            >
                                Lebenslauf <ArrowDownRight className="w-4 h-4" />
                            </a>
                        </div>

                        {/* Controls */}
                        <div className="flex items-center gap-2 md:gap-3">
                            {mounted && <AnimatedThemeToggler />}
                            <motion.button
                                whileHover={{ scale: 1.05 }}
                                whileTap={{ scale: 0.95 }}
                                onClick={() => setIsMenuOpen((p) => !p)}
                                className="p-2 md:p-2.5 rounded-full bg-muted/80 hover:bg-muted transition-colors lg:hidden focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-current"
                                aria-label={isMenuOpen ? 'Menü schließen' : 'Menü öffnen'}
                                aria-expanded={isMenuOpen}
                                aria-controls="mobiles-menue"
                            >
                                <AnimatePresence mode="wait" initial={false}>
                                    <motion.div
                                        key={isMenuOpen ? 'close' : 'menu'}
                                        initial={{ rotate: -90, opacity: 0 }}
                                        animate={{ rotate: 0, opacity: 1 }}
                                        exit={{ rotate: 90, opacity: 0 }}
                                        transition={{ duration: 0.2 }}
                                    >
                                        {isMenuOpen ? <X className="w-5 h-5" /> : <Menu className="w-5 h-5" />}
                                    </motion.div>
                                </AnimatePresence>
                            </motion.button>
                        </div>
                    </motion.div>
                </div>
            </motion.nav>

            {/* Mobile Menu */}
            <AnimatePresence>
                {isMenuOpen && (
                    <motion.div
                        initial={{ opacity: 0 }}
                        animate={{ opacity: 1 }}
                        exit={{ opacity: 0 }}
                        transition={{ duration: 0.3 }}
                        id="mobiles-menue"
                        role="dialog"
                        aria-modal="true"
                        aria-label="Menü"
                        className="fixed inset-0 z-[90] lg:hidden bg-background"
                    >
                        <div className="relative flex flex-col items-center justify-center h-full gap-6 py-20">
                            {NAV.map((item) => (
                                <Link
                                    key={item.label}
                                    href={item.id ? `/#${item.id}` : '/'}
                                    onClick={(e) => onNav(e, item.id)}
                                    className="text-3xl font-black text-muted-foreground hover:text-foreground transition-colors"
                                >
                                    {item.label}
                                </Link>
                            ))}
                            <a
                                href="/Leon-Poesken-Lebenslauf.pdf"
                                download="Leon-Poesken-Lebenslauf.pdf"
                                onClick={() => setIsMenuOpen(false)}
                                className="mt-4 inline-flex items-center gap-2 rounded-full bg-foreground text-background px-8 py-4 text-lg font-bold"
                            >
                                Lebenslauf <ArrowDownRight className="w-5 h-5" />
                            </a>
                        </div>
                    </motion.div>
                )}
            </AnimatePresence>
        </>
    );
}
