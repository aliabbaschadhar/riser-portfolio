'use client';

import { ClipboardList, FileCheck, Plane, Search, UserCheck } from "lucide-react";
import type { CSSProperties } from 'react';
import { motion } from 'framer-motion';
import { colors } from '@/lib/colors';

const EASE_OUT = [0.16, 1, 0.3, 1] as const;

// Animation variants
const fadeInUp = {
  hidden: { opacity: 0, y: 30 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.6, ease: EASE_OUT } }
};

const staggerContainer = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: { staggerChildren: 0.15, delayChildren: 0.1 }
  }
};

const stepVariant = {
  hidden: { opacity: 0, y: 20, scale: 0.9 },
  visible: {
    opacity: 1,
    y: 0,
    scale: 1,
    transition: { duration: 0.5, ease: EASE_OUT }
  }
};

const themeVars = {
  '--primary-blue': colors.primary.DEFAULT,
  '--primary-blue-light': colors.primary.light,
  '--primary-blue-darker': colors.primary.darker,
} as CSSProperties;

export default function Process() {
  const steps = [
    {
      icon: ClipboardList,
      title: "Profile Assessment",
      desc: "We analyze your grades, budget, and career goals to find your best fit.",
    },
    {
      icon: Search,
      title: "University Selection",
      desc: "We shortlist top-tier universities where your acceptance probability is highest.",
    },
    {
      icon: FileCheck,
      title: "Documentation",
      desc: "Our team crafts your SOPs and polishes your application to perfection.",
    },
    {
      icon: UserCheck,
      title: "Visa Interview Prep",
      desc: "Mock interviews with former visa officers to ensure you pass with confidence.",
    },
    {
      icon: Plane,
      title: "Departure",
      desc: "From accommodation to flight bookings, we help you settle in.",
    },
  ];

  const brandText = "The Risers Consultancy";

  return (
    <section id="process" className="relative overflow-hidden" style={themeVars}>
      <div className="py-24 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-8 md:px-16 lg:px-20 xl:px-44 relative z-10">
          <motion.div
            className="mb-10 md:mb-16 md:text-center max-w-3xl mx-auto"
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, amount: 0.5 }}
            variants={fadeInUp}
          >
            <h2 className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-bold text-[var(--primary-blue)] mb-4 md:mb-6">Your Roadmap to Success</h2>
            <p className="text-sm sm:text-base md:text-lg text-gray-700">
              The study abroad process is complex. We break it down into five predictable, manageable steps.
            </p>
          </motion.div>

          <motion.div
            className="relative grid grid-cols-2 sm:grid-cols-3 md:grid-cols-5 gap-4 sm:gap-6 md:gap-8 mb-10 md:mb-16"
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, amount: 0.2 }}
            variants={staggerContainer}
          >
            <div className="hidden md:block absolute top-12 left-0 w-full h-0.5 bg-linear-to-r from-transparent via-[var(--primary-blue)]/20 to-transparent z-0"></div>

            {steps.map((step, idx) => (
              <motion.div
                key={idx}
                className="relative z-10 flex flex-col items-center text-center group"
                variants={stepVariant}
              >
                <motion.div
                  className="w-16 h-16 sm:w-20 sm:h-20 md:w-24 md:h-24 bg-white border border-gray-200 rounded-full flex items-center justify-center mb-3 sm:mb-4 md:mb-6 shadow-sm group-hover:border-[var(--primary-blue)] group-hover:shadow-lg transition-all duration-300"
                  whileHover={{ scale: 1.1, transition: { duration: 0.2 } }}
                >
                  <step.icon className="w-7 h-7 sm:w-8 sm:h-8 md:w-10 md:h-10 text-[var(--primary-blue)] group-hover:text-[var(--primary-blue-darker)] transition-colors" />
                </motion.div>
                <h3 className="text-sm sm:text-base md:text-lg font-bold text-gray-900 mb-2 md:mb-3">{step.title}</h3>
                <p className="text-xs sm:text-sm text-gray-600 leading-relaxed">{step.desc}</p>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </div>

      {/* Full Width Brand Ticker Line */}
      <div
        className="w-full overflow-hidden py-6 border-y border-white/20"
        style={{
          background: `linear-gradient(135deg, ${colors.primary.darker} 0%, ${colors.primary.DEFAULT} 50%, ${colors.primary.darker} 100%)`,
        }}
      >
        <div className="flex">
          <div
            className="flex whitespace-nowrap shrink-0 text-white"
            style={{
              animation: 'marquee 280s linear infinite',
            }}
          >
            {Array(100).fill(brandText).map((text, i) => (
              <span
                key={i}
                className="mx-8 text-2xl md:text-4xl font-extrabold tracking-wide"
              >
                {text}
              </span>
            ))}
          </div>
          <div
            className="flex whitespace-nowrap shrink-0 text-white"
            style={{
              animation: 'marquee 200s linear infinite',
            }}
            aria-hidden="true"
          >
            {Array(100).fill(brandText).map((text, i) => (
              <span
                key={i}
                className="mx-4 sm:mx-6 md:mx-8 text-lg sm:text-xl md:text-2xl lg:text-4xl font-extrabold tracking-wide"
              >
                {text}
              </span>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
