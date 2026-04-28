// src/pages/ProfilPage.tsx
import HeroTable from "../features/user/components/HeroTable";
import PlayerMenu from "../features/user/components/PlayerMenu";

export default function ProfilPage() {
  return (
    <div className="h-screen flex flex-col bg-gray-100 w-full">

      <div className="h-1/10 w-full">
        <PlayerMenu />
      </div>

      <div className="h-9/10 w-full">
        <HeroTable />
      </div>

    </div>
  );
}