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
      <div className="mx-auto px-4 sm:px-8 md:px-16 lg:px-20 xl:px-44 py-3">
        <div className="flex justify-between lg:justify-center items-center relative py-3">
          {/* Logo */}
          <button
            onClick={() => scrollToSection("home")}
            className="absolute left-0 flex items-center group cursor-pointer hover:opacity-80 transition-opacity duration-300"
          >
            {scrolled ? (
              <Image
                src="/images/logo.png"
                alt="The Risers Consultancy Logo"
                width={140}
                height={50}
                className="object-contain w-25 sm:w-30 md:w-35"
              />
            ) : (
              <Image
                src="/images/whitelogo.png"
                alt="The Risers Consultancy Logo"
                width={140}
                height={50}
                className="object-contain w-25 sm:w-30 md:w-35"
              />
            )}
          </button>

          {/* Desktop Navigation - Centered */}
          <div className="hidden lg:flex items-center gap-3 xl:gap-6">
            {navLinks.map((link) => {
              const isActive = activeSection === link.sectionId;
              return (
                <button
                  key={link.name}
                  onClick={() => scrollToSection(link.sectionId)}
                  className={`relative text-sm font-medium tracking-normal transition-all duration-300 cursor-pointer pb-1 ${scrolled
                    ? isActive
                      ? "text-black"
                      : "text-gray-900 hover:text-black"
                    : isActive
                      ? "text-white"
                      : "text-white/90 hover:text-white"
                    }`}
                >
                  {link.name}
                  <span className={`absolute bottom-0 left-0 h-0.5 bg-current transition-all duration-300 ${isActive ? 'w-full' : 'w-0 group-hover:w-full hover:w-full'
                    }`}></span>
                </button>
              );
            })}

            {/* UAN Number Button */}
            <Link
              href="tel:+111-111-2022-111"
              className={`absolute right-0 hidden xl:flex items-center px-3 xl:px-4 py-2 rounded-lg font-medium text-xs xl:text-sm transition-all duration-300 ${scrolled
                ? "bg-[#084B73] text-white hover:bg-[#084B73]/90"
                : "bg-white text-[#084B73] hover:bg-white/90"
                }`}
            >
              <Phone size={16} className="inline-block mr-1" /> <span className="hidden xl:inline">UAN:</span> 111-111-2022-111
            </Link>
          </div>

          {/* Mobile Menu Button */}
          <button
            className={`absolute right-0 lg:hidden transition-colors p-2 cursor-pointer ${scrolled
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
          className={`lg:hidden overflow-hidden transition-all duration-300 ease-in-out ${isOpen ? "max-h-96 opacity-100" : "max-h-0 opacity-0"
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
                  style={{ animationDelay: `${index * 50}ms` }}
                >
                  {link.name}
                </button>
              );
            })}
            {/* Mobile UAN Button */}
            <Link
              href="tel:+111-111-2022-111"
              className={`flex items-center justify-center gap-2 w-full rounded-xl px-5 py-3 text-sm font-medium transition mt-2 ${scrolled
                ? "bg-[#084B73] text-white hover:bg-[#084B73]/90"
                : "bg-white text-[#084B73] hover:bg-white/90"
                }`}
            >
              <Phone size={16} /> UAN: 111-111-2022-111
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
