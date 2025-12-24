import { StyledComplementarySignupForm } from "./styles";
import { ChangeEvent, useContext, useEffect, useState } from "react";
import { handleSubmit, handleTextChange, populateData } from "./utils";
import { SignupFormProps } from "../../types";
import { Steps } from "../Steps";
import { getCities, getStates } from "@brazilian-utils/brazilian-utils";
import { StateName } from "@brazilian-utils/brazilian-utils/dist/common/states";
import InputMask from "react-input-mask";
import { Button } from "../../../general/Button";
import BrasilApi from "../../../../services/BrasilApi";
import { UserContext } from "../../../../contexts/UserContext";

const ComplementarySignupForm = (props: SignupFormProps) => {
  const { setStep, children } = props;
  const { setUser } = useContext(UserContext);
  const initialFields = {
    country: "Brasil",
    CEP: "",
    address: "",
    number: "",
    complement: "",
    district: "",
    city: getCities("AC")[0],
    state: "Acre",
  };
  const [fields, setFields] = useState(initialFields);

  const handleTextFields = (
    event: ChangeEvent<HTMLSelectElement | HTMLInputElement>
  ) => handleTextChange(event, fields, setFields);

  const handleCEP = async (event: any) => {
    handleTextFields(event);
    const res = await BrasilApi.getCEPInfo(event.target.value);

    if (res) {
      setFields({
        ...fields,
        state: res.state,
        city: res.city,
        address: res.street,
        district: res.neighborhood,
        CEP: event.target.value,
      });
    }
  };

  useEffect(() => {
    populateData(setFields);
  }, []);

  return (
    <StyledComplementarySignupForm>
      {children}
      <form
        onSubmit={(event) =>
          handleSubmit(event, fields, setFields, initialFields, setStep, setUser)
        }
      >
        <h1 className="bold">Dados complementares</h1>

        <fieldset>
          <div className="input">
            <label htmlFor="country">País</label>
            <input
              required
              id="country"
              type="text"
              value={fields.country}
              disabled
              onChange={handleTextFields}
            />
          </div>
        </fieldset>

        <fieldset>
          <div className="input cep-input">
            <label htmlFor="CEP">CEP</label>
            <InputMask
              mask="99999-999"
              required
              id="CEP"
              value={fields.CEP}
              onChange={handleCEP}
            />
          </div>
          <div className="input">
            <label htmlFor="address">Endereço</label>
            <input
              required
              id="address"
              type="text"
              value={fields.address}
              onChange={handleTextFields}
            />
          </div>
        </fieldset>

        <fieldset>
          <div className="input">
            <label htmlFor="number">Número</label>
            <input
              required
              id="number"
              type="text"
              value={fields.number}
              onChange={handleTextFields}
            />
          </div>
          <div className="input">
            <label htmlFor="complement">Complemento</label>
            <input
              id="complement"
              type="text"
              value={fields.complement}
              onChange={handleTextFields}
            />
          </div>
          <div className="input">
            <label htmlFor="district">Bairro</label>
            <input
              required
              id="district"
              type="text"
              value={fields.district}
              onChange={handleTextFields}
            />
          </div>
        </fieldset>

        <fieldset>
          <div className="input">
            <label htmlFor="city">Cidade</label>
            <select
              required
              id="city"
              value={fields.city}
              onChange={handleTextFields}
            >
              {getCities(fields.state as StateName).map((city, idx) => (
                <option key={idx} value={city}>
                  {city}
                </option>
              ))}
            </select>
          </div>
          <div className="input state-input">
            <label htmlFor="state">Estado</label>
            <select
              required
              id="state"
              value={fields.state}
              onChange={handleTextFields}
            >
              {getStates().map((state) => (
                <option key={state.code} value={state.code}>
                  {state.name}
                </option>
              ))}
            </select>
          </div>
        </fieldset>

        <Button type="submit" className="submit" height={65}>
          Avançar
        </Button>
      </form>
    </StyledComplementarySignupForm>
  );
};

export { ComplementarySignupForm };
