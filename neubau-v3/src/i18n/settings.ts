// v3: Die Seite gibt es nur auf Deutsch — die Sprachumschaltung des Templates
// (Englisch/Indonesisch) ist entfallen.
export const locales = ['de'] as const;
export type Locale = (typeof locales)[number];
export const defaultLocale: Locale = 'de';
