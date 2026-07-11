import { useEffect } from 'react';

/**
 * usePageSEO — Updates document title and meta tags for the portfolio SPA.
 */
export function usePageSEO({ title, description, canonical, ogImage }) {
  useEffect(() => {
    document.title = title;

    const setMeta = (selector, content, createAttr, createValue) => {
      let el = document.querySelector(selector);
      if (!el && createAttr) {
        el = document.createElement('meta');
        el.setAttribute(createAttr, createValue);
        document.head.appendChild(el);
      }
      if (el) el.setAttribute('content', content);
    };

    setMeta('meta[name="description"]', description);

    if (canonical) {
      let link = document.querySelector('link[rel="canonical"]');
      if (!link) {
        link = document.createElement('link');
        link.setAttribute('rel', 'canonical');
        document.head.appendChild(link);
      }
      link.setAttribute('href', canonical);
    }

    setMeta('meta[property="og:title"]', title, 'property', 'og:title');
    setMeta('meta[property="og:description"]', description, 'property', 'og:description');
    if (canonical) setMeta('meta[property="og:url"]', canonical, 'property', 'og:url');
    if (ogImage) {
      setMeta('meta[property="og:image"]', ogImage, 'property', 'og:image');
      setMeta('meta[name="twitter:image"]', ogImage, 'name', 'twitter:image');
    }
    setMeta('meta[name="twitter:title"]', title, 'name', 'twitter:title');
    setMeta('meta[name="twitter:description"]', description, 'name', 'twitter:description');
  }, [title, description, canonical, ogImage]);
}
