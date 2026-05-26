import { motion } from "motion/react";
import { SectionHeader } from "../ui/SectionHeader";
import { Heart, Compass, Shield, Eye } from "lucide-react";
import { Card, CardHeader, CardTitle, CardDescription } from "../ui/Card";

export function ValuesSection() {
  const values = [
    {
      title: "Respect the Route",
      description: "Menghargai setiap jalur lintasan alami, menjaga kelestarian lingkungan sekitar, serta bersikap ramah terhadap warga setempat yang kami temui selama perjalanan ekspedisi.",
      icon: Compass,
      accent: "border-t-2 border-t-amber-500"
    },
    {
      title: "No One Left Behind",
      description: "Setiap perjalanan dilakukan secara utuh dari titik start sampai finish. Apabila terjadi kendala mesin atau pecah ban di jalan, semua convoy berhenti demi memberikan bantuan gratis.",
      icon: Heart,
      accent: "border-t-2 border-t-red-500"
    },
    {
      title: "Drive with Discipline",
      description: "Kebebasan memacu kecepatan kendaraan tetap wajib diimbangi tanggung jawab moral, mematuhi instruksi ketua convoy, serta menjaga jarak aman antar bemper mobil offroad.",
      icon: Shield,
      accent: "border-t-2 border-t-orange-500"
    },
    {
      title: "Explore with Purpose",
      description: "Tidak sekadar membakar bahan bakar, setiap perjalanan rutin memiliki misi yang jelas: memetakan koordinat peta, mengumpulkan arsip galeri dokumentasi, dan mempererat silaturahmi.",
      icon: Eye,
      accent: "border-t-2 border-t-yellow-600"
    }
  ];

  return (
    <section className="py-24 bg-core-bg relative">
      {/* Visual background subtle grid highlights */}
      <div className="absolute top-0 right-1/4 w-80 h-80 bg-core-brown/5 rounded-full blur-[90px] pointer-events-none" />

      <div className="max-w-7xl mx-auto px-6">
        <SectionHeader
          badge="NILAI UTAMA"
          title="Prinsip & Nilai Komunitas"
          description="Aturan dasar tak tertulis yang dipegang teguh oleh setiap anggota CORE guna menjaga persaudaraan tetap erat di setiap medan lintasan."
        />

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {values.map((v, index) => {
            const IconComponent = v.icon;
            return (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 15 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
              >
                <Card className={`h-full ${v.accent} flex flex-col justify-between`}>
                  <div>
                    <CardHeader className="flex flex-row items-center gap-4">
                      <div className="p-3 bg-stone-900 border border-core-border rounded-lg text-core-warm">
                        <IconComponent className="w-5 h-5" />
                      </div>
                      <CardTitle className="text-xl font-display font-bold uppercase tracking-wider">
                        {v.title}
                      </CardTitle>
                    </CardHeader>
                    <CardDescription className="text-core-secondary font-sans leading-relaxed">
                      {v.description}
                    </CardDescription>
                  </div>
                  
                  {/* Visual bottom subtle branding */}
                  <div className="mt-6 flex items-center justify-end">
                    <span className="font-mono text-[9px] uppercase tracking-widest text-[#8B5E3C]/40">
                      CORE Value Code: 0{index + 1}
                    </span>
                  </div>
                </Card>
              </motion.div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
