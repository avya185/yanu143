const REVEAL_SELECTOR =
  '.reveal, .reveal-up, .reveal-left, .reveal-right, .reveal-scale, .reveal-fade';
const VISIBLE_CLASS = 'is-visible';
const OBSERVED_ATTR = 'data-reveal-observed';

let intersectionObserver = null;
let mutationObserver = null;
let initialized = false; // <-- guard flag

function getIntersectionObserver() {
  if (intersectionObserver) return intersectionObserver;

  intersectionObserver = new IntersectionObserver(
    (entries) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          entry.target.classList.add(VISIBLE_CLASS);
          intersectionObserver.unobserve(entry.target);
        }
      });
    },
    {
      threshold: 0.15,
      rootMargin: '0px 0px -40px 0px',
    }
  );

  return intersectionObserver;
}

function observeElement(el) {
  if (el.hasAttribute(OBSERVED_ATTR)) return;
  el.setAttribute(OBSERVED_ATTR, 'true');
  getIntersectionObserver().observe(el);
}

function scanForRevealElements(root = document) {
  if (!root || typeof root.querySelectorAll !== 'function') return;
  root.querySelectorAll(REVEAL_SELECTOR).forEach(observeElement);
}

export function initScrollReveal() {
  if (initialized) return; // second+ call from any dev/component does nothing
  if (typeof window === 'undefined' || typeof IntersectionObserver === 'undefined') {
    return;
  }

  initialized = true;

  scanForRevealElements();

  mutationObserver = new MutationObserver((mutations) => {
    let shouldScan = false;
    for (const mutation of mutations) {
      if (mutation.addedNodes && mutation.addedNodes.length > 0) {
        shouldScan = true;
        break;
      }
    }
    if (shouldScan) scanForRevealElements();
  });

  mutationObserver.observe(document.body, { childList: true, subtree: true });
}

export function refreshScrollReveal() {
  scanForRevealElements();
}