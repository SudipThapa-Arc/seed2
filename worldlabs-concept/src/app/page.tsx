import Navigation from "@/components/Navigation";
import HeroSection from "@/components/HeroSection";
import FeatureGrid from "@/components/FeatureGrid";
import MarbleLabsSection from "@/components/MarbleLabsSection";
import ResearchSection from "@/components/ResearchSection";
import CTASection from "@/components/CTASection";
import Footer from "@/components/Footer";

export default function Home() {
    return (
        <>
            <Navigation />
            <main>
                <HeroSection />
                <FeatureGrid />
                <MarbleLabsSection />
                <ResearchSection />
                <CTASection />
            </main>
            <Footer />
        </>
    );
}
