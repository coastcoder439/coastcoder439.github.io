'use client';

import { useCallback, useEffect, useRef, useState } from 'react';
import Image from 'next/image';
import Link from 'next/link';
import {
  ArrowRight,
  ArrowUpRight,
  ChevronLeft,
  ChevronRight,
  Code2,
} from 'lucide-react';
import type { Product, ProductAccent } from '@/data/leon-portfolio';

type ProjectRailProps = {
  id: string;
  index: string;
  eyebrow: string;
  title: string;
  intro: string;
  accent: ProductAccent;
  products: Product[];
};

const accentClasses: Record<ProductAccent, string> = {
  lime: 'is-lime',
  coral: 'is-coral',
  blue: 'is-blue',
  violet: 'is-violet',
  yellow: 'is-yellow',
};

export function ProjectRail({
  id,
  index,
  eyebrow,
  title,
  intro,
  accent,
  products,
}: ProjectRailProps) {
  const railRef = useRef<HTMLUListElement>(null);
  const [activeIndex, setActiveIndex] = useState(0);

  const updateActiveIndex = useCallback(() => {
    const rail = railRef.current;
    if (!rail || rail.children.length === 0) return;

    const railRect = rail.getBoundingClientRect();
    const railStyles = window.getComputedStyle(rail);
    const contentLeft = railRect.left + (Number.parseFloat(railStyles.paddingLeft) || 0);
    let nearestIndex = 0;
    let nearestDistance = Number.POSITIVE_INFINITY;

    Array.from(rail.children).forEach((child, itemIndex) => {
      const distance = Math.abs(child.getBoundingClientRect().left - contentLeft);
      if (distance < nearestDistance) {
        nearestDistance = distance;
        nearestIndex = itemIndex;
      }
    });

    setActiveIndex(nearestIndex);
  }, []);

  useEffect(() => {
    const rail = railRef.current;
    if (!rail) return;

    rail.addEventListener('scroll', updateActiveIndex, { passive: true });
    window.addEventListener('resize', updateActiveIndex);
    updateActiveIndex();

    return () => {
      rail.removeEventListener('scroll', updateActiveIndex);
      window.removeEventListener('resize', updateActiveIndex);
    };
  }, [updateActiveIndex]);

  const scrollToIndex = (nextIndex: number) => {
    const rail = railRef.current;
    if (!rail) return;

    const clampedIndex = Math.max(0, Math.min(products.length - 1, nextIndex));
    const target = rail.children.item(clampedIndex) as HTMLElement | null;
    if (!target) return;

    const railRect = rail.getBoundingClientRect();
    const targetRect = target.getBoundingClientRect();
    const railStyles = window.getComputedStyle(rail);
    const contentInset = Number.parseFloat(railStyles.paddingLeft) || 0;
    const targetLeft = targetRect.left - railRect.left + rail.scrollLeft - contentInset;

    rail.scrollTo({
      left: targetLeft,
      behavior: window.matchMedia('(prefers-reduced-motion: reduce)').matches
        ? 'auto'
        : 'smooth',
    });
  };

  return (
    <section
      id={id}
      aria-labelledby={`${id}-title`}
      className={`leon-rail-section ${accentClasses[accent]}`}
    >
      <div className="leon-shell">
        <div className="leon-rail-heading">
          <div className="leon-rail-heading__copy">
            <p className="leon-kicker">
              <span>{index}</span>
              {eyebrow}
            </p>
            <h2 id={`${id}-title`}>{title}</h2>
            <p>{intro}</p>
          </div>

          <div className="leon-rail-controls" aria-label={`Navigation für ${title}`}>
            <span className="leon-rail-counter" aria-live="polite">
              {String(activeIndex + 1).padStart(2, '0')} /{' '}
              {String(products.length).padStart(2, '0')}
            </span>
            <button
              type="button"
              onClick={() => scrollToIndex(activeIndex - 1)}
              disabled={activeIndex === 0}
              aria-label="Vorheriges Projekt"
            >
              <ChevronLeft aria-hidden="true" />
            </button>
            <button
              type="button"
              onClick={() => scrollToIndex(activeIndex + 1)}
              disabled={activeIndex === products.length - 1}
              aria-label="Nächstes Projekt"
            >
              <ChevronRight aria-hidden="true" />
            </button>
          </div>
        </div>
      </div>

      <div className="leon-rail-viewport">
        <ul ref={railRef} className="leon-project-rail" aria-label={title}>
          {products.map((product, itemIndex) => (
            <li key={product.slug}>
              <ProductCard product={product} index={itemIndex} />
            </li>
          ))}
        </ul>
      </div>

      <div className="leon-shell">
        <p className="leon-scroll-hint">
          <ArrowRight aria-hidden="true" />
          Seitwärts scrollen — per Touch, Trackpad oder Pfeilen
        </p>
      </div>
    </section>
  );
}

function ProductCard({ product, index }: { product: Product; index: number }) {
  const accentClass = accentClasses[product.accent];

  return (
    <article className={`leon-product-card ${accentClass} product-${product.slug}`}>
      <div className="leon-product-card__media">
        {product.image ? (
          <div className="leon-browser-frame">
            <div className="leon-browser-frame__bar" aria-hidden="true">
              <span />
              <span />
              <span />
              <b>leon.local / {product.slug}</b>
            </div>
            <div className="leon-browser-frame__screen">
              <Image
                src={product.image.src}
                alt={product.image.alt}
                fill
                loading="eager"
                sizes="(max-width: 767px) 88vw, (max-width: 1279px) 72vw, 760px"
                className={
                  product.image.fit === 'contain'
                    ? 'leon-media-contain'
                    : 'leon-media-cover'
                }
                style={{ objectPosition: product.image.position ?? 'center' }}
              />
            </div>
          </div>
        ) : (
          <div className="leon-proof-panel">
            <div className="leon-proof-panel__topline">
              <Code2 aria-hidden="true" />
              <span>Quellstand · Textbeleg</span>
            </div>
            {product.metric ? (
              <div className="leon-proof-panel__metric">
                <strong>{product.metric.value}</strong>
                <span>{product.metric.label}</span>
              </div>
            ) : null}
            <div className="leon-proof-panel__lines" aria-hidden="true">
              {product.proof.map((item) => (
                <span key={item}>{item}</span>
              ))}
            </div>
            <p>{product.honesty}</p>
          </div>
        )}
      </div>

      <div className="leon-product-card__content">
        <div className="leon-product-card__meta">
          <span>{String(index + 1).padStart(2, '0')}</span>
          <p>{product.eyebrow}</p>
          <small>{product.status}</small>
        </div>

        <h3>{product.title}</h3>
        <p className="leon-product-card__claim">{product.claim}</p>
        <p className="leon-product-card__summary">{product.summary}</p>

        <ul className="leon-chip-list" aria-label="Produktbelege">
          {product.tags.map((tag) => (
            <li key={tag}>{tag}</li>
          ))}
        </ul>

        <div className="leon-product-card__actions">
          <Link href={`/projects/${product.slug}`} className="leon-text-link">
            Fallstudie öffnen
            <ArrowRight aria-hidden="true" />
          </Link>
          {product.liveUrl ? (
            <a
              href={product.liveUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="leon-text-link leon-text-link--muted"
            >
              Live
              <ArrowUpRight aria-hidden="true" />
            </a>
          ) : null}
        </div>
      </div>
    </article>
  );
}
