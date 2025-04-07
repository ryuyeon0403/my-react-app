import React from "react";
import { BaseProps } from "../../types";

interface ButtonProps extends BaseProps {
  onClick?: () => void;
  variant?: "primary" | "secondary";
}

export const Button: React.FC<ButtonProps> = ({
  children,
  onClick,
  variant = "primary",
  className = "",
}) => {
  return (
    <button onClick={onClick} className={`button ${variant} ${className}`}>
      {children}
    </button>
  );
};
