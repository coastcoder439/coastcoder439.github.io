import type { MetadataRoute } from 'next';
import { SITE_URL } from '@/lib/site';

export default function robots(): MetadataRoute.Robots {
    return {
        // KEIN disallow fuer /datenschutz: Ein Disallow haelt Suchmaschinen davon ab,
        // die Seite ueberhaupt abzurufen -- damit sehen sie auch das noindex nie, und die
        // Seite kann trotzdem als blosser Link im Index landen. Das noindex auf der Seite
        // selbst erledigt das Gewuenschte vollstaendig.
        rules: [{ userAgent: '*', allow: '/' }],
        sitemap: `${SITE_URL}/sitemap.xml`,
    };
}
