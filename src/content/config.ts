import { defineCollection, z } from 'astro:content';

export type ArtworkSize =
  | "100x50"
  | "100x60"
  | "100x73"
  | "61x50"
  | "60x60"
  | "80x40"
  | "80x80"
  | "81x65";

const artworksCollection = defineCollection({
  type: 'data',
  schema: z.object({
    title: z.string().optional(),
    description: z.string().optional(),
    longDescription: z.string().optional(),
    image: z.string(),
    date: z.string().optional(),
    year: z.string(),
    size: z.string(),
    color: z.string(),
    technique: z.string().optional(),
    price: z.number().optional(),
    available: z.boolean().default(true),
    collectionId: z.string(),
    tags: z.array(z.string()).optional(),
    order: z.number().optional(),
  })
});

export const collections = {
  'artworks': artworksCollection,
}; 