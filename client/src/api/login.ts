import { api } from "./axios";
import { APILoginPayload, APIResponse } from "./types";
import { endpoints } from "./endpoints";
import { FormValues } from "../components/LoginForm/useLoginFormState";

export function formatPayload(formData: FormValues): APILoginPayload {
  return {
    email: formData.loginEmail,
    password: formData.loginPassword,
  };
}

export async function postLogin(
  formData: FormValues
): Promise<Object | undefined> {
  try {
    const payload: APILoginPayload = formatPayload(formData);
    const { data } = await api.post<Promise<APIResponse>>(
      endpoints.LOGIN,
      payload
    );
    return data;
  } catch (error) {
    console.error(error);
  }
}
