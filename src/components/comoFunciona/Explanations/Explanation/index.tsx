import { StyledExplanation } from "./styles";
import { BsBook } from "react-icons/bs";
import { ExplanationProps } from "./types";

const Explanation = (props: ExplanationProps) => {
  const { children, title } = props;

  return (
    <StyledExplanation>
      <BsBook size={20} color="#727272" />
      <h3 className="bold">{ title }</h3>
      <p>{ children }</p>
    </StyledExplanation>
  );
};

export { Explanation };
