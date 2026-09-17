import i18n from 'i18next';
import Backend from 'i18next-http-backend';
import { initReactI18next } from 'react-i18next';
import LanguageDetector from 'i18next-browser-languagedetector';

i18n
  .use(Backend)
  .use(LanguageDetector)
  .use(initReactI18next)
  .init(
    {
      // No `lng` here on purpose: setting it would override LanguageDetector
      // and make the detector dead weight.
      supportedLngs: ['en', 'no'],
      fallbackLng: 'en',
      backend: {
        //translation file path
        loadPath: '/locales/{{lng}}/{{ns}}.json',
      },
      debug: import.meta.env.DEV,
      ns: ['global'],
      defaultNS: 'global',
      interpolation: {
        escapeValue: false,
        formatSeparator: ',',
      },
    },
    (error) => {
      if (error) {
        return console.error('Loading i18n error', error);
      }
    }
  );

export default i18n;
