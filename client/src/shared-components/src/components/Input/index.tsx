import React, {
  ComponentPropsWithRef,
  forwardRef,
  ReactElement,
  Ref,
} from "react";
import classnames from "classnames";
import "./Input.css";

export type InputProps = ComponentPropsWithRef<"input"> & {
  className?: string;
  hasErrors?: boolean;
  label: string;
  name: string;
};

export const Input = forwardRef(
  (
    { className, hasErrors = false, label, name, ...rest }: InputProps,
    ref?: Ref<HTMLInputElement>
  ): ReactElement => {
    const inputClasses = classnames("input", {
      "input--errored": hasErrors,
    });

    return (
      <>
        <label className="input__label" htmlFor={name}>
          {label}
        </label>
        <input
          className={inputClasses}
          name={name}
          id={name}
          ref={ref}
          {...rest}
        />
      </>
    );
  }
);
