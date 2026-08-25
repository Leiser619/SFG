//src/features/user/components/heroManagmementTables/TankTable.tsx

import "@fontsource/cinzel/400.css";
import type { fullHeroSchema } from "../schemas/fullHeroSchema";


interface TankTableProps {
    hero: fullHeroSchema;
}

export default function TankTable({ hero }: TankTableProps) {
 console.log("to tutaj"+hero.name)
  return (
    <div className="w-full h-full flex items-center justify-center">
      <table className="w-full h-full table-fixed border-collapse border border-gray-400 text-sm text-left text-gray-500">
        <tbody>
          <tr>
            <td
              className="border border-gray-300"
              colSpan={6}
            >
              Imię bohatera {hero.name}
            </td>
          </tr>

          <tr>
            <td className="border border-gray-300">
              Hełm
            </td>

            <td
              className="border border-gray-300"
              rowSpan={5}
              colSpan={4}
            >
              Zdjęcie
            </td>

            <td className="border border-gray-300">
              Item dodatkowy
            </td>
          </tr>

          <tr>
            <td className="border border-gray-300">
              Napierśnik
            </td>

            <td className="border border-gray-300">
              Item dodatkowy
            </td>
          </tr>

          <tr>
            <td className="border border-gray-300">
              Spodnie
            </td>

            <td className="border border-gray-300">
              Item dodatkowy
            </td>
          </tr>

          <tr>
            <td className="border border-gray-300">
              Buty
            </td>

            <td className="border border-gray-300">
              Item dodatkowy
            </td>
          </tr>

          <tr>
            <td className="border border-gray-300">
              —
            </td>

            <td className="border border-gray-300">
              Item dodatkowy
            </td>
          </tr>

          <tr>
            <td className="border border-gray-300">1</td>
            <td className="border border-gray-300">2</td>
            <td className="border border-gray-300">3</td>
            <td className="border border-gray-300">4</td>
            <td className="border border-gray-300">5</td>
            <td className="border border-gray-300">6</td>
          </tr>
        </tbody>
      </table>
    </div>
  );
}