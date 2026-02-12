import {
  SiHtml5,
  SiCss3,
  SiJavascript,
  SiReact,
  SiTailwindcss,
  SiFigma,
  SiGithub,
  SiNetlify,
  SiTypescript,
  SiNextdotjs,
  SiAstro,
} from 'react-icons/si';

// The one custom icon React Icons misses
const MotionIcon = props => (
  <svg viewBox="0 0 24 24" fill="currentColor" {...props}>
    <path d="M0 0l12 12L0 24V0zm12 12l12 12H0l12-12zm0 0L24 0v24L12 12z" />
  </svg>
);

const techStack = [
  { name: 'HTML', Icon: SiHtml5, hoverColor: 'hover:text-[#E34F26]' },
  { name: 'CSS', Icon: SiCss3, hoverColor: 'hover:text-[#1572B6]' },
  {
    name: 'JavaScript',
    Icon: SiJavascript,
    hoverColor: 'hover:text-[#F7DF1E]',
  },
  { name: 'React', Icon: SiReact, hoverColor: 'hover:text-[#61DAFB]' },
  { name: 'Tailwind', Icon: SiTailwindcss, hoverColor: 'hover:text-[#06B6D4]' },
  { name: 'Figma', Icon: SiFigma, hoverColor: 'hover:text-[#F24E1E]' },
  { name: 'Git', Icon: SiGithub, hoverColor: 'hover:text-[#F05032]' },
  { name: 'Motion', Icon: MotionIcon, hoverColor: 'hover:text-[#BB44FF]' },
  { name: 'Netlify', Icon: SiNetlify, hoverColor: 'hover:text-[#00AD9F]' },
];

const exploringStack = [
  {
    name: 'TypeScript',
    Icon: SiTypescript,
    hoverColor: 'hover:text-[#3178C6]',
  },
  { name: 'Next.js', Icon: SiNextdotjs, hoverColor: 'hover:text-[#ffffff]' },
  { name: 'Astro', Icon: SiAstro, hoverColor: 'hover:text-[#FF5D01]' },
];

export default function About() {
  return (
    <section
      id="about"
      className="bg-zinc-950 min-h-screen border-t-4 border-solid border-cyan-400/30 w-full relative overflow-hidden flex items-center justify-center py-12"
    >
      <div className="relative z-10 grid grid-cols-1 w-full md:grid-cols-3 max-w-7xl py-12 mx-auto px-6 gap-6 text-white">
        <div className="border bg-white/2 backdrop-blur-md border-white/10 shadow-2xl rounded-xl p-5 flex items-start md:items-center md:text-center flex-col gap-4 md:col-span-3">
          <p className="border border-emerald-400/30 bg-emerald-400/10 text-emerald-300 rounded-full py-1.5 px-4 uppercase text-xs font-bold tracking-wide">
            About Me
          </p>
          <h2 className="text-3xl md:text-5xl font-bold leading-snug font-space">
            Passionate about crafting{' '}
            <span className="bg-hero-gradient bg-clip-text text-transparent block">
              digital experiences.
            </span>
          </h2>
          <p className="text-zinc-400 text-sm md:text-xl max-w-lg md:max-w-xl leading-relaxed">
            I'm a creative developer who loves turning ideas into polished,
            responsive web experiences. With a focus on clean code and
            thoughtful design, I build interfaces that feel intuitive and look
            stunning.
          </p>
        </div>

        <div className="border bg-white/5 backdrop-blur-md border-white/15 shadow-2xl rounded-xl p-6 flex items-start flex-col gap-4 md:col-span-2">
          <h3 className="text-zinc-300 text-xs uppercase tracking-widest mb-10 font-bold">
            Tech Stack
          </h3>
          <div className="grid grid-cols-3 gap-y-10 w-full">
            {techStack.map((tech, index) => (
              <div
                key={index}
                className={`flex flex-col items-center gap-3 transition-colors duration-300 text-zinc-500 ${tech.hoverColor}`}
              >
                <tech.Icon className="w-12 h-12 md:w-16 md:h-16" />
                <span className="text-xs font-medium text-zinc-300">
                  {tech.name}
                </span>
              </div>
            ))}
          </div>
        </div>

        <div className="border bg-white/5 backdrop-blur-md border-white/15 shadow-2xl rounded-xl p-6 flex items-start flex-col gap-4">
          <h3 className="text-zinc-300 text-xs uppercase tracking-widest mb-10 font-bold">
            Currently Exploring
          </h3>
          <div className="grid grid-cols-3 md:grid-cols-1 items-center gap-y-10 w-full">
            {exploringStack.map((tech, index) => (
              <div
                key={index}
                className={`flex flex-col items-center gap-3 transition-colors duration-300 text-zinc-500 ${tech.hoverColor}`}
              >
                <tech.Icon className="w-12 h-12 md:w-16 md:h-16" />
                <span className="text-xs font-medium text-zinc-300">
                  {tech.name}
                </span>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
