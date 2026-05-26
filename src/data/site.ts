export interface SiteConfig {
  name: string;
  fullName: string;
  tagline: string;
  description: string;
  joinUrl: string;
  stats: { label: string; value: string }[];
  contact?: {
    title: string;
    description: string;
    representatives: { role: string; name: string }[];
    locationName: string;
    availability: string;
  };
}

export const siteConfig: SiteConfig = {
  name: "CORE",
  fullName: "Community Offroad Rally & Explore",
  tagline: "Menjelajah Jalur, Membangun Solidaritas, Merayakan Kebebasan Berkendara.",
  description: "CORE adalah wadah bagi para pecinta offroad, rally, convoy, dan eksplorasi alam. Kami hadir sebagai ruang berkumpul bagi mereka yang menyukai petualangan berkendara dan kebersamaan di setiap rute.",
  joinUrl: "https://discord.gg/cHttPts9FP",
  stats: [
    { label: "Penjelajahan Jalur", value: "45+ Trip" },
    { label: "Anggota Aktif", value: "30+ Rider" },
    { label: "Rute Terpetakan", value: "15+ Route" },
    { label: "Basecamp", value: "Argyle Road Fort Carson No. 5" }
  ]
};
