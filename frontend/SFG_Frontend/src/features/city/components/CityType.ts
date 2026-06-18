// src/features/city/CityType.ts
export default interface CityType {
  id: number;
  locationName: string;
  description: string;
  backgroundUrl: string;
  requiredLevel: string;
  buildings: {
    id: number;
    name: string;
    description: string;
    imageUrl: string;
  }[];

}