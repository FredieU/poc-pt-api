import React, { ReactElement } from "react";
import { Button, FormGroup, Input } from "../../shared-components";
import "./LoginForm.css";
import {
  EMAIL_INPUT_NAME,
  FormValues,
  PASSWORD_INPUT_NAME,
  useLoginFormState,
} from "./useLoginFormState";

export type LoginFormProps = {
  data: Object;
  onSubmit: (data: FormValues) => void;
};

export function LoginForm(): ReactElement {
  const {
    errors,
    formState,
    handleSubmit,
    hasErrors,
    register,
  } = useLoginFormState();

  return (
    <form noValidate className="login-form" onSubmit={handleSubmit(() => {})}>
      <FormGroup errors={[errors[EMAIL_INPUT_NAME]?.message as string]}>
        <Input
          hasErrors={!!errors[EMAIL_INPUT_NAME]}
          label="Email"
          name={EMAIL_INPUT_NAME}
          ref={register}
        />
      </FormGroup>
      <FormGroup errors={[errors[PASSWORD_INPUT_NAME]?.message as string]}>
        <Input
          hasErrors={!!errors[PASSWORD_INPUT_NAME]}
          label="Password"
          name={PASSWORD_INPUT_NAME}
          ref={register}
        />
      </FormGroup>
      <div className="login-form__controls">
        <Button
          disabled={hasErrors || formState.isSubmitted}
          className="login-form__submit"
          type="submit"
        >
          Log In
        </Button>
      </div>
    </form>
  );
}
