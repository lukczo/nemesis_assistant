import { createGlobalState } from "react-hooks-global-state";

export type GlobalState = {
  language: "polish" | "english";
};

const initialState: GlobalState = { language: "polish" };

export const { useGlobalState } = createGlobalState(initialState);
