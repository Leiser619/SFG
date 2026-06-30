import type { FightAction } from "./FightAction";

export interface FightResult {
  heroWon: boolean;
  actions: FightAction[];
}