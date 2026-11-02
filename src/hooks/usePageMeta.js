import { useEffect } from "react";

function setMeta(attribute, key, value, restore) {
  let element = [...document.head.querySelectorAll("meta")].find(
    (meta) =>
      meta.getAttribute(attribute) === key ||
      meta.getAttribute(attribute === "name" ? "property" : "name") === key,
  );
  const created = !element;
  if (!element) {
    element = document.createElement("meta");
    element.setAttribute(attribute, key);
    document.head.append(element);
  }
  const previous = element.getAttribute("content");
  restore.push(() => {
    if (created) element.remove();
    else if (previous === null) element.removeAttribute("content");
    else element.setAttribute("content", previous);
  });
  element.setAttribute("content", value);
}

function setCanonical(href, restore) {
  let element = document.head.querySelector('link[rel="canonical"]');
  const created = !element;
  if (!element) {
    element = document.createElement("link");
    element.setAttribute("rel", "canonical");
    document.head.append(element);
  }
  const previous = element.getAttribute("href");
  restore.push(() => {
    if (previous === null) element.removeAttribute("href");
    else element.setAttribute("href", previous);
    if (created) element.remove();
  });
  element.setAttribute("href", href);
}

export default function usePageMeta({
  title,
  description,
  canonical,
  image,
  type = "website",
  robots = "index, follow",
  jsonLd,
}) {
  useEffect(() => {
    const restore = [];
    const previousTitle = document.title;
    document.title = title;
    restore.push(() => {
      document.title = previousTitle;
    });

    setMeta("name", "description", description, restore);
    setMeta("name", "robots", robots, restore);
    setMeta("property", "og:title", title, restore);
    setMeta("property", "og:description", description, restore);
    setMeta("property", "og:type", type, restore);
    setMeta("property", "og:url", canonical, restore);
    setMeta("property", "og:image", image, restore);
    setMeta("name", "twitter:card", "summary_large_image", restore);
    setMeta("name", "twitter:title", title, restore);
    setMeta("name", "twitter:description", description, restore);
    setMeta("name", "twitter:url", canonical, restore);
    setMeta("name", "twitter:image", image, restore);
    setCanonical(canonical, restore);

    if (jsonLd) {
      let jsonScript = document.getElementById("page-json-ld");
      const scriptCreated = !jsonScript;
      if (!jsonScript) {
        jsonScript = document.createElement("script");
        jsonScript.id = "page-json-ld";
        jsonScript.type = "application/ld+json";
        document.head.append(jsonScript);
      }
      const previousJson = jsonScript.textContent;
      restore.push(() => {
        if (scriptCreated) jsonScript.remove();
        else jsonScript.textContent = previousJson;
      });
      jsonScript.textContent = JSON.stringify(jsonLd);
    }

    return () => restore.reverse().forEach((restoreValue) => restoreValue());
  }, [canonical, description, image, jsonLd, robots, title, type]);
}
