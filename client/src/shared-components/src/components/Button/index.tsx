import React, {
  ComponentPropsWithoutRef,
  ReactElement,
  ReactNode,
} from "react";
import classnames from "classnames";
import "./Button.css";

export type ButtonProps = ComponentPropsWithoutRef<"button"> & {
  children: ReactNode;
  className?: string;
  colour?: string;
  onClick?: () => void;
  primary?: boolean;
  size?: "small" | "medium" | "large";
  type?: "button" | "submit" | "reset";
};

export function Button({
  children,
  className,
  colour,
  disabled,
  primary = true,
  size = "medium",
  type = "button",
  ...props
}: ButtonProps): ReactElement {
  const classes = classnames("btn", `btn--${size}`, className, {
    "btn--primary": primary,
    "btn--secondary": !primary,
    "btn--disabled": disabled,
  });

  return (
    <button type={type} className={classes} disabled={disabled} {...props}>
      {children}
    </button>
  );
}
