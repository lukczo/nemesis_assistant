import { ComponentProps } from "react";
import cls from "./index.module.css";

type ControlsProps = ComponentProps<"div">;

export const Controls = (p: ControlsProps) => {
  const { children } = p;
  return (
    <div {...p} className={cls.container}>
      {children}
    </div>
  );
};
