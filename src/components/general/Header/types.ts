import { Dispatch, SetStateAction } from "react";

type HeaderProps = {
  title: string;
  height?: number;
  url?: string;
  search?: true;
  horizontal?: true;
  align?: string;
  searchTerm?: string;
  setSearchTerm?: Dispatch<SetStateAction<string>>;
}

export type { HeaderProps };
