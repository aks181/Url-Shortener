import { auth } from "@clerk/nextjs/server";
import { redirect } from "next/navigation";

export default async function Home() {
  const { userId } = await auth();
  if (userId) redirect("/dashboard");

  return (
    <main className="min-h-screen flex flex-col items-center justify-center p-8">
      <h1 className="text-4xl font-bold mb-4">UrlShortener</h1>
      <p className="text-lg text-gray-500">Shorten your URLs quickly and easily.</p>
    </main>
  );
}
