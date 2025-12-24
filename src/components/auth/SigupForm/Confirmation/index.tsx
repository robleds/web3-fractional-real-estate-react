import { StyledSignupConfirmation } from "./styles";
import Link from "next/link";
import { Steps } from "../Steps";
import { Button } from "../../../general/Button";
import { SignupFormProps } from "../../types";

const SignupConfirmation = (props: SignupFormProps) => {
  const { setStep, children } = props;
  return (
    <StyledSignupConfirmation>
      {children}
      <div>
        <h1 className="bold">Validação dos documentos</h1>

        <p>
          Assim que nossa equipe validar a sua documentação você poderá fazer os
          investimentos em nossas oportunidades.
        </p>
        <p>Enquanto isso, você pode navegar em nosso portal.</p>

        <Link href="/dashboard">
          <a>
            <Button height={50} width={180} className="submit" type="submit">
              Acessar portal
            </Button>
          </a>
        </Link>
      </div>
    </StyledSignupConfirmation>
  );
};

export { SignupConfirmation };
