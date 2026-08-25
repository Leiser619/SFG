import { useGetMyHeroes } from "../hooks";
import "@fontsource/cinzel/400.css";
import { useNavigate } from "react-router-dom";

type Hero = {
  heroId:number
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
    <div className="min-h-screen w-full flex items-center justify-center bg-gradient-to-b from-[#160d08] via-[#2b160d] to-[#100806] p-6">
      {/* Główna drewniana tablica */}
      <div
        className="
          relative
          w-full
          max-w-7xl
          overflow-hidden
          rounded-3xl
          border-4
          border-[#6b3f20]
          bg-gradient-to-br
          from-[#4a2816]
          via-[#32190e]
          to-[#1e0f09]
          p-6
          shadow-[0_20px_60px_rgba(0,0,0,0.75)]
        "
      >
        {/* Deski */}
        <div className="pointer-events-none absolute inset-0 opacity-20">
          <div
            className="
              absolute
              inset-0
              bg-[repeating-linear-gradient(
                0deg,
                transparent_0px,
                transparent_55px,
                rgba(0,0,0,0.35)_56px,
                transparent_58px
              )]
            "
          />

          <div
            className="
              absolute
              inset-0
              bg-[repeating-linear-gradient(
                90deg,
                transparent_0px,
                transparent_180px,
                rgba(0,0,0,0.25)_181px,
                transparent_184px
              )]
            "
          />
        </div>

        <div className="relative z-10">
          {/* Nagłówek */}
          <div
            className="
              mb-8
              rounded-2xl
              border-2
              border-[#8b5a2b]
              bg-gradient-to-b
              from-[#5a321b]
              to-[#32180d]
              px-6
              py-5
              text-center
              shadow-[inset_0_0_25px_rgba(0,0,0,0.5)]
            "
          >
            <h1
              className="
                font-['Cinzel']
                text-3xl
                font-bold
                tracking-[0.2em]
                text-[#f4d28a]
                drop-shadow-[0_2px_2px_rgba(0,0,0,0.8)]
              "
            >
              Zarzadzanie bohaterami
            </h1>

            <p className="mt-2 text-sm italic text-[#a98258]">
              Możesz edytować swoich bohaterów
            </p>
          </div>

          {/* Lista bohaterów */}
          <div className="grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-4">
            {slots.map((hero, i) => (
<div
  key={i}
  className="
    group
    relative
    h-72
    overflow-hidden
    rounded-2xl
    border-2
    border-[#71451f]
    bg-gradient-to-br
    from-[#422313]
    via-[#32180d]
    to-[#1d0d07]
    p-3
    shadow-[inset_0_0_25px_rgba(0,0,0,0.6)]
    transition-all
    duration-300
    hover:-translate-y-2
    hover:border-[#c28b3c]
    hover:shadow-[0_12px_30px_rgba(0,0,0,0.7)]
  "
>
  <div className="pointer-events-none absolute inset-2 rounded-xl border border-[#8a5a2c]/50" />

  {hero ? (
    <div className="relative flex h-full flex-col items-center justify-center text-center">

      {/* Avatar */}
      <div
        className="
          relative
          rounded-xl
          border-2
          border-[#b27a36]
          bg-gradient-to-br
          from-[#6b431f]
          to-[#2b160b]
          p-1.5
          shadow-[0_6px_15px_rgba(0,0,0,0.7)]
        "
      >
        <img
          src={hero.avatar}
          alt={hero.heroClass}
          className="
            h-24
            w-24
            rounded-lg
            border
            border-[#d6a957]
            object-cover
          "
        />
        <div
          className="
            absolute
            -bottom-3
            left-1/2
            -translate-x-1/2
            whitespace-nowrap
            rounded-lg
            border
            border-[#b27a36]
            bg-[#241208]
            px-3
            py-1
            text-[11px]
            font-bold
            text-[#f4d28a]
            shadow-lg
          "
        >
          BOHATER
        </div>
      </div>

      <p
        className="
          mt-5
          font-['Cinzel']
          text-lg
          font-bold
          text-[#e7c47a]
        "
      >
        {hero.name}
      </p>

      <p className="mt-0.5 text-sm font-semibold uppercase tracking-wider text-[#a98258]">
        {hero.heroClass}
      </p>

      <div className="mt-2 w-4/5">
        <div className="mb-1 flex justify-between text-[11px]">
          <span className="text-[#8f6845]">
            DOŚWIADCZENIE
          </span>

          <span className="font-bold text-[#d6b477]">
            {hero.exp}
          </span>
        </div>

        <div className="h-1.5 overflow-hidden rounded-full border border-[#59371d] bg-[#1b0c07]">
          <div
            className="
              h-full
              rounded-full
              bg-gradient-to-r
              from-[#9b681f]
              via-[#d5a43e]
              to-[#f1d078]
            "
            style={{
              width: `${Math.min(hero.exp / 10, 100)}%`,
            }}
          />
        </div>
      </div>

      <button
        onClick={() => navigate(`/profile/manage/${hero.heroId}`)}
        className="
          mt-3
          rounded-xl
          border-2
          border-[#9a682d]
          bg-gradient-to-b
          from-[#9c6828]
          to-[#613813]
          px-6
          py-2
          text-sm
          font-bold
          text-[#fff0c4]
          shadow-md
          transition-all
          hover:scale-105
          hover:from-[#bd8437]
          hover:to-[#79501d]
        "
      >
        ZARZĄDZAJ
      </button>

                  </div>
                ) : (

                  <div className="flex h-full flex-col items-center justify-center text-center">
                    <div
                      className="
                        flex
                        h-24
                        w-24
                        items-center
                        justify-center
                        rounded-2xl
                        border-2
                        border-dashed
                        border-[#71451f]
                        bg-[#241108]
                        text-5xl
                        font-light
                        text-[#69452a]
                        transition-all
                        group-hover:border-[#a87535]
                        group-hover:text-[#a87535]
                      "
                    >
                      +
                    </div>

                    <p className="mt-5 font-['Cinzel'] text-lg font-bold text-[#9d7347]">
                      PUSTY SLOT
                    </p>

                    <button
                      onClick={() => navigate("/create-hero")}
                      className="
                        mt-4
                        rounded-xl
                        border-2
                        border-[#9a682d]
                        bg-gradient-to-b
                        from-[#9c6828]
                        to-[#613813]
                        px-5
                        py-2
                        font-bold
                        text-[#fff0c4]
                        shadow-md
                        transition-all
                        hover:scale-105
                        hover:from-[#bd8437]
                        hover:to-[#79501d]
                      "
                    >
                      STWÓRZ BOHATERA
                    </button>
                  </div>
                )}
              </div>
            ))}
          </div>

          <div className="mt-8 flex items-center justify-center gap-4">
            <div className="h-px flex-1 bg-gradient-to-r from-transparent via-[#8b5a2b] to-[#8b5a2b]" />

            <span className="font-['Cinzel'] text-sm tracking-widest text-[#8f6845]">
              
            </span>

            <div className="h-px flex-1 bg-gradient-to-l from-transparent via-[#8b5a2b] to-[#8b5a2b]" />
          </div>
        </div>
      </div>
    </div>
  );
}