import { motion } from 'framer-motion';
import { ArrowUpRight, Linkedin } from 'lucide-react';

export function Team() {
  const team = [
    { name: 'Joy Offore', role: 'Co-Founder', image: '/team/joy.png' },
    { name: 'Elijah', role: 'Co-Founder', image: '/team/ronald.png' },
    { name: 'Goodness', role: 'Team Lead', image: '/team/joy.png' },
    { name: 'Praise Orly', role: 'Country Rep, Rwanda', image: '/team/praise.png' },
    { name: 'Adediwura Adeligba', role: 'Lead Designer', image: '/team/Ade.png' },
    { name: 'Ekemini', role: 'Administrator', image: '/team/praise.png' },
    { name: 'Ronald Atemfena', role: 'Technical/Instructor', image: '/team/ronald.png' },
    { name: 'Aniickene', role: 'Volunteer', image: '/team/praise.png' },
    { name: 'Favour', role: 'Volunteer', image: '/team/joy.png' },
    { name: 'Patricia', role: 'Volunteer', image: '/team/praise.png' }
  ];

  return (
    <section id="team" className="py-20 md:py-28 bg-white">
      <div className="container mx-auto px-4 md:px-6">
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center max-w-2xl mx-auto mb-14"
        >
          <span className="inline-block text-xs font-medium text-violet-700 bg-violet-100 px-4 py-1.5 rounded-full mb-6">
            Our Team
          </span>
          <h2
            className="text-slate-900 mb-3"
            style={{
              fontFamily: 'Instrument Serif',
              fontWeight: 400,
              fontSize: 'clamp(30px, 4vw, 48px)',
              lineHeight: '112%',
              letterSpacing: '-0.02em'
            }}
          >
            Showing Off the Rockstars Behind Shenovate!
          </h2>
          <p
            className="text-slate-500"
            style={{
              fontFamily: 'Instrument Sans',
              fontWeight: 500,
              fontSize: '14px',
              lineHeight: '150%',
              letterSpacing: '-0.02em'
            }}
          >
            Meet the Dream Team Making STEM Magic Happen!
          </p>
        </motion.div>

        {/* Grid */}
        <div className="flex flex-wrap justify-center gap-5 max-w-5xl mx-auto">
          {team.map((member, index) => (
            <motion.div
              key={member.name}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.4, delay: (index % 4) * 0.08 }}
              className="group relative w-[200px] aspect-[3/4] rounded-xl overflow-hidden shadow-sm"
            >
              <img
                src={member.image}
                alt={member.name}
                className="absolute inset-0 w-full h-full object-cover transition-transform duration-500 group-hover:scale-105"
              />
              {/* bottom info bar */}
              <div className="absolute bottom-0 left-0 right-0 p-3 bg-gradient-to-t from-black/85 via-black/40 to-transparent">
                <div className="flex items-start justify-between">
                  <div>
                    <h3 className="text-white text-sm font-semibold leading-tight">
                      {member.name}
                    </h3>
                    <p className="text-white/70 text-[11px] mt-0.5">{member.role}</p>
                  </div>
                  <ArrowUpRight className="h-4 w-4 text-white/80 shrink-0 transition-transform duration-300 group-hover:translate-x-0.5 group-hover:-translate-y-0.5" />
                </div>
                <a
                  href="#"
                  aria-label={`${member.name} on LinkedIn`}
                  className="mt-2 inline-flex items-center justify-center w-6 h-6 rounded bg-white/15 hover:bg-white/30 text-white transition-colors"
                >
                  <Linkedin className="h-3.5 w-3.5" />
                </a>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
