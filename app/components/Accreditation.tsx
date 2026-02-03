"use client";

import Image from "next/image";
import { motion } from "framer-motion";

const items = [
  {
    ringText: "EDUCATION PARTNER",
    image: "/images/accreditation/britishcouncil.png",
  },
  {
    ringText: "CERTIFIED AGENCY",
    image: "/images/accreditation/certified.png",
  },
  {
    ringText: "TEST PARTNER",
    image: "/images/accreditation/duolingo.png",
  },
  {
    ringText: "LANGUAGE PARTNER",
    image: "/images/accreditation/languagecert.png",
  },
];

export default function AccreditationCircles() {
  return (
    <section className="py-12 sm:py-16 md:py-20 lg:py-24 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 md:px-8 lg:px-12">
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 sm:gap-8 md:gap-10 lg:gap-6 xl:gap-8 place-items-center">
          {items.map((item, index) => {
            const words = item.ringText.split(" ");
            const halfLength = Math.ceil(words.length / 2);
            const topText = words.slice(0, halfLength).join(" ");
            const bottomText = words.slice(halfLength).join(" ");

            return (
              <motion.div
                key={index}
                whileHover={{
                  scale: 1.09,
                  filter: "drop-shadow(0 20px 35px rgba(59,130,246,0.35))",
                }}
                transition={{ duration: 0.3, ease: "easeOut" }}
                className="relative w-40 h-40 xs:w-44 xs:h-44 sm:w-48 sm:h-48 md:w-52 md:h-52 lg:w-48 lg:h-48 xl:w-56 xl:h-56 flex items-center justify-center cursor-pointer"
              >
                {/* SVG Ring with Circular Text - Top Half */}
                <svg
                  viewBox="0 0 200 200"
                  className="absolute inset-0 w-full h-full"
                  preserveAspectRatio="xMidYMid meet"
                >
                  {/* Ring */}
                  <circle
                    cx="100"
                    cy="100"
                    r="90"
                    fill="none"
                    stroke="#C7D9FF"
                    strokeWidth="10"
                  />

                  {/* Circular Text Path - Top Half */}
                  <defs>
                    <path
                      id={`topPath-${index}`}
                      d="M 30,100 A 70,70 0 0,1 170,100"
                      fill="none"
                    />
                    <path
                      id={`bottomPath-${index}`}
                      d="M 170,100 A 70,70 0 0,1 30,100"
                      fill="none"
                    />
                  </defs>

                  {/* Top text */}
                  <text
                    fill="#2563EB"
                    fontSize="9"
                    fontWeight="600"
                    letterSpacing="1.2"
                    className="text-[8px] sm:text-[9px] md:text-[10px]"
                  >
                    <textPath
                      href={`#topPath-${index}`}
                      startOffset="50%"
                      textAnchor="middle"
                    >
                      {topText}
                    </textPath>
                  </text>

                  {/* Bottom text */}
                  <text
                    fill="#2563EB"
                    fontSize="9"
                    fontWeight="600"
                    letterSpacing="1.2"
                    className="text-[8px] sm:text-[9px] md:text-[10px]"
                  >
                    <textPath
                      href={`#bottomPath-${index}`}
                      startOffset="50%"
                      textAnchor="middle"
                    >
                      {bottomText}
                    </textPath>
                  </text>
                </svg>

                {/* Center Logo */}
                <div className="relative z-10 w-16 h-16 xs:w-18 xs:h-18 sm:w-20 sm:h-20 md:w-24 md:h-24 lg:w-20 lg:h-20 xl:w-24 xl:h-24 flex items-center justify-center">
                  <Image
                    src={item.image}
                    alt={item.ringText}
                    width={index === 1 ? 80 : 110}
                    height={index === 1 ? 80 : 110}
                    loading="lazy"
                    className="object-contain w-full h-full"
                  />
                </div>
              </motion.div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
