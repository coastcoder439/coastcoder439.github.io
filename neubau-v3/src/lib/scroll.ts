// Ein einziger Weg, auf dieser Seite zu einem Abschnitt zu springen.
//
// Warum eigener Code: Die Seite läuft unter Lenis (weiches Scrollen für das ganze
// Dokument). Lenis fängt `window.scrollTo({behavior:'smooth'})` ab, das Ziel wird
// also nie erreicht — genau daran sind vorher alle Sprungmarken gescheitert. Der
// Provider meldet seine Instanz hier an; ohne Lenis greift der native Sprung.

type LenisLike = { scrollTo: (target: number | string | HTMLElement, opts?: Record<string, unknown>) => void };

let lenis: LenisLike | null = null;

export function registerLenis(instance: unknown) {
    lenis = instance && typeof (instance as LenisLike).scrollTo === 'function' ? (instance as LenisLike) : null;
}

/** Abstand der festen Kopfleiste, damit die Überschrift nicht darunter verschwindet. */
const HEADER_OFFSET = 90;

export function scrollToId(id: string) {
    if (typeof window === 'undefined') return;
    if (!id) {
        if (lenis) lenis.scrollTo(0, { duration: 1.2 });
        else window.scrollTo({ top: 0, behavior: 'smooth' });
        return;
    }
    const el = document.getElementById(id);
    if (!el) return;
    const y = el.getBoundingClientRect().top + window.scrollY - HEADER_OFFSET;
    if (lenis) lenis.scrollTo(y, { duration: 1.2 });
    else window.scrollTo({ top: y, behavior: 'smooth' });
}

/** Für Anker-Links: verhindert den Standardsprung und scrollt weich. */
export function handleAnchorClick(e: { preventDefault: () => void }, id: string) {
    if (typeof window === 'undefined' || window.location.pathname !== '/') return;
    if (id && !document.getElementById(id)) return;
    e.preventDefault();
    scrollToId(id);
}
