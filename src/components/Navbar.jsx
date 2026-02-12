'use client';
import { motion, AnimatePresence, useScroll, useSpring } from 'framer-motion';
import { useState, useEffect, useRef } from 'react';

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);
  const menuRef = useRef(null);

  const { scrollYProgress } = useScroll();
  const scaleX = useSpring(scrollYProgress, {
    stiffness: 100,
    damping: 30,
    restDelta: 0.001,
  });

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  useEffect(() => {
    const handleClickOutside = event => {
      if (menuRef.current && !menuRef.current.contains(event.target)) {
        setIsOpen(false);
      }
    };
    if (isOpen) {
      document.addEventListener('mousedown', handleClickOutside);
    }
    return () => {
      document.removeEventListener('mousedown', handleClickOutside);
    };
  }, [isOpen]);

  const navLinks = [
    { name: 'About', href: '#about' },
    { name: 'Portfolio', href: '#portfolio' },
  ];

  const handleNavClick = (e, href) => {
    if (e) e.preventDefault();

    // Close immediately to prevent animation layout shifts
    setIsOpen(false);

    const targetId = href.replace('#', '');
    const elem = document.getElementById(targetId);

    if (elem) {
      // Small timeout ensures the menu is gone before we measure the position
      setTimeout(() => {
        const offset = 80;
        const elementPosition = elem.getBoundingClientRect().top;
        const offsetPosition = elementPosition + window.pageYOffset - offset;

        window.scrollTo({
          top: offsetPosition,
          behavior: 'smooth',
        });
      }, 50);
    }
  };

  return (
    <>
      <nav
        className={`fixed top-0 left-0 right-0 z-100 transition-all duration-300 ${
          isScrolled
            ? 'bg-black/40 backdrop-blur-md border-b border-white/10 h-16'
            : 'bg-transparent h-24'
        }`}
      >
        <motion.div
          className="absolute top-0 left-0 right-0 h-0.5 bg-cyan-400 origin-left"
          style={{ scaleX }}
        />

        <div className="max-w-7xl mx-auto px-6 h-full flex items-center justify-between">
          <motion.h2
            whileHover={{ scale: 1.05 }}
            className="font-space font-bold text-white text-2xl cursor-pointer"
          >
            <a href="#home" onClick={e => handleNavClick(e, '#home')}>
              JMP<span className="text-cyan-400">.</span>DEV
            </a>
          </motion.h2>

          <div className="hidden md:flex items-center gap-10">
            {navLinks.map(link => (
              <a
                key={link.name}
                href={link.href}
                onClick={e => handleNavClick(e, link.href)}
                className="relative text-sm font-medium text-zinc-300 hover:text-white transition-colors group cursor-pointer"
              >
                {link.name}
                <span className="absolute -bottom-1 left-0 w-0 h-0.5 bg-cyan-400 transition-all duration-300 group-hover:w-full" />
              </a>
            ))}
          </div>

          <div ref={menuRef} className="md:hidden flex items-center">
            <button
              onClick={() => setIsOpen(!isOpen)}
              className="text-white p-2 cursor-pointer"
              aria-label="Toggle navigation menu"
            >
              <div className="w-6 h-5 flex flex-col justify-between items-end">
                <span
                  className={`h-0.5 bg-white transition-all ${isOpen ? 'w-6 rotate-45 translate-y-2' : 'w-6'}`}
                />
                <span
                  className={`h-0.5 bg-white transition-all ${isOpen ? 'opacity-0' : 'w-4'}`}
                />
                <span
                  className={`h-0.5 bg-white transition-all ${isOpen ? 'w-6 -rotate-45 -translate-y-2.5' : 'w-2'}`}
                />
              </div>
            </button>
          </div>
        </div>
      </nav>

      {/* Full-screen Overlay prevents "stuck at bottom" scroll bug */}
      <AnimatePresence>
        {isOpen && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="fixed inset-0 z-90 bg-zinc-950/98 backdrop-blur-2xl flex flex-col items-center justify-center"
          >
            <div className="flex flex-col gap-8 p-8 text-center">
              {navLinks.map((link, i) => (
                <motion.a
                  key={link.name}
                  href={link.href}
                  onClick={e => handleNavClick(e, link.href)}
                  initial={{ opacity: 0, y: 10 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: i * 0.1 }}
                  className="text-3xl font-bold text-white hover:text-cyan-400 transition-colors cursor-pointer"
                >
                  {link.name}
                </motion.a>
              ))}
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
}
