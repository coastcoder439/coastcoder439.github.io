import { ArrowDownRight, ArrowUpRight, Download } from 'lucide-react';

import { ProfileAndContact } from '@/components/profile-contact';
import { ThemeToggle } from '@/components/theme-toggle';
import { WorkSections } from '@/components/work-sections';

const navigation = [
  { href: '#arbeit', label: 'Arbeit' },
  { href: '#profil', label: 'Profil' },
  { href: '#kontakt', label: 'Kontakt' },
];

export default function Home() {
  return (
    <main id="inhalt" className="min-h-screen overflow-x-clip bg-background text-foreground">
      <a
        href="#arbeit"
        className="fixed left-4 top-4 z-[100] -translate-y-24 bg-foreground px-4 py-3 text-sm font-semibold text-background transition-transform focus:translate-y-0"
      >
        Direkt zu den Projekten
      </a>

      <header className="relative z-20 border-b border-line bg-background">
        <div className="mx-auto grid min-h-20 w-full max-w-[1600px] grid-cols-[1fr_auto] items-center gap-3 px-5 sm:px-8 lg:grid-cols-[1fr_auto_1fr] lg:gap-6 lg:px-12">
          <a
            href="#inhalt"
            aria-label="Zur Startseite"
            className="group flex min-h-11 min-w-11 items-center gap-3 font-display text-lg uppercase tracking-[-0.04em] focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-signal"
          >
            <span className="grid size-8 place-items-center bg-ink text-[0.72rem] font-black text-paper dark:bg-paper dark:text-ink">
              LP
            </span>
            <span className="hidden sm:inline">Leon Pösken</span>
          </a>

          <nav aria-label="Hauptnavigation" className="hidden items-center gap-8 lg:flex">
            {navigation.map((item, index) => (
              <a
                key={item.href}
                href={item.href}
                className="group relative flex min-h-11 items-center gap-2 text-sm font-semibold focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-signal"
              >
                <span className="font-mono text-[0.64rem] text-muted-foreground">0{index + 1}</span>
                <span>{item.label}</span>
                <span className="absolute inset-x-0 bottom-1 h-0.5 origin-left scale-x-0 bg-current transition-transform group-hover:scale-x-100" />
              </a>
            ))}
          </nav>

          <div className="flex justify-end gap-2">
            <ThemeToggle />
            <a
              href="Leon-Poesken-Lebenslauf.pdf"
              download
              className="inline-flex min-h-11 items-center gap-2 border border-line px-3 text-sm font-semibold transition-colors hover:bg-foreground hover:text-background focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-signal sm:px-4"
            >
              <Download aria-hidden="true" className="size-4" />
              <span className="hidden md:inline">Lebenslauf</span>
              <span className="md:hidden">CV</span>
            </a>
            <a
              href="#kontakt"
              className="hidden min-h-11 items-center gap-2 bg-signal px-4 text-sm font-bold text-ink transition-transform hover:-translate-y-0.5 focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-foreground sm:inline-flex"
            >
              Auf ein Gespräch
              <ArrowUpRight aria-hidden="true" className="size-4" />
            </a>
          </div>
        </div>

        <nav aria-label="Mobile Navigation" className="grid grid-cols-3 border-t border-line lg:hidden">
          {navigation.map((item) => (
            <a
              key={item.href}
              href={item.href}
              className="grid min-h-11 place-items-center border-r border-line text-xs font-bold uppercase tracking-[0.08em] last:border-r-0 focus-visible:outline-2 focus-visible:outline-offset-[-2px] focus-visible:outline-signal"
            >
              {item.label}
            </a>
          ))}
        </nav>
      </header>

      <section className="relative isolate min-h-[calc(100svh-5rem)] overflow-hidden border-b border-line bg-ink text-paper">
        <div className="pointer-events-none absolute inset-0 noise opacity-35" aria-hidden="true" />
        <div className="pointer-events-none absolute inset-y-0 left-[68%] hidden w-px bg-white/15 lg:block" aria-hidden="true" />

        <div className="mx-auto grid min-h-[calc(100svh-5rem)] w-full max-w-[1600px] grid-rows-[auto_1fr_auto] px-5 sm:px-8 lg:px-12">
          <div className="flex items-start justify-between border-x border-white/15 px-4 pb-8 pt-7 sm:px-7 lg:px-10">
            <p className="font-mono text-[0.66rem] uppercase tracking-[0.2em] text-signal">
              Vertrieb · Projektentwicklung · Digitale Produkte
            </p>
            <p className="hidden max-w-[28rem] text-right text-xs leading-relaxed text-white/55 md:block">Portfolio / Bewerbung · 2026</p>
          </div>

          <div className="relative grid items-center border-x border-white/15 px-4 py-10 sm:px-7 lg:grid-cols-[minmax(0,1fr)_minmax(18rem,0.36fr)] lg:px-10 lg:py-12">
            <div className="relative z-10">
              <p className="mb-5 max-w-[48rem] text-base font-medium leading-snug text-white/66 sm:text-lg">
                Ich verbinde Vertrieb, Kundenberatung und Projektplanung mit der Arbeit an digitalen Werkzeugen.
              </p>
              <h1 className="font-display text-[clamp(4rem,13.3vw,13.5rem)] font-black uppercase leading-[0.72] tracking-[-0.085em]">
                Leon
                <span className="block text-signal">Pösken</span>
              </h1>
              <p className="mt-7 max-w-[58rem] font-serif text-[clamp(1.85rem,4vw,4.7rem)] italic leading-[0.94] tracking-[-0.035em] text-white/92">
                Komplexe Vorhaben. Klar geplant. Nutzbar gemacht.
              </p>
            </div>

            <aside className="relative mt-12 grid gap-px bg-white/15 lg:ml-10 lg:mt-0" aria-label="Schwerpunkte">
              {[
                ['01', 'Beratung', 'Vom Bedarf zur tragfähigen Entscheidung.'],
                ['02', 'Umsetzung', 'Von der Planung bis zur Inbetriebnahme.'],
                ['03', 'Produkt', 'Digitale Werkzeuge für echte Abläufe.'],
              ].map(([number, title, copy], index) => (
                <a
                  key={title}
                  href={index === 0 ? '#profil' : '#arbeit'}
                  className={`group grid min-h-24 grid-cols-[2.25rem_1fr_auto] items-start gap-4 p-5 focus-visible:outline-2 focus-visible:outline-offset-[-2px] focus-visible:outline-acid ${index === 1 ? 'bg-cobalt text-white' : 'bg-ink'}`}
                >
                  <span className="font-mono text-[0.64rem] opacity-55">{number}</span>
                  <div>
                    <h2 className="font-display text-lg font-bold uppercase tracking-[-0.03em]">{title}</h2>
                    <p className="mt-2 text-sm leading-relaxed opacity-65">{copy}</p>
                  </div>
                  <ArrowDownRight aria-hidden="true" className="size-4 opacity-50 transition-transform group-hover:translate-x-1 group-hover:translate-y-1" />
                </a>
              ))}
            </aside>
          </div>

          <div className="grid border-x border-t border-white/15 lg:grid-cols-[1fr_auto]">
            <div className="grid gap-5 px-4 py-6 sm:grid-cols-[auto_1fr] sm:items-center sm:px-7 lg:px-10">
              <span className="grid size-12 place-items-center rounded-full border border-white/25">
                <ArrowDownRight aria-hidden="true" className="size-5" />
              </span>
              <p className="max-w-[44rem] text-sm leading-relaxed text-white/72">
                Acht echte Produktstände. Drei Arbeitsfelder. Jeder Ausschnitt führt direkt zum belegbaren Material.
              </p>
            </div>
            <a
              href="#arbeit"
              className="flex min-h-20 items-center bg-acid px-7 font-mono text-[0.68rem] font-bold uppercase tracking-[0.15em] text-ink focus-visible:outline-2 focus-visible:outline-offset-[-4px] focus-visible:outline-white lg:px-10"
            >
              Scroll / Entdecken
            </a>
          </div>
        </div>
      </section>

      <WorkSections />
      <ProfileAndContact />
    </main>
  );
}
