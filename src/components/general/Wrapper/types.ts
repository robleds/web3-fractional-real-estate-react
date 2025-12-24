import { ReactNode } from "react";

export type WrapperProps = {
  children: ReactNode;
  horizontal?: true;
  justify?: string;
  align?: string;
}