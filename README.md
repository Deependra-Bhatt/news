# 📰 Hindustan News Clone – Next.js Assignment

A simplified front-page clone of **LiveHindustan**, built using **Next.js + Tailwind CSS + NewsAPI**.
This project demonstrates server-side data fetching, dynamic routing, image optimization, responsive UI, and graceful error handling.

---

## 🚀 Tech Stack

- **Next.js (Pages Router)**
- **React**
- **Tailwind CSS**
- **NewsAPI** (for live news data)
- **ISR (Incremental Static Regeneration)**

---

## ✅ Implemented Features

### 1. Layout & UI

- Sticky navigation bar (only the second row)
- Two-column layout similar to LiveHindustan

  - **Left:** Category-based news sections (Hero + Small list)
  - **Right:** Latest Updates section

- Advertisement banners between sections
- Full responsive design for mobile & desktop
- Footer styled similar to original site

---

### 2. Data Source

Two NewsAPI endpoints are used:

- **/v2/everything** → used for main content
- **/v2/top-headlines** → used for sidebar & latest updates

```js
const [everythingRaw, topHeadlinesRaw] = await Promise.all([
  getEverythingArticles(),
  getTopHeadlinesArticles(),
]);
```

All articles are transformed before being sent to the UI.

---

### 3. Next.js Features Used

| Feature           | Usage                         |
| ----------------- | ----------------------------- |
| `getStaticProps`  | Static generation with ISR    |
| `revalidate: 600` | Rebuilds every 10 minutes     |
| Dynamic Routes    | `pages/news/[slug].js`        |
| `<Image />`       | Next.js optimized images      |
| SEO               | `meta` tags + structured data |

---

### 4. Dynamic Routing

Each article is accessible at:

```
/news/[slug]
```

Example:

```
/news/google-launches-new-ai-model
```

Dynamic page generation handled using:

```js
export async function getStaticPaths()
export async function getStaticProps()
```

---

## ✅ Edge Case Handling (Part C)

| Scenario             | How it is handled               |
| -------------------- | ------------------------------- |
| No image in article  | Placeholder image is used       |
| API returns no data  | “No news available” UI is shown |
| Very long titles     | `line-clamp` CSS used           |
| Slow/failed requests | Safe fallback UI shown          |

**Fallback UI:**

```jsx
<h2>No news available </h2>
<p>Please try again later.</p>
```

---

## 📱 Responsiveness

Fully responsive using Tailwind:

- Mobile ✅
- Tablet ✅
- Desktop ✅

Key features on mobile:

- Slide-out hamburger menu
- Scrollable nav row
- Stacked layout

---

## 🔧 Installation

1. Clone the repository

```bash
git clone <your-repo-url>
cd news
```

2. Install dependencies

```bash
npm install
```

3. Create a `.env.local` file

```env
NEXT_PUBLIC_NEWS_API_KEY=YOUR_API_KEY_HERE
```

4. Start the development server

```bash
npm run dev
```

App runs on:

```
http://localhost:3000
```

---

## 📁 Folder Structure

```
/components
  Navbar.js
  Footer.js
  NewsCard.js
  CategorySection.js
  AdBanner.js
/pages
  index.js
  /news/[slug].js
  _app.js
  _document.js
/data
  newsData.js
/public
/styles
  globals.css
```

---

## 📝 Assignment Justification

**Why `getStaticProps` + ISR?**

- Fast performance (static pages)
- Regular updates using `revalidate`
- Less API calls than SSR
- Ideal for news portals

**Why dynamic routing?**

- Realistic news-article navigation
- SEO-friendly URLs
- Clean structure

**Why Tailwind?**

- Faster UI development
- Clean responsive design
- Lightweight

---

## 🔚 Conclusion

This project successfully replicates the structure and experience of a real news portal using modern technologies.

It demonstrates:

- ✅ Real-world UI design
- ✅ Efficient data fetching
- ✅ Error handling
- ✅ Scalability
- ✅ Best practices of Next.js
