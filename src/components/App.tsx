"use client";
import { SessionProvider } from "next-auth/react";
import Center from "@/components/Center";
import Player from "@/components/Player";
import Sidebar from "@/components/Sidebar";
import { RecoilRoot } from "recoil";
import { Session } from "next-auth";

export default function App({ session }: { session: Session | null }) {
  return (
    <RecoilRoot>
      <SessionProvider session={session}>
        <main className="flex">
          <Sidebar />
          <Center />
        </main>
        <div className="sticky bottom-0">
          <Player />
        </div>
      </SessionProvider>
    </RecoilRoot>
  );
}
