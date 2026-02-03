'use client';

import { Clock, ShieldCheck, Globe, TrendingUp, Award, LucideIcon } from 'lucide-react';
import { motion } from 'framer-motion';

const EASE_OUT = [0.16, 1, 0.3, 1] as const;

// Animation variants
const fadeInUp = {
  hidden: { opacity: 0, y: 30 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.6, ease: EASE_OUT } }
};

const staggerContainer = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: { staggerChildren: 0.12, delayChildren: 0.1 }
  }
};

const scaleIn = {
  hidden: { opacity: 0, scale: 0.95 },
  visible: { opacity: 1, scale: 1, transition: { duration: 0.5, ease: EASE_OUT } }
};

interface FeatureCardProps {
  icon: LucideIcon;
  title: string;
  description: string;
  hasGradient?: boolean;
  colSpan?: string;
}

const FeatureCard = ({ icon: Icon, title, description, hasGradient = false, colSpan = '' }: FeatureCardProps) => {
  return (
    <motion.div
      className={`group ${hasGradient ? 'bg-linear-to-br from-blue-50 to-[var(--primary-blue)]/10 border-blue-200' : 'bg-white border-gray-200'} p-4 sm:p-5 md:p-6 rounded-xl md:rounded-2xl border shadow-sm hover:shadow-xl transition-all duration-300 cursor-pointer ${colSpan}`}
      variants={fadeInUp}
      whileHover={{ y: -4, transition: { duration: 0.2 } }}
    >
      <div className={`w-12 h-12 md:w-14 md:h-14 rounded-lg md:rounded-xl border ${hasGradient ? 'border-gray-300 bg-white' : 'border-gray-300 bg-gray-50'} flex items-center justify-center mb-4`}>
        <Icon className="w-5 h-5 sm:w-6 sm:h-6 md:w-7 md:h-7 text-[var(--primary-blue)]" />
      </div>
      <h3 className="text-lg sm:text-xl md:text-2xl font-bold text-gray-900 group-hover:text-[var(--primary-blue)] transition-colors mb-3 md:mb-4">
        {title}
      </h3>
      <p className="text-xs sm:text-sm md:text-base text-gray-600 leading-relaxed">
        {description}
      </p>
    </motion.div>
  );
};

export default function WhyUs() {
  const features = [
    {
      icon: Clock,
      title: '48-Hour Shortlisting',
      description: "We don't make you wait. Get your customized university list within 2 days of assessment.",
      hasGradient: false,
      colSpan: ''
    },
    {
      icon: Award,
      title: 'Tailored Approach',
      description: 'No templates. We help you craft a narrative that highlights your unique strengths.',
      hasGradient: false,
      colSpan: ''
    },
    {
      icon: Globe,
      title: '150+ Partner Universities Worldwide',
      description: 'From Ivy League to Russell Group, we have established relationships with top institutions across USA, UK, Canada, Australia, Germany, and beyond.',
      hasGradient: true,
      colSpan: 'md:col-span-2'
    },
    {
      icon: TrendingUp,
      title: '$2M+ in Scholarships',
      description: "We've helped students secure over $2 million in scholarships and funding in the last year alone.",
      hasGradient: false,
      colSpan: ''
    }
  ];

  return (
    <section id="why-us" className="py-12 md:pb-20 px-4 sm:px-8 md:px-16 lg:px-20 xl:px-44 bg-linear-to-b from-gray-50 to-white min-h-fit md:min-h-screen flex items-center">
      <div className="mx-auto w-full">
        {/* Header - Centered */}
        <motion.div
          className="text-center mb-8 md:mb-10"
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.5 }}
          variants={fadeInUp}
        >
          <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold text-[var(--primary-blue)] mb-3 md:mb-4">
            Why We Lead
          </h2>
          <div className="w-20 md:w-24 h-1 bg-[var(--primary-blue)] mx-auto mb-3 md:mb-4"></div>
          <p className="text-sm sm:text-base md:text-lg text-gray-600 max-w-3xl mx-auto leading-relaxed">
            A premium, compliance-first process built for outcomes — not promises
          </p>
        </motion.div>

        <motion.div
          className="grid grid-cols-1 md:grid-cols-3 md:grid-rows-3 gap-4 md:gap-5 h-auto"
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.1 }}
          variants={staggerContainer}
        >
          {/* Large Feature Card - 98% Success Rate */}
          <motion.div
            className="md:col-span-2 md:row-span-2 bg-[var(--primary-blue)] text-white p-5 sm:p-6 md:p-8 lg:p-10 rounded-xl md:rounded-2xl relative overflow-hidden flex flex-col justify-between group shadow-lg transition-all duration-300 hover:shadow-2xl"
            variants={scaleIn}
            whileHover={{ scale: 1.01, transition: { duration: 0.2 } }}
          >
            <div className="absolute inset-0 opacity-0 group-hover:opacity-100 transition-opacity">
              <div className="absolute -top-12 -right-12 w-72 h-72 bg-blue-400/20 rounded-full blur-[90px]" />
              <div className="absolute -bottom-16 -left-16 w-80 h-80 bg-white/10 rounded-full blur-[100px]" />
            </div>
            <div className="relative z-10">
              <div className="inline-flex items-center gap-2 rounded-xl bg-white/10 px-4 py-2.5 mb-5">
                <ShieldCheck className="w-5 h-5 text-blue-200" />
                <span className="text-sm font-semibold text-white/90">Compliance-first review</span>
              </div>

              <h3 className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-bold mb-3 md:mb-5">99% Visa Success Rate</h3>
              <p className="text-white/80 text-sm sm:text-base md:text-lg max-w-md leading-relaxed">
                We don&apos;t gamble with your future. Our dedicated compliance team reviews every financial document,
                ensuring your case is ironclad before it reaches the embassy.
              </p>
            </div>
            <motion.div
              className="mt-8 relative z-10"
              initial={{ scaleX: 0 }}
              whileInView={{ scaleX: 1 }}
              viewport={{ once: true }}
              transition={{ duration: 1, delay: 0.3, ease: EASE_OUT }}
            >
              <div className="h-2 w-full bg-white/10 rounded-full overflow-hidden">
                <motion.div
                  className="h-full bg-blue-300 rounded-full origin-left"
                  initial={{ width: 0 }}
                  whileInView={{ width: "98%" }}
                  viewport={{ once: true }}
                  transition={{ duration: 1.2, delay: 0.5, ease: EASE_OUT }}
                />
              </div>
              <p className="text-right text-xs mt-2 text-white/60">2023-2024 Audit</p>
            </motion.div>
          </motion.div>

          {/* Feature Cards - Mapped */}
          {features.map((feature, index) => (
            <FeatureCard key={index} {...feature} />
          ))}
        </motion.div>
      </div>
    </section>
  );
}
