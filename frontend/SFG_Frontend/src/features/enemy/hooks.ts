
// src/features/enemy/hooks.ts
// import { useMutation } from "@tanstack/react-query";
import { useQuery } from "@tanstack/react-query";
import { getEnemyByRegion,getEnemyById } from "./api";

export const useGetEnemyByRegion = (regionName: string) => {
  return useQuery({
    queryKey: ["enemy", "region", regionName],
    queryFn: () => getEnemyByRegion(regionName),
  });
};

export const useGetEnemyById = (id: number) => {

  return useQuery({
    queryKey: ["enemy", id],
    queryFn: () => getEnemyById(id),
  });
};
