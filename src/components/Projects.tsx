import { motion } from 'framer-motion';
import { useState } from 'react';

export function Projects() {
  const projects = [
    {
      title: 'She Emerges',
      description:
        'Our concluded Tech Girls Meetup brought together over 500 girls and young women for a mega vibe with badass women in tech. We shared laughs, swapped ideas, and sparked unstoppable confidence to rock the STEM world!'
    },
    {
      title: 'School Outreaches',
      description:
        'We crashed schools with over 1,000 teens, turning classrooms into coding playgrounds and robotics labs. These sessions? Pure magic; helping them discover their inner STEM star and have a blast along the way!'
    },
    {
      title: "International Women's Day",
      description:
        "On International Women's Day, we threw a celebration for 300+ girls turning into powerhouse women, cheering their epic STEM contributions with glitter, giggles, and major girl-power vibes!"
    },
    {
      title: 'Summer School of Code & Design',
      description:
        "Our Summer School of Code & Design is where it's at—200+ high school girls are diving into a super-fun hackathon, thinking big, solving problems, and inventing the future of Africa, one laugh at a time!"
    }
  ];

  const mainImage = '/projects/project1.png';
  const stripImages = ['/projects/project2.png', '/projects/project3.png', '/projects/project4.jpg'];

  const [active, setActive] = useState(0);

  return (
    <section id="projects" className="py-20 md:py-28 bg-white">
      <div className="container mx-auto px-4 md:px-6">
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center max-w-3xl mx-auto mb-16"
        >
          <span className="inline-block text-xs font-medium text-pink-600 bg-pink-50 px-4 py-1.5 rounded-full mb-6">
            Our Projects
          </span>
          <h2
            className="text-slate-900 mb-5"
            style={{
              fontFamily: 'Instrument Serif',
              fontWeight: 400,
              fontSize: 'clamp(32px, 4vw, 52px)',
              lineHeight: '110%',
              letterSpacing: '-0.02em'
            }}
          >
            Let's Slay STEM Together in Africa!
          </h2>
          <p
            className="text-slate-500 mx-auto max-w-xl"
            style={{
              fontFamily: 'Instrument Sans',
              fontWeight: 500,
              fontSize: '15px',
              lineHeight: '160%',
              letterSpacing: '-0.02em'
            }}
          >
            We're throwing the ultimate STEM parties for young girls and women
            across Africa, breaking tech barriers and lighting up dreams with our
            coolest projects yet!
          </p>
        </motion.div>

        {/* Body */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-16 items-start">
          {/* Left - project list */}
          <div className="space-y-8">
            {projects.map((project, index) => (
              <motion.div
                key={project.title}
                onMouseEnter={() => setActive(index)}
                initial={{ opacity: 0, x: -20 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                className={`group cursor-pointer border-l-2 pl-6 transition-colors duration-300 ${
                  active === index ? 'border-pink-500' : 'border-slate-200 hover:border-pink-300'
                }`}
              >
                <h3
                  className="text-slate-900 mb-2"
                  style={{
                    fontFamily: 'Instrument Serif',
                    fontWeight: 400,
                    fontSize: '24px',
                    lineHeight: '120%',
                    letterSpacing: '-0.02em'
                  }}
                >
                  {project.title}
                </h3>
                <p
                  className="text-slate-500"
                  style={{
                    fontFamily: 'Instrument Sans',
                    fontWeight: 500,
                    fontSize: '13px',
                    lineHeight: '160%',
                    letterSpacing: '-0.02em'
                  }}
                >
                  {project.description}
                </p>
              </motion.div>
            ))}
          </div>

          {/* Right - photo collage */}
          <motion.div
            initial={{ opacity: 0, x: 40 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
            className="flex gap-3 h-[300px] sm:h-[420px] lg:h-[460px]"
          >
            {/* Main image */}
            <div className="flex-[2.2] rounded-2xl overflow-hidden shadow-lg">
              <img
                src={mainImage}
                alt="Shenovate project highlight"
                className="w-full h-full object-cover"
              />
            </div>

            {/* Vertical strips */}
            {stripImages.map((src, i) => (
              <div key={src} className="flex-[0.55] rounded-2xl overflow-hidden shadow-lg">
                <img
                  src={src}
                  alt={`Project gallery ${i + 2}`}
                  className="w-full h-full object-cover"
                />
              </div>
            ))}
          </motion.div>
        </div>
      </div>
    </section>
  );
}
