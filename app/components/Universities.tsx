'use client';

import { GraduationCap, Globe } from 'lucide-react';
import { motion } from 'framer-motion';

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
    transition: { staggerChildren: 0.1, delayChildren: 0.1 }
  }
};

const statVariant = {
  hidden: { opacity: 0, y: 20, scale: 0.95 },
  visible: {
    opacity: 1,
    y: 0,
    scale: 1,
    transition: { duration: 0.4, ease: EASE_OUT }
  }
};

export default function Universities() {
  // Flattened list of all universities with country info
  const allUniversities = [
    { name: 'University of Oxford', country: 'UK' },
    { name: 'University of Cambridge', country: 'UK' },
    { name: 'Imperial College London', country: 'UK' },
    { name: 'University College London', country: 'UK' },
    { name: 'University of Melbourne', country: 'Australia' },
    { name: 'Australian National University', country: 'Australia' },
    { name: 'University of Sydney', country: 'Australia' },
    { name: 'University of Queensland', country: 'Australia' },
    { name: 'University of Toronto', country: 'Canada' },
    { name: 'McGill University', country: 'Canada' },
    { name: 'University of British Columbia', country: 'Canada' },
    { name: 'University of Alberta', country: 'Canada' },
    { name: 'MIT', country: 'USA' },
    { name: 'Stanford University', country: 'USA' },
    { name: 'Harvard University', country: 'USA' },
    { name: 'Princeton University', country: 'USA' },
  ];

  // Duplicate the array for seamless infinite scroll
  const duplicatedUniversities = [...allUniversities, ...allUniversities];

  return (
    <section id="universities" className="py-12 md:py-16 px-4 sm:px-8 md:px-16 lg:px-20 xl:px-44 bg-white overflow-hidden">
      <div className="mx-auto">
        <motion.div
          className="text-center mb-10 md:mb-14"
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.5 }}
          variants={fadeInUp}
        >
          <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold text-[#084B73] mb-4 md:mb-5">
            Partner Universities
          </h2>
          <div className="w-20 md:w-24 h-1 bg-[#084B73] mx-auto mb-4 md:mb-5"></div>
          <p className="text-base sm:text-lg md:text-xl text-gray-600 max-w-3xl mx-auto leading-relaxed">
            We have partnerships with world-renowned universities to help you achieve your educational goals
          </p>
        </motion.div>

        {/* Auto-scrolling University Slider */}
        <motion.div
          className="relative"
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.2 }}
        >
          <div className="overflow-hidden">
            <div className="flex animate-scroll">
              {duplicatedUniversities.map((uni, index) => (
                <div
                  key={index}
                  className="shrink-0 mx-2 sm:mx-4 bg-linear-to-br from-gray-50 to-white rounded-xl sm:rounded-2xl p-4 sm:p-6 shadow-lg hover:shadow-xl transition-all duration-300 border border-gray-200 w-64 sm:w-72 md:w-80 group"
                >
                  <div className="flex items-center gap-4 mb-4">
                    <div className="w-12 h-12 bg-blue-100 rounded-lg flex items-center justify-center shrink-0">
                      <Globe size={24} className="text-[#084B73]" strokeWidth={2} />
                    </div>
                    <div className="w-12 h-12 bg-[#084B73] rounded-lg flex items-center justify-center shrink-0 group-hover:scale-110 transition-transform">
                      <GraduationCap size={24} className="text-white" strokeWidth={2.5} />
                    </div>
                  </div>
                  <h3 className="text-lg font-bold text-gray-900 mb-2 group-hover:text-[#084B73] transition-colors">
                    {uni.name}
                  </h3>
                  <p className="text-sm text-gray-600">{uni.country}</p>
                </div>
              ))}
            </div>
          </div>

          {/* Gradient Overlays */}
          <div className="absolute top-0 left-0 w-32 h-full bg-linear-to-r from-white to-transparent pointer-events-none"></div>
          <div className="absolute top-0 right-0 w-32 h-full bg-linear-to-l from-white to-transparent pointer-events-none"></div>
        </motion.div>

        {/* Stats */}
        <motion.div
          className="mt-10 md:mt-16 grid grid-cols-2 md:grid-cols-4 gap-3 sm:gap-4 md:gap-6 text-center"
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.3 }}
          variants={staggerContainer}
        >
          <motion.div
            className="p-4 md:p-6 bg-gradient-to-br from-gray-50 to-white rounded-xl shadow-md"
            variants={statVariant}
            whileHover={{ y: -4, transition: { duration: 0.2 } }}
          >
            <div className="text-2xl sm:text-3xl md:text-4xl font-bold text-[#084B73] mb-1 md:mb-2">16+</div>
            <div className="text-xs sm:text-sm md:text-base text-gray-600 font-medium">Partner Universities</div>
          </motion.div>
          <motion.div
            className="p-4 md:p-6 bg-gradient-to-br from-gray-50 to-white rounded-xl shadow-md"
            variants={statVariant}
            whileHover={{ y: -4, transition: { duration: 0.2 } }}
          >
            <div className="text-2xl sm:text-3xl md:text-4xl font-bold text-[#084B73] mb-1 md:mb-2">4</div>
            <div className="text-xs sm:text-sm md:text-base text-gray-600 font-medium">Countries</div>
          </motion.div>
          <motion.div
            className="p-4 md:p-6 bg-gradient-to-br from-gray-50 to-white rounded-xl shadow-md"
            variants={statVariant}
            whileHover={{ y: -4, transition: { duration: 0.2 } }}
          >
            <div className="text-2xl sm:text-3xl md:text-4xl font-bold text-[#084B73] mb-1 md:mb-2">95%</div>
            <div className="text-xs sm:text-sm md:text-base text-gray-600 font-medium">Acceptance Rate</div>
          </motion.div>
          <motion.div
            className="p-4 md:p-6 bg-gradient-to-br from-gray-50 to-white rounded-xl shadow-md"
            variants={statVariant}
            whileHover={{ y: -4, transition: { duration: 0.2 } }}
          >
            <div className="text-2xl sm:text-3xl md:text-4xl font-bold text-[#084B73] mb-1 md:mb-2">1000+</div>
            <div className="text-xs sm:text-sm md:text-base text-gray-600 font-medium">Students Placed</div>
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
}
