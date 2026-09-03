import type { Metadata } from 'next';
import Link from 'next/link';

export const metadata: Metadata = {
    title: 'Impressum',
    robots: { index: false, follow: true },
};

// Angaben, die nur der Owner liefern kann, stehen in eckigen Klammern (Paket
// portfolio-seite, Offen: Anschrift + E-Mail).
export default function ImpressumPage() {
    return (
        <main className="min-h-screen bg-background text-foreground">
            <div className="mx-auto max-w-[72ch] px-6 pb-24 pt-40 md:px-12">
                <p className="mb-5 font-mono text-[10px] font-bold uppercase tracking-[0.32em] text-primary md:text-xs">
                    Rechtliches
                </p>
                <h1 className="text-4xl font-black leading-[0.95] tracking-tighter md:text-6xl">Impressum</h1>

                <h2 className="mt-14 text-xl font-bold">Angaben gemäß § 5 DDG</h2>
                <p className="mt-3 leading-relaxed text-foreground/80">
                    Leon Pösken
                    <br />
                    [Straße und Hausnummer]
                    <br />
                    [PLZ] Leipzig
                    <br />
                    Deutschland
                </p>

                <h2 className="mt-10 text-xl font-bold">Kontakt</h2>
                <p className="mt-3 leading-relaxed text-foreground/80">
                    E-Mail: [E-Mail-Adresse]
                    <br />
                    LinkedIn:{' '}
                    <a
                        href="https://www.linkedin.com/in/leonpoesken/"
                        target="_blank"
                        rel="noopener noreferrer"
                        className="underline underline-offset-4 hover:text-foreground"
                    >
                        linkedin.com/in/leonpoesken
                    </a>
                </p>

                <h2 className="mt-10 text-xl font-bold">Verantwortlich für den Inhalt</h2>
                <p className="mt-3 leading-relaxed text-foreground/80">
                    Leon Pösken, Anschrift wie oben (§ 18 Abs. 2 MStV).
                </p>

                <h2 className="mt-10 text-xl font-bold">Haftung für Inhalte und Links</h2>
                <p className="mt-3 leading-relaxed text-foreground/80">
                    Die Inhalte dieser Seite wurden mit Sorgfalt erstellt. Für Richtigkeit, Vollständigkeit und
                    Aktualität übernehme ich keine Gewähr. Diese Seite bettet eigene Prototypen und eine
                    Terminbuchung ein und verlinkt auf externe Seiten. Für die Inhalte externer Seiten ist der
                    jeweilige Anbieter verantwortlich; zum Zeitpunkt der Verlinkung waren keine Rechtsverstöße
                    erkennbar.
                </p>

                <h2 className="mt-10 text-xl font-bold">Urheberrecht</h2>
                <p className="mt-3 leading-relaxed text-foreground/80">
                    Texte, Gestaltung und gezeigte Prototypen unterliegen dem deutschen Urheberrecht.
                    Vervielfältigung und Verwendung außerhalb der Grenzen des Urheberrechts bedürfen meiner
                    schriftlichen Zustimmung.
                </p>

                <p className="mt-14">
                    <Link href="/datenschutz" className="underline underline-offset-4 hover:text-foreground">
                        Datenschutzerklärung
                    </Link>
                    <span className="mx-3 text-muted-foreground">·</span>
                    <Link href="/" className="underline underline-offset-4 hover:text-foreground">
                        Zur Startseite
                    </Link>
                </p>
            </div>
        </main>
    );
}
