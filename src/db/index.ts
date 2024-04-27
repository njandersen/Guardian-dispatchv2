import * as schema from "./schema";
import { drizzle } from "drizzle-orm/postgres-js";
import postgres from "postgres";

import { DB_URL } from "@/utils/config";

if (!DB_URL) {
  throw new Error("Please set DATABASE_URL in .env");
}

const queryClient = postgres(DB_URL);
export const db = drizzle(queryClient, { schema });
