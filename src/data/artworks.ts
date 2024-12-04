export type ArtworkSize = 
  | "100x50" 
  | "100x60" 
  | "100x73" 
  | "61x50" 
  | "60x60" 
  | "80x40" 
  | "80x80" 
  | "81x65";

export interface Artwork {
  id: string;
  title: string;
  description: string;
  image: string;
  year: string;
  size: ArtworkSize;
  technique: string;
  details: string;
  collectionId: string;
}

export const artworks: Artwork[] = [
  {
    id: "superposition-i",
    title: "Superposition I",
    description: "Exploration de l'état quantique superposé",
    image: "/artworks/quantum-red.jpg", // First image with burgundy background
    year: "2024",
    size: "100x50",
    technique: "Acrylique sur toile",
    details: "Une exploration de la superposition quantique où les particules existent simultanément dans plusieurs états, représentée par l'entrelacement des traces blanches et jaunes sur fond bordeaux.",
    collectionId: "danse-des-particules"
  },
  {
    id: "intrication",
    title: "Intrication",
    description: "La danse des particules liées",
    image: "/artworks/quantum-burgundy.jpg", // Second similar image
    year: "2024",
    size: "100x60",
    technique: "Acrylique sur toile",
    details: "Une représentation de l'intrication quantique où les particules restent connectées indépendamment de leur distance, symbolisée par les lignes entrelacées.",
    collectionId: "danse-des-particules"
  },
  {
    id: "dualite",
    title: "Dualité",
    description: "La nature double de la matière",
    image: "/artworks/quantum-black.jpg", // Third image with black background
    year: "2024",
    size: "100x73",
    technique: "Acrylique sur toile",
    details: "Une exploration de la dualité onde-particule, où la matière manifeste simultanément des propriétés ondulatoires et corpusculaires.",
    collectionId: "danse-des-particules"
  },
  {
    id: "etat-fondamental",
    title: "État Fondamental",
    description: "L'essence de l'énergie pure",
    image: "/artworks/quantum-blue.jpg", // Fourth image with blue background
    year: "2024",
    size: "61x50",
    technique: "Acrylique sur toile",
    details: "Une représentation de l'état d'énergie le plus bas d'un système quantique, caractérisé par une stabilité parfaite mais vibrant d'énergie potentielle.",
    collectionId: "danse-des-particules"
  }
];
