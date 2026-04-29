// src/features/auth/components/LoginForm.tsx
import { useState } from "react";
import { useAllHeroesStats } from "../hooks";
import { useNavigate } from "react-router-dom";


export default function NewHeroForm() {
  const navigate = useNavigate();

  const { data, isLoading, isError } = useAllHeroesStats();
  const [currentIndex, setCurrentIndex] = useState(0);



//obsluga przyciskow
  const nextHero = () => {
    if (!data) return;
    setCurrentIndex((prev) => (prev + 1) % data.length);
  };

  const prevHero = () => {
    if (!data) return;
    setCurrentIndex((prev) =>
      prev === 0 ? data.length - 1 : prev - 1
    );
  };


  

// guardy 
  if (isLoading) return <p>Ładowanie...</p>;
  if (isError) return <p>Błąd</p>;
  if (!data || data.length === 0) return <p>Brak danych</p>;

  const currentHero = data[currentIndex];


  return (
    <div className="h-full w-full flex justify-center items-center p-6 bg-yellow-100">
      <form className="bg-pink-100 h-full w-3/4">
        <div className="w-full h-1/4 bg-purple-100">
                  Nazwij bohatera: 
            <input type="text" placeholder="Nazwa bohatera" />
        </div>
            



            <div className="h-3/4 w-full flex justify-center items-center p-6 bg-green-100">
                <button
                  type="button"
                  className="border-1 bg-gray-100"
                  onClick={prevHero}
                >
                  Poprzedni
                </button>
                <img
                    className="w-full h-3/4"
                    src={currentHero.avatarUrl}
                    alt={currentHero.heroClass}
                  />
                <div className="w-full h-1/4">
                  <p>{currentHero.heroClass}</p>
                  <p>HEALTH: {currentHero.health}</p>
                  <p>ATTTACK: {currentHero.attack}</p>
                  <p>MAGIC: {currentHero.magic}</p>
                  <p>SPEED: {currentHero.speed}</p>
                  <p>SHIELD: {currentHero.shield}</p>
                  <p>LUCK: {currentHero.luck}</p>
                  <p>BACKPACK SPACE: {currentHero.backpackSpace}</p>
                  <p>SPELL SLOTS: {currentHero.spellSpace}</p>                
                
                </div>
                <button
                  type="button"
                  className="border-1 bg-gray-100"
                  onClick={nextHero}
                >
                  Następny
                </button>
            </div>



            
          <button className="border-1 bg-gray-100 w-full" onClick={() => navigate("/user/heroselect")}>Wybierz</button>
      </form>
    </div>
  );
}