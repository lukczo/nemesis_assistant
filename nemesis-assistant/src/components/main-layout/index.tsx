import { ReactNode } from "react";
import cls from "./index.module.css";

interface MainLayoutProps {
  top?: ReactNode;
  main: ReactNode;
  bottom?: ReactNode;
}

export const MainLayout = (p: MainLayoutProps) => {
  return (
    <div className={cls.container}>
      <div className={cls["top"]}>{p.top}</div>
      <div className={cls["main"]}>{p.main}</div>
      <div className={cls["bottom"]}>{p.bottom}</div>
      <div className={cls.overlay} />
    </div>
  );
};
