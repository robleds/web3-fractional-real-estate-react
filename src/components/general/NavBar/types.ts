import { ReactNode } from "react";

type NavBarProps = {
  navigation?: true;
  login?: true;
  center?: true;
  children?: ReactNode;
  bgColor?: string;
  height?: number;
};

export type { NavBarProps };
