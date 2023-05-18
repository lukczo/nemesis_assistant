import { useDrawFromBag } from "../../helpers/bag";
import { NightStalker } from "../../shared-types";
import { useState } from "react";

// interface PlayersStageProps {}

export const PlayersStage = (/* p: PlayersStageProps */) => {
  const [drawnStalker, setDrawnStalker] = useState<NightStalker | null>(null);

  const drawFromBag = useDrawFromBag(true);

  return (
    <div>
      {drawnStalker === null ? "null" : drawnStalker}
      <br />
      <button onClick={() => setDrawnStalker(drawFromBag())}>
        LOSUJ POTWORA
      </button>
    </div>
  );
};
