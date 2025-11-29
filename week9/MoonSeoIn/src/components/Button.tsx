import type { ReactNode, ButtonHTMLAttributes } from "react";
import styled from "styled-components";

const sizeStyles = {
  sm: {
    padding: "8px 14px 8px 15px",
    fontSize: "13px",
  },
  lg: {
    padding: "10px 16px",
    fontSize: "15px",
  },
  xl: {
    padding: "18px 112px 19px 113px",
    fontSize: "16px",
  },
} as const;

type ButtonSize = keyof typeof sizeStyles;
type ButtonVariant = "edit" | "delete" | "cancel";

interface StyledButtonProps {
  size: ButtonSize;
  variant: ButtonVariant;
  disabled?: boolean;
}

const StyledButton = styled.button<StyledButtonProps>`
  font-weight: 500;
  cursor: ${(props) => (props.disabled ? "not-allowed" : "pointer")};
  border-width: 0;
  border-radius: 8px;
  padding: ${(props) => sizeStyles[props.size].padding};
  font-size: ${(props) => sizeStyles[props.size].fontSize};

  background-color: ${(props) =>
    props.disabled ? "#D0DFFB" : props.variant === "edit" ? "#E8F0FE" : props.variant === "delete" ? "#3182f6" : "#F3F4F6"};

  color: ${(props) => (props.variant === "edit" ? "#3182f6" : props.variant === "delete" ? "white" : "#4B5563")};
`;

interface ButtonProps extends ButtonHTMLAttributes<HTMLButtonElement> {
  children: ReactNode;
  type?: "button" | "submit" | "reset";
  size?: ButtonSize;
  disabled?: boolean;
  variant?: ButtonVariant;
}

const Button: React.FC<ButtonProps> = ({ children, type = "button", size = "sm", variant = "delete", disabled, onClick, ...rest }) => {
  return (
    <StyledButton type={type} size={size} variant={variant} disabled={disabled} onClick={onClick} {...rest}>
      {children}
    </StyledButton>
  );
};

export default Button;
