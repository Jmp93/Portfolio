import { motion } from 'framer-motion';
import CodeSnippet from './CodeSnippet';
import { SiGithub, SiLinkedin } from 'react-icons/si';

export default function Header() {
  return (
    <header id="home" className="relative bg-zinc-950 min-h-screen">
      <div
        className="relative z-10 flex flex-col lg:flex-row-reverse items-center 
                justify-start lg:justify-center 
                min-h-screen max-w-7xl mx-auto w-full 
                px-6 pt-50 pb-20 lg:pt-0 lg:pb-0 gap-12 lg:gap-24"
      >
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1.2, delay: 0.4 }}
          className="w-full flex justify-center [@media(min-width:1085px)]:w-auto accelerate"
        >
          <div className="w-full max-w-md lg:max-w-none lg:w-112.5 lg:shrink-0 mx-auto lg:mx-0">
            <CodeSnippet />
          </div>
        </motion.div>

        <div className="w-full [@media(min-width:1085px)]:flex-1 flex flex-col items-center [@media(min-width:1085px)]:items-start text-center [@media(min-width:1085px)]:text-left text-white">
          <h1 className="font-space text-5xl md:text-7xl font-bold leading-tight mb-6">
            <motion.span
              initial={{ opacity: 0, y: 15 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8 }}
              className="block"
            >
              Building the
            </motion.span>

            <motion.span
              initial={{
                maskImage:
                  'linear-gradient(to right, rgba(0,0,0,1) 0%, rgba(0,0,0,0) 0%)',
                WebkitMaskImage:
                  'linear-gradient(to right, rgba(0,0,0,1) 0%, rgba(0,0,0,0) 0%)',
                opacity: 0,
              }}
              animate={{
                maskImage:
                  'linear-gradient(to right, rgba(0,0,0,1) 100%, rgba(0,0,0,0) 100%)',
                WebkitMaskImage:
                  'linear-gradient(to right, rgba(0,0,0,1) 100%, rgba(0,0,0,0) 100%)',
                opacity: 1,
              }}
              transition={{
                opacity: { duration: 0.5, delay: 0.5 },
                maskImage: { duration: 1.5, delay: 0.7, ease: 'easeInOut' },
                WebkitMaskImage: {
                  duration: 1.5,
                  delay: 0.7,
                  ease: 'easeInOut',
                },
              }}
              className="bg-hero-gradient bg-clip-text text-transparent block"
            >
              Digital Future
            </motion.span>
          </h1>

          <motion.p
            initial={{ opacity: 0, y: 15 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 1.2, delay: 0.1 }}
            className="text-zinc-400 text-lg md:text-xl max-w-lg leading-relaxed mb-10 mx-auto [@media(min-width:1085px)]:mx-0"
          >
            I craft responsive, high-performance web experiences using modern
            technologies and creative design principles.
          </motion.p>

          <div className="flex flex-col gap-8 sm:flex-row items-center justify-center lg:justify-start w-fit max-w-sm mx-auto lg:mx-0 mt-10">
            <motion.a
              href="#portfolio"
              className="group w-48 text-center flex items-center justify-center gap-2  text-black bg-white px-8 py-4 font-bold rounded-lg cursor-pointer hover:bg-cyan-400 "
              whileHover={{
                scale: 1.1,
                x: 5,
              }}
              transition={{ type: 'spring', stiffness: 200 }}
            >
              <span>View Work</span>
              <span className="inline-block">→</span>
            </motion.a>
            <div className="flex gap-4">
              <motion.a
                href="https://github.com/Jmp93"
                target="_blank"
                rel="noopener noreferrer"
                className="p-4 bg-zinc-900 text-white rounded-lg border border-zinc-800 hover:border-cyan-400 hover:text-cyan-400"
                whileHover={{ scale: 1.1, y: -2 }}
                whileTap={{ scale: 0.9 }}
              >
                <SiGithub size={24} />
              </motion.a>

              <motion.a
                href="https://linkedin.com/in/james-pointer-508143161/"
                target="_blank"
                rel="noopener noreferrer"
                className="p-4 bg-zinc-900 text-white rounded-lg border border-zinc-800 hover:border-cyan-400 hover:text-cyan-400"
                whileHover={{ scale: 1.1, y: -2 }}
                whileTap={{ scale: 0.9 }}
              >
                <SiLinkedin size={24} />
              </motion.a>
            </div>
          </div>
        </div>
      </div>
    </header>
  );
}
