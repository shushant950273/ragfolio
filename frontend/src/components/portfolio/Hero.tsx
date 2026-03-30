import { motion } from 'framer-motion'

export function Hero() {
  return (
    <section className="min-h-[90vh] flex flex-col items-center justify-center px-4 overflow-hidden relative">
      <motion.div
        animate={{
          scale: [1, 1.1, 1],
          opacity: [0.3, 0.5, 0.3],
        }}
        transition={{ duration: 8, repeat: Infinity, ease: "easeInOut" }}
        className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[800px] h-[400px] bg-gradient-to-r from-blue-600/20 via-purple-600/20 to-pink-600/20 blur-[130px] rounded-full pointer-events-none"
      />

      <motion.div
        initial={{ opacity: 0, scale: 0.9, y: 50 }}
        animate={{ opacity: 1, scale: 1, y: 0 }}
        transition={{ type: "spring", stiffness: 80, damping: 20, delay: 0.1 }}
        className="max-w-5xl mx-auto text-center relative z-10 w-full"
      >
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.2, duration: 0.8 }}
          className="mb-6 inline-flex items-center gap-2 px-4 py-2 rounded-full border border-white/10 bg-white/5 backdrop-blur-md"
        >
          <span className="w-2 h-2 rounded-full bg-emerald-400 animate-pulse" />
          <span className="text-sm font-medium text-zinc-300">Available for Summer Internships</span>
        </motion.div>

        <h1 className="text-6xl sm:text-8xl md:text-9xl font-extrabold text-transparent bg-clip-text bg-gradient-to-br from-white via-zinc-200 to-zinc-600 mb-8 tracking-tighter leading-tight drop-shadow-sm">
          Hi, I'm <br className="hidden sm:block" />
          <span className="bg-gradient-to-r from-blue-400 via-indigo-400 to-purple-500 bg-clip-text text-transparent inline-block pb-2">Shushant Sharma</span>
        </h1>

        <motion.p
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.4, duration: 1 }}
          className="text-xl sm:text-2xl text-zinc-400/90 max-w-3xl mx-auto leading-relaxed font-light tracking-wide mb-12"
        >
          An Information Science & Engineering student weaving logic with creativity. Specialized in full-stack web architectures, Agentic AI, and DevOps pipelines.
        </motion.p>
      </motion.div>
    </section>
  )
}
