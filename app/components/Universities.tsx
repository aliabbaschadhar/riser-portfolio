"use client";

import { motion } from "framer-motion";
import AccreditationCircles from "./Accreditation";
import Image from "next/image";
import SimpleMarquee from "@/components/fancy/blocks/simple-marquee";

const EASE_OUT = [0.16, 1, 0.3, 1] as const;

// Animation variants
const fadeInUp = {
  hidden: { opacity: 0, y: 30 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.6, ease: EASE_OUT } },
};

// University logo card component for cleaner code
const UniversityCard = ({ name, logo }: { name: string; logo: string }) => (
  <div className="shrink-0 w-40 sm:w-44 md:w-48 h-24 sm:h-28 mx-2 group">
    <div className="relative w-full h-full bg-white rounded-xl shadow-md hover:shadow-lg transition-shadow duration-300 border border-gray-100 overflow-hidden">
      <Image
        src={logo}
        alt={name}
        fill
        sizes="(max-width: 640px) 160px, (max-width: 768px) 176px, 192px"
        loading="lazy"
        className="object-contain p-4 group-hover:scale-105 transition-transform duration-300"
      />
    </div>
  </div>
);

export default function Universities() {
  // List of all universities with their logos
  const allUniversities = [
    { name: "American University", country: "USA", logo: "/images/unilogos/American University is one of the many colleges….jpg" },
    { name: "Middlesex University", country: "UK", logo: "/images/unilogos/Middlesex University, Hendon, London.jpg" },
    { name: "Newcastle University", country: "UK", logo: "/images/unilogos/Newcastle University Logo.jpg" },
    { name: "Nottingham University", country: "UK", logo: "/images/unilogos/Nottingham Universities.jpg" },
    { name: "Queen's University", country: "UK", logo: "/images/unilogos/Queen's University Appoints New Vice-Chancellor.jpg" },
    { name: "Aston University", country: "UK", logo: "/images/unilogos/Recently graduated from Aston University with a… (1).jpg" },
    { name: "University of Huddersfield", country: "UK", logo: "/images/unilogos/huddersfield.jpg" },
    { name: "Ulster University", country: "UK", logo: "/images/unilogos/جامعة ألستـر البريطانيـة (Ulster University) تقدم….jpg" },
    { name: "UMFK University", country: "USA", logo: "/images/unilogos/UMFK's Rural U to offer free classes to high….jpg" },
    { name: "Leading University", country: "International", logo: "/images/unilogos/University.jpg" },
    { name: "Global University", country: "International", logo: "/images/unilogos/We are pleased and excited to inform you all that….jpg" },
    { name: "Premier Institute", country: "UK", logo: "/images/unilogos/university logo.png" },
    { name: "Excellence University", country: "UK", logo: "/images/unilogos/Screenshot 2026-01-25 002209.png" },
    { name: "Innovation College", country: "International", logo: "/images/unilogos/Screenshot 2026-01-25 002312.png" },
    { name: "Academic Institute", country: "UK", logo: "/images/unilogos/Screenshot 2026-01-25 002410.png" },
    { name: "Research University", country: "International", logo: "/images/unilogos/Screenshot 2026-01-25 002555.png" },
    { name: "Excellence College", country: "UK", logo: "/images/unilogos/Screenshot 2026-01-25 002642.png" },
    { name: "Global Institute", country: "International", logo: "/images/unilogos/Screenshot 2026-01-25 002907.png" },
  ];

  // Split into 4 rows for the scrolling effect
  const row1 = allUniversities.slice(0, 5);
  const row2 = allUniversities.slice(5, 10);
  const row3 = allUniversities.slice(10, 15);
  const row4 = allUniversities.slice(15);

  return (
    <section
      id="universities"
      aria-labelledby="universities-heading"
      className="py-12 md:py-16 px-4 sm:px-8 md:px-16 lg:px-20 xl:px-44 bg-linear-to-br from-gray-50 via-white to-blue-50 overflow-hidden"
    >
      <div className="mx-auto">
        <motion.div
          className="text-center mb-10 md:mb-14"
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.5 }}
          variants={fadeInUp}
        >
          <h2 id="universities-heading" className="text-2xl sm:text-3xl md:text-4xl font-bold text-[#084B73] mb-4 md:mb-5">
            Partner Universities
          </h2>
          <div className="w-20 md:w-24 h-1 bg-[#084B73] mx-auto mb-4 md:mb-5"></div>
          <p className="text-base sm:text-lg md:text-xl text-gray-600 max-w-3xl mx-auto leading-relaxed">
            We have partnerships with world-renowned universities to help you
            achieve your educational goals
          </p>
        </motion.div>

        {/* Multi-row Auto-scrolling University Logos with SimpleMarquee */}
        <motion.div
          className="relative space-y-4"
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.2 }}
        >
          {/* Row 1 - Scroll Left */}
          <div className="overflow-hidden">
            <SimpleMarquee
              direction="left"
              baseVelocity={9}
              slowdownOnHover={true}
              slowDownFactor={0.3}
              repeat={4}
            >
              {row1.map((uni, index) => (
                <UniversityCard key={index} name={uni.name} logo={uni.logo} />
              ))}
            </SimpleMarquee>
          </div>

          {/* Row 2 - Scroll Right */}
          <div className="overflow-hidden">
            <SimpleMarquee
              direction="right"
              baseVelocity={8}
              slowdownOnHover={true}
              slowDownFactor={0.3}
              repeat={4}
            >
              {row2.map((uni, index) => (
                <UniversityCard key={index} name={uni.name} logo={uni.logo} />
              ))}
            </SimpleMarquee>
          </div>

          {/* Row 3 - Scroll Left (slower) */}
          <div className="overflow-hidden">
            <SimpleMarquee
              direction="left"
              baseVelocity={7}
              slowdownOnHover={true}
              slowDownFactor={0.3}
              repeat={4}
            >
              {row3.map((uni, index) => (
                <UniversityCard key={index} name={uni.name} logo={uni.logo} />
              ))}
            </SimpleMarquee>
          </div>

          {/* Row 4 - Scroll Right (slower) */}
          <div className="overflow-hidden">
            <SimpleMarquee
              direction="right"
              baseVelocity={7}
              slowdownOnHover={true}
              slowDownFactor={0.3}
              repeat={4}
            >
              {row4.map((uni, index) => (
                <UniversityCard key={index} name={uni.name} logo={uni.logo} />
              ))}
            </SimpleMarquee>
          </div>

          {/* Gradient Overlays - Left and Right */}
          <div className="absolute top-0 left-0 w-20 h-full bg-linear-to-r from-gray-50 via-white/80 to-transparent pointer-events-none z-10"></div>
          <div className="absolute top-0 right-0 w-20 h-full bg-linear-to-l from-gray-50 via-white/80 to-transparent pointer-events-none z-10"></div>
        </motion.div>

        {/* Accreditation section - Circular badges */}
        <AccreditationCircles />
      </div>
    </section>
  );
}
