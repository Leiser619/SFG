// src/pages/MapPage.tsx
import PlayerMenu from "../features/user/components/PlayerMenu";
import MapStructure from "../features/map/components/MapStructure";

export default function MapPage() {
  return (<div className="h-screen flex flex-col bg-gray-100 w-full">
    
          <div className="h-1/10">
            <PlayerMenu />
          </div>
    
          <div className="h-9/10">
            <MapStructure />
          </div>
    
        </div>
)};