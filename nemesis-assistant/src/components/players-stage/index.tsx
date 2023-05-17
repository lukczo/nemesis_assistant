import { useGlobalState } from "../../global-state";
import { NightStalker, NightStalkerPool } from "../../shared-types";
import { useState } from "react";

// interface PlayersStageProps {}

export const PlayersStage = (/* p: PlayersStageProps */) => {
  const [bag] = useGlobalState("bag");
  const [drawnStalker, setDrawnStalker] = useState<NightStalker | null>(null);

  const drawFromBag = () => {
    const bagCopy: NightStalkerPool = [...bag];

    if (bagCopy.length === 0) {
      return undefined; // Return undefined if the array is empty
    }

    const randomIndex = Math.floor(Math.random() * bagCopy.length);
    setDrawnStalker(bagCopy[randomIndex]);
  };

  return (
    <div>
      {drawnStalker === null ? "null" : drawnStalker}
      <br />
      <button onClick={() => drawFromBag()}>LOSUJ POTWORA</button>
    </div>
  );
};
