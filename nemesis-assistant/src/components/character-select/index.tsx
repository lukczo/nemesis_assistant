import { useGlobalState } from "../../global-state";
import { FormEvent, useMemo, useState, useEffect, useRef } from "react";
import cls from "./index.module.css";
import { useTranslation } from "react-i18next";
import { CharacterClasses, Player, PlayersSelection } from "../../shared-types";
import clsx from "clsx";
import Spinner from "../spinner";

let player1: Player = { id: 0, character: "survivor", knowledge: 3, name: "" };
let player2: Player = {
  id: 1,
  character: "astrobiologist",
  knowledge: 1,
  name: "",
};
let player3: Player = { id: 2, character: "cleaner", knowledge: 1, name: "" };
let player4: Player = { id: 3, character: "rabbit", knowledge: 3, name: "" };
let player5: Player = { id: 4, character: "watchman", knowledge: 1, name: "" };

interface CharacterSelectProps {
  player: Player;
}

export const CharacterSelect = (p: CharacterSelectProps) => {
  const { t } = useTranslation();
  const [players, setPlayers] = useGlobalState("players");
  const [availableCharacters] = useGlobalState("availableCharacters");
  const [newName, setNewName] = useState("");
  const [selectedChar, setSelectedChar] = useState<
    CharacterClasses | undefined
  >(p.player.character);
  const [isLoading, setIsLoading] = useState(false);

  const playerModified = useMemo(() => {
    return { ...p.player, name: newName, character: selectedChar };
  }, [newName, players, p.player, selectedChar]);

  const handleAddPlayer = (e: FormEvent) => {
    e.preventDefault();

    const currentPlayers: PlayersSelection = [...players];
    currentPlayers[p.player.id] = playerModified;
    setIsLoading(true);
    setTimeout(() => {
      setPlayers(currentPlayers);
      setIsLoading(false);
    }, 600);
  };

  const characterSpecificClass = useMemo(() => {
    return clsx(cls["character-tile"], {
      [cls.survivor]: selectedChar === "survivor",
      [cls.astrobiologist]: selectedChar === "astrobiologist",
      [cls.cleaner]: selectedChar === "cleaner",
      [cls.rabbit]: selectedChar === "rabbit",
      [cls.watchman]: selectedChar === "watchman",
    });
  }, [selectedChar, setSelectedChar]);

  return (
    <>
      {isLoading && <Spinner />}
      <form
        onSubmit={handleAddPlayer}
        className={clsx([characterSpecificClass, isLoading && cls.blocked])}
      >
        <label>
          <input
            className={cls.input}
            type="text"
            onChange={(ev) => setNewName(ev.currentTarget.value)}
            placeholder={t("enter_player_name") || undefined}
            onBlur={handleAddPlayer}
          />
          <span className={cls.separator} />
        </label>
        <select
          defaultValue={selectedChar}
          className={cls.select}
          onChange={(ev) => {
            setSelectedChar(ev.currentTarget.value as CharacterClasses);
          }}
        >
          {availableCharacters.map((char) => {
            return <option key={char}>{char}</option>;
          })}
        </select>
      </form>
    </>
  );
};

export const CharacterSelection = () => {
  const [players] = useGlobalState("players");

  const containerRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    if (!containerRef.current) return;
    containerRef.current.scrollIntoView({
      behavior: "smooth",
      block: "center",
    });
  }, [containerRef, players]);

  return (
    <div className={cls.container}>
      <CharacterSelect player={player1} />
      {players[0] && <CharacterSelect player={player2} />}
      {players[1] && <CharacterSelect player={player3} />}
      {players[2] && <CharacterSelect player={player4} />}
      {players[3] && <CharacterSelect player={player5} />}
      <div ref={containerRef} />
    </div>
  );
};
