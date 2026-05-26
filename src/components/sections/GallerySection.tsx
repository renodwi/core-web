import * as React from "react";
import { motion, AnimatePresence } from "motion/react";
import { SectionHeader } from "../ui/SectionHeader";
import { galleryItems, GalleryItem } from "../../data/gallery";
import { Camera, MapPin, X, ArrowRight, Eye } from "lucide-react";

// Intelligent Image fallback component
interface ImageWithFallbackProps {
  src: string;
  alt: string;
  fallbackGradient: string;
  location: string;
  onClick: () => void;
}

function ImageWithFallback({
  src,
  alt,
  fallbackGradient,
  location,
  onClick
}: ImageWithFallbackProps) {
  const [hasError, setHasError] = React.useState(false);

  return (
    <div
      onClick={onClick}
      className="relative aspect-video rounded-xl overflow-hidden group cursor-pointer bg-core-dark border border-core-border hover:border-core-warm/40 transition-all duration-300"
    >
      {!hasError ? (
        <img
          src={src}
          alt={alt}
          referrerPolicy="no-referrer"
          onError={() => setHasError(true)}
          className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
        />
      ) : (
        // Premium Fallback Block in case image is missing in client workspace
        <div className={`w-full h-full bg-gradient-to-br ${fallbackGradient} flex flex-col justify-between p-5 relative select-none`}>
          {/* Topographic mock contour */}
          <div className="absolute inset-0 opacity-10 bg-[radial-gradient(ellipse_at_center,_var(--tw-gradient-stops))] from-amber-500 via-transparent to-transparent pointer-events-none" />
          
          <div className="flex items-center justify-end z-10 w-full">
            <Camera className="w-4 h-4 text-core-warm/60" />
          </div>

          <div className="z-10 text-center flex flex-col items-center justify-center py-4">
            <span className="font-display font-medium text-xs text-core-primary/80 group-hover:text-core-warm transition-colors duration-200">
              {alt}
            </span>
            <span className="font-mono text-[9px] text-stone-500 mt-1 uppercase tracking-wider block">
              Image Placeholder
            </span>
          </div>

          <div className="flex items-center gap-1.5 z-10 text-[10px] text-stone-400 font-mono">
            <MapPin className="w-3 h-3 text-core-brown/70" />
            <span className="truncate max-w-[150px]">{location || "Flint County"}</span>
          </div>
        </div>
      )}

      {/* Modern interactive overlay visible by default, fades out cleanly on hover to reveal the clean image */}
      {!hasError && (
        <div className="absolute inset-0 bg-gradient-to-t from-black/95 via-black/50 to-transparent opacity-100 group-hover:opacity-0 transition-all duration-300 flex flex-col justify-end p-5">
          <div className="translate-y-0 group-hover:translate-y-2 transition-transform duration-300 flex flex-col gap-2">
            <div className="flex items-center justify-end">
              <span className="inline-flex items-center gap-1 text-[10px] font-semibold text-core-primary/80">
                Lihat Detail <Eye className="w-3.5 h-3.5 text-core-warm" />
              </span>
            </div>
            <h4 className="font-display font-bold text-base text-core-primary">
              {alt}
            </h4>
            <div className="flex items-center gap-1 text-xs text-core-secondary font-mono">
              <MapPin className="w-3 h-3 text-core-brown" />
              <span>{location || "Flint County"}</span>
            </div>
          </div>
        </div>
      )}
    </div>
  );
}

export function GallerySection() {
  const [selectedItem, setSelectedItem] = React.useState<GalleryItem | null>(null);

  return (
    <section id="gallery" className="py-24 bg-core-bg relative">
      {/* Visual background lights */}
      <div className="absolute bottom-1/4 right-0 w-96 h-96 bg-core-brown/5 rounded-full blur-[100px] pointer-events-none" />

      <div className="max-w-7xl mx-auto px-6">
        <SectionHeader
          badge="GALERI & ARSIP"
          title="Dokumentasi Perjalanan"
          description="Arsip visual In Character yang membekukan momen-momen seru petualangan CORE menyusuri tantangan alam semesta."
        />

        {/* Gallery responsive Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
          <AnimatePresence mode="popLayout">
            {galleryItems.map((item) => (
              <motion.div
                layout
                key={item.id}
                initial={{ opacity: 0, scale: 0.95 }}
                animate={{ opacity: 1, scale: 1 }}
                exit={{ opacity: 0, scale: 0.95 }}
                transition={{ duration: 0.3 }}
              >
                <ImageWithFallback
                  src={item.imagePath}
                  alt={item.title}
                  location={item.location || "Flint County"}
                  fallbackGradient={item.accentGradient}
                  onClick={() => setSelectedItem(item)}
                />
              </motion.div>
            ))}
          </AnimatePresence>
        </div>

        {/* Fallback informational tip if folder is empty */}
        <div className="mt-8 text-center">
          <p className="text-[10.5px] font-mono text-stone-600 leading-relaxed max-w-lg mx-auto">
            *Ingin mengganti placeholder gambar di atas? Anda hanya perlu mengunggah file gambar dengan nama file terkait ke dalam folder <code className="text-core-warm bg-core-dark px-1.5 py-0.5 rounded-sm">/public/gallery/</code>.
          </p>
        </div>
      </div>

      {/* Lightbox pop up modal */}
      <AnimatePresence>
        {selectedItem && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="fixed inset-0 z-100 bg-black/95 backdrop-blur-sm flex items-center justify-center p-6"
            onClick={() => setSelectedItem(null)}
          >
            <motion.div
              initial={{ scale: 0.95 }}
              animate={{ scale: 1 }}
              exit={{ scale: 0.95 }}
              transition={{ type: "spring", damping: 25, stiffness: 350 }}
              className="relative bg-core-card border border-core-border rounded-xl max-w-4xl w-full overflow-hidden"
              onClick={(e) => e.stopPropagation()}
            >
              {/* Close Button */}
              <button
                onClick={() => setSelectedItem(null)}
                className="absolute top-4 right-4 z-50 p-2 rounded-full bg-black/70 hover:bg-black text-core-primary hover:text-core-warm transition-colors cursor-pointer"
                aria-label="Tutup Dialog"
              >
                <X className="w-5 h-5" />
              </button>

              {/* Grid content inside Lightbox */}
              <div className="grid grid-cols-1 md:grid-cols-12">
                {/* Visual side inside Modal */}
                <div className="md:col-span-7 bg-black min-h-[300px] flex items-center justify-center relative">
                  {/* Reuse image logic here with separate local trigger state */}
                  <LightboxImage src={selectedItem.imagePath} fallbackGradient={selectedItem.accentGradient} alt={selectedItem.title} />
                </div>

                {/* Info side inside modal */}
                <div className="md:col-span-5 p-8 flex flex-col justify-between">
                  <div className="space-y-4">
                    <h3 className="font-display font-extrabold text-2xl text-core-primary leading-tight">
                      {selectedItem.title}
                    </h3>

                    <div className="flex items-center gap-1.5 text-xs text-core-warm font-mono">
                      <MapPin className="w-4 h-4 text-core-brown" />
                      <span>{selectedItem.location || "Flint County GPS Area"}</span>
                    </div>

                    <p className="text-sm text-core-secondary leading-relaxed pt-2">
                      {selectedItem.description}
                    </p>
                  </div>

                  {/* Operational guidance details */}
                  <div className="pt-6 border-t border-stone-900 mt-6 md:mt-2">
                    <div className="flex justify-between items-center text-[10px] font-mono text-stone-500">
                      <span>MEMBER LEVEL REQ:</span>
                      <span className="text-core-primary font-bold">ANY ACTIVE RANK</span>
                    </div>
                  </div>
                </div>
              </div>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </section>
  );
}

// Lightbox specific subcomponent to properly capture error states inside lightbox
function LightboxImage({ src, fallbackGradient, alt }: { src: string; fallbackGradient: string; alt: string }) {
  const [hasError, setHasError] = React.useState(false);

  if (hasError) {
    return (
      <div className={`absolute inset-0 bg-gradient-to-br ${fallbackGradient} flex flex-col items-center justify-center p-8 text-center`}>
        <Camera className="w-12 h-12 text-core-warm/40 mb-3" />
        <span className="font-display font-bold text-lg text-core-primary/80 mb-1">{alt}</span>
        <span className="font-mono text-[9.5px] text-stone-500 uppercase tracking-widest">
          No File found: /public{src}
        </span>
      </div>
    );
  }

  return (
    <img
      src={src}
      alt={alt}
      referrerPolicy="no-referrer"
      onError={() => setHasError(true)}
      className="w-full h-full object-contain max-h-[80vh] md:max-h-[500px]"
    />
  );
}
