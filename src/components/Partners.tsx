import React from 'react';
import { motion } from 'framer-motion';
export function Partners() {
  const partners = ['Acme Corp', 'GlobalTech', 'Nebula', 'FoxRun', 'Circle', 'Trevva', 'Goldline', 'Aven'];
  return <section className="py-16 bg-pink-50 border-y border-pink-100">
      <div className="container mx-auto px-4 md:px-6">
        <div className="text-center mb-10">
          <h3 className="text-sm font-semibold text-slate-500 uppercase tracking-wider">
            Trusted by industry leaders
          </h3>
        </div>

        <div className="grid grid-cols-2 md:grid-cols-4 gap-8 md:gap-12">
          {partners.map((partner, index) => <motion.div key={partner} initial={{
          opacity: 0,
          y: 20
        }} whileInView={{
          opacity: 1,
          y: 0
        }} viewport={{
          once: true
        }} transition={{
          duration: 0.5,
          delay: index * 0.05
        }} className="flex items-center justify-center p-4 grayscale hover:grayscale-0 opacity-60 hover:opacity-100 transition-all duration-300">
              {/* Placeholder for logos - using text for now but styled to look like logos */}
              <div className="text-xl md:text-2xl font-bold text-slate-800 flex items-center gap-2">
                <div className="w-6 h-6 bg-slate-800 rounded-full opacity-20" />
                {partner}
              </div>
            </motion.div>)}
        </div>
      </div>
    </section>;
}