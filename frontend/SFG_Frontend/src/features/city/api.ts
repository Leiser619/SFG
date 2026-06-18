// src/features/city/api.ts
import { api } from "../../shared/api/axios";
import type CityType  from "../city/components/CityType";


export const getCityByName = async (name: string): Promise<CityType> => {
  const res = await api.get(`/location/search/${name}`);
  return res.data;
}
// export type RegisterRequest = {
//   email: string;
//   password: string;
// };

// export const register = async (data: RegisterRequest) => {
//   const res = await api.post("/auth/register", data);
//   return res.data;
// };