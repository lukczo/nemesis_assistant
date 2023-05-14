import i18n from "i18next";
import { initReactI18next } from "react-i18next";
import en from "./english.json";
import pl from "./polish.json";

const resources = {
  english: {
    translation: en,
  },
  polish: {
    translation: pl,
  },
};

i18n.use(initReactI18next).init({
  resources,
  fallbackLng: "english",
});

export default i18n;
