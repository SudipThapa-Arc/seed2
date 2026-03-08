import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";

const inter = Inter({
    subsets: ["latin"],
    variable: "--font-inter",
    display: "swap",
});

export const metadata: Metadata = {
    title: "World Labs — Spatial Intelligence",
    description:
        "World Labs is a spatial intelligence company, building frontier models that can perceive, generate, and interact with the 3D world.",
    openGraph: {
        title: "World Labs — Spatial Intelligence",
        description:
            "Building frontier models that can perceive, generate, and interact with the 3D world.",
        type: "website",
    },
};

export default function RootLayout({
    children,
}: Readonly<{
    children: React.ReactNode;
}>) {
    return (
        <html lang="en" className="dark">
            <body className={`${inter.variable} font-sans antialiased`}>
                {children}
            </body>
        </html>
    );
}
