import * as React from "react";

interface CardProps extends React.HTMLAttributes<HTMLDivElement> {
  hoverEffect?: boolean;
  className?: string;
  children?: React.ReactNode;
}

export function Card({
  className = "",
  hoverEffect = true,
  children,
  ...props
}: CardProps) {
  return (
    <div
      className={`bg-core-card border border-core-border rounded-xl p-6 transition-all duration-300 relative overflow-hidden group ${
        hoverEffect
          ? "hover:border-core-warm/30 hover:shadow-xl hover:shadow-core-brown/5 hover:-translate-y-1"
          : ""
      } ${className}`}
      {...props}
    >
      {/* Decorative accent corner */}
      <div className="absolute top-0 right-0 w-16 h-16 bg-gradient-to-br from-core-brown/10 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300 pointer-events-none rounded-tr-xl" />
      {children}
    </div>
  );
}

export function CardHeader({
  className = "",
  children,
  ...props
}: React.HTMLAttributes<HTMLDivElement>) {
  return (
    <div className={`mb-4 flex flex-col gap-1.5 ${className}`} {...props}>
      {children}
    </div>
  );
}

export function CardTitle({
  className = "",
  children,
  ...props
}: React.HTMLAttributes<HTMLHeadingElement>) {
  return (
    <h3
      className={`text-lg font-display font-semibold text-core-primary tracking-tight ${className}`}
      {...props}
    >
      {children}
    </h3>
  );
}

export function CardDescription({
  className = "",
  children,
  ...props
}: React.HTMLAttributes<HTMLParagraphElement>) {
  return (
    <p className={`text-sm text-core-secondary leading-relaxed ${className}`} {...props}>
      {children}
    </p>
  );
}

export function CardContent({
  className = "",
  children,
  ...props
}: React.HTMLAttributes<HTMLDivElement>) {
  return <div className={`text-sm leading-relaxed ${className}`} {...props}>{children}</div>;
}
