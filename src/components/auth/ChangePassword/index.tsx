import { useState } from "react";
import { NavBar } from "../../general/NavBar";
import { ChangeForm } from "./ChangeForm";
import { StyledChangePassword } from "./styles";

const ChangePassword = () => {
  const [emailSent, setEmailSent] = useState(false);

  return (
    <StyledChangePassword>
      <NavBar />
      <h1 className="bold">Alterar senha</h1>
      {emailSent ? <p>Faça login com sua nova senha!</p> : <ChangeForm />}
    </StyledChangePassword>
  );
};

export { ChangePassword };
