import { defineCollection, z } from 'astro:content';

// Define strict types for sizes and colors
const artworkSizeSchema = z.enum([
  "100x50", "100x60", "100x73", "61x50", 
  "60x60", "80x40", "80x80", "81x65", "30x40"
]);

const artworkColorSchema = z.enum([
  "red", "blue", "yellow", "white", "black"
]);

// Export types for use in other files
export type ArtworkSize = z.infer<typeof artworkSizeSchema>;
export type ArtworkColor = z.infer<typeof artworkColorSchema>;

// Define the artwork collection schema
const artworksCollection = defineCollection({
  type: "data",
  schema: z.object({
    title: z.string().optional(),
    description: z.string().optional(),
    image: z.string(),
    date: z.string().optional(),
    year: z.string(),
    size: artworkSizeSchema, // Use the enum schema
    color: artworkColorSchema, // Use the enum schema
    technique: z.string().optional(),
    price: z.number().optional(),
    available: z.boolean().default(true),
    collectionId: z.string(),
    tags: z.array(z.string()).optional(),
    order: z.number().optional(),
  }),
});

// Define the collections collection schema
const collectionsCollection = defineCollection({
  type: 'data',
  schema: z.object({
    name: z.string(),
    description: z.string(),
    coverImage: z.string(),
    longDescription: z.string(),
    year: z.string()
  })
});

// Export the collections
export const collections = {
  artworks: artworksCollection,
  collections: collectionsCollection,
};

// Export constants if needed elsewhere
export const artworkSizes: ArtworkSize[] = [
  "100x50",
  "100x60",
  "100x73",
  "61x50",
  "60x60",
  "80x40",
  "80x80",
  "81x65",
  "30x40",
];

export const artworkColors: ArtworkColor[] = [
  "red",
  "blue",
  "yellow",
  "white",
  "black",
];
