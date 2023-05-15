import { Outlet } from "react-router-dom";
import i18n from "../../i18n";
import { useGlobalState } from "../../global-state";
import { useEffect, PropsWithChildren } from "react";

const LanguageProvider = (children: PropsWithChildren) => {
  const [language] = useGlobalState("language");

  useEffect(() => {
    i18n.changeLanguage(language);
  }, [language]);

  return <>{children.children}</>;
};

function App() {
  return (
    <LanguageProvider>
      <Outlet />
    </LanguageProvider>
  );
}

export default App;
