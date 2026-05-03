//src/features/user/api.ts  
import { useMutation } from "@tanstack/react-query";
import { useQuery } from "@tanstack/react-query";
import { getMyHeroes, saveNewHero } from "./api";
import { getAllHeroesStats } from "./api";

///TODO - dokonczyc pobieranie listy bohaterow
export const useGetMyHeroes = () => {
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

export const useSaveNewHero = () => {
  return useMutation({
    mutationFn: saveNewHero,
      onSuccess: () => {
      window.location.href = "/profile";
    },
  });
};