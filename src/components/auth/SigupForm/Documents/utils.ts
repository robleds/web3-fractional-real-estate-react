import { Dispatch, FormEvent, SetStateAction } from "react";
import V1Api from "../../../../services/V1Api";

export const handleSubmit = async (
  event: FormEvent,
  refs: any,
  setStep: Dispatch<SetStateAction<number>>,
  bank: any,
  type: any,
  account: any,
  agency: any,
) => {
  event.preventDefault();

  const bankRefs = {
    bank,
    type,
    account,
    agency
  }

  try {
    await V1Api.submitDocs(bankRefs);
    setStep(3);
  }
  catch (err) {
    alert("Algo deu errado! Tente novamente!");
  }

};

export const uploadFile = async (file: any, category: string) => {
  const data = new FormData();
  data.append('file', file);

  try {
    const res = await V1Api.uploadDocument(data, category);
    return true;
  }
  catch (err) {
    alert("Arquivo inválido ou já enviado!");
    return false;
  }
}
