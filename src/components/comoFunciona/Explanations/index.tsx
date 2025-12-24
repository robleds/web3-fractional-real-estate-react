import { Wrapper } from "../../general/Wrapper";
import { explanations } from "./data";
import { Explanation } from "./Explanation";
import { StyledExplanations } from "./styles";

const Explanations = () => {
  return (
    <StyledExplanations>
      <Wrapper>
        {explanations.map((item, idx) => (
          <Explanation key={idx} title={item.title}>
            {item.text}
          </Explanation>
        ))}
      </Wrapper>
    </StyledExplanations>
  );
};

export { Explanations };
