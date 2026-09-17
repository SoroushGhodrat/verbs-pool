import { useEffect, useState } from 'react';

/**
 * Tracks a CSS media query in JS. Used to render either the mobile card list
 * or the desktop table, rather than rendering both and hiding one with CSS -
 * which would put every verb in the DOM twice.
 */
export const useMediaQuery = (query: string): boolean => {
  const [matches, setMatches] = useState(
    () => window.matchMedia?.(query).matches ?? false
  );

  useEffect(() => {
    const list = window.matchMedia(query);
    const onChange = (event: MediaQueryListEvent) => setMatches(event.matches);

    setMatches(list.matches);
    list.addEventListener('change', onChange);
    return () => list.removeEventListener('change', onChange);
  }, [query]);

  return matches;
};

/** Tailwind's `md` breakpoint. */
export const useIsDesktop = () => useMediaQuery('(min-width: 768px)');
