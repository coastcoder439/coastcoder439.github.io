'use client';

import { useEffect, useState } from 'react';
import Link from 'next/link';
import { usePathname } from 'next/navigation';
import { Download, Menu, X } from 'lucide-react';
import { AnimatedThemeToggler } from '@/components/ui/animated-theme-toggler';
import { resumeUrl } from '@/data/leon-portfolio';

const navItems = [
  { href: '/', label: 'Start' },
  { href: '/#warum', label: 'Warum' },
  { href: '/projects', label: 'Produkte' },
  { href: '/contact', label: 'Kontakt' },
];

export function Navbar() {
  const pathname = usePathname();
  const [menuOpen, setMenuOpen] = useState(false);

  useEffect(() => {
    setMenuOpen(false);
  }, [pathname]);

  useEffect(() => {
    document.body.dataset.menuOpen = menuOpen ? 'true' : 'false';
    return () => {
      delete document.body.dataset.menuOpen;
    };
  }, [menuOpen]);

  return (
    <header className="leon-nav">
      <div className="leon-shell leon-nav__inner">
        <Link href="/" className="leon-nav__brand" aria-label="Leon Pösken — Startseite">
          <strong>LP</strong>
          <span>
            Leon Pösken
            <small>KEEL · SYSTEMBAU</small>
          </span>
        </Link>

        <nav className="leon-nav__links" aria-label="Hauptnavigation">
          {navItems.map((item) => (
            <Link
              key={item.href}
              href={item.href}
              aria-current={
                item.href !== '/#warum' && pathname === item.href ? 'page' : undefined
              }
            >
              {item.label}
            </Link>
          ))}
        </nav>

        <div className="leon-nav__actions">
          <a
            href={resumeUrl}
            download="Leon-Poesken-Lebenslauf.pdf"
            className="leon-nav__resume"
          >
            <Download aria-hidden="true" />
            <span>CV</span>
          </a>
          <AnimatedThemeToggler className="leon-nav__theme" />
          <button
            type="button"
            className="leon-nav__menu-button"
            onClick={() => setMenuOpen((open) => !open)}
            aria-expanded={menuOpen}
            aria-controls="mobile-navigation"
            aria-label={menuOpen ? 'Menü schließen' : 'Menü öffnen'}
          >
            {menuOpen ? <X aria-hidden="true" /> : <Menu aria-hidden="true" />}
          </button>
        </div>
      </div>

      {menuOpen ? (
        <nav id="mobile-navigation" className="leon-mobile-nav" aria-label="Mobile Navigation">
          <div className="leon-shell">
            {navItems.map((item, index) => (
              <Link key={item.href} href={item.href}>
                <span>{String(index + 1).padStart(2, '0')}</span>
                {item.label}
              </Link>
            ))}
            <a href={resumeUrl} download="Leon-Poesken-Lebenslauf.pdf">
              <span>05</span>
              Lebenslauf herunterladen
            </a>
          </div>
        </nav>
      ) : null}
    </header>
  );
}
