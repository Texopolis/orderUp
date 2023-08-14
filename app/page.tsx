import SignInComp from "@/components/SignInComp";
import { currentUser } from "@clerk/nextjs";
import Link from "next/link";

export default async function Home() {
  const user = await currentUser();

  if (!user) {
    return (
      <main className="grid min-h-screen place-items-center p-4">
        <div className="flex w-full items-center justify-center">
          <SignInComp />
        </div>
      </main>
    );
  } else
    return (
      <div className="border-2 border-white grid min-h-screen place-items-center">
        <div className="flex flex-col items-center">
          <div>Looks like you went back too far</div>
          <Link href={"/dashboard"} className="text-blue-500 text-xl">Go back to the dashboard</Link>
        </div>
      </div>
    );
}
