"use client";

import { motion } from "framer-motion";
import { FadeInUp, StaggerContainer } from "./animations";
import { fadeInUp } from "./animations";

const features = [
    {
        title: "Multimodal inputs",
        description:
            "Create detailed 3D worlds from text, images, videos, or 360 panoramas.",
        icon: (
            <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
                <rect x="2" y="2" width="20" height="20" rx="3" />
                <circle cx="8.5" cy="8.5" r="2" />
                <path d="M21 15l-5-5L5 21" />
            </svg>
        ),
        span: "md:col-span-2",
        gradient: "from-blue-500/10 via-transparent to-transparent",
    },
    {
        title: "Create from 3D layouts",
        description:
            "Precisely control the 3D layout of generated worlds.",
        icon: (
            <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
                <path d="M12 2L2 7l10 5 10-5-10-5z" />
                <path d="M2 17l10 5 10-5" />
                <path d="M2 12l10 5 10-5" />
            </svg>
        ),
        span: "",
        gradient: "from-purple-500/10 via-transparent to-transparent",
    },
    {
        title: "Interactive editing",
        description:
            "Tweak specific elements or reshape your entire 3D world, all with complete control.",
        icon: (
            <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
                <path d="M12 20h9" />
                <path d="M16.5 3.5a2.121 2.121 0 0 1 3 3L7 19l-4 1 1-4L16.5 3.5z" />
            </svg>
        ),
        span: "",
        gradient: "from-cyan-500/10 via-transparent to-transparent",
    },
    {
        title: "Expand and combine worlds",
        description:
            "Expand, edit, and combine generated worlds to build larger and more immersive environments.",
        icon: (
            <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
                <path d="M8 3H5a2 2 0 0 0-2 2v3m18 0V5a2 2 0 0 0-2-2h-3m0 18h3a2 2 0 0 0 2-2v-3M3 16v3a2 2 0 0 0 2 2h3" />
                <line x1="12" y1="8" x2="12" y2="16" />
                <line x1="8" y1="12" x2="16" y2="12" />
            </svg>
        ),
        span: "",
        gradient: "from-emerald-500/10 via-transparent to-transparent",
    },
    {
        title: "Versatile outputs",
        description:
            "Download and export in various 2D and 3D formats for seamless integration into your workflows and pipelines.",
        icon: (
            <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
                <path d="M21 15v4a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2v-4" />
                <polyline points="7,10 12,15 17,10" />
                <line x1="12" y1="15" x2="12" y2="3" />
            </svg>
        ),
        span: "md:col-span-2",
        gradient: "from-orange-500/10 via-transparent to-transparent",
    },
];

export default function FeatureGrid() {
    return (
        <section id="features" className="relative py-32 md:py-40">
            <div className="max-w-7xl mx-auto px-6">
                {/* Section header */}
                <FadeInUp className="mb-16 md:mb-20">
                    <p className="text-sm uppercase tracking-[0.2em] text-white/40 mb-4">
                        Capabilities
                    </p>
                    <h2 className="text-4xl sm:text-5xl md:text-6xl font-bold tracking-tighter mb-6">
                        From pixels
                        <br />
                        <span className="bg-gradient-to-r from-white via-white/80 to-white/50 bg-clip-text text-transparent">
                            to worlds
                        </span>
                    </h2>
                    <p className="max-w-xl text-base md:text-lg text-white/50 leading-relaxed">
                        Marble, our first product, generates spatially consistent,
                        high-fidelity, and persistent 3D worlds that you can move through,
                        edit, and inhabit.
                    </p>
                </FadeInUp>

                {/* Bento grid */}
                <StaggerContainer className="grid grid-cols-1 md:grid-cols-3 gap-5 md:gap-6">
                    {features.map((feature) => (
                        <motion.div
                            key={feature.title}
                            variants={fadeInUp}
                            className={`group relative rounded-2xl border border-white/[0.06] bg-[hsl(0,0%,4%)] p-8 md:p-10 overflow-hidden transition-all duration-500 hover:border-white/[0.12] ${feature.span}`}
                        >
                            {/* Hover gradient overlay */}
                            <div
                                className={`absolute inset-0 bg-gradient-to-br ${feature.gradient} opacity-0 group-hover:opacity-100 transition-opacity duration-500`}
                            />

                            {/* Hover glow */}
                            <div className="absolute inset-0 opacity-0 group-hover:opacity-100 transition-opacity duration-500">
                                <div className="absolute -top-px left-1/4 right-1/4 h-px bg-gradient-to-r from-transparent via-white/20 to-transparent" />
                            </div>

                            <div className="relative z-10">
                                {/* Icon */}
                                <div className="mb-6 inline-flex items-center justify-center w-12 h-12 rounded-xl bg-white/5 text-white/60 group-hover:text-white/90 group-hover:bg-white/10 transition-all duration-300">
                                    {feature.icon}
                                </div>

                                {/* Text */}
                                <h3 className="text-xl font-semibold mb-3 text-white group-hover:text-white transition-colors">
                                    {feature.title}
                                </h3>
                                <p className="text-sm md:text-base text-white/40 leading-relaxed group-hover:text-white/60 transition-colors">
                                    {feature.description}
                                </p>
                            </div>

                            {/* Scale effect on hover */}
                            <motion.div
                                className="absolute inset-0 z-0"
                                whileHover={{ scale: 1.02 }}
                                transition={{ duration: 0.3 }}
                            />
                        </motion.div>
                    ))}
                </StaggerContainer>

                {/* CTA */}
                <FadeInUp className="mt-12 text-center">
                    <a
                        href="https://marble.worldlabs.ai"
                        target="_blank"
                        rel="noopener noreferrer"
                        className="inline-flex items-center gap-2 text-sm text-white/50 hover:text-white transition-colors group"
                    >
                        Start creating with Marble
                        <svg
                            width="14"
                            height="14"
                            viewBox="0 0 14 14"
                            fill="none"
                            className="transition-transform group-hover:translate-x-0.5"
                        >
                            <path
                                d="M1 7h12M8 2l5 5-5 5"
                                stroke="currentColor"
                                strokeWidth="1.5"
                                strokeLinecap="round"
                                strokeLinejoin="round"
                            />
                        </svg>
                    </a>
                </FadeInUp>
            </div>
        </section>
    );
}
