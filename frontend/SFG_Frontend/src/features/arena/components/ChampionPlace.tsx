//src/features/enemy/components/ChampionPlace.tsx
import "@fontsource/cinzel/400.css";
import { useNavigate } from "react-router-dom";
type ChampionPlaceProps = {
    champion: EnemyType;
};

export default function ChampionPlace({champion }:ChampionPlaceProps) {

  return (
    <div className="border border-red-500 p-4  ">

            <div className=" items-center justify-center">

              <img
                src={champion.avatarUrl}
                alt={champion.name}
                className="w-80  h-100 object-cover rounded-xl"/>
            </div>
            <div className="flex items-center justify-center mt-4">
               <span className="text-2xl font-bold text-amber-900">Champion</span>
           </div>
    </div>
  );
}