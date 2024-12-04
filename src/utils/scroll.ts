export function shouldShowScrollFeatures(pathname: string): boolean {
  const noScrollPages = [
    '/contact',
    '/artworks/'
  ];
  
  return !noScrollPages.some(page => pathname.startsWith(page));
}

export function disableScroll() {
  document.body.style.overflow = 'hidden';
}

export function enableScroll() {
  document.body.style.overflow = '';
}