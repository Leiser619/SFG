// src/features/auth/components/LoginForm.tsx
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import { registerSchema } from "./registerSchema";
import type { RegisterFormData } from "./registerSchema";
import { useLogin } from "../hooks";
import { useNavigate } from "react-router-dom";

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
    mutate(data,{
      onSuccess: () => {
        navigate("/profile");
      }
    });
  };

  return (
    <div style={{ maxWidth: 400, margin: "0 auto" }}>
      <h2>Logowanie</h2>

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
          {isPending ? "Loguje..." : "Zaloguj"}
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