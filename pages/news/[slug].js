// pages/news/[slug].js
import Head from "next/head";
import Image from "next/image";
import Navbar from "@/components/Navbar";
import { getArticleBySlug, getTopHeadlinesArticles, getEverythingArticles } from "../../data/newsData";

export default function ArticlePage({ article }) {
  if (!article) {
    return (
      <div className="min-h-screen bg-gray-100">
        <Navbar />
        <main className="mx-auto max-w-3xl px-4 py-6">
          <h1 className="text-xl font-bold">Article not found</h1>
        </main>
      </div>
    );
  }

  const published = new Date(article.publishedAt);

  const structuredData = {
    "@context": "https://schema.org",
    "@type": "NewsArticle",
    headline: article.title,
    articleBody: article.content,
    author: {
      "@type": "Person",
      name: article.author,
    },
    datePublished: article.publishedAt,
    image: article.image,
  };

  return (
    <>
      <Head>
        <title>{article.title} | LiveHindustan Clone</title>
        <meta name="description" content={article.excerpt} />
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(structuredData) }}
        />
      </Head>

      <div className="min-h-screen bg-gray-100">
        <Navbar />
        <main className="mx-auto max-w-3xl px-4 py-6">
          <p className="text-xs text-red-700">{article.category}</p>
          <h1 className="mt-1 text-2xl font-bold leading-snug">
            {article.title}
          </h1>

          <div className="mt-2 text-xs text-gray-500">
            <span>{article.author}</span> •{" "}
            <span>
              {published.toLocaleDateString("hi-IN")}{" "}
              {published.toLocaleTimeString("hi-IN")}
            </span>
          </div>

          <div className="relative mt-4 h-64 w-full md:h-80">
            <Image
              src={article.image}
              alt={article.title}
              fill
              className="rounded-md object-cover"
            />
          </div>

          <article className="prose prose-sm mt-6 max-w-none prose-p:mb-3 prose-p:leading-relaxed">
            {article.content
              ?.toString()
              .trim()
              .split("\n")
              .filter(Boolean)
              .map((para, idx) => (
                <p key={idx}>{para.trim()}</p>
              ))}
          </article>

          {article.sourceUrl && (
            <p className="mt-4 text-xs text-blue-700">
              Source:{" "}
              <a
                href={article.sourceUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="underline"
              >
                Read full article on original site
              </a>
            </p>
          )}
        </main>
      </div>
    </>
  );
}

export async function getStaticPaths() {
  const [everything, topHeadlines] = await Promise.all([
    getEverythingArticles(),
    getTopHeadlinesArticles(),
  ]);

  const all = [...everything, ...topHeadlines];

  const paths = all.map((article) => ({
    params: { slug: article.slug },
  }));

  return {
    paths,
    fallback: false,
  };
}

export async function getStaticProps({ params }) {
  const apiArticle = await getArticleBySlug(params.slug);

  if (!apiArticle) {
    return { notFound: true };
  }

  const article = {
    id: apiArticle.id,
    slug: apiArticle.slug,
    title: apiArticle.title,
    category: apiArticle.category,
    image: apiArticle.imageUrl,
    excerpt: apiArticle.excerpt,
    content: apiArticle.content,
    author: apiArticle.category + " Desk",
    publishedAt: apiArticle.date,
    sourceUrl: apiArticle.sourceUrl,
  };

  return {
    props: {
      article,
    },
    revalidate: 600,
  };
}
