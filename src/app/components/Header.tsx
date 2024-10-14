import { CalendarDays } from "lucide-react";
import Link from "next/link";

export default function Header() {
  return (
    <header className="flex gap-4 justify-between py-4 text-gray-600">
        <div className="flex gap-10 items-center">
          <Link
            href={"/"}
            className="text-blue-600 font-bold text-2xl flex gap-1 items-center"
          >
            <CalendarDays size={24}/>
            Calendix
          </Link>
          <nav className="flex gap-4 items-center">
            <Link href={"/features"}>Features</Link>
            <Link href={"/about"}>About</Link>
            <Link href={"/pricing"}>Pricing</Link>
          </nav>
        </div>

        <nav className="flex items-center gap-4">
          <Link href={"/features"}>Sign In</Link>
          <Link className="bg-blue-600 text-white py-2 px-4 rounded-full" href={"/about"}>Get Started</Link>
        </nav>
      </header>
  )
}
