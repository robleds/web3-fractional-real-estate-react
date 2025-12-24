import { StyledConfirmationSignupBanner } from "./styles";
import enotariado from "../../../../assets/images/logo-e-notariado.png";
import Image from "next/image";

const ConfirmationSignupBanner = () => {
  return (
    <StyledConfirmationSignupBanner>
      <div className="image">
        <div className="enotariado">
          <Image
            src={enotariado}
            alt="Logo E-notariado"
            width={132}
            height={45}
            layout="responsive"
          />
        </div>
      </div>
      <div className="text">
        <h3 className="title bold">Seus documentos foram enviados e agora?</h3>
        <ul className="steps">
          <li>
            <div className="number">1</div>
            <p>Você receberá um e-mail com os detalhes para acessar o portal do e-notariado</p>
          </li>
          <li>
            <div className="number">2</div>
            <p>Preencha seus dados. Importante aqui que você já tenha sua assinatura digital devidamente registrada com reconhecimento facial.</p>
          </li>
          <li>
            <div className="number">3</div>
            <p>Acompanhe o status e quando estiver aprovado você receberá um e-mail</p>
          </li>
        </ul>
      </div>
    </StyledConfirmationSignupBanner>
  );
};

export { ConfirmationSignupBanner };
