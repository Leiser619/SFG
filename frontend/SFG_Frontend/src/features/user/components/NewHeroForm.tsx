import { useState } from "react";
import { useAllHeroesStats, useSaveNewHero } from "../hooks";
import { useNavigate } from "react-router-dom";
import { useForm } from "react-hook-form";

type HeroFormData = {
  name: string;
};



export default function NewHeroForm() {
  const { mutate, isPending, isError, isSuccess, error } = useSaveNewHero();
  const { data, isLoading, isError: isHeroesError } = useAllHeroesStats();
  const navigate = useNavigate();

//TODO after adding money to backend and db change requiredMoney to pathbariable or to cookies 

  const requiredMoney:number = 10 ;
  const userMoney:number=100;

  const [currentIndex, setCurrentIndex] = useState(0);

  const {
    register,
    handleSubmit,
    formState: { errors }
  } = useForm<HeroFormData>();


  function enoughMoney(money:number):boolean{

    if(money < requiredMoney){
          return true;
      }else{
        return false;
    }
  }


  if(enoughMoney(userMoney))
  return(
        navigate("/profile")


  )
  if (isLoading)
    return (
      <div className="min-h-screen flex items-center justify-center bg-gradient-to-b from-sky-900 via-indigo-800 to-emerald-900">
        <div className="rounded-2xl border-4 border-amber-700 bg-amber-50 px-8 py-6 text-amber-900 font-bold shadow-xl">
          Przywoływanie bohaterów...
        </div>
      </div>
    );

  if (isHeroesError || !data || data.length === 0)
    return (
      <div className="min-h-screen flex items-center justify-center bg-gradient-to-b from-sky-900 via-indigo-800 to-emerald-900">
        <div className="rounded-2xl border-4 border-red-400 bg-red-50 px-8 py-6 text-red-700 font-bold shadow-xl">
          Brak danych
        </div>
      </div>
    );

  const currentHero = data[currentIndex];

  const nextHero = () =>
    setCurrentIndex((p) => (p + 1) % data.length);

  const prevHero = () =>
    setCurrentIndex((p) => (p === 0 ? data.length - 1 : p - 1));

  const onSubmit = (formData: HeroFormData) => {
    mutate(
      {
        name: formData.name,
        heroClass: currentHero.heroClass
      },
      {
        onSuccess: () => navigate("/profile")
      }
    );
  };

  return (
    <div className="min-h-screen flex items-center justify-center bg-gradient-to-b from-sky-900 via-indigo-800 to-emerald-900 p-6">
      <form
        onSubmit={handleSubmit(onSubmit)}
        className="w-full max-w-5xl rounded-3xl border-4 border-amber-700 bg-amber-50 shadow-2xl overflow-hidden"
      >
        {/* HEADER */}
        <div className="border-b-4 border-amber-300 bg-gradient-to-r from-amber-200 to-amber-100 p-6">
          <h2 className="text-center text-3xl font-bold text-amber-900 font-['Cinzel'] tracking-wide">
            TWORZENIE POSTACI
          </h2>
        </div>

        {/* NAME */}
        <div className="p-6">
          <input
            placeholder="Imię bohatera"
            {...register("name", { required: true })}
            className="w-full rounded-xl border-2 border-amber-500 bg-white px-4 py-3 text-stone-800 placeholder-stone-500 focus:border-violet-500 focus:outline-none focus:ring-4 focus:ring-violet-200"
          />

          {errors.name && (
            <p className="mt-2 text-sm text-red-600">
              Podaj nazwę
            </p>
          )}
        </div>

        {/* HERO */}
        <div className="flex items-center justify-between px-8 py-4">

          <button
            type="button"
            onClick={prevHero}
            className="h-14 w-14 rounded-full bg-gradient-to-b from-violet-500 to-violet-700 text-white text-xl font-bold shadow-lg hover:scale-105 transition"
          >
            ◀
          </button>

          <div className="flex flex-col items-center">
            <div className="rounded-2xl border-4 border-amber-500 bg-white p-3 shadow-lg">
              <img
                src={currentHero.avatarUrl}
                alt={currentHero.heroClass}
                className="w-80  h-96 object-cover rounded-xl"
              />
            </div>

            <p className="mt-4 text-2xl font-bold text-amber-900">
              {currentHero.heroClass}
            </p>

            <div className="mt-4 flex gap-4">
              <div className="rounded-xl border-2 border-emerald-300 bg-emerald-50 px-4 py-2">
                <p className="font-bold text-emerald-700">
                  HP: {currentHero.health}
                </p>
              </div>

              <div className="rounded-xl border-2 border-red-300 bg-red-50 px-4 py-2">
                <p className="font-bold text-red-700">
                  Attack: {currentHero.attack}
                </p>
              </div>

              <div className="rounded-xl border-2 border-blue-300 bg-blue-50 px-4 py-2">
                <p className="font-bold text-blue-700">  
                  Magic: {currentHero.magic}
                </p>
              </div>

              <div className="rounded-xl border-2 border-lime-300 bg-lime-50 px-4 py-2">
                <p className="font-bold text-lime-700">
                  Speed: {currentHero.speed}
                </p>
              </div>
              <div className="rounded-xl border-2 border-orange-300 bg-orange-50 px-4 py-2">
                <p className="font-bold text-orange-700">
                  Shield: {currentHero.shield}
                </p>
              </div>
              
              <div className="rounded-xl border-2 border-yellow-300 bg-yellow-50 px-4 py-2">
                <p className="font-bold text-yellow-700">
                  Luck: {currentHero.luck}
                </p>
              </div>
              
              <div className="rounded-xl border-2 border-amber-300 bg-amber-50 px-4 py-2">
                <p className="font-bold text-amber-700">
                  Backpack space: {currentHero.backpackSpace}
                </p>
              </div>
            
              
              <div className="rounded-xl border-2 border-violet-300 bg-violet-50 px-4 py-2">
                <p className="font-bold text-violet-700">
                  Spell slots: {currentHero.spellSpace}
                </p>
              </div>
            </div>
          </div>

          <button
            type="button"
            onClick={nextHero}
            className="h-14 w-14 rounded-full bg-gradient-to-b from-violet-500 to-violet-700 text-white text-xl font-bold shadow-lg hover:scale-105 transition"
          >
            ▶
          </button>
        </div>

        {/* FOOTER */}
        <div className="flex items-center justify-between border-t-4 border-amber-300 p-6 bg-amber-100">

          <button
            type="submit"
            disabled={isPending}
            className="rounded-xl bg-gradient-to-b from-amber-500 to-amber-700 px-6 py-3 font-bold text-white shadow-lg transition-all hover:scale-105 hover:from-amber-400 hover:to-amber-600 disabled:opacity-50"
          >
            {isPending ? "Tworzenie..." : "Wybierz bohatera"}
          </button>

          <div>
            {isError && (
              <p className="text-red-700 font-medium">
                {(error as any)?.response?.status === 403
                  ? "Taka kombinacja już istnieje"
                  : "Błąd tworzenia postaci"}
              </p>
            )}

            {isSuccess && (
              <p className="text-emerald-700 font-medium">
                Bohater stworzony!
              </p>
            )}
          </div>
        </div>
      </form>
    </div>
  );
}