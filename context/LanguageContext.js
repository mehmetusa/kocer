import { createContext, useContext, useEffect, useMemo, useState } from 'react';
import { defaultLanguage, getTranslations, supportedLanguages } from '../data/siteContent';

const STORAGE_KEY = 'kocer-language';

const LanguageContext = createContext(null);

export function LanguageProvider({ children }) {
  const [language, setLanguageState] = useState(defaultLanguage);

  useEffect(() => {
    const savedLanguage =
      typeof window !== 'undefined' ? window.localStorage.getItem(STORAGE_KEY) : null;

    if (savedLanguage && supportedLanguages.some(({ code }) => code === savedLanguage)) {
      setLanguageState(savedLanguage);
    }
  }, []);

  const setLanguage = (code) => {
    if (!supportedLanguages.some((languageOption) => languageOption.code === code)) return;

    setLanguageState(code);

    if (typeof window !== 'undefined') {
      window.localStorage.setItem(STORAGE_KEY, code);
    }
  };

  const value = useMemo(
    () => ({
      language,
      setLanguage,
      supportedLanguages,
      copy: getTranslations(language),
    }),
    [language],
  );

  return <LanguageContext.Provider value={value}>{children}</LanguageContext.Provider>;
}

export function useLanguage() {
  const context = useContext(LanguageContext);

  if (!context) {
    throw new Error('useLanguage must be used within a LanguageProvider');
  }

  return context;
}
