import { ComponentProps } from "react";
import cls from "./index.module.css";

type ButtonProps = {
  onClick?: () => void;
} & ComponentProps<"button">;

export const Button = (p: ButtonProps) => {
  const { onClick } = p;
  return (
    <button {...p} onClick={onClick} className={cls.button}>
      {p.children}
    </button>
  );
};
