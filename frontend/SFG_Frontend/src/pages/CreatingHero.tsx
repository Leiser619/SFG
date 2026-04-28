// src/pages/CreatingHero.tsx
import NewHeroForm from "../features/user/components/NewHeroForm";
import PlayerMenu from "../features/user/components/PlayerMenu";
export default function CreatingHero() {
  
  return(
      <div className="h-screen flex flex-col bg-gray-100 w-full">
  
        <div className="h-1/10">
          <PlayerMenu />
        </div>
  
        <div className="h-9/10">
          <NewHeroForm />
        </div>
  
      </div>
    );
}