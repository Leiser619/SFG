//src/features/enemy/components/ChampionPlace.tsx
import "@fontsource/cinzel/400.css";
import { motion } from "framer-motion";
import { useNavigate } from "react-router-dom";
import type { FightResult } from "../../fighting/components/FightResult";
import { useEffect, useState } from "react";



type ChampionPlaceProps = {
  fightResult?: FightResult;
};


export default function ChampionPlace({ fightResult }: ChampionPlaceProps) {


  const navigate = useNavigate();



  const hero = fightResult?.actions?.[0]?.attacker;
  const enemy = fightResult?.actions?.[0]?.target;

  const [currentHeroHp ,setCurrentHeroHp]= useState( fightResult?.actions?.[1]?.targetHpLeft[0]);
  const [currentEnemyHp,setCurrentEnemyHp]=useState(fightResult?.actions?.[0]?.targetHpLeft[0]);
  const [animationNeeded,setAnimationNeeded]=useState(true);
  const [fightEnded,setFightEnded]=useState(false);
  const [whoWon,setWhoWon]=useState<string[]>([]);



  function endScreen(){
    
    setAnimationNeeded(false);
    setFightEnded(true);
    setCurrentEnemyHp(fightResult?.actions?.[0]?.targetHpLeft.at(-1));
    console.log("wartosc"+fightResult?.actions?.[0]?.targetHpLeft.at(-1))
    setCurrentHeroHp(fightResult?.actions?.[1]?.targetHpLeft.at(-1));
    if(fightResult?.heroWon){
      whoWon.push("Gratulacje");
      whoWon.push("Pokonałeś"); 
      whoWon.push(enemy?.name);
    }else{
      whoWon.push("Niestety");
      whoWon.push("Poknal cie");
      whoWon.push(hero?.name);
    }
    

    return;
  }






//HP CHANGE
useEffect(()=>{
  if(!fightResult?.actions || fightEnded)return;
  const timers:ReturnType<typeof setTimeout>[]=[];
  fightResult.actions.forEach((action,actionIndex)=>{
    action.attackTime.forEach((attackTime,attackIndex)=>{
      const timer=setTimeout(()=>{
        if(fightEnded)return;
        const newHp=action.targetHpLeft[attackIndex+1];
        if(actionIndex===0){
          setCurrentEnemyHp(newHp);
        }else{
          setCurrentHeroHp(newHp);
        }
        if(newHp<=0){
          endScreen();
        }
    },attackTime*1000);
    timers.push(timer);
  });
  
});
return()=>{
  timers.forEach(clearTimeout);
};},[fightResult,fightEnded]);



  const heroSpeed = (2/hero?.speed)*10 || 1;
  const enemySpeed = (2/enemy?.speed)*10 || 1;



  return (
<div className="relative flex w-full items-center justify-between">
  
  {/* HERO */}
  <div className="relative flex w-1/3 flex-col items-center">
    {animationNeeded && (
      <motion.div
        className="absolute left-0 top-0 z-10 h-[400px] w-[200px] bg-[url('/src/assets/tools/weapons/basic_axe.png')] bg-cover"
        animate={{ x: [-100, 500], rotate: [-90, 90] }}
        transition={{ repeat: Infinity, duration: heroSpeed }}
      />
    )}

    <img
      src={hero?.avatarUrl}
      alt={hero?.name}
      className="h-[400px] w-80 rounded-xl object-cover"
    />

    <span className="mt-4 text-2xl font-bold text-amber-900">
      {hero?.name}
    </span>

    <div className="mt-4 w-64 rounded-lg border border-amber-900 bg-amber-100 p-2 text-center">
      {currentHeroHp}/{fightResult?.actions?.[1]?.targetHpLeft[0]}HP
    </div>
  </div>



  <div className="relative flex w-1/3 flex-col items-center p-4">
    <div className="h-[400px] w-80 rounded-xl"></div>

    <button
      className="mt-4 rounded-lg bg-amber-500 px-4 py-2 text-2xl font-bold text-amber-900 hover:bg-amber-600 active:bg-amber-700"
      onClick={() => endScreen()}
    >
      Pomin walkę
    </button>
  </div>


  {/* ENEMY */}
  <div className="relative flex w-1/3 flex-col items-center">
    {animationNeeded && (
      <motion.div
        className="absolute right-0 top-0 z-10 h-[400px] w-[200px] -scale-x-100 bg-[url('/src/assets/tools/weapons/basic_axe.png')] bg-cover"
        animate={{ x: [-100, 500], rotate: [-90, 90] }}
        transition={{ repeat: Infinity, duration: enemySpeed }}
      />
    )}

    <img
      src={enemy?.avatarUrl}
      alt={enemy?.name}
      className="h-[400px] w-80 rounded-xl object-cover"
    />

    <span className="mt-4 text-2xl font-bold text-amber-900">
      {enemy?.name}
    </span>

    <div className="mt-4 w-64 rounded-lg border border-amber-900 bg-amber-100 p-2 text-center">
      {currentEnemyHp}/{fightResult?.actions?.[0]?.targetHpLeft[0]}HP
    </div>
  </div>


  {/* END SCREEN */}
  {fightEnded && (
    <div className="absolute inset-0 z-50 flex items-center justify-center">
      <div className="w-2/3 rounded-xl border-4 border-amber-700 bg-amber-50 p-8 text-center shadow-2xl bg-amber-100">
        
        <div className="flex min-h-[300px] items-center justify-center rounded-xl bg-amber-100 p-8">
          <span className="text-2xl font-bold text-amber-900">
            {whoWon[0]}!
            <br />

            {whoWon[1]} {whoWon[2]} {whoWon[3]}

            <br />
            <br />

            Nagrody:
          <br/>
          Zloto: {fightResult?.reward?.gold}
          <br/>
          Doswiadczenie: {fightResult?.reward?.exp}
          </span>
          <br/>
        </div>
                  <button className=" border-4 border-amber-700 bg-amber-500 px-4 py-2 text-2xl font-bold text-amber-900 hover:bg-amber-600 active:bg-amber-700" 
                  onClick={() => navigate(`/profile`)}>Wroc do miasta</button>

      </div>
    </div>
  )}
</div>
);




}