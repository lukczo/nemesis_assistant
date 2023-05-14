import i18n from "i18next";
import { initReactI18next } from "react-i18next";
import en from "./english.json";
import pl from "./polish.json";

const resources = {
  en: {
    translation: en,
  },
  pl: {
    translation: pl,
  },
};

i18n.use(initReactI18next).init({
  resources,
  fallbackLng: "en",
  lng: "pl",
});

export default i18n;
