//src/features/enemy/components/ChampionPlace.tsx
import "@fontsource/cinzel/400.css";
import { motion } from "framer-motion";
import { div } from "framer-motion/m";
import { useNavigate } from "react-router-dom";
type ChampionPlaceProps = {
    champion: EnemyType;
};

export default function ChampionPlace({champion , isLeft }:ChampionPlaceProps & { isLeft?: boolean } ) {

  const basic_speed=1-(champion.speed / 200) ;
  console.log("basic_speed: " + basic_speed);
  return (
    <div className="relative  border border-red-500 p-4  ">
            <div className=" items-center justify-center">
{/* 
              //TODO : Add weapon that character is using
              //Weapon animation */}
              {isLeft && (
                <motion.div className="absolute top-0 left-0 bg-[url('/src/assets/tools/weapons/basic_axe.png')] w-50 h-100 bg-cover "
              
                animate={{  x: [-100, 500] ,rotate: [-90, 90] , } }
                transition={{ repeat: Infinity, duration:basic_speed}}/>
                )}
              
                {!isLeft && (
                <motion.div  className="-scale-x-100 absolute top-0 right-0 bg-[url('/src/assets/tools/weapons/basic_axe.png')] w-50 h-100 bg-cover" 
  
                animate={{  x: [-100, 500] , rotate: [-90, 90] ,} } 
                transition={{ repeat: Infinity, duration:basic_speed }}/>  
                  )}

              <img
                src={champion.avatarUrl}
                alt={champion.name}
                className="w-80  h-100 object-cover rounded-xl"/>
            </div>
            <div className="flex items-center justify-center mt-4">
               <span className="text-2xl font-bold text-amber-900">{champion.name}</span>
           </div>
            <div className="flex items-center justify-center mt-4 border border-amber-900 rounded-lg p-2 bg-amber-100">
              
           </div>
    </div>
  );
}