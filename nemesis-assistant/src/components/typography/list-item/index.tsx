import { ComponentProps } from "react";

type ListItemProps = ComponentProps<"li">;

export const ListItem = (p: ListItemProps) => {
  const { children } = p;
  return <li>{children}</li>;
};
