import React, { createContext, useContext, useState, useEffect, ReactNode } from "react";

interface LanguageContextType {
  language: "Norsk" | "English";
  setLanguage: (language: "Norsk" | "English") => void;
}

interface LanguageProviderProps {
  children: ReactNode;
}

const defaultContextValue: LanguageContextType = {
  language: "Norsk",
  setLanguage: () => {},
};

const LanguageContext = createContext<LanguageContextType>(defaultContextValue);

export const useLanguage = () => useContext(LanguageContext);

export const LanguageProvider: React.FC<LanguageProviderProps> = ({ children }) => {
  const storedLanguage = localStorage.getItem("language");
  const [language, setLanguage] = useState<"Norsk" | "English">(
    storedLanguage === "Norsk" || storedLanguage === "English" ? storedLanguage : "Norsk",
  );

  useEffect(() => {
    localStorage.setItem("language", language);
  }, [language]);

  return (
    <LanguageContext.Provider value={{ language, setLanguage }}>
      {children}
    </LanguageContext.Provider>
  );
};
