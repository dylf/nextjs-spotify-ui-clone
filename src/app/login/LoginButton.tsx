"use client";
import { ClientSafeProvider, signIn } from "next-auth/react";

export default function Login({ provider }: { provider: ClientSafeProvider }) {
  return (
    <div>
      <button
        className="bg-[#18D860] text-white p-5 rounded-full font-bold"
        onClick={() => signIn(provider.id, { callbackUrl: "/" })}
      >
        Login with {provider.name}
      </button>
    </div>
  );
}
