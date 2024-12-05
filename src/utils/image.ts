import { getImage } from "astro:assets";


export async function optimizeImage(
  src: string,
  options: {
    width?: number;
    height?: number;
    format?: "webp" | "avif" | "jpeg";
  }
) {
  // Implementation would depend on your image optimization solution
  // This is a placeholder for the interface
  return {
    src,
    srcset: `${src} 1x, ${src} 2x`,
    width: options.width,
    height: options.height,
    loading: "lazy",
    decoding: "async",
  };
}

export async function resolveArtworkImage(imagePath: string) {
  // Remove leading slash if present
  const cleanPath = imagePath.startsWith("/") ? imagePath.slice(1) : imagePath;

  try {
    // Import all images from the public directory
    const images = import.meta.glob(
      "/public/images/artworks/**/*.{jpg,jpeg,png,gif}"
    );
    const matchingImage = images[`/public/${cleanPath}`];

    if (!matchingImage) {
      console.warn(`Image not found: ${imagePath}`);
      return "/placeholder.jpg";
    }

    return cleanPath;
  } catch (error) {
    console.error(`Error resolving image ${imagePath}:`, error);
    return "/placeholder.jpg";
  }
}

export function getImagePath(imagePath: string) {
  // Ensure the path starts with a forward slash
  if (!imagePath.startsWith("/")) {
    imagePath = "/" + imagePath;
  }

  // Remove any double slashes
  return imagePath.replace(/\/+/g, "/");
}

// For dynamic imports of images
export const images = import.meta.glob(
  "/public/images/artworks/**/*.{jpg,jpeg,png,webp}",
  {
    import: "default",
    eager: true,
  }
);