'use client';
import { motion, AnimatePresence } from 'framer-motion';
import { useState } from 'react';

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false);

  const navLinks = [
    { name: 'About', href: '#about' },
    { name: 'Projects', href: '#projects' },
    { name: 'Contact', href: '#contact' },
  ];

  return (
    <nav className="fixed top-0 left-0 right-0 z-50 bg-black/10 backdrop-blur-md border-b border-white/5">
      <div className="max-w-7xl mx-auto px-6 h-20 flex items-center justify-between">
        {/* Logo with Hover Animation */}
        <motion.h2
          whileHover={{ scale: 1.02 }}
          className="font-space font-bold text-white text-2xl cursor-pointer"
        >
          JMP<span className="text-cyan-400">.</span>DEV
        </motion.h2>

        {/* Desktop Nav - Focused on Cleanliness */}
        <div className="hidden md:flex items-center gap-10">
          {navLinks.map(link => (
            <a
              key={link.name}
              href={link.href}
              className="relative text-sm font-medium text-zinc-300 hover:text-white transition-colors group"
            >
              {link.name}
              {/* Subtle underline hover effect */}
              <span className="absolute -bottom-1 left-0 w-0 h-0.5 bg-cyan-400 transition-all duration-300 group-hover:w-full" />
            </a>
          ))}
        </div>

        {/* Mobile Toggle with Tactile Feedback */}
        <motion.button
          whileTap={{ scale: 0.9 }}
          onClick={() => setIsOpen(!isOpen)}
          className="md:hidden text-white p-2 text-2xl focus:outline-none"
          aria-label="Toggle Menu"
        >
          {isOpen ? '✕' : '☰'}
        </motion.button>
      </div>

      {/* Mobile Nav Menu */}
      <AnimatePresence>
        {isOpen && (
          <motion.div
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: 'auto' }}
            exit={{ opacity: 0, height: 0 }}
            transition={{ duration: 0.3, ease: 'easeInOut' }}
            className="absolute top-20 left-0 right-0 bg-zinc-950/95 backdrop-blur-xl border-b border-white/10 overflow-hidden md:hidden"
          >
            <div className="flex flex-col gap-8 p-8">
              {navLinks.map((link, i) => (
                <motion.a
                  initial={{ opacity: 0, x: -10 }}
                  animate={{ opacity: 1, x: 0 }}
                  transition={{ delay: i * 0.1 }}
                  key={link.name}
                  href={link.href}
                  onClick={() => setIsOpen(false)}
                  className="text-2xl font-semibold text-white hover:text-cyan-400 transition-colors"
                >
                  {link.name}
                </motion.a>
              ))}
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </nav>
  );
}
