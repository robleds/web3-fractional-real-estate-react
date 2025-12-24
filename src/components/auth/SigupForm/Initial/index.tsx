import { StyledInitialSignupForm } from "./styles";
import Link from "next/link";
import { ChangeEvent, useContext, useEffect, useState } from "react";
import { handleCheckboxChange, handleSubmit, handleTextChange, populateData, sendSMS } from "./utils";
import PhoneInput from "react-phone-number-input";
import { SignupFormProps } from "../../types";
import { Button } from "../../../general/Button";
import { UserContext } from "../../../../contexts/UserContext";
import { NavBar } from "../../../general/NavBar";

const InitialSignupForm = (props: SignupFormProps) => {
  const { setStep } = props;
  const [phone, setPhone] = useState("");
  const { user, setUser } = useContext(UserContext);
  const initialFields = {
    name: "",
    lastname: "",
    type: "pf",
    interest: "investir",
  };
  const initialCheckboxes = {
    privacy: false,
    communications: false,
  };
  const [fields, setFields] = useState(initialFields);
  const [checkboxes, setCheckboxes] = useState(initialCheckboxes);

  const handleTextFields = (
    event: ChangeEvent<HTMLSelectElement | HTMLInputElement>
  ) => handleTextChange(event, fields, setFields);

  const handleCheckboxFields = (event: ChangeEvent<HTMLInputElement>) =>
    handleCheckboxChange(event, checkboxes, setCheckboxes);

  useEffect(() => {
    populateData(setFields, setPhone);
  }, []);

  return (
    <StyledInitialSignupForm>
      <NavBar />
      <form
        onSubmit={(event) =>
          handleSubmit(
            event,
            fields,
            checkboxes,
            phone,
            setPhone,
            setFields,
            setCheckboxes,
            initialFields,
            initialCheckboxes,
            setStep,
            user,
            setUser
          )
        }
      >
        <h1 className="bold">Preencha os seus dados</h1>

        <fieldset>
          <div className="name-input input">
            <label htmlFor="name">Nome</label>
            <input
              required
              id="name"
              type="text"
              value={fields.name}
              onChange={handleTextFields}
            />
          </div>
          <div className="input">
            <label htmlFor="lastname">Sobrenome</label>
            <input
              required
              id="lastname"
              type="text"
              value={fields.lastname}
              onChange={handleTextFields}
            />
          </div>
          <div className="input">
            <label htmlFor="type">Tipo de cadastro</label>
            <select
              required
              id="type"
              value={fields.type}
              onChange={handleTextFields}
            >
              <option value="pf">Sou pessoa física</option>
              <option value="pj">Sou pessoa jurídica</option>
            </select>
          </div>
        </fieldset>

        <fieldset>
          <div className="input phone-input">
            <label htmlFor="phone">Celular</label>
            <PhoneInput
              defaultCountry="BR"
              value={phone}
              onChange={setPhone as any}
              countryCallingCodeEditable={false}
              international={false}
            />
            <div className="separator"></div>
            <button type="button" onClick={() => sendSMS(phone.replace('+55', ''))} className="send-sms bold">Enviar SMS</button>
          </div>

          <div className="input">
            <label htmlFor="interest">Qual o seu interesse no Brix?</label>
            <select
              required
              id="interest"
              value={fields.interest}
              onChange={handleTextFields}
            >
              <option value="investir">Quero investir</option>
              <option value="fracionar">Quero fracionar</option>
            </select>
          </div>
        </fieldset>

        <fieldset className="checkboxes">
          <div className="checkbox-input">
            <input
              required
              type="checkbox"
              checked={checkboxes.privacy}
              onChange={handleCheckboxFields}
              id="privacy"
            />
            <label htmlFor="privacy">
              Li e estou de acordo com os{" "}
              <span className="bold">Termos de Uso</span> e{" "}
              <span className="bold">Política de Privacidade</span>
            </label>
          </div>
          <div className="checkbox-input">
            <input
              type="checkbox"
              checked={checkboxes.communications}
              onChange={handleCheckboxFields}
              id="communications"
            />
            <label htmlFor="communications">Aceito receber comunicações</label>
          </div>
        </fieldset>

        <Button type="submit" className="submit" height={65}>
          Salvar
        </Button>
        <p>Todos os direitos reservados © 2021. Brix Investimentos.</p>
      </form>
    </StyledInitialSignupForm>
  );
};

export { InitialSignupForm };
