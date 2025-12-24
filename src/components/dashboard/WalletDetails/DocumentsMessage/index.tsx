import { StyledDocumentsMessage } from "./styles";
import { BsClock, BsCheck2Circle } from "react-icons/bs";
import { DocMessageProps } from "../types";

const DocumentsMessage = (props: DocMessageProps) => {
  const { type } = props;

  return (
    <StyledDocumentsMessage {...props}>
      {type === "analysis" ? <Analysis /> : <Validated />}
    </StyledDocumentsMessage>
  );
};

const Analysis = () => (
  <>
    <BsClock size={32} color="white" />
    <div>
      <h3 className="bold">Seus documentos ainda estão em fase de análise</h3>
      <p>
        Enquanto o status dos seus documentos não estiverem aprovados, você não
        poderá fazer a compra de nenhuma fração em nosso portal
      </p>
    </div>
  </>
);

const Validated = () => (
  <>
    <BsCheck2Circle size={32} color="white" />
    <div>
      <h3 className="bold">Seus documentos foram validados com sucesso!</h3>
      <p>
        Enquanto o status dos seus documentos não estiverem aprovados, você não
        poderá fazer a compra de nenhuma fração em nosso portal
      </p>
    </div>
  </>
);

export { DocumentsMessage };
