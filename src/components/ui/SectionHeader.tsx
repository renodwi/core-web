import { motion } from "motion/react";

interface SectionHeaderProps {
  badge?: string;
  title: string;
  description?: string;
  align?: "left" | "center";
}

export function SectionHeader({
  badge,
  title,
  description,
  align = "center",
}: SectionHeaderProps) {
  const containerAlignment = align === "center" ? "text-center items-center" : "text-left items-start";

  return (
    <motion.div
      initial={{ opacity: 0, y: 15 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: "-100px" }}
      transition={{ duration: 0.6 }}
      className={`flex flex-col gap-3 ${containerAlignment} max-w-2xl mb-12 ${
        align === "center" ? "mx-auto" : ""
      }`}
    >
      {badge && (
        <span className="inline-flex items-center gap-1.5 px-3 py-1 font-mono text-[10px] uppercase tracking-widest text-core-warm bg-core-brown/10 border border-core-brown/20 rounded-full">
          <span className="w-1 h-1 rounded-full bg-core-warm animate-pulse" />
          {badge}
        </span>
      )}
      
      <h2 className="text-3xl sm:text-4xl font-display font-bold tracking-tight text-core-primary">
        {title}
      </h2>
      
      {description && (
        <p className="text-core-secondary text-sm sm:text-base leading-relaxed">
          {description}
        </p>
      )}
    </motion.div>
  );
}
