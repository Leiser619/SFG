import React from "react";
import { useGetMyHeroes } from "../hooks";

type Hero = {
  name: string;
  heroClass: string;
  avatar: string;
  exp: number;
};

export default function HeroTable() {
  const { data } = useGetMyHeroes();

  const heroes: Hero[] = data || [];

  const slots = Array.from({ length: 8 },  (_, i) => heroes[i] || null);
console.log(data)
  return (
    <div className="h-full w-full flex justify-center items-center p-6 bg-yellow-100">
      <table className="w-full h-full table-fixed text-left border-collapse">
        <tbody>
          {[0, 1].map((row) => (
            <tr key={row}>
              {slots.slice(row * 4, row * 4 + 4).map((hero, index) => (
                <td key={index} className="border-2 text-center p-4">
                  {hero ? (
                    <div>
                      <img
                        src={hero.avatar}
                        alt={hero.heroClass}
                        className="w-full h-24 object-cover"
                      />
                      <p>{hero.name}</p>
                      <p>{hero.heroClass}</p>
                      <p>EXP: {hero.exp}</p>
                    </div>
                  ) : (
                    <button className="bg-gray-200 p-2" >
                      Kup nowego bohatera
                    </button>
                  )}
                </td>
              ))}
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
}