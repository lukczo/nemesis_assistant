import { ComponentProps, ReactNode } from "react";
import "react-responsive-carousel/lib/styles/carousel.min.css"; // requires a loader
import { Carousel } from "react-responsive-carousel";
import cls from "./index.module.css";
import { useGlobalState } from "../../global-state";
import clsx from "clsx";
import { Nest } from "../nest";
import { useTranslation } from "react-i18next";

export const PlayersStage = () => {
  const [players] = useGlobalState("players");
  const { t } = useTranslation();

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
        <Tile header={t("stalkers.nest")}>
          <Nest />
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
