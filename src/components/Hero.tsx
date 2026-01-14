import { motion } from 'framer-motion';
import { ArrowRight } from 'lucide-react';
import { Button } from './ui/Button';
export function Hero() {
  return <section className="relative min-h-screen flex items-center pt-20 overflow-hidden bg-slate-950">
      {/* Animated Background Layers */}
      <motion.div initial={{
        opacity: 0
      }} animate={{
        opacity: 1
      }} transition={{
        duration: 1.5,
        ease: 'easeInOut'
      }} className="absolute inset-0" style={{
        background: 'linear-gradient(0deg, rgba(224, 63, 106, 0.2), rgba(224, 63, 106, 0.2)), linear-gradient(0deg, rgba(80, 15, 15, 0.2), rgba(80, 15, 15, 0.2)), linear-gradient(0deg, rgba(0, 0, 0, 0.56), rgba(0, 0, 0, 0.56))'
      }} />

      {/* Grain Texture */}
      <div className="absolute inset-0 opacity-[0.03] pointer-events-none mix-blend-overlay" style={{
      backgroundImage: "url(\"data:image/svg+xml,%3Csvg viewBox='0 0 200 200' xmlns='http://www.w3.org/2000/svg'%3E%3Cfilter id='noiseFilter'%3E%3CfeTurbulence type='fractalNoise' baseFrequency='0.65' numOctaves='3' stitchTiles='stitch'/%3E%3C/filter%3E%3Crect width='100%25' height='100%25' filter='url(%23noiseFilter)'/%3E%3C/svg%3E\")"
    }} />

      {/* Elegant Ambient Glows */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        <motion.div initial={{
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
      }} className="absolute top-[-10%] right-[-5%] w-[800px] h-[800px] rounded-full bg-amber-500/20 blur-[120px] mix-blend-screen" />
        <motion.div initial={{
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
      }} className="absolute bottom-[-10%] left-[-10%] w-[600px] h-[600px] rounded-full bg-amber-500/20 blur-[100px] mix-blend-screen" />
      </div>

      <div className="container mx-auto px-4 md:px-6 relative z-10">
        <div className="max-w-5xl mx-auto text-center">
            <motion.div initial={{
              opacity: 0,
              y: 20
            }} animate={{
              opacity: 1,
              y: 0
            }} transition={{
              duration: 0.8,
              ease: 'easeOut'
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

              <motion.h1 className="mb-8 leading-[1.12]" style={{
                fontFamily: 'Instrument Serif',
                fontWeight: 400,
                fontStyle: 'normal',
                fontSize: '88px',
                lineHeight: '112%',
                letterSpacing: '-4%',
                textAlign: 'center'
              }}>
                <span className="block text-slate-300 mb-2">
                  Home
                </span>
                <span className="bg-gradient-to-r from-amber-200 via-amber-400 to-amber-500 bg-clip-text text-transparent">
                  We are bridging the Gender Gap in Technology!
                </span>
              </motion.h1>

              <motion.p className="text-lg md:text-xl text-slate-400 mb-12 max-w-2xl mx-auto leading-relaxed font-light tracking-wide">
                We're a bold non-profit straight out of Nigeria, smashing the gender gap in tech one fearless girl at a time. From ages 9 to 35, we're empowering young women to own Science, Technology, Engineering, and Math (STEM) like never before.
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
        </div>
      </div>
    </section>;
}
