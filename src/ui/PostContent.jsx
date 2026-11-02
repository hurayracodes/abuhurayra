import { useEffect, useState } from "react";
import { Check, Copy } from "lucide-react";
import { slugify } from "./blogUtils";

function renderLinkedText(block) {
  if (!block.links?.length) return block.text;

  const links = [...block.links]
    .map((link) => ({ ...link, index: block.text.indexOf(link.label) }))
    .filter((link) => link.index >= 0)
    .sort((first, second) => first.index - second.index);
  const parts = [];
  let cursor = 0;

  links.forEach((link) => {
    if (link.index < cursor) return;
    parts.push(block.text.slice(cursor, link.index));
    parts.push(
      <a
        key={`${link.href}-${link.index}`}
        href={link.href}
        target="_blank"
        rel="noopener noreferrer"
        className="text-accent underline underline-offset-4"
      >
        {link.label}
      </a>,
    );
    cursor = link.index + link.label.length;
  });

  parts.push(block.text.slice(cursor));
  return parts;
}

function CodeBlock({ block }) {
  const [copyState, setCopyState] = useState("");

  useEffect(() => {
    if (!copyState) return undefined;
    const timer = window.setTimeout(() => setCopyState(""), 2000);
    return () => window.clearTimeout(timer);
  }, [copyState]);

  const copyCode = async () => {
    if (!navigator.clipboard?.writeText) {
      setCopyState("Copy unavailable");
      return;
    }

    try {
      await navigator.clipboard.writeText(block.code);
      setCopyState("Copied");
    } catch (error) {
      console.error("Unable to copy code block.", error);
      setCopyState("Copy failed");
    }
  };

  return (
    <div className="dark overflow-hidden rounded-xl border border-line bg-page text-body">
      <div className="flex items-center justify-between gap-3 border-b border-line px-4 py-2">
        <span className="font-mono text-xs text-muted">{block.language}</span>
        <button
          type="button"
          onClick={copyCode}
          aria-label="Copy code"
          className="inline-flex min-h-9 items-center gap-2 rounded-md px-2 text-sm text-accent hover:bg-accent/15 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-accent"
        >
          {copyState === "Copied" ? (
            <Check aria-hidden="true" className="h-4 w-4" />
          ) : (
            <Copy aria-hidden="true" className="h-4 w-4" />
          )}
          {copyState || "Copy"}
        </button>
      </div>
      <pre className="overflow-x-auto p-4 font-mono text-sm leading-relaxed">
        <code>{block.code}</code>
      </pre>
      <span className="sr-only" role="status" aria-live="polite">
        {copyState}
      </span>
    </div>
  );
}

export default function PostContent({ blocks }) {
  return (
    <div className="space-y-6">
      {blocks.map((block, index) => {
        const key = `${block.type}-${index}`;

        switch (block.type) {
          case "h2":
            return (
              <h2
                key={key}
                id={slugify(block.text)}
                className="scroll-mt-28 pt-5 text-2xl font-bold text-heading md:text-3xl"
              >
                {block.text}
              </h2>
            );
          case "h3":
            return (
              <h3 key={key} className="pt-3 text-xl font-semibold text-heading">
                {block.text}
              </h3>
            );
          case "p":
            return (
              <p key={key} className="text-base leading-relaxed text-body md:text-lg">
                {renderLinkedText(block)}
              </p>
            );
          case "ul":
          case "ol": {
            const List = block.type;
            return (
              <List
                key={key}
                className={`space-y-2 pl-6 text-base leading-relaxed text-body marker:text-accent md:text-lg ${block.type === "ul" ? "list-disc" : "list-decimal"}`}
              >
                {block.items.map((item) => (
                  <li key={item}>{item}</li>
                ))}
              </List>
            );
          }
          case "quote":
            return (
              <blockquote
                key={key}
                className="rounded-r-xl border-l-4 border-accent bg-chip px-5 py-4 text-lg italic leading-relaxed text-strong"
              >
                {block.text}
              </blockquote>
            );
          case "code":
            return <CodeBlock key={key} block={block} />;
          case "image":
            return (
              <figure key={key} className="space-y-2">
                <img
                  src={block.src}
                  alt={block.alt}
                  width={block.width}
                  height={block.height}
                  loading="lazy"
                  decoding="async"
                  className="h-auto w-full rounded-xl border border-line"
                />
                {block.caption && (
                  <figcaption className="text-sm text-muted">
                    {block.caption}
                  </figcaption>
                )}
              </figure>
            );
          default:
            return null;
        }
      })}
    </div>
  );
}
