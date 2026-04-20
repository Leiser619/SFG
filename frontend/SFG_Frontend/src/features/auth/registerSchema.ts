import { z } from "zod";

export const registerSchema = z.object({
  email: z.string().email("Niepoprawny email"),
  password: z.string().min(8, "Min 8 znaków")
});

export type RegisterFormData = z.infer<typeof registerSchema>;