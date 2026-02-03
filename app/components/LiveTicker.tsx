'use client';

export default function LiveTicker() {
  const acceptances = [
    "🎉 Sarah A. admitted to Kings College London",
    "🎓 Bilal K. secured $20k Scholarship at Arizona State",
    "✈️ Visa Approved: Fatima R. (USA - F1)",
    "🎉 Hamza M. admitted to Uni of Melbourne",
    "🎓 Ayesha Z. secured 100% ride to TU Munich (Germany)",
    "🎉 David L. admitted to University of Cambridge",
    "✈️ Visa Approved: Omar S. (Australia - Student Visa)",
    "🎓 Zainab M. secured Full Scholarship at UBC",
    "🎉 Hassan B. admitted to Technical University of Munich",
    "🎓 Maria K. secured $15k Merit Award at University of Toronto",
    "✈️ Visa Approved: Aisha T. (UK - Tier 4)",
    "🎉 Ahmed M. admitted to Imperial College London",
    "🎓 Noor S. secured $25k Scholarship at Boston University",
    "✈️ Visa Approved: Ibrahim F. (Canada - Study Permit)",
    "🎉 Layla H. admitted to London School of Economics",
    "🎓 Youssef A. secured Full Tuition Waiver at University of Waterloo",
    "✈️ Visa Approved: Sana K. (USA - F1)",
    "🎉 Rahim T. admitted to University of Sydney",
    "🎓 Hiba N. secured $30k Presidential Scholarship at NYU",
    "✈️ Visa Approved: Karim P. (Germany - Student Visa)",
  ];

  return (
    <div className="bg-[var(--primary-blue)] text-white overflow-hidden py-3 mt-3 mb-6 border-y border-white/10 relative">
      <div className="flex whitespace-nowrap animate-marquee">
        {[...acceptances, ...acceptances].map((item, i) => (
          <span
            key={i}
            className="mx-8 text-sm font-medium tracking-wide opacity-90 inline-flex items-center gap-2"
          >
            <span className="w-2 h-2 rounded-full bg-green-400 animate-pulse shrink-0"></span>
            {item}
          </span>
        ))}
      </div>
    </div>
  );
}
