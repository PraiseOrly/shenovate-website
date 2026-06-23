import { motion } from 'framer-motion';
import { Sparkle, ArrowRight } from 'lucide-react';

export function About() {
  const features = [
    {
      label: 'Our Mission',
      title: 'Rocketing Girls to STEM Stardom!',
      description:
        "We're on a wild ride to close the gender gap in tech, empowering girls and women in Nigeria with the coolest STEM skills, confidence, and support to shine bright and soar high in coding, robotics, and beyond!"
    },
    {
      label: 'Our Vision',
      title: 'Dreaming Big for Every Girl!',
      description:
        "Imagine a world where girls and women have all the tools, chances, and cheerleaders they need to rule STEM. We're making that happen and turning them into the bold leaders, inventors, and game-changers of tomorrow!"
    },
    {
      label: 'Why We Do This',
      title: 'Because Diversity Fuels Awesome Tech!',
      description:
        "Innovation gets a mega boost when everyone's at the table. We're creating a vibe where girls and women can learn, grow, and lead; making tech more inclusive, exciting, and totally unstoppable!"
    }
  ];

  return (
    <section id="about" className="py-20 md:py-28 bg-[#faf7fb]">
      <div className="container mx-auto px-4 md:px-6">
        {/* Intro Section */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="grid grid-cols-1 lg:grid-cols-2 gap-8 lg:gap-16 items-start mb-24"
        >
          <div>
            <span className="inline-block text-sm font-medium text-violet-700 bg-violet-100 px-5 py-2 rounded-full mb-6">
              Hey ! It's nice to meet you...
            </span>
            <h2
              className="text-slate-900"
              style={{
                fontFamily: 'Instrument Serif',
                fontWeight: 400,
                fontSize: 'clamp(28px, 3.6vw, 46px)',
                lineHeight: '112%',
                letterSpacing: '-0.02em'
              }}
            >
              Shenovate's Mission Is to Bridge the Gender Gap in Tech Across
              Africa!
            </h2>
          </div>
          <div className="lg:pt-4">
            <p
              className="text-slate-500"
              style={{
                fontFamily: 'Instrument Sans',
                fontWeight: 500,
                fontSize: '15px',
                lineHeight: '170%',
                letterSpacing: '-0.02em'
              }}
            >
              We're a fierce non-profit from Nigeria, empowering girls and young
              women aged 9–35 to rule STEM. Through coding, robotics, and
              confidence-boosting workshops, we're sparking innovation and
              building a future where every girl can lead, create, and stay in
              tech!
            </p>
          </div>
        </motion.div>

        {/* Header Section */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center max-w-3xl mx-auto mb-12"
        >
          <span className="inline-block text-xs font-medium text-slate-500 bg-slate-100 px-4 py-1.5 rounded-full mb-6">
            About Us
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
            We're Here to Spark a STEM Revolution!
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
            and building a future where every girl can code, create, and lead.
          </p>
        </motion.div>

        {/* Image Section */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
          className="max-w-5xl mx-auto mb-20"
        >
          <div className="aspect-[16/9] rounded-2xl overflow-hidden bg-black border border-slate-200 shadow-sm p-2">
            <div className="w-full h-full rounded-xl overflow-hidden bg-black">
              <img
                src="/bridging.jpg"
                alt="Girls learning STEM"
                className="w-full h-full object-cover"
              />
            </div>
          </div>
        </motion.div>

        {/* Features */}
        <div className="grid grid-cols-1 md:grid-cols-3 max-w-6xl mx-auto md:divide-x divide-slate-200">
          {features.map((feature, index) => (
            <motion.div
              key={feature.label}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              className="group flex flex-col items-center text-center px-8 py-6"
            >
              <Sparkle className="w-5 h-5 text-slate-400 mb-5" />

              <span className="inline-block text-xs font-medium text-slate-500 bg-slate-100 px-4 py-1.5 rounded-full mb-4">
                {feature.label}
              </span>

              <h3
                className="text-slate-900 mb-4"
                style={{
                  fontFamily: 'Instrument Serif',
                  fontWeight: 400,
                  fontSize: '24px',
                  lineHeight: '120%',
                  letterSpacing: '-0.02em'
                }}
              >
                {feature.title}
              </h3>

              <p
                className="text-slate-500 mb-5"
                style={{
                  fontFamily: 'Instrument Sans',
                  fontWeight: 500,
                  fontSize: '14px',
                  lineHeight: '160%',
                  letterSpacing: '-0.02em'
                }}
              >
                {feature.description}
              </p>

              <a
                href="#"
                className="inline-flex items-center text-sm font-medium text-pink-600 hover:text-pink-700 transition-colors mt-auto"
              >
                Learn more
                <ArrowRight className="w-4 h-4 ml-1 transition-transform group-hover:translate-x-1" />
              </a>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
