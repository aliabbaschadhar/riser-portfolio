"use client";

import {
  MapPin,
  Phone,
  Mail,
  Globe,
  Clock,
  Building2,
  Building,
} from "lucide-react";
import type { CSSProperties } from "react";
import { motion } from "framer-motion";
import { colors } from "@/lib/colors";

const EASE_OUT = [0.16, 1, 0.3, 1] as const;

// Animation variants
const fadeInUp = {
  hidden: { opacity: 0, y: 30 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.6, ease: EASE_OUT } },
};

const fadeInLeft = {
  hidden: { opacity: 0, x: -30 },
  visible: { opacity: 1, x: 0, transition: { duration: 0.6, ease: EASE_OUT } },
};

const fadeInRight = {
  hidden: { opacity: 0, x: 30 },
  visible: { opacity: 1, x: 0, transition: { duration: 0.6, ease: EASE_OUT } },
};

const staggerContainer = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: { staggerChildren: 0.1, delayChildren: 0.1 },
  },
};

const cardVariant = {
  hidden: { opacity: 0, y: 20, scale: 0.95 },
  visible: {
    opacity: 1,
    y: 0,
    scale: 1,
    transition: { duration: 0.4, ease: EASE_OUT },
  },
};

const themeVars = {
  "--primary-blue": colors.primary.DEFAULT,
  "--primary-blue-light": colors.primary.light,
  "--primary-blue-darker": colors.primary.darker,
} as CSSProperties;

export default function Offices() {
  const headquarters = {
    city: "Hafizabad",
    country: "Pakistan",
    address: "Sunny Garden Usama Block, Sargodha Road, Hafizabad, Pakistan",
    phone: "+92 335 0008032",
    email: "hafizabad@therisers.com", // To be change later on when purchased it
    hours: "Mon-Fri: 9:00 AM - 6:00 PM PKT",
  };

  const branchOffices = [
    {
      city: "Faisalabad",
      country: "Pakistan",
      address:
        "BC Tower 1st Floor Shop 3,4 Jinnah Colony Road near GCU main campus, Faisalabad, Pakistan",
      phone: "+92 311 4399995",
      email: "faisalabad@therisers.com", // To be change later on when purchased it
    },
    {
      city: "Sargodha",
      country: "Pakistan",
      address:
        "1st floor Ehsan Cash and Carry near Zafar Ullah Chowk Sargodha, Pakistan",
      phone: "+92 342 4789153",
      email: "sargodha@therisers.com", // To be change later on when purchased it
    },
  ];

  return (
    <section
      id="offices"
      className="py-12 md:py-16 px-4 sm:px-8 md:px-16 lg:px-20 xl:px-44 bg-linear-to-b from-gray-50 to-white"
      style={themeVars}
    >
      <div className="mx-auto">
        <motion.div
          className="text-center mb-10 md:mb-14"
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.5 }}
          variants={fadeInUp}
        >
          <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold text-[var(--primary-blue)] mb-4 md:mb-5">
            Our Offices
          </h2>
          <div className="w-20 md:w-24 h-1 bg-[var(--primary-blue)] mx-auto mb-4 md:mb-5"></div>
          <p className="text-base sm:text-lg md:text-xl text-gray-600 max-w-3xl mx-auto leading-relaxed">
            With offices around the world, we&apos;re always close to you
            wherever you are
          </p>
        </motion.div>

        {/* Headquarters */}
        <div className="mb-16">
          <motion.div
            className="flex items-center gap-2 mb-8"
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, amount: 0.5 }}
            variants={fadeInUp}
          >
            <Globe className="text-[var(--primary-blue)]" size={28} strokeWidth={2.5} />
            <h3 className="text-3xl font-bold text-gray-900">Main Office</h3>
          </motion.div>
          <div className="grid grid-cols-1 lg:grid-cols-5 gap-6 mb-6">
            {/* Map - Takes 3 columns */}
            <motion.div
              className="lg:col-span-3 rounded-2xl overflow-hidden shadow-xl h-72 sm:h-80 md:h-96 lg:h-full min-h-96"
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
            {/* Office Details - Takes 2 columns */}
            <motion.div
              className="lg:col-span-2 bg-linear-to-br from-[var(--primary-blue)] to-[var(--primary-blue-darker)] rounded-2xl p-6 md:p-8 text-white shadow-2xl"
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true, amount: 0.3 }}
              variants={fadeInRight}
            >
              <div className="flex items-center gap-3 md:gap-4 mb-6 md:mb-8">
                <div className="w-14 h-14 md:w-16 md:h-16 bg-white/20 rounded-full flex items-center justify-center shrink-0">
                  <Building2
                    size={28}
                    className="md:w-8 md:h-8 text-white"
                    strokeWidth={2}
                  />
                </div>
                <div>
                  <h4 className="text-2xl md:text-3xl font-bold mb-1">
                    {headquarters.city}
                  </h4>
                  <p className="text-blue-100 text-sm md:text-base">
                    {headquarters.country}
                  </p>
                </div>
              </div>

              <div className="space-y-4 md:space-y-5">
                <div className="flex items-start gap-3">
                  <MapPin
                    size={18}
                    className="sm:w-5 sm:h-5 mt-0.5 shrink-0"
                    strokeWidth={2}
                  />
                  <p className="text-xs sm:text-sm md:text-base text-blue-50 leading-relaxed">
                    {headquarters.address}
                  </p>
                </div>

                <div className="flex items-start gap-3">
                  <Phone
                    size={18}
                    className="sm:w-5 sm:h-5 mt-0.5 shrink-0"
                    strokeWidth={2}
                  />
                  <a
                    href={`tel:${headquarters.phone}`}
                    className="text-xs sm:text-sm md:text-base text-blue-50 hover:text-white transition-colors break-all"
                  >
                    {headquarters.phone}
                  </a>
                </div>

                <div className="flex items-start gap-3">
                  <Mail
                    size={18}
                    className="sm:w-5 sm:h-5 shrink-0 mt-0.5"
                    strokeWidth={2}
                  />
                  <a
                    href={`mailto:${headquarters.email}`}
                    className="text-xs sm:text-sm md:text-base text-blue-50 hover:text-white transition-colors break-all"
                  >
                    {headquarters.email}
                  </a>
                </div>

                <div className="flex items-start gap-3">
                  <Clock
                    size={18}
                    className="sm:w-5 sm:h-5 shrink-0 mt-0.5"
                    strokeWidth={2}
                  />
                  <p className="text-xs sm:text-sm md:text-base text-blue-50">
                    {headquarters.hours}
                  </p>
                </div>
              </div>
            </motion.div>
          </div>
        </div>

        {/* Branch Offices */}
        <div>
          <motion.div
            className="flex items-center gap-2 mb-8"
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, amount: 0.5 }}
            variants={fadeInUp}
          >
            <Globe className="text-[var(--primary-blue)]" size={28} strokeWidth={2.5} />
            <h3 className="text-3xl font-bold text-gray-900">Branch Offices</h3>
          </motion.div>
          <motion.div
            className="grid grid-cols-1 sm:grid-cols-2 gap-6 cursor-pointer"
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, amount: 0.2 }}
            variants={staggerContainer}
          >
            {branchOffices.map((office, index) => (
              <motion.div
                key={index}
                className="group relative rounded-2xl overflow-hidden transition-all duration-300"
                variants={cardVariant}
                whileHover={{
                  y: -12,
                  transition: { duration: 0.3, ease: EASE_OUT },
                }}
              >
                {/* Background gradient - always visible */}
                <div className="absolute inset-0 bg-linear-to-br from-blue-50 via-white to-blue-50"></div>

                {/* Card content */}
                <div className="relative p-6 md:p-7 border-2 border-[var(--primary-blue)]/30 rounded-2xl backdrop-blur-sm bg-white/90 shadow-xl hover:shadow-2xl transition-all duration-300">
                  {/* Top accent line - always visible */}
                  <div className="absolute top-0 left-0 right-0 h-1 bg-linear-to-r from-[var(--primary-blue)] via-[var(--primary-blue-light)] to-transparent rounded-t-2xl"></div>

                  {/* Header */}
                  <div className="flex items-center gap-4 mb-6">
                    <div className="w-14 h-14 rounded-full bg-linear-to-br from-[var(--primary-blue)]/25 to-[var(--primary-blue-light)]/25 flex items-center justify-center shrink-0">
                      <Building2
                        size={28}
                        className="text-[var(--primary-blue)]"
                        strokeWidth={2.5}
                      />
                    </div>
                    <div>
                      <h4 className="text-2xl font-bold text-[var(--primary-blue)]">
                        {office.city}
                      </h4>
                      <p className="text-base text-gray-700 font-semibold">
                        {office.country}
                      </p>
                    </div>
                  </div>

                  {/* Divider */}
                  <div className="h-px bg-linear-to-r from-gray-200 via-gray-300 to-gray-200 mb-5"></div>

                  {/* Contact Info */}
                  <div className="space-y-1">
                    <div className="flex items-center gap-3">
                      <div className="w-10 h-10 rounded-lg flex items-center justify-center">
                        <MapPin
                          size={18}
                          className="sm:w-5 sm:h-5 mt-0.5 shrink-0"
                          strokeWidth={2}
                        />
                      </div>
                      <p className="text-base font-bold text-gray-800 hover:text-[var(--primary-blue)] transition-colors">
                        {office.address}
                      </p>
                    </div>

                    <div className="flex items-center gap-3">
                      <div className="w-10 h-10 rounded-lg flex items-center justify-center">
                        <Phone size={18} />
                      </div>
                      <a
                        href={`tel:${office.phone}`}
                        className="text-base font-bold text-gray-800 hover:text-[var(--primary-blue)] transition-colors"
                      >
                        {office.phone}
                      </a>
                    </div>
                    <div className="flex items-center gap-3">
                      <div className="w-10 h-10 rounded-lg flex items-center justify-center">
                        <Mail
                          size={18}
                          className="text-[var(--primary-blue)]"
                          strokeWidth={2.5}
                        />
                      </div>
                      <a
                        href={`mailto:${office.email}`}
                        className="text-base font-bold text-gray-800 hover:text-[var(--primary-blue)] transition-colors break-all"
                      >
                        {office.email}
                      </a>
                    </div>
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
