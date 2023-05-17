import { createGlobalState } from "react-hooks-global-state";

export type GlobalState = {
  language: "polish" | "english";
  gameStage: GameStage;
  players: PlayersSelection;
  availableCharacters: CharacterClasses[];
};

export type PlayersSelection = [
  Player | undefined,
  Player | undefined,
  Player | undefined,
  Player | undefined,
  Player | undefined
];

export type CharacterClasses =
  | "survivor"
  | "astrobiologist"
  | "cleaner"
  | "rabbit"
  | "watchman";

export type Player = {
  id: number;
  name?: string;
  character?: CharacterClasses;
  knowledge: number;
};

export type GameStage = "start" | "setup01" | "setup02" | "add-players";

const initialState: GlobalState = {
  language: "polish",
  gameStage: "start",
  players: [undefined, undefined, undefined, undefined, undefined],
  availableCharacters: [
    "survivor",
    "astrobiologist",
    "cleaner",
    "rabbit",
    "watchman",
  ],
};

export const { useGlobalState } = createGlobalState(initialState);
