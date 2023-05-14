import React from "react";
import ReactDOM from "react-dom/client";
import "./index.css";
import { Router } from "./components/router";
import i18n from "./i18n";
import { useGlobalState } from "./global-state";
import { useEffect } from "react";

const LanguageProvider = () => {
  const [language] = useGlobalState("language");

  useEffect(() => {
    i18n.changeLanguage(language);
  }, [language]);

  return <></>;
};

ReactDOM.createRoot(document.getElementById("root") as HTMLElement).render(
  <React.StrictMode>
    <LanguageProvider />
    <Router />
  </React.StrictMode>
);
