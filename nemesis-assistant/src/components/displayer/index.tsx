import { ComponentProps } from "react";
import cls from "./index.module.css";
import clsx from "clsx";

type DisplayerProps = ComponentProps<"div"> & {};

export const Displayer = (p: DisplayerProps) => {
  const { children } = p;

  return (
    <div className={clsx([cls["displayer"]])} {...p}>
      {children}
    </div>
  );
};
