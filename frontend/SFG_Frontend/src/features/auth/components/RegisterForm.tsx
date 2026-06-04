//src/features/auth/components
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import { registerSchema } from "./registerSchema";
import type { RegisterFormData } from "./registerSchema";
import { useRegister } from "../hooks";
import { useNavigate } from "react-router-dom";
import "@fontsource/cinzel/400.css";

export default function RegisterForm() {
  const { mutate, isPending, isError, error, isSuccess } = useRegister();
  const navigate = useNavigate();

  const {
    register,
    handleSubmit,
    formState: { errors }
  } = useForm<RegisterFormData>({
    resolver: zodResolver(registerSchema)
  });

  const onSubmit = (data: RegisterFormData) => {
    mutate(data);
  };

  return (
    <div className="min-h-screen flex items-center justify-center bg-gradient-to-b from-indigo-950 via-violet-900 to-indigo-950 p-6">
      <div className="w-full max-w-md rounded-3xl border-4 border-amber-600 bg-violet-50 p-8 shadow-2xl">
        <h2 className="text-center text-4xl font-bold text-violet-800 mb-8 tracking-wide font-['Cinzel']">
          REJESTRACJA
        </h2>

        <form onSubmit={handleSubmit(onSubmit)} className="space-y-5">
          <div>
            <input
              placeholder="Email"
              {...register("email")}
              className="w-full rounded-xl border-2 border-violet-300 bg-white px-4 py-3 text-stone-800 placeholder-stone-500 focus:border-amber-500 focus:outline-none focus:ring-4 focus:ring-amber-200"
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
              className="w-full rounded-xl border-2 border-violet-300 bg-white px-4 py-3 text-stone-800 placeholder-stone-500 focus:border-amber-500 focus:outline-none focus:ring-4 focus:ring-amber-200"
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
            className="w-full rounded-xl bg-gradient-to-b from-violet-500 to-violet-700 py-3 font-bold text-white shadow-lg transition-all hover:scale-[1.02] hover:from-violet-400 hover:to-violet-600"
          >
            {isPending ? "Rejestruję..." : "Zarejestruj"}
          </button>
        </form>

        {isError && (
          <div className="mt-4 rounded-lg border border-red-300 bg-red-50 p-3 text-center text-sm text-red-700">
            {(error as any)?.response?.data?.message || "Błąd"}
          </div>
        )}

        {isSuccess && (
          <div className="mt-4 rounded-lg border border-emerald-300 bg-emerald-50 p-3 text-center text-sm text-emerald-700">
            Konto utworzone!
          </div>
        )}

        <button
          onClick={() => navigate("/")}
          className="mt-6 w-full rounded-xl border-2 border-amber-500 bg-amber-100 py-3 font-medium text-amber-800 hover:bg-amber-200"
        >
          Zaloguj sie
        </button>
      </div>
    </div>
  );
}