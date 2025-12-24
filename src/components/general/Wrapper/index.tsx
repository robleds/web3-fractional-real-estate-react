import { StyledWrapper } from "./styles";
import { WrapperProps } from "./types";

const Wrapper = (props: WrapperProps) => {
  const { children, horizontal, justify, align } = props;

  return (
    <StyledWrapper horizontal={horizontal} justify={justify} align={align}>
      { children }
    </StyledWrapper>
  );
};

export { Wrapper };
