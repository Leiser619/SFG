//src/features/user/api.ts  
import { useQuery } from "@tanstack/react-query";
import { getMyHeroes } from "./api";
import { getAllHeroesStats } from "./api";

///TODO - dokonczyc pobieranie listy bohaterow
export const useGetHeroes = () => {
  return useQuery({
    queryKey: ["heroes"],
    queryFn: getMyHeroes,
  });
};

export const useAllHeroesStats = () => {
  return useQuery({
    queryKey: ["heroes_stats"],
    queryFn: getAllHeroesStats,
  });
};