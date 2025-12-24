import styled from "styled-components";
import { ButtonProps } from "./types";

const StyledButton = styled.button<ButtonProps>`
  width: ${props => props.width ? `${props.width}px` : "100%"};
  height: ${props => props.height}px;

  border: none;
  border-radius: 4px;

  font-family: inherit;
  color: ${props => props.color || "white"};

  background-color: ${props => props.bgColor || "#64B514"};

  box-shadow: 0 -2px 0 #39680B inset,
              0px 4px 4px #00000040;

`;

export { StyledButton };
