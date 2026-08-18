//src/features/fighting/api.ts      
import { useQuery } from "@tanstack/react-query";
import { api } from "../../shared/api/axios";
import { getArenaFightResult } from "./api";


export const useGetArenaFightResult= (heroId: number, enemyId: number) => { 
    return useQuery({ 
          queryKey:["arenaFight",heroId,enemyId],
               queryFn:()=> getArenaFightResult(heroId,enemyId), 
                });
               };







// export const useStartArenaFight = () => {
//   return useMutation({
//     mutationFn: ({
//       heroId,
//       enemyId,
//     }: {
//       heroId: number;
//       enemyId: number;
//     }) => startArenaFight(heroId, enemyId),
//   });
// };

// export const useGetArenaFight = (fightId: number | null) => {
//   return useQuery({
//     queryKey: ["arenaFight", fightId],
//     queryFn: () => getArenaFight(fightId!),
//     enabled: fightId !== null,
//   });
// };