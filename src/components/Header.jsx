import { motion } from 'framer-motion';
import CodeSnippet from './CodeSnippet';

export default function Header() {
  // Common animation settings for the text elements
  const fadeInUp = {
    initial: { opacity: 0, y: 20 },
    animate: { opacity: 1, y: 0 },
    transition: { duration: 0.6, ease: 'easeOut' },
  };

  return (
    <header className="relative bg-hero-pattern bg-cover bg-center bg-no-repeat min-h-screen">
      <div className="absolute inset-0 bg-black/80"></div>

      <div className="relative z-10 flex flex-col md:flex-row-reverse items-center justify-center min-h-screen max-w-7xl mx-auto w-full px-6 gap-12 md:gap-24">
        {/* 4. Code Snippet - Appears last with a longer delay */}
        <motion.div
          initial={{ opacity: 0, scale: 0.9 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.8, delay: 0.6 }}
          className="w-full flex justify-center md:w-auto"
        >
          <CodeSnippet />
        </motion.div>

        <div className="w-full md:flex-1 text-left">
          {/* 1. The Heading */}
          <motion.h1
            {...fadeInUp}
            className="font-space text-5xl text-white md:text-7xl font-bold leading-tight mb-6"
          >
            Building the <br />
            <span className="bg-hero-gradient bg-clip-text text-transparent">
              Digital Future
            </span>
          </motion.h1>

          {/* 2. The Subheading - 0.2s delay */}
          <motion.p
            {...fadeInUp}
            transition={{ ...fadeInUp.transition, delay: 0.2 }}
            className="text-zinc-400 text-lg md:text-xl max-w-lg leading-relaxed mb-10"
          >
            I craft responsive, high-performance web experiences using modern
            technologies and creative design principles.
          </motion.p>

          {/* 3. The Buttons - 0.4s delay */}
          <motion.div
            {...fadeInUp}
            transition={{ ...fadeInUp.transition, delay: 0.4 }}
            className="flex flex-wrap items-center gap-4"
          >
            <a
              href="#work"
              className="text-black bg-white px-8 py-4 font-bold rounded-lg hover:bg-cyan-400 transition-all duration-300"
            >
              View Work
            </a>
            <a
              href="#contact"
              className="text-white bg-white/10 px-8 py-4 font-bold rounded-lg hover:bg-white/20 transition-all duration-300"
            >
              Contact Me
            </a>
          </motion.div>
        </div>
      </div>
    </header>
  );
}
