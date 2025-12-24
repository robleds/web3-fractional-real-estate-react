import { Dispatch, MutableRefObject, ReactNode, SetStateAction } from "react";

type RefType = MutableRefObject<HTMLInputElement> | undefined;

export type DocInputProps = {
  title: string;
  name: string;
  ref: RefType;
  setRef: Dispatch<SetStateAction<any>>;
  children: ReactNode;
  handleDocumentUpload: any;
};

export type AccInputProps = {
  title: string;
  children: ReactNode;
  bank?: any;
  setBank?: any;
  type?: any;
  setType?: any;
  account?: any;
  setAccount?: any;
  agency?: any;
  setAgency?: any;
};

export type BankRefInputProps = {
  title: string;
  children: ReactNode;
};
