"use client";

import { motion } from "framer-motion";
import { FadeInUp, StaggerContainer } from "./animations";
import { fadeInUp } from "./animations";

const articles = [
    {
        id: "1",
        title: "3D as code",
        excerpt:
            "Text became the universal interface for software; 3D is becoming the universal interface for space. It's the medium that allows humans and AI systems to generate, edit, simulate, and share worlds together.",
        category: "Engineering",
        publishedAt: "March 4, 2026",
        slug: "3d-as-code",
    },
    {
        id: "2",
        title: "World Labs Announces New Funding",
        excerpt:
            "An update on our vision for spatial intelligence in 2026.",
        category: "Announcements",
        publishedAt: "February 18, 2026",
        slug: "funding-2026",
    },
    {
        id: "3",
        title: "Announcing the World API",
        excerpt:
            "A public API for generating explorable 3D worlds from text, images, and video — bringing Marble's world modeling capabilities into your applications.",
        category: "Engineering",
        publishedAt: "January 21, 2026",
        slug: "announcing-the-world-api",
    },
];

export default function ResearchSection() {
    return (
        <section id="research" className="relative py-32 md:py-40">
            {/* Subtle separator */}
            <div className="absolute top-0 left-1/4 right-1/4 h-px bg-gradient-to-r from-transparent via-white/10 to-transparent" />

            <div className="max-w-7xl mx-auto px-6">
                {/* Section header */}
                <FadeInUp className="mb-16 md:mb-20">
                    <p className="text-sm uppercase tracking-[0.2em] text-white/40 mb-4">
                        Blog
                    </p>
                    <h2 className="text-4xl sm:text-5xl md:text-6xl font-bold tracking-tighter mb-6">
                        Research and
                        <br />
                        <span className="bg-gradient-to-r from-white via-white/80 to-white/50 bg-clip-text text-transparent">
                            Insights
                        </span>
                    </h2>
                </FadeInUp>

                {/* Articles grid */}
                <StaggerContainer className="grid grid-cols-1 md:grid-cols-3 gap-5 md:gap-6">
                    {articles.map((article) => (
                        <motion.a
                            key={article.id}
                            href={`https://www.worldlabs.ai/blog/${article.slug}`}
                            target="_blank"
                            rel="noopener noreferrer"
                            variants={fadeInUp}
                            className="group relative rounded-2xl border border-white/[0.06] bg-[hsl(0,0%,4%)] overflow-hidden transition-all duration-500 hover:border-white/[0.12] cursor-pointer flex flex-col"
                        >
                            {/* Decorative top gradient */}
                            <div className="h-48 relative bg-gradient-to-br from-white/[0.03] to-transparent overflow-hidden">
                                <div className="absolute inset-0 bg-[radial-gradient(ellipse_80%_80%_at_50%_50%,rgba(120,119,198,0.08),transparent)] group-hover:opacity-150 transition-opacity duration-500" />
                                {/* Decorative abstract shapes */}
                                <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-20 h-20 rounded-full border border-white/[0.06] group-hover:border-white/[0.12] group-hover:scale-110 transition-all duration-500" />
                                <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-32 h-32 rounded-full border border-white/[0.03] group-hover:border-white/[0.08] group-hover:scale-105 transition-all duration-700" />
                            </div>

                            {/* Content */}
                            <div className="p-8 flex-1 flex flex-col">
                                {/* Category + Date */}
                                <div className="flex items-center gap-3 mb-4">
                                    <span className="text-xs font-medium text-white/30 bg-white/5 rounded-full px-3 py-1">
                                        {article.category}
                                    </span>
                                    <span className="text-xs text-white/25">
                                        {article.publishedAt}
                                    </span>
                                </div>

                                {/* Title */}
                                <h3 className="text-lg font-semibold mb-3 text-white group-hover:text-white transition-colors leading-snug">
                                    {article.title}
                                </h3>

                                {/* Excerpt */}
                                <p className="text-sm text-white/35 leading-relaxed flex-1 group-hover:text-white/50 transition-colors">
                                    {article.excerpt}
                                </p>

                                {/* Read link */}
                                <div className="mt-6 pt-4 border-t border-white/[0.04]">
                                    <span className="inline-flex items-center gap-1.5 text-sm font-medium text-white/30 group-hover:text-white/70 transition-colors">
                                        Read article
                                        <svg
                                            width="12"
                                            height="12"
                                            viewBox="0 0 12 12"
                                            fill="none"
                                            className="transition-transform group-hover:translate-x-0.5"
                                        >
                                            <path
                                                d="M1 6h10M7 2l4 4-4 4"
                                                stroke="currentColor"
                                                strokeWidth="1.5"
                                                strokeLinecap="round"
                                                strokeLinejoin="round"
                                            />
                                        </svg>
                                    </span>
                                </div>
                            </div>
                        </motion.a>
                    ))}
                </StaggerContainer>

                {/* Read more link */}
                <FadeInUp className="mt-12 text-center">
                    <a
                        href="https://www.worldlabs.ai/blog"
                        target="_blank"
                        rel="noopener noreferrer"
                        className="inline-flex items-center gap-2 text-sm text-white/50 hover:text-white transition-colors group"
                    >
                        Read more
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
