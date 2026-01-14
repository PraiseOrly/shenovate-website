import React from 'react';
import { motion } from 'framer-motion';
import { Rocket, Sparkles, Users } from 'lucide-react';
export function About() {
  const features = [{
    icon: Rocket,
    title: 'Our Mission',
    subtitle: 'Rocketing Girls to STEM Stardom!',
    description: "We're on a wild ride to close the gender gap in tech, empowering girls and women in Nigeria with the coolest STEM skills, confidence, and support to shine bright and soar high in coding, robotics, and beyond!"
  }, {
    icon: Sparkles,
    title: 'Our Vision',
    subtitle: 'Dreaming Big for Every Girl!',
    description: "Imagine a world where girls and women have all the tools, chances, and cheerleaders they need to rule STEM. We're making that happen and turning them into the bold leaders, inventors, and game-changers of tomorrow!"
  }, {
    icon: Users,
    title: 'Why We Do This',
    subtitle: 'Because Diversity Fuels Awesome Tech!',
    description: "Innovation gets a mega boost when everyone's at the table. We're creating a vibe where girls and women can learn, grow, and lead; making tech more inclusive, exciting, and totally unstoppable!"
  }];
  return <section id="about" className="py-20 md:py-32 bg-gradient-to-b from-white to-pink-50/30">
      <div className="container mx-auto px-4 md:px-6">
        {/* Header Section */}
        <motion.div initial={{
        opacity: 0,
        y: 20
      }} whileInView={{
        opacity: 1,
        y: 0
      }} viewport={{
        once: true
      }} transition={{
        duration: 0.6
      }} className="text-center max-w-4xl mx-auto mb-16">
          <span className="inline-block text-sm font-semibold text-pink-600 bg-pink-50 px-3 py-1 rounded-full mb-4">
            About Us
          </span>
          <h2 className="text-3xl md:text-5xl font-bold text-slate-900 mb-6 leading-tight">
            We're Here to Spark a{' '}
            <span className="text-pink-600">STEM Revolution!</span>
          </h2>
          <p className="text-lg md:text-xl text-slate-600 leading-relaxed">
            Shenovate is all about lighting up the tech world for girls and
            women in Nigeria—and beyond! We're shaking things up, breaking
            barriers, and building a future where every girl can code, create,
            and lead.
          </p>
        </motion.div>

        {/* Image Section */}
        <motion.div initial={{
        opacity: 0,
        y: 30
      }} whileInView={{
        opacity: 1,
        y: 0
      }} viewport={{
        once: true
      }} transition={{
        duration: 0.8
      }} className="relative max-w-5xl mx-auto mb-20">
          <div className="aspect-[16/9] rounded-3xl overflow-hidden shadow-2xl bg-gradient-to-br from-pink-100 to-purple-100">
            <img src="https://images.unsplash.com/photo-1573496359142-b8d87734a5a2?ixlib=rb-4.0.3&auto=format&fit=crop&w=1200&q=80" alt="Girls learning STEM" className="w-full h-full object-cover" />
          </div>
          {/* Decorative elements */}
          <div className="absolute -bottom-8 -right-8 w-32 h-32 bg-pink-500 rounded-full opacity-20 blur-3xl" />
          <div className="absolute -top-8 -left-8 w-40 h-40 bg-purple-500 rounded-full opacity-20 blur-3xl" />
        </motion.div>

        {/* Features Grid */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-6xl mx-auto">
          {features.map((feature, index) => <motion.div key={feature.title} initial={{
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
        }} className="group bg-white rounded-2xl p-8 shadow-sm hover:shadow-xl hover:shadow-pink-100/50 transition-all duration-300 border border-slate-100">
              <div className="w-14 h-14 rounded-2xl bg-gradient-to-br from-pink-500 to-purple-500 flex items-center justify-center text-white shadow-lg shadow-pink-500/20 group-hover:shadow-pink-500/40 transition-shadow duration-300 mb-6">
                <feature.icon size={28} />
              </div>
              <h3 className="text-xl font-bold text-slate-900 mb-1">
                {feature.title}
              </h3>
              <h4 className="text-lg font-semibold text-pink-600 mb-4">
                {feature.subtitle}
              </h4>
              <p className="text-slate-600 leading-relaxed mb-4">
                {feature.description}
              </p>
              <a href="#" className="inline-flex items-center text-sm font-semibold text-pink-600 hover:text-pink-700 transition-colors group-hover:underline">
                Learn more
                <svg className="w-4 h-4 ml-1 transition-transform group-hover:translate-x-1" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                </svg>
              </a>
            </motion.div>)}
        </div>
      </div>
    </section>;
}