import { PropsWithChildren, ReactNode } from "react";
import "react-responsive-carousel/lib/styles/carousel.min.css"; // requires a loader
import { Carousel } from "react-responsive-carousel";
import cls from "./index.module.css";
import clsx from "clsx";
import { Nest } from "../nest";
import { useTranslation } from "react-i18next";
import { Title } from "../title";
import { Dashboard } from "../dashboard";

export const PlayersStage = () => {
  const { t } = useTranslation();

  return (
    <div style={{ overflowY: "hidden" }}>
      <Carousel centerMode showStatus={false} showIndicators={false} showThumbs={false}>
        <Tile header={"Main"} leftEdge>
          <Dashboard />
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
} & PropsWithChildren;

export const Tile = (p: TileProps) => {
  const {leftEdge} = p
  return (
    <div
      className={clsx([
        cls.tile,
        leftEdge && cls["left-edge"],
        p.rightEdge && cls["right-edge"],
      ])}
    >
      <div>
        <Title secondary>{p.header}</Title>
      </div>
      {p.children}
    </div>
  );
};
