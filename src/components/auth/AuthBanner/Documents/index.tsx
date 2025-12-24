import { StyledDocumentsAuthBanner } from "./styles";

const DocumentsAuthBanner = () => {
  return (
    <StyledDocumentsAuthBanner>
      <div className="image"></div>
      <div className="text">
        <h3 className="title bold">
          <span>Para finalizar seu cadastro, você precisa</span>
          <span>enviar a documentação ao lado</span>
        </h3>
        <p>
          Após o envio, nosso time de backoffice vai analisar a documentação em
          até 4 dias e você receberá um e-mail com todos os detalhes.
        </p>
      </div>
    </StyledDocumentsAuthBanner>
  );
};

export { DocumentsAuthBanner };
