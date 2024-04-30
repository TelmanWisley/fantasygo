import { Env } from "../interfaces";
import dotenv from "dotenv";

dotenv.config();

const _env = process.env;

export const env: Env = {
  port: _env.PORT,
  secretKey: _env.SECRET_KEY,
  premierUrl: _env.PREMIER_URL,
  championUrl: _env.CHAMPION_URL
}