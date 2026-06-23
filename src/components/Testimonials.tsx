import { motion } from 'framer-motion';
import { ArrowLeft, ArrowRight, Star } from 'lucide-react';
import { useState } from 'react';

export function Testimonials() {
  const testimonials = [
    {
      quote:
        'Shenovate empowered me to break through barriers in the tech industry, providing invaluable mentorship and resources that fueled my passion for coding and artificial intelligence.',
      author: 'Joy Julius',
      role: 'Student, Nigeria'
    },
    {
      quote:
        'The mentorship I found here turned my curiosity into real skills. I built my first robot and now I dream in code — Shenovate made that possible.',
      author: 'Amara Okeke',
      role: 'Student, Nigeria'
    }
  ];

  const [current, setCurrent] = useState(0);
  const item = testimonials[current];

  const prev = () => setCurrent(c => (c - 1 + testimonials.length) % testimonials.length);
  const next = () => setCurrent(c => (c + 1) % testimonials.length);

  return (
    <section className="py-20 md:py-28 bg-[#fafafa]">
      <div className="container mx-auto px-4 md:px-6">
        <div className="max-w-4xl">
          <motion.div
            key={current}
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
          >
            {/* Stars */}
            <div className="flex mb-6">
              {[...Array(5)].map((_, i) => (
                <Star key={i} className="h-5 w-5 text-yellow-400 fill-current mr-1" />
              ))}
            </div>

            {/* Quote */}
            <p
              className="text-slate-900 mb-10"
              style={{
                fontFamily: 'Instrument Serif',
                fontWeight: 400,
                fontSize: 'clamp(28px, 3.4vw, 44px)',
                lineHeight: '128%',
                letterSpacing: '-0.02em'
              }}
            >
              {item.quote}
            </p>

            {/* Author + arrows */}
            <div className="flex items-center gap-10">
              <div className="flex items-center gap-3">
                <div className="w-11 h-11 rounded-full bg-[#e8ddca]" />
                <div>
                  <div className="font-semibold text-slate-900 text-sm">{item.author}</div>
                  <div className="text-slate-500 text-xs">{item.role}</div>
                </div>
              </div>

              <div className="flex items-center gap-6">
                <button
                  onClick={prev}
                  aria-label="Previous testimonial"
                  className="text-slate-400 hover:text-slate-700 transition-colors"
                >
                  <ArrowLeft className="h-5 w-5" />
                </button>
                <button
                  onClick={next}
                  aria-label="Next testimonial"
                  className="text-slate-400 hover:text-slate-700 transition-colors"
                >
                  <ArrowRight className="h-5 w-5" />
                </button>
              </div>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
