import { StyledLoginForm } from "./styles";
import Link from "next/link";
import { BsEyeSlash } from "react-icons/bs";
import { FormEvent, FormEventHandler, useContext, useState } from "react";
import { handleChange, handleSubmit } from "./utils";
import { Button } from "../../general/Button";
import { useRouter } from "next/router";
import { UserContext } from "../../../contexts/UserContext";
import Loader from "react-loader-spinner";
import { NavBar } from "../../general/NavBar";

const LoginForm = () => {
  const [disabled, setDisabled] = useState(false);
  const [viewPassword, setViewPassword] = useState(false);
  const initialFields = {
    email: "",
    password: "",
  };
  const [fields, setFields] = useState(initialFields);
  const { setUser } = useContext(UserContext);
  const router = useRouter();

  const handleLogin = (event: FormEvent) => {
    handleSubmit(
      event,
      fields,
      setFields,
      initialFields,
      router,
      setUser,
      setDisabled
    );
  };

  return (
    <StyledLoginForm>
      <NavBar />
      <form onSubmit={handleLogin}>
        <h1 className="bold">Faça seu login abaixo</h1>

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
        </fieldset>

        <Link href="/recuperar-senha">
          <a className="forgot-password">Esqueci minha senha</a>
        </Link>

        <Button
          type="submit"
          className="submit"
          height={65}
          disabled={disabled}
        >
          {disabled ? (
            <Loader type="ThreeDots" color="#fff" height={65} width={70} />
          ) : (
            "Entrar"
          )}
        </Button>

        <Link href="/registro">
          <a className="bold underline">Quero me cadastrar</a>
        </Link>
        <p>Todos os direitos reservados © 2021. Brix Investimentos.</p>
      </form>
    </StyledLoginForm>
  );
};

export { LoginForm };
