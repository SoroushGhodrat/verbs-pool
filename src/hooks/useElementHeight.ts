import { RefObject, useEffect, useState } from 'react';

/**
 * Tracks an element's rendered height. Used to offset the sticky table header
 * by the exact height of the sticky filter bar above it - that height changes
 * with viewport width (the letter list wraps), so it cannot be hardcoded.
 */
export const useElementHeight = (ref: RefObject<HTMLElement | null>) => {
  const [height, setHeight] = useState(0);

  useEffect(() => {
    const element = ref.current;
    if (!element) return;

    const update = () => setHeight(element.getBoundingClientRect().height);
    update();

    // jsdom has no ResizeObserver; fall back to resize events there.
    if (typeof ResizeObserver === 'undefined') {
      window.addEventListener('resize', update);
      return () => window.removeEventListener('resize', update);
    }

    const observer = new ResizeObserver(update);
    observer.observe(element);
    return () => observer.disconnect();
  }, [ref]);

  return height;
};
