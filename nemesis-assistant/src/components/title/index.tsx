import { ComponentProps } from "react";
import cls from "./index.module.css";
import clsx from "clsx";

type TitleProps = ComponentProps<"h1"> & {
  secondary?: boolean;
};

export const Title = (p: TitleProps) => {
  return (
    <h1 className={clsx([cls.header, p.secondary && cls.secondary])}>
      {p.children}
    </h1>
  );
};
