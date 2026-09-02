'use client';

import { motion } from 'framer-motion';
import { ArrowUpRight } from 'lucide-react';
import { LiquidOcean } from '@/components/ui/liquid-ocean';
import Link from 'next/link';
import { cn } from '@/lib/utils';

import { useTheme } from 'next-themes';
import { useEffect, useState } from 'react';

import { usePerformance } from '@/hooks/usePerformance';

export const MarqueeClosing = ({ isLowPowerMode: parentLowPowerMode }: { isLowPowerMode?: boolean }) => {
    const { theme, systemTheme } = useTheme();
    const [mounted, setMounted] = useState(false);
    const { isMobile } = usePerformance();

    // Use isMobile to strictly limit CSS fallback to mobile devices only.
    // Desktop (even in low power mode) should try to render the effect as per user request.
    const showOcean = !isMobile;

    useEffect(() => {
        setMounted(true);
    }, []);

    const currentTheme = theme === 'system' ? systemTheme : theme;
    const isDark = currentTheme === 'dark';

    // Ocean Colors
    const oceanConfig = isDark ? {
        // Dark Mode: Deep Black Ocean with Cyan Accents
        bg: 0x000000,
        grid: 0x222222, // Increased visibility from 0x050505
        accent: 0x06b6d4, // Cyan-500
        opacity: 0.4
    } : {
        // Light Mode: White Ocean for seamless blending
        bg: 0xffffff,
        grid: 0x9ca3af, // Darker grid for light mode (gray-400)
        accent: 0x2563eb, // Stronger blue (blue-600) to stand out more
        opacity: 0.4 // Lowered from 0.6 to make wireframe lines much sharper and visible
    };

    if (!mounted) return null; // Prevent hydration mismatch

    return (
        // Added pb-32 to account for the overlay footer and position text lower
        <div className={cn(
            "relative w-full min-h-screen flex flex-col items-center justify-end overflow-hidden pb-5 transition-colors duration-500",
            isDark ? "bg-black text-white" : "bg-background text-foreground"
        )}>

            {/* Background Ocean - Full Immersive */}
            <div className="absolute inset-0 z-0">
                {!showOcean ? (
                    <div className={cn("absolute inset-0 transition-opacity duration-1000", isDark ? "bg-black" : "bg-white")}>
                        <div className="absolute inset-0 opacity-20" style={{ backgroundImage: `radial-gradient(circle at 50% 120%, ${isDark ? '#06b6d4' : '#3b82f6'}, transparent)` }} />
                    </div>
                ) : (
                    <LiquidOcean
                        key={isDark ? 'dark' : 'light'}
                        backgroundColor={oceanConfig.bg}
                        gridColor={oceanConfig.grid}
                        accentColor={oceanConfig.accent}
                        oceanSize={60}
                        oceanFragments={40}
                        waveAmplitude={isDark ? 0.8 : 0.5} // Calmer waves in light mode
                        waveSpeed={0.015}
                        showBoats={true}
                        boatCount={6}
                        boatSpread={20}
                        showWireframe={true}
                        showGrid={true}
                        oceanOpacity={oceanConfig.opacity}
                        isLowPowerMode={false}
                    />
                )}

                {/* Top Fade Only - Seamless Integration */}
                {/* Top Fade - Gradient Bridge from Page Background to Ocean */}
                <div className={cn(
                    "absolute top-0 left-0 w-full h-48 bg-gradient-to-b to-transparent pointer-events-none z-10",
                    isDark ? "from-black via-black/80" : "from-background via-background/80"
                )} />
            </div>

            {/* Main Content - Centered */}
            <div className="relative z-10 flex-1 flex flex-col items-center justify-center container px-6 py-20 text-center space-y-12">

                <motion.div
                    initial={!showOcean ? { opacity: 0 } : { opacity: 0, y: 30 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    transition={{ duration: !showOcean ? 0.5 : 1, ease: [0.22, 1, 0.36, 1] }}
                    viewport={{ once: true }}
                    className="flex flex-col items-center gap-8 max-w-4xl mx-auto"
                >
                    <h2 className={cn(
                        "text-6xl md:text-8xl font-black tracking-tighter drop-shadow-2xl pb-4 leading-tight",
                        isDark ? "text-transparent bg-clip-text bg-gradient-to-b from-white to-white/60" : "text-foreground"
                    )}>
                        Bereit für ein Gespräch?
                    </h2>

                    <p className={cn(
                        "text-xl md:text-2xl font-light leading-relaxed max-w-2xl drop-shadow-md pb-2",
                        isDark ? "text-white/70" : "text-muted-foreground font-medium"
                    )}>
                        Ich freue mich auf Gespräche über KI-Systeme, Automatisierung und belastbare Webprodukte.
                    </p>

                    {/* Action Area */}
                    <div className="w-full max-w-md mx-auto flex flex-col gap-6">
                        <div className="flex flex-wrap items-center justify-center gap-4 text-sm font-medium tracking-wide">
                            <Link href="/contact" className={cn(
                                "flex items-center gap-2 rounded-full border px-6 py-3 transition-colors",
                                isDark ? "border-white/15 text-white/70 hover:border-cyan-400 hover:text-cyan-400" : "border-foreground/15 text-foreground hover:border-primary hover:text-primary"
                            )}>
                                <span>Auf ein Gespräch</span>
                                <ArrowUpRight className="w-3 h-3" />
                            </Link>
                            <Link href="/projects" className={cn(
                                "flex items-center gap-2 rounded-full border px-6 py-3 transition-colors",
                                isDark ? "border-white/15 text-white/70 hover:border-cyan-400 hover:text-cyan-400" : "border-foreground/15 text-foreground hover:border-primary hover:text-primary"
                            )}>
                                <span>Projekte ansehen</span>
                                <ArrowUpRight className="w-3 h-3" />
                            </Link>
                        </div>

                    </div>
                </motion.div>
            </div>
        </div >
    );
};
