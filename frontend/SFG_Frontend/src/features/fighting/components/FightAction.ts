import type { FighterStatsDto } from "./FighterStatsDto";

export interface FightAction {
  attacker: FighterStatsDto;
  target: FighterStatsDto;

  targetHpLeft:number[];
  damage: number[];
  attackTime: number[];
  crit: boolean[];
}