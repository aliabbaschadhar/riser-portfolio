'use client';

import { motion } from 'framer-motion';
import { useEffect, useState } from 'react';

const EASE_IN_OUT = [0.4, 0, 0.2, 1] as const;

interface PlaneProps {
  size: number;
  color: string;
  topPosition: string;
  delay: number;
  duration: number;
  opacity: number;
  isHovered: boolean;
}

export default function Plane({
  size,
  color,
  topPosition,
  delay,
  duration,
  opacity,
  isHovered,
}: PlaneProps) {
  const [targetX, setTargetX] = useState(0);
  const initialX = -size * 24; // Start off-screen to the left

  useEffect(() => {
    // Calculate target position based on viewport width
    const updateTarget = () => {
      setTargetX(window.innerWidth - (size * 16) - 20);
    };
    updateTarget();
    window.addEventListener('resize', updateTarget);
    return () => window.removeEventListener('resize', updateTarget);
  }, [size]);

  return (
    <motion.svg
      className={`absolute rotate-90 ${color}`}
      style={{
        top: topPosition,
        width: `${size}rem`,
        height: `${size}rem`,
        left: 0,
      }}
      animate={{
        x: isHovered ? targetX : initialX,
        opacity: isHovered ? opacity : 0
      }}
      transition={{
        duration: duration,
        delay: isHovered ? delay / 1000 : 0,
        ease: EASE_IN_OUT
      }}
      fill="currentColor"
      viewBox="0 0 24 24"
    >
      <path d="M21 16v-2l-8-5V3.5c0-.83-.67-1.5-1.5-1.5S10 2.67 10 3.5V9l-8 5v2l8-2.5V19l-2 1.5V22l3.5-1 3.5 1v-1.5L13 19v-5.5l8 2.5z" />
    </motion.svg>
  );
}
