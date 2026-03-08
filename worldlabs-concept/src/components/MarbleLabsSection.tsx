"use client";

import { motion } from "framer-motion";
import { FadeInUp, StaggerContainer } from "./animations";
import { fadeInUp } from "./animations";

const categories = [
    {
        title: "Imagine",
        subtitle: "Where imagination turns into form — from concept to cinematic creation.",
        tags: ["Art", "Film", "VFX", "Virtual Production"],
        color: "from-violet-500/20 to-fuchsia-500/10",
        borderHover: "group-hover:border-violet-500/20",
        icon: (
            <svg width="28" height="28" viewBox="0 0 28 28" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
                <path d="M14 2L16.5 9.5L24 7L19 14L26 17L18.5 18.5L20 26L14 20.5L8 26L9.5 18.5L2 17L9 14L4 7L11.5 9.5L14 2Z" />
            </svg>
        ),
    },
    {
        title: "Explore",
        subtitle: "Where worlds invite you in — immersive, interactive, and shared.",
        tags: ["Gaming", "AR/VR", "Immersive Media"],
        color: "from-blue-500/20 to-cyan-500/10",
        borderHover: "group-hover:border-blue-500/20",
        icon: (
            <svg width="28" height="28" viewBox="0 0 28 28" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
                <circle cx="14" cy="14" r="12" />
                <polygon points="12,8 20,14 12,20" />
            </svg>
        ),
    },
    {
        title: "Simulate",
        subtitle: "Where systems come alive — modeling motion, physics, and intelligent environments.",
        tags: ["Robotics", "Architecture & Design", "Health Systems"],
        color: "from-emerald-500/20 to-teal-500/10",
        borderHover: "group-hover:border-emerald-500/20",
        icon: (
            <svg width="28" height="28" viewBox="0 0 28 28" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
                <rect x="4" y="4" width="8" height="8" rx="1" />
                <rect x="16" y="4" width="8" height="8" rx="1" />
                <rect x="4" y="16" width="8" height="8" rx="1" />
                <rect x="16" y="16" width="8" height="8" rx="1" />
                <line x1="12" y1="8" x2="16" y2="8" />
                <line x1="12" y1="20" x2="16" y2="20" />
                <line x1="8" y1="12" x2="8" y2="16" />
                <line x1="20" y1="12" x2="20" y2="16" />
            </svg>
        ),
    },
    {
        title: "Learn",
        subtitle: "Where curiosity meets mastery — explore, build, and share knowledge together.",
        tags: ["Tutorials", "Documentation", "Community"],
        color: "from-amber-500/20 to-orange-500/10",
        borderHover: "group-hover:border-amber-500/20",
        icon: (
            <svg width="28" height="28" viewBox="0 0 28 28" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
                <path d="M4 19.5A2.5 2.5 0 0 1 6.5 17H22" />
                <path d="M6.5 2H22v23H6.5A2.5 2.5 0 0 1 4 22.5v-17A2.5 2.5 0 0 1 6.5 2z" />
                <line x1="10" y1="8" x2="18" y2="8" />
                <line x1="10" y1="12" x2="15" y2="12" />
            </svg>
        ),
    },
];

export default function MarbleLabsSection() {
    return (
        <section id="marble-labs" className="relative py-32 md:py-40">
            {/* Subtle separator */}
            <div className="absolute top-0 left-1/4 right-1/4 h-px bg-gradient-to-r from-transparent via-white/10 to-transparent" />

            <div className="max-w-7xl mx-auto px-6">
                {/* Section header */}
                <FadeInUp className="mb-16 md:mb-20">
                    <p className="text-sm uppercase tracking-[0.2em] text-white/40 mb-4">
                        Case Studies & Workflows
                    </p>
                    <h2 className="text-4xl sm:text-5xl md:text-6xl font-bold tracking-tighter mb-6">
                        Marble Labs
                    </h2>
                    <p className="max-w-xl text-base md:text-lg text-white/50 leading-relaxed">
                        Where imaginative ideas, bold experiments, and creative workflows
                        come to life. Explore in-depth case studies showcasing how Marble
                        powers real-world workflows.
                    </p>
                </FadeInUp>

                {/* Category grid */}
                <StaggerContainer className="grid grid-cols-1 md:grid-cols-2 gap-5 md:gap-6">
                    {categories.map((category) => (
                        <motion.a
                            key={category.title}
                            href="https://www.worldlabs.ai/labs"
                            target="_blank"
                            rel="noopener noreferrer"
                            variants={fadeInUp}
                            className={`group relative rounded-2xl border border-white/[0.06] bg-[hsl(0,0%,4%)] p-8 md:p-10 overflow-hidden transition-all duration-500 ${category.borderHover} cursor-pointer`}
                        >
                            {/* Hover gradient */}
                            <div
                                className={`absolute inset-0 bg-gradient-to-br ${category.color} opacity-0 group-hover:opacity-100 transition-opacity duration-500`}
                            />

                            <div className="relative z-10">
                                {/* Icon */}
                                <div className="mb-6 text-white/40 group-hover:text-white/80 transition-colors duration-300">
                                    {category.icon}
                                </div>

                                {/* Title */}
                                <h3 className="text-2xl font-semibold mb-3 text-white">
                                    {category.title}
                                </h3>

                                {/* Tags */}
                                <div className="flex flex-wrap gap-2 mb-4">
                                    {category.tags.map((tag) => (
                                        <span
                                            key={tag}
                                            className="text-xs font-medium text-white/40 bg-white/5 rounded-full px-3 py-1 group-hover:text-white/60 group-hover:bg-white/10 transition-all duration-300"
                                        >
                                            {tag}
                                        </span>
                                    ))}
                                </div>

                                {/* Description */}
                                <p className="text-sm text-white/40 leading-relaxed mb-6 group-hover:text-white/60 transition-colors">
                                    {category.subtitle}
                                </p>

                                {/* Link */}
                                <span className="inline-flex items-center gap-1.5 text-sm font-medium text-white/40 group-hover:text-white transition-colors">
                                    Read more
                                    <svg
                                        width="14"
                                        height="14"
                                        viewBox="0 0 14 14"
                                        fill="none"
                                        className="transition-transform group-hover:translate-x-1"
                                    >
                                        <path
                                            d="M1 7h12M8 2l5 5-5 5"
                                            stroke="currentColor"
                                            strokeWidth="1.5"
                                            strokeLinecap="round"
                                            strokeLinejoin="round"
                                        />
                                    </svg>
                                </span>
                            </div>
                        </motion.a>
                    ))}
                </StaggerContainer>

                {/* Bottom link */}
                <FadeInUp className="mt-12 text-center">
                    <a
                        href="https://www.worldlabs.ai/labs"
                        target="_blank"
                        rel="noopener noreferrer"
                        className="inline-flex items-center gap-2 text-sm text-white/50 hover:text-white transition-colors group"
                    >
                        Read more case studies
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
