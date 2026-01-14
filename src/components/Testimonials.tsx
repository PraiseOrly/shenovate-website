import React from 'react';
import { motion } from 'framer-motion';
import { Quote } from 'lucide-react';
import { Button } from './ui/Button';
export function Testimonials() {
  const testimonials = [{
    quote: 'Shenovate transformed our digital presence completely. Their attention to detail and strategic approach is unmatched.',
    author: 'Sarah Jenkins',
    role: 'CTO, TechFlow',
    image: 'https://images.unsplash.com/photo-1494790108377-be9c29b29330?ixlib=rb-4.0.3&auto=format&fit=crop&w=150&q=80'
  }, {
    quote: 'Working with this team was a game-changer. They understood our vision immediately and delivered beyond expectations.',
    author: 'Michael Chen',
    role: 'Founder, StartUp Inc',
    image: 'https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?ixlib=rb-4.0.3&auto=format&fit=crop&w=150&q=80'
  }, {
    quote: 'Professional, innovative, and reliable. The impact on our business metrics was immediate and sustained.',
    author: 'Elena Rodriguez',
    role: 'Director, Creative Solutions',
    image: 'https://images.unsplash.com/photo-1580489944761-15a19d654956?ixlib=rb-4.0.3&auto=format&fit=crop&w=150&q=80'
  }];
  return <section className="py-20 md:py-32 bg-slate-50">
      <div className="container mx-auto px-4 md:px-6">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold text-slate-900 mb-4">
            What Our Partners Say
          </h2>
          <p className="text-slate-600 max-w-2xl mx-auto">
            Don't just take our word for it. Here's what industry leaders have
            to say about working with Shenovate.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-16">
          {testimonials.map((item, index) => <motion.div key={item.author} initial={{
          opacity: 0,
          y: 20
        }} whileInView={{
          opacity: 1,
          y: 0
        }} viewport={{
          once: true
        }} transition={{
          duration: 0.5,
          delay: index * 0.1
        }} className="bg-white p-8 rounded-2xl shadow-sm border border-slate-100 flex flex-col">
              <Quote className="text-pink-200 mb-6 h-10 w-10" />
              <p className="text-slate-700 mb-8 flex-grow italic leading-relaxed">
                "{item.quote}"
              </p>
              <div className="flex items-center gap-4">
                <img src={item.image} alt={item.author} className="w-12 h-12 rounded-full object-cover ring-2 ring-pink-50" />
                <div>
                  <div className="font-bold text-slate-900">{item.author}</div>
                  <div className="text-sm text-slate-500">{item.role}</div>
                </div>
              </div>
            </motion.div>)}
        </div>

        <div className="text-center">
          <Button variant="outline" size="lg">
            Read More Success Stories
          </Button>
        </div>
      </div>
    </section>;
}