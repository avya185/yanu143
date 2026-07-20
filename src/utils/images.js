const UNSPLASH_HOSTS = new Set(['images.unsplash.com', 'plus.unsplash.com']);

export function enhanceImageUrl(src, options = {}) {
  if (!src || typeof src !== 'string') return src;

  try {
    const url = new URL(src, window.location.origin);
    if (!UNSPLASH_HOSTS.has(url.hostname)) return src;

    const {
      width,
      height,
      quality = 88,
      fit = 'crop',
      crop,
    } = options;

    url.searchParams.set('auto', 'format');
    url.searchParams.set('fit', fit);
    url.searchParams.set('q', String(quality));
    if (width) url.searchParams.set('w', String(width));
    if (height) url.searchParams.set('h', String(height));
    if (crop) url.searchParams.set('crop', crop);

    return url.toString();
  } catch {
    return src;
  }
}

export function enhancedSrcSet(src, widths = [480, 768, 1024, 1280], options = {}) {
  if (!src || typeof src !== 'string') return undefined;

  try {
    const url = new URL(src, window.location.origin);
    if (!UNSPLASH_HOSTS.has(url.hostname)) return undefined;
  } catch {
    return undefined;
  }

  return widths
    .map((width) => `${enhanceImageUrl(src, { ...options, width })} ${width}w`)
    .join(', ');
}
