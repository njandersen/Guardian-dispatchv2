import { db } from "@/db";
import { DISCORD_CLIENT, DISCORD_SECRET } from "@/utils/config";
import { DrizzleAdapter } from "@auth/drizzle-adapter";
import { NextAuthOptions } from "next-auth";
import { Adapter } from "next-auth/adapters";
import DiscordProvider from "next-auth/providers/discord";

if (!DISCORD_CLIENT || !DISCORD_SECRET) {
  throw new Error(
    "Please set DISCORD_CLIENT_ID and DISCORD_CLIENT_SECRET in .env"
  );
}

export const authConfig: NextAuthOptions = {
  adapter: DrizzleAdapter(db) as Adapter,
  providers: [
    DiscordProvider({
      clientId: DISCORD_CLIENT,
      clientSecret: DISCORD_SECRET,
    }),
  ],
};
