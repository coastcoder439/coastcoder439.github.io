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
const A = ({ href, children }: { href: string; children: React.ReactNode }) => (
    <a
        href={href}
        target="_blank"
        rel="noopener noreferrer"
        className="underline underline-offset-4 hover:text-foreground"
    >
        {children}
    </a>
);

// Beschreibt, was diese Seite technisch tatsächlich tut — nachgemessen am 04.09.2026 im
// Netzwerkmitschnitt, nicht aus Erinnerung geschrieben. Grundlage der Neufassung:
//  · Kalender und Prototypen laden beide erst auf Klick, also gilt für beide Einwilligung.
//  · Sentry und die zwei Google-Abrufe stammen NICHT aus dem Code dieser Seite, sondern
//    aus dem Cal.com-Fenster; sie entstehen erst nach dem Klick und werden dort genannt.
//  · Ohne Klick: null Cookies von Dritten (Gegenprobe mit blockiertem cal.com).
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
                    Leon Pösken, Leipzig. Die Kontaktwege stehen im{' '}
                    <Link href="/impressum" className="underline underline-offset-4 hover:text-foreground">
                        Impressum
                    </Link>
                    .
                </P>

                <H2>Das Wichtigste zuerst</H2>
                <P>
                    Diese Seite lädt von sich aus nichts von fremden Servern und setzt keine Cookies von Dritten.
                    Alles, was Daten an Dritte gibt — der Terminkalender und die Prototypen im Abschnitt „Projekte" —
                    startet erst, wenn Sie es ausdrücklich anklicken. Wer nur liest, hinterlässt außerhalb der
                    Server-Protokolle des Hosters keine Spur.
                </P>

                <H2>Hosting und Server-Protokolle</H2>
                <P>
                    Diese Seite wird bei Vercel Inc., 340 S Lemon Ave #4133, Walnut, CA 91789, USA gehostet. Beim
                    Aufruf verarbeitet Vercel technisch notwendige Daten (IP-Adresse, Zeitpunkt, aufgerufene Adresse,
                    Browser-Kennung), um die Seite auszuliefern und den Betrieb abzusichern. Rechtsgrundlage ist mein
                    berechtigtes Interesse an einem sicheren Betrieb (Art. 6 Abs. 1 lit. f DSGVO). Diese Protokolle
                    werden nach spätestens 30 Tagen gelöscht. Vercel verarbeitet Daten auch in den USA; Grundlage sind
                    ein Auftragsverarbeitungsvertrag und die EU-Standardvertragsklauseln. Vercel ist zudem nach dem
                    EU-US Data Privacy Framework zertifiziert.
                </P>

                <H2>Terminbuchung über Cal.com — erst auf Klick</H2>
                <P>
                    Im Abschnitt „Buchen" sehen Sie zunächst nur eine Abbildung des Kalenders, die von dieser Seite
                    selbst stammt. Erst wenn Sie „Termin buchen" drücken, wird der echte Kalender von Cal.com, Inc.,
                    2261 Market Street #4382, San Francisco, CA 94114, USA geladen. Rechtsgrundlage für diesen Abruf
                    und für die dabei gesetzten Cookies ist Ihre Einwilligung (Art. 6 Abs. 1 lit. a DSGVO, § 25 Abs. 1
                    TDDDG), die Sie mit dem Klick erteilen. Da Cal.com in den USA sitzt und nicht nach dem EU-US Data
                    Privacy Framework zertifiziert ist, stützt sich die Übermittlung dorthin auf Ihre ausdrückliche
                    Einwilligung nach Art. 49 Abs. 1 lit. a DSGVO. Ein solcher Drittlandtransfer erfolgt ohne die
                    Garantien des Art. 46 DSGVO; US-Behörden können unter Umständen auf die Daten zugreifen, und
                    Rechtsbehelfe sind dort schwerer durchzusetzen.
                </P>
                <P>
                    Nach dem Klick erhält Cal.com Ihre IP-Adresse und setzt Cookies. Das Cal.com-Fenster bindet
                    seinerseits den Fehlerdienst Sentry (Functional Software, Inc., USA — nach dem EU-US Data Privacy
                    Framework zertifiziert) sowie Schriften und Wiedererkennungsdienste von Google ein. Auf diese
                    Einbindungen habe ich keinen Einfluss; sie gehören zum Dienst von Cal.com.
                </P>
                <P>
                    Buchen Sie tatsächlich einen Termin, verarbeitet Cal.com die von Ihnen eingegebenen Angaben (Name,
                    E-Mail-Adresse, gewünschter Termin, optionale Notizen), damit ich den Termin wahrnehmen kann
                    (Art. 6 Abs. 1 lit. b DSGVO). Ich lösche diese Angaben, sobald der Kontakt abgeschlossen ist und
                    keine gesetzliche Aufbewahrungspflicht entgegensteht. Wie lange Cal.com die Daten in seinem System
                    vorhält, richtet sich nach dessen Datenschutzerklärung: <A href="https://cal.com/privacy">cal.com/privacy</A>.
                </P>
                <P>
                    Ihre Einwilligung wirkt für die laufende Sitzung. Sie widerrufen sie, indem Sie die Seite neu
                    laden — dann steht wieder nur die Abbildung dort. Cookies, die Cal.com bereits gesetzt hat,
                    löschen Sie in den Einstellungen Ihres Browsers. Der Widerruf gilt für die Zukunft; die
                    Rechtmäßigkeit der bis dahin erfolgten Verarbeitung bleibt unberührt (Art. 7 Abs. 3 DSGVO).
                </P>

                <H2>Eingebettete Prototypen — erst auf Klick</H2>
                <P>
                    Im Abschnitt „Projekte" können meine eigenen Prototypen als Fenster angezeigt werden. Auch sie
                    laden erst auf Klick („Vorschau starten"), Rechtsgrundlage ist damit Ihre Einwilligung (Art. 6
                    Abs. 1 lit. a DSGVO, § 25 Abs. 1 TDDDG). Ausgeliefert werden sie von Vercel (siehe oben) und im
                    Fall des Oasis-Simulators von world-eden-era.org, der Seite der von mir mitgegründeten
                    gemeinnützigen UG. Dabei erhält der jeweilige Server Ihre IP-Adresse. Die Prototypen setzen keine
                    Werbe-Cookies und enthalten keine Analyse-Werkzeuge.
                </P>

                <H2>Schriften, Cookies, lokale Speicherung</H2>
                <P>
                    Schriften werden von dieser Seite selbst ausgeliefert, es findet kein Aufruf bei Google statt.
                    Die Seite setzt keine Werbe- oder Analyse-Cookies und verwendet überhaupt keine eigenen Cookies.
                    Zwei Angaben bleiben nur in Ihrem Browser: Ihre Wahl von hellem oder dunklem Design und ein
                    Vermerk, dass die Startanimation in dieser Sitzung bereits gelaufen ist. Beides wird nicht an mich
                    übertragen, ist nach § 25 Abs. 2 Nr. 2 TDDDG einwilligungsfrei und verschwindet, wenn Sie die
                    Websitedaten löschen.
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
                    Datenübertragbarkeit und Widerspruch (Art. 15 bis 21 DSGVO) sowie das Recht, eine erteilte
                    Einwilligung jederzeit zu widerrufen. Wenden Sie sich dafür an die im{' '}
                    <Link href="/impressum" className="underline underline-offset-4 hover:text-foreground">
                        Impressum
                    </Link>{' '}
                    genannten Kontaktwege. Außerdem können Sie sich bei einer Datenschutz-Aufsichtsbehörde beschweren;
                    für Sachsen ist das die Sächsische Datenschutz- und Transparenzbeauftragte.
                </P>

                <H2>Widerspruchsrecht</H2>
                <P>
                    Soweit ich Daten auf Grundlage meines berechtigten Interesses verarbeite — das betrifft allein die
                    Server-Protokolle des Hosters —, können Sie dieser Verarbeitung aus Gründen, die sich aus Ihrer
                    besonderen Situation ergeben, jederzeit widersprechen (Art. 21 Abs. 1 DSGVO).
                </P>

                <p className="mt-10 text-sm text-muted-foreground">Stand: September 2026</p>

                <p className="mt-14 flex flex-wrap gap-x-6 gap-y-2">
                    <Link href="/" className="underline underline-offset-4 hover:text-foreground">
                        Zur Startseite
                    </Link>
                    <Link href="/impressum" className="underline underline-offset-4 hover:text-foreground">
                        Impressum
                    </Link>
                </p>
            </div>
        </main>
    );
}
