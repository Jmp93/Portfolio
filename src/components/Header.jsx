import CodeSnippet from './CodeSnippet';

export default function Header() {
  return (
    <header className="relative bg-hero-pattern bg-cover bg-center bg-no-repeat min-h-screen">
      {/* Overlay */}
      <div className="absolute inset-0 bg-black/80"></div>
      {/* container */}
      <div className="relative z-10 flex flex-col md:flex-row-reverse gap-15 max-w-7xl mx-auto w-full px-6 md:px-0 md:justify-center md:gap-24 pt-40 items-center justify-start min-h-screen">
        {/* Code Snippet */}
        <CodeSnippet />
        {/* div bottom/left */}
        <div className="md:max-w-1/2 w-full text-left">
          <h1 className="font-space text-5xl text-white md:text-7xl font-bold leading-tight mb-6">
            Building the <br />
            <span className="bg-hero-gradient bg-clip-text text-transparent">
              Digital Future
            </span>
          </h1>
          <p className="text-subheading text-lg md:text-xl max-w-lg leading-relaxed">
            I craft responsive, high-performance web experiences using modern
            technologies and creative design principles
          </p>
          <a className="text-black bg-white px-8 py-4 font-bold rounded-lg inline-block hover:bg-cyan-400 transition-all mr-4 mt-6 duration-300">
            View Work
          </a>
          <a className="text-white bg-white/10 px-8 py-4 font-bold rounded-lg inline-block hover:bg-white/20 transition-all mt-6 duration-300">
            Contact Me
          </a>
        </div>
      </div>
    </header>
  );
}
