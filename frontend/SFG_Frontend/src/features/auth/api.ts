//src/features/auth/api.ts
import { api } from "../../shared/api/axios";

export type RegisterRequest = {
  email: string;
  password: string;
};

export const register = async (data: RegisterRequest) => {
  const res = await api.post("/auth/register", data);
  return res.data;
};

export const login = async (data: RegisterRequest) => {
  const res = await api.post("/auth/login", data);
   return res.data;
};

export const getMe = async () => {
  const res = await api.get("/auth/me");
  return res.data;
};

export const logout = async () => {
  await api.post("/auth/logout");
}; 