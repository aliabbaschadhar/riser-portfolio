"use client";

import { useState, useEffect } from "react";

export function PaymentOverlay({ children }: { children: React.ReactNode }) {
  const [isVisible, setIsVisible] = useState(true);

  useEffect(() => {
    if (!isVisible) {
      // Re-appear after 4 minutes (4 * 60 * 1000 milliseconds)
      const timer = setTimeout(() => {
        setIsVisible(true);
      }, 4 * 60 * 1000);
      
      return () => clearTimeout(timer);
    }
  }, [isVisible]);

  return (
    <>
      {isVisible && (
        <div className="fixed inset-0 z-[999999] flex flex-col items-center justify-center p-6 overflow-hidden">
          {/* Ambient animated background */}
          <div className="absolute inset-0 bg-black/40 backdrop-blur-sm"></div>
          
          {/* Moving gradient orbs */}
          <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[800px] h-[800px] opacity-30 pointer-events-none" style={{ animation: 'spin 20s linear infinite' }}>
            <div className="absolute top-0 left-0 w-96 h-96 bg-red-600/40 rounded-full mix-blend-screen filter blur-[100px] animate-pulse"></div>
            <div className="absolute bottom-0 right-0 w-96 h-96 bg-orange-600/40 rounded-full mix-blend-screen filter blur-[100px] animate-pulse" style={{ animationDelay: '2s' }}></div>
          </div>

          {/* Noise texture overlay */}
          <div className="absolute inset-0 opacity-[0.03] pointer-events-none" style={{ backgroundImage: 'url("data:image/svg+xml,%3Csvg viewBox=%220 0 200 200%22 xmlns=%22http://www.w3.org/2000/svg%22%3E%3Cfilter id=%22noiseFilter%22%3E%3CfeTurbulence type=%22fractalNoise%22 baseFrequency=%220.65%22 numOctaves=%223%22 stitchTiles=%22stitch%22/%3E%3C/filter%3E%3Crect width=%22100%25%22 height=%22100%25%22 filter=%22url(%23noiseFilter)%22/%3E%3C/svg%3E")' }}></div>

          <style dangerouslySetInnerHTML={{__html: `
            @keyframes float {
              0%, 100% { transform: translateY(0); }
              50% { transform: translateY(-10px); }
            }
            @keyframes shimmer {
              100% { transform: translateX(100%); }
            }
            @keyframes radar {
              0% { transform: scale(1); opacity: 0.8; }
              100% { transform: scale(2.5); opacity: 0; }
            }
            .spell-card { animation: float 6s ease-in-out infinite; }
            .shimmer-btn { position: relative; overflow: hidden; }
            .shimmer-btn::after {
              content: '';
              position: absolute;
              top: 0; left: -100%; width: 50%; height: 100%;
              background: linear-gradient(to right, transparent, rgba(255,255,255,0.3), transparent);
              transform: skewX(-20deg);
              animation: shimmer 3s infinite;
            }
            .radar-pulse::before, .radar-pulse::after {
              content: '';
              position: absolute;
              inset: 0;
              border-radius: 50%;
              border: 1px solid rgba(239, 68, 68, 0.5);
              animation: radar 3s cubic-bezier(0.0, 0.2, 0.8, 1) infinite;
            }
            .radar-pulse::after { animation-delay: 1.5s; }
          `}} />

          {/* Glass Card */}
          <div className="spell-card relative w-full max-w-[95%] sm:max-w-lg md:max-w-2xl bg-black/60 p-8 sm:p-10 md:p-14 rounded-[2rem] shadow-2xl border border-white/10 text-center backdrop-blur-2xl z-10 overflow-hidden group mx-auto">
            {/* Close Button */}
            <button 
              onClick={() => setIsVisible(false)}
              className="absolute top-4 right-4 z-50 text-gray-400 hover:text-white transition-colors bg-white/5 hover:bg-white/10 rounded-full p-2 outline-none ring-2 ring-transparent focus:ring-white/50"
              aria-label="Close"
            >
              <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 sm:h-6 sm:w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
              </svg>
            </button>

            {/* Inner subtle glow */}
            <div className="absolute inset-0 pointer-events-none bg-gradient-to-b from-white/5 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-1000"></div>
            
            <div className="relative w-20 h-20 sm:w-24 sm:h-24 mx-auto mb-6 sm:mb-8 bg-red-500/10 rounded-full flex items-center justify-center radar-pulse">
              <div className="absolute inset-0 rounded-full bg-red-500/20 blur-md"></div>
              <svg xmlns="http://www.w3.org/2000/svg" className="relative h-10 w-10 sm:h-12 sm:w-12 text-red-500 drop-shadow-[0_0_15px_rgba(239,68,68,0.5)]" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M12 15v2m-6 4h12a2 2 0 002-2v-6a2 2 0 00-2-2H6a2 2 0 00-2 2v6a2 2 0 002 2zm10-10V7a4 4 0 00-8 0v4h8z" />
              </svg>
            </div>
            
            <h1 className="text-3xl sm:text-4xl md:text-5xl font-extrabold mb-4 sm:mb-6 tracking-tight bg-gradient-to-br from-white via-gray-200 to-gray-500 bg-clip-text text-transparent drop-shadow-sm">
              Access Restricted
            </h1>
            
            <p className="text-base sm:text-lg text-gray-300 mb-8 sm:mb-10 leading-relaxed font-light">
              This digital experience has been temporarily suspended pending the settlement of final development invoices. 
              <br className="hidden sm:block" /><br className="hidden sm:block" />
              <span className="block mt-4 sm:mt-0">Please contact your engineering team to complete the transaction and instantly restore full access.</span>
            </p>
            
            <a href="https://wa.me/923059171818" target="_blank" rel="noopener noreferrer" className="shimmer-btn inline-flex items-center justify-center w-full sm:w-auto gap-3 px-8 sm:px-10 py-3 sm:py-4 rounded-full bg-gradient-to-r from-emerald-600 to-emerald-500 text-white font-semibold text-sm sm:text-base shadow-[0_0_40px_rgba(16,185,129,0.4)] hover:shadow-[0_0_60px_rgba(16,185,129,0.6)] transition-all duration-300 hover:scale-[1.02] sm:hover:scale-105 outline-none ring-2 ring-emerald-500/50 ring-offset-2 ring-offset-black">
              <span>Contact via WhatsApp</span>
              <svg xmlns="http://www.w3.org/2000/svg" width="18" height="18" className="sm:w-[20px] sm:h-[20px]" viewBox="0 0 24 24" fill="currentColor">
                <path d="M11.944 0A12 12 0 0 0 0 12a12 12 0 0 0 1.84 6.366L.004 24l5.736-1.535A11.9 11.9 0 0 0 11.944 24c6.627 0 12-5.373 12-12s-5.373-12-12-12zm6.657 17.185c-.296.837-1.472 1.558-2.036 1.62-.486.052-1.12.186-3.238-.686-2.585-1.066-4.24-3.712-4.37-3.885-.13-.173-1.042-1.39-1.042-2.653s.655-1.892.883-2.146c.228-.254.496-.318.66-.318.163 0 .327.004.471.01.157.008.368-.061.575.44.215.52.736 1.796.8 1.925.064.129.108.28.026.444-.082.164-.124.267-.248.411-.124.145-.262.32-.375.443-.125.137-.258.288-.112.54.146.252.65 1.074 1.397 1.745.962.865 1.765 1.135 2.018 1.258.253.123.4.103.549-.062.15-.164.646-.75.82-1.008.174-.258.347-.215.578-.13.23.085 1.458.687 1.706.81.25.124.415.186.475.289.06.103.06.598-.236 1.435z"/>
              </svg>
            </a>
          </div>
        </div>
      )}
      
      <div className={isVisible ? "opacity-60 pointer-events-none select-none filter blur-[1px] transition-all duration-500" : "transition-all duration-500"}>
        {children}
      </div>
    </>
  );
}
