import { useState } from "react";
import { NavBar } from "../../general/NavBar";
import { RecoverForm } from "./RecoverForm";
import { StyledRecoverPassword } from "./styles";

const RecoverPassword = () => {
  const [emailSent, setEmailSent] = useState(false);

  return (
    <StyledRecoverPassword>
      <NavBar />
      <h1 className="bold">Redefinição de senha</h1>
      {emailSent ? (
        <p>Acesse seu email para redefinir sua senha</p>
      ) : (
        <RecoverForm setEmailSent={setEmailSent} />
      )}
    </StyledRecoverPassword>
  );
};

export { RecoverPassword };
