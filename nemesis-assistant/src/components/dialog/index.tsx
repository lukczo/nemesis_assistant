import { ComponentProps } from "react";
import cls from "./index.module.css";
import clsx from "clsx";

type DialogProps = ComponentProps<"div"> & {
  isShown: boolean;
};
export default function Dialog(p: DialogProps) {
  return p.isShown ? (
    <div className={clsx([cls.container, p.className])}>{p.children}</div>
  ) : (
    <></>
  );
}
