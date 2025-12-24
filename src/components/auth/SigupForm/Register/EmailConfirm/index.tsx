import { NavBar } from "../../../../general/NavBar";
import { resendEmailVerification } from "../utils";
import { StyledEmailConfirm } from "./styles";

const EmailConfirm = () => {
  return (
    <StyledEmailConfirm>
      <NavBar />
      <h1 className="bold">Confirmação de email</h1>
      <p>Acesse seu email para continuar o cadastro</p>
      <h2 className="bold">Não recebeu o email de verificação?</h2>
      <button onClick={resendEmailVerification}>
        Reenviar email de verificação
      </button>
    </StyledEmailConfirm>
  );
};

export { EmailConfirm };
