import { Dispatch, ReactNode, SetStateAction } from "react";

export type LoginFields = "email" | "password";
export type ResetPassFields = "password" | "confirmPassword";
export type RegisterFields = "email" | "password" | "confirmPassword";
export type SignupFields = "name" | "lastname" | "type" | "interest";
export type ComplementarySignupFields = "country" | "CEP" | "address" | "number" | "complement" | "district" | "city" | "state";
export type SignupCheckboxes = "privacy" | "communications";

export type InitialLogin = {
  email: string;
  password: string;
};

export type resetPassForm = {
  password: string;
  confirmPassword: string;
};

export type InitialRegister = {
  email: string;
  password: string;
  confirmPassword: string;
};

export type InitialSignup = {
  name: string;
  lastname: string;
  type: string;
  interest: string;
};

export type ComplementarySignup = {
  country: string;
  CEP: string;
  address: string;
  number: string;
  complement: string;
  district: string;
  city: string;
  state: string;
}

export type InitialSignupCheckboxes = {
  privacy: boolean,
  communications: boolean,
};

export type SignupFormProps = {
  setStep: Dispatch<SetStateAction<number>>;
  children?: ReactNode;
};

export type resetPassFormProps = {
  token: string;
}
