import cls from "./index.module.css";

export default function Spinner() {
  return (
    <div className={cls.container}>
      <div className={cls.spinner}></div>;
    </div>
  );
}
