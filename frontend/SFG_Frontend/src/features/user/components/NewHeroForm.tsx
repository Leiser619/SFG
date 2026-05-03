// src/features/auth/components/LoginForm.tsx
import { useState } from "react";
import { useAllHeroesStats, useSaveNewHero } from "../hooks";
import { useNavigate } from "react-router-dom";
import { useForm } from "react-hook-form";
type HeroFormData = {
  name: string;
  heroClass: string;
};


export default function NewHeroForm() {
  const { mutate, isPending, isError, isSuccess } = useSaveNewHero();
  const navigate = useNavigate();

 const { data, isLoading, isError: isHeroesError } = useAllHeroesStats();
  const [currentIndex, setCurrentIndex] = useState(0);

  const {
    register,
    handleSubmit,
    formState: { errors }
  } = useForm<HeroFormData>();


   const onSubmit = (formData: HeroFormData) => {
    const selectedHero = data?.[currentIndex];

    mutate({
      name: formData.name,
      heroClass: selectedHero.heroClass
    });
  };



//obsluga przyciskow
  const nextHero = () => {
    if (!data) return;
    setCurrentIndex((prev) => (prev + 1) % data.length);
  };

  const prevHero = () => {
    if (!data) return;
    setCurrentIndex((prev) =>
      prev === 0 ? data.length - 1 : prev - 1
    );
  };``


  

// guardy 
  if (isLoading) return <p>Ładowanie...</p>;
  if (isError) return <p>Błąd</p>;
  if (!data || data.length === 0) return <p>Brak danych</p>;

  const currentHero = data[currentIndex];

 return (
    <div className="h-full w-full flex justify-center items-center p-6 bg-yellow-100">
      <form
        onSubmit={handleSubmit(onSubmit)}
        className="bg-pink-100 h-full w-3/4"
      >
        <div className="w-full h-1/4 bg-purple-100">
          Nazwij bohatera:
          <input
            type="text"
            placeholder="Nazwa bohatera"
            {...register("name", { required: true })}
          />
          {errors.name && <p>Podaj nazwę</p>}
        </div>

        <div className="h-3/4 w-full flex justify-center items-center p-6 bg-green-100">
          <button type="button" onClick={() =>
            setCurrentIndex((prev) =>
              prev === 0 ? data.length - 1 : prev - 1
            )
          }>
            Poprzedni
          </button>

          <img
            className="w-full h-3/4"
            src={currentHero.avatarUrl}
            alt={currentHero.heroClass}
          />

          <div>
            <p>{currentHero.heroClass}</p>
            <p>HEALTH: {currentHero.health}</p>
            <p>ATTACK: {currentHero.attack}</p>
          </div>

          <button type="button" onClick={() =>
            setCurrentIndex((prev) => (prev + 1) % data.length)
          }>
            Następny
          </button>
        </div>

        <button type="submit" disabled={isPending}>
                  {isError && (
            <p style={{ color: "red" }}>
              { (error as any)?.response?.status === 403
                ? "Taka kombinacja nazwy i klasy już istnieje"
                : "Coś poszło nie tak"
              }
            </p>
          )}
          {isPending ? "Zapis..." : "Wybierz"}
        </button>

        {isError && <p>Błąd zapisu</p>}
        {isSuccess && <p>Hero zapisany!</p>}
      </form>
      
    </div>
  );
}