import jwt from "jsonwebtoken";
import { settings } from "../config";

export default async function createToken(query: any): Promise<string> {
  return await jwt.sign({ _id: query[0] }, settings.tokenSettings.secret, {
    expiresIn: 60 * 60 * 24 * 7,
  });
}
