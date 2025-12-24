import { ReactNode } from "react";

type MemberProps = {
  picture: StaticImageData;
  name: string;
  role: string;
  children: ReactNode;
};

export type { MemberProps };
