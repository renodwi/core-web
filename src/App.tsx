import { Navbar } from "./components/layout/Navbar";
import { HeroSection } from "./components/sections/HeroSection";
import { AboutSection } from "./components/sections/AboutSection";
import { ValuesSection } from "./components/sections/ValuesSection";
import { GallerySection } from "./components/sections/GallerySection";
import { JoinSection } from "./components/sections/JoinSection";
import { Footer } from "./components/layout/Footer";
import { CustomCursor } from "./components/ui/CustomCursor";
import { BackgroundMusic } from "./components/ui/BackgroundMusic";
import { LoadingScreen } from "./components/ui/LoadingScreen";

export default function App() {
  return (
    <div className="min-h-screen bg-core-bg text-core-primary flex flex-col selection:bg-core-warm selection:text-core-bg">
      {/* Boot Loading Animation Screen */}
      <LoadingScreen />

      {/* Premium Interactive Cursor (desktop-pointers only) */}
      <CustomCursor />

      {/* Background Ambience Audio Loop controller */}
      <BackgroundMusic />

      {/* Sticky Main Navigation */}
      <Navbar />

      {/* Main Single Page Sections */}
      <main className="flex-grow">
        {/* Hero Section Container */}
        <HeroSection />

        {/* Profile About Section */}
        <AboutSection />

        {/* Key Values System */}
        <ValuesSection />

        {/* Immersive Photo Gallery & Lightbox */}
        <GallerySection />

        {/* Join CTA Checklist Card */}
        <JoinSection />
      </main>

      {/* Footer & In Character Disclaimer Info */}
      <Footer />
    </div>
  );
}
