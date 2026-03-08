"use client";

import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import Link from "next/link";

const navLinks = [
    { label: "About", href: "#about" },
    { label: "Features", href: "#features" },
    { label: "Marble Labs", href: "#marble-labs" },
    { label: "Research", href: "#research" },
    { label: "Careers", href: "#careers" },
];

export default function Navigation() {
    const [mobileOpen, setMobileOpen] = useState(false);

    return (
        <header className="fixed top-0 left-0 right-0 z-50">
            <nav className="mx-auto flex max-w-7xl items-center justify-between px-6 py-4 backdrop-blur-md bg-black/40 border-b border-white/5">
                {/* Logo */}
                <Link href="/" className="flex items-center gap-2 group">
                    <div className="relative h-8 w-8 rounded-lg bg-gradient-to-br from-white/20 to-white/5 flex items-center justify-center border border-white/10 group-hover:border-white/20 transition-colors">
                        <svg width="16" height="16" viewBox="0 0 16 16" fill="none" xmlns="http://www.w3.org/2000/svg">
                            <circle cx="8" cy="8" r="3" fill="white" />
                            <circle cx="8" cy="8" r="6" stroke="white" strokeWidth="0.5" opacity="0.5" />
                            <circle cx="8" cy="8" r="7.5" stroke="white" strokeWidth="0.3" opacity="0.3" />
                        </svg>
                    </div>
                    <span className="text-lg font-semibold tracking-tight text-white">
                        World Labs
                    </span>
                </Link>

                {/* Desktop nav */}
                <div className="hidden md:flex items-center gap-8">
                    {navLinks.map((link) => (
                        <a
                            key={link.label}
                            href={link.href}
                            className="text-sm text-white/60 hover:text-white transition-colors duration-200"
                        >
                            {link.label}
                        </a>
                    ))}
                </div>

                {/* CTA */}
                <div className="hidden md:block">
                    <a
                        href="https://marble.worldlabs.ai"
                        target="_blank"
                        rel="noopener noreferrer"
                        className="inline-flex items-center gap-2 rounded-full bg-white px-5 py-2 text-sm font-medium text-black hover:bg-white/90 transition-all duration-200 hover:shadow-[0_0_20px_rgba(255,255,255,0.15)]"
                    >
                        Create with Marble
                        <svg width="12" height="12" viewBox="0 0 12 12" fill="none" xmlns="http://www.w3.org/2000/svg">
                            <path d="M2.5 9.5L9.5 2.5M9.5 2.5H4M9.5 2.5V8" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
                        </svg>
                    </a>
                </div>

                {/* Mobile toggle */}
                <button
                    onClick={() => setMobileOpen(!mobileOpen)}
                    className="md:hidden relative w-8 h-8 flex items-center justify-center"
                    aria-label="Toggle mobile menu"
                    id="mobile-menu-toggle"
                >
                    <div className="flex flex-col gap-1.5">
                        <motion.span
                            animate={mobileOpen ? { rotate: 45, y: 5 } : { rotate: 0, y: 0 }}
                            className="block w-5 h-px bg-white origin-center transition-colors"
                        />
                        <motion.span
                            animate={mobileOpen ? { opacity: 0 } : { opacity: 1 }}
                            className="block w-5 h-px bg-white"
                        />
                        <motion.span
                            animate={mobileOpen ? { rotate: -45, y: -5 } : { rotate: 0, y: 0 }}
                            className="block w-5 h-px bg-white origin-center transition-colors"
                        />
                    </div>
                </button>
            </nav>

            {/* Mobile menu */}
            <AnimatePresence>
                {mobileOpen && (
                    <motion.div
                        initial={{ opacity: 0, height: 0 }}
                        animate={{ opacity: 1, height: "auto" }}
                        exit={{ opacity: 0, height: 0 }}
                        transition={{ duration: 0.3, ease: [0.25, 0.4, 0.25, 1] }}
                        className="md:hidden overflow-hidden bg-black/95 backdrop-blur-xl border-b border-white/5"
                    >
                        <div className="flex flex-col gap-1 px-6 py-4">
                            {navLinks.map((link, i) => (
                                <motion.a
                                    key={link.label}
                                    href={link.href}
                                    initial={{ opacity: 0, x: -10 }}
                                    animate={{ opacity: 1, x: 0 }}
                                    transition={{ delay: i * 0.05 }}
                                    onClick={() => setMobileOpen(false)}
                                    className="py-3 text-base text-white/70 hover:text-white transition-colors border-b border-white/5 last:border-0"
                                >
                                    {link.label}
                                </motion.a>
                            ))}
                            <a
                                href="https://marble.worldlabs.ai"
                                target="_blank"
                                rel="noopener noreferrer"
                                className="mt-4 inline-flex items-center justify-center gap-2 rounded-full bg-white px-5 py-3 text-sm font-medium text-black"
                            >
                                Create with Marble
                            </a>
                        </div>
                    </motion.div>
                )}
            </AnimatePresence>
        </header>
    );
}
