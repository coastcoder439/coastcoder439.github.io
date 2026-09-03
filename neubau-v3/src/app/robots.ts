import type { MetadataRoute } from 'next';
import { SITE_URL, IMPRESSUM_COMPLETE } from '@/lib/site';

export default function robots(): MetadataRoute.Robots {
    // Ohne vollständiges Impressum bleibt die Seite für Suchmaschinen gesperrt.
    if (!IMPRESSUM_COMPLETE) {
        return { rules: [{ userAgent: '*', disallow: '/' }] };
    }
    return {
        rules: [{ userAgent: '*', allow: '/', disallow: ['/impressum', '/datenschutz'] }],
        sitemap: `${SITE_URL}/sitemap.xml`,
    };
}
