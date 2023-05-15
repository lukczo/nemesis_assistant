import { ComponentProps } from "react";
import cls from "./index.module.css";

type HeaderProps = ComponentProps<"h1">;

export const Header = (p: HeaderProps) => {
  return <h1 className={cls.header}>{p.children}</h1>;
};
