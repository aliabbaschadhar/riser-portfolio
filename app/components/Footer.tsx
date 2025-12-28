'use client';

import { Facebook, Twitter, Linkedin, Instagram, Mail, Phone, ArrowRight } from 'lucide-react';
import Link from 'next/link';
import { useState } from 'react';
import { motion } from 'framer-motion';

const EASE_IN_OUT = [0.4, 0, 0.2, 1] as const;

export default function Footer() {
  const currentYear = new Date().getFullYear();
  const [isHovered, setIsHovered] = useState(false);

  const scrollToSection = (sectionId: string) => {
    const element = document.getElementById(sectionId);
    if (element) {
      const offset = 80;
      const elementPosition = element.getBoundingClientRect().top;
      const offsetPosition = elementPosition + window.pageYOffset - offset;
      window.scrollTo({ top: offsetPosition, behavior: 'smooth' });
    }
  };

  const socialLinks = [
    { icon: <Facebook size={20} />, href: "#", color: "hover:bg-blue-600", label: "Facebook" },
    { icon: <Twitter size={20} />, href: "#", color: "hover:bg-sky-500", label: "Twitter" },
    { icon: <Linkedin size={20} />, href: "#", color: "hover:bg-blue-700", label: "LinkedIn" },
    { icon: <Instagram size={20} />, href: "#", color: "hover:bg-linear-to-tr hover:from-purple-600 hover:to-pink-600", label: "Instagram" },
  ];

  return (
    <footer className="bg-linear-to-br from-gray-900 via-gray-800 to-gray-900 text-gray-300 relative overflow-hidden">
      {/* Background Decorative Elements */}
      <div className="absolute inset-0 opacity-5">
        <div className="absolute top-0 left-0 w-96 h-96 bg-blue-500 rounded-full blur-3xl"></div>
        <div className="absolute bottom-0 right-0 w-96 h-96 bg-purple-500 rounded-full blur-3xl"></div>
      </div>

      {/* Main Footer Content */}
      <div className="relative mx-auto px-4 sm:px-8 md:px-16 lg:px-20 xl:px-44 py-10 md:py-16">
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8 md:gap-12 mb-10 md:mb-16">
          {/* Company Info */}
          <div>
            <div className="flex items-center space-x-3 mb-6">
              <div className="w-12 h-12 bg-linear-to-br from-[#084B73] to-blue-600 rounded-xl flex items-center justify-center shadow-lg">
                <span className="text-white font-bold text-2xl">R</span>
              </div>
              <div>
                <span className="text-xl font-bold text-white block">The Risers</span>
                <span className="text-sm text-blue-400">Consultancy</span>
              </div>
            </div>
            <p className="text-gray-400 mb-6 leading-relaxed">
              Empowering students worldwide to achieve their dreams through expert guidance and personalized education consulting services.
            </p>

            {/* Social Links */}
            <div className="flex gap-3">
              {socialLinks.map((social, index) => (
                <a
                  key={index}
                  href={social.href}
                  aria-label={social.label}
                  className={`w-11 h-11 bg-gray-800 rounded-full flex items-center justify-center ${social.color} transition-all duration-300 transform hover:scale-110 hover:-translate-y-1 shadow-lg hover:shadow-xl cursor-pointer`}
                >
                  {social.icon}
                </a>
              ))}
            </div>
          </div>

          {/* Quick Links */}
          <div>
            <h3 className="text-white font-bold text-lg mb-6 relative inline-block after:content-[''] after:absolute after:left-0 after:bottom-0 after:w-12 after:h-1 after:bg-linear-to-r after:from-[#084B73] after:to-blue-600 after:rounded">
              Quick Links
            </h3>
            <ul className="space-y-3">
              {[
                { name: 'Home', id: 'home' },
                { name: 'About Us', id: 'about' },
                { name: 'Services', id: 'services' },
                { name: 'Contact', id: 'contact' }
              ].map((link, index) => (
                <li key={index}>
                  <button
                    onClick={() => scrollToSection(link.id)}
                    className="group flex items-center text-gray-400 hover:text-white transition-all duration-300 cursor-pointer"
                  >
                    <ArrowRight size={16} className="mr-2 group-hover:translate-x-1 transition-transform" />
                    {link.name}
                  </button>
                </li>
              ))}
            </ul>
          </div>

          {/* Contact Info */}
          <div>
            <h3 className="text-white font-bold text-lg mb-6 relative inline-block after:content-[''] after:absolute after:left-0 after:bottom-0 after:w-12 after:h-1 after:bg-linear-to-r after:from-[#084B73] after:to-blue-600 after:rounded">
              Get In Touch
            </h3>
            <ul className="space-y-4">
              <li className="flex items-start gap-3 group">
                <div className="w-10 h-10 rounded-lg bg-linear-to-br from-green-500/20 to-green-600/20 flex items-center justify-center shrink-0 group-hover:scale-110 transition-transform">
                  <Phone size={20} className="text-green-400" />
                </div>
                <div>
                  <p className="text-white font-medium">Call Us</p>
                  <a href="tel:+15551234567" className="text-sm text-gray-400 hover:text-white transition-colors">+1 (555) 123-4567</a>
                </div>
              </li>
              <li className="flex items-start gap-3 group">
                <div className="w-10 h-10 rounded-lg bg-linear-to-br from-purple-500/20 to-purple-600/20 flex items-center justify-center shrink-0 group-hover:scale-110 transition-transform">
                  <Mail size={20} className="text-purple-400" />
                </div>
                <div>
                  <p className="text-white font-medium">Email Us</p>
                  <a href="mailto:info@therisersconsultancy.com" className="text-sm text-gray-400 hover:text-white transition-colors break-all">info@therisersconsultancy.com</a>
                </div>
              </li>
            </ul>
          </div>
        </div>

        {/* Brand Banner - Large Centered */}
        <div className="border-t border-gray-700/50 pt-12">
          <div className="text-center mb-8">
            <div className="relative w-full overflow-visible">
              {/* Animated Planes - Flying Across on Hover */}
              <div className="absolute inset-0 pointer-events-none overflow-visible w-full z-10">
                {/* Plane 1 - Largest, center */}
                <svg
                  className={`absolute left-0 top-1/2 -translate-y-1/2 w-16 h-16 text-blue-400 transition-all duration-[4s] ease-in-out rotate-90 ${isHovered ? 'opacity-100 translate-x-[calc(100vw-4.5rem)]' : 'opacity-0 -translate-x-24'}`}
                  fill="currentColor"
                  viewBox="0 0 24 24"
                >
                  <path d="M21 16v-2l-8-5V3.5c0-.83-.67-1.5-1.5-1.5S10 2.67 10 3.5V9l-8 5v2l8-2.5V19l-2 1.5V22l3.5-1 3.5 1v-1.5L13 19v-5.5l8 2.5z" />
                </svg>
                {/* Plane 2 - Upper position */}
                <svg
                  className={`absolute left-0 top-[20%] w-12 h-12 text-blue-300 transition-all duration-[3.8s] delay-200 ease-in-out rotate-90 ${isHovered ? 'opacity-85 translate-x-[calc(100vw-3.5rem)]' : 'opacity-0 -translate-x-20'}`}
                  fill="currentColor"
                  viewBox="0 0 24 24"
                >
                  <path d="M21 16v-2l-8-5V3.5c0-.83-.67-1.5-1.5-1.5S10 2.67 10 3.5V9l-8 5v2l8-2.5V19l-2 1.5V22l3.5-1 3.5 1v-1.5L13 19v-5.5l8 2.5z" />
                </svg>
                {/* Plane 3 - Lower position */}
                <svg
                  className={`absolute left-0 top-[80%] w-11 h-11 text-blue-200 transition-all duration-[3.6s] delay-400 ease-in-out rotate-90 ${isHovered ? 'opacity-70 translate-x-[calc(100vw-3.2rem)]' : 'opacity-0 -translate-x-18'}`}
                  fill="currentColor"
                  viewBox="0 0 24 24"
                >
                  <path d="M21 16v-2l-8-5V3.5c0-.83-.67-1.5-1.5-1.5S10 2.67 10 3.5V9l-8 5v2l8-2.5V19l-2 1.5V22l3.5-1 3.5 1v-1.5L13 19v-5.5l8 2.5z" />
                </svg>
                {/* Plane 4 - Upper-mid */}
                <svg
                  className={`absolute left-0 top-[35%] w-9 h-9 text-cyan-300 transition-all duration-[3.3s] delay-500 ease-in-out rotate-90 ${isHovered ? 'opacity-75 translate-x-[calc(100vw-2.8rem)]' : 'opacity-0 -translate-x-16'}`}
                  fill="currentColor"
                  viewBox="0 0 24 24"
                >
                  <path d="M21 16v-2l-8-5V3.5c0-.83-.67-1.5-1.5-1.5S10 2.67 10 3.5V9l-8 5v2l8-2.5V19l-2 1.5V22l3.5-1 3.5 1v-1.5L13 19v-5.5l8 2.5z" />
                </svg>
                {/* Plane 5 - Lower-mid */}
                <svg
                  className={`absolute left-0 top-[65%] w-7 h-7 text-sky-200 transition-all duration-[3s] delay-700 ease-in-out rotate-90 ${isHovered ? 'opacity-60 translate-x-[calc(100vw-2.2rem)]' : 'opacity-0 -translate-x-14'}`}
                  fill="currentColor"
                  viewBox="0 0 24 24"
                >
                  <path d="M21 16v-2l-8-5V3.5c0-.83-.67-1.5-1.5-1.5S10 2.67 10 3.5V9l-8 5v2l8-2.5V19l-2 1.5V22l3.5-1 3.5 1v-1.5L13 19v-5.5l8 2.5z" />
                </svg>
                {/* Plane 6 - Top */}
                <svg
                  className={`absolute left-0 top-[10%] w-8 h-8 text-indigo-300 transition-all duration-[3.5s] delay-300 ease-in-out rotate-90 ${isHovered ? 'opacity-65 translate-x-[calc(100vw-2.5rem)]' : 'opacity-0 -translate-x-12'}`}
                  fill="currentColor"
                  viewBox="0 0 24 24"
                >
                  <path d="M21 16v-2l-8-5V3.5c0-.83-.67-1.5-1.5-1.5S10 2.67 10 3.5V9l-8 5v2l8-2.5V19l-2 1.5V22l3.5-1 3.5 1v-1.5L13 19v-5.5l8 2.5z" />
                </svg>
                {/* Plane 7 - Bottom */}
                <svg
                  className={`absolute left-0 top-[90%] w-6 h-6 text-teal-300 transition-all duration-[2.8s] delay-900 ease-in-out rotate-90 ${isHovered ? 'opacity-55 translate-x-[calc(100vw-2rem)]' : 'opacity-0 -translate-x-10'}`}
                  fill="currentColor"
                  viewBox="0 0 24 24"
                >
                  <path d="M21 16v-2l-8-5V3.5c0-.83-.67-1.5-1.5-1.5S10 2.67 10 3.5V9l-8 5v2l8-2.5V19l-2 1.5V22l3.5-1 3.5 1v-1.5L13 19v-5.5l8 2.5z" />
                </svg>
                {/* Plane 8 - Mid-upper */}
                <svg
                  className={`absolute left-0 top-[45%] w-10 h-10 text-purple-300 transition-all duration-[3.4s] delay-600 ease-in-out rotate-90 ${isHovered ? 'opacity-70 translate-x-[calc(100vw-3rem)]' : 'opacity-0 -translate-x-18'}`}
                  fill="currentColor"
                  viewBox="0 0 24 24"
                >
                  <path d="M21 16v-2l-8-5V3.5c0-.83-.67-1.5-1.5-1.5S10 2.67 10 3.5V9l-8 5v2l8-2.5V19l-2 1.5V22l3.5-1 3.5 1v-1.5L13 19v-5.5l8 2.5z" />
                </svg>
              </div>

              {/* Main Brand Text - Lifts up on hover */}
              <motion.h2
                className="relative text-3xl sm:text-4xl md:text-6xl lg:text-7xl xl:text-8xl 2xl:text-9xl font-black text-transparent bg-clip-text bg-linear-to-r from-[#084B73] via-blue-400 to-[#084B73] tracking-tight cursor-pointer"
                onMouseEnter={() => setIsHovered(true)}
                onMouseLeave={() => setIsHovered(false)}
                animate={{
                  y: isHovered ? -8 : 0,
                }}
                transition={{
                  duration: 0.7,
                  ease: EASE_IN_OUT
                }}
              >
                THE RISERS CONSULTANCY
              </motion.h2>

              {/* Shadow expands on hover - creating "lifting" effect */}
              <motion.div
                className="absolute -bottom-2 left-1/2 -translate-x-1/2 w-3/4 h-2 bg-[#084B73]/20 blur-xl rounded-full pointer-events-none"
                animate={{
                  opacity: isHovered ? 1 : 0,
                  scaleX: isHovered ? 1.1 : 1,
                }}
                transition={{
                  duration: 0.7,
                  ease: EASE_IN_OUT
                }}
              />

              {/* Decorative Underline */}
              <div className="mt-4 flex items-center justify-center gap-3">
                <motion.div
                  className="h-1 bg-linear-to-r from-transparent via-[#084B73] to-transparent rounded-full"
                  animate={{
                    width: isHovered ? 96 : 64
                  }}
                  transition={{
                    duration: 0.5,
                    ease: EASE_IN_OUT
                  }}
                />
                <motion.div
                  className="w-3 h-3 bg-[#084B73] rounded-full"
                  animate={{
                    scale: isHovered ? 1.25 : 1
                  }}
                  transition={{
                    duration: 0.5,
                    ease: EASE_IN_OUT
                  }}
                />
                <motion.div
                  className="h-1 bg-linear-to-r from-transparent via-[#084B73] to-transparent rounded-full"
                  animate={{
                    width: isHovered ? 96 : 64
                  }}
                  transition={{
                    duration: 0.5,
                    ease: EASE_IN_OUT
                  }}
                />
              </div>
            </div>

            {/* Tagline */}
            <p className="mt-4 md:mt-6 text-sm sm:text-base md:text-lg lg:text-xl text-gray-400 font-light tracking-wide">
              Elevating Dreams, Building Futures
            </p>
          </div>

          {/* Copyright & Legal Links */}
          <div className="flex flex-col md:flex-row justify-between items-center gap-4 pt-8 border-t border-gray-700/30">
            <p className="text-gray-500 text-sm text-center md:text-left">
              © {currentYear} The Risers Consultancy. All rights reserved.
            </p>
            <div className="flex flex-wrap justify-center gap-6 text-sm">
              <Link href="#" className="text-gray-500 hover:text-white transition-colors">
                Privacy Policy
              </Link>
              <Link href="#" className="text-gray-500 hover:text-white transition-colors">
                Terms of Service
              </Link>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
}
