import { z } from "zod";
import type { he } from "zod/locales";

export const heroSchema = z.object({
  name: z.string().min(3, "Min 3 znaki"),
  heroClass: z.enum(["WARRIOR", "MAGE", "ARCHER","TANK"], "Wybierz klasę"),
  avatar: z.string().url("Niepoprawny URL")
});

export type HeroFormData = z.infer<typeof heroSchema>;