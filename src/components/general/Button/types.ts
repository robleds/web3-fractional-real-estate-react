import { ReactNode } from "react";

export type ButtonProps = {
  children: ReactNode;
  className?: string;
  width?: number;
  height: number;
  bgColor?: string;
  color?: string;
  type: "button" | "submit";
  disabled?: boolean;
};
