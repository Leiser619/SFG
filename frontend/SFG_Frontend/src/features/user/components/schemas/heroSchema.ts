import { z } from "zod";
import type { he } from "zod/locales";

//TODO - zmiana heroClass na pobieranie z bazy danych unique rekordow dla klasy i wtedy ich wpisanie bo teraz trzeba to aktualizowac recznie przy kazdej zmianie klas w bazie danych
export const heroSchema = z.object({
  name: z.string().min(3, "Min 3 znaki"),
  heroClass: z.enum(["WARRIOR", "MAGE", "ARCHER","TANK"], "Wybierz klasę"),
});

export type HeroFormData = z.infer<typeof heroSchema>;