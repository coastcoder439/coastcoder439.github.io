"use client";

/**
 * Kalender-Attrappe — steht an der Stelle des Cal.com-Kalenders, bis der Besucher
 * „Termin buchen" drückt. Erst dann lädt der echte Kalender nach.
 *
 * Warum es sie gibt: § 25 TDDDG erlaubt den Zugriff auf das Endgerät (Cookies, Aufruf
 * eines fremden Servers) nur bei technischer Notwendigkeit oder mit Einwilligung. Der
 * Klick auf den Knopf IST diese Einwilligung — deshalb braucht die Seite kein Banner.
 *
 * Warum sie so genau nachgebaut ist: Der Besucher soll den Wechsel nicht als Bruch
 * erleben. Maße, Farben und Radien sind am echten Embed gemessen (04.09.2026,
 * app.cal.com/leon-posken-4hsbjc/30min, hell und dunkel):
 *   Tageszelle 59x59 / radius 8 · Zeitfeld Höhe 36 / radius 10 · Titel 20px/600
 *   dunkel: Fläche #111, belegte Zelle #2b2b2b, Zeitfeld #0f0f0f auf Rand #4d4d4d
 *   hell:   Fläche weiß, belegte Zelle #e5e5e5, heutiger Tag invertiert
 *
 * Der Monat wird gerechnet, nicht eingefroren — eine feste Monatsangabe wäre nach vier
 * Wochen falsch und würde die Attrappe sofort verraten.
 */

import { useEffect, useState } from "react";
import { Clock, Video, Globe, ChevronLeft, ChevronRight, ChevronDown } from "lucide-react";

// Dieselben Zeiten, die der echte Kalender für einen freien Werktag anbietet.
const ZEITEN = ["14:00", "14:30", "15:00", "15:30", "16:00", "16:30"];

type Zelle = { tag: number | null; frei: boolean; heute: boolean };
type Gitter = { monat: string; jahr: number; zellen: Zelle[]; kopfTag: string; kuerzel: string[] };

function gitterBauen(): Gitter {
  const jetzt = new Date();
  const jahr = jetzt.getFullYear();
  const monat = jetzt.getMonth();
  const heuteTag = jetzt.getDate();
  const ersterWochentag = new Date(jahr, monat, 1).getDay();
  const anzahl = new Date(jahr, monat + 1, 0).getDate();

  // Cal.com beschriftet nach der Browsersprache (deutsch „SO MO DI", englisch
  // „SUN MON TUE"). Dieselbe Quelle nutzen, sonst springt die Zeile beim Umschalten.
  const sprache = typeof navigator !== "undefined" ? navigator.language : "de-DE";
  const kurz = new Intl.DateTimeFormat(sprache, { weekday: "short" });
  const lang = new Intl.DateTimeFormat(sprache, { month: "long" });
  const kuerzel = Array.from({ length: 7 }, (_, i) =>
    kurz.format(new Date(2024, 8, 1 + i)).replace(".", "").toUpperCase()
  );

  const zellen: Zelle[] = [];
  for (let i = 0; i < ersterWochentag; i++) zellen.push({ tag: null, frei: false, heute: false });
  for (let t = 1; t <= anzahl; t++) {
    const wochentag = new Date(jahr, monat, t).getDay();
    const werktag = wochentag >= 1 && wochentag <= 5;
    zellen.push({ tag: t, frei: werktag && t >= heuteTag, heute: t === heuteTag });
  }

  // Kopf der Zeitspalte: der nächste Werktag ab heute — genau das zeigt Cal.com auch.
  const naechster = new Date(jahr, monat, heuteTag);
  while (naechster.getDay() === 0 || naechster.getDay() === 6) {
    naechster.setDate(naechster.getDate() + 1);
  }

  return {
    monat: lang.format(new Date(jahr, monat, 1)),
    jahr,
    zellen,
    kuerzel,
    kopfTag: kurz.format(naechster).replace(".", "") + " " + naechster.getDate(),
  };
}

const LEER: Zelle[] = Array.from({ length: 35 }, () => ({ tag: null, frei: false, heute: false }));
const LEER_KUERZEL = ["", "", "", "", "", "", ""];

export function CalAttrappe({ onStart }: { onStart: () => void }) {
  // Das Datum darf erst nach dem Mount gerechnet werden, sonst weicht der
  // Server-Zeitpunkt vom Browser-Zeitpunkt ab und React meldet einen Hydrations-Fehler.
  const [gitter, setGitter] = useState<Gitter | null>(null);
  useEffect(() => setGitter(gitterBauen()), []);

  const zellen = gitter?.zellen ?? LEER;
  const kuerzel = gitter?.kuerzel ?? LEER_KUERZEL;

  return (
    <button
      type="button"
      onClick={onStart}
      aria-label="Kalender laden und Termin buchen. Dabei wird eine Verbindung zu Cal.com aufgebaut und die IP-Adresse übertragen."
      className="group relative block w-full cursor-pointer text-left focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-current md:px-8"
    >
      {/* Der echte Embed setzt seinen Kasten mit seitlichem Abstand in die Fläche und
          schreibt „Cal.com" darunter — beides hier nachgebaut, damit beim Umschalten
          nichts springt. */}
      <div
        aria-hidden="true"
        className="flex min-h-[490px] flex-col overflow-hidden rounded-2xl border border-black/10 bg-white transition-shadow group-hover:shadow-lg md:flex-row dark:border-white/10 dark:bg-[#111111]"
      >
        {/* Linke Spalte: Termindetails */}
        <div className="shrink-0 border-b border-black/10 px-6 py-6 md:w-[264px] md:border-b-0 md:border-r dark:border-white/10">
          <span className="block h-8 w-8 rounded-full bg-black/10 dark:bg-white/15" />
          <span className="mt-3 block text-[13px] font-medium text-black/60 dark:text-white/60">
            Leon Pösken
          </span>
          <span className="mt-1 block text-[20px] font-semibold leading-tight text-black dark:text-white">
            30 min meeting
          </span>
          <span className="mt-4 flex flex-col gap-3 text-[14px] text-black/70 dark:text-white/70">
            <span className="flex items-center gap-2">
              <Clock className="h-4 w-4 shrink-0" /> 30Min
            </span>
            <span className="flex items-center gap-2">
              <Video className="h-4 w-4 shrink-0" /> Cal Video
            </span>
            <span className="flex items-center gap-2">
              <Globe className="h-4 w-4 shrink-0" /> Europe/Berlin
              <ChevronDown className="h-3.5 w-3.5 shrink-0 opacity-70" />
            </span>
          </span>
        </div>

        {/* Mitte: Monatsgitter. Unten bleibt auf schmalen Geräten Platz frei, sonst legt
            sich der Knopf über die letzte Kalenderzeile (gemessen auf 390x844). */}
        <div className="min-w-0 flex-1 px-5 pb-28 pt-6 md:pb-6">
          <div className="flex items-center justify-between">
            <span className="text-[17px] font-semibold text-black dark:text-white">
              {gitter?.monat ?? " "}{" "}
              <span className="font-normal text-black/50 dark:text-white/50">{gitter?.jahr ?? ""}</span>
            </span>
            <span className="flex gap-1 text-black/40 dark:text-white/40">
              <ChevronLeft className="h-4 w-4" />
              <ChevronRight className="h-4 w-4" />
            </span>
          </div>

          <div className="mt-5 grid grid-cols-7 gap-1">
            {kuerzel.map((t, i) => (
              <span
                key={i}
                className="pb-2 text-center text-[11px] font-medium tracking-wide text-black/45 dark:text-white/45"
              >
                {t}
              </span>
            ))}
            {zellen.map((z, i) => (
              <span key={i} className="flex aspect-square items-center justify-center">
                {z.tag !== null && (
                  <span
                    className={
                      "flex h-full w-full flex-col items-center justify-center rounded-lg text-[14px] font-semibold " +
                      (z.heute
                        ? "bg-[#111111] text-white dark:bg-white dark:text-[#111111]"
                        : z.frei
                          ? "bg-black/[0.07] text-black dark:bg-white/[0.11] dark:text-white"
                          : "text-black/40 dark:text-white/40")
                    }
                  >
                    {z.tag}
                    {z.heute && <span className="mt-0.5 block h-1 w-1 rounded-full bg-current" />}
                  </span>
                )}
              </span>
            ))}
          </div>
        </div>

        {/* Rechte Spalte: Zeiten — Cal.com blendet sie auf schmalen Geräten ebenfalls aus */}
        <div className="hidden w-[248px] shrink-0 border-l border-black/10 px-5 py-6 lg:block dark:border-white/10">
          <span className="block text-[14px] font-semibold text-black dark:text-white">
            {gitter?.kopfTag ?? " "}
          </span>
          <span className="mt-4 flex flex-col gap-2.5">
            {ZEITEN.map((z) => (
              <span
                key={z}
                className="flex h-9 items-center justify-center rounded-[10px] border border-black/15 bg-white text-[14px] font-semibold text-black dark:border-white/25 dark:bg-[#0f0f0f] dark:text-white"
              >
                {z}
              </span>
            ))}
          </span>
        </div>
      </div>

      {/* Die Zeile, die der echte Embed unter seinen Kasten setzt. */}
      <span
        aria-hidden="true"
        className="mt-5 block text-center text-[13px] font-medium text-black/30 dark:text-white/25"
      >
        Cal.com
      </span>

      {/* Der Knopf, der die Einwilligung einholt. Er liegt über der Attrappe, verdeckt
          sie aber nicht — der Kalender bleibt in voller Größe sichtbar. Der erklärende
          Satz steht bewusst AUSSERHALB dieses Knopfes (siehe CalBooking): dort darf er
          einen echten Link auf die Datenschutzerklärung tragen, in einem <button> nicht. */}
      <span className="pointer-events-none absolute inset-x-0 bottom-[52px] flex justify-center px-6">
        <span className="inline-flex items-center justify-center rounded-full bg-foreground px-8 py-3.5 text-[15px] font-bold text-background shadow-lg transition-transform duration-300 group-hover:scale-[1.04]">
          Termin buchen
        </span>
      </span>
    </button>
  );
}
