import * as React from "react";
import { motion } from "motion/react";

interface ButtonProps extends React.ButtonHTMLAttributes<HTMLButtonElement> {
  variant?: "primary" | "secondary" | "outline" | "ghost";
  size?: "sm" | "md" | "lg";
  children?: React.ReactNode;
  className?: string;
  onClick?: React.MouseEventHandler<HTMLButtonElement>;
  type?: "button" | "submit" | "reset";
  disabled?: boolean;
}

export function Button({
  className = "",
  variant = "primary",
  size = "md",
  children,
  ...props
}: ButtonProps) {
  const baseClasses =
    "inline-flex items-center justify-center font-display font-medium uppercase tracking-wide transition-colors duration-200 focus:outline-hidden focus:ring-2 focus:ring-core-warm/40 disabled:opacity-50 disabled:pointer-events-none rounded-md cursor-pointer";

  const sizeClasses = {
    sm: "px-4 py-1.5 text-xs",
    md: "px-6 py-2.5 text-sm",
    lg: "px-8 py-3.5 text-base",
  };

  const variantClasses = {
    primary:
      "bg-gradient-to-r from-core-brown to-core-warm text-core-primary shadow-lg shadow-core-brown/20 hover:from-core-warm hover:to-core-brown transition-all duration-300",
    secondary:
      "bg-core-card text-core-primary border border-core-border hover:bg-stone-800 hover:border-core-warm/30",
    outline:
      "border border-core-brown/40 bg-transparent text-core-primary hover:bg-core-brown/15 hover:border-core-warm",
    ghost:
      "bg-transparent text-core-secondary hover:text-core-primary hover:bg-white/5",
  };

  return (
    <motion.button
      whileTap={{ scale: 0.97 }}
      className={`${baseClasses} ${sizeClasses[size]} ${variantClasses[variant]} ${className}`}
      {...props}
    >
      {children}
    </motion.button>
  );
}
