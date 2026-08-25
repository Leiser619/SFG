//src/features/user/components/heroManagmementTables/ArcherTable.tsx
import "@fontsource/cinzel/400.css";
import type { fullHeroSchema } from "../schemas/fullHeroSchema";
import {Stat,ItemSlot} from "./SlotFunctions";
interface ArcherTableProps {
  hero: fullHeroSchema;
}


export default function ArcherTable({ hero }: ArcherTableProps) {
  const items = hero.items || [];

  const getItem = (index: number) => items.at(index);

  return (
    <div className="min-h-screen w-full flex items-center justify-center bg-gradient-to-b from-[#160d08] via-[#2b160d] to-[#100806] p-6">
      <div
        className="
          relative
          w-full
          max-w-6xl
          overflow-hidden
          rounded-3xl
          border-4
          border-[#6b3f20]
          bg-gradient-to-br from-[#4a2816] via-[#32190e] to-[#1e0f09]
          p-6
          shadow-[0_20px_60px_rgba(0,0,0,0.7)]
        "
      >

        <div className="relative z-10">
          <div className="mb-6 rounded-2xl border-2 border-[#8b5a2b] bg-gradient-to-b from-[#5a321b] to-[#32180d] px-6 py-4 text-center shadow-inner">
            <h1 className="font-['Cinzel'] text-3xl font-bold tracking-widest text-[#f4d28a] drop-shadow-[0_2px_2px_rgba(0,0,0,0.8)]">
              {hero.name}
            </h1>

            <div className="mt-2 flex justify-center gap-6 text-sm font-semibold text-[#d7b477]">
              <span>EXP: {hero.exp}</span>

            </div>
          </div>

          <div className="grid grid-cols-1 gap-6 lg:grid-cols-[160px_1fr_160px]">
            
            {/* Lewa strona */}
            <div className="flex flex-col gap-4">
              <ItemSlot
                image={getItem(0)}
                label="Hełm"
              />

              <ItemSlot
                image={getItem(1)}
                label="Napierśnik"
              />

              <ItemSlot
                image={getItem(2)}
                label="Spodnie"
              />

              <ItemSlot
                image={getItem(3)}
                label="Buty"
              />


            </div>

            {/* Bohater */}
            <div className="flex min-h-[550px] items-center justify-center rounded-3xl border-4 border-[#70431f] bg-gradient-to-b from-[#24130b] via-[#3a1d0e] to-[#1b0c07] p-8 shadow-[inset_0_0_40px_rgba(0,0,0,0.7)]">
              <div className="flex flex-col items-center">
                <div className="relative">
                  <div className="rounded-3xl border-4 border-[#b27a36] bg-gradient-to-br from-[#6b431f] to-[#2b160b] p-3 shadow-[0_10px_35px_rgba(0,0,0,0.8)]">
                    <img
                      src={hero.avatarUrl}
                      alt={hero.name}
                      className="
                        h-80
                        w-64
                        rounded-2xl
                        border-2
                        border-[#d6a957]
                        object-cover
                        shadow-2xl
                      "
                    />
                  </div>


                  <div className="absolute -bottom-5 left-1/2 -translate-x-1/2 rounded-xl border-2 border-[#b27a36] bg-[#241208] px-6 py-2 shadow-xl">
                    <span className="font-['Cinzel'] text-lg font-bold text-[#f4d28a]">
                      LVL {hero.level}
                    </span>
                  </div>
                </div>

                <p className="mt-10 font-['Cinzel'] text-2xl font-bold text-[#e7c47a]">
                  {hero.name}
                </p>

                <p className="mt-1 text-sm italic text-[#a98258]">
                  {hero.heroClass}
                </p>
              </div>
            </div>

            {/* Prawa strona */}
            <div className="flex flex-col gap-4">
              <ItemSlot
                image={getItem(4)}
                label="Broń"
              />

              <ItemSlot
                image={getItem(5)}
                label="Tarcza"
              />

              <ItemSlot
                image={getItem(6)}
                label="Pierścień"
              />
            </div>
          </div>

          {/* Statystyki */}
          <div className="mt-6 grid grid-cols-2 gap-3 md:grid-cols-3 lg:grid-cols-6">
            <Stat label="ŻYCIE" value={hero.health} />
            <Stat label="ATAK" value={hero.attack} />
            <Stat label="MAGIA" value={hero.magic} />
            <Stat label="SZYBKOŚĆ" value={hero.speed} />
            <Stat label="OBRONA" value={hero.shield} />
            <Stat label="SZCZĘŚCIE" value={hero.luck} />
          </div>
        </div>
      </div>
    </div>
  );
}

