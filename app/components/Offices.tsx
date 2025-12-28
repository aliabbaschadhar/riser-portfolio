'use client';

import { MapPin, Phone, Mail, Globe, Clock, Building2 } from 'lucide-react';
import { motion } from 'framer-motion';

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

const cardVariant = {
  hidden: { opacity: 0, y: 20, scale: 0.95 },
  visible: {
    opacity: 1,
    y: 0,
    scale: 1,
    transition: { duration: 0.4, ease: EASE_OUT }
  }
};

export default function Offices() {
  const headquarters = {
    city: 'Hafizabad',
    country: 'Pakistan',
    address: 'Sunny Garden Usama Block, Sargodha Road, Hafizabad, Pakistan',
    phone: '+92 54 1234 5678',
    email: 'hafizabad@therisers.com',
    hours: 'Mon-Fri: 9:00 AM - 6:00 PM PKT'
  };

  const branchOffices = [
    {
      city: 'Faisalabad',
      country: 'Pakistan',
      phone: '+92 41 555-0198',
      email: 'faisalabad@therisers.com',
    },
    {
      city: 'Sargodha',
      country: 'Pakistan',
      phone: '+92 30 1234 5678',
      email: 'sargodha@therisers.com',
    },
    {
      city: 'Jaranwala',
      country: 'Pakistan',
      phone: '+92 30 1234 5678',
      email: 'jaranwala@therisers.com',
    },
  ];

  return (
    <section id="offices" className="py-12 md:py-16 px-4 sm:px-8 md:px-16 lg:px-20 xl:px-44 bg-linear-to-b from-gray-50 to-white">
      <div className="mx-auto">
        <motion.div
          className="text-center mb-10 md:mb-14"
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.5 }}
          variants={fadeInUp}
        >
          <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold text-[#084B73] mb-4 md:mb-5">
            Our Global Offices
          </h2>
          <div className="w-20 md:w-24 h-1 bg-[#084B73] mx-auto mb-4 md:mb-5"></div>
          <p className="text-base sm:text-lg md:text-xl text-gray-600 max-w-3xl mx-auto leading-relaxed">
            With offices around the world, we&apos;re always close to you wherever you are
          </p>
        </motion.div>

        {/* Headquarters */}
        <div className="mb-12">
          <motion.div
            className="flex items-center gap-2 mb-6"
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, amount: 0.5 }}
            variants={fadeInUp}
          >
            <Globe className="text-[#084B73]" size={24} strokeWidth={2.5} />
            <h3 className="text-2xl font-bold text-gray-900">Main Office</h3>
          </motion.div>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4 md:gap-6 mb-6">
            {/* Map */}
            <motion.div
              className="rounded-xl md:rounded-2xl overflow-hidden shadow-lg h-62.5 sm:h-75 md:h-100"
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true, amount: 0.3 }}
              variants={fadeInLeft}
            >
              <iframe
                src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3377.8261747843625!2d73.68376607535946!3d32.172429773859624!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x392173e1c5f1e1a7%3A0x5e8c8c8c8c8c8c8c!2sHafizabad%2C%20Punjab%2C%20Pakistan!5e0!3m2!1sen!2sus!4v1735234567890!5m2!1sen!2sus"
                width="100%"
                height="100%"
                style={{ border: 0 }}
                allowFullScreen
                loading="lazy"
                referrerPolicy="no-referrer-when-downgrade"
                title="Headquarters Location Map"
              ></iframe>
            </motion.div>
            {/* Office Details */}
            <motion.div
              className="bg-linear-to-br from-[#084B73] to-[#081F30] rounded-xl md:rounded-2xl p-5 sm:p-6 md:p-8 text-white shadow-2xl"
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true, amount: 0.3 }}
              variants={fadeInRight}
            >
              <div className="flex items-center gap-3 md:gap-4 mb-6 md:mb-8">
                <div className="w-12 h-12 md:w-16 md:h-16 bg-white/20 rounded-full flex items-center justify-center shrink-0">
                  <Building2 size={24} className="md:w-8 md:h-8 text-white" strokeWidth={2} />
                </div>
                <div>
                  <h4 className="text-xl sm:text-2xl md:text-3xl font-bold mb-1">{headquarters.city}</h4>
                  <p className="text-blue-100 text-sm md:text-base">{headquarters.country}</p>
                </div>
              </div>

              <div className="space-y-4 md:space-y-5">
                <div className="flex items-start gap-3">
                  <MapPin size={18} className="sm:w-5 sm:h-5 shrink-0 mt-0.5" strokeWidth={2} />
                  <p className="text-xs sm:text-sm md:text-base text-blue-50 leading-relaxed">{headquarters.address}</p>
                </div>

                <div className="flex items-start gap-3">
                  <Phone size={18} className="sm:w-5 sm:h-5 shrink-0 mt-0.5" strokeWidth={2} />
                  <a href={`tel:${headquarters.phone}`} className="text-xs sm:text-sm md:text-base text-blue-50 hover:text-white transition-colors">
                    {headquarters.phone}
                  </a>
                </div>

                <div className="flex items-start gap-3">
                  <Mail size={18} className="sm:w-5 sm:h-5 shrink-0 mt-0.5" strokeWidth={2} />
                  <a href={`mailto:${headquarters.email}`} className="text-xs sm:text-sm md:text-base text-blue-50 hover:text-white transition-colors break-all">
                    {headquarters.email}
                  </a>
                </div>

                <div className="flex items-start gap-3">
                  <Clock size={18} className="sm:w-5 sm:h-5 shrink-0 mt-0.5" strokeWidth={2} />
                  <p className="text-xs sm:text-sm md:text-base text-blue-50">{headquarters.hours}</p>
                </div>
              </div>
            </motion.div>
          </div>
        </div>

        {/* Branch Offices */}
        <div>
          <motion.div
            className="flex items-center gap-2 mb-6"
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, amount: 0.5 }}
            variants={fadeInUp}
          >
            <Globe className="text-[#084B73]" size={24} strokeWidth={2.5} />
            <h3 className="text-2xl font-bold text-gray-900">Branch Offices</h3>
          </motion.div>
          <motion.div
            className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-4 md:gap-6"
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, amount: 0.2 }}
            variants={staggerContainer}
          >
            {branchOffices.map((office, index) => (
              <motion.div
                key={index}
                className="bg-white rounded-xl p-6 shadow-md hover:shadow-lg transition-all duration-300 border border-gray-200"
                variants={cardVariant}
                whileHover={{ y: -8, transition: { duration: 0.2 } }}
              >
                <div className="flex items-center gap-3 mb-4">
                  <div className="w-12 h-12 bg-[#084B73]/10 rounded-full flex items-center justify-center">
                    <MapPin size={24} className="text-[#084B73]" strokeWidth={2} />
                  </div>
                  <div>
                    <h4 className="text-lg font-bold text-gray-900">{office.city}</h4>
                    <p className="text-sm text-gray-600">{office.country}</p>
                  </div>
                </div>
                <div className="space-y-3">
                  <div className="flex items-center gap-2 text-sm">
                    <Phone size={16} className="text-[#084B73] shrink-0" strokeWidth={2} />
                    <a href={`tel:${office.phone}`} className="text-gray-600 hover:text-[#084B73] transition-colors">
                      {office.phone}
                    </a>
                  </div>
                  <div className="flex items-center gap-2 text-sm">
                    <Mail size={16} className="text-[#084B73] shrink-0" strokeWidth={2} />
                    <a href={`mailto:${office.email}`} className="text-gray-600 hover:text-[#084B73] transition-colors break-all">
                      {office.email}
                    </a>
                  </div>
                </div>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </div>
    </section>
  );
}
