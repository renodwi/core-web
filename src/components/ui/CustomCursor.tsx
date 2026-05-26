import * as React from "react";
import { motion, AnimatePresence } from "motion/react";

interface ClickEffect {
  id: number;
  x: number;
  y: number;
}

export function CustomCursor() {
  const [position, setPosition] = React.useState({ x: 0, y: 0 });
  const [isHovered, setIsHovered] = React.useState(false);
  const [isClicking, setIsClicking] = React.useState(false);
  const [isVisible, setIsVisible] = React.useState(false);
  const [clickEffects, setClickEffects] = React.useState<ClickEffect[]>([]);

  // Prevent rendering on mobile or touch-only devices
  const [isTouchDevice, setIsTouchDevice] = React.useState(true);

  React.useEffect(() => {
    // Check if the device is a mouse-bound pointer device
    const checkViewport = () => {
      const hasTouch = "ontouchstart" in window || navigator.maxTouchPoints > 0;
      setIsTouchDevice(hasTouch);
    };

    checkViewport();

    // Mouse movement listeners
    const handleMouseMove = (e: MouseEvent) => {
      setPosition({ x: e.clientX, y: e.clientY });
      if (!isVisible) setIsVisible(true);
    };

    const handleMouseLeave = () => {
      setIsVisible(false);
    };

    const handleMouseEnter = () => {
      setIsVisible(true);
    };

    // Global click listener to spawn concentric contracting ripples
    const handleMouseDown = (e: MouseEvent) => {
      setIsClicking(true);
      // Spawn ripple centered precisely where the click happened
      const newEffect: ClickEffect = {
        id: Date.now() + Math.random(),
        x: e.clientX,
        y: e.clientY,
      };
      setClickEffects((prev) => [...prev, newEffect]);
    };

    const handleMouseUp = () => {
      setIsClicking(false);
    };

    // Generic hovering listeners for buttons, anchors, and elements with .cursor-pointer or role="button"
    const handleMouseOver = (e: MouseEvent) => {
      const target = e.target as HTMLElement;
      if (!target) return;

      const isClickable =
        target.tagName === "A" ||
        target.tagName === "BUTTON" ||
        target.closest("a") ||
        target.closest("button") ||
        target.closest(".group") ||
        window.getComputedStyle(target).cursor === "pointer" ||
        target.getAttribute("role") === "button";

      setIsHovered(!!isClickable);
    };

    window.addEventListener("mousemove", handleMouseMove);
    document.addEventListener("mouseleave", handleMouseLeave);
    document.addEventListener("mouseenter", handleMouseEnter);
    window.addEventListener("mousedown", handleMouseDown);
    window.addEventListener("mouseup", handleMouseUp);
    window.addEventListener("mouseover", handleMouseOver);

    // Apply global stylesheet style to hide default pointer cleanly on desktop if custom cursor is active
    if (!isTouchDevice) {
      document.body.classList.add("custom-cursor-active");
    }

    return () => {
      window.removeEventListener("mousemove", handleMouseMove);
      document.removeEventListener("mouseleave", handleMouseLeave);
      document.removeEventListener("mouseenter", handleMouseEnter);
      window.removeEventListener("mousedown", handleMouseDown);
      window.removeEventListener("mouseup", handleMouseUp);
      window.removeEventListener("mouseover", handleMouseOver);
      document.body.classList.remove("custom-cursor-active");
    };
  }, [isVisible, isTouchDevice]);

  // Clean up outdated click animations automatically to save performance
  React.useEffect(() => {
    if (clickEffects.length === 0) return;
    const timer = setTimeout(() => {
      setClickEffects((prev) => prev.slice(1));
    }, 1000); // match duration of contracting animation
    return () => clearTimeout(timer);
  }, [clickEffects]);

  if (isTouchDevice || !isVisible) return null;

  return (
    <div className="fixed inset-0 pointer-events-none z-[99999] overflow-hidden">
      {/* 1. Dynamic trailing outer circle with spring smoothing */}
      <motion.div
        className="absolute w-8 h-8 rounded-full border border-core-warm/60 -translate-x-1/2 -translate-y-1/2"
        animate={{
          x: position.x,
          y: position.y,
          scale: isClicking ? 0.75 : isHovered ? 1.5 : 1,
          borderColor: isHovered ? "rgba(192, 138, 90, 0.9)" : "rgba(192, 138, 90, 0.5)",
          backgroundColor: isHovered ? "rgba(192, 138, 90, 0.08)" : "rgba(192, 138, 90, 0)",
        }}
        transition={{
          type: "spring",
          damping: 24,
          stiffness: 280,
          mass: 0.4,
        }}
      />

      {/* 2. Instant responsive inside point dot */}
      <motion.div
        className="absolute w-2 h-2 bg-core-warm rounded-full -translate-x-1/2 -translate-y-1/2 shadow-lg shadow-core-warm/40"
        animate={{
          x: position.x,
          y: position.y,
          scale: isClicking ? 0.5 : isHovered ? 1.2 : 1,
          backgroundColor: isHovered ? "#F4E7D3" : "#C08A5A",
        }}
        transition={{
          type: "spring",
          damping: 35,
          stiffness: 700,
        }}
      />

      {/* 3. Click ripples animation layers - circles collapsing inside with gorgeous stagger */}
      <AnimatePresence>
        {clickEffects.map((effect) => (
          <React.Fragment key={effect.id}>
            {/* Outermost contracting ring */}
            <motion.div
              className="absolute rounded-full border border-core-warm/80 -translate-x-1/2 -translate-y-1/2"
              initial={{
                x: effect.x,
                y: effect.y,
                width: 90,
                height: 90,
                opacity: 0,
              }}
              animate={{
                width: 0,
                height: 0,
                opacity: [0, 0.9, 0],
              }}
              exit={{ opacity: 0 }}
              transition={{
                duration: 0.65,
                ease: "circOut",
              }}
            />

            {/* Middle contracting ring (staggered delay) */}
            <motion.div
              className="absolute rounded-full border-2 border-core-warm/60 -translate-x-1/2 -translate-y-1/2"
              initial={{
                x: effect.x,
                y: effect.y,
                width: 65,
                height: 65,
                opacity: 0,
              }}
              animate={{
                width: 0,
                height: 0,
                opacity: [0, 0.8, 0],
              }}
              exit={{ opacity: 0 }}
              transition={{
                duration: 0.5,
                delay: 0.1,
                ease: "circOut",
              }}
            />

            {/* Innermost contracting filled circle dot (collapsing) */}
            <motion.div
              className="absolute rounded-full bg-core-warm/25 -translate-x-1/2 -translate-y-1/2"
              initial={{
                x: effect.x,
                y: effect.y,
                width: 40,
                height: 40,
                opacity: 0,
              }}
              animate={{
                width: 0,
                height: 0,
                opacity: [0, 0.7, 0],
              }}
              exit={{ opacity: 0 }}
              transition={{
                duration: 0.45,
                delay: 0.18,
                ease: "backOut",
              }}
            />
          </React.Fragment>
        ))}
      </AnimatePresence>
    </div>
  );
}
