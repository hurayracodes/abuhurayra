import { useCallback, useEffect, useMemo, useRef, useState } from "react";
import { ArrowUpRight, ChevronLeft, ChevronRight } from "lucide-react";
import { Link } from "react-router-dom";

/*
 * Card — blog posts as polaroid prints pegged to a sagging string.
 * Drag the line (or use the arrows / ← →) and the prints slide along it,
 * swinging on their pegs and settling with a little overshoot. The print in
 * the middle is the active article; its details and "Read article" link sit
 * underneath. Click any other print to bring it to the middle.
 *
 * Usage:
 *   import Card from "../ui/Card";
 *   <Card posts={visiblePosts} />
 */

const clamp = (v, a, b) => Math.min(b, Math.max(a, v));
const pad2 = (n) => (n < 10 ? `0${n}` : String(n));

// height of a string sagging by `sag` between (0, y0) and (w, y0), at x
const stringY = (x, w, y0, sag) => {
  const t = clamp(x / w, 0, 1);
  return y0 + 4 * sag * t * (1 - t);
};

// one step of a critically damped spring toward target
const springStep = (x, v, target, dt, k = 70) => {
  const c = 2 * Math.sqrt(k);
  const nv = v + (k * (target - x) - c * v) * dt;
  return [x + nv * dt, nv];
};

// one step of a print's swing; lineVel is the on-screen speed (px/s)
const swingStep = (a, w, lineVel, dt, gain) => {
  const nw = w + (-38 * a - 4.2 * w + lineVel * 0.0034 * gain) * dt;
  return [clamp(a + nw * dt, -0.6, 0.6), nw];
};

const nearestAt = (off, spacing, n) =>
  clamp(Math.round(off / spacing), 0, Math.max(0, n - 1));

const formatDate = (date) =>
  new Date(`${date}T12:00:00`).toLocaleDateString("en", {
    year: "numeric",
    month: "short",
    day: "numeric",
  });

const CSS = `
.pl-stage{position:relative;width:100%;height:26rem;overflow:hidden;user-select:none;-webkit-user-select:none;touch-action:pan-y;cursor:grab;border-radius:1rem}
.pl-stage[data-drag='1']{cursor:grabbing}
.pl-stage:focus-visible{outline:2px solid rgb(var(--accent-rgb,99 102 241));outline-offset:2px}
.pl-string{position:absolute;left:0;top:0;width:100%;height:100%;pointer-events:none;overflow:visible}
.pl-card{position:absolute;left:0;top:0;width:var(--pl-cw);transform-origin:50% 0;will-change:transform;cursor:inherit}
.pl-print{margin-top:10px;background:#fbfaf7;padding:10px 10px 0;box-shadow:0 1px 2px rgba(0,0,0,.12),0 18px 30px -16px rgba(0,0,0,.45);transition:transform .5s cubic-bezier(.2,.7,.2,1),filter .5s ease}
.pl-card[data-on='0'] .pl-print{transform:scale(.9);filter:saturate(.7) brightness(.94)}
.pl-shot{position:relative;aspect-ratio:4/3;overflow:hidden;background:#d9d5cc}
.pl-shot img{position:absolute;inset:0;width:100%;height:100%;max-width:none;object-fit:cover;display:block;pointer-events:none}
.pl-note{height:46px;display:flex;align-items:center;justify-content:center;padding:0 6px;font:italic 400 15px/1.1 ui-serif,Georgia,'Times New Roman',serif;color:#3b3833;white-space:nowrap;overflow:hidden;text-overflow:ellipsis}
.pl-peg{position:absolute;left:50%;top:0;width:10px;height:26px;margin-left:-5px;border-radius:2px;background:linear-gradient(90deg,#c9a67a,#e3c9a1 45%,#b8915f);box-shadow:0 2px 3px rgba(0,0,0,.25)}
.pl-peg::after{content:'';position:absolute;left:4px;top:8px;width:2px;height:7px;background:rgba(80,60,30,.45);border-radius:1px}
.pl-info>*{animation:pl-in .5s cubic-bezier(.2,.8,.2,1) both}
@keyframes pl-in{from{transform:translateY(12px);opacity:0}to{transform:none;opacity:1}}
@media (prefers-reduced-motion:reduce){.pl-info>*{animation:none}.pl-print{transition:none}}
`;

export default function Card({
  posts = [],
  cardWidth = 280,
  sag = 36,
  swing = 1,
  autoplay = 0, // ms per print; 0 = off
  className = "",
  ariaLabel = "Blog posts carousel",
}) {
  const n = posts.length;
  const [active, setActive] = useState(0);
  const [dragging, setDragging] = useState(false);
  const [size, setSize] = useState({ w: 1000, h: 416, cw: cardWidth });

  const stageRef = useRef(null);
  const pathRef = useRef(null);
  const cards = useRef([]);
  const sim = useRef({ off: 0, vel: 0, target: 0, a: [], w: [] });
  const drag = useRef(null);
  const lastTouch = useRef(0);
  const activeRef = useRef(0);
  const opts = useRef({ sag, swing });
  opts.current = { sag, swing };

  const spacing = size.cw * 1.08;
  const postsKey = useMemo(() => posts.map((p) => p.slug).join("|"), [posts]);

  const goTo = useCallback(
    (i) => {
      sim.current.target = clamp(i, 0, Math.max(0, n - 1)) * spacing;
    },
    [n, spacing],
  );

  // measure the stage
  useEffect(() => {
    const el = stageRef.current;
    if (!el) return undefined;
    const ro = new ResizeObserver(() => {
      const r = el.getBoundingClientRect();
      const cw = Math.round(Math.max(170, Math.min(cardWidth, r.width * 0.64)));
      setSize({ w: r.width, h: r.height, cw });
    });
    ro.observe(el);
    return () => ro.disconnect();
  }, [cardWidth]);

  // keep the line on the active print when spacing changes
  useEffect(() => {
    sim.current.target = activeRef.current * spacing;
    sim.current.off = activeRef.current * spacing;
  }, [spacing]);

  // the list changed (search / category): start over from the first print
  useEffect(() => {
    const S = sim.current;
    S.off = 0;
    S.vel = 0;
    S.target = 0;
    S.a = [];
    S.w = [];
    activeRef.current = 0;
    setActive(0);
  }, [postsKey]);

  // the simulation, written straight to the DOM every frame
  useEffect(() => {
    const stage = stageRef.current;
    if (!stage) return undefined;
    const reduce = window.matchMedia("(prefers-reduced-motion: reduce)").matches;
    let visible = true;
    let raf = 0;
    let prev = performance.now();
    const S = sim.current;

    const frame = (now) => {
      raf = 0;
      if (!visible) return;
      const dt = Math.min(0.033, (now - prev) / 1000);
      prev = now;
      const { w, h, cw } = size;
      const y0 = Math.max(36, h * 0.1);
      const d = drag.current;
      let lineVel;
      if (d && d.moved) {
        lineVel = d.v * 1000;
      } else {
        const before = S.off;
        [S.off, S.vel] = springStep(S.off, S.vel, S.target, dt);
        lineVel = -(S.off - before) / Math.max(dt, 1e-3);
      }
      const o = opts.current;
      const g = reduce ? 0 : o.swing;
      const near = nearestAt(S.off, spacing, n);

      for (let i = 0; i < n; i++) {
        const el = cards.current[i];
        if (!el) continue;
        const x = w / 2 + i * spacing - S.off;
        if (x < -cw * 1.5 || x > w + cw * 1.5) {
          el.style.visibility = "hidden";
          continue;
        }
        el.style.visibility = "visible";
        let a = S.a[i] || 0;
        let av = S.w[i] || 0;
        [a, av] = swingStep(a, av, lineVel, dt, g);
        if (g) a += Math.sin(now / 1300 + i * 1.7) * 0.0009 * g;
        S.a[i] = a;
        S.w[i] = av;
        const y = stringY(x, w, y0, o.sag) - 6;
        el.style.transform = `translate(${(x - cw / 2).toFixed(1)}px,${y.toFixed(1)}px) rotate(${a.toFixed(4)}rad)`;
        el.style.zIndex = String(i === near ? n + 1 : n - Math.abs(i - near));
      }

      pathRef.current?.setAttribute(
        "d",
        `M0 ${y0} Q${w / 2} ${y0 + 2 * o.sag} ${w} ${y0}`,
      );

      if (near !== activeRef.current) {
        activeRef.current = near;
        setActive(near);
      }
      raf = requestAnimationFrame(frame);
    };

    const io = new IntersectionObserver(([e]) => {
      visible = e.isIntersecting;
      if (visible && !raf) {
        prev = performance.now();
        raf = requestAnimationFrame(frame);
      }
    });
    io.observe(stage);
    raf = requestAnimationFrame(frame);
    return () => {
      cancelAnimationFrame(raf);
      io.disconnect();
    };
  }, [size, spacing, n]);

  // optional autoplay, back to the first print after the last
  useEffect(() => {
    if (!autoplay || n < 2) return undefined;
    const t = window.setInterval(() => {
      if (document.hidden || drag.current || performance.now() - lastTouch.current < autoplay) return;
      goTo(activeRef.current >= n - 1 ? 0 : activeRef.current + 1);
    }, autoplay);
    return () => window.clearInterval(t);
  }, [autoplay, n, goTo]);

  const onDown = (e) => {
    lastTouch.current = performance.now();
    drag.current = {
      x: e.clientX,
      off: sim.current.off,
      lx: e.clientX,
      lt: e.timeStamp,
      v: 0,
      moved: false,
    };
  };

  const onMove = (e) => {
    const d = drag.current;
    if (!d) return;
    const dx = e.clientX - d.x;
    if (!d.moved && Math.abs(dx) > 5) {
      d.moved = true;
      setDragging(true);
      stageRef.current?.setPointerCapture(e.pointerId);
    }
    if (!d.moved) return;
    const dt = Math.max(1, e.timeStamp - d.lt);
    d.v = 0.7 * ((e.clientX - d.lx) / dt) + 0.3 * d.v;
    d.lx = e.clientX;
    d.lt = e.timeStamp;
    const max = (n - 1) * spacing;
    let off = d.off - dx;
    if (off < 0) off *= 0.35;
    if (off > max) off = max + (off - max) * 0.35;
    sim.current.off = off;
  };

  const onUp = (e) => {
    const d = drag.current;
    drag.current = null;
    lastTouch.current = performance.now();
    if (!d) return;
    if (d.moved) {
      setDragging(false);
      sim.current.vel = -d.v * 1000;
      goTo(nearestAt(sim.current.off - d.v * 180, spacing, n));
      return;
    }
    const card = e.target.closest("[data-i]");
    if (card) goTo(Number(card.getAttribute("data-i")));
  };

  const step = (dir) => {
    lastTouch.current = performance.now();
    goTo(clamp(activeRef.current + dir, 0, n - 1));
  };

  const onKeyDown = (e) => {
    if (e.key === "ArrowRight") step(1);
    else if (e.key === "ArrowLeft") step(-1);
    else return;
    e.preventDefault();
  };

  if (!n) return null;

  const post = posts[Math.min(active, n - 1)];

  return (
    <section className={className} aria-label={ariaLabel}>
      <style>{CSS}</style>

      {/* the string with the prints */}
      <div
        ref={stageRef}
        className="pl-stage"
        data-drag={dragging ? "1" : "0"}
        role="region"
        aria-roledescription="carousel"
        aria-label={ariaLabel}
        tabIndex={0}
        onKeyDown={onKeyDown}
        onPointerDown={onDown}
        onPointerMove={onMove}
        onPointerUp={onUp}
        onPointerCancel={onUp}
        style={{ "--pl-cw": `${size.cw}px` }}
      >
        <svg className="pl-string text-muted" aria-hidden="true">
          <path
            ref={pathRef}
            fill="none"
            stroke="currentColor"
            strokeWidth="1.5"
            strokeLinecap="round"
          />
        </svg>
        {posts.map((item, i) => (
          <div
            key={item.id ?? item.slug}
            className="pl-card"
            data-i={i}
            data-on={i === active ? "1" : "0"}
            ref={(el) => {
              cards.current[i] = el;
            }}
            aria-hidden={i === active ? undefined : true}
          >
            <div className="pl-print">
              <div className="pl-shot">
                <img
                  src={item.cover}
                  alt={i === active ? item.coverAlt : ""}
                  width="1200"
                  height="675"
                  loading="lazy"
                  decoding="async"
                  draggable={false}
                />
              </div>
              <div className="pl-note">{item.title}</div>
            </div>
            <div className="pl-peg" />
          </div>
        ))}
      </div>

      {/* details of the active article */}
      <div className="mx-auto mt-6 flex max-w-2xl items-center gap-3 sm:gap-5">
        <button
          type="button"
          onClick={() => step(-1)}
          disabled={active === 0}
          aria-label="Previous article"
          className="grid h-11 w-11 shrink-0 place-items-center rounded-full border border-line bg-chip text-body transition hover:border-accent/50 hover:text-accent disabled:opacity-40 disabled:hover:border-line disabled:hover:text-body focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-accent"
        >
          <ChevronLeft aria-hidden="true" className="h-5 w-5" />
        </button>

        <div key={post.slug} className="pl-info min-w-0 flex-1 text-center">
          <span className="inline-block rounded-full bg-accent/15 px-3 py-1 font-mono text-xs uppercase tracking-wide text-accent">
            {post.category}
          </span>
          <h3 className="mt-3 text-xl font-semibold leading-snug text-heading sm:text-2xl">
            {post.title}
          </h3>
          <p className="mt-2 line-clamp-3 text-body">{post.excerpt}</p>
          <div className="mt-3 flex flex-wrap items-center justify-center gap-x-3 gap-y-1 font-mono text-xs text-muted">
            <time dateTime={post.date}>{formatDate(post.date)}</time>
            <span>{post.readTime}</span>
            <span aria-hidden="true">
              {pad2(active + 1)} / {pad2(n)}
            </span>
          </div>
          <Link
            to={`/blog/${post.slug}`}
            className="mt-5 inline-flex min-h-11 items-center gap-1 rounded-full bg-accent px-5 py-2 text-sm font-semibold text-on-accent transition hover:opacity-90 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-accent focus-visible:ring-offset-4 focus-visible:ring-offset-page"
          >
            Read article
            <ArrowUpRight aria-hidden="true" className="h-4 w-4" />
          </Link>
        </div>

        <button
          type="button"
          onClick={() => step(1)}
          disabled={active === n - 1}
          aria-label="Next article"
          className="grid h-11 w-11 shrink-0 place-items-center rounded-full border border-line bg-chip text-body transition hover:border-accent/50 hover:text-accent disabled:opacity-40 disabled:hover:border-line disabled:hover:text-body focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-accent"
        >
          <ChevronRight aria-hidden="true" className="h-5 w-5" />
        </button>
      </div>

      <p className="sr-only" role="status" aria-live="polite">
        {`Article ${active + 1} of ${n}: ${post.title}`}
      </p>
    </section>
  );
}