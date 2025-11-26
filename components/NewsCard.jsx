// components/NewsCard.js
import Link from "next/link";
import Image from "next/image";

export default function NewsCard({ article, variant = "default" }) {
  const href = `/news/${article.slug}`;

  if (variant === "hero") {
    return (
      <article className="grid gap-4 rounded-md bg-white p-4 shadow md:grid-cols-2">
        <div className="relative h-56 w-full md:h-72">
          <Image
            src={article.image}
            alt={article.title}
            fill
            className="rounded-md object-cover"
          />
        </div>
        <div className="flex flex-col justify-between">
          <div>
            <p className="text-xs font-semibold text-red-700">
              {article.category}
            </p>
            <Link href={href}>
              <h2 className="mt-1 text-xl font-bold leading-snug hover:text-red-700">
                {article.title}
              </h2>
            </Link>
            <p className="mt-3 text-sm text-gray-700 line-clamp-3">
              {article.excerpt}
            </p>
          </div>
          <div className="mt-4 text-xs text-gray-500">
            <span>{article.author}</span> •{" "}
            <span>{new Date(article.publishedAt).toLocaleString("hi-IN")}</span>
          </div>
        </div>
      </article>
    );
  }

  // default small card
  return (
    <article className="flex gap-3 border-b border-gray-200 pb-3 pt-3 last:border-b-0">
      <div className="relative h-20 w-28 flex-shrink-0">
        <Image
          src={article.image}
          alt={article.title}
          fill
          className="rounded object-cover"
        />
      </div>
      <div className="flex flex-1 flex-col justify-between">
        <Link href={href}>
          <h3 className="text-sm font-semibold leading-snug hover:text-red-700">
            {article.title}
          </h3>
        </Link>
        <p className="mt-1 text-xs text-gray-600 line-clamp-2">
          {article.excerpt}
        </p>
        <p className="mt-1 text-[11px] text-gray-400">
          {article.category} •{" "}
          {new Date(article.publishedAt).toLocaleDateString("hi-IN")}
        </p>
      </div>
    </article>
  );
}
