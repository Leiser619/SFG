//src/features/auth/components
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import { registerSchema } from "./registerSchema";
import type { RegisterFormData } from "./registerSchema";
import { useLogin } from "../hooks";
import { useNavigate } from "react-router-dom";
import "@fontsource/cinzel/400.css";

export default function LoginForm() {
  const { mutate, isPending, isError, error, isSuccess } = useLogin();
  const navigate = useNavigate();

  const {
    register,
    handleSubmit,
    formState: { errors }
  } = useForm<RegisterFormData>({
    resolver: zodResolver(registerSchema)
  });

  const onSubmit = (data: RegisterFormData) => {
    mutate(data, {
      onSuccess: () => navigate("/profile")
    });
  };

  return (
    <div className="min-h-screen flex items-center justify-center bg-gradient-to-b from-sky-900 via-indigo-800 to-violet-900 p-6">

      <div
        className="
        w-full
        max-w-md
        rounded-3xl
        border-4
        border-amber-700
        bg-amber-50
        p-8
        shadow-[0_20px_50px_rgba(0,0,0,0.35)]
      "
      >
        <h2
          className="
          text-center
          text-4xl
          font-bold
          text-amber-900
          mb-8
          tracking-wide
          font-['Cinzel']
        "
        >
          LOGOWANIE
        </h2>

        <form
          onSubmit={handleSubmit(onSubmit)}
          className="space-y-5"
        >
          <div>
            <input
              placeholder="Email"
              {...register("email")}
              className="
                w-full
                rounded-xl
                border-2
                border-amber-500
                bg-white
                px-4
                py-3
                text-stone-800
                placeholder-stone-500
                transition
                focus:border-violet-500
                focus:outline-none
                focus:ring-4
                focus:ring-violet-200
              "
            />

            {errors.email && (
              <p className="mt-2 text-sm text-red-600">
                {errors.email.message}
              </p>
            )}
          </div>

          <div>
            <input
              type="password"
              placeholder="Hasło"
              {...register("password")}
              className="
                w-full
                rounded-xl
                border-2
                border-amber-500
                bg-white
                px-4
                py-3
                text-stone-800
                placeholder-stone-500
                transition
                focus:border-violet-500
                focus:outline-none
                focus:ring-4
                focus:ring-violet-200
              "
            />

            {errors.password && (
              <p className="mt-2 text-sm text-red-600">
                {errors.password.message}
              </p>
            )}
          </div>

          <button
            type="submit"
            disabled={isPending}
            className="
              w-full
              rounded-xl
              bg-gradient-to-b
              from-amber-500
              to-amber-700
              py-3
              font-bold
              text-white
              shadow-lg
              transition-all
              hover:scale-[1.02]
              hover:from-amber-400
              hover:to-amber-600
              disabled:cursor-not-allowed
              disabled:opacity-50
            "
          >
            {isPending ? "Logowanie..." : "Zaloguj się"}
          </button>
        </form>

        {isError && (
          <div
            className="
            mt-4
            rounded-lg
            border
            border-red-300
            bg-red-50
            p-3
            text-center
            text-sm
            text-red-700
          "
          >
            {(error as any)?.response?.data?.message ||
              "Błąd logowania"}
          </div>
        )}

        {isSuccess && (
          <div
            className="
            mt-4
            rounded-lg
            border
            border-emerald-300
            bg-emerald-50
            p-3
            text-center
            text-sm
            text-emerald-700
          "
          >
            Zalogowano!
          </div>
        )}

        <button
          onClick={() => navigate("/register")}
          className="
            mt-6
            w-full
            rounded-xl
            border-2
            border-violet-400
            bg-violet-100
            py-3
            font-medium
            text-violet-800
            transition
            hover:bg-violet-200
          "
        >
          Zarejestruj sie
        </button>
      </div>
    </div>
  );
}