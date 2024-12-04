import { getCollection } from 'astro:content';
import type { CollectionEntry } from 'astro:content';

export type Artwork = CollectionEntry<'artworks'>;

export async function getAllArtworks() {
  const artworks = await getCollection('artworks');
  return artworks.sort((a, b) => (a.data.order || 0) - (b.data.order || 0));
}

export async function getArtworksByCollection(collectionId: string) {
  const artworks = await getAllArtworks();
  return artworks.filter(artwork => artwork.data.collectionId === collectionId);
}

export async function getArtwork(slug: string) {
  const artworks = await getAllArtworks();
  return artworks.find(artwork => artwork.id === slug);
} 