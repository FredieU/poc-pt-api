import React, { FC, ReactNode } from "react";
import classnames from "classnames";
import "./FormGroup.css";

export interface FormGroupProps {
  children: ReactNode;
  className?: string;
  errors?: string[];
}

export const FormGroup: FC<FormGroupProps> = ({
  children,
  className,
  errors = [],
  ...props
}) => {
  const formGroupClasses = classnames("form-group", className);

  return (
    <div className={formGroupClasses} {...props}>
      {children}
      {errors &&
        errors.map((error, index) => (
          <p key={`${index}${error}`} className="form-group__error">
            {error}
          </p>
        ))}
    </div>
  );
};
