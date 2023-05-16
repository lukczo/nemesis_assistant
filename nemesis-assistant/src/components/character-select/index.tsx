import { CharacterClasses, Player, useGlobalState } from "../../global-state";
import { FormEvent, useMemo, useState } from "react";
import cls from "./index.module.css";
import { useTranslation } from "react-i18next";

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
  const [selectedChar, setSelectedChar] = useState<CharacterClasses>(
    p.player.character
  );

  const playerModified = useMemo(() => {
    return { ...p.player, name: newName, character: selectedChar };
  }, [newName, players, p.player, selectedChar]);

  const handleAddPlayer = (e: FormEvent) => {
    e.preventDefault();
    setTimeout(() => {
      const currentPlayers: [
        Player | undefined,
        Player | undefined,
        Player | undefined,
        Player | undefined,
        Player | undefined
      ] = [...players];
      currentPlayers[p.player.id] = playerModified;

      setPlayers(currentPlayers);
    }, 600);
  };

  return (
    <div>
      <form onSubmit={handleAddPlayer}>
        <label>
          <input
            type="text"
            onChange={(ev) => setNewName(ev.currentTarget.value)}
            placeholder={t("enter_player_name") || undefined}
            onBlur={handleAddPlayer}
          />
          <select
            onChange={(ev) => {
              setSelectedChar(ev.target.value as CharacterClasses);
            }}
          >
            {availableCharacters.map((char) => {
              return <option key={char}>{char}</option>;
            })}
          </select>
        </label>
      </form>
    </div>
  );
};

export const CharacterSelection = () => {
  const [players] = useGlobalState("players");

  return (
    <div className={cls.container}>
      <CharacterSelect player={player1} />
      {players[0] && <CharacterSelect player={player2} />}
      {players[1] && <CharacterSelect player={player3} />}
      {players[2] && <CharacterSelect player={player4} />}
      {players[3] && <CharacterSelect player={player5} />}
    </div>
  );
};
