import { createPool } from "mysql2/promise";
import { settings } from "./config";

export async function connect() {
  return await createPool(settings.database);
}
