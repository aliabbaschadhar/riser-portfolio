"use client";

import {
  Facebook,
  Twitter,
  Linkedin,
  Instagram,
  Mail,
  Phone,
  ArrowRight,
} from "lucide-react";
import Link from "next/link";
import { useState } from "react";
import type { CSSProperties } from "react";
import { motion } from "framer-motion";
import Image from "next/image";
import { colors } from "@/lib/colors";

const EASE_IN_OUT = [0.4, 0, 0.2, 1] as const;

const themeVars = {
  "--primary-blue": colors.primary.DEFAULT,
  "--primary-blue-light": colors.primary.light,
  "--primary-blue-darker": colors.primary.darker,
} as CSSProperties;

export default function Footer() {
  const currentYear = new Date().getFullYear();
  const [isHovered, setIsHovered] = useState(false);

  const scrollToSection = (sectionId: string) => {
    const element = document.getElementById(sectionId);
    if (element) {
      const offset = 80;
      const elementPosition = element.getBoundingClientRect().top;
      const offsetPosition = elementPosition + window.pageYOffset - offset;
      window.scrollTo({ top: offsetPosition, behavior: "smooth" });
    }
  };

  const socialLinks = [
    { icon: <Facebook size={20} />, href: "https://www.facebook.com/profile.php?id=100088528545444", color: "hover:bg-blue-600" },
    { icon: <Twitter size={20} />, href: "https://x.com/TheRisers786", color: "hover:bg-sky-500" },
    { icon: <Linkedin size={20} />, href: " tiktok.com/@therisersconsultancy%3F_r%3D1%26_t%3DZS-92JmwPPTdpK", color: "hover:bg-blue-700" },
    {
      icon: <Instagram size={20} />,
      href: "https://www.instagram.com/therisersconsultancypvtltd/",
      color: "hover:bg-linear-to-tr hover:from-purple-600 hover:to-pink-600",
    },
  ];

  return (
    <footer
      className="text-gray-300 relative overflow-hidden"
      style={{
        ...themeVars,
        background: `linear-gradient(135deg, ${colors.primary.darker} 0%, ${colors.primary.light} 50%, ${colors.primary.darker} 100%)`,
      }}
    >
      {/* Background Decorative Elements */}
      <div className="absolute inset-0 opacity-5">
        <div
          className="absolute top-0 left-0 w-96 h-96 rounded-full blur-3xl"
          style={{ backgroundColor: `${colors.primary.DEFAULT}1a` }}
        ></div>
        <div
          className="absolute bottom-0 right-0 w-96 h-96 rounded-full blur-3xl"
          style={{ backgroundColor: `${colors.primary.darker}1a` }}
        ></div>
      </div>

      {/* Main Footer Content */}
      <div className="relative mx-auto px-4 sm:px-8 md:px-16 lg:px-20 xl:px-44 py-10 md:py-16">
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8 md:gap-12 mb-10 md:mb-16">
          {/* Company Info */}
          <div>
            <div className="flex items-center gap-4 mb-6">
              <div className="w-18 h-18 rounded-xl flex items-center justify-center relative overflow-hidden">
                <Image
                  src="/images/logo/logo.svg"
                  alt="The Risers Consultancy Logo"
                  fill
                  loading="lazy"
                  className="object-contain p-2 brightness-0 invert"
                />
              </div>
              <div>
                <h3 className="text-2xl font-bold text-white leading-tight">
                  The Risers
                </h3>
                <p className="text-2xl text-blue-200 font-medium">Consultancy</p>
              </div>
            </div>
            <p className="text-gray-300 mb-6 leading-relaxed text-sm">
              At The Risers Consultancy, we specialize in turning your dreams of studying abroad into reality.
            </p>
          </div>

          {/* Quick Links - Row on smaller, Column on Desktop */}
          <div>
            <h3 className="text-white font-bold text-lg mb-4 lg:mb-6 relative inline-block after:content-[''] after:absolute after:left-0 after:-bottom-1 after:w-24 after:h-0.5 after:bg-white/40 after:rounded">
              Quick Links
            </h3>
            <ul className="flex lg:flex-col gap-3 sm:gap-2 lg:gap-3 flex-wrap">
              {[
                { name: "Home", id: "home" },
                { name: "About Us", id: "about" },
                { name: "Services", id: "services" },
                { name: "Contact", id: "contact" },
              ].map((link, index) => (
                <li key={index}>
                  <button
                    onClick={() => scrollToSection(link.id)}
                    className="group flex items-center text-gray-400 hover:text-white transition-all duration-300 cursor-pointer"
                  >
                    <ArrowRight
                      size={14}
                      className="mr-2 group-hover:translate-x-1 transition-transform"
                    />
                    {link.name}
                  </button>
                </li>
              ))}
            </ul>
          </div>

          {/* Contact Info */}
          <div>
            <h3 className="text-white font-bold text-lg mb-6 relative inline-block after:content-[''] after:absolute after:left-0 after:-bottom-1 after:w-28 after:h-0.5 after:bg-white/40 after:rounded">
              Get In Touch
            </h3>
            <ul className="space-y-4">
              <li className="flex items-start gap-3 group">
                <div className="w-10 h-10 rounded-lg flex items-center justify-center text-white transition-all duration-300 transform group bg-white/10 backdrop-blur-sm border border-white/20 hover:bg-linear-to-br hover:scale-110">
                  <Phone size={20} className="text-white" />
                </div>
                <div>
                  <p className="text-white font-medium">Call Us</p>
                  <a
                    href="tel:+15551234567"
                    className="text-sm text-gray-400 hover:text-white transition-colors"
                  >
                    +92 335 000 8032
                  </a>
                </div>
              </li>
              <li className="flex items-start gap-3 group">
                <div className="w-10 h-10 rounded-lg flex items-center justify-center text-white transition-all duration-300 transform group bg-white/10 backdrop-blur-sm border border-white/20 hover:bg-linear-to-br hover:scale-110">
                  <Mail size={20} className="text-white" />
                </div>
                <div>
                  <p className="text-white font-medium">Email Us</p>
                  <a
                    href="mailto:info@therisersconsultancy.com"
                    className="text-sm text-gray-400 hover:text-white transition-colors break-all"
                  >
                    info@therisersconsultancy.com
                  </a>
                </div>
              </li>
            </ul>
          </div>

          {/* Social Links - Row on smaller, Column on Desktop */}
          <div>
            <h3 className="text-white font-bold text-lg mb-4 lg:mb-6 relative inline-block after:content-[''] after:absolute after:left-0 after:-bottom-1 after:w-20 after:h-0.5 after:bg-white/40 after:rounded">
              Follow Us
            </h3>
            <div className="flex lg:flex-col gap-2 lg:gap-3 flex-wrap">
              {socialLinks.map((social, index) => {
                const gradients = [
                  "group-hover:from-blue-400 group-hover:to-blue-600 group-hover:border-blue-400",
                  "group-hover:from-sky-400 group-hover:to-sky-600 group-hover:border-sky-400",
                  "group-hover:from-blue-500 group-hover:to-blue-700 group-hover:border-blue-500",
                  "group-hover:from-pink-500 group-hover:to-purple-600 group-hover:border-pink-500",
                ];
                return (
                  <a
                    key={index}
                    href={social.href}
                    className={`flex items-center gap-3 px-3 py-2 rounded-lg text-white transition-all duration-300 transform group w-fit bg-white/10 backdrop-blur-sm border border-white/20 hover:bg-linear-to-br hover:scale-105 ${gradients[index]}`}
                  >
                    <div className="flex items-center justify-center">
                      {social.icon}
                    </div>
                  </a>
                );
              })}
            </div>
          </div>
        </div>

        {/* Brand Banner - Large Centered */}
        <div className="border-t border-gray-700/50 pt-8">
          <div className="text-center mb-6">
            <div className="relative w-full overflow-visible">
              {/* Animated Planes - Flying Across on Hover */}
              <div className="absolute inset-0 pointer-events-none overflow-visible w-full z-10">
                {/* Plane 1 - Largest, center */}
                <svg
                  className={`absolute left-0 top-1/2 -translate-y-1/2 w-16 h-16 text-white transition-all duration-[4s] ease-in-out rotate-90 ${isHovered
                    ? "opacity-100 translate-x-[calc(100vw-4.5rem)]"
                    : "opacity-0 -translate-x-24"
                    }`}
                  fill="currentColor"
                  viewBox="0 0 24 24"
                >
                  <path d="M21 16v-2l-8-5V3.5c0-.83-.67-1.5-1.5-1.5S10 2.67 10 3.5V9l-8 5v2l8-2.5V19l-2 1.5V22l3.5-1 3.5 1v-1.5L13 19v-5.5l8 2.5z" />
                </svg>
                {/* Plane 2 - Upper position */}
                <svg
                  className={`absolute left-0 top-[20%] w-12 h-12 text-white transition-all duration-[3.8s] delay-200 ease-in-out rotate-90 ${isHovered
                    ? "opacity-85 translate-x-[calc(100vw-3.5rem)]"
                    : "opacity-0 -translate-x-20"
                    }`}
                  fill="currentColor"
                  viewBox="0 0 24 24"
                >
                  <path d="M21 16v-2l-8-5V3.5c0-.83-.67-1.5-1.5-1.5S10 2.67 10 3.5V9l-8 5v2l8-2.5V19l-2 1.5V22l3.5-1 3.5 1v-1.5L13 19v-5.5l8 2.5z" />
                </svg>
                {/* Plane 3 - Lower position */}
                <svg
                  className={`absolute left-0 top-[80%] w-11 h-11 text-white transition-all duration-[3.6s] delay-400 ease-in-out rotate-90 ${isHovered
                    ? "opacity-70 translate-x-[calc(100vw-3.2rem)]"
                    : "opacity-0 -translate-x-18"
                    }`}
                  fill="currentColor"
                  viewBox="0 0 24 24"
                >
                  <path d="M21 16v-2l-8-5V3.5c0-.83-.67-1.5-1.5-1.5S10 2.67 10 3.5V9l-8 5v2l8-2.5V19l-2 1.5V22l3.5-1 3.5 1v-1.5L13 19v-5.5l8 2.5z" />
                </svg>
                {/* Plane 4 - Upper-mid */}
                <svg
                  className={`absolute left-0 top-[35%] w-9 h-9 text-white transition-all duration-[3.3s] delay-500 ease-in-out rotate-90 ${isHovered
                    ? "opacity-75 translate-x-[calc(100vw-2.8rem)]"
                    : "opacity-0 -translate-x-16"
                    }`}
                  fill="currentColor"
                  viewBox="0 0 24 24"
                >
                  <path d="M21 16v-2l-8-5V3.5c0-.83-.67-1.5-1.5-1.5S10 2.67 10 3.5V9l-8 5v2l8-2.5V19l-2 1.5V22l3.5-1 3.5 1v-1.5L13 19v-5.5l8 2.5z" />
                </svg>
                {/* Plane 5 - Lower-mid */}
                <svg
                  className={`absolute left-0 top-[65%] w-7 h-7 text-white transition-all duration-[3s] delay-700 ease-in-out rotate-90 ${isHovered
                    ? "opacity-60 translate-x-[calc(100vw-2.2rem)]"
                    : "opacity-0 -translate-x-14"
                    }`}
                  fill="currentColor"
                  viewBox="0 0 24 24"
                >
                  <path d="M21 16v-2l-8-5V3.5c0-.83-.67-1.5-1.5-1.5S10 2.67 10 3.5V9l-8 5v2l8-2.5V19l-2 1.5V22l3.5-1 3.5 1v-1.5L13 19v-5.5l8 2.5z" />
                </svg>
                {/* Plane 6 - Top */}
                <svg
                  className={`absolute left-0 top-[10%] w-8 h-8 text-white transition-all duration-[3.5s] delay-300 ease-in-out rotate-90 ${isHovered
                    ? "opacity-65 translate-x-[calc(100vw-2.5rem)]"
                    : "opacity-0 -translate-x-12"
                    }`}
                  fill="currentColor"
                  viewBox="0 0 24 24"
                >
                  <path d="M21 16v-2l-8-5V3.5c0-.83-.67-1.5-1.5-1.5S10 2.67 10 3.5V9l-8 5v2l8-2.5V19l-2 1.5V22l3.5-1 3.5 1v-1.5L13 19v-5.5l8 2.5z" />
                </svg>
                {/* Plane 7 - Bottom */}
                <svg
                  className={`absolute left-0 top-[90%] w-6 h-6 text-white transition-all duration-[2.8s] delay-900 ease-in-out rotate-90 ${isHovered
                    ? "opacity-55 translate-x-[calc(100vw-2rem)]"
                    : "opacity-0 -translate-x-10"
                    }`}
                  fill="currentColor"
                  viewBox="0 0 24 24"
                >
                  <path d="M21 16v-2l-8-5V3.5c0-.83-.67-1.5-1.5-1.5S10 2.67 10 3.5V9l-8 5v2l8-2.5V19l-2 1.5V22l3.5-1 3.5 1v-1.5L13 19v-5.5l8 2.5z" />
                </svg>
                {/* Plane 8 - Mid-upper */}
                <svg
                  className={`absolute left-0 top-[45%] w-10 h-10 text-white transition-all duration-[3.4s] delay-600 ease-in-out rotate-90 ${isHovered
                    ? "opacity-70 translate-x-[calc(100vw-3rem)]"
                    : "opacity-0 -translate-x-18"
                    }`}
                  fill="currentColor"
                  viewBox="0 0 24 24"
                >
                  <path d="M21 16v-2l-8-5V3.5c0-.83-.67-1.5-1.5-1.5S10 2.67 10 3.5V9l-8 5v2l8-2.5V19l-2 1.5V22l3.5-1 3.5 1v-1.5L13 19v-5.5l8 2.5z" />
                </svg>
              </div>

              {/* Main Brand Text - Lifts up on hover */}
              <motion.h2
                className="relative text-3xl sm:text-4xl md:text-6xl lg:text-7xl xl:text-8xl 2xl:text-9xl font-black tracking-tight cursor-pointer"
                style={{ color: "#fff" }}
                onMouseEnter={() => setIsHovered(true)}
                onMouseLeave={() => setIsHovered(false)}
                animate={{
                  y: isHovered ? -8 : 0,
                }}
                transition={{
                  duration: 0.7,
                  ease: EASE_IN_OUT,
                }}
              >
                THE RISERS CONSULTANCY
              </motion.h2>

              {/* Shadow expands on hover - creating "lifting" effect */}
              <motion.div
                className="absolute -bottom-2 left-1/2 -translate-x-1/2 w-3/4 h-2 bg-primary/20 blur-xl rounded-full pointer-events-none"
                animate={{
                  opacity: isHovered ? 1 : 0,
                  scaleX: isHovered ? 1.1 : 1,
                }}
                transition={{
                  duration: 0.7,
                  ease: EASE_IN_OUT,
                }}
              />

              {/* Decorative Underline */}
              <div className="mt-4 flex items-center justify-center gap-3">
                <motion.div
                  className="h-1 bg-linear-to-r from-transparent via-primary to-transparent rounded-full"
                  animate={{
                    width: isHovered ? 96 : 64,
                  }}
                  transition={{
                    duration: 0.5,
                    ease: EASE_IN_OUT,
                  }}
                />
                <motion.div
                  className="w-3 h-3 bg-primary rounded-full"
                  animate={{
                    scale: isHovered ? 1.25 : 1,
                  }}
                  transition={{
                    duration: 0.5,
                    ease: EASE_IN_OUT,
                  }}
                />
                <motion.div
                  className="h-1 bg-linear-to-r from-transparent via-primary to-transparent rounded-full"
                  animate={{
                    width: isHovered ? 96 : 64,
                  }}
                  transition={{
                    duration: 0.5,
                    ease: EASE_IN_OUT,
                  }}
                />
              </div>
            </div>

            {/* Tagline */}
            <p className="mt-4 md:mt-6 text-sm sm:text-base md:text-lg lg:text-xl text-gray-300 font-light tracking-wide">
              Elevating Dreams, Building Futures
            </p>
          </div>

          {/* Copyright & Legal Links */}
          <div className="flex flex-col md:flex-row justify-between items-center gap-4 pt-8 border-t border-gray-700/30">
            <p className="text-gray-400 text-sm text-center md:text-left">
              © {currentYear} The Risers Consultancy. All rights reserved.
            </p>
            <div className="flex flex-wrap justify-center gap-6 text-sm">
              <Link
                href="#"
                className="text-gray-400 hover:text-white transition-colors"
              >
                Privacy Policy
              </Link>
              <Link
                href="#"
                className="text-gray-400 hover:text-white transition-colors"
              >
                Terms of Service
              </Link>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
}
