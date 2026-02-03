"use client";

import Image from "next/image";
import { motion } from "framer-motion";

const EASE_OUT = [0.16, 1, 0.3, 1] as const;
const EASE_IN_OUT = [0.4, 0, 0.2, 1] as const;

type LoaderProps = {
  label?: string;
  fullscreen?: boolean;
};

export default function Loader({
  label = "Preparing your journey",
  fullscreen = false,
}: LoaderProps) {
  return (
    <motion.div
      role="status"
      aria-live="polite"
      aria-label={label}
      className={
        fullscreen
          ? "fixed inset-0 z-100 grid place-items-center bg-background/60 backdrop-blur-sm"
          : "grid place-items-center"
      }
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      transition={{ duration: 0.2, ease: EASE_OUT }}
    >
      <motion.div
        className="relative w-74 h-74 rounded-4xl border border-foreground/10 bg-background/70 shadow-2xl overflow-hidden"
        initial={{ opacity: 0, scale: 0.985 }}
        animate={{ opacity: 1, scale: 1 }}
        exit={{ opacity: 0, scale: 0.99 }}
        transition={{ duration: 0.25, ease: EASE_OUT }}
      >
        {/* Soft radial wash */}
        <div className="absolute inset-0 rounded-4xl bg-gradient-radial from-primary/10 via-transparent to-accent/10" />

        {/* Inner content */}
        <div className="relative h-full w-full px-8 pt-10 pb-8">
          <div className="relative mx-auto h-40 w-40">
            {/* Rings */}
            <div className="absolute inset-0 rounded-full border border-foreground/10" />
            <div className="absolute inset-4 rounded-full border border-foreground/10 border-dashed opacity-70" />
            <div className="absolute inset-9 rounded-full border border-foreground/10 border-dotted opacity-50" />

            {/* Horizontal flight path line */}
            <div className="absolute left-1/2 top-1/2 h-0.5 w-[200%] -translate-x-1/2 -translate-y-1/2">
              {/* Static line background */}
              <div className="absolute inset-0 bg-linear-to-r from-transparent via-foreground/15 to-transparent" />
              {/* Animated trail behind the plane (transform-only for smoothness) */}
              <div
                className="absolute top-0 h-full bg-linear-to-r from-transparent via-foreground/30 to-foreground/50 loader-progress"
                style={{ width: "32%" }}
              />
            </div>

            {/* Horizontally moving airplane */}
            <div className="absolute top-1/2 left-0 right-0">
              <motion.div
                className="absolute left-0 -translate-y-1/2"
                style={{ willChange: "transform" }}
                initial={{ x: -24 }}
                animate={{ x: [0, 112] }}
                transition={{ duration: 1.5, repeat: Infinity, ease: EASE_IN_OUT }}
              >
                <div className="relative">
                  {/* subtle glow behind plane */}
                  <motion.div
                    className="absolute -inset-3 rounded-full bg-primary/20 blur-xl"
                    style={{ willChange: "transform, opacity" }}
                    animate={{ scale: [0.92, 1.08, 0.92], opacity: [0.28, 0.55, 0.28] }}
                    transition={{ duration: 2, repeat: Infinity, ease: EASE_IN_OUT }}
                  />
                  <div className="relative grid place-items-center h-12 w-12 rounded-full bg-background/90 border border-foreground/10 shadow-lg">
                    <Image
                      src="/airplane.svg"
                      alt=""
                      width={34}
                      height={34}
                      className="text-primary rotate-90"
                      loading="lazy"
                    />
                  </div>
                </div>
              </motion.div>
            </div>

            {/* Accent dot - starting point */}
            <div className="absolute left-[5%] top-1/2 -translate-y-1/2">
              <motion.div
                style={{ willChange: "transform, opacity" }}
                animate={{ scale: [0.9, 1.1, 0.9], opacity: [0.5, 1, 0.5] }}
                transition={{ duration: 1.4, repeat: Infinity, ease: EASE_IN_OUT }}
              >
                <div className="h-3 w-3 rounded-full bg-primary/60 shadow-sm" />
              </motion.div>
            </div>

            {/* Accent dot - ending point */}
            <div className="absolute right-[5%] top-1/2 -translate-y-1/2">
              <motion.div
                style={{ willChange: "transform, opacity" }}
                animate={{ scale: [1.1, 0.9, 1.1], opacity: [1, 0.5, 1] }}
                transition={{ duration: 1.4, repeat: Infinity, ease: EASE_IN_OUT }}
              >
                <div className="h-2.5 w-2.5 rounded-full bg-foreground/40 shadow-sm" />
              </motion.div>
            </div>
          </div>

          <div className="mt-8 text-center">
            <p className="text-sm font-semibold text-foreground/80 tracking-tight">{label}</p>
            <div className="mt-2 h-1.5 w-28 mx-auto rounded-full bg-foreground/5 overflow-hidden">
              <motion.div
                className="h-full rounded-full bg-foreground/25"
                style={{ originX: 0, willChange: "transform" }}
                initial={{ scaleX: 0 }}
                animate={{ scaleX: [0, 1, 0] }}
                transition={{
                  duration: 2.5,
                  repeat: Infinity,
                  ease: EASE_IN_OUT,
                }}
              />
            </div>
          </div>
        </div>
      </motion.div>

      <span className="sr-only">{label}</span>
    </motion.div>
  );
}
