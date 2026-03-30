import { motion } from 'framer-motion'

export function Education() {
    return (
        <section className="py-12 px-4">
            <div className="max-w-4xl mx-auto">
                <h2 className="text-3xl font-bold text-white mb-8 px-2">Education</h2>
                <div className="grid grid-cols-1 gap-6">
                    <motion.div
                        initial={{ opacity: 0, scale: 0.9, y: 30, rotate: -1 }}
                        whileInView={{ opacity: 1, scale: 1, y: 0, rotate: 0 }}
                        viewport={{ once: true, margin: "-50px" }}
                        transition={{ duration: 0.6, type: "spring", bounce: 0.4 }}
                        whileHover={{ y: -5, scale: 1.02 }}
                        className="group p-8 bg-white/5 backdrop-blur-2xl border border-white/10 rounded-[2rem] shadow-2xl hover:shadow-yellow-500/10 hover:bg-white/10 hover:border-white/20 transition-all duration-500 relative overflow-hidden"
                    >
                        <div className="absolute top-0 right-0 w-32 h-32 bg-yellow-500/10 blur-[50px] rounded-full pointer-events-none group-hover:bg-yellow-500/20 transition-colors duration-500" />
                        <div className="relative z-10 flex flex-col md:flex-row md:items-start justify-between gap-4">
                            <div>
                                <h3 className="text-xl font-bold text-white mb-2 tracking-tight">B.E. in Information Science & Engineering</h3>
                                <p className="text-zinc-300 font-medium mb-4">PES College of Engineering, Mandya (VTU)</p>
                                <p className="text-sm text-zinc-500 leading-relaxed italic border-l-2 border-zinc-800 pl-3">
                                    GPA: 8.5/10. NAAC 'A' Grade Institution. Strong foundations in DSA, DBMS, OS, and Computer Networks. NCC Cadet participant.
                                </p>
                            </div>
                            <span className="shrink-0 px-3 py-1 bg-yellow-500/10 text-yellow-500/80 text-xs font-semibold rounded-full border border-yellow-500/20">Class of 2027</span>
                        </div>
                    </motion.div>
                </div>
            </div>
        </section>
    )
}
