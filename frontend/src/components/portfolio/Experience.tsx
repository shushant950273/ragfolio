import { motion } from 'framer-motion'

export function Experience() {
    return (
        <section id="experience" className="py-12 px-4">
            <div className="max-w-4xl mx-auto">
                <h2 className="text-3xl font-bold text-white mb-8 px-2">Experience</h2>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6 pt-4">
                    <motion.div
                        initial={{ opacity: 0, x: -50, rotate: -2 }}
                        whileInView={{ opacity: 1, x: 0, rotate: 0 }}
                        viewport={{ once: true, margin: "-50px" }}
                        transition={{ duration: 0.7, type: "spring", bounce: 0.4 }}
                        whileHover={{ y: -5 }}
                        className="group p-8 bg-white/5 backdrop-blur-2xl border border-white/10 rounded-[2rem] shadow-2xl hover:bg-white/10 hover:border-white/20 transition-all duration-500 flex flex-col justify-between relative overflow-hidden"
                    >
                        <div className="absolute top-0 right-0 w-32 h-32 bg-indigo-500/10 blur-[50px] rounded-full pointer-events-none group-hover:bg-indigo-500/20 transition-colors duration-500" />
                        <div className="relative z-10">
                            <span className="px-3 py-1 bg-blue-500/20 text-blue-400 text-xs font-semibold rounded-full border border-blue-500/30 mb-4 inline-block">Aug 2025 - Sep 2025</span>
                            <h3 className="text-xl font-bold text-white mb-1 tracking-tight">Azure DevOps X-Pro</h3>
                            <p className="text-zinc-300 font-medium mb-4 text-sm">Employability.life</p>
                            <p className="text-zinc-500 text-sm leading-relaxed">
                                Completed intensive program on Azure DevOps, CI/CD pipeline design, and cloud deployment strategies. Implemented automated testing workflows and version control practices.
                            </p>
                        </div>
                    </motion.div>

                    <motion.div
                        initial={{ opacity: 0, x: 50, rotate: 2 }}
                        whileInView={{ opacity: 1, x: 0, rotate: 0 }}
                        viewport={{ once: true, margin: "-50px" }}
                        transition={{ duration: 0.7, delay: 0.2, type: "spring", bounce: 0.4 }}
                        whileHover={{ y: -5 }}
                        className="group p-8 bg-white/5 backdrop-blur-2xl border border-white/10 rounded-[2rem] shadow-2xl hover:bg-white/10 hover:border-white/20 transition-all duration-500 flex flex-col justify-between relative overflow-hidden"
                    >
                        <div className="absolute bottom-0 right-0 w-32 h-32 bg-pink-500/10 blur-[50px] rounded-full pointer-events-none group-hover:bg-pink-500/20 transition-colors duration-500" />
                        <div className="relative z-10">
                            <span className="px-3 py-1 bg-blue-500/20 text-blue-400 text-xs font-semibold rounded-full border border-blue-500/30 mb-4 inline-block">Jul 2025 - Aug 2025</span>
                            <h3 className="text-xl font-bold text-white mb-1 tracking-tight">Network Admin Intern</h3>
                            <p className="text-zinc-300 font-medium mb-4 text-sm">NITTTR Chandigarh</p>
                            <p className="text-zinc-500 text-sm leading-relaxed">
                                Administered Apache web servers and Unix systems. Configured file permissions and network security protocols, gaining practical exposure to virtualization and enterprise infrastructure.
                            </p>
                        </div>
                    </motion.div>
                </div>
            </div>
        </section>
    )
}
