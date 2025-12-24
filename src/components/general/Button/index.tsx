import { StyledButton } from "./styles";
import { ButtonProps } from "./types";

const Button = (props: ButtonProps) => {
  const { children, className, width, height, bgColor, type, color } = props;
  const otherProps = { width, height, bgColor, type, color };

  return (
    <StyledButton
      className={`bold${className ? ` ${className}` : ""}`}
      { ...otherProps }
    >
      {children}
    </StyledButton>
  );
};

export { Button };
