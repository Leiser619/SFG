//src/features/user/components/HeroManagement.tsx
import { useGetMyHeroById } from "../hooks";
import "@fontsource/cinzel/400.css";
import { useNavigate } from "react-router-dom";
import TankTable from "./heroManagmementTables/TankTable";
type Hero = {
  name: string;
  heroClass: string;
  avatar: string;
  exp: number;
};

export default function HeroManagement() {
  

  const heroId=1;

  const { data:hero, isLoading } = useGetMyHeroById(heroId);
  // const navigate = useNavigate();



  return (
    <div className="w-full h-full p-6">

        {isLoading && <p>Ładowanie...</p>}

        {hero && (
            <>
                {hero.heroClass === "tank" && (
                    <TankTable hero={hero} />
                )}

                {hero.heroClass === "mage" && (
                    <MageTable hero={hero} />
                )}

                {hero.heroClass === "archer" && (
                    <ArcherTable hero={hero} />
                )}

                {hero.heroClass === "warrior" && (
                    <WarriorTable hero={hero} />
                )}
            </>
        )}
    </div>
  );
}