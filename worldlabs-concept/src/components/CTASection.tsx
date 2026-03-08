"use client";

import { motion } from "framer-motion";
import { FadeInUp } from "./animations";

export default function CTASection() {
    return (
        <section className="relative py-32 md:py-48 overflow-hidden">
            {/* Subtle separator */}
            <div className="absolute top-0 left-1/4 right-1/4 h-px bg-gradient-to-r from-transparent via-white/10 to-transparent" />

            {/* Background effects */}
            <div className="absolute inset-0">
                <div className="absolute inset-0 bg-[radial-gradient(ellipse_60%_40%_at_50%_50%,rgba(120,119,198,0.08),transparent)]" />
                <motion.div
                    animate={{
                        opacity: [0.3, 0.6, 0.3],
                        scale: [1, 1.1, 1],
                    }}
                    transition={{ duration: 8, repeat: Infinity, ease: "easeInOut" }}
                    className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[500px] h-[500px] rounded-full bg-gradient-to-r from-blue-500/5 to-purple-500/5 blur-3xl"
                />
            </div>

            <div className="relative z-10 max-w-3xl mx-auto px-6 text-center">
                <FadeInUp>
                    <h2 className="text-4xl sm:text-5xl md:text-6xl font-bold tracking-tighter mb-6 leading-[1.05]">
                        Unleash your creativity
                        <br />
                        <span className="bg-gradient-to-r from-white via-white/80 to-white/50 bg-clip-text text-transparent">
                            with Marble
                        </span>
                    </h2>

                    <p className="text-base md:text-lg text-white/40 leading-relaxed mb-10 max-w-xl mx-auto">
                        Generate spatially consistent, high-fidelity, and persistent 3D
                        worlds that you can move through, edit, and inhabit.
                    </p>

                    <motion.a
                        href="https://marble.worldlabs.ai"
                        target="_blank"
                        rel="noopener noreferrer"
                        whileHover={{ scale: 1.03 }}
                        whileTap={{ scale: 0.98 }}
                        className="inline-flex items-center gap-2 rounded-full bg-white px-10 py-4 text-base font-semibold text-black transition-shadow duration-300 hover:shadow-[0_0_40px_rgba(255,255,255,0.2)]"
                    >
                        Create with Marble
                        <svg
                            width="16"
                            height="16"
                            viewBox="0 0 16 16"
                            fill="none"
                        >
                            <path
                                d="M3 13L13 3M13 3H6M13 3V10"
                                stroke="currentColor"
                                strokeWidth="1.5"
                                strokeLinecap="round"
                                strokeLinejoin="round"
                            />
                        </svg>
                    </motion.a>
                </FadeInUp>
            </div>
        </section>
    );
}
