import { ReactElement, ReactNode } from 'react';
import { render, RenderOptions } from '@testing-library/react';
import { MemoryRouter } from 'react-router-dom';
import { I18nextProvider } from 'react-i18next';
import i18n from 'i18next';
import { initReactI18next } from 'react-i18next';
import { LanguageProvider } from './context/LanguageContext';

// A synchronous i18n instance for tests: the app's real config loads
// translations over HTTP, which jsdom cannot serve. Keys fall through to
// themselves, which is enough for smoke assertions.
const testI18n = i18n.createInstance();
testI18n.use(initReactI18next).init({
  lng: 'en',
  fallbackLng: 'en',
  ns: ['global'],
  defaultNS: 'global',
  resources: { en: { global: {} } },
  interpolation: { escapeValue: false },
});

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
