import { motion } from 'framer-motion';
import { Sparkle } from 'lucide-react';

export function Values() {
  const values = [
    {
      title: 'Empowerment',
      description:
        'We lift up girls and women with the skills, confidence, and support to shine as STEM leaders and change-makers.'
    },
    {
      title: 'Inclusivity',
      description:
        "Everyone's invited to the STEM party! We create a space where every girl feels seen, valued, and ready to soar."
    },
    {
      title: 'Innovation',
      description:
        'We spark creativity at ditzy ideas, encouraging our girls to invent, code, and solve real-world challenges with flair.'
    },
    {
      title: 'Community',
      description:
        'We build sisterhoods that inspire, support, and cheer each other on across Nigeria and beyond.'
    },
    {
      title: 'Joy',
      description:
        'Learning STEM should be a blast! We bring laughter, fun, and girl-power vibes to every workshop and event.'
    },
    {
      title: 'Impact',
      description:
        "We're here to make waves! Every program, project, and smile we create drives lasting change in tech and beyond."
    }
  ];

  const stats = [
    { value: '10,000', suffix: '+', label: 'Girls Empowered' },
    { value: '50', suffix: '+', label: 'Communities Transformed' },
    { value: '200', suffix: '+', label: 'Projects Launched' },
    { value: '75', suffix: '%', label: 'Career Ready' }
  ];

  return (
    <section>
      {/* Core Beliefs */}
      <div className="bg-[#faf7fb] py-20 md:py-28">
        <div className="container mx-auto px-4 md:px-6">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="text-center max-w-3xl mx-auto mb-16"
          >
            <span className="inline-block text-xs font-medium text-violet-700 bg-violet-100 px-4 py-1.5 rounded-full mb-6">
              Our Values at Shenovate
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
              These Core Beliefs Drive Our STEM Revolution!
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
              Shenovate is all about lighting up the tech world for girls and women
              in Nigeria—and beyond! We're shaking things up, breaking barriers,
              and building a future where every girl can create, and lead.
            </p>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-x-10 gap-y-12 max-w-5xl mx-auto">
            {values.map((value, index) => (
              <motion.div
                key={value.title}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: index * 0.08 }}
                className="flex flex-col items-center text-center px-2"
              >
                <Sparkle className="w-5 h-5 text-slate-400 mb-4" />
                <h3
                  className="text-slate-900 mb-3"
                  style={{
                    fontFamily: 'Instrument Serif',
                    fontWeight: 400,
                    fontSize: '22px',
                    lineHeight: '120%',
                    letterSpacing: '-0.02em'
                  }}
                >
                  {value.title}
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
                  {value.description}
                </p>
              </motion.div>
            ))}
          </div>
        </div>
      </div>

      {/* Making Waves stats */}
      <div className="bg-[#e9e4ee] py-20 md:py-28">
        <div className="container mx-auto px-4 md:px-6">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <div className="hidden lg:block" />
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
            >
              <span className="inline-block text-xs font-medium text-violet-700 bg-violet-100 px-4 py-1.5 rounded-full mb-6">
                We're Just Getting Started on Our STEM Journey!
              </span>
              <h2
                className="text-slate-900 mb-12"
                style={{
                  fontFamily: 'Instrument Serif',
                  fontWeight: 400,
                  fontSize: 'clamp(30px, 3.6vw, 44px)',
                  lineHeight: '112%',
                  letterSpacing: '-0.02em'
                }}
              >
                Shenovate's Making Waves and Breaking Barriers!
              </h2>

              <div className="grid grid-cols-2 gap-x-10 gap-y-10">
                {stats.map((stat, index) => (
                  <motion.div
                    key={stat.label}
                    initial={{ opacity: 0, y: 15 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.5, delay: index * 0.08 }}
                  >
                    <div className="flex items-baseline" style={{ fontFamily: 'Instrument Serif' }}>
                      <span className="text-4xl md:text-5xl text-pink-500 leading-none">
                        {stat.value}
                      </span>
                      <span className="text-3xl md:text-4xl text-pink-400 leading-none">
                        {stat.suffix}
                      </span>
                    </div>
                    <p className="text-xs font-semibold text-slate-600 mt-2">{stat.label}</p>
                  </motion.div>
                ))}
              </div>
            </motion.div>
          </div>
        </div>
      </div>
    </section>
  );
}
