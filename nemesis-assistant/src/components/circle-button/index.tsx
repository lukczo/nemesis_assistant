import { ComponentProps } from "react";
import cls from "./index.module.css";

type CircleButtonProps = ComponentProps<"button">;

export const CircleButton = (p: CircleButtonProps) => {
  const { children } = p;
  return (
    <button {...p} className={cls.circle}>
      {children}
    </button>
  );
};
