import axios from "axios";
import { NextRouter } from "next/router";
import { ChangeEvent, Dispatch, FormEvent, SetStateAction } from "react";
import { InitialRegister, RegisterFields } from "../../types";

const handleSubmit = (
  event: FormEvent,
  fields: InitialRegister,
  setFields: Dispatch<SetStateAction<InitialRegister>>,
  initialFields: InitialRegister,
  router: NextRouter,
  setDisabled: Dispatch<SetStateAction<boolean>>
) => {
  event.preventDefault();
  const { email, password, confirmPassword } = fields;
  const passwordMatch = password === confirmPassword;
  setDisabled(true);

  if (passwordMatch) {
    return axios
      .post('https://bricks.rioblocks.io/v1/signup', { email, password })
      .then(res => {
        const status = res.data.status;
        localStorage.setItem('@brix/email', email);
        status ? router.push('/confirmar-email') : alert("Email já cadastrado");
        setDisabled(false);
      })
      .catch(err => {
        setFields(initialFields);
        alert("Algo deu errado! Tente novamente!");
        setDisabled(false);
      });
  }

  alert("As senhas devem ser iguais!");
  setDisabled(false);
};

const handleChange = (
  event: ChangeEvent<HTMLInputElement>,
  fields: InitialRegister,
  setFields: Dispatch<SetStateAction<InitialRegister>>
) => {
  const target = event.target;
  const name = target.id as RegisterFields;
  const newFields = { ...fields };
  newFields[name] = target.value;

  setFields(newFields);
};

const resendEmailVerification = () => {
  const email = localStorage.getItem('@brix/email');
  axios
    .post('https://bricks.rioblocks.io/v1/resendEmailVerification', { email })
    .then(() => {
      alert("Email enviado com sucesso!");
    })
    .catch(() => alert("Algo deu errado! Tente novamente!"));
};

export { handleSubmit, handleChange, resendEmailVerification };