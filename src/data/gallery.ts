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
    id: "gallery-convoy-01",
    title: "Offroad Convoy",
    category: "Convoy",
    description: "Formasi barisan mobil tangguh melintasi rute perbatasan hutan.",
    imagePath: "/gallery/convoy-01.jpg",
    location: "Whetstone Forest",
    accentGradient: "from-amber-950/40 to-stone-900"
  },
  {
    id: "gallery-mountain-route",
    title: "Mountain Route",
    category: "Route",
    description: "Pendakian ekstrem tebing terjal berkabut tebal di sore hari.",
    imagePath: "/gallery/mountain-route.jpg",
    location: "Mount Chiliad Peaks",
    accentGradient: "from-orange-950/40 to-stone-900"
  },
  {
    id: "gallery-desert-trail",
    title: "Desert Trail Expedition",
    category: "Rally",
    description: "Aksi manuver meluncur bebas di tanjakan gundukan gurun gersang.",
    imagePath: "/gallery/desert-trail.jpg",
    location: "Bone County Desert",
    accentGradient: "from-amber-900/30 to-stone-900"
  },
  {
    id: "gallery-basecamp-meet",
    title: "Basecamp Vehicle Meet",
    location: "CORE Basecamp",
    category: "Gathering",
    description: "Barisan rapi kendaraan offroad siap tempur dengan kap mesin terbuka.",
    imagePath: "/gallery/base-carmeet.png",
    accentGradient: "from-amber-950/50 to-stone-900"
  },
  {
    id: "gallery-night-ride",
    title: "Night Ride Crew",
    category: "Night",
    description: "Eksotisme siluet mobil dengan sorotan lampu halogen menembus kegelapan.",
    imagePath: "/gallery/night-ride.jpg",
    location: "Back o' Beyond Routes",
    accentGradient: "from-stone-900 to-black"
  },
  {
    id: "gallery-team-photo",
    title: "Team Photo / Basecamp Gathering",
    category: "Basecamp",
    description: "Foto bersama seluruh skuad penjelajah CORE sebelum briefing jalur lintas utara.",
    imagePath: "/gallery/team-photo.jpg",
    location: "CORE Headquarters",
    accentGradient: "from-amber-900/40 to-stone-950"
  }
];
