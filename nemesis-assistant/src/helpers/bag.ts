import { useCallback, useState } from "react";
import { NightStalker, NightStalkerPool } from "../shared-types";
import { useGlobalState } from "../global-state";

const substractFromBag = (
  bag: NightStalkerPool,
  tokenToRemove: NightStalker | null
) => {
  if (!tokenToRemove) return bag;

  const toRemoveIdx = bag.indexOf(tokenToRemove);

  bag.splice(toRemoveIdx, 1);
  return bag;
};

export const useDrawFromBag = (substractFromPool: boolean) => {
  const [bag, setBag] = useGlobalState("bag");
  const [drawnStalker, setDrawnStalker] = useState<NightStalker | null>(null);

  return useCallback(() => {
    const bagCopy: NightStalkerPool = [...bag];

    if (bagCopy.length === 0) {
      return null;
    }

    const randomIndex = Math.floor(Math.random() * bagCopy.length);
    const randomNightStalker = bagCopy[randomIndex];

    if (substractFromPool && randomNightStalker !== null) {
      setBag(substractFromBag(bag, randomNightStalker));
    }

    setDrawnStalker(randomNightStalker);

    return drawnStalker;
  }, [bag, drawnStalker]);
};

export const useAddToBag = () => {
  const [bag, setBag] = useGlobalState("bag");

  return useCallback(
    (stalker: NightStalker) => {
      setBag([...bag, stalker]);
    },
    [bag]
  );
};
