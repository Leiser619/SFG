import type { FightAction } from "./FightAction";
import type {Reward} from  "../../enemy/components/Reward";
export interface FightResult {
  fightId: number;
  heroWon: boolean;
  actions: FightAction[];
  reward: Reward;
}