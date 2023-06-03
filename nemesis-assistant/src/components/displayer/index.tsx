import { ComponentProps } from "react";
import cls from "./index.module.css";
import clsx from "clsx";

type DisplayerProps = ComponentProps<"div"> & {};

export const Displayer = (p: DisplayerProps) => {
  const { children, className } = p;

  return (
    <div {...p} className={clsx([cls["displayer"], className])}>
      {children}
    </div>
  );
};
