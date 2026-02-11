import { Icons } from './Icons';

const techStack = [
  {
    name: 'HTML',
    src: Icons.Html,
    hoverColor: 'group-hover:drop-shadow-[0_0_15px_rgba(227,79,38,0.5)]',
  },
  {
    name: 'CSS',
    src: Icons.Css,
    hoverColor: 'group-hover:drop-shadow-[0_0_15px_rgba(21,114,182,0.5)]',
  },
  {
    name: 'JS',
    src: Icons.Js,
    hoverColor: 'group-hover:drop-shadow-[0_0_15px_rgba(247,223,30,0.5)]',
  },
  {
    name: 'React',
    src: Icons.React,
    hoverColor: 'group-hover:drop-shadow-[0_0_15px_rgba(97,218,251,0.5)]',
  },
  {
    name: 'Tailwind',
    src: Icons.Tailwind,
    hoverColor: 'group-hover:drop-shadow-[0_0_15px_rgba(6,182,212,0.5)]',
  },
  {
    name: 'Figma',
    src: Icons.Figma,
    hoverColor: 'group-hover:drop-shadow-[0_0_15px_rgba(242,78,30,0.5)]',
  },
  {
    name: 'Git',
    src: Icons.Github,
    hoverColor: 'group-hover:drop-shadow-[0_0_15px_rgba(255,255,255,0.5)]',
  },
  {
    name: 'Motion',
    src: Icons.Motion,
    hoverColor: 'group-hover:drop-shadow-[0_0_15px_rgba(187,68,255,0.5)]',
  },
  {
    name: 'Netlify',
    src: Icons.Netlify,
    hoverColor: 'group-hover:drop-shadow-[0_0_15px_rgba(0,173,159,0.5)]',
  },
];

const exploringStack = [
  {
    name: 'TypeScript',
    src: Icons.Typescript,
    hoverColor: 'group-hover:drop-shadow-[0_0_15px_rgba(49,120,198,0.5)]',
  },
  {
    name: 'Next.js',
    src: Icons.Next,
    hoverColor: 'group-hover:drop-shadow-[0_0_15px_rgba(255,255,255,0.5)]',
  },
  {
    name: 'Astro',
    src: Icons.Astro,
    hoverColor: 'group-hover:drop-shadow-[0_0_15px_rgba(255,93,1,0.5)]',
  },
];

export default function About() {
  return (
    <section
      id="about"
      className="bg-zinc-950 min-h-screen w-full relative overflow-hidden flex items-center justify-center py-12"
    >
      <div className="absolute -top-10 -right-20 w-96 h-96 bg-purple-500/30 rounded-full blur-[180px] pointer-events-none"></div>
      <div className="absolute bottom-0 left-0 w-96 h-96 bg-emerald-500/30 rounded-full blur-[150px] pointer-events-none"></div>
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-64 h-64 bg-cyan-500/30 rounded-full blur-[100px] pointer-events-none"></div>

      <div className="relative z-10 grid grid-cols-1 w-full md:grid-cols-3 max-w-7xl py-12 mx-auto px-6 gap-6 text-white">
        <div className="border bg-white/2 backdrop-blur-md border-white/10 shadow-2xl rounded-xl p-5 flex items-start flex-col gap-4 md:col-span-3">
          <p className="border border-emerald-400/30 bg-emerald-400/10 text-emerald-300 rounded-full py-1.5 px-4 uppercase text-xs font-bold tracking-wide">
            About Me
          </p>
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

        <div className="border bg-white/2 backdrop-blur-md border-white/10 shadow-2xl rounded-xl p-6 flex items-start flex-col gap-4 md:col-span-2">
          <h4 className="text-zinc-500 text-xs uppercase tracking-widest mb-10 font-bold">
            Tech Stack
          </h4>
          <div className="grid grid-cols-3 gap-y-10 w-full">
            {techStack.map((tech, index) => (
              <div
                key={index}
                className="flex flex-col items-center gap-3 group"
              >
                <img
                  src={tech.src}
                  alt={tech.name}
                  className={`w-12 h-12 md:w-16 md:h-16 object-contain filter grayscale opacity-80 group-hover:grayscale-0 group-hover:opacity-100 transition-all duration-300 ${tech.hoverColor}`}
                />
                <span className="text-xs font-medium text-zinc-400 group-hover:text-white transition-colors">
                  {tech.name}
                </span>
              </div>
            ))}
          </div>
        </div>

        <div className="border bg-white/2 backdrop-blur-md border-white/10 shadow-2xl rounded-xl p-6 flex items-start flex-col gap-4">
          <h4 className="text-zinc-300 text-xs uppercase tracking-widest mb-10 font-bold">
            Currently Exploring
          </h4>
          <div className="grid grid-cols-3 md:grid-cols-1 items-center gap-y-10 w-full">
            {exploringStack.map((tech, index) => (
              <div
                key={index}
                className="flex flex-col items-center gap-3 group"
              >
                <img
                  src={tech.src}
                  alt={tech.name}
                  className={`w-12 h-12 md:w-16 md:h-16 object-contain filter grayscale opacity-80 group-hover:grayscale-0 group-hover:opacity-100 transition-all duration-300 ${tech.hoverColor}`}
                />
                <span className="text-xs font-medium text-zinc-400 group-hover:text-white transition-colors">
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
