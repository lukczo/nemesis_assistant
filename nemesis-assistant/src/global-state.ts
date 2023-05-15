import { createGlobalState } from "react-hooks-global-state";

export type GlobalState = {
  language: "polish" | "english";
  gameStage: GameStage;
};

export type GameStage = "start" | "board-setup-map" | "board-setup-players";

const initialState: GlobalState = { language: "polish", gameStage: "start" };

export const { useGlobalState } = createGlobalState(initialState);
