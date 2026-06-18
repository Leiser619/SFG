// src/features/player/components/PlayerMenu.tsx
import { Navigate, useNavigate } from "react-router-dom";
import {
  useLogout,
  useMe,
} from "../../auth/hooks";

export default function PlayerMenu() {
    const logoutMutation =
    useLogout();

  const navigate = useNavigate();
const { data: user, isLoading } = useMe();

    if (isLoading) {
      return null;
    }

    if (!user) {
  return <Navigate to="/" replace />;}

const handleLogout =
    () => {
      logoutMutation.mutate();
    };

  return (
    <div className="w-full h-16 flex items-center justify-between px-6
      bg-gradient-to-r from-indigo-950 via-sky-900 to-indigo-950
      border-b-4 border-amber-700 shadow-[0_10px_30px_rgba(0,0,0,0.35)]">


      {/* PLAYER INFO */}
      <h1 className="text-amber-200 font-bold tracking-widest text-lg font-['Cinzel']">
        {user}
      </h1>

      {/* NAV */}
      <div className="flex items-center gap-6 text-sm">

        <button
          className="text-amber-100 hover:text-violet-200 hover:-translate-y-0.5 transition font-medium"
          onClick={() => navigate("/profile")}
        >
          Gildia
        </button>

        <button
          className="text-amber-100 hover:text-violet-200 hover:-translate-y-0.5 transition font-medium"
          onClick={() => navigate("/map")}
        >
          Mapa
        </button>

        <button
          className="text-amber-100 hover:text-violet-200 hover:-translate-y-0.5 transition font-medium"
        >
          Ustawienia
        </button>

        <button
          className="px-3 py-1 rounded-lg bg-gradient-to-b from-red-400 to-red-600 text-white font-bold shadow-md hover:scale-105 transition"
          onClick={handleLogout}
        >
          Wyloguj
        </button>
      </div>
    </div>
  );
}