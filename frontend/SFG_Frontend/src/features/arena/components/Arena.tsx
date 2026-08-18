//src/features/enemy/components/Arena.tsx
 import { useGetEnemyById , useGetEnemyByRegion} 
 from "../../enemy/hooks"; 
 import "@fontsource/cinzel/400.css"; 
 import { useNavigate } from "react-router-dom"; 
 import ChampionPlace from "./ChampionPlace"; 
 import type EnemyType from "../../enemy/EnemyType"; 
 import { useGetArenaFightResult } from "../../fighting/hook"; 
 
 
 
 export default function Arena() {
   const heroId=1;
    const enemyId=3;
     const {
      
      data: fightResult, isLoading : fightLoading ,error :fightError}=useGetArenaFightResult(heroId, enemyId);
      
      
      if (fightLoading) { 
        return <div>Loading fight result...</div>; 
      } 
      
      if(fightError){
         return <div>Error loading fight result: {fightError.message}</div>; 
        }
        
      if (!fightResult) {
         return <div>No fight result.</div>;
         } 
         // const hero=new EnemyType();
       return ( 
       <div className="min-h-screen flex items-center justify-center bg-[url(/src/assets/map/buildings/arena_1.png)] bg-cover bg-center p-6">
         <div className="w-full max-w-6xl rounded-3xl border-4 border-amber-700 bg-amber-50 p-8 shadow-2xl">
           <h1 className="mb-8 text-center text-3xl font-bold tracking-wide text-amber-900 font-['Cinzel']"> 
            Arena 
            </h1>
             <div className="flex justify-center bg-opacity-25">
               <ChampionPlace fightResult={fightResult} /> 
              </div>
          </div> 
        </div> 
            );
     }