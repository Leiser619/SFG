// src/features/city/cityStructure.tsx
import { useNavigate } from "react-router-dom";

export default function MapStructure() {
  const navigate = useNavigate();

  const locations = [
    {name: "UDUN",top: "3%",left: "63%",path: "/udun",width: "11%",height: "20%"},
   
    {name: "Beldun",top: "55%",left: "79%",path: "/beldun",width: "19%",height: "26%"},
  
    {name: "Lion",top: "4%",left: "30%",path: "/lion",width: "5%",height: "9%"},

    {name: "SPL",top: "31%",left: "59%",path: "/spl",width: "3%",height: "6%"},
    
    {name: "Anorien",top: "14%",left: "50%",path: "/anorien",width: "6%",height: "11%" },

    {name: "Emet Pół",top: "6%",left: "6%",path: "/emet-pół",width: "3%",height: "5%" },
    
    {name: "Emet Poł",top: "16%",left: "5%",path: "/emet-poł",width: "5%",height: "8%" },

    {name: "Volemin",top: "30%",left: "47%",path: "/volemin",width: "8%",height: "16%" },

    {name: "Terion",top: "47%",left: "54%",path: "/terion",width: "4%",height: "7%" },

    {name: "Evedim",top: "27%",left: "44%",path: "/evedim",width: "2%",height: "4%" },

    {name: "Gladden",top: "28%",left: "13%",path: "/gladden",width: "3%",height: "6%" },

    {name: "Turmin",top: "50%",left: "46%",path: "/turmin",width: "4%",height: "6%" },

    {name: "Esgaroth",top: "60%",left: "12%",path: "/esgaroth",width: "15%",height: "24%" },
    
    {name: "Wichrowy czub",top: "35%",left: "19%",path: "/wichrowy-czub",width: "4%",height: "7%"}
  ];

  return (
    <div className="h-full w-full flex justify-center items-center bg-gradient-to-b from-sky-900 via-indigo-900 to-violet-950 p-4">

      <div className="relative h-full aspect-[16/9]">

        <img
          src="/src/assets/map/map.png"
          alt="Mapa świata"
          className="h-full w-full object-contain rounded-2xl shadow-2xl border-4 border-amber-700"
        />

        {locations.map((loc) => (
          <button
            key={loc.name}
            onClick={() => navigate("/city"+loc.path)}
            style={{
              top: loc.top,
              left: loc.left,
              width: loc.width,
              height: loc.height
            }}
            className="
              absolute
              group
              rounded-full
              border-2
              border-transparent

              transition-all
            "
          >
            <span
              className="
                opacity-0
                group-hover:opacity-100
                absolute
                -top-8
                left-1/2
                -translate-x-1/2
                whitespace-nowrap
                rounded-lg
                bg-amber-100
                border-2
                border-amber-500
                px-3
                py-1
                text-sm
                font-bold
                text-amber-900
                shadow-lg
                transition
              "
            >
              {loc.name}
            </span>
          </button>
        ))}
      </div>
    </div>
  );
}