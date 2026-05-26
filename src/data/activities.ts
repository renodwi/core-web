export interface Activity {
  id: string;
  title: string;
  location: string;
  category: "Exploration" | "Rally" | "Convoy" | "Gathering";
  description: string;
  iconName: string; // Lucide icon reference
  difficulty: "Easy" | "Medium" | "Challenging" | "Extreme";
  terrain: string;
  imagePath?: string; // Menambahkan path gambar opsional
}

export const activities: Activity[] = [
  {
    id: "mountain-trail",
    title: "Mountain Trail Exploration",
    location: "Mount Chiliad Route",
    category: "Exploration",
    description: "Eksplorasi jalur perbukitan curam dan berliku dengan formasi convoy ketat serta briefing keselamatan sebelum lepas landas menuju puncak.",
    iconName: "Mountain",
    difficulty: "Challenging",
    terrain: "Gravel & Mud Slide",
    imagePath: "/activities/mountain-trail.jpg" // Lokasi folder gambar: /public/activities/mountain-trail.jpg
  },
  {
    id: "desert-rally",
    title: "Desert Rally Session",
    location: "Bone County",
    category: "Rally",
    description: "Uji ketangkasan berkendara di gurun pasir tandus Bone County. Fokus pada kontrol traksi kemudi, navigasi kompas, dan kerja sama tim.",
    iconName: "Compass",
    difficulty: "Extreme",
    terrain: "Soft Sand & Rocky Jumps",
    imagePath: "/activities/desert-rally.jpg" // Lokasi folder gambar: /public/activities/desert-rally.jpg
  },
  {
    id: "night-convoy",
    title: "Night Convoy Ride",
    location: "Flint County",
    category: "Convoy",
    description: "Perjalanan malam melintasi rute aspal sepi dan jalan setapak Flint County. Menyuguhkan suasana tenang diiringi formasi lampu mobil yang presisi.",
    iconName: "Moon",
    difficulty: "Easy",
    terrain: "Foggy Asphalt & Forest Roads",
    imagePath: "/activities/night-convoy.jpg" // Lokasi folder gambar: /public/activities/night-convoy.jpg
  },
  {
    id: "basecamp-meet",
    title: "Basecamp Vehicle Meet",
    location: "CORE Basecamp",
    category: "Gathering",
    description: "Gathering rutin untuk memamerkan spesifikasi mobil offroad, perkenalan warga/anggota baru, santap malam bersama, dan diskusi strategis rute rilis berikutnya.",
    iconName: "Users",
    difficulty: "Easy",
    terrain: "Basecamp Grounds",
    imagePath: "/activities/basecamp-meet.jpg" // Lokasi folder gambar: /public/activities/basecamp-meet.jpg
  }
];
