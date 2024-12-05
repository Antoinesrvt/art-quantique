import { getCollection } from 'astro:content';
import type { CollectionEntry } from 'astro:content';
import { getArtworkImagePath } from './imagePaths';

export type Artwork = CollectionEntry<'artworks'>;

export async function getAllArtworks(): Promise<Artwork[]> {
  const artworks = await getCollection('artworks');
  return artworks.map(artwork => ({
    ...artwork,
    data: {
      ...artwork.data,
      image: getArtworkImagePath(artwork.data)
    }
  })).sort((a, b) => (a.data.order || 0) - (b.data.order || 0));
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
  size?: string;
  colors?: string[];
}): Artwork[] {
  return artworks.filter(artwork => {
    const sizeMatch = !filters.size || artwork.data.size === filters.size;
    const colorMatch = !filters.colors?.length || 
      filters.colors.some(color => artwork.data.colors.includes(color));
    return sizeMatch && colorMatch;
  });
} 