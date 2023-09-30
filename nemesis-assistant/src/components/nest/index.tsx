import { useTranslation } from "react-i18next";
import { useDrawFromBag } from "../../helpers/bag";
import { NightStalker } from "../../shared-types";
import { Button } from "../button";
import { useState } from "react";
import Spinner from "../spinner";
import cls from "./index.module.css";
import { useGlobalState } from "../../global-state";
import { Displayer } from "../displayer";
import Popup from "reactjs-popup";

export const Nest = () => {
  const [bag] = useGlobalState("bag");
  const [drawnStalker, setDrawnStalker] = useState<NightStalker | null>();
  const [isLoading, setIsLoading] = useState(false);
  const drawFromBag = useDrawFromBag(true);
  const { t } = useTranslation();
  const [showAddStalker, setShowAddStalker] = useState(false)

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
      <AddStalker open={showAddStalker} onClose={() => setShowAddStalker(false)} />
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
          <div className={cls['button-container']}>
            <Button onClick={() => setShowAddStalker(true)}>
              Add to nest
            </Button>
            <Button
              disabled={isLoading}
              onClick={() => handleDrawStalker(drawFromBag())}
            >
              {t("players_stage.draw_stalker")}
            </Button>
          </div>
        </Displayer>
      </div>
    </div>
  );
};


const AddStalker = ({ open, onClose }: { open: boolean, onClose: () => void }) => {
  const overlay = { backgroundColor: ' rgba(0,0,0, 0.80)' }
  return (
    <Popup className={cls.modal} open={open} position="top center" onClose={onClose} closeOnDocumentClick={false} modal overlayStyle={overlay}>
      <Displayer >Popup content here !!
        <Button onClick={onClose}>Close</Button>
      </Displayer>
    </Popup>
  );
};


