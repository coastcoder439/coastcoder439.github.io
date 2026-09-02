import type { Metadata } from 'next';
import Image from 'next/image';
import Link from 'next/link';
import { notFound } from 'next/navigation';
import {
  ArrowLeft,
  ArrowRight,
  ArrowUpRight,
  Check,
  Code2,
  Eye,
  ShieldCheck,
  Wrench,
} from 'lucide-react';
import { ConversationCta } from '@/components/leon/ConversationCta';
import { productBySlug, products } from '@/data/leon-portfolio';

type ProjectPageProps = {
  params: Promise<{ slug: string }>;
};

export function generateStaticParams() {
  return products.map((product) => ({ slug: product.slug }));
}

export async function generateMetadata({ params }: ProjectPageProps): Promise<Metadata> {
  const { slug } = await params;
  const product = productBySlug(slug);

  if (!product) {
    return { title: 'Projekt nicht gefunden' };
  }

  const description = `${product.claim} ${product.summary}`;
  const images = product.image ? [product.image.src] : [];

  return {
    title: product.title,
    description,
    openGraph: {
      title: `${product.title} | Leon Pösken`,
      description,
      images,
    },
    twitter: {
      card: images.length > 0 ? 'summary_large_image' : 'summary',
      title: `${product.title} | Leon Pösken`,
      description,
      images,
    },
  };
}

export default async function ProjectPage({ params }: ProjectPageProps) {
  const { slug } = await params;
  const product = productBySlug(slug);

  if (!product) notFound();

  const currentIndex = products.findIndex((item) => item.slug === product.slug);
  const nextProduct = products[(currentIndex + 1) % products.length];

  return (
    <main className={`leon-page leon-detail is-${product.accent} product-${product.slug}`}>
      <section className="leon-detail-hero" aria-labelledby="project-title">
        <div className="leon-shell">
          <Link href="/projects" className="leon-back-link">
            <ArrowLeft aria-hidden="true" />
            Alle Projekte
          </Link>

          <div className="leon-detail-hero__heading">
            <div>
              <p className="leon-kicker">
                <span>{String(currentIndex + 1).padStart(2, '0')} / 08</span>
                {product.eyebrow}
              </p>
              <h1 id="project-title">
                {product.slug === 'drive-automatisierung' ? (
                  <>
                    Drive-
                    <br />
                    Automatisierung
                  </>
                ) : (
                  product.title
                )}
              </h1>
              <p className="leon-detail-hero__claim">{product.claim}</p>
            </div>
            <div className="leon-detail-hero__summary">
              <p>{product.summary}</p>
              <span>{product.status}</span>
            </div>
          </div>

          <div className="leon-detail-actions">
            {product.liveUrl ? (
              <a
                className="leon-button leon-button--primary"
                href={product.liveUrl}
                target="_blank"
                rel="noopener noreferrer"
              >
                {product.liveLabel ?? 'Live öffnen'}
                <ArrowUpRight aria-hidden="true" />
              </a>
            ) : null}
            {product.repoUrl ? (
              <a
                className="leon-button leon-button--secondary"
                href={product.repoUrl}
                target="_blank"
                rel="noopener noreferrer"
              >
                <Code2 aria-hidden="true" />
                {product.repoLabel ?? 'Quellstand ansehen'}
              </a>
            ) : null}
            {!product.liveUrl && !product.repoUrl ? (
              <span className="leon-detail-actions__honest">
                <ShieldCheck aria-hidden="true" />
                Interner Prototyp · kein öffentlicher Zugang
              </span>
            ) : null}
          </div>

          <div className="leon-detail-hero__media">
            {product.image ? (
              <a
                className="leon-original-link"
                href={product.image.src}
                target="_blank"
                rel="noopener noreferrer"
                aria-label={`${product.image.alt} im Original öffnen`}
              >
                <div className="leon-browser-frame leon-browser-frame--detail">
                  <div className="leon-browser-frame__bar" aria-hidden="true">
                    <span />
                    <span />
                    <span />
                    <b>Produktbeleg / {product.slug}</b>
                  </div>
                  <div className="leon-browser-frame__screen">
                    <Image
                      src={product.image.src}
                      alt={product.image.alt}
                      fill
                      priority
                      sizes="(max-width: 767px) 94vw, 1320px"
                      className={
                        product.image.fit === 'contain'
                          ? 'leon-media-contain'
                          : 'leon-media-cover'
                      }
                      style={{ objectPosition: product.image.position ?? 'center' }}
                    />
                  </div>
                </div>
                <span className="leon-original-link__label">
                  Original öffnen
                  <ArrowUpRight aria-hidden="true" />
                </span>
              </a>
            ) : (
              <div className="leon-detail-proof">
                <div>
                  <Code2 aria-hidden="true" />
                  <span>TEXTBASIERTER REPOSITORY-BELEG</span>
                </div>
                {product.metric ? (
                  <p>
                    <strong>{product.metric.value}</strong>
                    {product.metric.label}
                  </p>
                ) : null}
                <ul>
                  {product.proof.map((proof) => (
                    <li key={proof}>
                      <Check aria-hidden="true" />
                      {proof}
                    </li>
                  ))}
                </ul>
                <small>{product.honesty}</small>
              </div>
            )}
          </div>

          <dl className="leon-detail-facts">
            <div>
              <dt>Rolle</dt>
              <dd>{product.role}</dd>
            </div>
            <div>
              <dt>Zeitraum</dt>
              <dd>{product.period}</dd>
            </div>
            <div>
              <dt>Stand</dt>
              <dd>{product.status}</dd>
            </div>
            <div>
              <dt>Quelle</dt>
              <dd>{product.source}</dd>
            </div>
          </dl>
        </div>
      </section>

      <section className="leon-case" aria-labelledby="case-title">
        <div className="leon-shell">
          <p className="leon-kicker">
            <span>FALLSTUDIE</span>
            PROBLEM → PRODUKT → BELEG
          </p>
          <h2 id="case-title">
            Was hier <em>tatsächlich gebaut</em> wurde.
          </h2>
          <div className="leon-case-grid">
            <article>
              <Eye aria-hidden="true" />
              <span>01 · Ausgangslage</span>
              <h3>Das Problem</h3>
              <p>{product.problem}</p>
            </article>
            <article>
              <Wrench aria-hidden="true" />
              <span>02 · Umsetzung</span>
              <h3>Leons System</h3>
              <p>{product.build}</p>
            </article>
            <article>
              <ShieldCheck aria-hidden="true" />
              <span>03 · Nachweis</span>
              <h3>Der Beleg</h3>
              <p>{product.evidence}</p>
            </article>
          </div>
        </div>
      </section>

      <section className="leon-detail-evidence" aria-labelledby="evidence-title">
        <div className="leon-shell">
          <div className="leon-detail-evidence__heading">
            <div>
              <p className="leon-kicker">
                <span>ANSICHTEN</span>
                REPOSITORY-MATERIAL
              </p>
              <h2 id="evidence-title">
                {product.gallery.length > 0
                  ? 'Produktoberflächen im Original.'
                  : 'Quellstand statt Kulisse.'}
              </h2>
            </div>
            <ul className="leon-proof-list">
              {product.proof.map((proof) => (
                <li key={proof}>
                  <Check aria-hidden="true" />
                  {proof}
                </li>
              ))}
            </ul>
          </div>

          {product.gallery.length > 0 ? (
            <div className={`leon-gallery-grid count-${product.gallery.length}`}>
              {product.gallery.map((image, index) => (
                <figure key={image.src}>
                  <a
                    className="leon-gallery-image"
                    href={image.src}
                    target="_blank"
                    rel="noopener noreferrer"
                    aria-label={`${image.alt} im Original öffnen`}
                  >
                    <Image
                      src={image.src}
                      alt={image.alt}
                      fill
                      loading="eager"
                      sizes="(max-width: 767px) 94vw, (max-width: 1199px) 48vw, 720px"
                      className={
                        image.fit === 'cover' ? 'leon-media-cover' : 'leon-media-contain'
                      }
                      style={{ objectPosition: image.position ?? 'center' }}
                    />
                    <span className="leon-original-link__label">
                      Original öffnen
                      <ArrowUpRight aria-hidden="true" />
                    </span>
                  </a>
                  <figcaption>
                    <span>{String(index + 1).padStart(2, '0')}</span>
                    {image.alt}
                  </figcaption>
                </figure>
              ))}
            </div>
          ) : (
            <div className="leon-no-gallery">
              <Code2 aria-hidden="true" />
              <div>
                <h3>Quellstand vorhanden. Bildquelle fehlt.</h3>
                <p>{product.honesty}</p>
              </div>
            </div>
          )}

          {product.honesty && product.gallery.length > 0 ? (
            <p className="leon-honesty-note">
              <ShieldCheck aria-hidden="true" />
              {product.honesty}
            </p>
          ) : null}
        </div>
      </section>

      <nav className="leon-next-project" aria-label="Nächstes Projekt">
        <div className="leon-shell">
          <span>Nächstes Produkt</span>
          <Link href={`/projects/${nextProduct.slug}`}>
            {nextProduct.title}
            <ArrowRight aria-hidden="true" />
          </Link>
        </div>
      </nav>

      <ConversationCta compact />
    </main>
  );
}
