// components/Footer.js
import Link from "next/link";
import {
  FaFacebookF,
  FaTwitter,
  FaYoutube,
  FaInstagram,
  FaGooglePlay,
  FaApple,
} from "react-icons/fa";

export default function Footer() {
  return (
    <footer className="mt-10 bg-black text-gray-300">
      <div className="mx-auto max-w-6xl px-4 py-10 space-y-8">
        {/* TOP: CATEGORY ROWS */}
        <div className="space-y-6 text-lg">
          <SectionRow
            title="Top Performing Sections"
            items={[
              "Hindi News",
              "Career",
              "Astrology",
              "Uttar Pradesh",
              "Cricket",
              "National",
              "NCR",
              "Entertainment",
              "Business",
              "Lifestyle",
              "Bihar",
              "Web Stories",
              "Auto",
              "Gadgets",
              "International",
              "Rajasthan",
              "Weather",
              "Madhya Pradesh",
              "Maharashtra",
              "Photos",
              "Videos",
              "Results",
            ]}
          />

          <SectionRow
            title="Popular Stocks"
            items={[
              "Tata Motors",
              "Titan",
              "ITC",
              "Bajaj Finance",
              "Hero Motocorp",
              "Rail Vikas Nigam Limited",
              "Suzlon Energy",
              "Reliance Power",
              "Reliance Infrastructure",
              "Zomato",
              "Patel Engineering",
              "Adani Enterprises",
              "Adani Power",
              "Reliance Industries",
              "Infosys",
              "HDFC Bank",
              "SBI",
              "Kotak Bank",
              "Maruti Suzuki",
              "Vodafone Idea",
            ]}
          />

          <SectionRow
            title="State"
            items={[
              "Bihar Elections",
              "Bihar Constituencies",
              "Bihar Election Schedule",
              "Bihar Election News",
              "Bihar Exit Poll",
              "Bihar Candidate List",
              "Bihar Key Candidates",
              "Haryana News",
              "Uttarakhand News",
              "Jharkhand News",
              "MP News",
              "UP News",
              "Bihar News",
              "Delhi News",
              "Maharashtra News",
              "Rajasthan News",
              "Election Schedule",
              "Weather",
              "Independence Day Quiz",
            ]}
          />

          <SectionRow
            title="Astrology"
            items={[
              "Astrology News",
              "Daily Horoscope",
              "Today’s Panchang",
              "Numerology",
              "Vastu Tips",
              "Libra Horoscope",
              "Aquarius Horoscope",
              "Aries Horoscope",
              "Taurus Horoscope",
              "Shiva",
              "Horoscope 2025",
              "Yearly Horoscope 2025",
              "Chinese Horoscope 2025",
              "Numerology Prediction",
              "Hindu Calendar 2025",
              "Long Weekends 2025",
              "Planetary Transits 2025",
              "Eclipses 2025",
              "Panchang",
              "Lord Ganesha",
              "Ganesh Aarti",
              "Durga Aarti",
              "Mahamrityunjay Mantra",
              "Shiv Aarti",
              "Durga Chalisa",
              "Shiv Stuti",
              "Navratri",
              "Janmashtami",
            ]}
          />

          <SectionRow
            title="Business"
            items={[
              "Business News",
              "Share Market",
              "Petrol Prices",
              "Diesel Prices",
              "ITR",
              "Personal Investment",
              "Budget",
              "Market Stats",
            ]}
          />

          <SectionRow
            title="Career"
            items={["Career News", "Education", "Engineering", "Medical"]}
          />

          <SectionRow
            title="Entertainment"
            items={[
              "Entertainment News",
              "TV News",
              "Web Series",
              "Movie Review",
              "Bigg Boss",
            ]}
          />

          <SectionRow title="Cricket" items={["Cricket News", "Live Score"]} />

          <SectionRow
            title="Lifestyle"
            items={[
              "Lifestyle Tips",
              "Health",
              "Fashion",
              "Parenting Tips",
              "Travel",
              "Fitness",
            ]}
          />

          <SectionRow
            title="Web Stories"
            items={[
              "Entertainment",
              "Sports",
              "Health",
              "Trending",
              "Beauty",
              "Faith",
            ]}
          />
        </div>

        {/* MIDDLE: LOGO + SOCIAL + APPS */}
        <div className="flex flex-col items-start gap-6 pt-6 md:flex-row md:items-center md:justify-between">
          {/* Logo */}
          <Link href="/" className="flex items-center gap-3">
            <div className="flex h-15 w-15 items-center justify-center rounded-full border border-red-600 text-3xl font-extrabold text-red-500">
              हि
            </div>
            <div>
              <div className="text-6xl font-semibold text-red-500">
                हिन्दुस्तान
              </div>
            </div>
          </Link>

          {/* Social */}
          <div className="flex gap-4">
            <div className="space-y-2">
              <p className="text-lg font-semibold text-gray-200 mb-5">
                Connect with us
              </p>
              <div className="flex gap-3 text-sm">
                <SocialIcon href="#" aria="Facebook">
                  <FaFacebookF />
                </SocialIcon>
                <SocialIcon href="#" aria="Twitter">
                  <FaTwitter />
                </SocialIcon>
                <SocialIcon href="#" aria="YouTube">
                  <FaYoutube />
                </SocialIcon>
                <SocialIcon href="#" aria="Instagram">
                  <FaInstagram />
                </SocialIcon>
              </div>
            </div>
            <div className="text-8xl text-gray-400">|</div>

            {/* Apps */}
            <div className="space-y-1">
              <p className="text-xl font-semibold text-gray-200 mb-3">
                Download App
              </p>
              <div className="flex flex-wrap gap-3 text-lg">
                <button className="flex items-center gap-2 rounded border border-gray-500 px-3 py-1 hover:bg-gray-900">
                  <FaGooglePlay className="text-2xl" />
                  <span>
                    <span className="block text-[10px] uppercase">
                      Get it on
                    </span>
                    <span className="text-sm font-semibold">Google Play</span>
                  </span>
                </button>
                <button className="flex items-center gap-2 rounded border border-gray-500 px-3 py-2 hover:bg-gray-900">
                  <FaApple className="text-2xl" />
                  <span>
                    <span className="block text-[10px] uppercase">
                      Download on the
                    </span>
                    <span className="text-sm font-semibold">App Store</span>
                  </span>
                </button>
              </div>
            </div>
          </div>
        </div>

        {/*  BOTTOM: LINKS + PARTNERS + COPYRIGHT  */}
        <div className="pt-6 text-sm text-gray-400">
          {/* Hindi utility links row */}
          <div className="pt-3 pb-3">
            <div className="flex flex-wrap justify-center gap-x-2 gap-y-1 text-center">
              <InlineLink>आरएसएस</InlineLink>
              <Separator />
              <InlineLink>विज्ञापन रेट</InlineLink>
              <Separator />
              <InlineLink>हमारे साथ काम करें</InlineLink>
              <Separator />
              <InlineLink>हमारे बारे में</InlineLink>
              <Separator />
              <InlineLink>संपर्क करें</InlineLink>
              <Separator />
              <InlineLink>गोपनीयता</InlineLink>
              <Separator />
              <InlineLink>साइट जानकारी</InlineLink>
            </div>
          </div>

          {/* English utility links row */}
          <div className="border-t border-gray-800 pt-3 pb-3">
            <div className="flex flex-wrap justify-center gap-x-2 gap-y-1 text-center">
              <InlineLink>Advertise with us</InlineLink>
              <Separator />
              <InlineLink>About us</InlineLink>
              <Separator />
              <InlineLink>Careers</InlineLink>
              <Separator />
              <InlineLink>Privacy</InlineLink>
              <Separator />
              <InlineLink>Contact us</InlineLink>
              <Separator />
              <InlineLink>Sitemap</InlineLink>
              <Separator />
              <InlineLink>Code Of Ethics</InlineLink>
            </div>
          </div>

          {/* Partner sites row */}
          <div className="border-t border-gray-800 pt-3 pb-3">
            <p className="text-center">
              <span className="font-semibold text-gray-300">
                Partner sites:
              </span>
              Hindustan Times | Mint | HT Tech | Shine | HT Telugu | HT Bangla |
              HT Tamil | HT Marathi | HT Auto | Healthshots | HT Smartcast | FAB
              Play
            </p>
          </div>

          {/* Copyright bar */}
          <div className="mt-1 bg-[#181818] py-3 text-center text-[12px] text-gray-500">
            Copyright © {new Date().getFullYear()} HT Digital Streams Limited.
            All Rights Reserved.
          </div>
          <div className="m-0 p-0 text-center text-white text-lg underline">
            Privacy and Cookie settings
          </div>
        </div>
      </div>
    </footer>
  );
}

/* Helper components */

function SectionRow({ title, items }) {
  return (
    <div>
      <h3 className="text-3xl font-semibold text-gray-100">
        {title} <span className="text-3xl">»</span>
      </h3>
      <p className="mt-1 text-sm leading-relaxed text-gray-300">
        {items.join("  |  ")}
      </p>
    </div>
  );
}

function SocialIcon({ href, aria, children }) {
  return (
    <Link
      href={href}
      aria-label={aria}
      className="flex h-9 w-9 items-center justify-center rounded-full bg-gray-600 hover:bg-gray-700"
    >
      {children}
    </Link>
  );
}
function InlineLink({ children }) {
  return (
    <span className="cursor-pointer hover:text-gray-200 hover:underline text-sm">
      {children}
    </span>
  );
}

function Separator() {
  return <span className="text-gray-500 text-sm">|</span>;
}
