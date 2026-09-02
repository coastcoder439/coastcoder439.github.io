'use server';

import { portfolioData } from '@/data/portfolio';

export interface GalleryImage {
    src: string;
    filename: string;
}

export async function getAllGalleryImages(): Promise<GalleryImage[]> {
    return portfolioData.gallery.map((item) => ({
        src: item.url,
        filename: item.title,
    }));
}
