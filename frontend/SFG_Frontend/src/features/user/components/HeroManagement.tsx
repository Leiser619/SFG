//src/features/user/components/HeroManagement.tsx
import { useGetMyHeroById } from "../hooks";
import "@fontsource/cinzel/400.css";
import {useParams} from "react-router-dom";
import { useNavigate } from "react-router-dom";
import TankTable from "./heroManagmementTables/TankTable";
import MageTable from "./heroManagmementTables/MageTable";
import WarriorTable from "./heroManagmementTables/WarriorTable";
import ArcherTable from "./heroManagmementTables/ArcherTable";



export default function HeroManagement() {
  const {heroId} = useParams();



  const { data:hero, isLoading } = useGetMyHeroById(heroId);
  // const navigate = useNavigate();



  return (
    <div className="w-full h-full p-6">

        {isLoading && <p>Ładowanie...</p>}

        {hero && (
            <>
                {hero.heroClass === "TANK" && (
                    <TankTable hero={hero} />
                )}

                {hero.heroClass === "MAGE" && (
                    <MageTable hero={hero} />
                )}

                {hero.heroClass === "ARCHER" && (
                    <ArcherTable hero={hero} />
                )}

                {hero.heroClass === "WARRIOR" && (
                    <WarriorTable hero={hero} />
                )}
            </>
        )}
    </div>
  );
}