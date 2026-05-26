import { motion } from "motion/react";
import { Check, Compass, Landmark, Terminal, Users } from "lucide-react";
import { siteConfig } from "../../data/site";
import { Button } from "../ui/Button";

export function JoinSection() {
  const reqs = [
    "Memiliki ketertarikan tinggi pada offroad, rally, atau eksplorasi rute alam bebas.",
    "Dapat mendengarkan dan mematuhi arahan koordinator kegiatan demi kelancaran bersama.",
    "Menjaga sikap, etika berkendara, serta mematuhi tata tertib selama convoy berlangsung.",
    "Mengutamakan keselamatan personil, kelestarian lingkungan, dan solidaritas tim.",
    "Wajib bersedia mengikuti briefing jalur dan regulasi keselamatan sebelum roda berputar."
  ];

  const handleScrollToContact = () => {
    const element = document.querySelector("#contact");
    if (element) {
      const offset = 80;
      const bodyRect = document.body.getBoundingClientRect().top;
      const elementRect = element.getBoundingClientRect().top;
      const elementPosition = elementRect - bodyRect;
      const offsetPosition = elementPosition - offset;
      window.scrollTo({
        top: offsetPosition,
        behavior: "smooth"
      });
    }
  };

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
              Siap Menjadi Bagian dari CORE?
            </h2>

            <p className="text-core-secondary text-sm leading-relaxed">
              Jika kamu memiliki ketertarikan tinggi pada dunia otomotif offroad, hasrat kuat untuk mengeksplor rute alam terbuka, serta komitmen tinggi menjaga keselamatan dan solidaritas kelompok, maka barisan kemudi CORE selalu terbuka menyambutmu.
            </p>

            <p className="text-core-secondary text-sm leading-relaxed">
              Kami menyaring pendaftar berdasarkan kontribusi perilaku yang baik saat berada di lapangan (In Character). Tidak peduli tipe kendaraan apa yang kamu miliki selama mobil tersebut tangguh melibas medan berlumpur atau berpasir, silakan ajukan nama keanggotaanmu.
            </p>

            <div className="flex flex-wrap gap-4 pt-4">
              <Button
                onClick={handleScrollToContact}
                variant="primary"
                size="md"
                className="font-bold flex items-center gap-2 group"
              >
                Ajukan Keanggotaan <Check className="w-4 h-4 group-hover:scale-110 transition-transform" />
              </Button>
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
