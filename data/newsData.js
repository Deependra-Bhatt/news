// /data/newsData.js 

// Base config
const NEWS_API_KEY = process.env.NEXT_PUBLIC_NEWS_API_KEY;
const TOP_HEADLINES_URL = "https://newsapi.org/v2/top-headlines";
const EVERYTHING_URL = "https://newsapi.org/v2/everything";

const createSlug = (title) => {
  if (!title) return "article-no-title";
  return title
    .toLowerCase()
    .replace(/[^a-z0-9]+/g, "-")
    .replace(/^-+|-+$/g, "");
};

const normalizeImageUrl = (url, category) => {
  const fallbackText = encodeURIComponent(category || "News");

  // If no image from API, use placeholder
  if (!url || url === "[Removed]") {
    return `https://placehold.co/600x400/007bff/ffffff?text=${fallbackText}`;
  }

  // Force http -> https
  if (url.startsWith("http://")) {
    return url.replace("http://", "https://");
  }

  return url;
};

const mapNewsApiArticleToAppArticle = (newsApiArticle, index) => {
  const title = newsApiArticle.title || `Untitled Article ${index}`;
  const slug = createSlug(title);
  const category = newsApiArticle.source?.name || "General";

  return {
    id: index + 1,
    slug,
    title,
    excerpt: newsApiArticle.description || "Click to read the full article.",
    imageUrl: normalizeImageUrl(newsApiArticle.urlToImage, category),
    category: category.split(" ")[0].replace(/[^a-zA-Z]/g, "") || "Unknown",
    date: newsApiArticle.publishedAt,
    views: Math.floor(Math.random() * 20000) + 1000,
    content:
      newsApiArticle.content ||
      (newsApiArticle.description || "") +
        " The full content was not provided by the API; please visit the source URL.",
    sourceUrl: newsApiArticle.url,
  };
};

// ---- Helpers ----

const fetchFromNewsApi = async (url) => {
  if (!NEWS_API_KEY) {
    console.error("NEWS_API_KEY is not set.");
    return [];
  }

  try {
    const res = await fetch(url, { cache: "no-store" });

    if (!res.ok) {
      const errorText = await res.text();
      console.error(
        `NETWORK ERROR: NewsAPI failed with status ${res.status}: ${errorText}`
      );
      return [];
    }

    const data = await res.json();

    if (data.status === "error") {
      console.error(
        `API ERROR (JSON Body): Code: ${data.code}, Message: ${data.message}`
      );
      return [];
    }

    if (data.articles && data.articles.length > 0) {
      return data.articles
        .filter((a) => a.title && a.title !== "[Removed]")
        .map(mapNewsApiArticleToAppArticle);
    }

    return [];
  } catch (error) {
    console.error("Error fetching data from NewsAPI (Network/Parsing):", error);
    return [];
  }
};

// ---- Public functions ----

// For sidebar
export const getTopHeadlinesArticles = async () => {
  const url = `${TOP_HEADLINES_URL}?category=technology&pageSize=20&apiKey=${NEWS_API_KEY}`;
  console.log("Fetching TOP HEADLINES:", url);
  return fetchFromNewsApi(url);
};

// For main content
export const getEverythingArticles = async () => {
  // q can be "technology" or "india" or "news" etc.
  const url = `${EVERYTHING_URL}?q=sports&language=en&pageSize=40&sortBy=publishedAt&apiKey=${NEWS_API_KEY}`;
  console.log("Fetching EVERYTHING:", url);
  return fetchFromNewsApi(url);
};

// For detail page – search across both
export const getArticleBySlug = async (slug) => {
  const [topHeadlines, everything] = await Promise.all([
    getTopHeadlinesArticles(),
    getEverythingArticles(),
  ]);

  const all = [...topHeadlines, ...everything];
  return all.find((a) => a.slug === slug) || null;
};
