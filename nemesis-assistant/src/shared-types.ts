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

export type GameStage =
  | "start"
  | "setup01"
  | "setup02"
  | "add-players"
  | "players-stage";

export const nightStalkersTypes = [
  "larva",
  "creeper",
  "adult",
  "breeder",
  "queen",
] as const;

export type NightStalker = (typeof nightStalkersTypes)[number];

export type NightStalkerPool = (NightStalker | null)[];
