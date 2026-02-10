import { motion } from 'framer-motion';
import CodeSnippet from './CodeSnippet';

export default function Header() {
  return (
    <header className="relative bg-hero-pattern bg-cover bg-center bg-no-repeat min-h-screen">
      <div className="absolute inset-0 bg-black/80"></div>

      <div className="relative z-10 flex flex-col [@media(min-width:1085px)]:flex-row-reverse items-center justify-center min-h-screen max-w-7xl mx-auto w-full px-6 gap-12 [@media(min-width:1085px)]:gap-24">
        <motion.div
          initial={{ opacity: 0, scale: 0.9 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.5, delay: 0.4 }}
          className="w-full flex justify-center [@media(min-width:1085px)]:w-auto accelerate"
        >
          <CodeSnippet />
        </motion.div>

        <div className="w-full [@media(min-width:1085px)]:flex-1 flex flex-col items-center [@media(min-width:1085px)]:items-start text-center [@media(min-width:1085px)]:text-left text-white">
          <motion.h1
            initial={{ opacity: 0, y: 15 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.4 }}
            className="font-space text-5xl md:text-7xl font-bold leading-tight mb-6"
          >
            Building the <br />
            <span className="bg-hero-gradient bg-clip-text text-transparent">
              Digital Future
            </span>
          </motion.h1>

          <motion.p
            initial={{ opacity: 0, y: 15 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.4, delay: 0.1 }}
            className="text-zinc-400 text-lg md:text-xl max-w-lg leading-relaxed mb-10 mx-auto [@media(min-width:1085px)]:mx-0"
          >
            I craft responsive, high-performance web experiences using modern
            technologies and creative design principles.
          </motion.p>

          <div className="flex flex-wrap items-center justify-center [@media(min-width:1085px)]:justify-start gap-4 w-full">
            <motion.a
              href="#work"
              initial={{ opacity: 0, y: 15 }}
              animate={{ opacity: 1, y: 0 }}
              whileHover={{ y: -8, scale: 1.05 }}
              whileTap={{ scale: 0.98 }}
              transition={{ type: 'spring', stiffness: 400, damping: 25 }}
              className="group flex items-center gap-2 text-black bg-white px-8 py-4 font-bold rounded-lg cursor-pointer hover:bg-cyan-400 transition-colors duration-200 animate-snappy-pulse accelerate"
            >
              <span>View Work</span>
              <motion.span
                className="inline-block"
                variants={{
                  initial: { x: 0 },
                  hover: { x: 6 },
                }}
              >
                →
              </motion.span>
            </motion.a>

            <motion.a
              href="#contact"
              initial={{ opacity: 0, y: 15 }}
              animate={{ opacity: 1, y: 0 }}
              whileHover={{ y: -8, scale: 1.05 }}
              whileTap={{ scale: 0.98 }}
              transition={{
                type: 'spring',
                stiffness: 400,
                damping: 25,
                delay: 0.1,
              }}
              className="bg-white/10 px-8 py-4 font-bold rounded-lg border border-white/10 cursor-pointer hover:bg-white/20 transition-colors duration-200 accelerate"
            >
              Contact Me
            </motion.a>
          </div>
        </div>
      </div>
    </header>
  );
}
