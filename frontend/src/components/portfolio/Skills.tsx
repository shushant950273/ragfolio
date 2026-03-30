import { motion } from 'framer-motion'

export function Skills() {
    const categories = [
        { name: 'Languages', skills: ['Python', 'Java', 'C', 'JavaScript', 'TypeScript'] },
        { name: 'Backend', skills: ['Django', 'Node.js', 'FastAPI', 'PostgreSQL', 'MongoDB'] },
        { name: 'Frontend', skills: ['React', 'Tailwind CSS'] },
        { name: 'AI & Tools', skills: ['LangChain', 'RAG', 'Ai/ML', 'Azure DevOps', 'Git', 'Linux'] },
    ]

    return (
        <section className="py-12 px-4">
            <div className="max-w-4xl mx-auto">
                <h2 className="text-3xl font-bold text-white mb-8 px-2">Skills & Technologies</h2>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                    {categories.map((cat, idx) => (
                        <motion.div
                            key={cat.name}
                            initial={{ opacity: 0, scale: 0.95, y: 20 }}
                            whileInView={{ opacity: 1, scale: 1, y: 0 }}
                            viewport={{ once: true }}
                            transition={{ delay: idx * 0.1, type: "spring" }}
                            className="p-8 bg-white/5 backdrop-blur-2xl border border-white/10 rounded-[2rem] shadow-2xl hover:bg-white/10 hover:border-white/20 transition-all duration-500 overflow-hidden relative"
                        >
                            <h3 className="text-lg font-semibold text-white mb-5 flex items-center gap-3">
                                <span className="w-8 h-8 rounded-full bg-white/10 flex items-center justify-center text-xs shadow-inner border border-white/5">✨</span>
                                {cat.name}
                            </h3>
                            <div className="flex flex-wrap gap-2.5 relative z-10">
                                {cat.skills.map((skill) => (
                                    <span
                                        key={skill}
                                        className="px-4 py-2 rounded-[1rem] bg-white/10 border border-white/5 text-zinc-200 text-sm font-medium shadow-sm hover:scale-105 hover:bg-white/20 transition-all cursor-default"
                                    >
                                        {skill}
                                    </span>
                                ))}
                            </div>
                        </motion.div>
                    ))}
                </div>
            </div>
        </section>
    )
}
