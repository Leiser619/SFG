// src/features/auth/components/RegisterForm.tsx
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import { registerSchema } from "./registerSchema";
import type { RegisterFormData } from "./registerSchema";
import { useRegister } from "../hooks";

export default function RegisterForm() {
  const { mutate, isPending, isError, error, isSuccess } = useRegister();

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
    <div style={{ maxWidth: 400, margin: "0 auto" }}>
      <h2>Rejestracja</h2>

      <form onSubmit={handleSubmit(onSubmit)}>
        <div>
          <input
            placeholder="Email"
            {...register("email")}
          />
          {errors.email && <p>{errors.email.message}</p>}
        </div>

        <div>
          <input
            type="password"
            placeholder="Hasło"
            {...register("password")}
          />
          {errors.password && <p>{errors.password.message}</p>}
        </div>

        <button type="submit" disabled={isPending}>
          {isPending ? "Rejestruję..." : "Zarejestruj"}
        </button>
      </form>

      {isError && (
        <p style={{ color: "red" }}>
          Błąd: {(error as any)?.response?.data?.message || "Coś poszło nie tak"}
        </p>
      )}

      {isSuccess && (
        <p style={{ color: "green" }}>
          Konto utworzone!
        </p>
      )}
    </div>
  );
}