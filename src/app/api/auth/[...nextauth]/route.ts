import NextAuth from "next-auth";
import SpotifyProvider from "next-auth/providers/spotify";
import { env } from "@/env.mjs";

const handler = NextAuth({
  providers: [
    SpotifyProvider({
      clientId: env.SPOTIFY_CLIENT_ID,
      clientSecret: env.SPOTIFY_CLIENT_SECRET,
    }),
  ],
});

export { handler as GET, handler as POST };
