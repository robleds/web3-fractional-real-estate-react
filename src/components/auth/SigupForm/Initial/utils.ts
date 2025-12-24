import { ChangeEvent, Dispatch, FormEvent, SetStateAction } from "react";
import V1Api from "../../../../services/V1Api";
import { InitialSignup, InitialSignupCheckboxes, SignupCheckboxes, SignupFields } from "../../types";

export const handleSubmit = async (
  event: FormEvent, fields: InitialSignup,
  checkboxes: InitialSignupCheckboxes,
  phone: string,
  setPhone: Dispatch<SetStateAction<string>>,
  setFields: Dispatch<SetStateAction<InitialSignup>>,
  setCheckboxes: Dispatch<SetStateAction<InitialSignupCheckboxes>>,
  initialFields: InitialSignup,
  initialCheckboxes: InitialSignupCheckboxes,
  setStep: Dispatch<SetStateAction<number>>,
  user: any,
  setUser: any,
) => {
  event.preventDefault();

  let data = {
    firstName: fields.name,
    lastName: fields.lastname,
    type: "pf",
    phone,
    code: "",
    pf: { cpf: "", birthday: "" },
    questions: {
      isRegularInvestor: "0",
      marketExpLevel: "1",
      patrimonyLevel: "1",
      isPropOwner: "0"
    }
  }

  try {
    let user = (await V1Api.getUserData()).user;
    const add = user?.address ? { address: user?.address } : {};
    data = { ...data, ...add };
    await V1Api.submitUserData(data);
    user = (await V1Api.getUserData()).user;

    localStorage.setItem('@brix/user', JSON.stringify(user));
    setUser(user);
    setStep(1);
  }
  catch (err) {
    alert("Algo deu errado! Tente novamente!");
  }

  setFields(initialFields);
  setCheckboxes(initialCheckboxes);
  setPhone("");

};

export const handleTextChange = (
  event: ChangeEvent<HTMLSelectElement | HTMLInputElement>,
  fields: InitialSignup,
  setFields: Dispatch<SetStateAction<InitialSignup>>
) => {
  const target = event.target;
  const name = target.id as SignupFields;
  const newFields = { ...fields };

  newFields[name] = target.value;

  setFields(newFields);
};

export const handleCheckboxChange = (
  event: ChangeEvent<HTMLInputElement>,
  checkboxes: InitialSignupCheckboxes,
  setCheckboxes: Dispatch<SetStateAction<InitialSignupCheckboxes>>
) => {
  const target = event.target;
  const name = target.id as SignupCheckboxes;
  const newCheckboxes = { ...checkboxes };

  newCheckboxes[name] = target.checked;

  setCheckboxes(newCheckboxes);
};

export const sendSMS = async (phone: string) => {
  try {
    const sms = await V1Api.startSMSValidation(phone);
    sms?.error === "ALREADY_VALIDATED" && alert("SMS já validado!");
    sms?.status === true && alert("SMS enviado com sucesso!");
    const code = prompt("Digite o código recebido por SMS:") || '';
    await V1Api.submitSMSValidation(code);
  }
  catch (err) {
    alert("Algo deu errado! Tente novamente!");
  }
}

export const populateData = async (
  setFields: Dispatch<SetStateAction<InitialSignup>>,
  setPhone: Dispatch<SetStateAction<string>>
  ) => {
    const user = (await V1Api.getUserData()).user;

    setPhone(`+55${user.phone}`);
    setFields({
      name: user.firstName,
      lastname: user.lastName,
      type: "pf",
      interest: "investir",
    });
}