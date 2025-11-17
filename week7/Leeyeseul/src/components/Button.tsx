import type { ReactNode, ButtonHTMLAttributes } from "react";
import styled from "styled-components";

const sizeStyles = {
  sm: {
    padding: "6px 12px",
    fontSize: "13px",
  },
  lg: {
    padding: "10px 16px",
    fontSize: "15px",
  },
  xl: {
    padding: "14px 20px",
    fontSize: "16px",
  },
} as const;

type ButtonSize = keyof typeof sizeStyles;

interface StyledButtonProps {
  size: ButtonSize;
  disabled?: boolean;
}

const StyledButton = styled.button<StyledButtonProps>`
  color: #ffffff;
  background-color: ${(props) => (props.disabled ? "#D0DFFB" : "#3182f6")};
  font-weight: 600;
  cursor: ${(props) => (props.disabled ? "not-allowed" : "pointer")};
  border: none;
  border-radius: 8px;
  
  padding: ${(props) => sizeStyles[props.size].padding};
  font-size: ${(props) => sizeStyles[props.size].fontSize};
  transition: background-color 0.15s ease;

  &:active {
    background-color: ${(props) => (props.disabled ? "#D0DFFB" : "#1e6ce0")};
  }
`;

interface ButtonProps extends ButtonHTMLAttributes<HTMLButtonElement> {
  children: ReactNode;
  type?: "button" | "submit" | "reset";
  size?: ButtonSize;
  disabled?: boolean;
}

const Button: React.FC<ButtonProps> = ({
  children,
  type = "button",
  size = "sm",
  disabled,
  ...rest
}) => {
  return (
    <StyledButton type={type} size={size} disabled={disabled} {...rest}>
      {children}
    </StyledButton>
  );
};

export default Button;
