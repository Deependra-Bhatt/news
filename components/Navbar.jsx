// components/Navbar.js
import Link from "next/link";

export default function Navbar() {
  return (
    <header className="bg-red-700 text-white">
      <div className="mx-auto flex max-w-6xl items-center justify-between px-4 py-2">
        {/* Logo + Site name */}
        <Link href="/" className="flex items-center gap-2">
          <div className="h-8 w-8 rounded-full bg-white text-red-700 flex items-center justify-center font-bold">
            LH
          </div>
          <span className="text-xl font-extrabold tracking-tight">
            लाइव हिन्दुस्तान
          </span>
        </Link>

        {/* Desktop nav */}
        <nav className="hidden gap-4 text-sm font-medium md:flex">
          <Link href="/" className="hover:underline">
            होम
          </Link>
          <Link href="/" className="hover:underline">
            राज्य
          </Link>
          <Link href="/" className="hover:underline">
            क्रिकेट
          </Link>
          <Link href="/" className="hover:underline">
            मनोरंजन
          </Link>
          <Link href="/" className="hover:underline">
            करियर
          </Link>
        </nav>

        {/* Mobile menu icon (only visual) */}
        <button className="rounded border border-white px-2 py-1 text-xs md:hidden">
          मेन्यू
        </button>
      </div>
    </header>
  );
}
