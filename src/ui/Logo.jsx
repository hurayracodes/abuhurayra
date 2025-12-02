import LogoLoop from './LogoLoop';
import { SiReact, SiNextdotjs, SiTypescript, SiTailwindcss } from 'react-icons/si';

const techLogos = [
  { node: <SiReact />, title: "React" },
  { node: <SiNextdotjs />, title: "Next.js"},
  { node: <SiTypescript />, title: "TypeScript"},
  { node: <SiTailwindcss />, title: "Tailwind CSS",},
];

// Alternative with image sources
const imageLogos = [
  { src: "/logos/company1.png", alt: "Company 1", href: "https://company1.com" },
  { src: "/logos/company2.png", alt: "Company 2", href: "https://company2.com" },
  { src: "/logos/company3.png", alt: "Company 3", href: "https://company3.com" },
];


export default function Logo() {
  return (
     <div className='text-gray-400' style={{ height: '250px', position: 'relative', overflow: 'hidden'}}>
      <LogoLoop
        logos={techLogos}
        speed={70}
        direction="left"
        logoHeight={60}
        gap={60}
        pauseOnHover
        scaleOnHover
        fadeOut
        ariaLabel="Technology partners"
      />
    </div>
  )
}
