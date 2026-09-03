'use client';

import React from 'react';
import { Navbar, Footer } from '@/components/layout';
import { BackToTop } from '@/components/ui/BackToTop';

// v3: Die Seite hat nur noch die Startseite plus Impressum und Datenschutz — die
// Sonderfälle des Templates (Projekt-/Blog-Detailseiten ohne Navigation) sind entfallen.
export function ConditionalNavigation({ children }: { children: React.ReactNode }) {
    return (
        <div className="relative min-h-screen flex flex-col">
            <Navbar />
            <div className="flex-1 relative">{children}</div>
            <Footer />
            <BackToTop />
        </div>
    );
}
