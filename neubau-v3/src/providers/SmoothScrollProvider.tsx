'use client';

import { useEffect } from 'react';
import { ReactLenis, useLenis } from 'lenis/react';
import { registerLenis } from '@/lib/scroll';

// Meldet die laufende Lenis-Instanz beim Scroll-Helfer an. Ohne diese Anmeldung
// laufen alle Sprungmarken ins Leere, weil Lenis den nativen Sprung abfängt.
function LenisBridge() {
    const lenis = useLenis();
    useEffect(() => {
        registerLenis(lenis);
        return () => registerLenis(null);
    }, [lenis]);
    return null;
}

export function SmoothScrollProvider({ children }: { children: React.ReactNode }) {
    return (
        <ReactLenis
            root
            options={{
                lerp: 0.1,
                duration: 1.5,
                smoothWheel: true,
                // smoothTouch is causing TS error in this version's types
                // @ts-ignore
                smoothTouch: false,
            }}
        >
            <LenisBridge />
            {children}
        </ReactLenis>
    );
}
