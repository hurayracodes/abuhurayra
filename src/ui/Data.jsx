export const navigationItems = [
  { name: "Home", href: "#hero", description: "" },
  { name: "About", href: "#about", description: "" },
  { name: "Projects", href: "#projects", description: "" },
  { name: "Knowledge", href: "#knowledge", description: "" },
  { name: "Clients", href: "#clients", description: "" },
  { name: "Contact", href: "#contact", description: "" },
];
export const testimonials = [
  {
    quote: "The attention to detail is unmatched. Every interaction feels intentional.",
    author: "Sarah Chen",
    role: "Design Director",
    company: "Linear",
    avatar: "https://i.pravatar.cc/150?img=1",
  },
  {
    quote: "Finally, someone who understands that simplicity is the ultimate sophistication.",
    author: "Marcus Webb",
    role: "Creative Lead",
    company: "Vercel",
    avatar: "https://i.pravatar.cc/150?img=2",
  },
  {
    quote: "This work redefined our entire approach to digital experiences.",
    author: "Elena Frost",
    role: "Head of Product",
    company: "Stripe",
    avatar: "https://i.pravatar.cc/150?img=3",
  },
  {
    quote: "We work 5x faster. Best solution in the market, hands down.",
    author: "Alex Kim",
    role: "CEO",
    company: "TechCorp",
    avatar: "https://i.pravatar.cc/150?img=4",
  },
  {
    quote: "I'm confident my data is safe here. Can't say that about anyone else.",
    author: "Dan Cole",
    role: "CTO",
    company: "SecureNet",
    avatar: "https://i.pravatar.cc/150?img=5",
  },
  {
    quote: "So simple and intuitive — got the whole team up to speed in 10 minutes.",
    author: "Marina Cruz",
    role: "HR Manager",
    company: "TalentForge",
    avatar: "https://i.pravatar.cc/150?img=6",
  },
]
export const experiences = [
  {
    id: 0,
    icon: "💼",
    title: "Web Development Intern",
    company: "@HeapWare",
    duration: "May 2026 — Present",
    description:
      "Collaborated within a development team on project-based tasks, contributing to responsive UI and clean, scalable code. Worked alongside senior developers on frontend-backend integration.",
    tags: ["React", "Node.js", "Teamwork"],
  },
  {
    id: 1,
    icon: "🌐",
    title: "Freelance Full Stack Developer & Designer",
    company: "@Fiverr",
    duration: "2026 — Present",
    description:
      "Delivering web development and graphic design solutions to international clients with 5-star satisfaction. Includes SVG vector clipart design and full-stack web projects.",
    tags: ["MERN Stack", "UI/UX", "SVG Design", "⭐ 5-Star"],
  },
];

export const contributions = [
  {
    id: 1,
    title: "Frontend Engineer Intern",
    desc: "Building responsive, pixel-perfect UIs with React & Next.js, enhancing interactivity.",
    className: "md:col-span-2",
    thumbnail: "/exp1.svg",
  },
  {
    id: 2,
    title: "Backend Engineer Intern",
    desc: "Creating robust APIs and server-side logic with Node.js & Express",
    className: "md:col-span-2",
    thumbnail: "/exp2.svg",
  },
  {
    id: 3,
    title: "Database",
    desc: "Structuring efficient MongoDB & PostgreSQL schemas.",
    className: "md:col-span-2",
    thumbnail: "/exp3.svg",
  },
  {
    id: 4,
    title: "Lead Full Stack Developer",
    desc: "Developed and maintained user-facing features using modern Full Stack technologies.",
    className: "md:col-span-2",
    thumbnail: "/exp4.svg",
  },
];

export const projects = [
  {
    id: 1,
    title: "Food Delivery App | MERN",
    description:
      "Full-featured food delivery app built with MERN stack for seamless ordering and delivery experience.",
    duration: "Feb 2025 - Present",
    images: "/project-img-1.png",
    github: "https://github.com/hurayracodes/IsSolved",
    website: "https://is-solved.hurayracodes.com",
    tech: ["React", "Node.js", "Express", "MongoDB", "Tailwind CSS"], // ✅ Tags added
  },
  {
    id: 2,
    title: "Digital Wallet valuable",
    description:
      "Digital wallet app for sending/receiving money via phone numbers using TurboRepo backend.",
    duration: "Dec 2024 - Present",
    images: "/project-img-2.png",
    github: "https://github.com/hurayracodes/wallet",
    website: null,
    tech: ["TurboRepo", "Node.js", "Express", "MongoDB", "JWT"], // ✅ Tags added
  },
  {
    id: 3,
    title: "3D Solar System with Threejs",
    description:
      "Interactive 3D solar system exploration built with Three.js and WebGL.",
    duration: "Jan 2025 - Mar 2025",
    images: "/project-img-3.png",
    github: "https://github.com/hurayracodes/solar-system",
    website: "https://solar.hurayracodes.com",
    tech: ["Three.js", "JavaScript", "HTML5", "CSS3", "WebGL"], // ✅ Tags added
  },
];

export const blogPosts = [
  {
    id: 1,
    slug: "building-a-mern-library-management-system",
    title: "How I Built a MERN Library Management System",
    excerpt:
      "I built a library app around clear roles, protected PDF reading, and dependable loan rules. Here is how I shaped the data and workflows thoughtfully.",
    category: "Case Study",
    tags: ["MERN", "MongoDB", "Node.js", "Security"],
    date: "2026-10-12",
    readTime: "7 min read",
    cover: "/blog/mern-library.svg",
    coverAlt: "Illustration of books, a protected document, and a library dashboard",
    published: true,
    content: [
      {
        type: "p",
        text: "When I planned my Library Management System, I started with the people who would use it rather than with a list of screens. A reader needs to discover books and keep track of loans. A librarian needs to manage the catalog and resolve overdue items. An administrator needs to manage staff and review the system. Those different responsibilities shaped the data model, permissions, and interface from the beginning.",
      },
      {
        type: "h2",
        text: "Model the roles and records first",
      },
      {
        type: "p",
        text: "I used MongoDB collections for users, books, and loans, with references between them so a loan records its reader, book, checkout date, due date, and return status. I kept role values explicit and checked them on the server for every protected operation. Hiding an admin button in React improves the experience, but it does not protect an API. Each Express route checks both authentication and the permission needed for that action.",
      },
      {
        type: "p",
        text: "That separation also made the interface easier to reason about. The same catalog can serve every role, while management controls appear only where they are useful. I validate request data at the API boundary, return predictable errors, and avoid trusting role or ownership values sent by the browser. When I add a feature, I can ask which user owns the record and which role is allowed to change it.",
      },
      {
        type: "h2",
        text: "Protect the PDF reading flow",
      },
      {
        type: "p",
        text: "For digital books, I did not want a public file URL to become an accidental access policy. The client asks the server for a document only after the user is authenticated and is entitled to read it. The server verifies that relationship before streaming the PDF. I also keep storage paths out of public responses and apply sensible file-size and content-type checks when documents are uploaded.",
      },
      {
        type: "quote",
        text: "A hidden download button is a user-interface choice; authorization belongs at the server boundary.",
      },
      {
        type: "p",
        text: "PDF delivery is a trade-off worth making deliberately. A streamed response can prevent exposing a direct storage location, but it still cannot stop someone from capturing content they are allowed to view. I treat the reader as a convenience, not DRM, and keep access checks close to the document request. For deployment, I would also use private object storage and short-lived signed access when that fits the infrastructure.",
      },
      {
        type: "h2",
        text: "Make loans and fines predictable",
      },
      {
        type: "p",
        text: "Loan behavior needs clear rules more than clever code. Before creating a loan, I check whether the reader has reached their active-loan limit and whether a physical copy is available. The server assigns the checkout and due dates; the browser can display them but cannot choose trusted values. Returning a book changes the loan state once, and the operation is safe to retry without creating duplicate returns.",
      },
      {
        type: "p",
        text: "I calculate an overdue fine from the due date and the library's configured daily rate, while storing enough loan information to explain the result. A scheduled job can refresh overdue summaries, but I still calculate the current amount from the source dates when a user opens a loan. That avoids treating a stale cached number as the financial record. I make the rate and any grace period visible to staff instead of burying policy in a component.",
      },
      {
        type: "ul",
        items: [
          "Validate stock, account status, and active-loan limits on the server.",
          "Record due dates and policy inputs so staff can explain a fine.",
          "Make return and renewal operations safe against duplicate requests.",
        ],
      },
      {
        type: "h2",
        text: "What I would improve next",
      },
      {
        type: "p",
        text: "I would add integration tests around permission boundaries, concurrent checkouts, and overdue calculations before expanding the feature set. Those tests protect the rules that matter when multiple readers act at the same time. I would also track audit events for catalog edits and account actions, with enough context for staff to investigate without logging private document contents.",
      },
      {
        type: "p",
        text: "The main lesson from this project was to make the policy visible in the architecture. Roles, protected reading, loans, and fines each have a server-side source of truth. React then presents that behavior clearly rather than trying to enforce it on its own. That approach made the application safer to extend and gave me a better foundation for a real library workflow.",
      },
    ],
  },
  {
    id: 2,
    slug: "my-responsive-tailwind-css-checklist",
    title: "My Responsive Web Design Checklist with Tailwind CSS",
    excerpt:
      "I use this practical responsive checklist on client projects to catch awkward breakpoints, keyboard issues, overflow, and unreadable theme combinations now.",
    category: "Workflow",
    tags: ["Tailwind CSS", "Responsive Design", "Accessibility"],
    date: "2026-09-20",
    readTime: "6 min read",
    cover: "/blog/responsive-checklist.svg",
    coverAlt: "Responsive layouts shown across a phone, tablet, and desktop",
    published: true,
    content: [
      {
        type: "p",
        text: "Responsive design is not a last-minute pass where I shrink a desktop layout until it fits. On client work, I start with the content and the smallest useful viewport, then let the layout grow when it has room. Tailwind makes those changes easy to see in the markup, but utility classes do not automatically make a page usable. I keep a short checklist and test the actual flows at more than one width.",
      },
      {
        type: "h2",
        text: "Start with content and constraints",
      },
      {
        type: "p",
        text: "Before choosing columns, I identify what needs emphasis, what can wrap, and what must remain visible. A navigation label may wrap naturally, while a data table may need a horizontal scroll container or a smaller card presentation. I avoid forcing every screen into the same grid. In Tailwind, I use the default mobile-first styles for the narrow layout and add breakpoint utilities only when the content benefits from more space.",
      },
      {
        type: "p",
        text: "I check common widths around 360 pixels, a tablet size, and a wide desktop, then resize between them. Breakpoints are useful checkpoints rather than device categories. A layout can look fine at a named breakpoint and still break just before it. I pay particular attention to long headings, buttons beside inputs, and navigation rows where fixed widths tend to create overflow.",
      },
      {
        type: "h2",
        text: "Check layout, type, and interaction",
      },
      {
        type: "ol",
        items: [
          "Look for horizontal page overflow and content hidden behind fixed elements.",
          "Confirm text wraps without clipping and headings remain a sensible size.",
          "Check tap targets, spacing, and form controls at narrow widths.",
          "Navigate with a keyboard and make every focus state visible.",
        ],
      },
      {
        type: "p",
        text: "I prefer flexible sizing such as max-width containers, grid columns that can collapse, and images that never exceed their container. Fixed heights are a frequent source of clipped text when translated content or zoom changes the line count. If a component must scroll, I keep that behavior local and obvious instead of allowing the entire page to drift sideways.",
      },
      {
        type: "h2",
        text: "Treat accessibility as part of responsive work",
      },
      {
        type: "p",
        text: "A touch layout should not remove keyboard access, and a visually compact control still needs a useful accessible name. I tab through menus, filters, and dialogs at each layout. I check that focus is not hidden under a sticky header and that controls have enough space to use comfortably. I also test browser zoom because a responsive interface should adapt when someone enlarges text, not just when the viewport gets narrower.",
      },
      {
        type: "quote",
        text: "A breakpoint is successful when the content becomes easier to use, not merely when the columns change.",
      },
      {
        type: "h2",
        text: "Verify colors, images, and real content",
      },
      {
        type: "p",
        text: "When a project supports light and dark themes, I inspect both instead of assuming token names guarantee contrast. Muted text, borders, disabled states, and focus rings are easy to miss. I check contrast on actual surfaces and avoid using color as the only way to communicate validation or status. Images should have useful alternative text when they add information, and decorative images should not repeat nearby copy.",
      },
      {
        type: "p",
        text: "Finally, I test realistic text rather than placeholder words. Long names, empty states, errors, and translations all expose different layout problems. I verify loading and hover states, reduce-motion behavior, and whether content still makes sense if an image fails. A small manual pass at these edges usually catches more than adding another breakpoint ever will.",
      },
      {
        type: "h2",
        text: "My final pass",
      },
      {
        type: "p",
        text: "Before calling a page ready, I move from the narrowest supported width to desktop, then use the keyboard and browser zoom. I check that no content is cut off, the primary action remains clear, and theme colors stay readable. The checklist is not a substitute for testing with real users, but it helps me catch repeatable issues early and deliver a layout that feels intentional across devices.",
      },
    ],
  },
  {
    id: 3,
    slug: "react-performance-fixes-i-use-on-real-projects",
    title: "React Performance Fixes I Use on Real Projects",
    excerpt:
      "I profile React interfaces before optimizing, then fix expensive renders, oversized assets, and slow data paths with measurable improvements reliably.",
    category: "React",
    tags: ["React", "Performance", "JavaScript"],
    date: "2026-08-28",
    readTime: "6 min read",
    cover: "/blog/react-performance.svg",
    coverAlt: "React interface with a measured performance chart and optimized components",
    published: true,
    content: [
      {
        type: "p",
        text: "When an interface feels slow, I resist adding memoization immediately. A delay can come from JavaScript work, network requests, image decoding, or a component that renders more often than expected. I first reproduce the issue and measure it with the browser performance tools and React DevTools. A profile gives me a target; without one, an optimization can add complexity while leaving the real bottleneck untouched.",
      },
      {
        type: "h2",
        text: "Measure the user-visible problem",
      },
      {
        type: "p",
        text: "I look at the interaction that feels slow, note its starting conditions, and record a baseline. For a heavy list, I inspect render duration and how many rows update after a small change. For a page load, I check network timing, image size, and layout shifts. I also distinguish a one-time initial cost from repeated work during interaction, because each calls for a different fix.",
      },
      {
        type: "h2",
        text: "Reduce unnecessary rendering",
      },
      {
        type: "p",
        text: "If profiling shows a parent update is making an expensive child repeat work, I check the component boundary and state ownership first. Moving state closer to the controls that use it can keep unrelated sections stable. I use React.memo, useMemo, or useCallback when they prevent measured work, not as decoration. Memoization has a cost too, and unstable object or function props can make a memoized component render anyway.",
      },
      {
        type: "p",
        text: "For large collections, rendering every item can be the issue rather than a faulty component. I paginate or virtualize when users do not need every row in the DOM at once. I keep keys stable so React can match items correctly, and I avoid using array indexes when entries can be inserted or reordered. Those changes improve both update behavior and the reliability of form state inside lists.",
      },
      {
        type: "h2",
        text: "Trim work outside React",
      },
      {
        type: "ul",
        items: [
          "Compress and correctly size images; reserve their dimensions to reduce layout shift.",
          "Split route-level code when a page has heavy features users do not always open.",
          "Debounce expensive search work while keeping the input itself responsive.",
          "Cache or batch requests only when the data freshness rules are clear.",
        ],
      },
      {
        type: "p",
        text: "A fast component cannot compensate for a multi-megabyte image or a request waterfall. I use responsive image sizes, lazy-load content below the fold, and avoid loading large libraries on routes that do not need them. For search, I keep keystrokes immediate and defer expensive filtering or remote calls. When I add caching, I define how data becomes stale so the speed improvement does not create confusing results.",
      },
      {
        type: "h2",
        text: "Keep interactions smooth",
      },
      {
        type: "p",
        text: "Long synchronous tasks block input and painting. I break avoidable work into smaller steps, move appropriate computation to a worker, or use transitions for updates that can be lower priority. I do not make a loading spinner the only response to a slow action; I preserve the current interface and show clear progress where it helps. Reduced-motion preferences also matter when animations are part of the loading experience.",
      },
      {
        type: "quote",
        text: "The best optimization is the smallest change that improves a measured user experience without making the code harder to trust.",
      },
      {
        type: "h2",
        text: "Measure again and protect the result",
      },
      {
        type: "p",
        text: "After each change, I repeat the same interaction and compare it with the baseline. I check for regressions in memory, visual stability, and lower-powered devices rather than relying on a single desktop run. If a change does not produce a meaningful result, I remove it. That keeps the codebase understandable and avoids collecting performance tricks that nobody can justify later.",
      },
      {
        type: "p",
        text: "I also add a test or a lightweight performance budget when the problem is likely to return. The right measure depends on the interface: render counts for a particularly expensive subtree, bundle size for a route, or a real user timing for a navigation. Performance work is ongoing, but a clear baseline and a repeatable check turn it from guesswork into an engineering decision.",
      },
    ],
  },
];
export const skillsData = [
  { name: "Next.js", icon: "/icons/nextjs.svg", color: "#FFFFFF" },
  { name: "JavaScript", icon: "/icons/javascript.svg", color: "#F7DF1E" },
  { name: "Express.js", icon: "/icons/express.svg", color: "#FFFFFF" },
  { name: "React.js", icon: "/icons/reactjs.svg", color: "#61DAFB" },
  { name: "Node.js", icon: "/icons/nodejs.svg", color: "#339933" },
  { name: "MongoDB", icon: "/icons/mongodb.svg", color: "#47A248" },
  { name: "TypeScript", icon: "/icons/typescript.svg", color: "#3178C6" },
  { name: "Tailwind CSS", icon: "/icons/tailwind.svg", color: "#06B6D4" },
  { name: "Git", icon: "/icons/git.svg", color: "#F05032" },
  { name: "VS Code", icon: "/icons/vscode.svg", color: "#007ACC" },
  { name: "GitHub", icon: "/icons/github.svg", color: "#FFFFFF" },
  { name: "Vercel", icon: "/icons/vercel.svg", color: "#FFFFFF" },
];
