"use client";

/**
 * SnapZone — führt den Scroll durch die beiden zusammenhängenden Sektionen:
 * die horizontale Karten-Strecke (#ansatz) und den Beispiel-Stapel (#beispiele).
 *
 * Ohne das treibt der Scroll frei und bleibt irgendwo zwischen zwei Karten stehen.
 * Mit Snap wird er angestoßen und gleitet dann weich bis zum nächsten Punkt: ein Punkt
 * je Panel der Strecke (jede Karte, der Sektionskopf) und ein Punkt je Box im Stapel.
 *
 * Genutzt wird `lenis/snap`, das Lenis selbst mitbringt — kein Eigenbau. Die Punkte
 * werden aus dem echten Layout gerechnet (Panel-Offsets, Karten-Höhen) und bei jedem
 * Resize neu, damit sie auf jedem Viewport sitzen. Außerhalb dieser beiden Sektionen
 * gibt es keine Punkte, dort scrollt die Seite unverändert frei.
 */

import { useEffect } from "react";
import Snap from "lenis/snap";
import { getLenis } from "@/lib/scroll";

type SnapLike = {
  add: (value: number) => () => void;
  destroy: () => void;
};

export function SnapZone() {
  useEffect(() => {
    const lenis = getLenis() as ConstructorParameters<typeof Snap>[0] | null;
    if (!lenis) return;
    // Wer weniger Bewegung will, bekommt keinen gleitenden Zwangs-Scroll.
    if (window.matchMedia("(prefers-reduced-motion: reduce)").matches) return;

    const snap = new Snap(lenis, {
      type: "proximity",
      // weich und ruhig, kein Schnappen
      duration: 1.1,
      easing: (t: number) => 1 - Math.pow(1 - t, 3),
      // großzügig, damit es innerhalb der Strecke immer einen Punkt findet
      distanceThreshold: "60%",
      debounce: 250,
    }) as unknown as SnapLike;

    let entfernen: Array<() => void> = [];

    const punkteSetzen = () => {
      entfernen.forEach((weg) => weg());
      entfernen = [];
      const vh = window.innerHeight;

      // 1) Horizontale Strecke: je Panel der Scrollstand, bei dem es links anliegt.
      const ansatz = document.getElementById("ansatz");
      const track = document.querySelector<HTMLElement>("[data-ansatz-track]");
      if (ansatz && track && track.parentElement) {
        const oben = ansatz.getBoundingClientRect().top + window.scrollY;
        const strecke = Math.max(1, ansatz.offsetHeight - vh);
        const ueberbreite = Math.max(1, track.scrollWidth - track.parentElement.clientWidth);
        const padLinks = parseFloat(getComputedStyle(track).paddingLeft) || 0;
        Array.from(track.children).forEach((kind) => {
          const links = (kind as HTMLElement).offsetLeft - padLinks;
          const anteil = Math.min(1, Math.max(0, links / ueberbreite));
          entfernen.push(snap.add(Math.round(oben + anteil * strecke)));
        });
      }

      // 2) Beispiel-Stapel: je Box ein Punkt (jede Karte ist einen Bildschirm hoch).
      const beispiele = document.getElementById("beispiele");
      if (beispiele) {
        const oben = beispiele.getBoundingClientRect().top + window.scrollY;
        const karten = beispiele.querySelectorAll("[data-stack-card]");
        karten.forEach((_, i) => {
          entfernen.push(snap.add(Math.round(oben + i * vh)));
        });
      }
    };

    punkteSetzen();
    // Nach Schriften/Bildern sitzt das Layout erst richtig.
    const nachmessen = setTimeout(punkteSetzen, 700);
    window.addEventListener("resize", punkteSetzen);

    return () => {
      clearTimeout(nachmessen);
      window.removeEventListener("resize", punkteSetzen);
      entfernen.forEach((weg) => weg());
      snap.destroy();
    };
  }, []);

  return null;
}
