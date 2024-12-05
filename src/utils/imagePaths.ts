export function getArtworkImagePath(artwork: {
  collectionId: string;
  image: string;
  size?: string;
  color?: string;
}): string {
  const baseUrl = '/artworks';
  
  if (artwork.collectionId === 'danse-des-particules') {
    return `${baseUrl}/${artwork.collectionId}/${artwork.size}/${artwork.color}/${artwork.image}`;
  }
  
  return `${baseUrl}/${artwork.collectionId}/${artwork.image}`;
} 