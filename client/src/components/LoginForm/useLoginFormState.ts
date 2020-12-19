import { useContext, useEffect } from "react";
import { useForm } from "react-hook-form";
import * as Yup from "yup";
import { yupResolver } from "@hookform/resolvers/yup";
import { UserContext } from "../../state/UserContext";
import { postLogin } from "../../api/login";

export const PASSWORD_INPUT_NAME = "loginPassword";
export const EMAIL_INPUT_NAME = "loginEmail";

const schema = Yup.object().shape({
  [EMAIL_INPUT_NAME]: Yup.string()
    .required("Please enter an email")
    .email("Please enter a valid email"),
  [PASSWORD_INPUT_NAME]: Yup.string()
    .required("Please enter a password")
    .min(8, "Password must be greater than 8 characters")
    .max(255, "Password must be less than 255 characters"),
});

export type FormValues = {
  [EMAIL_INPUT_NAME]: string;
  [PASSWORD_INPUT_NAME]: string;
};

export function useLoginFormState() {
  const userContext = useContext(UserContext);
  const { setUser } = userContext!;
  const {
    errors,
    formState,
    getValues,
    handleSubmit,
    register,
  } = useForm<FormValues>({
    mode: "onBlur",
    resolver: yupResolver(schema),
  });
  const hasErrors = !!Object.keys(errors).length;

  useEffect(() => {
    if (!formState.isSubmitted) return;

    async function logIn(): Promise<void> {
      const data = await postLogin(getValues());
      setUser(data!);
    }

    logIn();
  });

  return { errors, formState, handleSubmit, hasErrors, register };
}
