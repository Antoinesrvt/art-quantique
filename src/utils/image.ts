export async function optimizeImage(src: string, options: {
  width?: number;
  height?: number;
  format?: 'webp' | 'avif' | 'jpeg';
}) {
  // Implementation would depend on your image optimization solution
  // This is a placeholder for the interface
  return {
    src,
    srcset: `${src} 1x, ${src} 2x`,
    width: options.width,
    height: options.height,
    loading: "lazy",
    decoding: "async"
  };
}