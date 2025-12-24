import { Dispatch, FormEvent, SetStateAction, useState } from "react";
import V1Api from "../../../../services/V1Api";
import { Button } from "../../../general/Button";

type RecoverProps = {
  setEmailSent: Dispatch<SetStateAction<boolean>>;
};

const RecoverForm = (props: RecoverProps) => {
  const { setEmailSent } = props;
  const [email, setEmail] = useState("");
  const [disabled, setDisabled] = useState(false);

  const handleSubmit = async (event: FormEvent) => {
    event.preventDefault();
    setDisabled(true);

    try {
      await V1Api.recoverPassword(email);
      alert("Email enviado com sucesso!");
      setEmailSent(true);
    } catch (err) {
      alert("Algo deu errado! Tente novamente!");
    }

    setDisabled(false);
    setEmail("");
  };

  return (
    <div className="center">
      <p>Preencha seu email abaixo para redefinir sua senha:</p>
      <form onSubmit={handleSubmit}>
        <fieldset>
          <div className="input">
            <input
              type="text"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
            />
          </div>
        </fieldset>
        <Button type="submit" height={50}>
          Enviar email
        </Button>
      </form>
    </div>
  );
};

export { RecoverForm };
