# Project Files and Folder Guide

Yeh document project ke folders aur files ka map hai. Is se aap samajh sakte hain ke har cheez kahan rakhi hai aur us ka basic kaam kya hai.

## Project structure

```text
abuhurayra/
├── .git/                   # Git repository metadata (hidden)
├── .env.local
├── .gitattributes
├── .gitignore
├── README.md
├── eslint.config.js
├── files.md                # Project file/folder guide (this document)
├── index.html
├── node_modules/            # Installed npm dependencies
├── package.json
├── package-lock.json
├── robots.txt
├── sitemap.xml
├── vercel.json
├── vite.config.js
├── public/
│   ├── Abuhurara.pdf
│   ├── exp1.svg
│   ├── exp2.svg
│   ├── exp3.svg
│   ├── exp4.svg
│   ├── h.svg
│   ├── heapwarelogo.jpg
│   ├── hurayracodes.png
│   ├── project-img-1.png
│   ├── project-img-2.png
│   ├── project-img-3.png
│   ├── project-img-4.png
│   ├── project-img-5.png
│   └── icons/
│       ├── Express.svg
│       ├── JavaScript.svg
│       ├── git.svg
│       ├── github.svg
│       ├── logo.svg
│       ├── menu.svg
│       ├── mongodb.svg
│       ├── nextjs.svg
│       ├── nodejs.svg
│       ├── python.svg
│       ├── reactjs.svg
│       ├── tailwind.svg
│       ├── threejs.svg
│       ├── typescript.svg
│       ├── vercel.svg
│       └── vscode.svg
├── src/
│   ├── App.css
│   ├── App.jsx
│   ├── index.css
│   ├── main.jsx
│   ├── Sections/
│   │   ├── About.jsx
│   │   ├── Contact.jsx
│   │   ├── Experience.jsx
│   │   ├── Home.jsx
│   │   ├── Knowledge.jsx
│   │   ├── Projects.jsx
│   │   ├── SkillsSection.jsx
│   │   └── Testimonials.jsx
│   ├── components/
│   │   ├── DecryptedText.jsx
│   │   ├── Footer.jsx
│   │   ├── Navigation.jsx
│   │   └── Theme.jsx
│   └── ui/
│       ├── Button.jsx
│       ├── Cleantestimonial.jsx
│       ├── Data.jsx
│       ├── DecryptText.jsx
│       ├── Hero.jsx
│       ├── MovingBorder.jsx
│       ├── ProjectCard.jsx
│       ├── Skillboxs.jsx
│       ├── SkillsSection.jsx
│       ├── TextRollNavigation.jsx
│       ├── TitleHeader.jsx
│       └── theme-utils.js
└── dist/                 # Build command se banne wala production output
    ├── index.html
    └── assets/
        ├── 2.png
        ├── JS.svg
        ├── bg-bg.png
        ├── bg.svg
        ├── exp1.svg
        ├── exp2.svg
        ├── exp3.svg
        ├── exp4.svg
        ├── h.svg
        ├── hero-bg.svg
        ├── hero.pdf
        ├── index-Cxu6XkCv.js
        ├── index-DPYpti8v.css
        ├── popcorn.gif
        ├── project-img-1.png
        ├── project-img-2.png
        ├── project-img-3.png
        ├── project-img-4.png
        └── project-img-5.png
```

`.git/` Git repository ka hidden metadata folder hai. `node_modules/` mein npm packages install hote hain. In dono folders ke andar ki files yahan detail mein list nahi ki gayin: `node_modules/` dependencies se dobara generate hota hai aur `.git/` Git khud manage karta hai.

## Root files

| File/folder | Kaam |
|---|---|
| `.env.local` | Local environment variables ke liye. Is file ke secrets ko public ya Git mein share na karein. |
| `.gitattributes` | Git ko files ke handling/diff ke rules batata hai. |
| `.gitignore` | Git ko batata hai kaun si files/folders track nahi karne, jaise installed dependencies aur generated output. |
| `README.md` | Project ka intro/readme. |
| `eslint.config.js` | ESLint ke JavaScript, React Hooks aur React Fast Refresh rules. |
| `index.html` | Vite ka HTML entry point; page metadata aur `#root` React mount point yahan hain. |
| `package.json` | Project scripts aur npm dependencies ki list. |
| `package-lock.json` | Installed dependency versions ko lock karta hai. |
| `robots.txt` | Search engine crawlers ke liye rules aur sitemap address. |
| `sitemap.xml` | Search engines ke liye site URLs ki list. |
| `vercel.json` | Vercel rewrites aur response headers ki configuration. |
| `vite.config.js` | Vite configuration; React SWC aur Tailwind CSS plugins yahan set hain. |
| `public/` | Static images, icons, PDF aur doosri files jo site par seedhe URL se serve hoti hain. |
| `src/` | React application ka source code. |
| `dist/` | Production build output; `npm run build` chalane par banta hai. Isay manually edit na karein. |

## `src/` ke andar

### Entry point aur app

| File | Kaam |
|---|---|
| `src/main.jsx` | React app ko HTML ke `#root` element mein render karta hai, global CSS aur `ThemeProvider` load karta hai. |
| `src/App.jsx` | Main app layout aur React Router routes set karta hai. `Navigation` aur `Footer` sab routes ke sath render hote hain. |
| `src/index.css` | Global Tailwind import aur light/dark theme ke CSS variables. |
| `src/App.css` | Additional app styling file. |

### `src/Sections/`

Yahan page-level sections/pages hain. `Home.jsx` in mein se kai sections ko ek landing page par jorta hai; `App.jsx` routes bhi yahin ke kuch sections ko render karte hain.

| File | Kaam |
|---|---|
| `About.jsx` | About/profile section. |
| `Contact.jsx` | Contact section/form. |
| `Experience.jsx` | Work experience section. |
| `Home.jsx` | Home/landing page; Hero, About, Projects, Knowledge, Skills, Experience, Testimonials aur Contact ko compose karta hai. |
| `Knowledge.jsx` | Knowledge/contributions section. |
| `Projects.jsx` | Projects ki list aur project cards. |
| `SkillsSection.jsx` | Skills section. |
| `Testimonials.jsx` | Testimonials section. |

### `src/components/`

Reusable site-level components aur theme state:

| File | Kaam |
|---|---|
| `DecryptedText.jsx` | Decrypted/reveal text animation component. |
| `Footer.jsx` | Site footer. |
| `Navigation.jsx` | Site navigation/menu; theme hook ka bhi istemal karta hai. |
| `Theme.jsx` | Theme provider aur theme state/context. |

### `src/ui/`

Chhote reusable UI elements, animation components aur portfolio data:

| File | Kaam |
|---|---|
| `Button.jsx` | Reusable button UI. |
| `Cleantestimonial.jsx` | Testimonial display component. |
| `Data.jsx` | Navigation, testimonials, experiences, contributions, projects aur skills ka data. |
| `DecryptText.jsx` | Text decrypt animation UI. |
| `Hero.jsx` | Hero/banner section UI. |
| `MovingBorder.jsx` | Animated/moving border button effect. |
| `ProjectCard.jsx` | Project card component. |
| `Skillboxs.jsx` | Skills ko visual/orbit layout mein dikhane wala component. |
| `SkillsSection.jsx` | Skills ke liye UI component. |
| `TextRollNavigation.jsx` | Text animation ke sath navigation UI. |
| `TitleHeader.jsx` | Section title/header UI. |
| `theme-utils.js` | Theme key, saved theme read karne aur theme apply karne ke helpers. |

### `public/`

`public/` ke files build ke dauran apne naam ke saath site root par serve hote hain. Misal: `public/project-img-1.png` ko `/project-img-1.png` se refer kiya ja sakta hai.

| File/folder | Kaam |
|---|---|
| `Abuhurara.pdf` | Public PDF document. |
| `exp1.svg`–`exp4.svg` | Experience/contribution section ke visual assets. |
| `h.svg` | Site graphic/logo asset. |
| `heapwarelogo.jpg` | HeapWare logo image. |
| `hurayracodes.png` | Profile/brand image. |
| `project-img-1.png`–`project-img-5.png` | Project preview images. |
| `icons/` | Technology aur interface icons (React, Node.js, MongoDB, GitHub, waghera). |

## App chalane ke commands

Terminal mein project folder ke andar:

```bash
npm install
npm run dev
npm run lint
npm run build
npm run preview
```

- `npm run dev`: local development server start karta hai.
- `npm run lint`: ESLint checks chalata hai.
- `npm run build`: production files `dist/` mein banata hai.
- `npm run preview`: built production site ko locally preview karta hai.

> Note: Current `App.jsx` mein routes `/`, `/about`, `/projects`, `/testimonils`, aur `/contact` defined hain. `testimonils` route ki spelling source code mein isi tarah hai.
