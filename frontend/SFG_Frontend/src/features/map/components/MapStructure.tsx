// src/features/map/components/MapStructure.tsx

import { useNavigate } from "react-router-dom";

export default function MapStructure() {
  const navigate = useNavigate();
  const locations = [
  { name: "UDUN", top: "3%", left: "63%", path: "/miasto1", width: "12%", height: "21%" },
  { name: "Beldun", top: "70%", left: "85%", path: "/miasto2", width: "12%", height: "21%" },
  { name: "Lion", top: "4%", left: "29%", path: "/miasto2", width: "5%", height: "9%" },
  { name: "Anorien", top: "14%", left: "50%", path: "/miasto2", width: "6%", height: "11%" },
  { name: "SPL", top: "35%", left: "58%", path: "/miasto2", width: "100px", height: "100px" },
];

  return (
    <div className="w-full h-full flex items-center justify-center">
      
      <div className="relative h-full aspect-[16/9] bg-black">
        <img
          src="/src/assets/map/map.png"
          alt="mapa"
          className="w-full h-full object-contain"
        />
                {locations.map((loc)=>(
        <button
          key={loc.name}
          className="rounded-full absolute bg-blue-500 text-white px-2 py-1 rounded"
          style={{top: loc.top, left: loc.left, width: loc.width, height: loc.height}}
          onClick={()=>navigate(loc.path)}
          >
            {loc.name}
          </button>
      ))}
        
      </div>
    </div>
  );
}   