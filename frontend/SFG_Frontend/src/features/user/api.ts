//src/features/user/api.ts      

import { api } from "../../shared/api/axios";   

export type HeroRequest = {
  email: string;
  password: string;
};


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

//getting only hero assigned to user
export const getMyHeroById = async(heroId: number)=>{
    const res = await api.get(
        `/sfg/heroselect/getHeroById/${heroId}`
    );
    console.log(res);
  return res.data;
}