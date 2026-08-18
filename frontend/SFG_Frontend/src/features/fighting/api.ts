//src/features/fighting/api.ts      
import { api } from "../../shared/api/axios";
import type { FightResult } from "../fighting/components/FightResult";


export const getArenaFightResult= async (heroId: number,
    enemyId: number): Promise<FightResult>=>{
         const res=await api.get("/fight/arena",{
             params:{ heroId,
                 enemyId, }, 
                }) 
                return res.data; };






// export const startArenaFight = async (
//   heroId: number,
//   enemyId: number
// ): Promise<FightResult> => {
//   const res = await api.post("/fight/arena", null, {
//     params: {
//       heroId,
//       enemyId,
//     },
//   });
//  console.log("twoja data 1"+res.data);
//   return res.data;
// };

// export const getArenaFight = async (
//   fightId: number
// ): Promise<FightResult> => {
//   const res = await api.get(`/fight/arena/${fightId}`);
// console.log("twoja data 2"+res.data);
//   return res.data;
// };