import { motion } from "motion/react";
import { SectionHeader } from "../ui/SectionHeader";
import { Compass, Flame, ShieldAlert, Users } from "lucide-react";
import { Card, CardHeader, CardTitle, CardContent } from "../ui/Card";

export function AboutSection() {
  const pillars = [
    {
      title: "Offroad & Rally",
      description: "Menaklukkan rintangan alam berupa bukit galian, jalur tanah liat ekstrem, dan kubangan gurun pasir gersang dengan formasi solid.",
      icon: Flame,
      color: "text-amber-500",
    },
    {
      title: "Exploration Route",
      description: "Menemukan rute alam tersembunyi yang jarang dilalui warga umum dan memetakan jalur lintasan berkendara yang aman.",
      icon: Compass,
      color: "text-orange-400",
    },
    {
      title: "Community Convoy",
      description: "Berjalan berdampingan dengan disiplin lalu lintas, menjaga kecepatan konstan, dan menjaga citra positif otomotif di mata warga.",
      icon: Users,
      color: "text-amber-600",
    },
  ];

  return (
    <section id="about" className="py-24 bg-core-dark relative overflow-hidden">
      {/* Visual lighting background elements */}
      <div className="absolute top-1/2 left-0 -translate-y-1/2 w-96 h-96 bg-core-brown/5 rounded-full blur-[100px] pointer-events-none" />
      
      <div className="max-w-7xl mx-auto px-6 relative z-10">
        <SectionHeader
          badge="PROFIL UTAMA"
          title="Mengenal CORE Lebih Dekat"
          description="Komunitas pengendara tangguh pelintas batas yang dirancang untuk menyatukan jiwa petualang."
        />

        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
          {/* Text block section */}
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="lg:col-span-6 space-y-6"
          >
            <div className="space-y-4">
              <h3 className="text-2xl sm:text-3xl font-display font-semibold text-core-primary tracking-tight">
                Kebebasan di Setiap Hambatan Rute Jalan Raya & Hutan
              </h3>
              <p className="text-sm text-core-secondary leading-relaxed">
                <span className="font-semibold">CORE — Community Offroad Rally & Explore</span> lahir dari mimpi bersama para warga yang menggemari petualangan berkendara bebas di alam lepas. Kami bukan sekadar perkumpulan pemilik kendaraan bermesin besar; kami adalah keluarga yang diikat oleh debu tebing tinggi dan persahabatan di sepanjang rute.
              </p>
              <p className="text-sm text-core-secondary leading-relaxed">
                Kegiatan kami meliputi eksporasi jalur alam perbukitan curam, rally lintas pedesaan, convoy malam melintasi aspal lembab, berkumpul basecamp otomotif, hingga camping di tepi danau. Kami mengutamakan kepatuhan, ketertiban, dan disiplin tinggi di setiap rute.
              </p>
            </div>

            {/* In Character lore highlight note */}
            <div className="p-4 rounded-lg bg-core-card/50 border-l-2 border-core-warm text-xs italic text-core-primary/90 leading-relaxed">
              &ldquo;Jalur petualangan mungkin bergelombang dan penuh tebing curam, namun kekerabatan di dalam CORE senantiasa meratakan semua tantangan tersebut.&rdquo;
              <span className="block mt-1.5 font-mono text-[9px] uppercase tracking-wider text-core-warm not-italic font-bold">
                — Yuichi Hugosaki, CORE Leader
              </span>
            </div>
          </motion.div>

          {/* Pillars block section */}
          <div className="lg:col-span-6 grid grid-cols-1 md:grid-cols-3 lg:grid-cols-1 gap-6">
            {pillars.map((pillar, index) => {
              const IconComponent = pillar.icon;
              return (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.5, delay: index * 0.1 }}
                >
                  <Card className="flex flex-col sm:flex-row items-start gap-4 p-5">
                    <div className={`p-3 rounded-lg bg-stone-900 border border-core-border shrink-0 ${pillar.color}`}>
                      <IconComponent className="w-5 h-5" />
                    </div>
                    <div className="space-y-1">
                      <CardTitle className="text-base text-core-primary uppercase tracking-wider font-semibold">
                        {pillar.title}
                      </CardTitle>
                      <CardContent className="p-0 text-xs text-core-secondary leading-relaxed">
                        {pillar.description}
                      </CardContent>
                    </div>
                  </Card>
                </motion.div>
              );
            })}
          </div>
        </div>
      </div>
    </section>
  );
}
