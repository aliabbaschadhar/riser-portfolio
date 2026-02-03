import Link from "next/link";
import type { CSSProperties } from "react";
import { Metadata } from "next";

import Navbar from "./components/Navbar";
import Footer from "./components/Footer";
import { colors } from "@/lib/colors";

export const metadata: Metadata = {
  title: "Page Not Found",
  description: "The page you're looking for doesn't exist. Return to The Risers Consultancy homepage.",
  robots: {
    index: false,
    follow: true,
  },
};

const themeVars = {
  "--primary-blue": colors.primary.DEFAULT,
  "--primary-blue-light": colors.primary.light,
  "--primary-blue-darker": colors.primary.darker,
} as CSSProperties;

export default function NotFound() {
  return (
    <div className="min-h-screen bg-white" style={themeVars}>
      <Navbar />

      <main className="pt-24">
        <section className="relative overflow-hidden">
          {/* Background */}
          <div className="absolute inset-0">
            <div className="absolute -top-32 -left-32 w-96 h-96 rounded-full bg-[var(--primary-blue)]/10 blur-3xl" />
            <div
              className="absolute -bottom-32 -right-32 w-96 h-96 rounded-full blur-3xl"
              style={{ backgroundColor: `${colors.primary.light}1a` }}
            />
            <div className="absolute inset-x-0 top-0 h-px bg-linear-to-r from-transparent via-[var(--primary-blue)]/20 to-transparent" />
          </div>

          <div className="relative mx-auto px-4 sm:px-8 md:px-16 lg:px-20 xl:px-44 py-16 md:py-24">
            <div className="max-w-3xl">
              <h1 className="mt-6 text-4xl sm:text-5xl md:text-6xl font-black tracking-tight text-gray-900">
                We couldn’t find that page.
              </h1>

              <p className="mt-4 text-lg text-gray-600 leading-relaxed">
                The link may be broken, or the page may have been moved. You can head back
                to the homepage or jump straight to getting in touch.
              </p>

              <div className="mt-10 flex flex-col sm:flex-row gap-3">
                <Link
                  href="/"
                  className="inline-flex items-center justify-center rounded-xl bg-linear-to-r from-[var(--primary-blue)] via-[var(--primary-blue-light)] to-[var(--primary-blue)] bg-size-200 bg-pos-0 hover:bg-pos-100 px-6 py-3 font-bold text-white transition-all duration-500 shadow-lg hover:shadow-xl cursor-pointer"
                >
                  Back to Home
                </Link>

                <Link
                  href="/#contact"
                  className="inline-flex items-center justify-center rounded-xl border-2 border-[var(--primary-blue)]/20 bg-white px-6 py-3 font-bold text-[var(--primary-blue)] transition hover:bg-[var(--primary-blue)]/5 cursor-pointer"
                >
                  Contact Us
                </Link>
              </div>

              <div className="mt-10 rounded-2xl border border-gray-200 bg-white/70 backdrop-blur p-6 shadow-sm">
                <p className="font-bold text-gray-900">Quick links</p>
                <div className="mt-4 grid grid-cols-1 sm:grid-cols-2 gap-3">
                  {[
                    { label: "About", href: "/#about" },
                    { label: "Destinations", href: "/#services" },
                    { label: "Universities", href: "/#universities" },
                    { label: "Offices", href: "/#offices" },
                  ].map((item) => (
                    <Link
                      key={item.href}
                      href={item.href}
                      className="rounded-xl border border-gray-200 px-4 py-3 text-sm font-semibold text-gray-800 transition hover:border-[var(--primary-blue)]/30 hover:bg-[var(--primary-blue)]/5 cursor-pointer"
                    >
                      {item.label}
                    </Link>
                  ))}
                </div>
              </div>
            </div>
          </div>
        </section>
      </main>

      <Footer />
    </div>
  );
}
