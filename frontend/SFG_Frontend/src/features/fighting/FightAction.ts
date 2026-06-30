import type { FighterStatsDto } from "./FighterStatsDto";

export interface FightAction {
  attacker: FighterStatsDto;
  target: FighterStatsDto;

  damage: number[];
  attackTime: number[];
  crit: boolean[];
}