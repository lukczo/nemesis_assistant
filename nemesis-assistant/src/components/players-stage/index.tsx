import { useDrawFromBag } from "../../helpers/bag";
import { NightStalker } from "../../shared-types";
import { ComponentProps, ReactNode, useState } from "react";
import "react-responsive-carousel/lib/styles/carousel.min.css"; // requires a loader
import { Carousel } from "react-responsive-carousel";
import cls from "./index.module.css";
import { useGlobalState } from "../../global-state";
import clsx from "clsx";

// interface PlayersStageProps {}

export const PlayersStage = (/* p: PlayersStageProps */) => {
  const [drawnStalker, setDrawnStalker] = useState<NightStalker | null>(null);
  const [players] = useGlobalState("players");
  const [bag] = useGlobalState("bag");

  const drawFromBag = useDrawFromBag(true);

  return (
    <div style={{ overflowY: "hidden" }}>
      <Carousel centerMode showStatus={false} showIndicators={false}>
        <Tile header={"Main"} leftEdge>
          {players.map((x) => {
            if (!x) return "";
            return (
              <div>
                {x?.name + " " + x?.character} <br />
              </div>
            );
          })}
        </Tile>
        <Tile header={"Woreczek"}>
          {drawnStalker === null ? "null" : drawnStalker}
          <br />
          <button onClick={() => setDrawnStalker(drawFromBag())}>
            LOSUJ POTWORA
          </button>
          <br />
          Monsters: {bag.length} <br />{" "}
          {bag.map((stalker) => (
            <div>
              {stalker}
              {stalker === null && "empty token"}
              <br />
            </div>
          ))}
        </Tile>
        <Tile header={"Laboratorium"} rightEdge>
          lalal
        </Tile>
      </Carousel>
    </div>
  );
};

type TileProps = {
  header?: ReactNode;
  leftEdge?: boolean;
  rightEdge?: boolean;
} & ComponentProps<"div">;

export const Tile = (p: TileProps) => {
  return (
    <div
      {...p}
      className={clsx([
        cls.tile,
        p.leftEdge && cls["left-edge"],
        p.rightEdge && cls["right-edge"],
      ])}
    >
      <div>
        <h2>{p.header}</h2>
      </div>
      {p.children}
    </div>
  );
};
