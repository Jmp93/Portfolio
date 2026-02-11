import {
  SiHtml5,
  SiCss3,
  SiJavascript,
  SiReact,
  SiTailwindcss,
  SiFigma,
  SiGithub,
  SiNetlify,
  SiNextdotjs,
  SiAstro,
  SiTypescript,
} from 'react-icons/si';

const techStack = [
  { name: 'HTML', icon: <SiHtml5 />, hoverColor: 'hover:text-[#E34F26]' },
  { name: 'CSS', icon: <SiCss3 />, hoverColor: 'hover:text-[#1572B6]' },
  { name: 'JS', icon: <SiJavascript />, hoverColor: 'hover:text-[#F7DF1E]' },
  { name: 'React', icon: <SiReact />, hoverColor: 'hover:text-[#61DAFB]' },
  {
    name: 'Tailwind',
    icon: <SiTailwindcss />,
    hoverColor: 'hover:text-[#06B6D4]',
  },
  { name: 'Figma', icon: <SiFigma />, hoverColor: 'hover:text-[#F24E1E]' },
  { name: 'Git', icon: <SiGithub />, hoverColor: 'hover:text-[#F05032]' },
  {
    name: 'Motion',
    icon: (
      <svg
        role="img"
        viewBox="0 0 24 24"
        fill="currentColor"
        className="h-[1em] w-[1em] inline-block"
      >
        <path d="M0 0l12 12L0 24V0zm12 12l12 12H0l12-12zm0 0L24 0v24L12 12z" />
      </svg>
    ),
    hoverColor: 'hover:text-[#BB44FF]',
  },
  { name: 'Netlify', icon: <SiNetlify />, hoverColor: 'hover:text-[#00AD9F]' },
];

const exploringStack = [
  {
    name: 'TypeScript',
    icon: <SiTypescript />,
    hoverColor: 'hover:text-[#3178C6]',
  },
  {
    name: 'Next.js',
    icon: <SiNextdotjs />,
    hoverColor: 'hover:text-[#ffffff]',
  },
  { name: 'Astro', icon: <SiAstro />, hoverColor: 'hover:text-[#FF5D01]' },
];

export default function About() {
  return (
    <section
      id="about"
      className="bg-zinc-900 min-h-screen w-full relative overflow-hidden flex items-center justify-center py-12"
    >
      {/* Background Blobs */}
      <div className="absolute top-0 -left-20 w-72 h-72 bg-purple-500/10  rounded-full blur-[120px] pointer-events-none"></div>
      <div className="absolute bottom-0 right-0 w-96 h-96 bg-emerald-500/20 rounded-full blur-[150px] pointer-events-none"></div>
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-64 h-64 bg-cyan-500/10 rounded-full blur-[100px] pointer-events-none"></div>
      <div className="relative z-10 grid grid-cols-1 w-full md:grid-cols-3 max-w-7xl py-12 mx-auto px-6 gap-6 text-white">
        {/* About Me */}
        <div className="border bg-white/2 backdrop-blur-md border-white/10 shadow-2xl rounded-xl p-5 flex items-start flex-col gap-4 md:col-span-3">
          <h4 className="border border-emerald-400/30 bg-emerald-400/10 text-emerald-300 rounded-full py-1.5 px-4 uppercase text-xs font-bold tracking-wide">
            About Me
          </h4>
          <h3 className="text-3xl md:text-5xl font-bold leading-snug font-space">
            Passionate about crafting{' '}
            <span className="bg-hero-gradient bg-clip-text text-transparent block">
              digital experiences.
            </span>
          </h3>
          <p className="text-zinc-400 text-sm md:text-xl max-w-lg md:max-w-xl leading-relaxed">
            I'm a creative developer who loves turning ideas into polished,
            responsive web experiences. With a focus on clean code and
            thoughtful design, I build interfaces that feel intuitive and look
            stunning.
          </p>
        </div>
        {/* Tech Stack */}
        <div className="border bg-white/2 backdrop-blur-md border-white/10 shadow-2xl rounded-xl p-6 flex items-start flex-col gap-4 md:col-span-2">
          <h4 className="text-zinc-500 text-xs uppercase tracking-widest mb-10 font-bold">
            Tech Stack
          </h4>
          <div className="grid grid-cols-3 gap-y-10 w-full">
            {techStack.map((tech, index) => (
              <div
                key={index}
                className={`flex flex-col items-center gap-3 transition-all duration-300 text-zinc-500 cursor-default ${tech.hoverColor} hover:scale-110`}
              >
                <div className="text-3xl md:text-5xl">{tech.icon}</div>
                <span className="text-[10px] font-medium tracking-tighter opacity-70">
                  {tech.name}
                </span>
              </div>
            ))}
          </div>
        </div>
        {/* Learning */}
        <div className="border bg-white/2 backdrop-blur-md border-white/10 shadow-2xl rounded-xl p-6 flex items-start flex-col gap-4">
          <h4 className="text-zinc-500 text-xs uppercase tracking-widest mb-10 font-bold">
            Currently Exploring
          </h4>
          <div className="grid grid-cols-3 md:grid-cols-1 items-center gap-y-10 w-full">
            {exploringStack.map((tech, index) => (
              <div
                key={index}
                className={`flex flex-col items-center gap-3 transition-all duration-300 text-zinc-500 cursor-default ${tech.hoverColor} hover:scale-110`}
              >
                <div className="text-3xl md:text-5xl">{tech.icon}</div>
                <span className="text-[10px] font-medium tracking-tighter opacity-70">
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
