import { signIn, useSession } from "next-auth/react";
import { useEffect, useState } from "react";
import { SpotifyApi } from "@spotify/web-api-ts-sdk";
import SpotifyWebApi from "spotify-web-api-node";

const spotifyApi = new SpotifyWebApi({
  clientId: process.env.NEXT_PUBLIC_CLIENT_ID,
  clientSecret: process.env.NEXT_PUBLIC_CLIENT_SECRET,
});

const useSpotify = () => {
  const { data: session, status } = useSession();
  const [prof, setProf] = useState(null);
  console.log(prof);
  useEffect(() => {
    if (session) {
      if (session.error === "RefreshAccessTokenError") {
        signIn();
      }
      console.log(session.user);

      (async () => {
        const spotify = SpotifyApi.withAccessToken(
          process.env.NEXT_PUBLIC_CLIENT_ID,
          session.user.accessToken
        );
        const profile = await spotify.currentUser.profile();
        setProf(profile);
      })();
      spotifyApi.setAccessToken(session.user.accessToken);
    }
  }, [session]);
  return spotifyApi;
};

export default useSpotify;
