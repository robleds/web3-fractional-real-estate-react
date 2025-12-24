import { PropertyProps } from "../types";
import { StyledProperty } from "./styles";
import { BsClock, BsCheck2Circle } from "react-icons/bs";

const Property = (props: PropertyProps) => {
  const { name, value, owned, status, total, index } = props;

  return (
    <StyledProperty className={index === 1 ? "last" : ""}>
      <div className="start-info">
        <div>
          <h5 className="bold">{name}</h5>
          <span className="fractions">
            {owned} de {total} frações
          </span>
        </div>
        <span className="bold value">
          {value.toLocaleString("pt-br", {
            style: "currency",
            currency: "BRL",
          })}
        </span>
      </div>
      <div className="prop-status">
        <span className={status}>
          {status === "done" ? (
            <>
              <BsCheck2Circle size={14} /> Concluído
            </>
          ) : (
            <>
              <BsClock size={12} /> Em aprovação
            </>
          )}
        </span>
        <p>
          A próxima etapa do processo é finalizar a escritura com o nosso
          parceiro e-notariado. E para isso, siga exatamente as orientações
          abaixo.
        </p>
      </div>
    </StyledProperty>
  );
};

export { Property };
