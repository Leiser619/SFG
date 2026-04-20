import { api } from "../../../shared/api/axios";

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