import { ComponentProps } from "react";
import { useGlobalState } from "../../global-state";
import { Displayer } from "../displayer";
import cls from "./index.module.css";
import { useTranslation } from "react-i18next";

export const Dashboard = () => {
  const [players] = useGlobalState("players");
  const { t } = useTranslation();

  return (
    <div className={cls.container}>
      <div>
        <Displayer>
          {players.map((player) => {
            if (!player) return;

            return (
              <Displayer className={cls.summary}>
                <Paragraph>
                  {t("characters.name")}: {player.name}
                </Paragraph>
                <Paragraph>
                  {t("characters.class")}: {t("characters." + player.character)}
                </Paragraph>
                <Paragraph>
                  {t("characters.knowledge")}: {player.knowledge}
                </Paragraph>
              </Displayer>
            );
          })}
        </Displayer>
      </div>
    </div>
  );
};

type ParagraphProps = ComponentProps<"p">;

export const Paragraph = (p: ParagraphProps) => {
  return <p className={cls.paragraph}> {p.children}</p>;
};
