//src/features/user
import { useGetMyHeroes } from "../hooks";
import "@fontsource/cinzel/400.css";
import { useNavigate } from "react-router-dom";
type Hero = {
  name: string;
  heroClass: string;
  avatar: string;
  exp: number;
};

export default function HeroTable() {
  const { data } = useGetMyHeroes();
  const navigate = useNavigate();
  const heroes: Hero[] = data || [];
  const slots = Array.from({ length: 8 }, (_, i) => heroes[i] || null);

  return (
    <div className="min-h-screen flex items-center justify-center bg-gradient-to-b from-sky-900 via-indigo-800 to-emerald-900 p-6">
      <div className="w-full max-w-6xl rounded-3xl border-4 border-amber-700 bg-amber-50 p-8 shadow-2xl">
        <h1 className="mb-8 text-center text-3xl font-bold tracking-wide text-amber-900 font-['Cinzel']">
          WYBÓR BOHATERA
        </h1>

        <div className="grid grid-cols-4 gap-6">
          {slots.map((hero, i) => (
            <div
              key={i}
              className="h-64 rounded-2xl border-2 border-amber-400 bg-white/80 p-4 hover:-translate-y-1 hover:border-violet-500 hover:shadow-lg transition-all"
            >
              {hero ? (
                <div className="flex h-full flex-col items-center justify-center text-center">
                  <img
                    src={hero.avatar}
                    alt={hero.heroClass}
                    className="h-24 w-24 rounded-xl border-2 border-amber-500 object-cover"
                  />

                  <p className="mt-4 text-lg font-bold text-amber-900">
                    {hero.name}
                  </p>

                  <p className="text-sm font-medium text-violet-700">
                    {hero.heroClass}
                  </p>

                  <p className="mt-2 text-sm font-medium text-emerald-700">
                    EXP: {hero.exp}
                  </p>
                </div>
              ) : (
                <div className="flex h-full items-center justify-center">
                  <button
                    onClick={()=>navigate("/create-hero")}
                    className="rounded-xl bg-gradient-to-b from-amber-400 to-amber-600 px-4 py-3 font-bold text-white shadow-md transition-all hover:scale-105 hover:from-amber-300 hover:to-amber-500"
                  >
                    Kup nowego bohatera
                  </button>
                </div>
              )}
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}