// components/Footer.js
import Link from "next/link";
import {
  FaFacebookF,
  FaTwitter,
  FaYoutube,
  FaInstagram,
} from "react-icons/fa";

export default function Footer() {
  return (
    <footer className="mt-10 bg-black text-gray-300">
      <div className="mx-auto max-w-7xl px-4 py-10">

        {/* TOP PART */}
        <div className="grid gap-8 md:grid-cols-5">

          {/* Logo + About */}
          <div className="md:col-span-2">
            <h2 className="text-2xl font-bold text-white">
              LiveHindustan
            </h2>
            <p className="mt-3 text-sm leading-relaxed">
              Live Hindustan brings the latest Hindi news from India and
              the world. Stay updated with politics, sports,
              entertainment, career, lifestyle and more in one place.
            </p>

            {/* Social icons */}
            <div className="mt-4 flex gap-4 text-lg">
              <Link href="#" className="hover:text-white">
                <FaFacebookF />
              </Link>
              <Link href="#" className="hover:text-white">
                <FaTwitter />
              </Link>
              <Link href="#" className="hover:text-white">
                <FaYoutube />
              </Link>
              <Link href="#" className="hover:text-white">
                <FaInstagram />
              </Link>
            </div>
          </div>

          {/* News Categories */}
          <div>
            <h3 className="mb-3 text-sm font-semibold text-white">
              News Categories
            </h3>
            <ul className="space-y-2 text-sm">
              <li><Link href="#" className="hover:text-white">India News</Link></li>
              <li><Link href="#" className="hover:text-white">World</Link></li>
              <li><Link href="#" className="hover:text-white">Cricket</Link></li>
              <li><Link href="#" className="hover:text-white">Entertainment</Link></li>
              <li><Link href="#" className="hover:text-white">Career</Link></li>
            </ul>
          </div>

          {/* Important Links */}
          <div>
            <h3 className="mb-3 text-sm font-semibold text-white">
              Important Links
            </h3>
            <ul className="space-y-2 text-sm">
              <li><Link href="#" className="hover:text-white">About Us</Link></li>
              <li><Link href="#" className="hover:text-white">Contact Us</Link></li>
              <li><Link href="#" className="hover:text-white">Privacy Policy</Link></li>
              <li><Link href="#" className="hover:text-white">Disclaimer</Link></li>
              <li><Link href="#" className="hover:text-white">Sitemap</Link></li>
            </ul>
          </div>

          {/* App Links */}
          <div>
            <h3 className="mb-3 text-sm font-semibold text-white">
              Download App
            </h3>

            <div className="space-y-3 text-sm">
              <div className="rounded bg-gray-800 px-3 py-2 text-center hover:bg-gray-700 cursor-pointer">
                Google Play
              </div>
              <div className="rounded bg-gray-800 px-3 py-2 text-center hover:bg-gray-700 cursor-pointer">
                App Store
              </div>
            </div>
          </div>
        </div>

        {/* BOTTOM BAR */}
        <div className="mt-10 border-t border-gray-700 pt-4 text-center text-xs text-gray-400">
          © {new Date().getFullYear()} Live Hindustan Clone | Made with Next.js + TailwindCSS
        </div>
      </div>
    </footer>
  );
}
