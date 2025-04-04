import i18n from "i18next";
import LanguageDetector from "i18next-browser-languagedetector";
import { initReactI18next } from "react-i18next";
import en from "./packages/frontend/src/locales/en.json";
import fr from "./packages/frontend/src/locales/fr.json";

const DETECTION_OPTIONS = {
    order: ["localStorage","navigator"],
    caches: ["localStorage"],
};

const RESOURCES = {
    en: { translation: en },
    fr: { translation: fr },
};

i18n
.use(LanguageDetector)
.use(initReactI18next)
.init({
    detection: DETECTION_OPTIONS,
    resources: RESOURCES,
    fallbackLng: "en",
    interpolation: {
        escapeValue: false}
})

export default i18n;