import { motion, AnimatePresence } from 'framer-motion';
import { ChevronsRight, ArrowRight, Mouse } from 'lucide-react';
import { useEffect, useState } from 'react';
import { Button } from './ui/Button';

const slides = [
  {
    image: '/bridging.jpg',
    label: 'Bridging the Gap',
    title: 'We are bridging the Gender Gap in Technology!',
    description:
      "We're a bold non-profit straight out of Nigeria, smashing the gender gap in tech one fearless girl at a time. From ages 9 to 35, we're empowering young women to own Science, Technology, Engineering, and Math (STEM) like never before."
  },
  {
    image: '/projects/project2.png',
    label: 'Empowering Women',
    title: 'Empowering the next generation of women in STEM',
    description:
      'Through mentorship, hands-on training, and community, we equip girls with the skills and confidence to lead in science and technology.'
  },
  {
    image: '/projects/project3.png',
    label: 'Rewriting Female Stories',
    title: 'Rewriting female stories, one girl at a time',
    description:
      'Join a movement that believes every girl deserves a seat at the table — and the tools to build it herself.'
  }
];

export function Hero() {
  const [current, setCurrent] = useState(0);

  useEffect(() => {
    const timer = setInterval(() => {
      setCurrent(prev => (prev + 1) % slides.length);
    }, 7000);
    return () => clearInterval(timer);
  }, []);

  const slide = slides[current];

  return (
    <section className="relative w-full max-w-[1728px] h-[1024px] mx-auto flex items-center overflow-hidden bg-slate-950">
      {/* Background image carousel */}
      <AnimatePresence mode="sync">
        <motion.div
          key={current}
          initial={{ opacity: 0, scale: 1.08 }}
          animate={{ opacity: 1, scale: 1 }}
          exit={{ opacity: 0 }}
          transition={{ opacity: { duration: 1.2 }, scale: { duration: 8, ease: 'easeOut' } }}
          className="absolute inset-0"
        >
          <img src={slide.image} alt="" className="w-full h-full object-cover" />
        </motion.div>
      </AnimatePresence>

      {/* Dark overlay for legibility */}
      <div className="absolute inset-0 bg-gradient-to-b from-slate-950/70 via-slate-950/55 to-slate-950/80" />
      <div className="absolute inset-0 bg-black/20" />

      {/* Hero content */}
      <div className="container mx-auto px-4 md:px-6 relative z-10">
        <div className="max-w-2xl mx-auto text-center">
          <AnimatePresence mode="wait">
            <motion.div
              key={current}
              initial={{ opacity: 0, y: 24 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -24 }}
              transition={{ duration: 0.7, ease: 'easeOut' }}
              className="flex flex-col items-center"
            >
              <h1
                className="mb-5 text-white"
                style={{
                  fontFamily: 'Instrument Serif',
                  fontWeight: 400,
                  fontStyle: 'normal',
                  fontSize: '88px',
                  lineHeight: '112%',
                  letterSpacing: '-0.04em',
                  textAlign: 'center'
                }}
              >
                {slide.title}
              </h1>

              <p
                className="text-white/80 mb-8 max-w-xl mx-auto"
                style={{
                  fontFamily: 'Instrument Sans',
                  fontWeight: 500,
                  fontStyle: 'normal',
                  fontSize: '20px',
                  lineHeight: '150%',
                  letterSpacing: '-0.06em',
                  textAlign: 'center'
                }}
              >
                {slide.description}
              </p>

              <Button
                variant="primary"
                size="md"
                className="rounded-full px-6 text-sm shadow-2xl shadow-pink-600/30 group"
              >
                Get Started
                <ChevronsRight className="ml-2 h-4 w-4 transition-transform duration-300 group-hover:translate-x-1" />
              </Button>
            </motion.div>
          </AnimatePresence>
        </div>
      </div>

      {/* Carousel dots */}
      <div className="absolute bottom-10 left-1/2 -translate-x-1/2 z-20 flex items-center gap-3">
        {slides.map((_, i) => (
          <button
            key={i}
            onClick={() => setCurrent(i)}
            aria-label={`Go to slide ${i + 1}`}
            className={`h-3 w-3 rounded-full border border-white/70 transition-all duration-300 ${
              i === current ? 'bg-white scale-110' : 'bg-transparent hover:bg-white/40'
            }`}
          />
        ))}
      </div>

      {/* Scroll to explore */}
      <div className="hidden md:flex absolute bottom-10 left-8 z-20 items-center gap-2 text-white/80 text-xs tracking-[0.2em] uppercase">
        <Mouse className="h-4 w-4" />
        <span>Scroll to Explore</span>
      </div>

      {/* Slide name card */}
      <motion.div
        initial={{ opacity: 0, x: 30 }}
        animate={{ opacity: 1, x: 0 }}
        transition={{ delay: 0.5, duration: 0.7 }}
        className="hidden md:flex absolute bottom-10 right-8 z-20 items-start gap-3"
      >
        {/* Thumbnail with number overlay */}
        <div className="relative h-12 w-16 rounded-md overflow-hidden border border-white/30 shrink-0">
          <img src={slide.image} alt="" className="w-full h-full object-cover" />
          <div className="absolute inset-0 bg-black/40 flex items-center justify-center">
            <span
              className="text-white text-xl leading-none"
              style={{ fontFamily: 'Instrument Serif' }}
            >
              {String(current + 1).padStart(2, '0')}
            </span>
          </div>
        </div>

        {/* Text + arrow */}
        <div className="flex flex-col">
          <span className="text-white text-sm font-light leading-tight max-w-[120px]">
            {slide.label}
          </span>
          <ArrowRight className="mt-2 h-4 w-12 text-white/80" strokeWidth={1} />
        </div>
      </motion.div>
    </section>
  );
}
