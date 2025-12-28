"use client";

import { useState, useEffect } from 'react';
import {
  Navbar,
  Hero,
  About,
  LiveTicker,
  Services,
  Universities,
  Offices,
  WhyUs,
  Process,
  Team,
  Testimonials,
  Contact,
  Footer,
  Loader
} from './components/index';

export default function Home() {
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    // Simulate loading time
    const timer = setTimeout(() => {
      setIsLoading(false);
    }, 2000); // 2 seconds loading time

    return () => clearTimeout(timer);
  }, []);

  useEffect(() => {
    if (!isLoading) return;

    const scrollY = window.scrollY;
    const prevHtmlOverflow = document.documentElement.style.overflow;
    const prevBodyOverflow = document.body.style.overflow;
    const prevBodyPosition = document.body.style.position;
    const prevBodyTop = document.body.style.top;
    const prevBodyWidth = document.body.style.width;

    document.documentElement.style.overflow = 'hidden';
    document.body.style.overflow = 'hidden';
    document.body.style.position = 'fixed';
    document.body.style.top = `-${scrollY}px`;
    document.body.style.width = '100%';

    return () => {
      document.documentElement.style.overflow = prevHtmlOverflow;
      document.body.style.overflow = prevBodyOverflow;
      document.body.style.position = prevBodyPosition;
      document.body.style.top = prevBodyTop;
      document.body.style.width = prevBodyWidth;
      window.scrollTo(0, scrollY);
    };
  }, [isLoading]);

  return (
    <>
      <div className="min-h-screen bg-white">
        <div
          aria-busy={isLoading}
          className={isLoading ? 'pointer-events-none select-none blur-[1px] opacity-80' : ''}
        >
          <Navbar />
          <Hero />
          <About />
          <LiveTicker />
          <Services />
          <Universities />
          <Offices />
          <WhyUs />
          <Process />
          <Team />
          <Testimonials />
          <Contact />
          <Footer />
        </div>

        {isLoading && <Loader label="Welcome to The Risers Consultancy" fullscreen />}
      </div>
    </>
  );
}
