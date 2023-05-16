import { ComponentProps } from "react";
import cls from "./index.module.css";

type TitleProps = ComponentProps<"h1">;

export const Title = (p: TitleProps) => {
  return <h1 className={cls.header}>{p.children}</h1>;
};
