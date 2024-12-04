export interface Collection {
  id: string;
  name: string;
  description: string;
  coverImage: string;
  longDescription: string;
  year: string;
}

export const collections: Collection[] = [
  {
    id: "danse-des-particules",
    name: "Danse des Particules",
    description: "L'harmonie du mouvement quantique",
    coverImage: "/collections/N.012724.60X60.art quantique.servant ermes.jpg", // You'll replace with actual image path
    longDescription:
      "Une exploration visuelle du mouvement des particules dans l'espace quantique, capturant leur danse éthérée et leurs interactions complexes.",
    year: "2024",
  },
  {
    id: "univers",
    name: "Univers",
    description: "Les mystères cosmiques dévoilés",
    coverImage: "/collections/univers/univers bleu 100X60  05-09-22 servant ermes.jpg", // You'll replace with actual image path
    longDescription:
      "Une série qui explore les vastes étendues de l'univers, des trous noirs aux nébuleuses, en passant par les galaxies lointaines.",
    year: "2024",
  },
  {
    id: "humanoides",
    name: "Humanoïdes",
    description: "L'essence quantique de l'être",
    coverImage:
      "/collections/humanoid_cover.jpg", // You'll replace with actual image path
    longDescription:
      "Une réflexion sur la nature quantique de la conscience humaine et notre connexion avec l'univers à travers une perspective humaniste.",
    year: "2024",
  },
]; 