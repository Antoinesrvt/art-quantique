import { getCollection } from 'astro:content';
import type { CollectionEntry } from 'astro:content';
import type { ArtworkColor } from '../content/config';
import type { ArtworkSize } from '../content/config';

export type Artwork = CollectionEntry<'artworks'>;

export async function getAllArtworks(): Promise<Artwork[]> {
  const artworks = await getCollection('artworks');
  return artworks.sort((a, b) => (a.data.order || 0) - (b.data.order || 0));
}

export async function getArtworksByCollection(collectionId: string): Promise<Artwork[]> {
  const artworks = await getAllArtworks();
  return artworks.filter(artwork => artwork.data.collectionId === collectionId);
}

export async function getArtwork(slug: string): Promise<Artwork | undefined> {
  const artworks = await getAllArtworks();
  return artworks.find(artwork => artwork.id === slug);
}

export function filterArtworks(artworks: Artwork[], filters: {
  size?: ArtworkSize;
  colors?: ArtworkColor[];
}): Artwork[] {
  return artworks.filter(artwork => {
    const sizeMatch = !filters.size || artwork.data.size === filters.size;
    const colorMatch = !filters.colors?.length || 
      filters.colors.includes(artwork.data.color);
    return sizeMatch && colorMatch;
  });
} 