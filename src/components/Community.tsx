import React from 'react';
import { Button } from './ui/Button';
import { motion } from 'framer-motion';
export function Community() {
  return <section className="py-24 bg-pink-600 relative overflow-hidden">
      {/* Background patterns */}
      <div className="absolute inset-0 opacity-10">
        <div className="absolute top-0 left-0 w-full h-full bg-[radial-gradient(circle_at_center,_var(--tw-gradient-stops))] from-white via-transparent to-transparent" />
      </div>

      <div className="container mx-auto px-4 md:px-6 relative z-10">
        <div className="max-w-3xl mx-auto text-center text-white">
          <motion.h2 className="text-3xl md:text-5xl font-bold mb-6" initial={{
          opacity: 0,
          y: 20
        }} whileInView={{
          opacity: 1,
          y: 0
        }} viewport={{
          once: true
        }} transition={{
          duration: 0.6
        }}>
            Join the Shenovate Community
          </motion.h2>

          <motion.p className="text-lg md:text-xl text-pink-100 mb-10 leading-relaxed" initial={{
          opacity: 0,
          y: 20
        }} whileInView={{
          opacity: 1,
          y: 0
        }} viewport={{
          once: true
        }} transition={{
          duration: 0.6,
          delay: 0.1
        }}>
            Be part of a growing network of innovators, creators, and
            changemakers. Get exclusive access to resources, events, and
            collaboration opportunities.
          </motion.p>

          <motion.div initial={{
          opacity: 0,
          y: 20
        }} whileInView={{
          opacity: 1,
          y: 0
        }} viewport={{
          once: true
        }} transition={{
          duration: 0.6,
          delay: 0.2
        }}>
            <Button size="lg" className="bg-white text-pink-600 hover:bg-pink-50 border-none shadow-lg text-lg px-10">
              Get Involved Now
            </Button>
          </motion.div>
        </div>
      </div>
    </section>;
}