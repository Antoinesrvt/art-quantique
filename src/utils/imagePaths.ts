export function getArtworkImagePath(imageName: string): string {
  // Remove spaces and special characters, convert to lowercase
  const safeImagePath = imageName
    .replace(/\s+/g, '-')
    .toLowerCase()
    .normalize('NFD')
    .replace(/[\u0300-\u036f]/g, ''); // Remove accents

  return `/images${safeImagePath}`;
}
