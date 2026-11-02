import { useMemo, useState } from "react";
import { Link } from "react-router-dom";
import { LayoutGrid, Layers } from "lucide-react";
import { BlogPostCard } from "../ui/BlogCard";
import Card from "../ui/BlogCard";
import { blogPosts } from "../ui/Data";
import usePageMeta from "../hooks/usePageMeta";
import { getPublishedPosts, SITE_URL } from "../ui/blogUtils";

const DESCRIPTION =
  "Notes from Abu Hurayra on building MERN applications, responsive interfaces, and practical React workflows from real projects.";

export default function Blog() {
  const [category, setCategory] = useState("All");
  const [query, setQuery] = useState("");
  const [view, setView] = useState("deck"); // "deck" | "grid"
  const posts = useMemo(() => getPublishedPosts(blogPosts), []);
  const categories = ["All", ...new Set(posts.map((post) => post.category))];
  const normalizedQuery = query.trim().toLowerCase();
  const visiblePosts = posts.filter((post) => {
    const matchesCategory = category === "All" || post.category === category;
    const searchableText = [post.title, post.excerpt, ...post.tags]
      .join(" ")
      .toLowerCase();
    return matchesCategory && searchableText.includes(normalizedQuery);
  });
  const jsonLd = useMemo(
    () => ({
      "@context": "https://schema.org",
      "@type": "Blog",
      name: "From My Blog | Abu Hurayra",
      description: DESCRIPTION,
      url: `${SITE_URL}/blog`,
      author: {
        "@type": "Person",
        name: "Abu Hurayra",
        url: SITE_URL,
      },
      blogPost: posts.map((post) => ({
        "@type": "BlogPosting",
        headline: post.title,
        url: `${SITE_URL}/blog/${post.slug}`,
        datePublished: post.date,
      })),
    }),
    [posts],
  );

  usePageMeta({
    title: "From My Blog | Abu Hurayra (hurayracodes)",
    description: DESCRIPTION,
    canonical: `${SITE_URL}/blog`,
    image: `${SITE_URL}${posts[0]?.cover ?? ""}`,
    jsonLd,
  });

  const viewButton = (value, label, Icon) => (
    <button
      type="button"
      aria-pressed={view === value}
      onClick={() => setView(value)}
      className={`inline-flex min-h-10 items-center gap-2 rounded-full border px-4 py-2 text-sm transition focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-accent ${
        view === value
          ? "border-accent bg-accent text-on-accent"
          : "border-line bg-chip text-body hover:border-accent/50"
      }`}
    >
      <Icon aria-hidden="true" className="h-4 w-4" />
      {label}
    </button>
  );

  return (
    <main className="min-h-screen px-6 pb-24 pt-28 text-body">
      <div className="mx-auto max-w-7xl">
        <Link
          to="/"
          className="mb-8 inline-flex text-sm font-semibold text-accent underline underline-offset-4 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-accent"
        >
          Back to home
        </Link>
        <header className="mb-10 border-b border-line-strong pb-8">
          <p className="font-mono text-sm uppercase tracking-wide text-accent">
            Notes &amp; articles
          </p>
          <h1 className="mt-3 text-4xl font-bold tracking-tight text-heading sm:text-5xl">
            From My Blog
          </h1>
          <p className="mt-4 max-w-2xl text-lg leading-relaxed text-body">
            Practical lessons from the projects I build and the problems I solve.
          </p>
        </header>

        <div className="mb-8 flex flex-col gap-5">
          <label className="max-w-xl">
            <span className="sr-only">Search articles</span>
            <input
              type="search"
              value={query}
              onChange={(event) => setQuery(event.target.value)}
              placeholder="Search title, excerpt, or tags"
              className="min-h-12 w-full rounded-xl border border-line bg-chip px-4 text-heading placeholder:text-muted focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-accent"
            />
          </label>
          <div className="flex flex-wrap items-center justify-between gap-4">
            <div
              className="flex flex-wrap gap-2"
              role="group"
              aria-label="Filter by category"
            >
              {categories.map((item) => (
                <button
                  key={item}
                  type="button"
                  aria-pressed={category === item}
                  onClick={() => setCategory(item)}
                  className={`min-h-10 rounded-full border px-4 py-2 text-sm transition focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-accent ${
                    category === item
                      ? "border-accent bg-accent text-on-accent"
                      : "border-line bg-chip text-body hover:border-accent/50"
                  }`}
                >
                  {item}
                </button>
              ))}
            </div>
            <div className="flex gap-2" role="group" aria-label="Choose layout">
              {viewButton("deck", "Deck", Layers)}
              {viewButton("grid", "Grid", LayoutGrid)}
            </div>
          </div>
        </div>

        <p className="mb-5 text-sm text-muted" role="status" aria-live="polite">
          {visiblePosts.length} {visiblePosts.length === 1 ? "article" : "articles"}
        </p>

        {visiblePosts.length ? (
          view === "deck" ? (
            <Card posts={visiblePosts} />
          ) : (
            <div className="grid grid-cols-1 gap-6 md:grid-cols-2 lg:grid-cols-3">
              {visiblePosts.map((post) => (
                <BlogPostCard key={post.id} post={post} />
              ))}
            </div>
          )
        ) : (
          <div className="rounded-2xl border border-line bg-chip px-6 py-12 text-center">
            <h2 className="text-xl font-semibold text-heading">No articles found</h2>
            <p className="mt-2 text-body">Try a different search or category.</p>
          </div>
        )}
      </div>
    </main>
  );
}