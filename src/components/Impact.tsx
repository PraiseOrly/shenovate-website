import { motion } from 'framer-motion';

export function Impact() {
  const cards = [
    {
      num: '1000',
      suffix: '+',
      label: 'Girls Empowered',
      description:
        "We've ignited the passion for STEM in over 1000 girls and young women aged 9–35, giving them the tools to code, design, and innovate their way to a brighter future.",
      tone: 'light' as const
    },
    {
      num: '50',
      suffix: '+',
      label: 'Communities Transformed',
      description:
        "From Nigeria to the world, we've brought coding, robotics, and confidence-building workshops to 50+ communities, sparking real-world problem-solving and tech leadership.",
      tone: 'pink' as const
    },
    {
      num: '100',
      suffix: '%',
      label: 'Impact-Driven',
      description:
        'Our programs deliver life-changing skills and opportunities, earning us 100% commitment from participants ready to break barriers and redefine tech.',
      tone: 'light' as const
    }
  ];

  return (
    <section className="py-20 md:py-28 bg-[#0e0e10] text-white">
      <div className="container mx-auto px-4 md:px-6">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 lg:gap-12 items-stretch">
          {/* Left - Image with overlay stat */}
          <motion.div
            initial={{ opacity: 0, x: -40 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
            className="relative rounded-2xl overflow-hidden min-h-[400px] lg:min-h-full"
          >
            <img
              src="/impact_joy.jpg"
              alt="Girls coding and learning STEM"
              className="absolute inset-0 w-full h-full object-cover"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-black/85 via-black/20 to-transparent" />
            <div className="absolute bottom-0 left-0 right-0 p-8">
              <div className="flex items-baseline" style={{ fontFamily: 'Instrument Serif' }}>
                <span className="text-5xl md:text-6xl leading-none">200</span>
                <span className="text-4xl md:text-5xl text-pink-400 leading-none">+</span>
              </div>
              <p className="text-sm text-white/90 font-medium mt-1 mb-3">
                Real-World Projects Launched
              </p>
              <p className="text-xs text-white/70 leading-relaxed max-w-md">
                Our trainees have tackled over 200 innovative projects, from
                robotics solutions to coding apps, solving pressing challenges and
                leaving a lasting mark on their communities.
              </p>
            </div>
          </motion.div>

          {/* Right - Heading + stat cards */}
          <div>
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
              className="mb-6 border-b border-white/10 pb-5"
            >
              <h2
                className="mb-2"
                style={{
                  fontFamily: 'Instrument Serif',
                  fontWeight: 400,
                  fontSize: 'clamp(32px, 4vw, 48px)',
                  lineHeight: '110%',
                  letterSpacing: '-0.02em'
                }}
              >
                Our Impact So Far...
              </h2>
              <p
                className="text-white/60"
                style={{
                  fontFamily: 'Instrument Sans',
                  fontWeight: 500,
                  fontSize: '14px',
                  lineHeight: '150%',
                  letterSpacing: '-0.02em'
                }}
              >
                Discover how Shenovate is shattering the gender gap in tech
              </p>
            </motion.div>

            <div className="space-y-4">
              {cards.map((card, index) => (
                <motion.div
                  key={card.label}
                  initial={{ opacity: 0, x: 20 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.5, delay: index * 0.1 }}
                  className={`relative overflow-hidden rounded-2xl p-6 flex items-start gap-6 ${
                    card.tone === 'pink' ? 'bg-pink-100' : 'bg-[#f6f3f4]'
                  }`}
                >
                  {/* decorative texture */}
                  <div className="pointer-events-none absolute right-0 top-0 bottom-0 w-1/3 bg-gradient-to-l from-pink-300/40 to-transparent" />

                  <div className="relative flex-shrink-0 w-28">
                    <div className="flex items-baseline" style={{ fontFamily: 'Instrument Serif' }}>
                      <span className="text-4xl md:text-5xl text-slate-900 leading-none">
                        {card.num}
                      </span>
                      <span className="text-3xl md:text-4xl text-pink-500 leading-none">
                        {card.suffix}
                      </span>
                    </div>
                    <p className="text-xs font-semibold text-slate-500 mt-2 leading-tight">
                      {card.label}
                    </p>
                  </div>

                  <p className="relative flex-1 text-sm text-slate-600 leading-relaxed pt-1">
                    {card.description}
                  </p>
                </motion.div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
