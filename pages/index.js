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
  const [now, setNow] = useState("");

  useEffect(() => {
    setNow(new Date().toLocaleString("hi-IN"));
  }, []);

  const mainHero = featuredArticles[0] || otherArticles[0];

  return (
    <>
      <Head>
        <title>Hindustan News | News</title>
        <meta
          name="description"
          content="A simplified front-page clone of LiveHindustan built with Next.js and TailwindCSS."
        />
      </Head>

      <div className="min-h-screen bg-gray-100">
        <Navbar />

        <main className="mx-5 max-w-7xl px-4 py-4">
          {/* Top bar with date etc. */}
          <div className="mb-4 flex flex-wrap items-center justify-between gap-2 text-xs text-gray-600">
            <span>{now}</span>
            <span> You are reading latest news</span>
          </div>

          {/* Main two-column layout */}
          <div className="grid gap-10 lg:grid-cols-4">
            {/* Left: Hero news */}
            <div className="lg:col-span-3">
              {/* Top Hindi News section */}
              <CategorySection
                title="Top Hindi News"
                articles={featuredArticles.slice(0, 6)}
                viewMoreHref="/"
              />

              {/* Ad strip between sections */}
              <AdBanner />

              {/* Another category, e.g. Technology / Entertainment */}
              <CategorySection
                title="More Technology News"
                articles={otherArticles.slice(6, 12)}
                viewMoreHref="/"
              />

              {/* You can add more sections similarly: */}
              <AdBanner />
              <CategorySection
                title="Entertainment"
                articles={otherArticles.slice(12, 18)}
                viewMoreHref="/"
              />
              <AdBanner />
              <CategorySection
                title="World"
                articles={otherArticles.slice(18, 24)}
                viewMoreHref="/"
              />
              <AdBanner />
              <CategorySection
                title="Business"
                articles={otherArticles.slice(5,11)}
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
                articles={otherArticles.slice(14,20)}
                viewMoreHref="/"
              /><AdBanner />
              <CategorySection
                title="Lifestyle"
                articles={otherArticles.slice(8, 14)}
                viewMoreHref="/"
              />
            </div>

            {/* Right column: side section */}
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

// export async function getStaticProps() {
//   // Fetch articles from NewsAPI via our helper
//   const apiArticles = await getArticles();

//   // Map API shape -> UI shape expected by components
//   const allNews = apiArticles.map((a) => ({
//     id: a.id,
//     slug: a.slug,
//     title: a.title,
//     category: a.category,
//     image: a.imageUrl,
//     excerpt: a.excerpt,
//     content: a.content,
//     author: a.category + " Desk",
//     publishedAt: a.date,
//     sourceUrl: a.sourceUrl,
//   }));

//   // Split into 2 halves: first half = featured, second = latest
//   const mid = Math.ceil(allNews.length / 2);
//   const featuredArticles = allNews.slice(0, mid);
//   const otherArticles = allNews.slice(mid);

//   return {
//     props: {
//       featuredArticles,
//       otherArticles,
//     },
//     revalidate: 600, // ISR: optional
//   };
// }
