'use client';

import { useState } from 'react';
import { MapPin, ChevronRight, ChevronLeft, ArrowRight } from 'lucide-react';
import Image from 'next/image';
import { motion, AnimatePresence } from 'framer-motion';

const EASE_OUT = [0.16, 1, 0.3, 1] as const;
const EASE_IN_OUT = [0.4, 0, 0.2, 1] as const;

// Animation variants
const fadeInUp = {
  hidden: { opacity: 0, y: 30 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.6, ease: EASE_OUT } }
};

export default function Services() {
  const [currentSlide, setCurrentSlide] = useState(0);

  const scrollToContact = () => {
    const element = document.getElementById('contact');
    if (element) {
      const offset = 80;
      const elementPosition = element.getBoundingClientRect().top;
      const offsetPosition = elementPosition + window.pageYOffset - offset;
      window.scrollTo({ top: offsetPosition, behavior: 'smooth' });
    }
  };

  const destinations = [
    {
      country: 'United Kingdom',
      flagCode: 'GB',
      city: 'London',
      description: 'Discover rich history combined with modern business excellence. A global financial center with unparalleled educational and career opportunities.',
    },
    {
      country: 'Cyprus',
      flagCode: 'CY',
      city: 'Nicosia & Limassol',
      description: 'Beautiful Mediterranean island with excellent business opportunities. Low taxes, strategic location, and high quality of life.',
    },
    {
      country: 'Lithuania',
      flagCode: 'LT',
      city: 'Vilnius',
      description: 'A rapidly growing Baltic hub for innovation and startups. Modern infrastructure, EU membership, and competitive living costs.',
    },
    {
      country: 'Croatia',
      flagCode: 'HR',
      city: 'Zagreb & Dubrovnik',
      description: 'Stunning Adriatic destination with emerging business prospects. Rich culture, beautiful coastlines, and access to EU markets.',
    },
    {
      country: 'Australia',
      flagCode: 'AU',
      city: 'Sydney & Melbourne',
      description: 'Embrace work-life balance in stunning landscapes. Outstanding quality of life, thriving economy, and beautiful natural environments.',
    },
    {
      country: 'United States',
      flagCode: 'US',
      city: 'New York & California',
      description: 'Land of opportunity with diverse career paths. Access to cutting-edge industries, prestigious universities, and limitless growth potential.',
    },
    {
      country: 'Georgia',
      flagCode: 'GE',
      city: 'Tbilisi',
      description: 'Emerging European destination with favorable business climate. Low taxes, rich culture, and growing expat community.',
    },
    {
      country: 'Romania',
      flagCode: 'RO',
      city: 'Bucharest & Cluj-Napoca',
      description: 'Dynamic EU member with thriving tech scene. Affordable living costs, rich history, and excellent connectivity.',
    },
    {
      country: 'Canada',
      flagCode: 'CA',
      city: 'Toronto & Vancouver',
      description: 'Welcoming multicultural society with strong economy. Excellent healthcare, education system, and immigration-friendly policies.',
    },
    {
      country: 'Germany',
      flagCode: 'DE',
      city: 'Berlin & Munich',
      description: 'Europe\'s economic powerhouse with innovation at its core. Strong industrial base, world-class education, and central European location.',
    },
    {
      country: 'Singapore',
      flagCode: 'SG',
      city: 'Singapore',
      description: 'Asia\'s premier business destination with world-class infrastructure. Safe, clean, and efficient with exceptional career opportunities.',
    },
    {
      country: 'New Zealand',
      flagCode: 'NZ',
      city: 'Auckland & Wellington',
      description: 'Stunning natural beauty with progressive society. High quality of life, strong work-life balance, and friendly immigration policies.',
    }
  ];

  const cardsPerSlide = 4;
  const totalSlides = Math.ceil(destinations.length / cardsPerSlide);

  const nextSlide = () => {
    setCurrentSlide((prev) => (prev + 1) % totalSlides);
  };

  const prevSlide = () => {
    setCurrentSlide((prev) => (prev - 1 + totalSlides) % totalSlides);
  };

  const getCurrentDestinations = () => {
    const start = currentSlide * cardsPerSlide;
    return destinations.slice(start, start + cardsPerSlide);
  };

  return (
    <section id="services" aria-labelledby="services-heading" className="py-12 md:py-16 px-4 sm:px-8 md:px-16 lg:px-20 xl:px-44 bg-gray-50">
      <div className="mx-auto">
        <motion.div
          className="text-center mb-8 md:mb-12"
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.5 }}
          variants={fadeInUp}
        >
          <h2 id="services-heading" className="text-2xl sm:text-3xl md:text-4xl font-bold text-[var(--primary-blue)] mb-4">
            Destinations We Offer
          </h2>
          <p className="text-sm sm:text-base md:text-lg lg:text-xl text-gray-600 mt-4 max-w-3xl mx-auto">
            We specialize in helping you relocate to premier destinations worldwide.
            Discover countries that offer exceptional opportunities for your career and lifestyle.
          </p>
        </motion.div>

        {/* Carousel Container */}
        <div className="relative px-0 sm:px-8 md:px-12 lg:px-20 pt-6 md:pt-10 pb-12 md:pb-20">
          <AnimatePresence mode="wait">
            <motion.div
              key={currentSlide}
              className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4 md:gap-6"
              initial={{ opacity: 0, x: 50 }}
              animate={{ opacity: 1, x: 0 }}
              exit={{ opacity: 0, x: -50 }}
              transition={{ duration: 0.3, ease: EASE_IN_OUT }}
            >
              {getCurrentDestinations().map((destination, index) => (
                <motion.div
                  key={`${destination.country}-${index}`}
                  className="bg-white rounded-xl overflow-hidden shadow-md hover:shadow-xl transition-all duration-300 group h-95 flex flex-col cursor-pointer"
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: index * 0.1, duration: 0.3 }}
                  whileHover={{ y: -8, transition: { duration: 0.2 } }}
                >
                  {/* Header with Flag and Country Name */}
                  <div className="bg-linear-to-br from-[#0E79BC] to-[var(--primary-blue)] p-3 sm:p-4 md:p-5 text-white">
                    <div className="flex items-center gap-2 sm:gap-3 md:gap-4 mb-2 sm:mb-3">
                      <div className="w-10 h-10 sm:w-12 sm:h-12 md:w-14 md:h-14 rounded-full overflow-hidden border-2 sm:border-3 border-white shadow-lg bg-white shrink-0">
                        <Image
                          src={`https://flagcdn.com/w160/${destination.flagCode.toLowerCase()}.png`}
                          alt={`${destination.country} flag`}
                          width={56}
                          height={56}
                          loading="lazy"
                          className="w-full h-full object-fit"
                        />
                      </div>
                      <h3 className="text-base sm:text-lg md:text-xl font-bold">{destination.country}</h3>
                    </div>
                    <p className="text-white/90 text-xs sm:text-sm font-medium flex items-center gap-1 sm:gap-2 ml-0 sm:ml-1">
                      <MapPin size={14} className="shrink-0 sm:w-3.75 sm:h-3.75" />
                      {destination.city}
                    </p>
                  </div>

                  {/* Content */}
                  <div className="p-3 sm:p-4 md:p-5 flex-1 flex flex-col">
                    <p className="text-gray-600 leading-relaxed text-xs sm:text-sm flex-1 mt-2 sm:mt-3">
                      {destination.description}
                    </p>

                    <motion.button
                      onClick={scrollToContact}
                      className="text-white font-semibold text-xs px-4 py-3 rounded-md flex items-center gap-2 bg-[#0E79BC] transition-all cursor-pointer hover:bg-[var(--primary-blue)] hover:shadow-md w-fit hover:gap-3"
                      whileHover={{ scale: 1.02 }}
                      whileTap={{ scale: 0.98 }}
                    >
                      Get Started
                      <ArrowRight size={16} />
                    </motion.button>
                  </div>
                </motion.div>
              ))}
            </motion.div>
          </AnimatePresence>

          {/* Navigation Arrows */}
          {totalSlides > 1 && (
            <>
              <motion.button
                onClick={prevSlide}
                className="absolute -left-2 sm:-left-4 top-1/2 -translate-y-1/2 z-10 bg-white text-[var(--primary-blue)] rounded-full p-2 sm:p-3 shadow-xl hover:shadow-2xl transition-all duration-300 group cursor-pointer"
                aria-label="Previous slide"
                whileHover={{ scale: 1.1, x: -4 }}
                whileTap={{ scale: 0.95 }}
              >
                <ChevronLeft size={20} className="sm:w-6 sm:h-6" strokeWidth={2.5} />
              </motion.button>
              <motion.button
                onClick={nextSlide}
                className="absolute -right-2 sm:-right-4 top-1/2 -translate-y-1/2 z-10 bg-white text-[var(--primary-blue)] rounded-full p-2 sm:p-3 shadow-xl hover:shadow-2xl transition-all duration-300 group cursor-pointer"
                aria-label="Next slide"
                whileHover={{ scale: 1.1, x: 4 }}
                whileTap={{ scale: 0.95 }}
              >
                <ChevronRight size={20} className="sm:w-6 sm:h-6" strokeWidth={2.5} />
              </motion.button>
            </>
          )}
        </div>

        {/* Slide Indicators */}
        {totalSlides > 1 && (
          <motion.div
            className="flex justify-center gap-2 mt-8"
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
            transition={{ delay: 0.3 }}
          >
            {Array.from({ length: totalSlides }).map((_, index) => (
              <button
                key={index}
                onClick={() => setCurrentSlide(index)}
                className={`h-2 rounded-full transition-all cursor-pointer ${index === currentSlide ? 'w-8 bg-[var(--primary-blue)]' : 'w-2 bg-gray-300 hover:bg-gray-400'
                  }`}
                aria-label={`Go to slide ${index + 1}`}
              />
            ))}
          </motion.div>
        )}
      </div>
    </section>
  );
}
