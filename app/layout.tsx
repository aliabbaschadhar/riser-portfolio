import type { Metadata, Viewport } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";
import { colors } from "@/lib/colors";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
  display: "swap",
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
  display: "swap",
});

const siteUrl = "https://therisersconsultancy.com";

export const metadata: Metadata = {
  metadataBase: new URL(siteUrl),
  title: {
    default: "The Risers Consultancy | Study Abroad & Immigration Consultants in Pakistan",
    template: "%s | The Risers Consultancy",
  },
  description:
    "The Risers Consultancy is Pakistan's leading immigration and study abroad consultancy. Expert visa services for UK, USA, Canada, Australia & Europe. 99% success rate. Free consultation available.",

  keywords: [
    "study abroad consultants",
    "immigration consultants Pakistan",
    "visa consultancy",
    "UK student visa",
    "USA student visa",
    "Canada immigration",
    "Australia study visa",
    "Europe study abroad",
    "IELTS preparation",
    "university admission abroad",
    "The Risers Consultancy",
    "best visa consultants",
    "study in UK",
    "study in USA",
    "study in Canada",
    "study in Australia",
    "Hafizabad visa consultants",
    "Faisalabad immigration",
    "Sargodha study abroad",
  ],
  authors: [{ name: "The Risers Consultancy", url: siteUrl }],
  creator: "The Risers Consultancy",
  publisher: "The Risers Consultancy",
  formatDetection: {
    email: true,
    address: true,
    telephone: true,
  },
  alternates: {
    canonical: siteUrl,
  },
  openGraph: {
    type: "website",
    locale: "en_US",
    url: siteUrl,
    siteName: "The Risers Consultancy",
    title: "The Risers Consultancy | Study Abroad & Immigration Consultants",
    description:
      "Transform your dreams of studying abroad into reality. Expert visa consultation, 99% success rate, and personalized guidance for UK, USA, Canada, Australia & Europe.",
    images: [
      {
        url: "/images/logo/logo.svg",
        width: 1200,
        height: 630,
        alt: "The Risers Consultancy - Study Abroad Experts",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "The Risers Consultancy | Study Abroad & Immigration Consultants",
    description:
      "Transform your dreams of studying abroad into reality. Expert visa consultation with 99% success rate.",
    images: ["/images/logo/logo.svg"],
    creator: "@TheRisers786",
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      "max-video-preview": -1,
      "max-image-preview": "large",
      "max-snippet": -1,
    },
  },
  verification: {
    // Add your verification codes here when available
    // google: "your-google-verification-code",
    // yandex: "your-yandex-verification-code",
  },
  category: "Education",
  icons: {
    icon: [
      { url: "/icon.svg", type: "image/svg+xml" },
    ],
    apple: [
      { url: "/apple-icon.svg", type: "image/svg+xml" },
    ],
  },
};

export const viewport: Viewport = {
  themeColor: [
    { media: "(prefers-color-scheme: light)", color: colors.primary.DEFAULT },
    { media: "(prefers-color-scheme: dark)", color: colors.primary.darker },
  ],
  width: "device-width",
  initialScale: 1,
  maximumScale: 5,
};

// JSON-LD Structured Data
const jsonLd = {
  "@context": "https://schema.org",
  "@graph": [
    {
      "@type": "Organization",
      "@id": `${siteUrl}/#organization`,
      name: "The Risers Consultancy",
      url: siteUrl,
      logo: {
        "@type": "ImageObject",
        url: `${siteUrl}/images/logo/logo.svg`,
        width: 512,
        height: 512,
      },
      description:
        "Leading immigration and study abroad consultancy in Pakistan with 99% success rate.",
      foundingDate: "2021",
      contactPoint: [
        {
          "@type": "ContactPoint",
          telephone: "+92-335-000-8032",
          contactType: "customer service",
          areaServed: "PK",
          availableLanguage: ["English", "Urdu"],
        },
      ],
      sameAs: [
        "https://www.facebook.com/profile.php?id=100088528545444",
        "https://x.com/TheRisers786",
        "https://www.instagram.com/therisersconsultancypvtltd/",
      ],
      address: {
        "@type": "PostalAddress",
        addressLocality: "Hafizabad",
        addressCountry: "PK",
      },
    },
    {
      "@type": "WebSite",
      "@id": `${siteUrl}/#website`,
      url: siteUrl,
      name: "The Risers Consultancy",
      description: "Study Abroad & Immigration Consultants in Pakistan",
      publisher: {
        "@id": `${siteUrl}/#organization`,
      },
      potentialAction: {
        "@type": "SearchAction",
        target: {
          "@type": "EntryPoint",
          urlTemplate: `${siteUrl}/?s={search_term_string}`,
        },
        "query-input": "required name=search_term_string",
      },
    },
    {
      "@type": "LocalBusiness",
      "@id": `${siteUrl}/#localbusiness`,
      name: "The Risers Consultancy",
      image: `${siteUrl}/images/logo/logo.svg`,
      url: siteUrl,
      telephone: "+92-335-000-8032",
      priceRange: "$$",
      address: {
        "@type": "PostalAddress",
        streetAddress: "Main Office",
        addressLocality: "Hafizabad",
        addressCountry: "PK",
      },
      geo: {
        "@type": "GeoCoordinates",
        latitude: 32.0714,
        longitude: 73.6886,
      },
      openingHoursSpecification: [
        {
          "@type": "OpeningHoursSpecification",
          dayOfWeek: ["Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday"],
          opens: "09:00",
          closes: "18:00",
        },
      ],
      aggregateRating: {
        "@type": "AggregateRating",
        ratingValue: "4.9",
        reviewCount: "250",
      },
    },
    {
      "@type": "EducationalOrganization",
      name: "The Risers Consultancy",
      description:
        "Expert guidance for students seeking to study abroad in UK, USA, Canada, Australia, and Europe.",
      url: siteUrl,
      areaServed: {
        "@type": "Country",
        name: "Pakistan",
      },
    },
    {
      "@type": "Service",
      serviceType: "Immigration Consultation",
      provider: {
        "@id": `${siteUrl}/#organization`,
      },
      areaServed: ["United Kingdom", "United States", "Canada", "Australia", "Europe"],
      description:
        "Complete visa and immigration consultation services including student visas, work permits, and settlement visas.",
    },
  ],
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className="overflow-x-hidden">
      <head>
        <link rel="manifest" href="/manifest.json" />
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
        />
      </head>
      <body
        className={`${geistSans.variable} ${geistMono.variable} antialiased overflow-x-hidden`}
        suppressHydrationWarning
      >
        {children}
      </body>
    </html>
  );
}
