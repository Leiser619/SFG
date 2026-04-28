import { useMe } from "../../auth/hooks";
import { useLogout } from "../../auth/hooks";




export default function PlayerMenu() {
const { data: user } = useMe();
const logout = useLogout();
  return (
    
    <div className="flex items-center justify-between border-2 bg-gray-100 w-full px-4 h-full">
           <h1 className="text-2xl font-semibold">{user}</h1>
          <button className="hover:text-blue-500">Gildia</button>
          <button className="hover:text-blue-500">Ustawienia</button>
          <button className="hover:text-blue-500" onClick={() => logout.mutate()}>Wyloguj</button>
    </div>
  );
}
 