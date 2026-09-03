export type LoginPayload = {
  email: string;
  password: string;
  role?: string;
};

export type SignupPayload = {
  name: string;
  email: string;
  password: string;
  role?: string;
};

export type ForgotPasswordPayload = {
  email: string;
};

export type ResetPasswordPayload = {
  email: string;
  password: string;
};

export type UserProfile = {
  id: string;
  name: string;
  email: string;
  role?: string;
  avatar?: string;
};
