// src/pages/HeroManagementPage.tsx
import PlayerMenu from "../features/user/components/PlayerMenu";
import HeroManagement from "../features/user/components/HeroManagement";

export default function HeroManagementPage() {
  return (<div className="h-screen flex flex-col bg-gray-100 w-full">
    
          <div className="h-1/10">
            <PlayerMenu />
          </div>
              <div className="h-9/10">
            <HeroManagement />
        </div>

    
        </div>
)};