import { getCities } from "@brazilian-utils/brazilian-utils";
import { ChangeEvent, Dispatch, FormEvent, SetStateAction } from "react";
import V1Api from "../../../../services/V1Api";
import { ComplementarySignup, ComplementarySignupFields } from "../../types";

export const handleSubmit = async (
  event: FormEvent, fields: ComplementarySignup,
  setFields: Dispatch<SetStateAction<ComplementarySignup>>,
  initialFields: ComplementarySignup,
  setStep: Dispatch<SetStateAction<number>>,
  setUser: any
) => {
  event.preventDefault();

  try {
    const { city, country, complement, CEP, address, district, number, state } = fields;
    let user = (await V1Api.getUserData()).user;

    const data = {
      firstName: user.firstName,
      lastName: user.lastName,
      address: {
        country,
        zip_code: CEP.replace('-', ''),
        state,
        city,
        neighborhood: district,
        street: address,
        number,
        complement
      }
    };

    const userInfo = await V1Api.submitUserData(data);
    user = (await V1Api.getUserData()).user;

    localStorage.setItem('@brix/user', JSON.stringify(user));
    setUser(user);
  }
  catch (err) {
    alert("Algo deu errado! Tente novamente!");
  }

  setFields(initialFields);
  setStep(2);
};

export const handleTextChange = (
  event: ChangeEvent<HTMLSelectElement | HTMLInputElement>,
  fields: ComplementarySignup,
  setFields: Dispatch<SetStateAction<ComplementarySignup>>
) => {
  const target = event.target;
  const name = target.id as ComplementarySignupFields;
  const newFields = { ...fields };

  newFields[name] = target.value;

  setFields(newFields);
};

export const populateData = async (
  setFields: Dispatch<SetStateAction<ComplementarySignup>>
) => {
  const {
    country,
    zip_code,
    state,
    city,
    neighborhood,
    street,
    number,
    complement
  } = (await V1Api.getUserData()).user?.address || {
    country: "Brasil",
    CEP: "",
    address: "",
    number: "",
    complement: "",
    district: "",
    city: getCities("AC")[0],
    state: "Acre",
  };

  setFields({
    country,
    CEP: zip_code,
    address: street,
    number,
    complement,
    district: neighborhood,
    city,
    state,
  });
}