import { getServerSession } from "next-auth";
import { authOptions } from "@/app/api/auth/[...nextauth]/route";
import App from "@/components/App";

export default async function Home() {
  const session = await getServerSession(authOptions);
  return (
    <div className="bg-black h-screen overflow-hiddens">
      <App session={session} />
    </div>
  );
}
