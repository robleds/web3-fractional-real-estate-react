import { Dispatch, SetStateAction } from "react";

export type StepProps = {
  step: number;
  setStep: Dispatch<SetStateAction<number>>
};
