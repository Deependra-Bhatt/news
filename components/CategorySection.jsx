// components/CategorySection.js
import Image from "next/image";
import Link from "next/link";

function formatDate(dateString) {
  if (!dateString) return "";
  const d = new Date(dateString);
  return d.toLocaleString("en-IN", {
    weekday: "short",
    day: "2-digit",
    month: "short",
    year: "numeric",
    hour: "2-digit",
    minute: "2-digit",
  });
}

export default function CategorySection({
  title,
  articles = [],
  viewMoreHref,
}) {
  if (!articles || articles.length === 0) return null;

  const mainArticle = articles[0];
  const sideArticles = articles.slice(1, 4); 
  const bottomArticle = articles[4]; 
  const fallbackImage =
    "https://placehold.co/600x400/ef4444/ffffff?text=No+Image";

  return (
    <section className="mb-8 rounded-md bg-white p-3 shadow shadow-slate-300">
      {/* Section header */}
      <div className="mb-3 flex items-baseline justify-between">
        <h2 className="flex items-center gap-2 text-lg font-semibold text-gray-900">
          <span className="h-5 w-1 rounded bg-red-600" />
          <span>{title}</span>
        </h2>

        {viewMoreHref && (
          <Link
            href={viewMoreHref}
            className="text-xs font-semibold text-red-600 hover:text-red-700"
          >
            View more &gt;
          </Link>
        )}
      </div>

      {/* Main 2-column layout */}
      <div className="grid gap-3 md:grid-cols-3">
        {/* Left: hero article */}
        <div className="md:col-span-2">
          <Link href={`/news/${mainArticle.slug}`}>
            <div className="relative h-52 w-full overflow-hidden rounded-md md:h-64">
              <Image
                src={mainArticle.image || fallbackImage}
                alt={mainArticle.title}
                fill
                className="object-cover"
              />
              <div className="absolute inset-0 bg-linear-to-t from-black/80 via-black/20 to-transparent" />
              <div className="absolute bottom-0 left-0 right-0 p-3">
                <h3 className="line-clamp-2 text-sm font-semibold text-white md:text-base">
                  {mainArticle.title}
                </h3>
              </div>
            </div>
          </Link>

          {/* Wide article below hero */}
          {bottomArticle && (
            <Link
              href={`/news/${bottomArticle.slug}`}
              className="mt-3 flex gap-3 rounded-md bg-[#f4f4f4] p-2"
            >
              <div className="relative h-16 w-24 shrink-0 overflow-hidden rounded">
                <Image
                  src={bottomArticle.image || fallbackImage}
                  alt={bottomArticle.title}
                  fill
                  className="object-cover"
                />
              </div>
              <div className="min-w-0">
                <p className="line-clamp-2 text-sm font-semibold text-gray-900">
                  {bottomArticle.title}
                </p>
                <p className="line-clamp-1 text-xs text-gray-900">
                  {bottomArticle.excerpt}
                </p>
                <p className="mt-1 text-[10px] text-gray-500">
                  {formatDate(bottomArticle.publishedAt)}
                </p>
              </div>
            </Link>
          )}
        </div>

        {/* Right: list of small items */}
        <div className="space-y-2">
          {sideArticles.map((article) => (
            <Link
              key={article.id}
              href={`/news/${article.slug}`}
              className="flex gap-2 rounded-md bg-[#f8f8f8] p-2 hover:bg-gray-100"
            >
              <div className="relative h-auto w-20 shrink-0 overflow-hidden rounded">
                <Image
                  src={article.image || fallbackImage}
                  alt={article.title}
                  fill
                  className="object-cover"
                />
              </div>
              <div className="min-w-0">
                <p className="line-clamp-2 text-sm font-semibold text-gray-900">
                  {article.title}
                </p>
                <p className="line-clamp-1 text-xs text-gray-900">
                  {article.excerpt}
                </p>
                <p className="mt-1 text-[10px] text-gray-500">
                  {formatDate(article.publishedAt)}
                </p>
              </div>
            </Link>
          ))}
        </div>
      </div>
    </section>
  );
}
