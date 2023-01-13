import { ButtonHTMLAttributes } from "react";
import { StyledButton } from "./StyledButton";

interface iButtonProps extends ButtonHTMLAttributes<HTMLButtonElement> {
  children: React.ReactNode;
  styled: "filled" | "empty" | "empty curved" | "filled curved";
}

const Button = ({ children, styled, ...rest }: iButtonProps) => {
  return (
    <StyledButton styled={styled} {...rest}>
      {children}
    </StyledButton>
  );
};

export default Button;
