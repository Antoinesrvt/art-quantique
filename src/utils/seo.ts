export function generateSEOMeta(options: {
  title?: string;
  description?: string;
  image?: string;
  url?: string;
}) {
  const {
    title = "Art Quantique | Servant Ermes",
    description = "Explorez l'art quantique de Servant Ermes - Une fusion unique entre science et expression artistique",
    image = "/og-image.jpg",
    url = "https://artquantique.com"
  } = options;

  return [
    { name: "description", content: description },
    { property: "og:title", content: title },
    { property: "og:description", content: description },
    { property: "og:image", content: image },
    { property: "og:url", content: url },
    { property: "og:type", content: "website" },
    { name: "twitter:card", content: "summary_large_image" },
    { name: "twitter:title", content: title },
    { name: "twitter:description", content: description },
    { name: "twitter:image", content: image }
  ];
}