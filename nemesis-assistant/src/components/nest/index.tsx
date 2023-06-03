import { useTranslation } from "react-i18next";
import { useDrawFromBag } from "../../helpers/bag";
import { NightStalker } from "../../shared-types";
import { Button } from "../button";
import { useState } from "react";
import Spinner from "../spinner";
import cls from "./index.module.css";
import { useGlobalState } from "../../global-state";
import { Displayer } from "../displayer";

export const Nest = () => {
  const [bag] = useGlobalState("bag");
  const [drawnStalker, setDrawnStalker] = useState<NightStalker | null>();
  const [isLoading, setIsLoading] = useState(false);
  const drawFromBag = useDrawFromBag(true);
  const { t } = useTranslation();

  const handleDrawStalker = (stalker: NightStalker | null) => {
    setIsLoading(true);
    setDrawnStalker(stalker);
    setTimeout(() => {
      setIsLoading(false);
    }, 600);
  };

  return (
    <div className={cls.container}>
      <div>{isLoading && <Spinner />}</div>
      <div className={cls["stalker-holder"]}>
        <Displayer>
          <p>
            {t("stalkers.stalkers_in_nest")}: {!isLoading && bag.length - 1}{" "}
          </p>
          {isLoading
            ? null
            : drawnStalker
            ? t("stalkers." + drawnStalker)
            : t("stalkers.no_stalker")}
          <Button
            disabled={isLoading}
            onClick={() => handleDrawStalker(drawFromBag())}
          >
            {t("players_stage.draw_stalker")}
          </Button>
        </Displayer>
      </div>
    </div>
  );
};
