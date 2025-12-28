'use client';

import { Star, Quote } from 'lucide-react';
import SimpleMarquee from '@/components/fancy/blocks/simple-marquee';
import { motion } from 'framer-motion';

const EASE_OUT = [0.16, 1, 0.3, 1] as const;

// Animation variants
const fadeInUp = {
  hidden: { opacity: 0, y: 30 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.6, ease: EASE_OUT } }
};

export default function Testimonials() {
  const testimonials = [
    {
      name: 'Sarah Ahmed',
      role: 'Student at University of Oxford',
      country: 'UK',
      image: '/images/testimonials/student1.jpg',
      rating: 5,
      text: 'The Risers Consultancy made my dream of studying at Oxford a reality. Their guidance throughout the application process was invaluable. They helped me craft a compelling personal statement and prepared me thoroughly for the interview.',
      year: '2023',
    },
    {
      name: 'Muhammad Hassan',
      role: 'Student at University of Toronto',
      country: 'Canada',
      image: '/images/testimonials/student2.jpg',
      rating: 5,
      text: 'I cannot thank The Risers Consultancy enough! They secured a $25,000 scholarship for me and handled everything from application to visa. Professional, caring, and incredibly knowledgeable.',
      year: '2023',
    },
    {
      name: 'Emma Wilson',
      role: 'Student at University of Melbourne',
      country: 'Australia',
      image: '/images/testimonials/student3.jpg',
      rating: 5,
      text: 'Best decision I made was choosing The Risers Consultancy. They understood my goals perfectly and matched me with the ideal university. The visa process was smooth and stress-free thanks to their expert guidance.',
      year: '2024',
    },
    {
      name: 'Ali Raza',
      role: 'Student at MIT',
      country: 'USA',
      image: '/images/testimonials/student4.jpg',
      rating: 5,
      text: 'Getting into MIT seemed impossible until I worked with The Risers Consultancy. Their team\'s expertise in US admissions and scholarship applications was phenomenal. They truly care about your success!',
      year: '2024',
    },
    {
      name: 'Zara Khan',
      role: 'Student at University of Manchester',
      country: 'UK',
      image: '/images/testimonials/student5.jpg',
      rating: 5,
      text: 'The Risers Consultancy exceeded all my expectations. From university selection to accommodation arrangements, they took care of everything. I felt supported every step of the way.',
      year: '2023',
    },
    {
      name: 'David Chen',
      role: 'Student at Technical University Munich',
      country: 'Germany',
      image: '/images/testimonials/student6.jpg',
      rating: 5,
      text: 'Outstanding service! The team helped me secure admission to TUM with a full scholarship. Their knowledge of German universities and visa requirements was impressive. Highly recommended!',
      year: '2024',
    },
    {
      name: 'Amara Okonkwo',
      role: 'Student at University of Cambridge',
      country: 'Nigeria',
      image: '/images/testimonials/student7.jpg',
      rating: 5,
      text: 'The Risers Consultancy transformed my university aspirations into reality. Their personalized approach and attention to detail made all the difference. I\'m now thriving at Cambridge!',
      year: '2024',
    },
    {
      name: 'Priya Sharma',
      role: 'Student at Stanford University',
      country: 'India',
      image: '/images/testimonials/student8.jpg',
      rating: 5,
      text: 'From initial consultation to final acceptance, The Risers Consultancy was my backbone. They secured a $50,000 annual scholarship and guided me through every challenge. Exceptional team!',
      year: '2024',
    },
    {
      name: 'Liam O\'Brien',
      role: 'Student at University of Edinburgh',
      country: 'Ireland',
      image: '/images/testimonials/student9.jpg',
      rating: 5,
      text: 'The best investment in my future! The Risers Consultancy\'s expertise in Scottish universities is unmatched. They made the entire process seamless and stress-free.',
      year: '2023',
    },
    {
      name: 'Fatima Al-Mansouri',
      role: 'Student at University of Toronto',
      country: 'UAE',
      image: '/images/testimonials/student10.jpg',
      rating: 5,
      text: 'Risers Consultancy helped me navigate international student requirements flawlessly. Their knowledge and support system is incredible. I feel at home at Toronto thanks to their preparation!',
      year: '2024',
    },
    {
      name: 'Lucas Silva',
      role: 'Student at University of California Berkeley',
      country: 'Brazil',
      image: '/images/testimonials/student11.jpg',
      rating: 5,
      text: 'Amazing experience from start to finish! The Risers Consultancy secured a full scholarship for me and helped with every administrative detail. Their team truly cares about student success.',
      year: '2024',
    },
    {
      name: 'Olivia Mueller',
      role: 'Student at University of Zurich',
      country: 'Switzerland',
      image: '/images/testimonials/student12.jpg',
      rating: 5,
      text: 'The Risers Consultancy gave me the confidence to apply to top Swiss universities. Their guidance on applications and interviews was invaluable. Highly professional and supportive!',
      year: '2023',
    },
    {
      name: 'Ahmed Al-Mansuri',
      role: 'Student at University of Hong Kong',
      country: 'Egypt',
      image: '/images/testimonials/student13.jpg',
      rating: 5,
      text: 'Outstanding support throughout my journey to Hong Kong! The Risers Consultancy understood my needs perfectly and matched me with the ideal institution. Grateful for their expertise!',
      year: '2024',
    },
    {
      name: 'Isabella Costa',
      role: 'Student at London School of Economics',
      country: 'Portugal',
      image: '/images/testimonials/student14.jpg',
      rating: 5,
      text: 'The Risers Consultancy made studying at LSE feel within reach. Their comprehensive support with essays, interviews, and visa applications was exceptional. Truly recommend!',
      year: '2023',
    },
    {
      name: 'Rajesh Patel',
      role: 'Student at University of British Columbia',
      country: 'India',
      image: '/images/testimonials/student15.jpg',
      rating: 5,
      text: 'Professional, dedicated, and caring team! The Risers Consultancy secured a significant scholarship and guided me through the entire immigration process seamlessly.',
      year: '2024',
    },
    {
      name: 'Sophie Bernard',
      role: 'Student at Imperial College London',
      country: 'France',
      image: '/images/testimonials/student16.jpg',
      rating: 5,
      text: 'The Risers Consultancy\'s expertise in STEM admissions is exceptional. They helped me craft a strong technical portfolio and ace my interviews. Perfect guidance throughout!',
      year: '2024',
    },
    {
      name: 'Marcus Johnson',
      role: 'Student at University of Sydney',
      country: 'South Africa',
      image: '/images/testimonials/student17.jpg',
      rating: 5,
      text: 'Choosing The Risers Consultancy was one of my best decisions. They handled everything from application to accommodation with professionalism and care. Highly satisfied!',
      year: '2023',
    },
    {
      name: 'Aisha Mohammed',
      role: 'Student at Yale University',
      country: 'Kenya',
      image: '/images/testimonials/student18.jpg',
      rating: 5,
      text: 'The Risers Consultancy\'s personalized approach transformed my application. They secured a competitive scholarship and provided exceptional mentoring. Truly life-changing!',
      year: '2024',
    },
    {
      name: 'Carlos Rodriguez',
      role: 'Student at University of Toronto',
      country: 'Mexico',
      image: '/images/testimonials/student19.jpg',
      rating: 5,
      text: 'From initial counseling to final admission, The Risers Consultancy was outstanding! They secured a $30,000 scholarship and guided me through every step with expertise.',
      year: '2024',
    },
    {
      name: 'Hana Kim',
      role: 'Student at University of Pennsylvania',
      country: 'South Korea',
      image: '/images/testimonials/student20.jpg',
      rating: 5,
      text: 'The Risers Consultancy exceeded all my expectations! Their strategic guidance on essays and interviews was invaluable. I\'m thriving at UPenn thanks to their support!',
      year: '2024',
    },
    {
      name: 'Nur Yildirim',
      role: 'Student at University of Amsterdam',
      country: 'Turkey',
      image: '/images/testimonials/student21.jpg',
      rating: 5,
      text: 'Exceptional team with deep knowledge of European universities! The Risers Consultancy made my dreams of studying in Amsterdam a reality. Highly recommended!',
      year: '2024',
    },
    {
      name: 'Maya Kapoor',
      role: 'Student at University of Melbourne',
      country: 'India',
      image: '/images/testimonials/student22.jpg',
      rating: 5,
      text: 'The Risers Consultancy provided unmatched support and guidance. They secured excellent scholarship offers and guided me to choose the perfect fit. Truly grateful!',
      year: '2023',
    },
    {
      name: 'Viktor Petrov',
      role: 'Student at ETH Zurich',
      country: 'Russia',
      image: '/images/testimonials/student23.jpg',
      rating: 5,
      text: 'The Risers Consultancy\'s expertise in technical programs is remarkable! They prepared me perfectly for ETH\'s rigorous selection process. Outstanding mentors!',
      year: '2024',
    },
    {
      name: 'Jasmine Lee',
      role: 'Student at University of Toronto',
      country: 'Singapore',
      image: '/images/testimonials/student24.jpg',
      rating: 5,
      text: 'Professional, knowledgeable, and genuinely caring! The Risers Consultancy secured scholarships and handled all logistics with remarkable efficiency.',
      year: '2024',
    },
    {
      name: 'Khalid Hassan',
      role: 'Student at University of Oxford',
      country: 'Somalia',
      image: '/images/testimonials/student25.jpg',
      rating: 5,
      text: 'The Risers Consultancy made the impossible possible! Getting into Oxford seemed like a dream until they guided me through the process with expertise and care.',
      year: '2024',
    },
    {
      name: 'Camila Santos',
      role: 'Student at Stanford University',
      country: 'Brazil',
      image: '/images/testimonials/student26.jpg',
      rating: 5,
      text: 'The Risers Consultancy\'s personalized mentorship was invaluable! They secured a prestigious scholarship and prepared me thoroughly for all aspects of university life.',
      year: '2023',
    },
  ];

  const TestimonialCard = ({ testimonial }: { testimonial: typeof testimonials[0] }) => (
    <div className="w-full flex-1 min-w-0">
      <div className="group relative">
        {/* Card */}
        <div className="bg-white rounded-2xl p-6 shadow-lg hover:shadow-2xl transition-all duration-300 transform hover:-translate-y-1 relative overflow-hidden flex flex-col h-full">
          {/* Quote Background */}
          <div className="absolute top-4 right-4 opacity-5">
            <Quote size={60} className="text-[#084B73]" />
          </div>

          {/* Rating */}
          <div className="flex gap-1 mb-3 relative z-10">
            {[...Array(testimonial.rating)].map((_, i) => (
              <Star
                key={i}
                size={14}
                className="text-yellow-400 fill-yellow-400"
              />
            ))}
          </div>

          {/* Testimonial Text */}
          <p className="text-gray-700 text-xs md:text-sm leading-relaxed mb-3 relative z-10 line-clamp-3">
            &ldquo;{testimonial.text}&rdquo;
          </p>

          {/* Divider */}
          <div className="w-full h-px bg-linear-to-r from-transparent via-[#084B73]/20 to-transparent mb-3"></div>

          {/* Author Info */}
          <div className="flex items-center gap-2 relative z-10">
            {/* Avatar */}
            <div className="w-8 h-8 rounded-full bg-linear-to-br from-[#084B73] to-[#081F30] flex items-center justify-center shrink-0 shadow-md">
              <span className="text-white font-bold text-xs">
                {testimonial.name.split(' ').map(n => n[0]).join('')}
              </span>
            </div>

            {/* Details */}
            <div className="grow min-w-0">
              <h4 className="font-bold text-gray-900 text-xs truncate">
                {testimonial.name}
              </h4>
              <p className="text-xs text-[#084B73] font-medium truncate">
                {testimonial.role}
              </p>
              <div className="flex items-center gap-1 mt-0.5">
                <span className="text-xs text-gray-500">{testimonial.country}</span>
                <span className="text-xs text-gray-400">•</span>
                <span className="text-xs text-gray-500">
                  {testimonial.year}
                </span>
              </div>
            </div>
          </div>

          {/* Hover Effect Border */}
          <div className="absolute inset-0 rounded-2xl border-2 border-[#084B73] opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
        </div>
      </div>
    </div>
  );

  // Create rows of 3 testimonials each
  const testimonialRows: Array<Array<typeof testimonials[0]>> = [];
  for (let i = 0; i < testimonials.length; i += 3) {
    testimonialRows.push(testimonials.slice(i, i + 3));
  }

  type Testimonial = {
    name: string;
    role: string;
    country: string;
    image: string;
    rating: number;
    text: string;
    year: string;
  };

  const TestimonialRow = ({ testimonials }: { testimonials: Array<Testimonial> }) => (
    <div className="w-full flex gap-3 sm:gap-4 md:gap-6 mb-4 sm:mb-6 px-4 sm:px-8 md:px-16 lg:px-20 xl:px-44">
      {testimonials.map((testimonial, idx) => (
        <TestimonialCard key={idx} testimonial={testimonial} />
      ))}
    </div>
  );

  return (
    <section id="testimonials" className="w-screen relative overflow-hidden bg-linear-to-b from-white to-gray-50">
      {/* Background Decoration */}
      <div className="absolute top-20 left-10 w-72 h-72 bg-[#084B73]/5 rounded-full blur-3xl pointer-events-none"></div>
      <div className="absolute bottom-20 right-10 w-72 h-72 bg-[#081F30]/5 rounded-full blur-3xl pointer-events-none"></div>

      {/* Header */}
      <motion.div
        className="py-10 md:py-16 px-4 sm:px-8 md:px-16 lg:px-20 xl:px-44 relative z-10"
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, amount: 0.5 }}
        variants={fadeInUp}
      >
        <div className="text-center">
          <h2 className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-bold text-[#084B73] mb-4">
            Success Stories
          </h2>
          <div className="w-24 h-1 bg-[#084B73] mx-auto mb-6"></div>
          <p className="text-base sm:text-lg md:text-xl text-gray-600 max-w-3xl mx-auto leading-relaxed">
            Hear from students who achieved their dreams of studying abroad with our guidance
          </p>
        </div>
      </motion.div>

      {/* Marquee Container - 75vh */}
      <motion.div
        className="relative w-screen h-[50vh] sm:h-[60vh] md:h-[75vh] overflow-hidden"
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        viewport={{ once: true }}
        transition={{ duration: 0.8, delay: 0.2 }}
      >
        {/* Gradient overlays */}
        <div className="absolute top-0 left-0 right-0 h-16 bg-linear-to-b from-gray-50 to-transparent z-20 pointer-events-none"></div>
        <div className="absolute bottom-0 left-0 right-0 h-16 bg-linear-to-t from-gray-50 to-transparent z-20 pointer-events-none"></div>

        {/* Continuous Scrolling Testimonials with SimpleMarquee */}
        <div className="h-full">
          <SimpleMarquee
            direction="up"
            baseVelocity={1.3}
            repeat={2}
            className="h-full" slowdownOnHover={true}
            slowDownFactor={0}          >
            {testimonialRows.map((row, idx) => (
              <TestimonialRow key={idx} testimonials={row} />
            ))}
          </SimpleMarquee>
        </div>
      </motion.div>
    </section>
  );
}
