'use client';

import { Users, Target, MapPin, Shield } from 'lucide-react';
import type { CSSProperties } from 'react';
import { motion } from 'framer-motion';
import { colors } from '@/lib/colors';

const EASE_OUT = [0.16, 1, 0.3, 1] as const;

// Animation variants
const fadeInUp = {
  hidden: { opacity: 0, y: 30 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.6, ease: EASE_OUT } }
};

const fadeInLeft = {
  hidden: { opacity: 0, x: -30 },
  visible: { opacity: 1, x: 0, transition: { duration: 0.6, ease: EASE_OUT } }
};

const fadeInRight = {
  hidden: { opacity: 0, x: 30 },
  visible: { opacity: 1, x: 0, transition: { duration: 0.6, ease: EASE_OUT } }
};

const staggerContainer = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: { staggerChildren: 0.1, delayChildren: 0.1 }
  }
};

const themeVars = {
  '--primary-blue': colors.primary.DEFAULT,
  '--primary-blue-light': colors.primary.light,
  '--primary-blue-darker': colors.primary.darker,
} as CSSProperties;

export default function About() {
  const services = [
    { title: 'Visa Consultation', icon: MapPin },
    { title: 'Document Processing', icon: Shield },
    { title: 'Expert Team', icon: Users },
    { title: '99% Approval Rate', icon: Target },
  ];

  return (
    <section
      id="about"
      aria-labelledby="about-heading"
      className="py-12 md:py-16 px-4 sm:px-8 md:px-16 lg:px-20 xl:px-44 bg-linear-to-b from-gray-50 to-white scroll-mt-16"
      style={themeVars}
    >
      <div className="mx-auto">

        {/* Header */}
        <motion.div
          className="text-center mb-10 md:mb-14"
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.5 }}
          variants={fadeInUp}
        >
          <h2 id="about-heading" className="text-2xl sm:text-3xl md:text-4xl font-bold text-primary mb-4 md:mb-5">
            About The Risers Consultancy
          </h2>
          <div className="w-20 md:w-24 h-1 bg-primary mx-auto mb-4 md:mb-5"></div>
          <p className="text-base sm:text-lg md:text-xl text-gray-600 max-w-3xl mx-auto leading-relaxed">
            Your trusted partner in making global relocation dreams a reality
          </p>
        </motion.div>

        {/* Main Content Area */}
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-6 md:gap-8">

          {/* Left Column - Services & Stats */}
          <motion.div
            className="lg:col-span-1 grid grid-cols-2 lg:grid-cols-1 gap-3 md:gap-4"
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, amount: 0.2 }}
            variants={staggerContainer}
          >
            {services.map((service, index) => {
              const Icon = service.icon;

              return (
                <motion.div
                  key={index}
                  className="bg-white rounded-xl flex items-center p-3 sm:p-5 shadow-lg hover:shadow-2xl transition-all duration-300 hover:scale-105 hover:-translate-y-1 border-l-4 border-r-4 border-l-primary border-r-primary border border-gray-100"
                  variants={fadeInLeft}
                  whileHover={{ y: -4, transition: { duration: 0.2 } }}
                >
                  <div className="flex flex-col sm:flex-row items-center gap-2 sm:gap-3 w-full">
                    <div className="w-10 h-10 sm:w-12 sm:h-12 bg-linear-to-br from-gray-100 to-gray-200 rounded-lg flex items-center justify-center shadow-sm shrink-0">
                      <Icon size={20} className="text-black sm:w-5.5 sm:h-5.5" strokeWidth={2.5} />
                    </div>
                    <h3 className="text-sm sm:text-lg md:text-xl lg:text-2xl font-bold text-gray-900 text-center sm:text-left">{service.title}</h3>
                  </div>
                </motion.div>
              );
            })}
          </motion.div>

          {/* Right Column - Description */}
          <motion.div
            className="lg:col-span-2 bg-white rounded-2xl md:rounded-3xl p-5 sm:p-8 md:p-10 shadow-lg hover:shadow-2xl transition-all duration-300 border-l-4 border-r-4 border-l-primary border-r-primary border border-gray-100"
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, amount: 0.2 }}
            variants={fadeInRight}
          >
            <div className="mb-8">
              <motion.div
                className="flex items-center gap-3 md:gap-4 mb-4 md:mb-6"
                variants={fadeInUp}
              >
                <div className="w-1.5 md:w-2 h-10 md:h-12 bg-primary rounded-full"></div>
                <h3 className="text-xl sm:text-2xl md:text-3xl font-bold text-gray-900">
                  Leading Immigration Consultancy Since 2021
                </h3>
              </motion.div>
              <motion.p
                className="text-sm sm:text-base md:text-lg text-gray-600 leading-relaxed mb-3 md:mb-5"
                variants={fadeInUp}
              >
                The Risers Consultancy is a premier immigration and visa consultancy firm dedicated to helping
                individuals and families achieve their dreams of living, working, or studying abroad. With
                over a decade of experience, we have successfully guided thousands of clients through complex
                immigration processes.
              </motion.p>
              <motion.p
                className="text-sm sm:text-base text-gray-600 leading-relaxed mb-3 md:mb-5"
                variants={fadeInUp}
              >
                Our team of certified immigration consultants brings extensive knowledge of visa regulations,
                documentation requirements, and application procedures across multiple countries. We pride
                ourselves on our personalized approach, ensuring each client receives tailored guidance based
                on their unique circumstances and goals.
              </motion.p>
              <motion.p
                className="text-sm sm:text-base text-gray-600 leading-relaxed"
                variants={fadeInUp}
              >
                From initial consultation to post-arrival support, we are committed to making your relocation
                journey smooth, stress-free, and successful. Trust The Risers Consultancy to turn your international aspirations
                into reality.
              </motion.p>
            </div>
          </motion.div>
        </div>

      </div>
    </section>
  );
}
