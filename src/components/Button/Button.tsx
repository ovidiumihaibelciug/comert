import classNames from "classnames";
import React from "react";

import "./Button.styles.scss";

interface ButtonProps {
  children: React.ReactNode;
  className?: string;
  onClick?: () => void;
}

const Button: React.FC<ButtonProps> = ({
  children,
  className = "",
  onClick,
}) => {
  return (
    <button className={classNames("button", className)} onClick={onClick}>
      {children}
    </button>
  );
};

export default Button;
