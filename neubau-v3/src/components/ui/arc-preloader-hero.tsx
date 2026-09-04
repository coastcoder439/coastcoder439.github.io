"use client";

import * as React from "react";
import {
  animate,
  AnimatePresence,
  motion,
  useMotionValue,
  useTransform,
} from "motion/react";
import { cn } from "@/lib/utils";
import { usePathname } from "next/navigation";
import { useLenis } from 'lenis/react';

export type PreloadPhase = "intro" | "text" | "reveal" | "done";
export const PreloadContext = React.createContext<{ isPreloading: boolean, phase: PreloadPhase }>({ isPreloading: true, phase: "intro" });
export const usePreloadState = () => React.useContext(PreloadContext);

export type ArcRevealGreeting = {
  text: string;
  lang?: string;
};

export interface ArcRevealHeroProps {
  greetings?: ArcRevealGreeting[];
  greetingHold?: number;
  revealDuration?: number;
  className?: string;
  introClassName?: string;
  greetingClassName?: string;
  revealClassName?: string;
  storageKey?: string;
  children?: React.ReactNode;
}

// Using exported PreloadPhase

export function ArcRevealHero({
  greetings,
  // 1100 statt 800: Der Farbbalken braucht 0,6 s, bis er das Wort freigegeben hat —
  // danach soll es noch einen Moment stehen bleiben, bevor der Bogen weiterläuft.
  greetingHold = 1100,
  revealDuration = 800,
  className,
  introClassName,
  greetingClassName,
  revealClassName,
  storageKey,
  children,
}: ArcRevealHeroProps) {
  const pathname = usePathname();
  const lenis = useLenis();

  const [phase, setPhase] = React.useState<PreloadPhase>("intro");
  const [index, setIndex] = React.useState(0);
  const [prevPathname, setPrevPathname] = React.useState(pathname);

  // Progress from 0 to 2
  // 0 -> 1: Black curve rises from bottom
  // 1: Text appears (held by greetingHold)
  // 1 -> 2: Black curve lifts up to reveal page
  const progress = useMotionValue(0);

  // Synchronously handle route change during render! 
  // This PREVENTS the new page from appearing BEFORE the preloader animation starts!
  if (pathname !== prevPathname) {
    const isBackToProjects = prevPathname.startsWith('/projects/') && pathname === '/projects';
    const isBackToBlog = prevPathname.startsWith('/blog/') && pathname === '/blog';
    setPrevPathname(pathname);
    
    // Skip preloader if navigating back to the main listing page from a detail page
    if (!isBackToProjects && !isBackToBlog) {
        setPhase("intro");
        setIndex(0);
        progress.set(0);
    }
  }

  // Optimization: Defer rendering the NEW page until the screen is fully covered by the black preloader.
  // This prevents heavy components (like Three.js/Spline) from freezing the JS thread during the intro animation!
  const isInitialSSR = React.useRef(true);
  const [renderedChildren, setRenderedChildren] = React.useState(children);

  React.useEffect(() => {
    isInitialSSR.current = false;
  }, []);

  React.useEffect(() => {
    // Only update the actual rendered page when the screen is fully covered (text/reveal) or animation is done.
    if (phase === "text" || phase === "reveal" || phase === "done" || isInitialSSR.current) {
      setRenderedChildren(children);
    }
  }, [phase, children]);

  // Titel je Seite. Die Startseite bleibt bewusst OHNE Text (Owner): dort läuft nur die
  // Animation. Unbekannte Adressen (404) bekommen ebenfalls nichts statt des eingetippten
  // Wortes — sonst stand "Gibtsnicht" riesig auf dem Schirm.
  const title = React.useMemo(() => {
    const SEITEN: Record<string, string> = {
      // Die Startseite stand hier leer — deshalb lief der graue Bogen wortlos, obwohl
      // der Textplatz vorhanden ist. „Willkommen" benennt die Wartezeit, statt sie zu
      // verschweigen [Owner 04.09.2026]. Dieser Bildschirm ist der, den der Besucher
      // wirklich jedes Mal sieht: der schwarze davor läuft nur einmal je Browser-Sitzung.
      '/': 'Willkommen',
      '/datenschutz': 'Datenschutz',
      '/impressum': 'Impressum',
    };
    return SEITEN[pathname] ?? '';
  }, [pathname]);

  const activeGreetings = greetings || [{ text: title }];



  const arcPath = useTransform(progress, (p: number) => {
    if (p <= 1) {
      // Rise phase (0 to 1)
      const topEdge = 110 - p * 110;
      // Convex upwards curve
      const control = topEdge - 30 * Math.sin(p * Math.PI);
      return `M 0 ${topEdge} Q 50 ${control} 100 ${topEdge} L 100 110 L 0 110 Z`;
    } else {
      // Reveal phase (1 to 2)
      const t = p - 1;
      const bottomEdge = 110 - t * 110;
      // Concave upwards curve
      const control = bottomEdge - 30 * Math.sin(t * Math.PI);
      return `M 0 0 L 100 0 L 100 ${bottomEdge} Q 50 ${control} 0 ${bottomEdge} Z`;
    }
  });

  // Scroll lock and global event
  React.useEffect(() => {
    const isPreloading = phase !== "done";
    if (typeof window !== 'undefined') {
        window.dispatchEvent(new CustomEvent('preload-state-change', { detail: isPreloading }));
    }

    if (isPreloading) {
        document.body.style.overflow = 'hidden';
        document.documentElement.style.overflow = 'hidden';
        window.scrollTo(0, 0); // Force scroll to top while preloading
        if (lenis) lenis.stop();
    } else {
        document.body.style.overflow = '';
        document.documentElement.style.overflow = '';
        if (lenis) lenis.start();
    }
    return () => {
        document.body.style.overflow = '';
        document.documentElement.style.overflow = '';
        if (lenis) lenis.start();
        if (typeof window !== 'undefined') {
            window.dispatchEvent(new CustomEvent('preload-state-change', { detail: false }));
        }
    };
  }, [phase, lenis]);

  // Check initial load overrides
  React.useEffect(() => {
    // For homepage first load, if the original hello loader will run, skip this one
    if (pathname === '/' && typeof window !== 'undefined') {
        const isLoaded = sessionStorage.getItem('portfolioLoaded');
        if (!isLoaded) {
            setPhase("done");
            return;
        }
    }

    if (storageKey && typeof window !== "undefined") {
      try {
        if (window.sessionStorage.getItem(storageKey) === "done") {
          setPhase("done");
          return;
        }
      } catch {
        // ignore
      }
    }
  }, []); // Run only once on mount

  // Phase: Intro -> Text
  React.useEffect(() => {
    if (phase !== "intro") return;
    
    const controls = animate(progress, 1, {
      duration: revealDuration / 1000,
      ease: [0.7, 0, 0.3, 1], // Smooth snappy curve
      onComplete: () => {
        setPhase("text");
      }
    });
    
    return () => controls.stop();
  }, [phase, progress, revealDuration]);

  // Phase: Text hold -> Reveal
  React.useEffect(() => {
    if (phase !== "text") return;
    
    const t = window.setTimeout(() => {
      setPhase("reveal");
    }, greetingHold);
    
    return () => window.clearTimeout(t);
  }, [phase, greetingHold]);

  // Phase: Reveal -> Done
  React.useEffect(() => {
    if (phase !== "reveal") return;
    
    const controls = animate(progress, 2, {
      duration: revealDuration / 1000,
      ease: [0.7, 0, 0.3, 1],
      onComplete: () => {
        setPhase("done");
        if (storageKey && typeof window !== "undefined") {
          try {
            window.sessionStorage.setItem(storageKey, "done");
          } catch {
            // ignore
          }
        }
      }
    });
    
    return () => controls.stop();
  }, [phase, progress, revealDuration, storageKey]);

  const showOverlay = phase !== "done";
  const current = activeGreetings[Math.min(index, activeGreetings.length - 1)];

  return (
    <div
      className={cn(
        "relative isolate min-h-screen w-full bg-background text-foreground",
        className,
      )}
    >
      <PreloadContext.Provider value={{ isPreloading: showOverlay, phase }}>
        <div className={cn("relative z-0", revealClassName)}>{renderedChildren}</div>
      </PreloadContext.Provider>

      <AnimatePresence>
        {showOverlay && (
          <motion.div
            key="arc-reveal-overlay"
            initial={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.18, ease: [0.4, 0, 0.2, 1] }}
            className={cn(
              "fixed inset-0 z-[999] h-screen w-full overflow-hidden", // changed w-screen to w-full
              introClassName,
            )}
          >
            {/* The text layer */}
            <div className="absolute inset-0 flex items-center justify-center z-10">
              <AnimatePresence mode="wait">
                {phase === "text" && current && (
                  <motion.span
                    key={`${index}-${current.text}`}
                    lang={current.lang}
                    initial={{ opacity: 1 }}
                    animate={{ opacity: 1 }}
                    // Kurz ausblenden: die Deckflaeche faellt bei "reveal" sofort, ein
                    // langsamer Text-Exit legte den Schriftzug lesbar ueber den Inhalt.
                    exit={{ opacity: 0, y: -15, transition: { duration: 0.12 } }}
                    className="relative inline-block select-none overflow-hidden px-6 py-1 align-middle"
                  >
                    <motion.span
                      initial={{ opacity: 0 }}
                      animate={{ opacity: 1 }}
                      transition={{ delay: 0.24, duration: 0.01 }}
                      className={cn(
                        "block text-center text-5xl font-semibold tracking-tight text-white",
                        greetingClassName,
                      )}
                    >
                      {current.text}
                    </motion.span>
                    {/* Derselbe Block-Reveal wie bei „Mehr Zeit. Weniger Kosten. Ruhigere
                        Nerven." (AnsatzScroll → RevealTitel): ein Farbbalken wischt über
                        die Zeile und gibt den Text dahinter frei. */}
                    <motion.span
                      initial={{ clipPath: "inset(0 100% 0 0)" }}
                      animate={{
                        clipPath: [
                          "inset(0 100% 0 0)",
                          "inset(0 0% 0 0)",
                          "inset(0 0% 0 0)",
                          "inset(0 0 0 100%)",
                        ],
                      }}
                      transition={{
                        duration: 0.55,
                        times: [0, 0.42, 0.58, 1],
                        delay: 0.05,
                        ease: [0.85, 0, 0.15, 1],
                      }}
                      className="absolute inset-0 z-10 block bg-[#0ea5e9]"
                    />
                  </motion.span>
                )}
              </AnimatePresence>
            </div>

            {/* The background curves layer */}
            <svg
              className="pointer-events-none absolute inset-0 h-full w-full z-0"
              viewBox="0 0 100 100"
              preserveAspectRatio="none"
              aria-hidden
            >
              {/* Solid background covering the underlying page initially, removed when reveal starts */}
              {(phase === "intro" || phase === "text") && (
                <rect width="100" height="100" className="fill-background" />
              )}
              {/* The animating arc: black in light mode, dark gray in dark mode */}
              <motion.path d={arcPath} className="fill-foreground dark:fill-[#262626]" />
            </svg>
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
}
