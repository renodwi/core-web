import * as React from "react";
import { motion, AnimatePresence } from "motion/react";
import { ArrowRight, Compass, ShieldAlert, Zap } from "lucide-react";
import { siteConfig } from "../../data/site";
import { Button } from "../ui/Button";
import { galleryItems } from "../../data/gallery";

export function HeroSection() {
  const [currentIndex, setCurrentIndex] = React.useState(() => {
    return Math.floor(Math.random() * galleryItems.length);
  });

  React.useEffect(() => {
    if (galleryItems.length <= 1) return;
    const interval = setInterval(() => {
      setCurrentIndex((prevIndex) => {
        let nextIndex = prevIndex;
        while (nextIndex === prevIndex) {
          nextIndex = Math.floor(Math.random() * galleryItems.length);
        }
        return nextIndex;
      });
    }, 5000); // changes every 5 seconds
    return () => clearInterval(interval);
  }, []);

  const triggerScroll = (targetId: string) => {
    const element = document.querySelector(targetId);
    if (element) {
      const offset = 80;
      const bodyRect = document.body.getBoundingClientRect().top;
      const elementRect = element.getBoundingClientRect().top;
      const elementPosition = elementRect - bodyRect;
      const offsetPosition = elementPosition - offset;
      window.scrollTo({
        top: offsetPosition,
        behavior: "smooth",
      });
    }
  };

  return (
    <section
      id="home"
      className="min-h-screen relative flex items-center justify-center pt-24 pb-12 overflow-hidden bg-core-bg selection:bg-core-warm selection:text-core-bg"
    >
      {/* Immersive background layout design */}
      <div className="absolute inset-0 z-0 overflow-hidden">
        {/* Dynamic Background Slideshow */}
        <AnimatePresence mode="popLayout">
          {galleryItems.length > 0 && (
            <motion.div
              key={currentIndex}
              initial={{ opacity: 0, scale: 1.05 }}
              animate={{ opacity: 0.35, scale: 1 }} // Low opacity (35%) keeps content readable and dark theme cohesive
              exit={{ opacity: 0, scale: 0.98 }}
              transition={{ duration: 1.6, ease: "easeInOut" }}
              className="absolute inset-0 w-full h-full"
            >
              <img
                src={galleryItems[currentIndex].imagePath}
                alt="CORE Hero BG"
                referrerPolicy="no-referrer"
                className="w-full h-full object-cover"
              />
            </motion.div>
          )}
        </AnimatePresence>

        {/* Gradasi semakin pudar kebawah / semakin gelap kebawah agar tulisan tetap kelihatan */}
        <div className="absolute inset-0 bg-gradient-to-b from-black/50 via-black/75 to-core-bg z-[1]" />

        {/* Subtle grid pattern overlay */}
        <div 
          className="absolute inset-0 opacity-15 pointer-events-none z-[2]"
          style={{
            backgroundImage: "linear-gradient(to right, rgba(139, 94, 60, 0.1) 1px, transparent 1px), linear-gradient(to bottom, rgba(139, 94, 60, 0.1) 1px, transparent 1px)",
            backgroundSize: "4rem 4rem"
          }}
        />
        
        {/* Glowing magma-like visual orbs */}
        <div className="absolute bottom-[-10%] right-[10%] w-[40vw] h-[40vw] max-w-[500px] max-h-[500px] rounded-full bg-core-brown/10 blur-[130px] z-[2]" />
        <div className="absolute top-[-5%] left-[-5%] w-[30vw] h-[30vw] max-w-[400px] max-h-[400px] rounded-full bg-core-warm/5 blur-[120px] z-[2]" />

        {/* Rugged typographic overlay background behind main title */}
        <div className="absolute inset-x-0 bottom-10 flex justify-center pointer-events-none select-none opacity-[0.02] z-[2]">
          <span className="font-display font-extrabold text-[18vw] leading-none text-core-primary tracking-widest uppercase">
            RUGGED
          </span>
        </div>
      </div>

      <div className="max-w-7xl mx-auto px-6 relative z-10 w-full text-center">
        {/* IC Tagline Badge */}
        <motion.div
          initial={{ opacity: 0, scale: 0.9 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.5 }}
          className="inline-flex items-center gap-2 px-3 py-1 bg-core-brown/10 border border-core-brown/30 rounded-full text-core-warm font-mono text-[10px] uppercase font-bold tracking-widest mb-6"
        >
          <Compass className="w-3.5 h-3.5 animate-spin" style={{ animationDuration: "12s" }} />
          <span>Jogjagamers Roleplay In Character Community</span>
        </motion.div>

        {/* Core Header Name */}
        <motion.div
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7 }}
          className="mb-6 flex flex-col items-center"
        >
          <h1 className="text-6xl sm:text-7xl md:text-8xl lg:text-9xl font-display font-extrabold text-core-primary tracking-tighter leading-none">
            {siteConfig.name}
          </h1>
          <p className="mt-2 font-display text-base sm:text-lg md:text-xl font-bold uppercase tracking-[0.3em] text-core-warm">
            Community Offroad Rally & Explore
          </p>
        </motion.div>

        {/* Dynamic Tagline Title */}
        <motion.p
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7, delay: 0.2 }}
          className="text-lg sm:text-xl md:text-2xl font-light text-core-primary max-w-3xl mx-auto font-sans leading-relaxed tracking-wide"
        >
          {siteConfig.tagline}
        </motion.p>

        {/* Sub-description copy */}
        <motion.p
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.8, delay: 0.4 }}
          className="mt-4 text-xs sm:text-sm text-core-secondary max-w-2xl mx-auto leading-relaxed"
        >
          {siteConfig.description}
        </motion.p>

        {/* Call to actions */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7, delay: 0.6 }}
          className="mt-10 flex flex-col sm:flex-row items-center justify-center gap-4"
        >
          <motion.a
            whileTap={{ scale: 0.97 }}
            href={siteConfig.joinUrl}
            target="_blank"
            rel="noopener noreferrer"
            className="w-full sm:w-auto inline-flex items-center justify-center font-display font-medium uppercase tracking-wide transition-colors duration-200 focus:outline-hidden focus:ring-2 focus:ring-core-warm/40 rounded-md cursor-pointer bg-gradient-to-r from-core-brown to-core-warm text-core-primary shadow-lg shadow-core-brown/20 hover:from-core-warm hover:to-core-brown transition-all duration-300 px-8 py-3.5 text-base gap-2 group text-center"
          >
            Sertai Kami <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
          </motion.a>
        </motion.div>

        {/* Visual Stats Bar */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.8, delay: 0.8 }}
          className="mt-20 max-w-5xl mx-auto border-t border-b border-core-border py-8 grid grid-cols-2 md:grid-cols-4 gap-8"
        >
          {siteConfig.stats.map((stat, i) => (
            <div key={i} className="text-center group border-r last:border-0 border-core-border/50">
              <div className="font-display font-extrabold text-2xl sm:text-3xl text-core-warm tracking-tight group-hover:scale-105 transition-transform duration-200">
                {stat.value}
              </div>
              <div className="mt-1 font-mono text-[10px] text-core-secondary uppercase tracking-widest">
                {stat.label}
              </div>
            </div>
          ))}
        </motion.div>
      </div>

      {/* Spacing alignment */}
      <div className="absolute bottom-0 left-0 w-full h-4" />
    </section>
  );
}
