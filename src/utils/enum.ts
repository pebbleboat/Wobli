export enum MicroService {
  AUTH = "auth",
  MAIN = "main",
}

export const storageKeys = {
  DEVICE_ID: "device_id",
  REGISTERED_DEVICE_ID: "registered_device_id",
  LOGIN_DETAILS: "login_details",
  ACCESS_TOKEN: "access_token",
  REFRESH_TOKEN: "refresh_token",
  CURRENT_USER: "current_user",
} as const;
