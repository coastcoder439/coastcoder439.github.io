import type { Metadata } from 'next';
import Link from 'next/link';
import { portfolioData } from '@/data/portfolio';

export const metadata: Metadata = {
    title: 'Impressum',
    robots: { index: false, follow: true },
};

const H2 = ({ children }: { children: React.ReactNode }) => (
    <h2 className="mt-10 text-xl font-bold">{children}</h2>
);
const P = ({ children }: { children: React.ReactNode }) => (
    <p className="mt-3 leading-relaxed text-foreground/80">{children}</p>
);

// Aufbau und Typografie 1:1 wie /datenschutz, damit beide Rechtsseiten zusammengehören.
//
// Bewusst NICHT enthalten:
//  · Anschrift — Owner-Entscheidung 04.09.2026 („Es kommt keine Adresse auf die
//    Website"), festgehalten im Paket portfolio-startklar.md, Teil 3.
//  · Link auf die EU-Plattform für Online-Streitbeilegung — sie ist seit 20.07.2025
//    abgeschaltet; ein Verweis darauf ist heute selbst abmahnfähig (IHK, WBS Legal).
//  · Umsatzsteuer-Identifikationsnummer — liegt nicht vor, wird nicht erfunden.
export default function ImpressumPage() {
    const { name, title, location, email } = portfolioData.personal;

    return (
        <main className="min-h-screen bg-background text-foreground">
            <div className="mx-auto max-w-[72ch] px-6 pb-24 pt-40 md:px-12">
                <p className="mb-5 font-mono text-[10px] font-bold uppercase tracking-[0.32em] text-primary md:text-xs">
                    Rechtliches
                </p>
                <h1 className="text-4xl font-black leading-[0.95] tracking-tighter md:text-6xl">Impressum</h1>

                <H2>Anbieter</H2>
                <P>
                    {name}
                    <br />
                    {title}
                    <br />
                    {location}
                </P>

                <H2>Kontakt</H2>
                <P>
                    {email ? (
                        <>
                            E-Mail:{' '}
                            <a href={`mailto:${email}`} className="underline underline-offset-4 hover:text-foreground">
                                {email}
                            </a>
                            <br />
                        </>
                    ) : null}
                    <a
                        href="https://www.linkedin.com/in/leonpoesken/"
                        target="_blank"
                        rel="noopener noreferrer"
                        className="underline underline-offset-4 hover:text-foreground"
                    >
                        LinkedIn
                    </a>{' '}
                    oder direkt über die{' '}
                    <Link href="/#buchen" className="underline underline-offset-4 hover:text-foreground">
                        Terminbuchung
                    </Link>{' '}
                    auf der Startseite.
                </P>

                <H2>Verantwortlich für den Inhalt</H2>
                <P>{name} (§ 18 Abs. 2 MStV).</P>

                <H2>Verbraucherstreitbeilegung</H2>
                <P>
                    Ich bin nicht bereit und nicht verpflichtet, an Streitbeilegungsverfahren vor einer
                    Verbraucherschlichtungsstelle teilzunehmen.
                </P>

                <H2>Haftung für Inhalte</H2>
                <P>
                    Die Inhalte dieser Seite wurden mit Sorgfalt erstellt. Für ihre Richtigkeit, Vollständigkeit und
                    Aktualität kann ich jedoch keine Gewähr übernehmen. Die auf der Startseite gezeigten
                    Einsparungsrechnungen sind Beispiele mit offen genannten Annahmen und keine Zusage eines
                    Ergebnisses.
                </P>

                <H2>Haftung für Links</H2>
                <P>
                    Diese Seite verweist auf externe Seiten, auf deren Inhalte ich keinen Einfluss habe. Für sie ist
                    stets der jeweilige Anbieter verantwortlich. Zum Zeitpunkt der Verlinkung waren keine
                    Rechtsverstöße erkennbar; bei Bekanntwerden entferne ich den Link umgehend.
                </P>

                <H2>Urheberrecht</H2>
                <P>
                    Texte, Gestaltung und der Quellcode dieser Seite unterliegen dem Urheberrecht. Eine Nutzung über
                    die gesetzlich erlaubten Fälle hinaus bedarf meiner Zustimmung.
                </P>

                <p className="mt-14 flex flex-wrap gap-x-6 gap-y-2">
                    <Link href="/" className="underline underline-offset-4 hover:text-foreground">
                        Zur Startseite
                    </Link>
                    <Link href="/datenschutz" className="underline underline-offset-4 hover:text-foreground">
                        Datenschutzerklärung
                    </Link>
                </p>
            </div>
        </main>
    );
}
