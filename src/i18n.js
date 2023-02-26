import i18n from "i18next";
import LanguageDetector from "i18next-browser-languagedetector";
import { initReactI18next } from "react-i18next";

import plNavbarTranslation from "./locales/pl/navbar.json";
import plHomePlTranslation from "./locales/pl/home.json";

import enNavbarTranslation from "./locales/en/navbar.json";
import enHomePlTranslation from "./locales/en/home.json";

const resources = {
  pl: {
    translation: {
      home: plHomePlTranslation,
      navbar: plNavbarTranslation,
    },
  },
  en: {
    translation: {
      home: enHomePlTranslation,
      navbar: enNavbarTranslation,
    },
  },
};

const options = {
  resources,
  fallbackLng: "en",
  lng: "en",
  debug: false,
  interpolation: {
    escapeValue: false,
  },
};

i18n.use(LanguageDetector).use(initReactI18next).init(options);

export default i18n;
