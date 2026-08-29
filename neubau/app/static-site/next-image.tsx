import type { ImgHTMLAttributes } from 'react';

type StaticImageProps = Omit<ImgHTMLAttributes<HTMLImageElement>, 'alt'> & {
  alt: string;
  unoptimized?: boolean;
};

export default function StaticImage({ alt, unoptimized: _unoptimized, src, loading = 'lazy', decoding = 'async', ...props }: StaticImageProps) {
  const resolvedSource = typeof src === 'string' && src.startsWith('/') ? `/neubau/${src.slice(1)}` : src;
  // oxlint-disable-next-line next/no-img-element -- GitHub Pages uses local, immutable source images without an image server.
  return <img {...props} src={resolvedSource} alt={alt} loading={loading} decoding={decoding} />;
}
