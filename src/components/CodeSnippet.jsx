import { motion } from 'framer-motion';

export default function CodeSnippet() {
  return (
    <motion.div
      initial={{ skewY: 0 }}
      whileHover={{ skewY: 4 }}
      transition={{ type: 'tween', duration: 0.4, ease: 'circOut' }}
      className="w-full backdrop-blur-md bg-white/10 border border-white/20 rounded-2xl p-5 lg:px-8 md:py-6 shadow-2xl font-mono"
    >
      <div className="flex gap-1.5 mb-6">
        <div className="w-3 h-3 rounded-full bg-red-500"></div>
        <div className="w-3 h-3 rounded-full bg-yellow-500"></div>
        <div className="w-3 h-3 rounded-full bg-green-500"></div>
      </div>

      <code className="text-sm text-cyan-300 leading-relaxed">
        <span className="text-purple-300">const</span> developer = {'{'}
        <br />
        &nbsp;&nbsp;name: <span className="text-yellow-200">"James"</span>,
        <br />
        &nbsp;&nbsp;role:{' '}
        <span className="text-yellow-200">"Creative Developer"</span>,
        <br />
        &nbsp;&nbsp;skills:{' '}
        <span className="text-yellow-200">["CSS", "JS", "React"]</span>
        <br />
        {'}'}
      </code>
    </motion.div>
  );
}
