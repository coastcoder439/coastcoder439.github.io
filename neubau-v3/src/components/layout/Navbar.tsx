'use client';

import { useState, useCallback, useEffect } from 'react';
import { motion, AnimatePresence, useScroll, useMotionValueEvent } from 'framer-motion';
import { usePathname } from 'next/navigation';
import Link from 'next/link';
import { Menu, X, ArrowDownRight } from 'lucide-react';
import { cn } from '@/lib/utils';

import { AnimatedThemeToggler } from '@/components/ui/animated-theme-toggler';
import { usePreloadState } from '@/components/ui/arc-preloader-hero';

// Feste Nav v3: Start · Ablauf · Projekte · Buchen · CV-Button. Anker scrollen auf der Startseite; Lenis laeuft als root,
// also bleibt window-Scroll nativ und scrollTo greift.
const NAV = [
    { label: 'Start', id: '' },
    { label: 'Ablauf', id: 'ablauf' },
    { label: 'Projekte', id: 'projekte' },
    { label: 'Buchen', id: 'buchen' },
];

function Clock() {
    const [time, setTime] = useState<string>('');
    const [mounted, setMounted] = useState(false);

    useEffect(() => {
        setMounted(true);
        const update = () => {
            const now = new Date();
            const h = String(now.getHours()).padStart(2, '0');
            const m = String(now.getMinutes()).padStart(2, '0');
            const s = String(now.getSeconds()).padStart(2, '0');
            setTime(`${h}:${m}:${s}`);
        };
        update();
        const interval = setInterval(update, 1000);
        return () => clearInterval(interval);
    }, []);

    if (!mounted) return <span className="font-mono text-xl md:text-2xl font-black opacity-0">00:00:00</span>;

    return (
        <span className="font-mono text-xl md:text-2xl font-black text-gradient tracking-widest hover:tracking-[0.2em] transition-all duration-300">
            {time}
        </span>
    );
}

function scrollToId(id: string) {
    if (typeof window === 'undefined') return;
    if (!id) {
        const lenis = (window as any).lenis;
        if (lenis?.scrollTo) lenis.scrollTo(0);
        else window.scrollTo({ top: 0, behavior: 'smooth' });
        return;
    }
    const el = document.getElementById(id);
    if (!el) return;
    const y = el.getBoundingClientRect().top + window.scrollY - 80;
    const lenis = (window as any).lenis;
    if (lenis?.scrollTo) lenis.scrollTo(y);
    else window.scrollTo({ top: y, behavior: 'smooth' });
}

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
                        <Link href="/" onClick={(e) => onNav(e, '')} className="relative group min-w-[120px]">
                            <Clock />
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
                                CV <ArrowDownRight className="w-4 h-4" />
                            </a>
                        </div>

                        {/* Controls */}
                        <div className="flex items-center gap-2 md:gap-3">
                            {mounted && <AnimatedThemeToggler />}
                            <motion.button
                                whileHover={{ scale: 1.05 }}
                                whileTap={{ scale: 0.95 }}
                                onClick={() => setIsMenuOpen((p) => !p)}
                                className="p-2 md:p-2.5 rounded-full bg-muted/80 hover:bg-muted transition-colors lg:hidden"
                                aria-label="Menü"
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
