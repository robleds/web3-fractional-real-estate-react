import { NextRouter } from "next/router";
import { ChangeEvent, Dispatch, FormEvent, SetStateAction } from "react";
import { ResetPassFields, resetPassForm } from "../types";
import V1Api from "../../../services/V1Api";

const handleSubmit = async (
  event: FormEvent,
  fields: resetPassForm,
  setFields: Dispatch<SetStateAction<resetPassForm>>,
  initialFields: resetPassForm,
  router: NextRouter,
  setDisabled: Dispatch<SetStateAction<boolean>>,
  token: string
) => {
  event.preventDefault();
  setDisabled(true);

  if (fields.password === fields.confirmPassword)
    try {
      await V1Api.resetPassword(token, fields.password);
      router.push('/login');
      setDisabled(false);
    }
    catch (err) {
      alert("Algo deu errado! Tente novamente!");
      setDisabled(false);
    }

  else alert("As senhas devem ser iguals");

  setFields(initialFields);
};

const handleChange = (event: ChangeEvent<HTMLInputElement>, fields: resetPassForm, setFields: Dispatch<SetStateAction<resetPassForm>>) => {
  const target = event.target;
  const name = target.id as ResetPassFields;
  const newFields = { ...fields };
  newFields[name] = target.value;

  setFields(newFields);
};

export { handleSubmit, handleChange };