import { StyledValueCard } from "./styles";
import { ValueCardProps } from "../types";

const ValueCard = (props: ValueCardProps) => {
  const { category, value } = props;

  return (
    <StyledValueCard>
      <p>{category === "invested" ? "Valor investido" : "Valor recebido"}</p>
      <span className={`${category} bold`}>
        {value.toLocaleString("pt-BR", { style: "currency", currency: "BRL" })}
      </span>
    </StyledValueCard>
  );
};

export { ValueCard };
