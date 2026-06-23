import { motion } from 'framer-motion';
import React from 'react';
import { ChevronsRight } from 'lucide-react';
import { Button } from './ui/Button';

export function Community() {
  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    console.log('Form submitted');
  };

  const inputClass =
    'flex h-11 w-full rounded-lg border border-slate-300 bg-white px-3 py-2 text-sm placeholder:text-slate-400 focus:outline-none focus:ring-2 focus:ring-pink-500 focus:border-transparent';

  return (
    <section id="community" className="py-24 bg-white relative overflow-hidden">
      <div className="container mx-auto px-4 md:px-6 relative z-10">
        <motion.div
          className="max-w-2xl mx-auto"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
        >
          {/* Heading */}
          <div className="text-center mb-10">
            <span className="inline-block text-xs font-medium text-violet-700 bg-violet-100 px-4 py-1.5 rounded-full mb-6">
              Join the Community
            </span>
            <h2
              className="text-slate-900"
              style={{
                fontFamily: 'Instrument Serif',
                fontWeight: 400,
                fontSize: 'clamp(32px, 4vw, 52px)',
                lineHeight: '112%',
                letterSpacing: '-0.02em'
              }}
            >
              Become a STEM Sister and Shine with Us!
            </h2>
          </div>

          <form onSubmit={handleSubmit} className="bg-white rounded-2xl p-6 md:p-8">
            {/* First / Last name */}
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mb-5">
              <div>
                <label className="block text-sm font-medium text-slate-700 mb-1.5">
                  First name <span className="text-pink-500">*</span>
                </label>
                <input type="text" placeholder="First name" className={inputClass} required />
              </div>
              <div>
                <label className="block text-sm font-medium text-slate-700 mb-1.5">
                  Last name <span className="text-pink-500">*</span>
                </label>
                <input type="text" placeholder="Last name" className={inputClass} required />
              </div>
            </div>

            {/* Email */}
            <div className="mb-5">
              <label className="block text-sm font-medium text-slate-700 mb-1.5">
                Email <span className="text-pink-500">*</span>
              </label>
              <input type="email" placeholder="you@gmail.com" className={inputClass} required />
            </div>

            {/* Phone */}
            <div className="mb-5">
              <label className="block text-sm font-medium text-slate-700 mb-1.5">
                Phone number <span className="text-pink-500">*</span>
              </label>
              <div className="flex gap-2">
                <select className="flex h-11 w-20 rounded-lg border border-slate-300 bg-white px-2 py-2 text-sm focus:outline-none focus:ring-2 focus:ring-pink-500 focus:border-transparent">
                  <option value="NG">NG</option>
                </select>
                <input
                  type="tel"
                  placeholder="+234 000 0000 00"
                  className="flex-1 h-11 rounded-lg border border-slate-300 bg-white px-3 py-2 text-sm placeholder:text-slate-400 focus:outline-none focus:ring-2 focus:ring-pink-500 focus:border-transparent"
                  required
                />
              </div>
            </div>

            {/* Why are you joining us */}
            <div className="mb-5">
              <label className="block text-sm font-medium text-slate-700 mb-1.5">
                Why are you joining us <span className="text-pink-500">*</span>
              </label>
              <textarea
                placeholder="Tell us why you should be accepted..."
                rows={4}
                className="flex w-full rounded-lg border border-slate-300 bg-white px-3 py-2 text-sm placeholder:text-slate-400 focus:outline-none focus:ring-2 focus:ring-pink-500 focus:border-transparent resize-none"
                required
              />
            </div>

            {/* Privacy checkbox */}
            <div className="mb-6">
              <label className="flex items-center gap-2 cursor-pointer">
                <input
                  type="checkbox"
                  className="w-4 h-4 rounded border-slate-300 text-pink-600 focus:ring-pink-500"
                  required
                />
                <span className="text-sm text-slate-600">
                  You agree to our friendly{' '}
                  <a href="#" className="text-pink-600 underline hover:text-pink-700">
                    privacy policy
                  </a>
                  .
                </span>
              </label>
            </div>

            {/* Submit */}
            <div className="flex justify-center">
              <Button
                type="submit"
                size="lg"
                className="min-w-[280px] rounded-lg bg-pink-600 hover:bg-pink-700 border-none shadow-lg group"
              >
                Request to Join
                <ChevronsRight className="ml-2 h-5 w-5 transition-transform duration-300 group-hover:translate-x-1" />
              </Button>
            </div>
          </form>
        </motion.div>
      </div>
    </section>
  );
}
