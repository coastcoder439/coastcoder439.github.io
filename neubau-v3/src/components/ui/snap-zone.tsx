"use client";

/**
 * SnapZone — führt den Scroll durch die zusammenhängende Strecke:
 * horizontale Karten (#ansatz) → Sektionskopf → Beispiel-Stapel (#beispiele) → Buchen.
 *
 * Ein Anstoß, dann gleitet die Seite weich bis zum nächsten Punkt und hält dort.
 *
 * Zwei Dinge sind dabei entscheidend, sonst ruckelt es:
 *  1. `debounce` muss LÄNGER sein als die Pausen zwischen zwei Radbewegungen. Sonst
 *     feuert der Snap mitten im Scrollen und kämpft gegen die Hand am Rad.
 *  2. Am Zeigegerät `mandatory`: proximity hat dort bei dicht liegenden Punkten mehrere
 *     Kandidaten gleichzeitig im Einzugsbereich und zieht mal vor, mal zurück.
 *     Auf Touch dagegen `proximity` — mandatory macht dort jeden Rastpunkt zur
 *     Endstation, weil ein Wisch die halbe Rastweite (>435 px) in EINER Geste schaffen
 *     müsste. Siehe die Begründung unten im Code.
 *
 * Damit `mandatory` nicht die ganze Seite an sich reißt, ist der Snap NUR zwischen dem
 * Anfang der Karten-Strecke und der Buchen-Sektion scharf; darüber und darunter wird er
 * abgeschaltet. Buchen selbst ist der letzte Punkt — so gleitet man sauber hinaus statt
 * am Stapelende festzuhängen.
 */

import { useEffect } from "react";
import Snap from "lenis/snap";
import { getLenis } from "@/lib/scroll";

type SnapLike = {
  add: (value: number) => () => void;
  start: () => void;
  stop: () => void;
  destroy: () => void;
};

export function SnapZone() {
  useEffect(() => {
    const lenis = getLenis() as ConstructorParameters<typeof Snap>[0] | null;
    if (!lenis) return;
    // Wer weniger Bewegung eingestellt hat, bekommt keinen geführten Scroll.
    if (window.matchMedia("(prefers-reduced-motion: reduce)").matches) return;

    // Auf Touch-Geräten macht "mandatory" jeden Rastpunkt zur Endstation: die Rastweite
    // beträgt hier 844–873 px, also müsste ein Wisch in EINER Geste über die halbe Lücke
    // (>435 px) schaffen — sonst zieht der Snap ihn zurück. Gemessen auf 390×844 und
    // 360×740: ab der Beispiel-Sektion kam man mit normalen Wischern gar nicht mehr
    // weiter, und "Gespräch buchen" landete 750 px vor dem Kalender.
    // Deshalb dort "proximity" mit engem Einzugsbereich: Es rastet nur ein, wenn der
    // Finger ohnehin nahe an einem Punkt stehen bleibt, und hält niemanden fest.
    const grobeEingabe = window.matchMedia("(pointer: coarse)").matches;

    const snap = new Snap(lenis, {
      type: grobeEingabe ? "proximity" : "mandatory",
      // nur bei proximity ausgewertet; 25 % der Höhe liegt deutlich unter der halben
      // Rastweite, damit zwischen zwei Punkten ein freier Bereich bleibt.
      distanceThreshold: "25%",
      duration: 0.9,
      easing: (t: number) => 1 - Math.pow(1 - t, 3),
      // lang genug, dass er erst greift, wenn die Hand vom Rad ist
      debounce: 550,
    }) as unknown as SnapLike;

    let entfernen: Array<() => void> = [];
    let zoneStart = Number.POSITIVE_INFINITY;
    let zoneEnde = Number.NEGATIVE_INFINITY;
    let scharf = false;

    snap.stop(); // startet aus; erst in der Zone scharf

    const punkteSetzen = () => {
      entfernen.forEach((weg) => weg());
      entfernen = [];
      const vh = window.innerHeight;

      const ansatz = document.getElementById("ansatz");
      const beispiele = document.getElementById("beispiele");
      const buchen = document.getElementById("buchen");
      const track = document.querySelector<HTMLElement>("[data-ansatz-track]");
      if (!ansatz || !beispiele) return;

      const ansatzOben = ansatz.getBoundingClientRect().top + window.scrollY;

      // 1) Horizontale Strecke: je Panel der Scrollstand, bei dem es links anliegt.
      if (track && track.parentElement) {
        const strecke = Math.max(1, ansatz.offsetHeight - vh);
        const ueberbreite = Math.max(1, track.scrollWidth - track.parentElement.clientWidth);
        const padLinks = parseFloat(getComputedStyle(track).paddingLeft) || 0;
        Array.from(track.children).forEach((kind) => {
          const links = (kind as HTMLElement).offsetLeft - padLinks;
          const anteil = Math.min(1, Math.max(0, links / ueberbreite));
          entfernen.push(snap.add(Math.round(ansatzOben + anteil * strecke)));
        });
      }

      // 2) Beispiel-Stapel: je Box ein Punkt (jede Karte ist einen Bildschirm hoch).
      const beispieleOben = beispiele.getBoundingClientRect().top + window.scrollY;
      const karten = beispiele.querySelectorAll("[data-stack-card]");
      karten.forEach((_, i) => {
        entfernen.push(snap.add(Math.round(beispieleOben + i * vh)));
      });

      // 3) Buchen als letzter Punkt — sonst zieht es am Stapelende zurück.
      const buchenOben = buchen ? buchen.getBoundingClientRect().top + window.scrollY : null;
      if (buchenOben !== null) entfernen.push(snap.add(Math.round(buchenOben)));

      zoneStart = ansatzOben;
      zoneEnde = buchenOben ?? beispieleOben + beispiele.offsetHeight;
    };

    const zonePruefen = () => {
      const y = window.scrollY;
      const drin = y >= zoneStart - 4 && y <= zoneEnde + 4;
      if (drin && !scharf) {
        snap.start();
        scharf = true;
      } else if (!drin && scharf) {
        snap.stop();
        scharf = false;
      }
    };

    punkteSetzen();
    zonePruefen();
    // Nach Schriften/Bildern sitzt das Layout erst richtig.
    const nachmessen = setTimeout(() => {
      punkteSetzen();
      zonePruefen();
    }, 700);
    const beiResize = () => {
      punkteSetzen();
      zonePruefen();
    };
    window.addEventListener("scroll", zonePruefen, { passive: true });
    window.addEventListener("resize", beiResize);

    return () => {
      clearTimeout(nachmessen);
      window.removeEventListener("scroll", zonePruefen);
      window.removeEventListener("resize", beiResize);
      entfernen.forEach((weg) => weg());
      snap.destroy();
    };
  }, []);

  return null;
}
