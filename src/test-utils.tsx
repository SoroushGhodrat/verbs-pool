import { ReactElement, ReactNode } from 'react';
import { render, RenderOptions } from '@testing-library/react';
import { MemoryRouter } from 'react-router-dom';
import { I18nextProvider } from 'react-i18next';
import i18n from 'i18next';
import { initReactI18next } from 'react-i18next';
import { LanguageProvider } from './context/LanguageContext';
import enGlobal from '../public/locales/en/global.json';

// A synchronous i18n instance for tests: the app's real config loads
// translations over HTTP, which jsdom cannot serve. The real English bundle
// is imported directly so tests assert the text users actually see.
const testI18n = i18n.createInstance();
testI18n.use(initReactI18next).init({
  lng: 'en',
  fallbackLng: 'en',
  ns: ['global'],
  defaultNS: 'global',
  resources: { en: { global: enGlobal } },
  interpolation: { escapeValue: false },
});

// jsdom has no matchMedia; default to the desktop layout in tests unless a
// test overrides it via setViewport().
export const setViewport = (isDesktop: boolean) => {
  window.matchMedia = ((query: string) => ({
    matches: query.includes('min-width: 768px') ? isDesktop : false,
    media: query,
    onchange: null,
    addEventListener: () => {},
    removeEventListener: () => {},
    addListener: () => {},
    removeListener: () => {},
    dispatchEvent: () => false,
  })) as unknown as typeof window.matchMedia;
};

setViewport(true);

const AllProviders = ({ children }: { children: ReactNode }) => (
  <I18nextProvider i18n={testI18n}>
    <LanguageProvider>
      <MemoryRouter>{children}</MemoryRouter>
    </LanguageProvider>
  </I18nextProvider>
);

export const renderWithProviders = (
  ui: ReactElement,
  options?: Omit<RenderOptions, 'wrapper'>
) => render(ui, { wrapper: AllProviders, ...options });

export * from '@testing-library/react';
