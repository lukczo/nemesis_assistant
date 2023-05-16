import { useTranslation } from "react-i18next";
import { MainLayout } from "../../main-layout";
import { CircleButton } from "../../typography/circle-button";
import { useGlobalState } from "../../../global-state";
import { Link } from "react-router-dom";
import { Button } from "../../button";
import { Header } from "../../typography/header";
import { List } from "../../typography/list-item";
import { Controls } from "../../controls";
import { useState } from "react";

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
  const [isAllChecked, setIsAllChecked] = useState(false);
  return (
    <MainLayout
      top={<Header>Setup 01</Header>}
      main={
        <List
          onAllChecked={setIsAllChecked}
          items={[
            t("setup_map.step1"),
            t("setup_map.step2"),
            t("setup_map.step3"),
            t("setup_map.step4"),
            t("setup_map.step5"),
            t("setup_map.step6"),
          ]}
        />
      }
      bottom={
        <Controls>
          <Button onClick={() => setGameStage("start")}>
            <Link to={"/"}>{t("home")}</Link>
          </Button>
          <Button
            disabled={!isAllChecked}
            onClick={() => setGameStage("board-setup-players")}
          >
            next
          </Button>
        </Controls>
      }
    />
  );
};

const SetupPlayerPage = () => {
  const [, setGameStage] = useGlobalState("gameStage");
  const { t } = useTranslation();
  const [isAllChecked, setIsAllChecked] = useState(false);

  return (
    <MainLayout
      top={<Header>Setup 02</Header>}
      main={
        <List
          onAllChecked={setIsAllChecked}
          items={[
            t("setup_players.step1"),
            t("setup_players.step2"),
            t("setup_players.step3"),
            t("setup_players.step4"),
          ]}
        />
      }
      bottom={
        <Controls>
          <Button onClick={() => setGameStage("board-setup-map")}>
            {t("back")}
          </Button>
          <Button
            disabled={!isAllChecked}
            onClick={() => setGameStage("board-setup-players")}
          >
            {t("next")}
          </Button>
        </Controls>
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
    case "board-setup-players":
      return <SetupPlayerPage />;
    default:
      return <StartPage />;
  }
};
