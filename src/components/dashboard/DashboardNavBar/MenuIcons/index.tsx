import { MenuIconsProps } from "../types";
import { StyledMenuIcons } from "./styles";

const MenuIcons = (props: MenuIconsProps) => {
  const { children } = props;

  return <StyledMenuIcons>{children}</StyledMenuIcons>;
};

export { MenuIcons };
