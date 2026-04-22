import React, { useState } from "react";
import { useMe } from "../hooks";
const OPTIONS = [
  "Opcja 1",
  "Opcja 2",
  "Opcja 3",
  "Opcja 4",
  "Opcja 5",
  "Opcja 6",
  "Opcja 7",
];

export default function HeroTable() {
  const [selected, setSelected] = useState<string | null>(null);

  const { data: user } = useMe();
  if (!user) {
    return <div>Ładowanie...</div>;
  }

  return (
    <div className="min-h-screen bg-gray-100">
      {/* Menu */}
      <nav className="bg-white shadow p-4 flex justify-between">
        <div className="font-bold text-lg">Moja Aplikacja</div>
        <div className="space-x-4">
          <button className="hover:text-blue-500">Profil</button>
          <button className="hover:text-blue-500">Ustawienia</button>
          <button className="hover:text-blue-500">Wyloguj</button>
        </div>
      </nav>

      {/* Header użytkownika */}
      <div className="p-6 bg-white shadow mt-4 mx-4 rounded-2xl">
        <h1 className="text-2xl font-semibold">{user}</h1>
      </div>

      {/* Tabela */}
      <div className="p-6">
        <div className="bg-white rounded-2xl shadow overflow-hidden">
          <table className="w-full text-left">
            <thead className="bg-gray-200">
              <tr>
                <th className="p-3 border-2">Wybór</th>
                <th className="p-3 border-2border border-gray-300">Akcja</th>
                <th className="p-3 border border-gray-300">Opcja</th>
              </tr>
            </thead>
            <tbody>
              {OPTIONS.map((option) => (
                <tr
                  key={option}
                  className={`border-t cursor-pointer ${
                    selected === option ? "bg-blue-100" : ""
                  }`}
                  onClick={() => setSelected(option)}
                >
                  <td className="p-3">{option}</td>
                  <td className="p-3">
                    <input
                      type="radio"
                      checked={selected === option}
                      onChange={() => setSelected(option)}
                    />
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>

        {/* Wybrana opcja */}
        <div className="mt-4 text-lg">
          Wybrano: <span className="font-semibold">{selected || "Brak"}</span>
        </div>
      </div>
    </div>
  );
}
