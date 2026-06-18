// src/pages/locations/Arena.tsx
import Arena from "../../features/arena/components/arena";
import PlayerMenu from "../../features/user/components/PlayerMenu";


export default function CityPage() {
  return (<div className="h-screen flex flex-col bg-gray-100 w-full">
    
          <div className="h-1/10">
            <PlayerMenu />
          </div>
    
          <div className="h-9/10">
            < Arena />
          </div>
    
        </div>
)};