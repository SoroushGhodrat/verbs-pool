import React, {
  createContext,
  useContext,
  useState,
  useEffect,
  ReactNode,
} from 'react';
import { useTranslation } from 'react-i18next';

type Language = 'Norsk' | 'English';

interface LanguageContextType {
  language: Language;
  setLanguage: (language: Language) => void;
}

interface LanguageProviderProps {
  children: ReactNode;
}

const defaultContextValue: LanguageContextType = {
  language: 'Norsk',
  setLanguage: () => {},
};

const LanguageContext = createContext<LanguageContextType>(defaultContextValue);

export const useLanguage = () => useContext(LanguageContext);

export const LanguageProvider: React.FC<LanguageProviderProps> = ({
  children,
}) => {
  // Use the instance supplied by I18nextProvider rather than the global
  // i18next singleton, so the provider works against whichever instance is
  // in scope (the app's, or a test's).
  const { i18n } = useTranslation();

  const storedLanguage = localStorage.getItem('language');
  const [language, setLanguage] = useState<Language>(
    storedLanguage === 'Norsk' || storedLanguage === 'English'
      ? storedLanguage
      : 'Norsk'
  );

  useEffect(() => {
    localStorage.setItem('language', language);
    i18n.changeLanguage(language === 'Norsk' ? 'no' : 'en');
  }, [language, i18n]);

  return (
    <LanguageContext.Provider value={{ language, setLanguage }}>
      {children}
    </LanguageContext.Provider>
  );
};
