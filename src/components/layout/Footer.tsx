import { siteConfig } from "../../data/site";
import { ArrowUp, MapPin, Sparkles } from "lucide-react";

export function Footer() {
  const handleScrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: "smooth"
    });
  };

  const currentYear = new Date().getFullYear();

  return (
    <footer className="bg-black border-t border-core-border pt-16 pb-8 relative overflow-hidden">
      {/* Subtle rugged ambient layout element */}
      <div className="absolute top-0 left-1/2 -translate-x-1/2 w-full max-w-4xl h-px bg-gradient-to-r from-transparent via-core-brown/20 to-transparent" />
      
      <div className="max-w-7xl mx-auto px-6">
        <div className="grid grid-cols-1 md:grid-cols-12 gap-10 md:gap-8 pb-12">
          {/* Logo, tagline, and IC note */}
          <div className="md:col-span-5 flex flex-col gap-4">
            <div className="flex items-center gap-3">
              <div className="w-8 h-8 rounded-lg bg-gradient-to-br from-core-brown to-core-warm flex items-center justify-center font-display font-extrabold text-[#0D0D0D] tracking-widest text-sm shadow-md shadow-core-brown/40">
                C
              </div>
              <div>
                <span className="font-display font-bold tracking-wider text-core-primary text-xl">
                  {siteConfig.name}
                </span>
                <span className="text-[9px] block text-core-warm font-mono tracking-widest uppercase">
                  Offroad Rally & Explore
                </span>
              </div>
            </div>
            
            <p className="text-core-secondary text-xs leading-relaxed max-w-md">
              {siteConfig.tagline}
            </p>

            <div className="flex items-center gap-2 mt-2 text-stone-600 text-xs font-mono">
              <MapPin className="w-3.5 h-3.5 text-core-brown/60" />
              <span>Argyle Road Fort Carson No. 5, JGRP Territory</span>
            </div>
          </div>

          {/* Quick Links */}
          <div className="md:col-span-3">
            <h4 className="font-display font-bold text-xs uppercase tracking-widest text-core-primary mb-4 pb-2 border-b border-stone-900">
              Navigasi Cepat
            </h4>
            <ul className="flex flex-col gap-2.5 text-xs text-core-secondary">
              <li>
                <a href="#home" className="hover:text-core-warm transition-colors duration-200">
                  Home Base
                </a>
              </li>
              <li>
                <a href="#about" className="hover:text-core-warm transition-colors duration-200">
                  Tentang CORE
                </a>
              </li>
              <li>
                <a href="#gallery" className="hover:text-core-warm transition-colors duration-200">
                  Dokumentasi & Galeri
                </a>
              </li>
              <li>
                <a href="#join" className="hover:text-core-warm transition-colors duration-200">
                  Pendaftaran Anggota
                </a>
              </li>
            </ul>
          </div>

          {/* IC / Roleplay Roleplay Note */}
          <div className="md:col-span-4 flex flex-col gap-4">
            <div className="p-4 rounded-lg bg-core-dark border border-core-border flex flex-col gap-2">
              <div className="flex items-center gap-1.5 text-xs font-semibold text-core-warm uppercase font-mono tracking-wider">
                <Sparkles className="w-3.5 h-3.5" />
                <span>Simulasi In Character (IC)</span>
              </div>
              <p className="text-[11px] text-stone-400 leading-relaxed">
                CORE adalah komunitas fiktif In Character di dalam server **Jogjagamers Roleplay (JGRP)**. Seluruh informasi, tautan, dan aktivitas yang tercantum di website ini dipublikasikan murni untuk memfasilitasi kebutuhan roleplay kreatif antar pemain.
              </p>
            </div>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="border-t border-stone-900 pt-8 flex flex-col sm:flex-row items-center justify-between gap-4">
          <p className="text-[10px] text-stone-600 font-mono">
            &copy; {currentYear} {siteConfig.fullName}. All Rights Reserved for Roleplay Intent.
          </p>
          
          <button
            onClick={handleScrollToTop}
            className="group inline-flex items-center gap-2 px-3 py-1.5 rounded-md bg-core-dark border border-core-border text-stone-500 hover:text-core-warm hover:border-core-brown/40 transition-all duration-200 font-mono text-[10px] uppercase tracking-wider cursor-pointer"
          >
            Kembali Ke Atas <ArrowUp className="w-3 h-3 group-hover:-translate-y-0.5 transition-transform duration-200" />
          </button>
        </div>
      </div>
    </footer>
  );
}
