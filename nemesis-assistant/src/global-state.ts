import { createGlobalState } from "react-hooks-global-state";
import {
  CharacterClasses,
  GameStage,
  NightStalkerPool,
  PlayersSelection,
} from "./shared-types";
import { NIGHT_STALKERS_BREEDS } from "./global-constants";

export type GlobalState = {
  language: "polish" | "english";
  gameStage: GameStage;
  players: PlayersSelection;
  availableCharacters: CharacterClasses[];
  bag: NightStalkerPool;
};

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
  bag: [
    NIGHT_STALKERS_BREEDS.larva,
    NIGHT_STALKERS_BREEDS.larva,
    NIGHT_STALKERS_BREEDS.larva,
    NIGHT_STALKERS_BREEDS.larva,
    NIGHT_STALKERS_BREEDS.creeper,
    NIGHT_STALKERS_BREEDS.adult,
    NIGHT_STALKERS_BREEDS.adult,
    NIGHT_STALKERS_BREEDS.adult,
    NIGHT_STALKERS_BREEDS.queen,
    null,
  ],
};

export const { useGlobalState } = createGlobalState(initialState);
