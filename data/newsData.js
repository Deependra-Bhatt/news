// src/data/newsData.js or /data/newsData.js (your current path)

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

const mapNewsApiArticleToAppArticle = (newsApiArticle, index) => {
  const title = newsApiArticle.title || `Untitled Article ${index}`;
  const slug = createSlug(title);
  const category = newsApiArticle.source?.name || "General";

  return {
    id: index + 1,
    slug,
    title,
    excerpt: newsApiArticle.description || "Click to read the full article.",
    imageUrl:
      newsApiArticle.urlToImage ||
      `https://placehold.co/600x400/007bff/ffffff?text=${encodeURIComponent(
        category
      )}`,
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

// For sidebar (or vice versa)
export const getTopHeadlinesArticles = async () => {
  const url = `${TOP_HEADLINES_URL}?category=technology&pageSize=20&apiKey=${NEWS_API_KEY}`;
  console.log("Fetching TOP HEADLINES:", url);
  return fetchFromNewsApi(url);
};

// For main content (or vice versa)
export const getEverythingArticles = async () => {
  // q can be "technology" or "india" or "news" etc.
  const url = `${EVERYTHING_URL}?q=technology&language=en&pageSize=30&sortBy=publishedAt&apiKey=${NEWS_API_KEY}`;
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

// // Next.js App Router (Server Component) access.
// const NEWS_API_KEY = process.env.NEXT_PUBLIC_NEWS_API_KEY;
// const API_BASE_URL = "https://newsapi.org/v2/top-headlines";

// // Helper function to create a simplified slug from a title
// const createSlug = (title) => {
//   if (!title) return "article-no-title";
//   return title
//     .toLowerCase()
//     .replace(/[^a-z0-9]+/g, "-")
//     .replace(/^-+|-+$/g, "");
// };

// // --- Data Transformation Functions ---

// const mapNewsApiArticleToAppArticle = (newsApiArticle, index) => {
//   const title = newsApiArticle.title || `Untitled Article ${index}`;
//   const slug = createSlug(title);
//   const isFeatured = index === 0;
//   const category = newsApiArticle.source?.name || "General";

//   return {
//     id: index + 1,
//     slug: slug,
//     title: title,
//     excerpt: newsApiArticle.description || "Click to read the full article.",
//     imageUrl:
//       newsApiArticle.urlToImage ||
//       `https://placehold.co/600x400/007bff/ffffff?text=${category}`,
//     category: category.split(" ")[0].replace(/[^a-zA-Z]/g, "") || "Unknown",
//     date: newsApiArticle.publishedAt,
//     views: Math.floor(Math.random() * 20000) + 1000,
//     isFeatured: isFeatured,
//     content:
//       newsApiArticle.content ||
//       newsApiArticle.description +
//         " The full content was not provided by the API; please visit the source URL.",
//     sourceUrl: newsApiArticle.url,
//   };
// };

// // --- Fetching Functions ---

// export const getArticles = async () => {
//   if (!NEWS_API_KEY) {
//     console.error("NEWS_API_KEY is not set.");
//     return [];
//   }

//   const url = `${API_BASE_URL}?category=technology&apiKey=${NEWS_API_KEY}&pageSize=30`;

//   try {
//     console.log(
//       "API Fetch: Starting fetch for top headlines (Technology Query)."
//     );

//     const res = await fetch(url, { cache: "no-store" });

//     if (!res.ok) {
//       const errorText = await res.text();
//       console.error(
//         `NETWORK ERROR: NewsAPI failed with status ${res.status}: ${errorText}`
//       );
//       return [];
//     }

//     const data = await res.json();
//     console.log("API Response Status:", data.status);

//     // DEBUG: Log the actual count returned by the API before mapping
//     console.log(
//       "DEBUG: Raw articles count from API:",
//       data.articles ? data.articles.length : 0
//     );

//     // Handle JSON body error (in case status:ok fails)
//     if (data.status === "error") {
//       console.error(
//         `API ERROR (JSON Body): Code: ${data.code}, Message: ${data.message}`
//       );
//       return [];
//     }

//     if (data.articles && data.articles.length > 0) {
//       // Map the external data to our internal structure
//       const mappedArticles = data.articles
//         .filter((a) => a.title !== "[Removed]")
//         .map(mapNewsApiArticleToAppArticle);

//       console.log(
//         "DEBUG: Mapped articles count after filter:",
//         mappedArticles.length
//       );
//       return mappedArticles;
//     }

//     // If status is 'ok' but articles is empty
//     return [];
//   } catch (error) {
//     console.error("Error fetching data from NewsAPI (Network/Parsing):", error);
//     return [];
//   }
// };

// export const getArticleBySlug = async (slug) => {
//   const articles = await getArticles();

//   // Find the specific article matching the slug
//   const article = articles.find((a) => a.slug === slug);

//   return article;
// };
