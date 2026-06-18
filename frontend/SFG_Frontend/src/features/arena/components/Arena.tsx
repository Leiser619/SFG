//src/features/enemy/components/Arena.tsx
import  { useGetEnemyById , useGetEnemyByRegion} from "../../enemy/hooks";
import "@fontsource/cinzel/400.css";
import { useNavigate } from "react-router-dom";
import ChampionPlace from "./ChampionPlace";


export default function Arena() {
    const {
        data: enemyByRegionData,
        isLoading,
        error
    } = useGetEnemyByRegion("ARENA");

    if (isLoading) {
        return <div>Loading...</div>;
    }

    if (error) {
        return <div>Error</div>;
    }

    if (!enemyByRegionData?.length) {
        return <div>Brak przeciwników</div>;
    }

    return (


      <div className="min-h-screen flex items-center justify-center bg-[url(/src/assets/map/buildings/arena_1.png)] bg-cover bg-center p-6">
         <div className="w-full max-w-6xl rounded-3xl border-4 border-amber-700 bg-amber-50 p-8 shadow-2xl">
           <h1 className="mb-8 text-center text-3xl font-bold tracking-wide text-amber-900 font-['Cinzel']"> 
            Arena </h1> 
            <div className="grid grid-cols-3 gap-1 bg-opacity-25">
            <ChampionPlace champion={enemyByRegionData[0]} />
            <div></div>
            <ChampionPlace champion={enemyByRegionData[1]} />
            </div> 
          </div> 
        </div> 
    );

  }