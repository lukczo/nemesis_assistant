import { useTranslation } from "react-i18next";
import { MainLayout } from "../../main-layout";
import { CircleButton } from "../../typography/circle-button";
import { useGlobalState } from "../../../global-state";
import { Link } from "react-router-dom";
import { Button } from "../../button";
import { Header } from "../../typography/header";

const StartPage = () => {
  const [, setGameStage] = useGlobalState("gameStage");
  const [language, setLanguage] = useGlobalState("language");

  const { t } = useTranslation();
  return (
    <MainLayout
      main={
        <CircleButton onClick={() => setGameStage("board-setup-map")}>
          {t("play")}
        </CircleButton>
      }
      bottom={
        <Button
          onClick={() =>
            setLanguage(language === "english" ? "polish" : "english")
          }
        >
          {t("change_language")}
        </Button>
      }
    />
  );
};

const SetupMapPage = () => {
  const [, setGameStage] = useGlobalState("gameStage");
  const { t } = useTranslation();
  return (
    <MainLayout
      top={<Header>Setup 1</Header>}
      main={
        <ul>
          <li>{t("setup.step1")}</li>
          <li>{t("setup.step2")}</li>
          <li>{t("setup.step3")}</li>
          <li>{t("setup.step4")}</li>
          <li>{t("setup.step5")}</li>
          <li>{t("setup.step6")}</li>
        </ul>
      }
      bottom={
        <Button onClick={() => setGameStage("start")}>
          <Link to={"/"}>{t("home")}</Link>
        </Button>
      }
    />
  );
};

export const PlayPage = () => {
  const [gameStage] = useGlobalState("gameStage");

  switch (gameStage) {
    case "start":
      return <StartPage />;
    case "board-setup-map":
      return <SetupMapPage />;
    default:
      return <StartPage />;
  }
};
