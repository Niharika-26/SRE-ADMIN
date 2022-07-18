import i18n from "i18next";
import { initReactI18next } from "react-i18next";
import LanguageDetector from "i18next-browser-languagedetector";

import { TRANSLATIONS_DE } from "./de";
import { TRANSLATIONS_EN } from "./en";
import { TRANSLATIONS_HI } from "./hi";

i18n
  .use(LanguageDetector)
  .use(initReactI18next)
  .init({
    resources: {
      en: {
        translation: TRANSLATIONS_EN,
      },
      de: {
        translation: TRANSLATIONS_DE,
      },
      hi: {
        translation: TRANSLATIONS_HI,
      },
    },
  });

export default i18n;
