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
    id: 1,
    title: "Freelancer",
    company: "Fiverr",
    type: "Freelance",
    duration: "2025 – Present",
    icon: "🌐",
    tags: ["Web Dev", "Full Stack", "Remote"],
    description:
      "Currently offering freelance web development services on Fiverr, building modern websites and web applications for clients globally.",
    skills: ["React", "Node.js", "Tailwind CSS", "JavaScript"],
  },
  {
    id: 2,
    title: "Full Stack Web Dev Intern",
    company: "NavTCC & DevelopersHub Corp",
    type: "Internship (Offered)",
    duration: "2025",
    icon: "💻",
    tags: ["FSWD", "Internship", "Lahore"],
    description:
      "Received internship offer from NavTCC and DevelopersHub Corporation after completing Full Stack Web Development course.",
    skills: ["Full Stack", "Web Development"],
  },
  {
    id: 3,
    title: "Full Stack Web Development",
    company: "Ideoversity – DevHub",
    type: "Course",
    duration: "2025 · 6 Months",
    icon: "🎓",
    tags: ["FSWD", "NavTCC", "Lahore"],
    description:
      "Completed a 6-month Full Stack Web Development course at ideoversity Lahore",
    skills: ["HTML", "CSS", "JavaScript", "React", "Node.js", "MongoDB"],
  },
  {
    id: 4,
    title: "Office Management Intern",
    company: "VTI Chichawatni",
    type: "Internship",
    duration: "2025 · 3 Months",
    icon: "🗂️",
    tags: ["Office Mgmt", "VTI", "Diploma"],
    description:
      "Completed Office Management diploma and 3-month internship at VTI Chichawatni, gaining administrative and organizational skills.",
    skills: ["Office Management", "Administration", "MS Office"],
  },
  {
    id: 5,
    title: "Production & Packing Operator",
    company: "Punjab Cash & Carry, Islamabad",
    type: "Full-time",
    duration: "2024 · 6 Months",
    icon: "🏭",
    tags: ["Production", "Islamabad", "Operations"],
    description:
      "Handled bread cutting & packing, Zinger Burger machine operation, Suwarma packing, Lofa and Shermall production. Operated cutting machinery independently.",
    skills: ["Machine Operation", "Food Packing", "Quality Control", "Team Work"],
  },
  {
    id: 6,
    title: "Cream Filling & QC Operator",
    company: "Golden Pearl, Lahore",
    type: "Full-time",
    duration: "2022 · 4 Months",
    icon: "⚗️",
    tags: ["Manufacturing", "Lahore", "QC"],
    description:
      "Worked in Golden Pearl cosmetics facility, filling cream into packaging and performing weight checks to ensure quality control standards.",
    skills: ["Cream Filling", "Weight QC", "Packaging", "Manufacturing"],
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
