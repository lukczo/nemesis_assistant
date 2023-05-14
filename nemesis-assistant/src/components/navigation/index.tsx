import { Link } from "react-router-dom";
import { useGlobalState } from "../../global-state";
import cls from "./index.module.css";
import { Button } from "../button";
import { useTranslation } from "react-i18next";

export const Navigation = () => {
  const [language, setLanguage] = useGlobalState("language");
  const { t } = useTranslation();

  return (
    <div className={cls.container}>
      <Button>
        <Link to={"/"}>{t("home")}</Link>
      </Button>
      <Button>
        <Link to={"test"}>Test</Link>
      </Button>
      <Button>
        <Link to={"play"}>{t("play")}</Link>
      </Button>
      <Button
        onClick={() =>
          setLanguage(language === "english" ? "polish" : "english")
        }
      >
        {t("change_language")}
      </Button>
    </div>
  );
};
