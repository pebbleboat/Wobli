import { AUTH_PATHS } from "./apiConstant";
import axiosInstance from "./axiosInstance";
import type { LoginResponse, SignupResponse } from "@/utils/authSession";
import {
  ForgotPasswordPayload,
  LoginPayload,
  ResetPasswordPayload,
  SignupPayload,
} from "./types";
import { MicroService } from "@/utils/enum";

export async function login(payload: LoginPayload) {
  const { data } = await axiosInstance(MicroService.AUTH).post<LoginResponse>(
    AUTH_PATHS.login,
    payload,
  );
  return data;
}

export async function signup(payload: SignupPayload) {
  const { data } = await axiosInstance(MicroService.AUTH).post<SignupResponse>(
    AUTH_PATHS.signup,
    payload,
  );
  return data;
}

export async function requestPasswordReset(payload: ForgotPasswordPayload) {
  const { data } = await axiosInstance(MicroService.AUTH).post<{
    message: string;
  }>(AUTH_PATHS.forgotPassword, payload);
  return data;
}

export async function resetPassword(payload: ResetPasswordPayload) {
  const { data } = await axiosInstance(MicroService.AUTH).post<{
    message: string;
  }>(AUTH_PATHS.resetPassword, payload);
  return data;
}
