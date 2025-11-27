// components/Navbar.js
import Link from "next/link";
import { useState } from "react";
import { FiMenu, FiSearch } from "react-icons/fi";
import {
  FaRegImage,
  FaRegPlayCircle,
  FaMapMarkerAlt,
  FaRegNewspaper,
  FaUser,
} from "react-icons/fa";

const mainLinks = [
  { label: "Home", href: "/", isActive: true },
  { label: "State", href: "/state" },
  { label: "Nation", href: "/nation" },
  { label: "Cricket", href: "/cricket" },
  { label: "Live Score", href: "/live-score" },
  { label: "Entertainment", href: "/entertainment" },
  { label: "Business", href: "/business" },
  { label: "Career", href: "/career" },
  { label: "World", href: "/world" },
  { label: "Religion", href: "/religion" },
  { label: "Horoscope", href: "/" },
  { label: "Lifestyle", href: "/lifestyle" },
  { label: "Auto", href: "/" },
  { label: "Gadgets", href: "/gadgets" },
];

export default function Navbar() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  return (
    <>
      {/* TOP ROW (NOT STICKY) */}
      <div className="bg-white border-b border-gray-200">
        <div className="mx-auto flex max-w-7xl items-center gap-3 px-4 py-8">
          {/* Hamburger */}
          <button
            type="button"
            onClick={() => setIsMenuOpen(true)}
            className="flex h-9 w-9 items-center justify-center cursor-pointer rounded-full border border-gray-300"
            aria-label="Open menu"
          >
            <FiMenu className="text-lg text-gray-700" />
          </button>

          {/* Logo */}
          <Link href="/" className="flex items-center gap-2">
            <div className="flex h-11 w-11 text-2xl items-center justify-center rounded-full border border-red-700 text-red-700 font-extrabold">
              हि
            </div>
            <span className="text-5xl font-extrabold text-red-700 tracking-tight">
              हिन्दुस्तान
            </span>
          </Link>

          {/* Right actions (desktop only) */}
          <div className=" ml-auto items-center gap-5 hidden md:flex-col sm:flex lg:flex-row">
            <div className="ml-auto hidden items-center gap-5 text-md text-red-700 md:flex">
              <button className="flex items-center gap-1 hover:text-red-800">
                <FaRegImage />
                <span>Photos</span>
              </button>
              <span className="text-gray-500 text-xl"> | </span>
              <button className="flex items-center gap-1 hover:text-red-800">
                <FaRegPlayCircle />
                <span>Videos</span>
              </button>
              <span className="text-gray-500 text-xl"> | </span>
              <button className="flex items-center gap-1 hover:text-red-800">
                <FaMapMarkerAlt />
                <span>Select City</span>
              </button>
              <span className="text-gray-500 text-xl"> | </span>
              <button className="flex items-center gap-1 hover:text-red-800">
                <FaRegNewspaper />
                <span>E-Paper</span>
              </button>
              <span className="text-gray-500 text-xl"> | </span>
              <button className="flex items-center gap-1 hover:text-red-800">
                <FaUser />
                <span>Sign In</span>
              </button>
            </div>

            {/* Search (desktop) */}
            <div className="hidden items-center rounded-full mx-auto border border-gray-300 px-3 py-1 text-sm md:flex">
              <input
                className="w-40 bg-transparent text-gray-700 outline-none placeholder:text-gray-400"
                placeholder="Search here"
              />
              <FiSearch className="ml-2 text-gray-500" />
            </div>
          </div>
        </div>
      </div>

      {/* STICKY NAV ROW ONLY */}
      <nav className="sticky top-0 z-40 bg-white border-b border-gray-200">
        <div className="mx-auto flex max-w-7xl items-center gap-6 overflow-x-auto px-4 py-2 font-normal text-lg">
          {mainLinks.map((link) => (
            <Link
              key={link.label}
              href={link.href}
              className={`whitespace-nowrap pb-1 ${
                link.isActive
                  ? "border-b-2 border-red-600 font-semibold text-red-600"
                  : "text-gray-800 hover:text-red-600"
              }`}
            >
              {link.label}
            </Link>
          ))}

          <span className="mr-auto hidden text-gray-500 md:inline md:text-lg md:font-bold">
            ...
          </span>
        </div>
      </nav>

      {/* MOBILE / DESKTOP SLIDE-OUT MENU FOR HAMBURGER (overlay) */}
      {isMenuOpen && (
        <div
          className="fixed inset-0 z-50 bg-black/40 overflow-y-auto"
          onClick={() => setIsMenuOpen(false)}
        >
          <div
            className="h-auto w-64 bg-white px-4 py-4"
            onClick={(e) => e.stopPropagation()}
          >
            <div className="mb-4 flex items-center justify-between">
              <span className="text-lg font-bold text-red-700">MENU</span>
              <button
                onClick={() => setIsMenuOpen(false)}
                className="text-sm text-gray-500"
              >
                Close
              </button>
            </div>

            <div className="mb-4 space-y-2 text-sm text-gray-800">
              {mainLinks.map((link) => (
                <Link
                  key={link.label}
                  href={link.href}
                  className="block rounded px-2 py-1 hover:bg-gray-100"
                  onClick={() => setIsMenuOpen(false)}
                >
                  {link.label}
                </Link>
              ))}
            </div>

            <div className="mt-4 space-y-2 border-t pt-3 text-sm text-red-700">
              <button className="flex w-full items-center gap-2 rounded px-2 py-1 hover:bg-gray-100">
                <FaRegImage />
                <span>Photos</span>
              </button>
              <button className="flex w-full items-center gap-2 rounded px-2 py-1 hover:bg-gray-100">
                <FaRegPlayCircle />
                <span>Videos</span>
              </button>
              <button className="flex w-full items-center gap-2 rounded px-2 py-1 hover:bg-gray-100">
                <FaMapMarkerAlt />
                <span>Select City</span>
              </button>
              <button className="flex w-full items-center gap-2 rounded px-2 py-1 hover:bg-gray-100">
                <FaRegNewspaper />
                <span>E-Paper</span>
              </button>
              <button className="flex w-full items-center gap-2 rounded px-2 py-1 hover:bg-gray-100">
                <FaUser />
                <span>Sign In</span>
              </button>
            </div>
          </div>
        </div>
      )}
    </>
  );
}
