import { motion } from 'framer-motion'

export function About() {
  return (
    <section className="py-12 px-4">
      <div className="max-w-4xl mx-auto">
        <motion.div
          initial={{ opacity: 0, scale: 0.9, y: 30, rotateX: 10 }}
          whileInView={{ opacity: 1, scale: 1, y: 0, rotateX: 0 }}
          viewport={{ once: true, margin: "-50px" }}
          transition={{ duration: 0.8, type: "spring", bounce: 0.4 }}
          className="group p-8 sm:p-12 bg-white/5 backdrop-blur-2xl border border-white/10 rounded-[2.5rem] shadow-2xl hover:shadow-cyan-500/10 hover:bg-white/10 hover:border-white/20 transition-all duration-500 relative overflow-hidden"
        >
          <div className="absolute top-0 right-0 w-64 h-64 bg-cyan-500/10 blur-[80px] rounded-full pointer-events-none group-hover:bg-cyan-500/20 transition-colors duration-500" />
          <h2 className="text-3xl font-bold text-white mb-6 relative z-10">About</h2>
          <p className="text-lg text-zinc-400 leading-relaxed relative z-10">
            I'm a pre-final year engineering student at PES College of Engineering, passionate about building intelligent systems. With a strong foundation in full-stack development, Python, and Agentic AI, I enjoy tackling complex problems and turning ideas into reality through clean code and modern technologies like React, Django, and LangChain.
          </p>
        </motion.div>
      </div>
    </section>
  )
}
