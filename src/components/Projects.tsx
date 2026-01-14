import React from 'react';
import { motion } from 'framer-motion';
import { Sparkles, School, Heart, Code } from 'lucide-react';
export function Projects() {
  const projects = [{
    icon: Sparkles,
    title: 'She Emerges',
    category: 'Tech Girls Meetup',
    description: 'Our concluded Tech Girls Meetup brought together over 500 girls and young women for a mega vibe with badass women in tech. We shared laughs, swapped ideas, and sparked unstoppable confidence to rock the STEM world!'
  }, {
    icon: School,
    title: 'School Outreaches',
    category: 'Classroom Innovation',
    description: 'We crashed schools with over 1,000 teens, turning classrooms into coding playgrounds and robotics labs. These sessions? Pure magic; helping them discover their inner STEM star and have a blast along the way!'
  }, {
    icon: Heart,
    title: "International Women's Day",
    category: 'Celebration',
    description: "On International Women's Day, we threw a celebration for 300+ girls turning into powerhouse women, cheering their epic STEM contributions with glitter, giggles, and major girl-power vibes!"
  }, {
    icon: Code,
    title: 'Summer School of Code & Design',
    category: 'Hackathon',
    description: "Our Summer School of Code & Design is where it's at—200+ high school girls are diving into a super-fun hackathon, thinking big, solving problems, and inventing the future of Africa, one laugh at a time!"
  }];
  return <section id="projects" className="py-20 md:py-32 bg-white">
      <div className="container mx-auto px-4 md:px-6">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-16 items-start">
          {/* Left Side - Content */}
          <div>
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
              <span className="inline-block text-sm font-semibold text-pink-600 bg-pink-50 px-3 py-1 rounded-full mb-4">
                Our Projects
              </span>
              <h2 className="text-3xl md:text-5xl font-bold text-slate-900 mb-6 leading-tight">
                Let's Slay STEM Together{' '}
                <span className="text-pink-600">in Africa!</span>
              </h2>
              <p className="text-lg text-slate-600 leading-relaxed">
                We're throwing the ultimate STEM parties for young girls and
                women across Africa, breaking tech barriers and lighting up
                dreams with our coolest projects yet!
              </p>
            </motion.div>

            <div className="space-y-6">
              {projects.map((project, index) => <motion.div key={project.title} initial={{
              opacity: 0,
              x: -20
            }} whileInView={{
              opacity: 1,
              x: 0
            }} viewport={{
              once: true
            }} transition={{
              duration: 0.5,
              delay: index * 0.1
            }} className="group cursor-pointer p-6 rounded-xl border border-slate-200 hover:border-pink-200 bg-white hover:shadow-lg hover:shadow-pink-100/50 transition-all duration-300">
                  <div className="flex items-start gap-4">
                    <div className="w-12 h-12 rounded-xl bg-gradient-to-br from-pink-500 to-purple-500 flex items-center justify-center text-white shadow-lg shadow-pink-500/20 group-hover:shadow-pink-500/40 transition-shadow duration-300 flex-shrink-0">
                      <project.icon size={24} />
                    </div>
                    <div className="flex-1">
                      <div className="flex items-center gap-2 mb-2">
                        <h3 className="text-xl font-bold text-slate-900 group-hover:text-pink-600 transition-colors">
                          {project.title}
                        </h3>
                        <span className="text-xs font-medium text-pink-600 bg-pink-50 px-2 py-1 rounded-full">
                          {project.category}
                        </span>
                      </div>
                      <p className="text-slate-600 leading-relaxed text-sm">
                        {project.description}
                      </p>
                    </div>
                  </div>
                </motion.div>)}
            </div>
          </div>

          {/* Right Side - Image */}
          <motion.div initial={{
          opacity: 0,
          x: 50
        }} whileInView={{
          opacity: 1,
          x: 0
        }} viewport={{
          once: true
        }} transition={{
          duration: 0.8
        }} className="relative lg:sticky lg:top-32">
            <div className="aspect-[3/4] rounded-3xl overflow-hidden shadow-2xl bg-gradient-to-br from-pink-100 to-purple-100">
              <img src="https://images.unsplash.com/photo-1522202176988-66273c2fd55f?ixlib=rb-4.0.3&auto=format&fit=crop&w=1200&q=80" alt="Girls learning STEM together" className="w-full h-full object-cover" />
            </div>
            {/* Decorative elements */}
            <div className="absolute -bottom-8 -left-8 w-32 h-32 bg-pink-500 rounded-full opacity-20 blur-3xl" />
            <div className="absolute -top-8 -right-8 w-40 h-40 bg-purple-500 rounded-full opacity-20 blur-3xl" />
          </motion.div>
        </div>
      </div>
    </section>;
}