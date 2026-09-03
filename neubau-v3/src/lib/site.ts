// Eine Quelle für Adresse und Freigabe-Zustand der Seite.

// Basis-Adresse: lokal der Dev-Server, auf Vercel die Produktionsdomain.
// NEXT_PUBLIC_SITE_URL überschreibt beides (z. B. bei eigener Domain).
export const SITE_URL =
    process.env.NEXT_PUBLIC_SITE_URL ??
    (process.env.VERCEL_PROJECT_PRODUCTION_URL
        ? `https://${process.env.VERCEL_PROJECT_PRODUCTION_URL}`
        : 'http://localhost:3001');

// Solange Anschrift und E-Mail im Impressum Platzhalter sind, darf die Seite nicht
// in Suchmaschinen erscheinen (§ 5 DDG). Auf true stellen, sobald die Angaben in
// src/app/impressum/page.tsx und src/app/datenschutz/page.tsx eingetragen sind.
export const IMPRESSUM_COMPLETE = false;
