export const navigationItems = [
  { name: "Home", href: "#hero", description: "" },
  { name: "About", href: "#about", description: "" },
  { name: "Projects", href: "#projects", description: "" },
  { name: "Knowledge", href: "#knowledge", description: "" },
  { name: "Clients", href: "#clients", description: "" },
  { name: "Contact", href: "#contact", description: "" },
];

// src/components/ui/Data.jsx
export const expCards = [
  {
    id: 1,
    title: "Full Stack Developer",
    company: "Heapware Software Development",
    date: "June 2025 - Present",
    location: "Remote",
    logoPath: "/hurayracodes.png",
    responsibilities: [
      "Developed RESTful APIs and integrated third-party services.",
      "Implemented authentication and authorization systems.",
    ],
  },
  {
    id: 2,
    title: "Freelancer",
    company: "Upwork & Freelancer",
    date: "December 2025 - Present",
    location: "Global",
    logoPath: "/hurayracodes.png",
    responsibilities: [
      "Delivered 15+ successful projects with 100% client satisfaction.",
    ],
  },
  
  {
    id: 4,
    title: "Mobile App Developer",
    company: "Appwrite",
    date: "March 2024 - November 2024",
    location: "Remote",
    review:
      "Hurayra's expertise in mobile development brought innovation and efficiency to our app development process.",
    logoPath: "/hurayracodes.png",
    responsibilities: [
      "Built cross-platform mobile apps with React Native.",
      "Implemented push notifications and real-time features.",
    ],
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
      "Problem solving platform with modern tech stack Problem solving platform with modern tech stack Problem solving platform with modern tech stack",
    duration: "Feb 2025 - Present",
    images: ["/project-img-1.png", "/project-img-2.png", "/project-img-3.png"],
    github: "https://github.com/hurayracodes/IsSolved",
    website: "https://is-solved.hurayracodes.com",
    tech: ["React", "Node.js", "Express", "MongoDB", "Tailwind CSS"], // ✅ Tags added
  },
  {
    id: 2,
    title: "Digital Wallet valuable",
    description:
      "Send/receive money using phone numbers with TurboRepo backend Problem solving platform with modern tech stack",
    duration: "Dec 2024 - Present",
    images: ["/project-img-1.png", "/project-img-2.png", "/project-img-3.png"],
    github: "https://github.com/hurayracodes/wallet",
    website: null,
    tech: ["TurboRepo", "Node.js", "Express", "MongoDB", "JWT"], // ✅ Tags added
  },
  {
    id: 3,
    title: "3D Solar System with Threejs",
    description:
      "Interactive 3D planets exploration with Three.js Problem solving platform with modern tech stack Problem solving platform with modern tech stack",
    duration: "Jan 2025 - Mar 2025",
    images: ["/project-img-1.png", "/project-img-2.png", "/project-img-3.png"],
    github: "https://github.com/hurayracodes/solar-system",
    website: "https://solar.hurayracodes.com",
    tech: ["Three.js", "JavaScript", "HTML5", "CSS3", "WebGL"], // ✅ Tags added
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
