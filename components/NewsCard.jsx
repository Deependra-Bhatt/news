// components/NewsCard.js
import Link from "next/link";
import Image from "next/image";

export default function NewsCard({ article, variant = "default" }) {
  const href = `/news/${article.slug}`;
  const fallbackImage =
    "https://placehold.co/600x400/ef4444/ffffff?text=No+Image";

  //small card for latest updates
  return (
    <article className="flex gap-3 border-b border-gray-200 pb-3 pt-3 last:border-b-0 overflow-clip">
      <div className="relative h-auto w-28 shrink-0">
        <Image
          src={article.image || fallbackImage}
          alt={article.title.substring(0, 12)}
          fill
          className="rounded object-cover"
        />
      </div>
      <div className="flex flex-1 flex-col justify-between">
        <Link href={href}>
          <h3 className="text-sm font-semibold leading-snug hover:text-red-700 line-clamp-3">
            {article.title}
          </h3>
        </Link>
        <p className="mt-1 text-xs text-gray-600 line-clamp-3">
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
