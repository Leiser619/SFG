//src/features/user/api.ts  
import { useQuery } from "@tanstack/react-query";
import { getMyHeroes } from "./api";


///TODO - dokonczyc pobieranie listy bohaterow
export const getHeroes = () => {
  return useQuery({
    queryKey: ["heroes"],
    queryFn: getMyHeroes,
  });
};