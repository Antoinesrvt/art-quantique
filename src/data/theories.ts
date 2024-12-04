export interface Theory {
  id: string;
  title: string;
  description: string;
  color: string;
}

export const theories: Theory[] = [
  {
    id: "force-forte",
    title: "Force Forte",
    description: "Représentée par le rouge, elle symbolise la cohésion et l'intensité dans l'art, comme la force qui maintient les quarks ensemble.",
    color: "var(--quantum-red)"
  },
  {
    id: "force-faible",
    title: "Force Faible",
    description: "Le bleu représente la transformation et le changement, reflétant la force responsable de la désintégration radioactive.",
    color: "var(--quantum-blue)"
  },
  {
    id: "force-electromagnetique",
    title: "Force Électromagnétique",
    description: "Le jaune symbolise l'interaction et l'attraction, comme les forces électromagnétiques qui gouvernent la lumière.",
    color: "var(--quantum-yellow)"
  },
  {
    id: "gravite",
    title: "Gravité",
    description: "Le blanc représente l'omniprésence et l'universalité, comme la force gravitationnelle qui lie l'univers.",
    color: "var(--quantum-white)"
  }
];