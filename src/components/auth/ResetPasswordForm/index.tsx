import { StyledResetPasswordForm } from "./styles";
import { BsEyeSlash } from "react-icons/bs";
import { FormEvent, useState } from "react";
import { handleChange, handleSubmit } from "./utils";
import { Button } from "../../general/Button";
import { useRouter } from "next/router";
import Loader from "react-loader-spinner";
import { resetPassFormProps } from "../types";

const ResetPasswordForm = (props: resetPassFormProps) => {
  const { token } = props;
  const [disabled, setDisabled] = useState(false);
  const [viewPassword, setViewPassword] = useState(false);
  const [viewConfirmPassword, setViewConfirmPassword] = useState(false);
  const initialFields = {
    password: "",
    confirmPassword: "",
  };
  const [fields, setFields] = useState(initialFields);
  const router = useRouter();

  const handleLogin = (event: FormEvent) => {
    handleSubmit(event, fields, setFields, initialFields, router, setDisabled, token);
  }

  return (
    <StyledResetPasswordForm>
      <form
        onSubmit={handleLogin}
      >
        <h1 className="bold">Defina sua nova senha</h1>

        <fieldset>
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
          <label htmlFor="password">Repita sua senha</label>
          <div className="password-input">
            <input
              required
              id="confirmPassword"
              type={viewConfirmPassword ? "text" : "password"}
              autoComplete="off"
              value={fields.confirmPassword}
              onChange={(event) => handleChange(event, fields, setFields)}
            />
            <BsEyeSlash
              onClick={() => setViewConfirmPassword(!viewConfirmPassword)}
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
            "Confirmar"
          )}
        </Button>

        <p>Todos os direitos reservados © 2021. Brix Investimentos.</p>
      </form>
    </StyledResetPasswordForm>
  );
};

export { ResetPasswordForm };
