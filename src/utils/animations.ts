// Shared scroll-triggered animation variants for small/individual elements
// (cards, list items, grid tiles, etc.) so they animate independently as
// they enter the viewport - not just the large parent section.
<<<<<<< HEAD
import { useEffect, useState, useCallback } from 'react';
=======
>>>>>>> f4a6bbe3ce63bf2d37ccd787728ab3dd069bc4ed
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

<<<<<<< HEAD
// Horizontal slide + fade, used for individual cards/tiles that should glide
// in from the side rather than rise up. This reads as clear, deliberate
// motion instead of the "blink" look a pure opacity-only fade can have.
export const cardFadeHorizontal: Variants = {
  hidden: { opacity: 0, x: -36 },
  visible: { opacity: 1, x: 0 },
};

// Same idea, but entering from the right - handy for alternating layouts.
export const cardFadeHorizontalRight: Variants = {
  hidden: { opacity: 0, x: 36 },
  visible: { opacity: 1, x: 0 },
};

// Horizontal slide + scale, for stat/number cards that want the same
// left-to-right motion as cardFadeHorizontal.
export const cardFadeHorizontalScale: Variants = {
  hidden: { opacity: 0, x: -24, scale: 0.96 },
  visible: { opacity: 1, x: 0, scale: 1 },
};

// Default viewport settings: animate once, but require a meaningful chunk of
// the element (20%) to already be inside the viewport before triggering.
// With amount: 0 the old settings triggered the instant a single pixel
// crossed the very bottom edge of the screen - so on a normal (or fast)
// scroll, the fade/rise animation would already be finished by the time the
// card was actually in clear view, making it look like there was no
// animation at all. Requiring 20% visibility pulls the trigger point further
// into the viewport so the motion plays out somewhere you can actually see it.
export const cardViewport = { once: true, amount: 0.2, margin: '0px 0px -40px 0px' };

// Reactively tracks whether the viewport is at/above a breakpoint (default:
// Tailwind's `lg`, 1024px). Uses matchMedia so it updates live on resize /
// orientation change / devtools responsive-mode toggling.
export function useIsDesktop(breakpoint = 1024): boolean {
  const [isDesktop, setIsDesktop] = useState(() =>
    typeof window !== 'undefined' ? window.innerWidth >= breakpoint : false
  );

  useEffect(() => {
    if (typeof window === 'undefined') return;
    const mq = window.matchMedia(`(min-width: ${breakpoint}px)`);
    const handler = () => setIsDesktop(mq.matches);
    handler();
    mq.addEventListener('change', handler);
    return () => mq.removeEventListener('change', handler);
  }, [breakpoint]);

  return isDesktop;
}

// Call this once at the top of any component that renders staggered cards.
// Returns a `cardTransition(index, ...)` function bound to the current
// desktop/mobile state - staggered on mobile, simultaneous on desktop.
//
// `base`      - animation duration in seconds (bumped up from 0.45 to 0.6 by
//               default so the motion reads as a clear, deliberate reveal
//               rather than a near-instant pop).
// `step`      - per-item stagger in seconds, applied on mobile only (and on
//               desktop too if `staggerOnDesktop` is passed as true) so a
//               single-column list can cascade in.
// `max`       - cap on how large the stagger can grow for long lists.
// `baseDelay` - small constant delay (applied on both desktop and mobile)
//               so the animation never starts literally the instant the
//               trigger fires - this alone makes it noticeably more visible.
export function useCardTransition(breakpoint = 1024) {
  const isDesktop = useIsDesktop(breakpoint);

  return useCallback(
    (
      index: number,
      base = 0.6,
      step = 0,
      max = 0.4,
      baseDelay = 0.08,
      staggerOnDesktop = false
    ) => ({
      duration: base,
      delay:
        baseDelay +
        (isDesktop && !staggerOnDesktop ? 0 : Math.min(index * step, max)),
      ease: [0.22, 1, 0.36, 1] as const,
    }),
    [isDesktop]
  );
}
=======
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
>>>>>>> f4a6bbe3ce63bf2d37ccd787728ab3dd069bc4ed
