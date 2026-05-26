export interface GalleryItem {
  id: string;
  title: string;
  category: "Convoy" | "Route" | "Rally" | "Gathering" | "Night" | "Basecamp";
  description: string;
  imagePath: string;
  location: string;
  accentGradient: string; // Tailwinds colors for sophisticated background card fallback
}

export const galleryItems: GalleryItem[] = [
  {
    id: "gallery-road-convoy",
    title: "Scenic Road Convoy",
    category: "Convoy",
    description: "Formasi barisan rapi kendaraan tangguh melintasi jalur meliuk dan menikmati keseruan petualangan aspal beramai-ramai.",
    imagePath: "/gallery/road-convoy.webp",
    location: "Scenic Highway Pass",
    accentGradient: "from-amber-950/40 to-stone-900"
  },
  {
    id: "gallery-basecamp-meet",
    title: "Basecamp Vehicle Meet",
    category: "Basecamp",
    description: "Kumpulan mobil offroad dengan modifikasi tangguh siap tempur berjejer presisi di area utama CORE Basecamp.",
    imagePath: "/gallery/basecamp-carmeet.webp",
    location: "CORE Basecamp HQ",
    accentGradient: "from-amber-950/50 to-stone-900"
  },
  {
    id: "gallery-squad-gathering",
    title: "Squad Gathering",
    category: "Gathering",
    description: "Momen hangat penuh keakraban seluruh skuad penjelajah CORE berkumpul, merayakan kesuksesan ekspedisi lintas alam.",
    imagePath: "/gallery/kumpul.webp",
    location: "CORE Gathering Ground",
    accentGradient: "from-orange-950/40 to-stone-950"
  }
];
