import { StyledRegister } from "./styles";
import Link from "next/link";
import { BsEyeSlash } from "react-icons/bs";
import { FormEvent, useState } from "react";
import { handleChange, handleSubmit } from "./utils";
import { Button } from "../../../general/Button";
import { useRouter } from "next/router";
import Loader from "react-loader-spinner";
import { NavBar } from "../../../general/NavBar";

const Register = () => {
  const [disabled, setDisabled] = useState(false);
  const [viewPassword, setViewPassword] = useState(false);
  const [viewConfirmPass, setViewConfirmPass] = useState(false);
  const initialFields = {
    email: "",
    password: "",
    confirmPassword: "",
  };
  const [fields, setFields] = useState(initialFields);
  const router = useRouter();

  const handleLogin = (event: FormEvent) => {
    handleSubmit(event, fields, setFields, initialFields, router, setDisabled);
  };

  return (
    <StyledRegister>
      <NavBar />
      <form onSubmit={handleLogin}>
        <h1 className="bold">Faça seu registro abaixo</h1>

        <fieldset>
          <label htmlFor="email">E-mail</label>
          <input
            required
            id="email"
            type="email"
            value={fields.email}
            onChange={(event) => handleChange(event, fields, setFields)}
          />
          <label htmlFor="password">Senha</label>
          <div className="password-input">
            <input
              required
              id="password"
              type={viewPassword ? "text" : "password"}
              autoComplete="off"
              value={fields.password}
              onChange={(event) => handleChange(event, fields, setFields)}
            />
            <BsEyeSlash
              onClick={() => setViewPassword(!viewPassword)}
              size={14}
            />
          </div>
          <label htmlFor="confirmPassword">Repita sua senha</label>
          <div className="password-input">
            <input
              required
              id="confirmPassword"
              type={viewConfirmPass ? "text" : "password"}
              autoComplete="off"
              value={fields.confirmPassword}
              onChange={(event) => handleChange(event, fields, setFields)}
            />
            <BsEyeSlash
              onClick={() => setViewConfirmPass(!viewConfirmPass)}
              size={14}
            />
          </div>
        </fieldset>

        <Button
          type="submit"
          className="submit"
          height={65}
          disabled={disabled}
        >
          {disabled ? (
            <Loader type="ThreeDots" color="#fff" height={65} width={70} />
          ) : (
            "Registrar"
          )}
        </Button>

        <Link href="/login">
          <a className="bold underline">Já possuo uma conta</a>
        </Link>
        <p>Todos os direitos reservados © 2021. Brix Investimentos.</p>
      </form>
    </StyledRegister>
  );
};

export { Register };
