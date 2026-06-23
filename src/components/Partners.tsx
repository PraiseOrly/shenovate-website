import { motion } from 'framer-motion';

export function Partners() {
  const partners = [
    { name: 'U.S. Mission to Nigeria', logo: '/partners/us-mission.svg' },
    { name: 'PLAN International', logo: '/partners/plan.svg' },
    { name: 'Federal Ministry', logo: '/partners/seal.svg' },
    { name: 'S2S International', logo: '/partners/s2s.svg' },
    { name: 'Coderina', logo: '/partners/coderina.svg' },
    { name: 'UNGEI', logo: '/partners/ungei.svg' },
    { name: 'Psifon', logo: '/partners/psifon.svg' }
  ];

  return (
    <section className="py-20 bg-pink-50">
      <div className="container mx-auto px-4 md:px-6">
        {/* Heading */}
        <div className="text-center mb-10">
          <h3
            className="text-slate-900 mb-2"
            style={{
              fontFamily: 'Instrument Serif',
              fontWeight: 400,
              fontSize: 'clamp(28px, 3vw, 40px)',
              lineHeight: '120%',
              letterSpacing: '-0.02em'
            }}
          >
            Partners &amp; Sponsors
          </h3>
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
            Some of the leading organizations that believe in what we are building
          </p>
        </div>

        {/* Logos card */}
        <div className="max-w-5xl mx-auto bg-white rounded-2xl shadow-sm px-6 md:px-10 py-8">
          <div className="flex flex-wrap items-center justify-center gap-x-10 gap-y-6 md:gap-x-14">
            {partners.map((partner, index) => (
              <motion.div
                key={partner.name}
                initial={{ opacity: 0, y: 15 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: index * 0.05 }}
                className="flex items-center justify-center grayscale hover:grayscale-0 opacity-70 hover:opacity-100 transition-all duration-300"
              >
                <img
                  src={partner.logo}
                  alt={partner.name}
                  className="h-8 md:h-10 w-auto object-contain"
                />
              </motion.div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
