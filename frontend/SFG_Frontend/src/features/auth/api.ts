import { api } from "../../shared/api/axios";

export type RegisterRequest = {
  email: string;
  password: string;
};

export const register = async (data: RegisterRequest) => {
  console.log("Registering user with data:", data);
  const res = await api.post("/auth/register", data);
  console.log("Received response from register API:", res);
  return res.data;
};

export const login = async (data: RegisterRequest) => {
  console.log("Logining user with data:", data);
  const res = await api.post("/auth/login", data);
  console.log("Received response from register API:", res);
  return res.data;
};

export const getMe = async () => {
  const res = await api.get("/auth/me");
  return res.data;
};