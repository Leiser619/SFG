// src/features/enemy/EnemyType.ts
export default interface EnemyType {
  id: number;
  name: string;
  level: number;
  regionName: string;
  avatarUrl: string;
  health: number;
  attack: number;
  magic: number;
  speed: number;
  shield: number;
  luck: number;
}
