import { Suspense } from "react";
import Image from "next/image";
import { getProviders } from "next-auth/react";
import LoginButton from "./LoginButton";

export default async function Login() {
  const providers = await getProviders();

  if (providers === null) return <Suspense fallback="loading" />;
  return (
    <div className="flex flex-col items-center bg-black min-h-screen w-full justify-center">
      <img
        className="w-52 mb-5"
        src="https://storage.googleapis.com/pr-newsroom-wp/1/2018/11/Spotify_Logo_CMYK_Green.png"
        alt="Spotify Logo"
        width="400px"
      />
      {Object.values(providers).map((provider) => (
        <LoginButton provider={provider} key={provider.name} />
      ))}
    </div>
  );
}
