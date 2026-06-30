import { HeroClass } from "./HeroClass";

export interface FighterStatsDto {
  id: number;
  name: string;
  avatarUrl?: string;
  heroClass: HeroClass;

  health: number;
  attack: number;
  magic: number;
  speed: number;
  shield: number;
  luck: number;
}