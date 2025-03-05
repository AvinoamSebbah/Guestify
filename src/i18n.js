import i18n from "i18next";
import { initReactI18next } from "react-i18next";
import translations from "./assets/locale/translations.json"; // Import du fichier JSON

i18n
  .use(initReactI18next)
  .init({
    resources: translations, // Charger les traductions
    lng: "en", // Anglais par défaut
    fallbackLng: "en", // Repli sur l'anglais si la langue est absente
    interpolation: {
      escapeValue: false, // React protège déjà contre les attaques XSS
    },
  });

export default i18n;
