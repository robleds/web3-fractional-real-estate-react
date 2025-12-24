import styled from "styled-components";

type WrProps = {
  horizontal?: true;
  justify?: string;
  align?: string;
};

const StyledWrapper = styled.div<WrProps>`
  display: flex;
  flex-flow: column nowrap;
  justify-content: ${props => props.justify || "space-between"};
  align-items: ${props => props.align || "center"};
  width: calc(100% - 30px);
  max-width: 1180px;
  padding: 0 15px;
  margin: 0 auto;
  box-sizing: content-box;

  @media (min-width: 1024px) {
    flex-flow: ${props => props.horizontal ? "row" : "column"} nowrap;
  }
`;

export { StyledWrapper };