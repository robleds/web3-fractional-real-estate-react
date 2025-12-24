import styled from "styled-components";

const StyledExplanation = styled.div`
  display: flex;
  flex-flow: column nowrap;
  margin-bottom: 100px;
  width:100%;

  svg {
    margin: 0 0 30px;
  }

  h3 {
    color: #242424;
    font-size: 28px;

    margin: 0 0 20px;
  }

  p {
    color: #727272;
    font-size: 16px;
    line-height: 21px;
  }
`;

export { StyledExplanation };
