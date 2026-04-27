// src/pages/ProfilPage.tsx
import HeroTable from "../features/user/components/HeroTable";
import PlayerMenu from "../features/user/components/PlayerMenu";

export default function ProfilPage() {
  return  (     
     <div className="flex-col items-center justify-center max-h-screen min-h-screen bg-gray-100 w-full">
      <PlayerMenu />
      <HeroTable />
    </div>
  )
}