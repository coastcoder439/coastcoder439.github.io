import type { Metadata } from 'next';
import Link from 'next/link';

export const metadata: Metadata = {
    title: 'Datenschutz',
    robots: { index: false, follow: true },
};

const H2 = ({ children }: { children: React.ReactNode }) => (
    <h2 className="mt-10 text-xl font-bold">{children}</h2>
);
const P = ({ children }: { children: React.ReactNode }) => (
    <p className="mt-3 leading-relaxed text-foreground/80">{children}</p>
);

// Beschreibt, was diese Seite technisch tatsächlich tut (Stand September 2026):
// Hosting auf Vercel, Terminbuchung über Cal.com, eingebettete eigene Prototypen,
// keine Analyse-Werkzeuge, keine Werbe-Cookies, Schriften lokal ausgeliefert.
export default function DatenschutzPage() {
    return (
        <main className="min-h-screen bg-background text-foreground">
            <div className="mx-auto max-w-[72ch] px-6 pb-24 pt-40 md:px-12">
                <p className="mb-5 font-mono text-[10px] font-bold uppercase tracking-[0.32em] text-primary md:text-xs">
                    Rechtliches
                </p>
                <h1 className="text-4xl font-black leading-[0.95] tracking-tighter md:text-6xl">Datenschutzerklärung</h1>

                <H2>Verantwortlicher</H2>
                <P>
                    Leon Pösken, Leipzig, Deutschland. Kontakt über{' '}
                    <a
                        href="https://www.linkedin.com/in/leonpoesken/"
                        target="_blank"
                        rel="noopener noreferrer"
                        className="underline underline-offset-4 hover:text-foreground"
                    >
                        LinkedIn
                    </a>{' '}
                    oder über die Terminbuchung auf der Startseite.
                </P>

                <H2>Hosting und Server-Protokolle</H2>
                <P>
                    Diese Seite wird bei Vercel Inc., 340 S Lemon Ave #4133, Walnut, CA 91789, USA gehostet. Beim
                    Aufruf verarbeitet Vercel technisch notwendige Daten (IP-Adresse, Zeitpunkt, aufgerufene Adresse,
                    Browser-Kennung), um die Seite auszuliefern und den Betrieb abzusichern. Rechtsgrundlage ist mein
                    berechtigtes Interesse an einem sicheren Betrieb (Art. 6 Abs. 1 lit. f DSGVO). Diese Protokolle
                    werden nach spätestens 30 Tagen gelöscht. Vercel verarbeitet Daten auch in den USA; Grundlage sind
                    die EU-Standardvertragsklauseln und ein Auftragsverarbeitungsvertrag.
                </P>

                <H2>Terminbuchung über Cal.com</H2>
                <P>
                    Im Abschnitt „Buchen“ kann ein Kalender von Cal.com, Inc., 2261 Market Street #4382, San Francisco,
                    CA 94114, USA angezeigt werden. Er lädt <strong>nicht</strong> automatisch: Erst wenn Sie auf
                    „Kalender laden“ klicken, wird er von Cal.com geholt, und erst dann erhält Cal.com Ihre IP-Adresse.
                    Rechtsgrundlage für dieses Nachladen ist Ihre Einwilligung durch den Klick (Art. 6 Abs. 1 lit. a
                    DSGVO), die Sie jederzeit widerrufen können, indem Sie die Seite neu laden. Buchen Sie einen Termin,
                    verarbeitet Cal.com die von Ihnen eingegebenen Angaben (Name, E-Mail-Adresse, gewünschter Termin,
                    optionale Notizen), damit ich den Termin wahrnehmen kann (Art. 6 Abs. 1 lit. b DSGVO). Details:{' '}
                    <a
                        href="https://cal.com/privacy"
                        target="_blank"
                        rel="noopener noreferrer"
                        className="underline underline-offset-4 hover:text-foreground"
                    >
                        cal.com/privacy
                    </a>
                    .
                </P>

                <H2>Eingebettete Prototypen</H2>
                <P>
                    Im Abschnitt „Projekte“ können meine eigenen Prototypen als Fenster angezeigt werden. Auch sie
                    laden erst auf Klick („Vorschau starten“), Rechtsgrundlage ist damit Ihre Einwilligung (Art. 6
                    Abs. 1 lit. a DSGVO). Ausgeliefert werden sie von Vercel (siehe oben) und im Fall des
                    Oasis-Simulators von world-eden-era.org, der Seite der von mir mitgegründeten gemeinnützigen UG.
                    Dabei erhält der jeweilige Server Ihre IP-Adresse. Die Prototypen setzen keine Werbe-Cookies und
                    enthalten keine Analyse-Werkzeuge.
                </P>

                <H2>Schriften, Cookies, lokale Speicherung</H2>
                <P>
                    Schriften werden von dieser Seite selbst ausgeliefert, es findet kein Aufruf bei Google statt.
                    Die Seite setzt keine Werbe- oder Analyse-Cookies. Zwei Angaben bleiben nur in Ihrem Browser:
                    Ihre Wahl von hellem oder dunklem Design und ein Vermerk, dass die Startanimation in dieser
                    Sitzung bereits gelaufen ist. Beides wird nicht an mich übertragen und verschwindet, wenn Sie
                    die Websitedaten löschen.
                </P>

                <H2>Keine automatisierte Entscheidungsfindung</H2>
                <P>
                    Es findet kein Profiling und keine automatisierte Entscheidungsfindung im Sinne von Art. 22 DSGVO
                    statt.
                </P>

                <H2>Externe Links</H2>
                <P>
                    Links zu LinkedIn und zu den Live-Adressen der Prototypen führen auf fremde Seiten. Dort gelten die
                    Datenschutzhinweise des jeweiligen Anbieters.
                </P>

                <H2>Ihre Rechte</H2>
                <P>
                    Sie haben das Recht auf Auskunft, Berichtigung, Löschung, Einschränkung der Verarbeitung,
                    Datenübertragbarkeit und Widerspruch (Art. 15 bis 21 DSGVO). Wenden Sie sich dafür über LinkedIn
                    an mich. Außerdem können Sie sich bei einer Datenschutz-Aufsichtsbehörde
                    beschweren, für Sachsen ist das die Sächsische Datenschutz- und Transparenzbeauftragte.
                </P>

                <p className="mt-10 text-sm text-muted-foreground">Stand: September 2026</p>

                <p className="mt-14">
                    <Link href="/" className="underline underline-offset-4 hover:text-foreground">
                        Zur Startseite
                    </Link>
                </p>
            </div>
        </main>
    );
}
