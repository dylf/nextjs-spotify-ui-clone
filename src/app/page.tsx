import { getSession } from "next-auth/react";
import Head from "next/head";
import Center from "@/components/Center";
import Player from "@/components/Player";
import Sidebar from "@/components/Sidebar";

export default function Home() {
  return (
    <div className="bg-black h-screen overflow-hiddens">
      <main className="flex">
        <h1 className="text-white">Hello</h1>
        {/* <Sidebar /> */}
        {/* <Center /> */}
      </main>
      <div className="sticky bottom-0">{/* <Player /> */}</div>
    </div>
  );
}
