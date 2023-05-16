import { ComponentProps, ReactNode, useState, useEffect } from "react";
import cls from "./index.module.css";
import clsx from "clsx";

type ListItemProps = ComponentProps<"li"> & {
  checked: boolean;
};

export const ListItem = (p: ListItemProps) => {
  const { children } = p;

  return (
    <li className={clsx([cls["listed-item"]], p.checked && cls.checked)} {...p}>
      {children}
    </li>
  );
};

type ListProps = {
  items: ReactNode[];
  onAllChecked: (checked: boolean) => void;
};

export const List = (p: ListProps) => {
  const [checkedIds, setCheckedIds] = useState<number[]>([]);

  const isChecked = (id: number) => checkedIds.includes(id);

  useEffect(() => {
    p.onAllChecked(checkedIds.length === p.items.length);
  }, [p.items, checkedIds]);

  const onCheckHandler = (id: number) => {
    if (isChecked(id)) {
      const selectedId = checkedIds.indexOf(id);
      const checkedIdsCopy = [...checkedIds];
      checkedIdsCopy.splice(selectedId, 1);

      setCheckedIds(checkedIdsCopy);
    } else {
      setCheckedIds([...checkedIds, id]);
    }
  };

  return (
    <ul className={cls["list"]}>
      {p.items.map((item, i) => (
        <span key={i}>
          <ListItem checked={isChecked(i)} onClick={() => onCheckHandler(i)}>
            {item}
          </ListItem>
        </span>
      ))}
    </ul>
  );
};
