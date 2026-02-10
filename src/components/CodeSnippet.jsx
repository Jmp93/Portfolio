import { motion } from 'framer-motion';

export default function CodeSnippet() {
  return (
    <motion.div
      initial={{ skewY: 4, rotateX: 0 }}
      whileHover={{ skewY: 0, rotateX: 0 }}
      transition={{ type: 'spring', stiffness: 100 }}
      style={{ perspective: 1000 }}
      className="backdrop-blur-md bg-white/10 border md:mt-0 border-white/20 rounded-2xl pl-6 md:pr-30 pr-20 py-6 shadow-2xl"
    >
      <div className="flex gap-1.5 mb-4">
        <div className="w-3 h-3 rounded-full bg-red-500"></div>
        <div className="w-3 h-3 rounded-full bg-yellow-500"></div>
        <div className="w-3 h-3 rounded-full bg-green-500"></div>
      </div>

      <code className="text-sm text-cyan-300 font-mono">
        <span className="text-purple-400">const</span> developer = {'{'}
        <br />
        &nbsp;&nbsp;name: <span className="text-yellow-200">"James"</span>,{' '}
        <br />
        &nbsp;&nbsp;role:{' '}
        <span className="text-yellow-200">"Creative Developer"</span>
        <br />
        &nbsp;&nbsp;skills:
        <span className="text-yellow-200">
          &nbsp;["CSS", "JavaScript", "React"]
        </span>
        <br />
        {'}'}
      </code>
    </motion.div>
  );
}
