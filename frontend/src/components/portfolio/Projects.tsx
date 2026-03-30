import { motion } from 'framer-motion'

export function Projects() {
  return (
    <section id="projects" className="py-12 px-4">
      <div className="max-w-4xl mx-auto">
        <h2 className="text-3xl font-bold text-white mb-8 px-2">Projects</h2>
        <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
          <motion.div
            initial={{ opacity: 0, scale: 0.9, y: 50 }}
            whileInView={{ opacity: 1, scale: 1, y: 0 }}
            viewport={{ once: true, margin: "-50px" }}
            transition={{ type: "spring", stiffness: 60, damping: 20 }}
            whileHover={{ y: -5, scale: 1.02 }}
            className="group p-8 bg-white/5 backdrop-blur-2xl border border-white/10 rounded-[2rem] shadow-2xl hover:shadow-blue-500/10 hover:bg-white/10 hover:border-zinc-500/30 transition-all duration-500 cursor-default flex flex-col justify-between relative overflow-hidden"
          >
            <div className="absolute inset-0 bg-gradient-to-br from-blue-500/0 to-purple-500/0 group-hover:from-blue-500/10 group-hover:to-purple-500/10 transition-all duration-700 opacity-0 group-hover:opacity-100" />
            <div className="relative z-10">
              <div className="w-12 h-12 rounded-2xl bg-gradient-to-br from-blue-500/20 to-purple-500/20 flex items-center justify-center mb-6 border border-white/5 shadow-inner group-hover:scale-110 transition-transform duration-500">
                <span className="text-xl">🤖</span>
              </div>
              <h3 className="font-bold text-white text-xl tracking-tight">Career-Saarthi AI</h3>
              <p className="text-sm text-zinc-400 mt-3 leading-relaxed">Engineered RAG-based pipeline for resume analysis to deliver personalized roadmaps. Integrated real-time web search for internships.</p>
            </div>
            <div className="mt-6 flex gap-2 text-xs font-mono text-zinc-500 uppercase">
              <span>Python</span> • <span>LangChain</span> • <span>Django</span>
            </div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, scale: 0.9, y: 50 }}
            whileInView={{ opacity: 1, scale: 1, y: 0 }}
            viewport={{ once: true, margin: "-50px" }}
            transition={{ type: "spring", stiffness: 60, damping: 20, delay: 0.1 }}
            whileHover={{ y: -5, scale: 1.02 }}
            className="group p-8 bg-white/5 backdrop-blur-2xl border border-white/10 rounded-[2rem] shadow-2xl hover:shadow-emerald-500/10 hover:bg-white/10 hover:border-zinc-500/30 transition-all duration-500 cursor-default flex flex-col justify-between relative overflow-hidden"
          >
            <div className="absolute inset-0 bg-gradient-to-br from-emerald-500/0 to-teal-500/0 group-hover:from-emerald-500/10 group-hover:to-teal-500/10 transition-all duration-700 opacity-0 group-hover:opacity-100" />
            <div className="relative z-10">
              <div className="w-12 h-12 rounded-2xl bg-gradient-to-br from-emerald-500/20 to-teal-500/20 flex items-center justify-center mb-6 border border-white/5 shadow-inner group-hover:scale-110 transition-transform duration-500">
                <span className="text-xl">📊</span>
              </div>
              <h3 className="font-bold text-white text-xl tracking-tight">Hisakitab & Kelsasure</h3>
              <p className="text-sm text-zinc-400 mt-3 leading-relaxed">Built a secure multi-user digital ledger application and a workforce hiring platform featuring skill-based candidate matching.</p>
            </div>
            <div className="mt-6 flex gap-2 text-xs font-mono text-zinc-500 uppercase">
              <span>Django REST</span> • <span>React</span> • <span>PostgreSQL</span>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  )
}
