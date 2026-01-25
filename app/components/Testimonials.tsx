'use client';

import { motion } from 'framer-motion';
import Image from 'next/image';

const EASE_OUT = [0.16, 1, 0.3, 1] as const;

// Animation variants
const fadeInUp = {
  hidden: { opacity: 0, y: 30 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.6, ease: EASE_OUT } }
};

export default function Testimonials() {
  const testimonials = [
    '/images/successcases/1.jpg',
    '/images/successcases/WhatsApp Image 2025-03-24 at 3.43.14 PM (1).jpeg',
    '/images/successcases/2.jpg',
    '/images/successcases/WhatsApp Image 2025-03-24 at 3.43.14 PM (2).jpeg',
    '/images/successcases/3.jpg',
    '/images/successcases/WhatsApp Image 2025-03-24 at 3.43.14 PM.jpeg',
    '/images/successcases/4.jpg',
    '/images/successcases/WhatsApp Image 2025-03-24 at 3.43.16 PM.jpeg',
    '/images/successcases/5.jpg',
    '/images/successcases/WhatsApp Image 2025-03-24 at 3.43.17 PM (1).jpeg',
    '/images/successcases/6.jpg',
    '/images/successcases/WhatsApp Image 2025-03-24 at 3.43.17 PM.jpeg',
    '/images/successcases/7.jpg',
    '/images/successcases/WhatsApp Image 2025-03-24 at 3.43.18 PM (1).jpeg',
    '/images/successcases/8.jpg',
    '/images/successcases/WhatsApp Image 2025-03-24 at 3.43.18 PM (2).jpeg',
    '/images/successcases/9.jpg',
    '/images/successcases/WhatsApp Image 2025-03-24 at 3.43.18 PM.jpeg',
    '/images/successcases/10.jpg',
    '/images/successcases/WhatsApp Image 2025-03-24 at 3.43.19 PM.jpeg',
    '/images/successcases/11.jpg',
    '/images/successcases/12.jpg',
  ];

  const TestimonialCard = ({ image, size = 'normal' }: { image: string, size?: 'small' | 'normal' | 'large' }) => {
    const sizeClasses = {
      small: 'w-56 sm:w-64 h-64 sm:h-72',
      normal: 'w-64 sm:w-72 h-72 sm:h-80',
      large: 'w-72 sm:w-80 h-80 sm:h-88'
    };

    // Check if image is a numbered image (1.jpg, 2.jpg, etc.)
    const isNumberedImage = /\/\d+\.jpg$/.test(image);

    return (
      <div className={`shrink-0 ${sizeClasses[size]} group`}>
        <div className="relative h-full bg-white rounded-3xl shadow-xl hover:shadow-2xl transition-all duration-500 overflow-hidden hover:-translate-y-2">
          {/* Full Image with Gradient Overlay */}
          <div className="relative w-full h-full">
            <Image
              src={image}
              alt="Success case"
              fill
              className={`object-cover ${isNumberedImage ? 'scale-200 group-hover:scale-[2.3]' : 'scale-100 group-hover:scale-125'} transition-transform duration-700`}
            />
          </div>

          {/* Hover Border Effect */}
          <div className="absolute inset-0 rounded-3xl border-4 border-white opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
        </div>
      </div>
    );
  };

  // Create 2 rows with images distributed evenly
  const row1 = testimonials.slice(0, 11);
  const row2 = testimonials.slice(11);

  return (
    <section id="testimonials" className="w-screen relative overflow-hidden bg-linear-to-b from-gray-50 via-white to-gray-50 py-6 md:py-10">
      {/* Background Decoration */}
      <div className="absolute top-32 left-20 w-96 h-96 bg-[#084B73]/5 rounded-full blur-3xl pointer-events-none"></div>
      <div className="absolute bottom-32 right-20 w-96 h-96 bg-[#081F30]/5 rounded-full blur-3xl pointer-events-none"></div>

      {/* Header */}
      <motion.div
        className="px-4 sm:px-8 md:px-16 lg:px-20 xl:px-44 relative z-10 mb-12 md:mb-16"
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, amount: 0.5 }}
        variants={fadeInUp}
      >
        <div className="text-center">
          <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold text-[#084B73] mb-4 md:mb-5">
            Success Stories
          </h2>
          <div className="w-20 md:w-24 h-1 bg-[#084B73] mx-auto mb-4 md:mb-5"></div>          
        </div>
      </motion.div>

      {/* 3-row Horizontal Scrolling Grid */}
      <motion.div
        className="relative space-y-6 md:space-y-8"
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        viewport={{ once: true }}
        transition={{ duration: 0.8, delay: 0.2 }}
      >
        {/* Row 1 - Scroll Right - Normal Size */}
        <div className="overflow-hidden">
          <div className="flex gap-5 animate-scroll-right">
            {[...row1, ...row1, ...row1].map((image, idx) => (
              <TestimonialCard key={idx} image={image} size="normal" />
            ))}
          </div>
        </div>

        {/* Row 2 - Scroll Left - Large Size */}
        <div className="overflow-hidden">
          <div className="flex gap-5 animate-scroll-left">
            {[...row2, ...row2, ...row2].map((image, idx) => (
              <TestimonialCard key={idx} image={image} size="large" />
            ))}
          </div>
        </div>

        {/* Gradient Overlays - Left and Right Edges */}
        <div className="absolute top-0 left-0 w-32 h-full bg-linear-to-r from-gray-50 via-white/60 to-transparent pointer-events-none z-10"></div>
        <div className="absolute top-0 right-0 w-32 h-full bg-linear-to-l from-gray-50 via-white/60 to-transparent pointer-events-none z-10"></div>
      </motion.div>
    </section>
  );
}
