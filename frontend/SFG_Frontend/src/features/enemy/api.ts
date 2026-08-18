// src/features/enemy/api.ts
import { api } from "../../shared/api/axios";
import type EnemyType  from "../enemy/EnemyType";


export const getEnemyById = async (id: number): Promise<EnemyType> => {
  const res = await api.get(`/enemy/getEnemyById/${id}`);
  return res.data;
}

export const getEnemyByRegion = async (regionName: string): Promise<EnemyType[]> => {
  const res = await api.get(`/enemy/getEnemiesByRegion/${regionName}`);

  return res.data;
}