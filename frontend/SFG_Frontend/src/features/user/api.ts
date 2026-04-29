//src/features/user/api.ts      
import { api } from "../../shared/api/axios";   


///TODO - dokonczyc pobieranie listy bohaterow
export const getMyHeroes = async () => {
  const res = await api.get("/sfg/heroselect");
  return res.data;
};

export const getAllHeroesStats = async () => {
  const res = await api.get("/sfg/hero_stats");
  return res.data;
};