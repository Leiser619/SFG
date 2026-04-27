import { getMe } from "../../auth/api";
import { useQuery } from "@tanstack/react-query";
export const useMe = () => {
  return useQuery({
    queryKey: ["me"],
    queryFn: getMe
  });
};



export default function PlayerMenu() {
const { data: user } = useMe();
  return (
    
    // <div className="border-2 border-solid min-h-screen bg-gray-100 w-full flex-row space-x-4">
    <div className="flex items-center justify-between border-2 bg-gray-100 w-full px-4">
          <div className="p-6 bg-white shadow rounded-2xl">
            <h1 className="text-2xl font-semibold">{user}</h1>
          </div>
          <button className="hover:text-blue-500">Profil</button>
          <button className="hover:text-blue-500">Ustawienia</button>
          <button className="hover:text-blue-500">Wyloguj</button>
    </div>
  );
}
 