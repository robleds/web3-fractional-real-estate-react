import { useRouter } from "next/router";
import { FormEvent, useState } from "react";
import V1Api from "../../../../services/V1Api";
import { Button } from "../../../general/Button";
import { BsEyeSlash } from "react-icons/bs";

const ChangeForm = () => {
  const [password, setPassword] = useState("");
  const [newPassword, setNewPassword] = useState("");
  const [confirmNewPassword, setConfirmNewPassword] = useState("");
  const [viewPassword, setViewPassword] = useState(false);
  const [viewPassword2, setViewPassword2] = useState(false);
  const [viewPassword3, setViewPassword3] = useState(false);
  const [disabled, setDisabled] = useState(false);
  const router = useRouter();

  const handleSubmit = async (event: FormEvent) => {
    event.preventDefault();
    setDisabled(true);

    if (newPassword !== confirmNewPassword)
      return alert("A confirmação da senha deve ser igual à senha!");

    try {
      await V1Api.updatePassword(password, newPassword);
      alert("Senha alterada com sucesso! Faça login novamente!");
      localStorage.removeItem("@brix/token");
      localStorage.removeItem("@brix/email");
      localStorage.removeItem("@brix/user");
      router.push("/login");
    } catch (err) {
      alert("Algo deu errado! Tente novamente!");
    }

    setDisabled(false);
    setPassword("");
    setNewPassword("");
    setConfirmNewPassword("");
  };

  return (
    <div className="center">
      <p>Preencha os dados abaixo para alterar sua senha:</p>
      <form onSubmit={handleSubmit}>
        <fieldset>
          <label htmlFor="password">Senha atual</label>
          <div className="password-input">
            <input
              required
              id="password"
              type={viewPassword ? "text" : "password"}
              autoComplete="off"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
            />
            <BsEyeSlash
              onClick={() => setViewPassword(!viewPassword)}
              size={14}
            />
          </div>
          <label htmlFor="new-password">Nova senha</label>
          <div className="password-input">
            <input
              required
              id="new-password"
              type={viewPassword2 ? "text" : "password"}
              autoComplete="off"
              value={newPassword}
              onChange={(e) => setNewPassword(e.target.value)}
            />
            <BsEyeSlash
              onClick={() => setViewPassword2(!viewPassword2)}
              size={14}
            />
          </div>
          <label htmlFor="confirm-new-password">Confirme a nova senha</label>
          <div className="password-input">
            <input
              required
              id="new-password"
              type={viewPassword3 ? "text" : "password"}
              autoComplete="off"
              value={confirmNewPassword}
              onChange={(e) => setConfirmNewPassword(e.target.value)}
            />
            <BsEyeSlash
              onClick={() => setViewPassword3(!viewPassword3)}
              size={14}
            />
          </div>
        </fieldset>
        <Button type="submit" height={50}>
          Alterar senha
        </Button>
      </form>
    </div>
  );
};

export { ChangeForm };
