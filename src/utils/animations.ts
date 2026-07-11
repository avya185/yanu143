// Shared scroll-triggered animation variants for small/individual elements
// (cards, list items, grid tiles, etc.) so they animate independently as
// they enter the viewport - not just the large parent section.
import type { Variants } from 'motion/react';

// Fade + rise, used for individual cards/tiles
export const cardFadeUp: Variants = {
  hidden: { opacity: 0, y: 24 },
  visible: { opacity: 1, y: 0 },
};

// Slightly smaller rise + scale, good for stat/number cards
export const cardFadeUpScale: Variants = {
  hidden: { opacity: 0, y: 16, scale: 0.96 },
  visible: { opacity: 1, y: 0, scale: 1 },
};

// Default viewport settings: animate once, trigger a bit before fully in view
// (works well on small mobile viewports where only part of a grid is visible)
export const cardViewport = { once: true, amount: 0.2, margin: '0px 0px -60px 0px' };

// Helper to compute a small staggered delay per index so cards in the same
// row/grid don't all pop in at exactly the same time
export const cardDelay = (index: number, step = 0.06, max = 0.4) =>
  Math.min(index * step, max);

export const cardTransition = (index: number, base = 0.45, step = 0.06, max = 0.4) => ({
  duration: base,
  delay: cardDelay(index, step, max),
  ease: [0.22, 1, 0.36, 1] as const,
});
