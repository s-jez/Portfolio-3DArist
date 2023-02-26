import i18n from "i18next";
import LanguageDetector from "i18next-browser-languagedetector";
import { initReactI18next } from "react-i18next";
import plTranslation from "./locales/pl.json";
import enTranslation from "./locales/en.json";

const resources = {
  pl: {
    translation: plTranslation,
  },
  en: {
    translation: enTranslation,
  },
};

const options = {
  resources,
  fallbackLng: "en",
  debug: false,
  interpolation: {
    escapeValue: false,
  },
};

i18n.use(LanguageDetector).use(initReactI18next).init(options);

export default i18n;
