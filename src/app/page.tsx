import Link from "next/link";

export default function Home() {
  return (
    <main className="container">
      <header className="flex gap-4 justify-between py-4 text-gray-600">
        <div className="flex gap-4">
          <Link
            href={"/"}
            className="text-blue-600 font-bold"
          >
            Calendix
          </Link>
          <nav>
            <Link href={"/features"}>Features</Link>
            <Link href={"/about"}>About</Link>
            <Link href={"/pricing"}>Pricing</Link>
          </nav>
        </div>

        <nav>
          <Link href={"/features"}>Sign In</Link>
          <Link href={"/about"}>Get Started</Link>
        </nav>
      </header>
    </main>
  );
}
