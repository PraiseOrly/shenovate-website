import React, { useEffect, useState } from 'react';
import { Button } from './ui/Button';
import { motion, AnimatePresence } from 'framer-motion';
import { ArrowRight, ChevronRight } from 'lucide-react';
const heroScreens = [{
  title: "Crafting Tomorrow's",
  highlight: 'Digital Excellence',
  description: 'We partner with visionary leaders to create transformative digital experiences that redefine industries and elevate brands.',
  background: 'from-slate-950 via-slate-900 to-slate-950',
  accentColor: 'from-amber-200 via-amber-400 to-amber-500',
  glow: 'bg-amber-500/20'
}, {
  title: 'Engineering Exceptional',
  highlight: 'User Experiences',
  description: 'Where artistry meets precision. We design and build digital products that captivate audiences and drive measurable business growth.',
  background: 'from-slate-950 via-purple-950/40 to-slate-950',
  accentColor: 'from-purple-300 via-purple-400 to-pink-400',
  glow: 'bg-purple-500/20'
}, {
  title: 'Delivering Uncompromising',
  highlight: 'Technical Mastery',
  description: 'Enterprise-grade solutions built with meticulous attention to detail, scalability, and performance that exceeds expectations.',
  background: 'from-slate-950 via-rose-950/30 to-slate-950',
  accentColor: 'from-rose-300 via-rose-400 to-pink-500',
  glow: 'bg-rose-500/20'
}];
export function Hero() {
  const [currentScreen, setCurrentScreen] = useState(0);
  const [direction, setDirection] = useState(1);
  useEffect(() => {
    const timer = setInterval(() => {
      handleNextClick();
    }, 8000);
    return () => clearInterval(timer);
  }, [currentScreen]);
  const handleDotClick = (index: number) => {
    setDirection(index > currentScreen ? 1 : -1);
    setCurrentScreen(index);
  };
  const handleNextClick = () => {
    setDirection(1);
    setCurrentScreen(prev => (prev + 1) % heroScreens.length);
  };
  const screen = heroScreens[currentScreen];
  const nextScreen = heroScreens[(currentScreen + 1) % heroScreens.length];
  const nextScreenNumber = (currentScreen + 1) % heroScreens.length + 1;
  const slideVariants = {
    enter: (direction: number) => ({
      x: direction > 0 ? 100 : -100,
      opacity: 0,
      scale: 0.95,
      filter: 'blur(10px)'
    }),
    center: {
      x: 0,
      opacity: 1,
      scale: 1,
      filter: 'blur(0px)'
    },
    exit: (direction: number) => ({
      x: direction > 0 ? -100 : 100,
      opacity: 0,
      scale: 1.05,
      filter: 'blur(10px)'
    })
  };
  return <section className="relative min-h-screen flex items-center pt-20 overflow-hidden bg-slate-950">
      {/* Animated Background Layers */}
      <AnimatePresence mode="wait">
        <motion.div key={currentScreen} initial={{
        opacity: 0
      }} animate={{
        opacity: 1
      }} exit={{
        opacity: 0
      }} transition={{
        duration: 1.5,
        ease: 'easeInOut'
      }} className={`absolute inset-0 bg-gradient-to-br ${screen.background}`} />
      </AnimatePresence>

      {/* Grain Texture */}
      <div className="absolute inset-0 opacity-[0.03] pointer-events-none mix-blend-overlay" style={{
      backgroundImage: "url(\"data:image/svg+xml,%3Csvg viewBox='0 0 200 200' xmlns='http://www.w3.org/2000/svg'%3E%3Cfilter id='noiseFilter'%3E%3CfeTurbulence type='fractalNoise' baseFrequency='0.65' numOctaves='3' stitchTiles='stitch'/%3E%3C/filter%3E%3Crect width='100%25' height='100%25' filter='url(%23noiseFilter)'/%3E%3C/svg%3E\")"
    }} />

      {/* Elegant Ambient Glows */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        <motion.div key={`glow-1-${currentScreen}`} initial={{
        opacity: 0,
        scale: 0.8
      }} animate={{
        opacity: 1,
        scale: 1,
        x: [0, 50, 0],
        y: [0, 30, 0]
      }} transition={{
        duration: 20,
        repeat: Infinity,
        ease: 'easeInOut'
      }} className={`absolute top-[-10%] right-[-5%] w-[800px] h-[800px] rounded-full ${screen.glow} blur-[120px] mix-blend-screen`} />
        <motion.div key={`glow-2-${currentScreen}`} initial={{
        opacity: 0,
        scale: 0.8
      }} animate={{
        opacity: 1,
        scale: 1,
        x: [0, -30, 0],
        y: [0, -50, 0]
      }} transition={{
        duration: 25,
        repeat: Infinity,
        ease: 'easeInOut',
        delay: 1
      }} className={`absolute bottom-[-10%] left-[-10%] w-[600px] h-[600px] rounded-full ${screen.glow} blur-[100px] mix-blend-screen`} />
      </div>

      <div className="container mx-auto px-4 md:px-6 relative z-10">
        <div className="max-w-5xl mx-auto text-center">
          <AnimatePresence mode="wait" custom={direction}>
            <motion.div key={`screen-${currentScreen}`} custom={direction} variants={slideVariants} initial="enter" animate="center" exit="exit" transition={{
            x: {
              type: 'spring',
              stiffness: 100,
              damping: 20
            },
            opacity: {
              duration: 0.5
            },
            scale: {
              duration: 0.5
            },
            filter: {
              duration: 0.4
            }
          }} className="flex flex-col items-center">
              {/* Refined Decorative Line */}
              <motion.div className="w-px h-24 bg-gradient-to-b from-transparent via-slate-500 to-transparent mb-8" initial={{
              height: 0,
              opacity: 0
            }} animate={{
              height: 96,
              opacity: 1
            }} transition={{
              duration: 1,
              delay: 0.2
            }} />

              <motion.h1 className="text-5xl md:text-7xl lg:text-8xl font-bold text-white tracking-tighter mb-8 leading-[1.1]">
                <span className="block text-slate-300 font-light tracking-tight mb-2 text-3xl md:text-4xl lg:text-5xl">
                  {screen.title}
                </span>
                <span className={`bg-gradient-to-r ${screen.accentColor} bg-clip-text text-transparent pb-2`}>
                  {screen.highlight}
                </span>
              </motion.h1>

              <motion.p className="text-lg md:text-xl text-slate-400 mb-12 max-w-2xl mx-auto leading-relaxed font-light tracking-wide">
                {screen.description}
              </motion.p>

              <motion.div className="flex flex-col sm:flex-row items-center justify-center gap-6" initial={{
              opacity: 0,
              y: 20
            }} animate={{
              opacity: 1,
              y: 0
            }} transition={{
              delay: 0.4
            }}>
                <Button variant="primary" size="lg" className="w-full sm:w-auto min-w-[200px] shadow-2xl shadow-pink-600/20 group">
                  Begin Your Journey
                  <ArrowRight className="ml-2 h-4 w-4 transition-transform duration-300 group-hover:translate-x-1" />
                </Button>
              </motion.div>
            </motion.div>
          </AnimatePresence>

          {/* Refined Navigation Controls */}
          <motion.div className="flex items-center justify-between w-full max-w-4xl mx-auto mt-24 md:mt-32 px-4" initial={{
          opacity: 0
        }} animate={{
          opacity: 1
        }} transition={{
          delay: 0.8
        }}>
            {/* Pagination Dots */}
            <div className="flex items-center gap-3">
              {heroScreens.map((_, index) => <button key={index} onClick={() => handleDotClick(index)} className={`group relative h-2 transition-all duration-500 ease-out ${index === currentScreen ? 'w-12 bg-white' : 'w-2 bg-slate-700 hover:bg-slate-600'} rounded-full overflow-hidden`} aria-label={`Go to screen ${index + 1}`}>
                  {index === currentScreen && <motion.div layoutId="active-dot" className="absolute inset-0 bg-gradient-to-r from-white to-slate-200" />}
                </button>)}
            </div>

            {/* Next Screen Preview */}
            <button onClick={handleNextClick} className="group flex items-center gap-4 text-left hover:opacity-100 transition-opacity duration-300">
              <div className="hidden md:block">
                <span className="block text-[10px] font-medium text-slate-500 uppercase tracking-[0.2em] mb-1">
                  Next
                </span>
                <span className="block text-sm font-medium text-slate-300 group-hover:text-white transition-colors">
                  {nextScreen.title}
                </span>
              </div>
              <div className={`w-12 h-12 rounded-full border border-slate-700 group-hover:border-white/30 bg-slate-900/50 backdrop-blur-sm flex items-center justify-center transition-all duration-300 group-hover:scale-110`}>
                <ChevronRight className="w-5 h-5 text-slate-400 group-hover:text-white transition-colors" />
              </div>
            </button>
          </motion.div>
        </div>
      </div>
    </section>;
}