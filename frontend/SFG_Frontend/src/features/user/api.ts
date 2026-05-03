//src/features/user/api.ts      
import { da } from "zod/locales";
import { api } from "../../shared/api/axios";   

export type HeroRequest = {
  email: string;
  password: string;
};


///TODO - dokonczyc pobieranie listy bohaterow
export const getMyHeroes = async () => {
  const res = await api.get("/sfg/heroselect");
  return res.data;
};

export const getAllHeroesStats = async () => {
  const res = await api.get("/sfg/hero_stats");
  return res.data;
};

export const saveNewHero = async(data: HeroRequest)=>{
  const res=await api.post("/sfg/heroselect",data);
  return res.data;
}