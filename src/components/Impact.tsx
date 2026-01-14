import React from 'react';
import { motion } from 'framer-motion';
export function Impact() {
  const stats = [{
    value: '1000+',
    label: 'Girls Empowered',
    description: "We've ignited the passion for STEM in over 1000 girls and young women aged 9–35, giving them the tools to code, design, and innovate their way to a brighter future."
  }, {
    value: '50+',
    label: 'Communities Transformed',
    description: "From Nigeria to the world, we've brought coding, robotics, and confidence-building workshops to 50+ communities, sparking real-world problem-solving and tech leadership."
  }, {
    value: '200+',
    label: 'Real-World Projects Launched',
    description: 'Our trainees have tackled over 200 innovative projects, from robotics solutions to coding apps, solving pressing challenges and leaving a lasting mark on their communities.'
  }, {
    value: '100%',
    label: 'Impact-Driven',
    description: 'Our programs deliver life-changing skills and opportunities, earning us 100% commitment from participants ready to break barriers and redefine tech.'
  }];
  return <section className="py-20 md:py-32 bg-slate-900 text-white">
      <div className="container mx-auto px-4 md:px-6">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-16 items-center">
          {/* Left Side - Image */}
          <motion.div initial={{
          opacity: 0,
          x: -50
        }} whileInView={{
          opacity: 1,
          x: 0
        }} viewport={{
          once: true
        }} transition={{
          duration: 0.8
        }} className="relative order-2 lg:order-1">
            <div className="aspect-[3/4] rounded-3xl overflow-hidden shadow-2xl bg-gradient-to-br from-pink-900/30 to-purple-900/30">
              <img src="https://images.unsplash.com/photo-1531482615713-2afd69097998?ixlib=rb-4.0.3&auto=format&fit=crop&w=1200&q=80" alt="Girls coding and learning STEM" className="w-full h-full object-cover" />
            </div>
            {/* Decorative elements */}
            <div className="absolute -bottom-8 -right-8 w-32 h-32 bg-pink-500 rounded-full opacity-20 blur-3xl" />
            <div className="absolute -top-8 -left-8 w-40 h-40 bg-purple-500 rounded-full opacity-20 blur-3xl" />
          </motion.div>

          {/* Right Side - Content */}
          <div className="order-1 lg:order-2">
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
          }} className="mb-12">
              <span className="inline-block text-sm font-semibold text-pink-400 bg-pink-500/10 px-3 py-1 rounded-full mb-4">
                Our Impact So Far...
              </span>
              <h2 className="text-3xl md:text-5xl font-bold mb-6 leading-tight">
                Discover how Shenovate is{' '}
                <span className="text-pink-400">shattering the gender gap</span>{' '}
                in tech
              </h2>
            </motion.div>

            <div className="space-y-8">
              {stats.map((stat, index) => <motion.div key={stat.label} initial={{
              opacity: 0,
              x: 20
            }} whileInView={{
              opacity: 1,
              x: 0
            }} viewport={{
              once: true
            }} transition={{
              duration: 0.5,
              delay: index * 0.1
            }} className="group">
                  <div className="flex items-start gap-6">
                    <div className="flex-shrink-0">
                      <div className="text-4xl md:text-5xl font-bold text-pink-400 mb-1">
                        {stat.value}
                      </div>
                      <div className="text-sm font-semibold text-pink-300">
                        {stat.label}
                      </div>
                    </div>
                    <div className="flex-1 pt-2">
                      <p className="text-slate-300 leading-relaxed">
                        {stat.description}
                      </p>
                    </div>
                  </div>
                  {index < stats.length - 1 && <div className="mt-8 h-px bg-gradient-to-r from-slate-700 via-slate-600 to-slate-700" />}
                </motion.div>)}
            </div>
          </div>
        </div>
      </div>
    </section>;
}