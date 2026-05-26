import * as React from "react";
import { motion, AnimatePresence } from "motion/react";
import { Compass, Shield, Zap, AlertTriangle } from "lucide-react";

export function LoadingScreen() {
  const [progress, setProgress] = React.useState(0);
  const [loadingText, setLoadingText] = React.useState("Menginisialisasi Sistem...");
  const [isDone, setIsDone] = React.useState(false);

  React.useEffect(() => {
    // Dynamic organic progress steps to simulate premium vehicle telemetry bootloader
    const progressInterval = setInterval(() => {
      setProgress((prev) => {
        if (prev >= 100) {
          clearInterval(progressInterval);
          setTimeout(() => {
            setIsDone(true);
            // Dispatch a custom event to notify external integrations (like autoplay audio)
            window.dispatchEvent(new Event("core_site_fully_loaded"));
          }, 450);
          return 100;
        }
        
        // Organic leaps
        const increment = Math.floor(Math.random() * 8) + 4;
        const next = Math.min(prev + increment, 100);
        
        // Update loading state messages corresponding to loading values
        if (next < 25) {
          setLoadingText("Mengkalibrasi Sensor Kemudi...");
        } else if (next < 50) {
          setLoadingText("Sinkronisasi Peta Koordinat Flint County...");
        } else if (next < 75) {
          setLoadingText("Menghubungkan Saluran Radio Komunitas...");
        } else if (next < 95) {
          setLoadingText("Memuat Galeri Dokumentasi Perjalanan...");
        } else {
          setLoadingText("Semua Sistem Siap. Membuka Pintu...");
        }

        return next;
      });
    }, 90);

    return () => clearInterval(progressInterval);
  }, []);

  return (
    <AnimatePresence>
      {!isDone && (
        <motion.div
          id="loading-screen"
          initial={{ opacity: 1 }}
          exit={{ 
            opacity: 0,
            transition: { duration: 0.8, ease: "easeInOut" }
          }}
          className="fixed inset-0 bg-[#0F0E0D] z-[100000] flex flex-col items-center justify-center p-6 text-core-primary select-none overflow-hidden"
        >
          {/* Decorative Subtle Background Contour Grid Patterns */}
          <div className="absolute inset-0 opacity-5 pointer-events-none">
            <svg className="w-full h-full text-core-warm" viewBox="0 0 100 100" preserveAspectRatio="none">
              <path d="M-10,30 Q30,5 70,50 T120,40" fill="none" stroke="currentColor" strokeWidth="0.5" />
              <path d="M-10,50 Q40,25 80,70 T120,60" fill="none" stroke="currentColor" strokeWidth="0.5" strokeDasharray="1 2" />
              <path d="M-20,90 Q50,70 90,95 T120,85" fill="none" stroke="currentColor" strokeWidth="0.8" />
            </svg>
          </div>

          <div className="absolute inset-x-0 top-0 h-[10vh] bg-gradient-to-b from-black/40 to-transparent pointer-events-none" />
          <div className="absolute inset-x-0 bottom-0 h-[10vh] bg-gradient-to-t from-black/40 to-transparent pointer-events-none" />

          {/* Core HUD Container */}
          <div className="relative max-w-md w-full flex flex-col items-center text-center">
            
            {/* Ambient dynamic radial glow */}
            <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-72 h-72 bg-core-warm/5 rounded-full blur-3xl" />

            {/* Glowing Spin Outer Ring Dial */}
            <div className="relative mb-8 w-28 h-28 flex items-center justify-center">
              <motion.div
                animate={{ rotate: 360 }}
                transition={{ repeat: Infinity, duration: 12, ease: "linear" }}
                className="absolute inset-0 rounded-full border border-dashed border-core-warm/40"
              />
              <motion.div
                animate={{ rotate: -360 }}
                transition={{ repeat: Infinity, duration: 4, ease: "linear" }}
                className="absolute inset-2 rounded-full border border-core-brown/15 border-t-core-warm/60 border-b-core-warm/60"
              />
              
              <div className="absolute inset-4 rounded-full bg-[#161413] border border-core-border flex items-center justify-center shadow-2xl">
                <Compass className="w-10 h-10 text-core-warm animate-pulse" />
              </div>
            </div>

            {/* Logo / Branding */}
            <motion.div
              initial={{ opacity: 0, y: 10 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.1 }}
              className="space-y-1 mb-6"
            >
              <h1 className="font-display font-extrabold text-3xl tracking-[0.2em] text-[#F3E6D0] uppercase">
                CORE
              </h1>
              <p className="font-mono text-[9px] text-core-secondary tracking-[0.3em] uppercase">
                Community Offroad Rally & Explore
              </p>
            </motion.div>

            {/* Progress Percentage */}
            <div className="mb-4">
              <span className="font-mono text-4xl font-black text-core-warm tracking-tight">
                {progress}%
              </span>
            </div>

            {/* Simulated System Loading Status */}
            <div className="w-full space-y-3">
              <div className="text-[10px] font-mono tracking-widest text-[#C08A5A] uppercase min-h-[16px]">
                {loadingText}
              </div>

              {/* Progress Slider Bar Frame */}
              <div className="h-[3px] w-full bg-stone-900 border border-stone-800 rounded-full overflow-hidden relative">
                <motion.div 
                  className="h-full bg-gradient-to-r from-core-brown to-core-warm rounded-full"
                  style={{ width: `${progress}%` }}
                  transition={{ ease: "easeInOut" }}
                />
              </div>

              {/* Status Telemetry */}
              <div className="flex justify-between text-[8px] font-mono text-stone-500 tracking-wider">
                <span>SYSTEM DIAGNOSTIC: NORMAL</span>
                <span>JGRP IC UNIT ACTIVE</span>
              </div>
            </div>
          </div>

          {/* Footer warning bar */}
          <div className="absolute bottom-6 left-6 right-6 flex items-center justify-between text-[8px] font-mono text-stone-600 border-t border-stone-900/60 pt-4 px-2">
            <span>FLINT COUNTY OUTPOST STATION CODE: 74-CORE</span>
            <span>PRESENCE: ONLINE</span>
          </div>
        </motion.div>
      )}
    </AnimatePresence>
  );
}
