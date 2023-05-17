import { useTranslation } from "react-i18next";
import { MainLayout } from "../../main-layout";
import { CircleButton } from "../../circle-button";
import { useGlobalState } from "../../../global-state";
import { Link } from "react-router-dom";
import { Button } from "../../button";
import { Title } from "../../title";
import { List } from "../../list";
import { Controls } from "../../controls";
import { useState } from "react";
import { CharacterSelection } from "../../character-select";
import { PlayersStage } from "../../players-stage";

const StartPage = () => {
  const [, setGameStage] = useGlobalState("gameStage");
  const [language, setLanguage] = useGlobalState("language");

  const { t } = useTranslation();
  return (
    <MainLayout
      main={
        <CircleButton onClick={() => setGameStage("setup01")}>
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

const Setup01 = () => {
  const [, setGameStage] = useGlobalState("gameStage");
  const { t } = useTranslation();
  const [isAllChecked, setIsAllChecked] = useState(false);
  return (
    <MainLayout
      top={<Title>Setup 01</Title>}
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
            onClick={() => setGameStage("setup02")}
          >
            next
          </Button>
        </Controls>
      }
    />
  );
};

const Setup02 = () => {
  const [, setGameStage] = useGlobalState("gameStage");
  const { t } = useTranslation();
  const [isAllChecked, setIsAllChecked] = useState(false);

  return (
    <MainLayout
      top={<Title>Setup 02</Title>}
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
          <Button onClick={() => setGameStage("setup01")}>{t("back")}</Button>
          <Button
            disabled={!isAllChecked}
            onClick={() => setGameStage("add-players")}
          >
            {t("next")}
          </Button>
        </Controls>
      }
    />
  );
};

const AddPlayers = () => {
  const [, setGameStage] = useGlobalState("gameStage");
  const [players] = useGlobalState("players");
  const { t } = useTranslation();

  return (
    <MainLayout
      top={<Title>{t("add_players.title")}</Title>}
      main={<CharacterSelection />}
      bottom={
        <Controls>
          <Button onClick={() => setGameStage("setup02")}>{t("back")}</Button>
          <Button
            disabled={!players[0] || !players[1]}
            onClick={() => setGameStage("players-stage")}
          >
            {t("next")}
          </Button>
        </Controls>
      }
    />
  );
};

const PlayersStagePage = () => {
  const [, setGameStage] = useGlobalState("gameStage");
  const [players] = useGlobalState("players");
  const { t } = useTranslation();

  return (
    <MainLayout
      top={<Title>{t("players_stage.title")}</Title>}
      main={<PlayersStage />}
      bottom={
        <Controls>
          <Button onClick={() => setGameStage("setup02")}>{t("back")}</Button>
          <Button
            disabled={!players[0] || !players[1]}
            onClick={() => setGameStage("add-players")}
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
    case "setup01":
      return <Setup01 />;
    case "setup02":
      return <Setup02 />;
    case "add-players":
      return <AddPlayers />;
    case "players-stage":
      return <PlayersStagePage />;
    default:
      return <StartPage />;
  }
};
