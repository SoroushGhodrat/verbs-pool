import { useCallback, useEffect, useState } from 'react';

export type ThemePreference = 'system' | 'light' | 'dark';

export const THEME_STORAGE_KEY = 'theme';

const systemPrefersDark = () =>
  window.matchMedia?.('(prefers-color-scheme: dark)').matches ?? false;

const readStored = (): ThemePreference => {
  try {
    const stored = localStorage.getItem(THEME_STORAGE_KEY);
    return stored === 'light' || stored === 'dark' ? stored : 'system';
  } catch {
    // Private browsing can make localStorage throw rather than return null.
    return 'system';
  }
};

export const useThemePreference = () => {
  const [preference, setPreference] = useState<ThemePreference>(readStored);
  const [systemDark, setSystemDark] = useState(systemPrefersDark);

  // Derived from state rather than read back off the DOM, so it is already
  // correct on the render that changes it.
  const isDark =
    preference === 'dark' || (preference === 'system' && systemDark);

  // The stylesheet keys off data-theme, so there is a single dark block.
  useEffect(() => {
    document.documentElement.dataset.theme = isDark ? 'dark' : 'light';
  }, [isDark]);

  useEffect(() => {
    try {
      if (preference === 'system') localStorage.removeItem(THEME_STORAGE_KEY);
      else localStorage.setItem(THEME_STORAGE_KEY, preference);
    } catch {
      // Persisting is a convenience; the theme still applies without it.
    }
  }, [preference]);

  // Keep following the OS while the user has made no explicit choice.
  useEffect(() => {
    if (!window.matchMedia) return;
    const query = window.matchMedia('(prefers-color-scheme: dark)');
    const onChange = (event: MediaQueryListEvent) =>
      setSystemDark(event.matches);
    query.addEventListener('change', onChange);
    return () => query.removeEventListener('change', onChange);
  }, []);

  const toggle = useCallback(
    () => setPreference(isDark ? 'light' : 'dark'),
    [isDark]
  );

  return { preference, setPreference, isDark, toggle };
};
