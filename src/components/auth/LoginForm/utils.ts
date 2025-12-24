import axios from "axios";
import { NextRouter } from "next/router";
import { ChangeEvent, Dispatch, FormEvent, SetStateAction } from "react";
import { InitialLogin, LoginFields } from "../types";
import jwt from "jsonwebtoken";
import V1Api from "../../../services/V1Api";

const handleSubmit = async (
  event: FormEvent,
  fields: InitialLogin,
  setFields: Dispatch<SetStateAction<InitialLogin>>,
  initialFields: InitialLogin,
  router: NextRouter,
  setUser: any,
  setDisabled: Dispatch<SetStateAction<boolean>>
) => {
  event.preventDefault();
  setDisabled(true);

  try {
    const token = await V1Api.login(fields);
    const user = (await V1Api.getUserData(token)).user;
    localStorage.setItem('@brix/token', token);
    localStorage.setItem('@brix/user', JSON.stringify(user));
    setUser(user);
    if(user?.firstName) {
      localStorage.setItem('@brix/step', '1');
      router.push('/dashboard')
     }
     else {
      localStorage.setItem('@brix/step', '0');
       router.push('/cadastro');
     }
    setDisabled(false);
  }
  catch (err) {
    alert("Algo deu errado! Tente novamente!");
    setDisabled(false);
  };

  setFields(initialFields);
};

const handleChange = (event: ChangeEvent<HTMLInputElement>, fields: InitialLogin, setFields: Dispatch<SetStateAction<InitialLogin>>) => {
  const target = event.target;
  const name = target.id as LoginFields;
  const newFields = { ...fields };
  newFields[name] = target.value;

  setFields(newFields);
};

export { handleSubmit, handleChange };