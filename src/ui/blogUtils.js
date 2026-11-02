export const SITE_URL = "https://abuhurayra.vercel.app";

export const getPublishedPosts = (posts) =>
  posts
    .filter((post) => post.published)
    .sort((first, second) => second.date.localeCompare(first.date));

export const slugify = (text) =>
  text
    .toLowerCase()
    .trim()
    .replace(/[^\w\s-]/g, "")
    .replace(/\s+/g, "-");
