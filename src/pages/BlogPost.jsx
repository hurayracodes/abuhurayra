import { useEffect, useMemo, useState } from "react";
import { motion, useReducedMotion, useScroll } from "framer-motion";
import { Check, Copy, Linkedin, Share2 } from "lucide-react";
import { Link, useParams } from "react-router-dom";
import BlogCard from "../ui/BlogCard";
import PostContent from "../ui/PostContent";
import { blogPosts } from "../ui/Data";
import usePageMeta from "../hooks/usePageMeta";
import { getPublishedPosts, SITE_URL, slugify } from "../ui/blogUtils";

const AUTHOR_LINKS = [
  { label: "GitHub", href: "https://github.com/hurayracodes" },
  { label: "LinkedIn", href: "https://www.linkedin.com/in/hurayracodes/" },
];

export default function BlogPostPage() {
  const { slug } = useParams();
  const [copyStatus, setCopyStatus] = useState("");
  const reduceMotion = useReducedMotion();
  const { scrollYProgress } = useScroll();
  const posts = useMemo(() => getPublishedPosts(blogPosts), []);
  const post = posts.find((item) => item.slug === slug);
  const description =
    post?.excerpt ?? "The article you are looking for could not be found.";
  const canonical = post
    ? `${SITE_URL}/blog/${post.slug}`
    : `${SITE_URL}/blog/${slug ?? ""}`;
  const title = post
    ? `${post.title} | Abu Hurayra (hurayracodes)`
    : "Article not found | Abu Hurayra (hurayracodes)";
  const jsonLd = useMemo(() => {
    if (!post) return undefined;
    return {
      "@context": "https://schema.org",
      "@graph": [
        {
          "@type": "BlogPosting",
          headline: post.title,
          description: post.excerpt,
          datePublished: post.date,
          dateModified: post.date,
          image: `${SITE_URL}${post.cover}`,
          mainEntityOfPage: canonical,
          author: {
            "@type": "Person",
            name: "Abu Hurayra",
            url: SITE_URL,
            sameAs: AUTHOR_LINKS.map((link) => link.href),
          },
        },
        {
          "@type": "BreadcrumbList",
          itemListElement: [
            {
              "@type": "ListItem",
              position: 1,
              name: "Home",
              item: SITE_URL,
            },
            {
              "@type": "ListItem",
              position: 2,
              name: "Blog",
              item: `${SITE_URL}/blog`,
            },
            {
              "@type": "ListItem",
              position: 3,
              name: post.title,
              item: canonical,
            },
          ],
        },
      ],
    };
  }, [canonical, post]);

  usePageMeta({
    title,
    description,
    canonical,
    image: post ? `${SITE_URL}${post.cover}` : `${SITE_URL}/og-image.jpg`,
    type: "article",
    robots: post ? "index, follow" : "noindex",
    jsonLd,
  });

  useEffect(() => {
    if (!copyStatus) return undefined;
    const timer = window.setTimeout(() => setCopyStatus(""), 2000);
    return () => window.clearTimeout(timer);
  }, [copyStatus]);

  const copyArticleLink = async () => {
    if (!navigator.clipboard?.writeText) {
      setCopyStatus("Copy unavailable");
      return;
    }

    try {
      await navigator.clipboard.writeText(window.location.href);
      setCopyStatus("Copied");
    } catch (error) {
      console.error("Unable to copy the article link.", error);
      setCopyStatus("Copy failed");
    }
  };

  if (!post) {
    return (
      <main className="grid min-h-[70vh] place-items-center px-6 py-24 text-center">
        <div>
          <p className="font-mono text-sm uppercase tracking-wide text-accent">
            404 · Article
          </p>
          <h1 className="mt-3 text-4xl font-bold text-heading">Article not found</h1>
          <p className="mt-3 text-body">
            This article may have moved, or the address may be incorrect.
          </p>
          <Link
            to="/blog"
            className="mt-6 inline-flex min-h-11 items-center rounded-full bg-accent px-5 py-2 font-semibold text-on-accent focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-accent focus-visible:ring-offset-4 focus-visible:ring-offset-page"
          >
            Back to all articles
          </Link>
        </div>
      </main>
    );
  }

  const headings = post.content.filter((block) => block.type === "h2");
  const relatedPosts = posts
    .filter((item) => item.slug !== post.slug)
    .map((item) => ({
      item,
      relevance:
        Number(item.category === post.category) +
        item.tags.filter((tag) => post.tags.includes(tag)).length,
    }))
    .sort((first, second) => second.relevance - first.relevance)
    .slice(0, 2)
    .map(({ item }) => item);
  const articleUrl = `${SITE_URL}/blog/${post.slug}`;
  const linkedInShare = `https://www.linkedin.com/shareArticle?mini=true&url=${encodeURIComponent(articleUrl)}&title=${encodeURIComponent(post.title)}`;
  const xShare = `https://twitter.com/intent/tweet?url=${encodeURIComponent(articleUrl)}&text=${encodeURIComponent(post.title)}`;

  return (
    <main className="min-h-screen px-5 pb-24 pt-24 text-body sm:px-8">
      {!reduceMotion && (
        <motion.div
          aria-hidden="true"
          className="fixed left-0 right-0 top-0 z-[100] h-1 origin-left bg-accent"
          style={{ scaleX: scrollYProgress }}
        />
      )}
      <div className="mx-auto max-w-6xl">
        <Link
          to="/blog"
          className="mb-8 inline-flex items-center gap-2 text-sm font-semibold text-accent focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-accent"
        >
          <span aria-hidden="true">←</span> Back to all articles
        </Link>
        <div className="xl:grid xl:grid-cols-[minmax(0,1fr)_220px] xl:gap-12">
          <article className="mx-auto min-w-0 max-w-3xl xl:mx-0">
            <header>
              <span className="inline-flex rounded-full bg-accent/15 px-3 py-1 font-mono text-xs uppercase tracking-wide text-accent">
                {post.category}
              </span>
              <h1 className="mt-5 text-4xl font-bold leading-tight tracking-tight text-heading sm:text-5xl">
                {post.title}
              </h1>
              <div className="mt-5 flex flex-wrap items-center gap-x-3 gap-y-2 font-mono text-xs text-muted">
                <time dateTime={post.date}>
                  {new Date(`${post.date}T12:00:00`).toLocaleDateString("en", {
                    year: "numeric",
                    month: "long",
                    day: "numeric",
                  })}
                </time>
                <span aria-hidden="true">·</span>
                <span>{post.readTime}</span>
                <span aria-hidden="true">·</span>
                <span className="font-sans text-sm text-body">
                  By Abu Hurayra
                  {AUTHOR_LINKS.map((link) => (
                    <a
                      key={link.label}
                      href={link.href}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="ml-2 text-accent underline underline-offset-4"
                    >
                      {link.label}
                    </a>
                  ))}
                </span>
              </div>
              <ul className="mt-5 flex flex-wrap gap-2" aria-label="Article tags">
                {post.tags.map((tag) => (
                  <li
                    key={tag}
                    className="rounded-full border border-line px-3 py-1 text-xs text-muted"
                  >
                    {tag}
                  </li>
                ))}
              </ul>
              <img
                src={post.cover}
                alt={post.coverAlt}
                width="1200"
                height="675"
                fetchPriority="high"
                decoding="async"
                className="mt-8 aspect-[16/9] w-full rounded-2xl border border-line object-cover"
              />
            </header>

            <div className="mt-10">
              <PostContent blocks={post.content} />
            </div>

            <div className="mt-10 flex flex-wrap items-center gap-3 border-y border-line py-5">
              <span className="mr-1 text-sm font-semibold text-heading">Share</span>
              <button
                type="button"
                onClick={copyArticleLink}
                aria-label="Copy article link"
                className="inline-flex min-h-10 items-center gap-2 rounded-full border border-line bg-chip px-4 text-sm text-body hover:border-accent/50 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-accent"
              >
                {copyStatus === "Copied" ? (
                  <Check aria-hidden="true" className="h-4 w-4" />
                ) : (
                  <Copy aria-hidden="true" className="h-4 w-4" />
                )}
                {copyStatus || "Copy link"}
              </button>
              <a
                href={linkedInShare}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex min-h-10 items-center gap-2 rounded-full border border-line bg-chip px-4 text-sm text-body hover:border-accent/50 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-accent"
              >
                <Linkedin aria-hidden="true" className="h-4 w-4" />
                LinkedIn
              </a>
              <a
                href={xShare}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex min-h-10 items-center gap-2 rounded-full border border-line bg-chip px-4 text-sm text-body hover:border-accent/50 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-accent"
              >
                <Share2 aria-hidden="true" className="h-4 w-4" />
                X
              </a>
              <span className="sr-only" role="status" aria-live="polite">
                {copyStatus}
              </span>
            </div>
          </article>

          {headings.length > 0 && (
            <aside className="hidden xl:block">
              <nav
                aria-label="On this page"
                className="sticky top-10 rounded-xl border border-line bg-chip p-5"
              >
                <h2 className="mb-3 text-sm font-semibold text-heading">On this page</h2>
                <ul className="space-y-2">
                  {headings.map((heading) => (
                    <li key={heading.text}>
                      <a
                        href={`#${slugify(heading.text)}`}
                        className="text-sm text-muted hover:text-accent focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-accent"
                      >
                        {heading.text}
                      </a>
                    </li>
                  ))}
                </ul>
              </nav>
            </aside>
          )}
        </div>

        {relatedPosts.length > 0 && (
          <section className="mt-20">
            <h2 className="mb-6 text-2xl font-bold text-heading">Related articles</h2>
            <div className="grid grid-cols-1 gap-6 md:grid-cols-2">
              {relatedPosts.map((related) => (
                <BlogCard key={related.id} post={related} />
              ))}
            </div>
          </section>
        )}
      </div>
    </main>
  );
}