import { Request } from "express";

export interface Env {
  port: string | number;
  secretKey: string;
  premierUrl: string;
  championUrl: string;
}

export interface Context {
  req: Request;
}

export interface Token {
  phoneNumber: string,
  password: string
}

export interface PremierLeague {
  first_name: string;
  second_name: string;
  team: number;
  total_points: number;
}

export interface PremierResponse {
  elements: PremierLeague[]
}

export interface ChampionLeague {
  pDName: string;
  pFName: string;
  tName: string;
  totPts: number;
}

export interface ChampionResponse {
  data: {
    value: {
      playerList: ChampionLeague[]
    }
  }
}

export interface TransformProps {
  data: PremierResponse | ChampionResponse;
  team?: string;
  page?: number;
  limit?: number;
  sort?: boolean;
}

export interface FetchDataProps {
  url: string;
  team?: string;
  page?: number;
  limit?: number;
  sort?: boolean;
  transform: (params: TransformProps) => any[];
}
