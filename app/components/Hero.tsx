'use client';

import { ArrowRight, Play, Pause, Maximize2 } from 'lucide-react';
import { useState, useRef, useEffect } from 'react';
import { motion } from 'framer-motion';
import { colors } from '@/lib/colors';

const EASE_OUT = [0.16, 1, 0.3, 1] as const;

// Animation variants
const fadeInUp = {
  hidden: { opacity: 0, y: 30 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.6, ease: EASE_OUT } }
};

const fadeInRight = {
  hidden: { opacity: 0, x: -30 },
  visible: { opacity: 1, x: 0, transition: { duration: 0.6, ease: EASE_OUT } }
};

const fadeInLeft = {
  hidden: { opacity: 0, x: 30 },
  visible: { opacity: 1, x: 0, transition: { duration: 0.6, ease: EASE_OUT } }
};

const staggerContainer = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: { staggerChildren: 0.15, delayChildren: 0.2 }
  }
};

const scaleIn = {
  hidden: { opacity: 0, scale: 0.9 },
  visible: { opacity: 1, scale: 1, transition: { duration: 0.5, ease: EASE_OUT } }
};

export default function Hero() {
  const [isPlaying, setIsPlaying] = useState(false);
  const [isExpanded, setIsExpanded] = useState(false);
  const [useFallbackVideo, setUseFallbackVideo] = useState(false);
  const [showControls, setShowControls] = useState(true);
  const mainVideoRef = useRef<HTMLVideoElement>(null);
  const expandedVideoRef = useRef<HTMLVideoElement>(null);
  const controlsTimeoutRef = useRef<NodeJS.Timeout | null>(null);

  // Disable body scroll when video is expanded
  useEffect(() => {
    const html = document.documentElement;
    const body = document.body;

    if (!isExpanded) {
      return;
    }

    const scrollY = window.scrollY;
    const previousHtmlOverflow = html.style.overflow;
    const previousBodyOverflow = body.style.overflow;
    const previousBodyPosition = body.style.position;
    const previousBodyTop = body.style.top;
    const previousBodyLeft = body.style.left;
    const previousBodyRight = body.style.right;
    const previousBodyWidth = body.style.width;

    html.style.overflow = 'hidden';
    body.style.overflow = 'hidden';
    body.style.position = 'fixed';
    body.style.top = `-${scrollY}px`;
    body.style.left = '0';
    body.style.right = '0';
    body.style.width = '100%';

    return () => {
      html.style.overflow = previousHtmlOverflow;
      body.style.overflow = previousBodyOverflow;
      body.style.position = previousBodyPosition;
      body.style.top = previousBodyTop;
      body.style.left = previousBodyLeft;
      body.style.right = previousBodyRight;
      body.style.width = previousBodyWidth;
      window.scrollTo(0, scrollY);
    };
  }, [isExpanded]);

  const scrollToContact = () => {
    const element = document.getElementById('contact');
    if (element) {
      const offset = 80;
      const elementPosition = element.getBoundingClientRect().top;
      const offsetPosition = elementPosition + window.pageYOffset - offset;
      window.scrollTo({ top: offsetPosition, behavior: 'smooth' });
    }
  };

  const togglePlay = () => {
    const video = isExpanded ? expandedVideoRef.current : mainVideoRef.current;
    if (video) {
      if (isPlaying) {
        video.pause();
        setShowControls(true);
        if (controlsTimeoutRef.current) {
          clearTimeout(controlsTimeoutRef.current);
        }
      } else {
        video.play();
        // Hide controls after 1 second when playing
        controlsTimeoutRef.current = setTimeout(() => {
          setShowControls(false);
        }, 1000);
      }
      setIsPlaying(!isPlaying);
    }
  };

  const handleMouseEnter = () => {
    setShowControls(true);
    if (controlsTimeoutRef.current) {
      clearTimeout(controlsTimeoutRef.current);
    }
  };

  const handleMouseMove = () => {
    setShowControls(true);
    if (controlsTimeoutRef.current) {
      clearTimeout(controlsTimeoutRef.current);
    }
    // Hide controls after 1 second of no mouse movement if playing
    if (isPlaying) {
      controlsTimeoutRef.current = setTimeout(() => {
        setShowControls(false);
      }, 1000);
    }
  };

  const handleMouseLeave = () => {
    if (isPlaying) {
      setShowControls(false);
    }
    if (controlsTimeoutRef.current) {
      clearTimeout(controlsTimeoutRef.current);
    }
  };

  const handleExpandView = () => {
    setIsExpanded(!isExpanded);
    setIsPlaying(false);
    setShowControls(true);
    if (controlsTimeoutRef.current) {
      clearTimeout(controlsTimeoutRef.current);
    }
    // Pause both videos when toggling
    if (mainVideoRef.current) mainVideoRef.current.pause();
    if (expandedVideoRef.current) expandedVideoRef.current.pause();
  };

  return (
    <>
      <section
        id="home"
        className="pt-24 md:pt-28 pb-12 md:pb-16 px-4 sm:px-8 md:px-16 lg:px-20 xl:px-44"
        style={{
          background: `linear-gradient(135deg, ${colors.primary.darker} 0%, ${colors.primary.light} 50%, ${colors.primary.darker} 100%)`
        }}
      >
        <div className="mx-auto my-6 md:my-12">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 md:gap-12 items-center">
            {/* Left Content */}
            <motion.div
              className="space-y-4 md:space-y-6"
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true, amount: 0.3 }}
              variants={staggerContainer}
            >
              <motion.h1
                className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl xl:text-6xl font-bold text-white leading-tight drop-shadow-lg"
                variants={fadeInRight}
              >
                Embrace New Opportunities {' '}
                <span className="text-white">

                </span>
              </motion.h1>

              <motion.p
                className="text-sm sm:text-base md:text-lg text-white/95 leading-relaxed drop-shadow-md"
                variants={fadeInRight}
              >
                The Risers Consultancy delivers innovative solutions that drive success.
                We transform challenges into opportunities with our expert consulting services.
              </motion.p>

              <motion.div className="flex flex-wrap gap-3 md:gap-4 pt-2" variants={fadeInUp}>
                <motion.button
                  onClick={scrollToContact}
                  className="bg-white backdrop-blur-2xl cursor-pointer text-black px-4 sm:px-5 py-2 rounded-full font-semibold text-sm sm:text-base transition-all duration-300 transform hover:scale-105 flex items-center gap-2"
                  style={{
                    backdropFilter: 'blur(60px) saturate(200%)',
                    WebkitBackdropFilter: 'blur(60px) saturate(200%)',
                  }}
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.95 }}
                >
                  Get Started
                  <ArrowRight size={18} />
                </motion.button>
              </motion.div>

              {/* Stats */}
              <motion.div
                className="grid grid-cols-3 gap-3 sm:gap-6 pt-6"
                variants={staggerContainer}
              >
                <motion.div variants={fadeInUp}>
                  <h3 className="text-xl sm:text-2xl md:text-3xl font-bold text-white drop-shadow-md">250+</h3>
                  <p className="text-xs sm:text-sm text-white/90 mt-1">Projects Completed</p>
                </motion.div>
                <motion.div variants={fadeInUp}>
                  <h3 className="text-xl sm:text-2xl md:text-3xl font-bold text-white drop-shadow-md">99%</h3>
                  <p className="text-xs sm:text-sm text-white/90 mt-1">Client Satisfaction</p>
                </motion.div>
                <motion.div variants={fadeInUp}>
                  <h3 className="text-xl sm:text-2xl md:text-3xl font-bold text-white drop-shadow-md">20+</h3>
                  <p className="text-xs sm:text-sm text-white/90 mt-1">Expert Consultants</p>
                </motion.div>
              </motion.div>
            </motion.div>

            {/* Right Content - Video Player */}
            <motion.div
              className="relative flex justify-center items-center"
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true, amount: 0.3 }}
              variants={fadeInLeft}
            >
              <motion.div
                className="relative rounded-2xl overflow-hidden w-full shadow-2xl transition-all duration-300 hover:shadow-3xl group"
                variants={scaleIn}
                onMouseEnter={handleMouseEnter}
                onMouseMove={handleMouseMove}
                onMouseLeave={handleMouseLeave}
              >
                <div className="aspect-video bg-linear-to-br from-white/20 to-white/10 backdrop-blur-xl flex items-center justify-center relative" style={{
                  backdropFilter: 'blur(40px) saturate(180%)',
                  WebkitBackdropFilter: 'blur(40px) saturate(180%)',
                }}>
                  {/* Video Element */}
                  <video
                    ref={mainVideoRef}
                    className="absolute inset-0 w-full h-full object-cover"
                    onPlay={() => setIsPlaying(true)}
                    onPause={() => setIsPlaying(false)}
                    onError={() => setUseFallbackVideo(true)}
                  >
                    <source src={useFallbackVideo ? "/video/video2.mp4" : "/video/video1.mp4"} type="video/mp4" />
                    Your browser does not support the video tag.
                  </video>

                  {/* Play/Pause Button */}
                  <button
                    onClick={togglePlay}
                    aria-label={isPlaying ? 'Pause video' : 'Play video'}
                    className={`absolute inset-0 flex items-center justify-center z-10 cursor-pointer group/play transition-opacity duration-300 ${showControls ? 'opacity-100' : 'opacity-0'}`}
                  >
                    <div className="w-24 h-24 bg-white/20 rounded-full flex items-center justify-center backdrop-blur-md group-hover/play:bg-white/30 transition-all border-2 border-white/30 group-hover/play:scale-110">
                      {isPlaying ? (
                        <Pause size={40} fill="white" className="text-white" />
                      ) : (
                        <Play size={40} fill="white" className="text-white ml-1" />
                      )}
                    </div>
                  </button>

                  {/* Expand View Button */}
                  <button
                    onClick={handleExpandView}
                    aria-label="Expand video to fullscreen"
                    className={`absolute bottom-4 right-4 w-12 h-12 bg-white/20 hover:bg-white/30 rounded-full flex items-center justify-center backdrop-blur-md transition-all border border-white/30 z-20 cursor-pointer ${showControls ? 'opacity-100' : 'opacity-0'}`}
                    title="Expand View"
                  >
                    <Maximize2 size={20} className="text-white" />
                  </button>
                </div>
              </motion.div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Expanded Video Overlay */}
      {isExpanded && (
        <div
          className="fixed inset-0 bg-black/60 backdrop-blur-sm z-50 flex items-center justify-center p-8 md:p-16"
          onClick={handleExpandView}
        >
          <div
            className="relative w-full max-w-6xl aspect-video rounded-2xl overflow-hidden shadow-2xl"
            onClick={(e) => e.stopPropagation()}
            onMouseMove={handleMouseMove}
            onMouseEnter={handleMouseEnter}
            onMouseLeave={handleMouseLeave}
          >
            <div className="w-full h-full bg-linear-to-br from-white/20 to-white/10 backdrop-blur-xl flex items-center justify-center relative" style={{
              backdropFilter: 'blur(40px) saturate(180%)',
              WebkitBackdropFilter: 'blur(40px) saturate(180%)',
            }}>
              {/* Video Element */}
              <video
                ref={expandedVideoRef}
                className="absolute inset-0 w-full h-full object-cover"
                onPlay={() => setIsPlaying(true)}
                onPause={() => setIsPlaying(false)}
                onError={() => setUseFallbackVideo(true)}
              >
                <source src={useFallbackVideo ? "/video/video2.mp4" : "/video/video1.mp4"} type="video/mp4" />
                Your browser does not support the video tag.
              </video>

              {/* Play/Pause Button */}
              <button
                onClick={togglePlay}
                className={`absolute inset-0 flex items-center justify-center z-10 cursor-pointer group/play transition-opacity duration-300 ${showControls ? 'opacity-100' : 'opacity-0'}`}
              >
                <div className="w-32 h-32 bg-white/20 rounded-full flex items-center justify-center backdrop-blur-md group-hover/play:bg-white/30 transition-all border-2 border-white/30 group-hover/play:scale-110">
                  {isPlaying ? (
                    <Pause size={48} fill="white" className="text-white" />
                  ) : (
                    <Play size={48} fill="white" className="text-white ml-2" />
                  )}
                </div>
              </button>

              {/* Close Button */}
              <button
                onClick={handleExpandView}
                className={`absolute top-4 right-4 w-12 h-12 bg-white/20 hover:bg-white/30 rounded-full flex items-center justify-center backdrop-blur-md transition-all border border-white/30 z-20 text-white text-2xl font-bold cursor-pointer ${showControls ? 'opacity-100' : 'opacity-0'}`}
                title="Close"
              >
                ×
              </button>
            </div>
          </div>
        </div>
      )}
    </>
  );
}
