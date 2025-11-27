// pages/index.js
import Head from "next/head";
import Navbar from "@/components/Navbar";
import NewsCard from "@/components/NewsCard";
import {
  getTopHeadlinesArticles,
  getEverythingArticles,
} from "../data/newsData";
import { useState, useEffect } from "react";
import Footer from "@/components/Footer";
import CategorySection from "@/components/CategorySection";
import AdBanner from "@/components/AdBanner";

export default function Home({ featuredArticles, otherArticles }) {
  // Error Handling
  if (!featuredArticles.length && !otherArticles.length) {
    return (
      <>
        <Navbar />

        <div className="mx-auto flex min-h-[60vh] max-w-4xl items-center justify-center px-4">
          <div className="text-center">
            <h2 className="text-xl font-semibold text-gray-800">
              No news available
            </h2>
            <p className="mt-2 text-sm text-gray-500">
              Please try again later.
            </p>
          </div>
        </div>

        <Footer />
      </>
    );
  }

  const [now, setNow] = useState("");

  useEffect(() => {
    setNow(new Date().toLocaleString("hi-IN"));
  }, []);

  return (
    <>
      <Head>
        <title>Hindustan News | News</title>
        <meta
          name="description"
          content="A simplified front-page clone of LiveHindustan"
        />
      </Head>

      <div className="min-h-screen bg-gray-100">
        {/* NAVBAR SECTION */}
        <Navbar />

        {/* MAIN SECTION  */}
        <main className="mx-5 max-w-7xl px-4 py-4">
          <div className="mb-4 flex flex-wrap items-center justify-between gap-2 text-xs text-gray-600">
            <span>{now}</span>
            <span> You are reading latest news</span>
          </div>

          {/* Main two-column layout */}
          <div className="grid gap-10 lg:grid-cols-4">
            {/* Left: News Section */}
            <div className="lg:col-span-3">
              <CategorySection
                title="Top Hindi News"
                articles={featuredArticles.slice(0, 6)}
                viewMoreHref="/"
              />
              <AdBanner />
              <CategorySection
                title="More Technology News"
                articles={otherArticles.slice(6, 12)}
                viewMoreHref="/"
              />
              <AdBanner />
              <CategorySection
                title="Entertainment"
                articles={featuredArticles.slice(12, 18)}
                viewMoreHref="/"
              />
              <AdBanner />
              <CategorySection
                title="World"
                articles={otherArticles.slice(0, 6)}
                viewMoreHref="/"
              />
              <AdBanner />
              <CategorySection
                title="Business"
                articles={featuredArticles.slice(24, 30)}
                viewMoreHref="/"
              />
              <AdBanner />
              <CategorySection
                title="Religion"
                articles={otherArticles.slice(11, 17)}
                viewMoreHref="/"
              />
              <AdBanner />
              <CategorySection
                title="Space"
                articles={featuredArticles.slice(25, 31)}
                viewMoreHref="/"
              />
              <AdBanner />
              <CategorySection
                title="Lifestyle"
                articles={otherArticles.slice(8, 14)}
                viewMoreHref="/"
              />
            </div>

            {/* Right column: headlines section */}
            <aside className="space-y-4">
              <section className="rounded-md bg-white p-3 shadow">
                <h2 className="border-b border-gray-200 pb-2 text-lg font-bold text-red-700">
                  Latest Updates
                </h2>
                {otherArticles.map((article) => (
                  <NewsCard key={article.id} article={article} />
                ))}
              </section>

              <section className="rounded-md bg-white p-3 shadow">
                <h2 className="border-b border-gray-200 pb-2 text-sm font-bold">
                  Sponsored
                </h2>
                <p className="mt-2 text-sm text-gray-600">
                  This section can be used for advertisements.
                </p>
              </section>
            </aside>
          </div>
        </main>

        {/* FOOTER SECTION  */}
        <Footer />
      </div>
    </>
  );
}

// ---- DATA FETCHING ----

export async function getStaticProps() {
  // Fetch both in parallel
  const [everythingRaw, topHeadlinesRaw] = await Promise.all([
    getEverythingArticles(),
    getTopHeadlinesArticles(),
  ]);

  // Map both to the UI shape expected by components
  const mapToUiShape = (a) => ({
    id: a.id,
    slug: a.slug,
    title: a.title,
    category: a.category,
    image: a.imageUrl,
    excerpt: a.excerpt,
    content: a.content,
    author: a.category + " Desk",
    publishedAt: a.date,
    sourceUrl: a.sourceUrl,
  });

  const featuredArticles = everythingRaw.map(mapToUiShape);
  const otherArticles = topHeadlinesRaw.map(mapToUiShape);

  return {
    props: {
      featuredArticles,
      otherArticles,
    },
    revalidate: 600,
  };
}
