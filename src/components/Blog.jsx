import { useState } from "react";
import { motion, useReducedMotion } from "framer-motion";
import { Link } from "react-router-dom";
import { blogPosts } from "../ui/Data";
import BlogCard from "../ui/BlogCard";
import TitleHeader from "../ui/TitleHeader";
import { getPublishedPosts } from "../ui/blogUtils";

export default function Blog() {
  const reduceMotion = useReducedMotion();
  const [category, setCategory] = useState("All");
  const publishedPosts = getPublishedPosts(blogPosts);
  const categories = ["All", ...new Set(publishedPosts.map((post) => post.category))];
  const posts = publishedPosts
    .filter((post) => category === "All" || post.category === category)
    .slice(0, 6);

  return (
    <section id="blog" className="relative isolate overflow-hidden px-6 py-20 text-body sm:py-24">
      <div
        aria-hidden="true"
        className="pointer-events-none absolute inset-0 -z-10 overflow-hidden"
      >
        <div
          className="absolute -left-32 top-20 h-80 w-80 rounded-full blur-3xl"
          style={{ background: "var(--glow)" }}
        />
        <div
          className="absolute -right-32 bottom-0 h-96 w-96 rounded-full blur-3xl"
          style={{ background: "var(--glow)" }}
        />
      </div>

      <div className="mx-auto max-w-7xl">
        <TitleHeader title="From My Blog " subTitle="& Latest Articles" />
        <div
          className="mb-6 flex flex-wrap justify-center gap-2"
          role="group"
          aria-label="Filter blog articles by category"
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
        <div className="grid grid-cols-1 gap-6 md:grid-cols-2 lg:grid-cols-3">
          {posts.map((post, index) => (
            <motion.div
              key={post.id}
              initial={reduceMotion ? false : { opacity: 0, y: 24 }}
              whileInView={reduceMotion ? undefined : { opacity: 1, y: 0 }}
              viewport={{ once: true, amount: 0.15 }}
              transition={
                reduceMotion
                  ? undefined
                  : { duration: 0.45, delay: Math.min(index * 0.08, 0.32) }
              }
              className={index === 0 ? "lg:col-span-2" : ""}
            >
              <BlogCard post={post} featured={index === 0} />
            </motion.div>
          ))}
        </div>
        <div className="mt-10 text-center">
          <Link
            to="/blog"
            className="inline-flex min-h-12 items-center justify-center rounded-full bg-accent px-6 py-3 font-semibold text-on-accent transition hover:shadow-[0_0_40px_rgb(var(--accent-rgb)/0.25)] focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-accent focus-visible:ring-offset-4 focus-visible:ring-offset-page"
          >
            View all articles
          </Link>
        </div>
      </div>
    </section>
  );
}
