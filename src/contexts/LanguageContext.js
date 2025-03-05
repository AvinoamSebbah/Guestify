// LanguageContext.js
import React, { createContext, useState, useEffect } from 'react';
import i18n from 'i18next';

export const LanguageContext = createContext();

const languageSettings = {
  en: { dir: 'ltr' },
  fr: { dir: 'ltr' },
  he: { dir: 'rtl' },
  // Ajoutez d'autres langues si nécessaire
};

export const LanguageProvider = ({ children }) => {
  // Choix par défaut de la langue (ex: 'fr')
  const [language, setLanguage] = useState('fr');

  useEffect(() => {
    i18n.changeLanguage(language);
    const { dir } = languageSettings[language] || { dir: 'ltr' };
    document.documentElement.dir = dir;
  }, [language]);

  const changeLanguage = (newLanguage) => {
    if (languageSettings[newLanguage]) {
      setLanguage(newLanguage);
    } else {
      console.warn(`La langue ${newLanguage} n'est pas supportée.`);
    }
  };

  return (
    <LanguageContext.Provider value={{ language, changeLanguage }}>
      {children}
    </LanguageContext.Provider>
  );
};
