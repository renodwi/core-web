import { motion } from "motion/react";
import { Check, Compass, Landmark, Terminal, Users, ArrowUpRight } from "lucide-react";
import { siteConfig } from "../../data/site";

export function JoinSection() {
  const reqs = [
    "Memiliki ketertarikan tinggi pada offroad, rally, atau eksplorasi rute alam bebas.",
    "Dapat mendengarkan dan mematuhi arahan koordinator kegiatan demi kelancaran bersama.",
    "Menjaga sikap, etika berkendara, serta mematuhi tata tertib selama convoy berlangsung.",
    "Mengutamakan keselamatan personil, kelestarian lingkungan, dan solidaritas tim.",
    "Wajib bersedia mengikuti briefing jalur dan regulasi keselamatan sebelum roda berputar."
  ];

  return (
    <section id="join" className="py-24 bg-core-dark relative overflow-hidden">
      {/* Decorative tactical lines */}
      <div className="absolute top-0 right-0 w-[400px] h-[400px] bg-core-brown/5 rounded-full blur-[130px] pointer-events-none" />
      <div className="absolute bottom-0 left-0 w-full h-px bg-gradient-to-r from-transparent via-core-border/70 to-transparent" />

      <div className="max-w-6xl mx-auto px-6 relative z-10">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
          
          {/* Text block & information details */}
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="lg:col-span-6 space-y-6"
          >
            <span className="inline-flex items-center gap-1 px-2.5 py-1 text-[10px] font-mono uppercase tracking-widest text-core-warm bg-core-brown/10 border border-core-brown/20 rounded-md">
              <Users className="w-3.5 h-3.5" />
              <span>Penerimaan Anggota Baru</span>
            </span>

            <h2 className="text-3xl sm:text-4xl lg:text-5xl font-display font-extrabold text-core-primary tracking-tight leading-tight">
              Temukan kami di Fort Carson!
            </h2>

            <p className="text-core-secondary text-sm leading-relaxed">
              Jika kamu memiliki ketertarikan tinggi pada dunia otomotif offroad, hasrat kuat untuk mengeksplor rute alam terbuka, serta komitmen tinggi menjaga keselamatan dan solidaritas kelompok, maka barisan kemudi CORE selalu terbuka menyambutmu.
            </p>
            
            {/* Map Section */}
            <div className="border border-core-border/70 rounded-xl overflow-hidden bg-stone-950/40 p-3 shadow-xl backdrop-blur-xs">
              <div className="text-[10px] font-mono text-stone-400 uppercase tracking-widest mb-2 flex justify-between items-center border-b border-stone-800/60 pb-1.5 px-0.5">
                <span className="flex items-center gap-1.5">
                  <span className="w-1.5 h-1.5 rounded-full bg-core-warm animate-pulse" />
                  PETA KOORDINAT BASECAMP
                </span>
                <span className="text-core-warm/80 font-bold">FORT CARSON HQ</span>
              </div>
              <div className="relative group overflow-hidden rounded-lg border border-stone-900">
                <img
                  src="/gallery/mappoint.webp"
                  alt="Peta Lokasi Fort Carson"
                  referrerPolicy="no-referrer"
                  className="w-full h-auto object-cover aspect-video transition-transform duration-500 group-hover:scale-105"
                />
                <div className="absolute bottom-2 left-2 px-2 py-1 bg-stone-950/85 border border-stone-800 rounded text-[9px] font-mono text-stone-300 backdrop-blur-xs">
                  Sektor Barat Daya Fort Carson No. 5
                </div>
              </div>
            </div>

            <div className="flex flex-wrap gap-4 pt-2">
              <motion.a
                whileTap={{ scale: 0.97 }}
                href={siteConfig.joinUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="w-full sm:w-auto inline-flex items-center justify-center font-display font-bold uppercase tracking-wider transition-all duration-300 focus:outline-hidden focus:ring-2 focus:ring-core-warm/40 rounded-md cursor-pointer bg-gradient-to-r from-core-brown to-core-warm text-core-primary shadow-xl shadow-core-brown/40 hover:from-core-warm hover:to-core-brown px-10 py-4 text-base gap-2 group text-center"
              >
                Daftar <ArrowUpRight className="w-5 h-5 group-hover:translate-x-0.5 group-hover:-translate-y-0.5 transition-transform" />
              </motion.a>
            </div>
          </motion.div>

          {/* Tactical Paper File Checklist card */}
          <motion.div
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="lg:col-span-6"
          >
            <div className="bg-[#1a1816] rounded-xl border border-core-border p-8 relative overflow-hidden shadow-2xl">
              {/* Paper Folder Decor Overlay */}
              <div className="absolute top-0 right-0 py-1.5 px-4 bg-core-brown text-[#0d0d0d] font-mono text-[9px] uppercase font-bold tracking-widest rounded-bl-lg flex items-center gap-1.5">
                <Terminal className="w-3 h-3" />
                <span>MEMBERSHIP REQ - DRAFT CODEX</span>
              </div>

              <h3 className="font-display font-bold text-lg text-core-primary uppercase tracking-wider mb-6 pb-2 border-b border-stone-900">
                Syarat Kelayakan In Character
              </h3>

              <div className="space-y-5">
                {reqs.map((req, i) => (
                  <div key={i} className="flex items-start gap-4 text-xs group">
                    <div className="p-1 rounded-sm bg-core-dark border border-[#8B5E3C]/30 text-core-warm mt-0.5 shrink-0 group-hover:bg-core-brown group-hover:text-core-bg group-hover:border-core-brown transition-all duration-200">
                      <Check className="w-3.5 h-3.5 stroke-[3]" />
                    </div>
                    <p className="text-[#D8CDBC] leading-relaxed group-hover:text-core-primary transition-colors duration-150">
                      {req}
                    </p>
                  </div>
                ))}
              </div>

              {/* Decorative signature line inside stamp */}
              <div className="mt-8 pt-6 border-t border-stone-900 flex justify-between items-center">
                <div className="space-y-1">
                  <div className="text-[9px] font-mono uppercase text-stone-500">ADMINISTRASI RECRUITMENT</div>
                  <div className="text-[11px] font-display font-bold tracking-wider text-core-warm">APPROVED GENERAL DIRECTIVE</div>
                </div>
                <div className="w-14 h-14 border border-dashed border-core-warm/40 text-core-warm/30 rounded-full flex items-center justify-center font-mono text-[8px] uppercase tracking-tighter leading-none transform rotate-12">
                  CORE SEAL JGRP
                </div>
              </div>
            </div>
          </motion.div>

        </div>
      </div>
    </section>
  );
}
