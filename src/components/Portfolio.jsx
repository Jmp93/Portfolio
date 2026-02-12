import { projects } from '../data/projects';

export default function Portfolio() {
  return (
    <section
      id="portfolio"
      className="bg-zinc-950 border-t-4 border-solid border-cyan-400/70 w-full relative overflow-hidden flex items-center justify-center py-12"
    >
      <div className="relative z-10 grid grid-cols-1 w-full md:grid-cols-3 max-w-7xl py-12 mx-auto px-6 gap-8 text-white">
        <div className="md:col-span-3 border bg-white/2 backdrop-blur-md border-white/10 shadow-2xl rounded-2xl p-8 md:p-12 flex items-start flex-col gap-6 mb-4">
          <p className="border border-emerald-400/30 bg-emerald-400/10 text-emerald-300 rounded-full py-1.5 px-4 uppercase text-xs font-bold tracking-widest">
            Portfolio
          </p>
          <h2 className="text-4xl md:text-6xl font-bold leading-tight font-space">
            Selected
            <span className="bg-hero-gradient bg-clip-text inline text-transparent">
              {' '}
              works.
            </span>
          </h2>
          <p className="text-zinc-400 text-lg md:text-xl max-w-2xl leading-relaxed">
            A curated collection of projects that showcase my approach to design
            and development — clean interfaces, smooth interactions, and
            thoughtful details.
          </p>
        </div>

        {projects.map(({ id, title, description, image, tags, link }) => (
          <div
            key={id}
            className="group border bg-white/2 backdrop-blur-md border-white/10 shadow-xl rounded-2xl p-4 flex flex-col gap-5 transition-all duration-300 hover:-translate-y-2 hover:border-white/20 hover:bg-white/5"
          >
            <div className="relative overflow-hidden rounded-xl aspect-video">
              <img
                src={image}
                alt={title}
                className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105"
              />
              <div className="absolute top-3 right-3 flex gap-2">
                <a
                  href={link}
                  target="_blank"
                  rel="noreferrer"
                  className="p-2 rounded-full bg-zinc-900/80 border border-white/10 text-zinc-300 hover:text-cyan-400 hover:border-cyan-400/50 transition-all backdrop-blur-sm"
                >
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    width="18"
                    height="18"
                    viewBox="0 0 24 24"
                    fill="none"
                    stroke="currentColor"
                    strokeWidth="2"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                  >
                    <path d="M15 22v-4a4.8 4.8 0 0 0-1-3.5c3 0 6-2 6-5.5.08-1.25-.27-2.48-1-3.5.28-1.15.28-2.35 0-3.5 0 0-1 0-3 1.5-2.64-.5-5.36-.5-8 0C6 2 5 2 5 2c-.28 1.15-.28 2.35 0 3.5-.73 1.02-1.08 2.25-1 3.5 0 3.5 3 5.5 6 5.5-.39.49-.68 1.05-.85 1.65-.17.6-.22 1.23-.15 1.85v4" />
                    <path d="M9 18c-4.51 2-5-2-7-2" />
                  </svg>
                </a>
                <a
                  href={link}
                  target="_blank"
                  rel="noreferrer"
                  className="p-2 rounded-full bg-zinc-900/80 border border-white/10 text-zinc-300 hover:text-purple-500 hover:border-purple-400/50 transition-all"
                >
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    width="18"
                    height="18"
                    viewBox="0 0 24 24"
                    fill="none"
                    stroke="currentColor"
                    strokeWidth="2"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                  >
                    <path d="M18 13v6a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V8a2 2 0 0 1 2-2h6" />
                    <polyline points="15 3 21 3 21 9" />
                    <line x1="10" x2="21" y1="14" y2="3" />
                  </svg>
                </a>
              </div>
            </div>

            <div className="flex flex-col gap-3 px-2 pb-2">
              <h3 className="text-xl font-bold text-zinc-100 group-hover:text-cyan-400 transition-colors">
                {title}
              </h3>
              <p className="text-zinc-400 text-sm leading-relaxed line-clamp-2">
                {description}
              </p>

              <div className="flex flex-wrap gap-2 mt-2">
                {tags.map((tag, index) => (
                  <span
                    key={index}
                    className="text-[10px] font-bold uppercase tracking-wider bg-white/5 border border-white/10 px-2.5 py-1 rounded-md text-zinc-300"
                  >
                    {tag}
                  </span>
                ))}
              </div>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}
