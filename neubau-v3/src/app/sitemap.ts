import type { MetadataRoute } from 'next';
import { SITE_URL } from '@/lib/site';

export default function sitemap(): MetadataRoute.Sitemap {
    const now = new Date();
    return [
        // Nur die Startseite: /datenschutz traegt bewusst ein noindex und gehoert damit
        // nicht in die Sitemap -- die laedt Suchmaschinen ja gerade zum Indexieren ein.
        { url: SITE_URL, lastModified: now, changeFrequency: 'monthly', priority: 1 },
    ];
}
