export type APIResponse = {
  error?: string;
  data: Object;
};

export type APILoginPayload = {
  email: string;
  password: string;
};
