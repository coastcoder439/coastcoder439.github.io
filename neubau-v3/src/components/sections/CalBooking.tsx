"use client";

/**
 * Terminbuchung über Cal.com — in zwei Schritten.
 *
 * Schritt 1: Eine Attrappe, die genauso aussieht wie der echte Kalender, mit dem Knopf
 * „Termin buchen". Bis hierhin geht keine Anfrage an cal.com.
 * Schritt 2: Nach dem Klick wird der echte Kalender an derselben Stelle nachgeladen.
 *
 * Der Klick ist die Einwilligung nach § 25 TDDDG; deshalb braucht die Seite kein
 * Consent-Banner (Begründung und Belege im Paket portfolio-startklar.md, E2).
 *
 * `ssr: false` ist hier nicht Kosmetik: nur so wird das Modul samt Cal-Script wirklich
 * erst beim Rendern geholt und nicht schon beim Seitenaufbau.
 */

import { useState } from "react";
import dynamic from "next/dynamic";
import Link from "next/link";
import { CalAttrappe } from "@/components/ui/cal-attrappe";

const CalEmbed = dynamic(() => import("./CalEmbed").then((m) => m.CalEmbed), {
  ssr: false,
  // Die Attrappe bleibt stehen, während der echte Kalender lädt — so gibt es kein Loch.
  loading: () => null,
});

export function CalBooking() {
  const [geladen, setGeladen] = useState(false);

  return (
    <div id="cal-booking" className="mx-auto mt-6 mb-12 w-full max-w-5xl">
      {geladen ? (
        // Kein eigener Rahmen: Cal.com bringt seinen Kasten selbst mit — ein zweiter
        // Rahmen darum wäre genau der Bruch, den die Attrappe vermeiden soll.
        <CalEmbed />
      ) : (
        <>
          <CalAttrappe onStart={() => setGeladen(true)} />
          {/* Damit die Einwilligung informiert ist, muss vor dem Klick dastehen, wohin die
              Daten gehen. Der Satz steht außerhalb der Attrappe, weil ein echter Link in
              einem <button> nicht erlaubt wäre. */}
          <p className="mx-auto mt-4 max-w-[52ch] text-center text-[12px] leading-relaxed text-muted-foreground">
            Mit dem Klick lädt der Kalender von Cal.com (USA). Dabei wird die IP-Adresse
            dorthin übertragen und Cal.com setzt Cookies — Näheres in der{" "}
            <Link href="/datenschutz" className="underline underline-offset-2 hover:text-foreground">
              Datenschutzerklärung
            </Link>
            .
          </p>
        </>
      )}
    </div>
  );
}
