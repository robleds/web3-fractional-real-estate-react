import styled from "styled-components";
import { DocMessageProps } from "../types";

const StyledDocumentsMessage = styled.div<DocMessageProps>`
  display: flex;
  align-items: center;
  justify-content: center;

  width: 100%;
  height: 120px;

  padding: 10px;

  border-radius: 4px;
  color: white;

  background-color: ${props => props.type === "analysis" ? "#F9A826" : "#64B514"};

  svg {
    margin: 0 65px 0 0;
  }

  h3 {
    font-size: 18px;
    margin: 0 0 10px;
  }

  p {
    font-size: 12px;
    line-height: 16px;

    max-width: 530px;
  }

  @media (min-width: 1024px) {
    width: calc(100% - 415px);
    height: 100px;
  }
`;

export { StyledDocumentsMessage };
