"use client";

import { useState, useEffect } from "react";
import { Menu, X, Phone } from "lucide-react";
import Image from "next/image";
import Link from "next/link";

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const [activeSection, setActiveSection] = useState("home");

  useEffect(() => {
    const html = document.documentElement;
    const body = document.body;

    if (!isOpen) {
      return;
    }

    const scrollY = window.scrollY;
    const previousHtmlOverflow = html.style.overflow;
    const previousBodyOverflow = body.style.overflow;
    const previousBodyPosition = body.style.position;
    const previousBodyTop = body.style.top;
    const previousBodyLeft = body.style.left;
    const previousBodyRight = body.style.right;
    const previousBodyWidth = body.style.width;

    html.style.overflow = "hidden";
    body.style.overflow = "hidden";
    body.style.position = "fixed";
    body.style.top = `-${scrollY}px`;
    body.style.left = "0";
    body.style.right = "0";
    body.style.width = "100%";

    return () => {
      html.style.overflow = previousHtmlOverflow;
      body.style.overflow = previousBodyOverflow;
      body.style.position = previousBodyPosition;
      body.style.top = previousBodyTop;
      body.style.left = previousBodyLeft;
      body.style.right = previousBodyRight;
      body.style.width = previousBodyWidth;
      window.scrollTo(0, scrollY);
    };
  }, [isOpen]);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 10);

      // Update active section based on scroll position
      const sections = [
        "home",
        "about",
        "services",
        "universities",
        "offices",
        "why-us",
        "process",
        "team",
        "testimonials",
        "contact",
      ];

      // Find the section that's currently in view
      let current = "home";
      for (const section of sections) {
        const element = document.getElementById(section);
        if (element) {
          const rect = element.getBoundingClientRect();
          // Check if section is in viewport (with a larger threshold for better detection)
          if (rect.top <= 150 && rect.bottom >= 150) {
            current = section;
            break;
          }
        }
      }
      setActiveSection(current);
    };

    handleScroll(); // Call once on mount
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const navLinks = [
    { name: "Home", href: "#home", sectionId: "home" },
    { name: "About", href: "#about", sectionId: "about" },
    { name: "Destinations", href: "#services", sectionId: "services" },
    { name: "Universities", href: "#universities", sectionId: "universities" },
    { name: "Offices", href: "#offices", sectionId: "offices" },
    { name: "Why Us", href: "#why-us", sectionId: "why-us" },
    { name: "Process", href: "#process", sectionId: "process" },
    { name: "Team", href: "#team", sectionId: "team" },
    { name: "Testimonials", href: "#testimonials", sectionId: "testimonials" },
    { name: "Contact", href: "#contact", sectionId: "contact" },
  ];

  const scrollToSection = (sectionId: string) => {
    const element = document.getElementById(sectionId);
    if (element) {
      const offset = 70; // Reduced offset for proper alignment
      const elementPosition = element.getBoundingClientRect().top;
      const offsetPosition = elementPosition + window.pageYOffset - offset;

      window.scrollTo({
        top: offsetPosition,
        behavior: "smooth",
      });
    }
    setIsOpen(false);
  };

  return (
    <nav
      className={`fixed z-50 transition-all duration-700 ease-in-out ${scrolled
        ? "top-0 left-0 right-0 w-full bg-white shadow-lg"
        : "top-0 left-0 right-0 w-full bg-linear-to-r from-slate-800 via-blue-600 to-[#081F30]"
        }`}
      style={{
        background: scrolled
          ? "rgb(255, 255, 255)"
          : "linear-gradient(135deg, #081F30 0%, #084B73 50%, #081F30 100%)",
      }}
    >
      <div className="mx-auto px-4 sm:px-8 md:px-16 lg:px-20 xl:px-44 py-2">
        <div className="flex justify-between items-center py-1">
          {/* Logo */}
          <button
            onClick={() => scrollToSection("home")}
            className="flex items-center gap-2 sm:gap-3 group cursor-pointer hover:opacity-80 transition-all duration-300 shrink-0 z-10"
          >
            {/* Globe Logo Image */}
            <div className="relative w-8 h-8 sm:w-10 sm:h-10 md:w-15 md:h-15 shrink-0">
              <Image
                src="/images/logo/logo.svg"
                alt="Globe Logo"
                fill
                className={`object-contain transition-all duration-300 ${scrolled ? "" : "brightness-0 invert"
                  }`}
                loading="lazy"
              />
            </div>
            {/* Company Name Text */}
            <div className="flex flex-col justify-center">
              <h1
                className={`text-sm sm:text-base md:text-lg lg:text-xl font-bold tracking-tight transition-colors duration-300 whitespace-nowrap ${scrolled
                  ? "text-[#084B73]"
                  : "text-white"
                  }`}
              >
                The Risers
              </h1>
              <p
                className={`text-[10px] sm:text-xs md:text-sm font-medium -mt-0.5 tracking-wide transition-colors duration-300 whitespace-nowrap ${scrolled
                  ? "text-gray-600"
                  : "text-white/90"
                  }`}
              >
                Consultancy
              </p>
            </div>
          </button>

          {/* Desktop Navigation - Centered */}
          <div className="hidden lg:flex items-center gap-2 lg:gap-3 xl:gap-4 flex-1 justify-center px-4">
            {navLinks.map((link) => {
              const isActive = activeSection === link.sectionId;
              return (
                <button
                  key={link.name}
                  onClick={() => scrollToSection(link.sectionId)}
                  className={`relative text-xs lg:text-sm font-medium tracking-normal transition-all duration-300 cursor-pointer pb-1 px-2 whitespace-nowrap ${scrolled
                    ? isActive
                      ? "text-black"
                      : "text-gray-900 hover:text-black"
                    : isActive
                      ? "text-white"
                      : "text-white/90 hover:text-white"
                    }`}
                >
                  {link.name}
                  <span
                    className={`absolute bottom-0 left-0 h-0.5 bg-current transition-all duration-300 ${isActive
                      ? "w-full"
                      : "w-0 group-hover:w-full hover:w-full"
                      }`}
                  ></span>
                </button>
              );
            })}
          </div>

          {/* UAN Number Button - Desktop */}
          <Link
            href="tel:+923350008032"
            className={`hidden lg:flex items-center px-3 xl:px-4 py-2 rounded-lg font-medium text-xs xl:text-sm transition-all duration-300 shrink-0 whitespace-nowrap ${scrolled
              ? "bg-[#084B73] text-white hover:bg-[#084B73]/90"
              : "bg-white text-[#084B73] hover:bg-white/90"
              }`}
          >
            <Phone size={16} className="inline-block mr-1 shrink-0" />{" "}
            <span className="hidden xl:inline">UAN:&nbsp;</span>
            <span className="tracking-wide">+92&nbsp;335&nbsp;000&nbsp;8032</span>
          </Link>

          {/* Mobile Menu Button */}
          <button
            className={`lg:hidden transition-colors p-2 cursor-pointer shrink-0 ${scrolled
              ? "text-black hover:text-gray-900"
              : "text-white hover:text-white/80"
              }`}
            onClick={() => setIsOpen(!isOpen)}
            aria-label="Toggle menu"
          >
            {isOpen ? <X size={24} /> : <Menu size={24} />}
          </button>
        </div>

        {/* Mobile Menu */}
        <div
          className={`lg:hidden overflow-hidden transition-all duration-300 ease-in-out ${isOpen
            ? "max-h-[calc(100vh-6rem)] opacity-100"
            : "max-h-0 opacity-0"
            }`}
        >
          <div className="pb-4 pt-2 space-y-1">
            {navLinks.map((link, index) => {
              const isActive = activeSection === link.sectionId;
              return (
                <button
                  key={link.name}
                  onClick={() => scrollToSection(link.sectionId)}
                  className={`block w-full text-left py-3 px-4 transition-all duration-300 font-semibold rounded-lg cursor-pointer ${scrolled
                    ? isActive
                      ? "text-black bg-black/10"
                      : "text-gray-900 hover:text-black hover:bg-black/5"
                    : isActive
                      ? "text-white bg-white/20"
                      : "text-white/90 hover:text-white hover:bg-white/10"
                    }`}
                  style={{
                    animationDelay: `${index * 50}ms`,
                    marginTop: index === 0 ? "20px" : "0",
                  }}
                >
                  {link.name}
                </button>
              );
            })}
            {/* Mobile UAN Button */}
            <Link
              href="tel:+923350008032"
              className={`flex items-center justify-center gap-2 w-full rounded-xl px-5 py-3 text-sm font-medium transition mt-2 ${scrolled
                ? "bg-[#084B73] text-white hover:bg-[#084B73]/90"
                : "bg-white text-[#084B73] hover:bg-white/90"
                }`}
            >
              <Phone size={16} /> UAN: +923350008032
            </Link>
            <button className="w-full rounded-xl bg-black/80 px-5 py-2 text-sm font-medium text-white backdrop-blur transition hover:bg-black mt-2 cursor-pointer">
              Get Started
            </button>
          </div>
        </div>
      </div>
    </nav>
  );
}
