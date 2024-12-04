import { defineCollection, z } from 'astro:content';

const artworksCollection = defineCollection({
  type: 'data',
  schema: z.object({
    title: z.string(),
    description: z.string(),
    longDescription: z.string().optional(),
    image: z.string(),
    year: z.string(),
    size: z.string(),
    technique: z.string(),
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