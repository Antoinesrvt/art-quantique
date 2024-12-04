export interface Artwork {
  id: string;
  title: string;
  description: string;
  image: string;
  year: string;
  dimensions: string;
  technique: string;
  details: string;
}

export const artworks: Artwork[] = [
  {
    id: "superposition-i",
    title: "Superposition I",
    description: "Exploration de l'état quantique superposé",
    image: "/artworks/quantum-red.jpg", // First image with burgundy background
    year: "2024",
    dimensions: "100 x 120 cm",
    technique: "Acrylique sur toile",
    details: "Une exploration de la superposition quantique où les particules existent simultanément dans plusieurs états, représentée par l'entrelacement des traces blanches et jaunes sur fond bordeaux."
  },
  {
    id: "intrication",
    title: "Intrication",
    description: "La danse des particules liées",
    image: "/artworks/quantum-burgundy.jpg", // Second similar image
    year: "2024",
    dimensions: "100 x 120 cm",
    technique: "Acrylique sur toile",
    details: "Une représentation de l'intrication quantique où les particules restent connectées indépendamment de leur distance, symbolisée par les lignes entrelacées."
  },
  {
    id: "dualite",
    title: "Dualité",
    description: "La nature double de la matière",
    image: "/artworks/quantum-black.jpg", // Third image with black background
    year: "2024",
    dimensions: "120 x 150 cm",
    technique: "Acrylique sur toile",
    details: "Une exploration de la dualité onde-particule, où la matière manifeste simultanément des propriétés ondulatoires et corpusculaires."
  },
  {
    id: "etat-fondamental",
    title: "État Fondamental",
    description: "L'essence de l'énergie pure",
    image: "/artworks/quantum-blue.jpg", // Fourth image with blue background
    year: "2024",
    dimensions: "120 x 150 cm",
    technique: "Acrylique sur toile",
    details: "Une représentation de l'état d'énergie le plus bas d'un système quantique, caractérisé par une stabilité parfaite mais vibrant d'énergie potentielle."
  }
];