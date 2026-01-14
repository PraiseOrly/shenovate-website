import { motion } from 'framer-motion';
import { ChevronLeft, ChevronRight, Star } from 'lucide-react';

export function Testimonials() {
  const testimonials = [{
    quote: 'Shenovate empowered me to break through barriers in the tech industry, providing invaluable mentorship and resources that fueled my passion for coding and artificial intelligence.',
    author: 'Joy Julius',
    role: 'Student, Nigeria',
    image: 'https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?ixlib=rb-4.0.3&auto=format&fit=crop&w=150&q=80'
  }];
  return <section className="py-20 md:py-32 bg-slate-50">
      <div className="container mx-auto px-4 md:px-6">
        <div className="max-w-4xl">
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
        }} className="mb-16">
              <div className="flex mb-8">
                {[...Array(5)].map((_, i) => (
                  <Star key={i} className="h-8 w-8 text-yellow-400 fill-current mr-1" />
                ))}
              </div>
              <p className="text-2xl md:text-3xl text-slate-800 mb-10 leading-relaxed font-medium">
                "{item.quote}"
              </p>
              <div className="flex items-center gap-4">
                <img src={item.image} alt={item.author} className="w-16 h-16 rounded-full object-cover ring-4 ring-pink-100" />
                <div>
                  <div className="font-bold text-slate-900 text-lg">{item.author}</div>
                  <div className="text-slate-600">{item.role}</div>
                </div>
              </div>
            </motion.div>)}
        </div>

        <div className="flex justify-center items-center gap-4">
          <button className="p-3 rounded-full bg-slate-100 hover:bg-slate-200 transition-colors">
            <ChevronLeft className="h-6 w-6 text-slate-600" />
          </button>
          <button className="p-3 rounded-full bg-slate-100 hover:bg-slate-200 transition-colors">
            <ChevronRight className="h-6 w-6 text-slate-600" />
          </button>
        </div>
      </div>
    </section>;
}

