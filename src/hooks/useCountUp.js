import { useEffect, useRef, useState } from 'react';

/**
 * useCountUp -Animates a number from 0 to target when element enters viewport.
 * Supports integers and decimals (e.g. 4.9 client satisfaction score).
 */
export function useCountUp(target, duration = 1800, enabled = true, decimals = 0) {
  const [value, setValue] = useState(0);
  const ref = useRef(null);
  const hasAnimated = useRef(false);

  useEffect(() => {
    if (!enabled || hasAnimated.current) return undefined;

    const element = ref.current;
    if (!element) return undefined;

    const observer = new IntersectionObserver(
      ([entry]) => {
        if (!entry.isIntersecting || hasAnimated.current) return;
        hasAnimated.current = true;

        const start = performance.now();
        const animate = (now) => {
          const progress = Math.min((now - start) / duration, 1);
          const eased = 1 - (1 - progress) ** 3;
          const nextValue = eased * target;

          if (decimals > 0) {
            setValue(Number(nextValue.toFixed(decimals)));
          } else {
            setValue(Math.floor(nextValue));
          }

          if (progress < 1) requestAnimationFrame(animate);
          else if (decimals > 0) setValue(Number(target.toFixed(decimals)));
          else setValue(target);
        };
        requestAnimationFrame(animate);
      },
      { threshold: 0.35 },
    );

    observer.observe(element);
    return () => observer.disconnect();
  }, [target, duration, enabled, decimals]);

  return { ref, value };
}
