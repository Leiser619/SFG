// src/features/auth/components/LoginForm.tsx
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import { heroSchema, type HeroFormData } from "./heroSchema";

import { useNavigate } from "react-router-dom";


export default function NewHeroForm() {

  const navigate = useNavigate();

  const {
    register,
    handleSubmit,
    formState: { errors }
  } = useForm<HeroFormData>({
    resolver: zodResolver(heroSchema)
  });

  const onSubmit = (data: HeroFormData) => {
    mutate(data,{
      onSuccess: () => {
        navigate("/profile");
      }
    });
  };

  return (
    <div className="w-full bg-yellow-100 h-full justify-center items-center flex flex-col gap-4">
        <h2>Stwórz nowego bohatera</h2>

      <form className="h-full" onSubmit={handleSubmit(onSubmit)}>
        <div>
          <input
            placeholder="Nazwa bohatera"
            {...register("name")}
          />
          {errors.name && <p>{errors.name.message}</p>}
        </div>

        <div className="h-1/2">
        <img src="/src/assets/heroes/tank.png" alt="Tank" />
          <input
            placeholder="Klasa bohatera"
            {...register("heroClass")}
          />
          {errors.heroClass && <p>{errors.heroClass.message}</p>}
        </div>

        <div>
          <input
            placeholder="Link do avatara"
            {...register("avatar")}
          />
          {errors.avatar && <p>{errors.avatar.message}</p>}
        </div>        


        <button type="submit">Stworz bohatera</button>
      </form>
    </div>
  );
}