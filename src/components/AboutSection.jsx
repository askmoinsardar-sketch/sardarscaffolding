import { motion } from 'framer-motion';

export default function AboutSection() {
  return (
    <section id="about" className="py-24 lg:py-32 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid lg:grid-cols-2 gap-16 lg:gap-24 items-center">
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, margin: '-100px' }}
            transition={{ duration: 0.6 }}
          >
            <h2 className="font-display text-3xl sm:text-4xl font-semibold text-charcoal">
              Decades of Strength, Built on Trust
            </h2>
            <p className="mt-6 text-steel-gray leading-relaxed">
              For over three decades, we have been the backbone of construction excellence.
              Our commitment to quality and reliability has made us the preferred choice for
              builders, contractors, and infrastructure companies who refuse to compromise.
            </p>
            <p className="mt-4 text-steel-gray leading-relaxed">
              Every product we deliver meets the highest industry standards. From raw materials
              to finished solutions, we ensure that your projects stand the test of time.
            </p>
            <div className="mt-8 flex flex-wrap gap-6">
              {[
                { value: '30+', label: 'Years Experience' },
                { value: '5000+', label: 'Projects Delivered' },
                { value: '100%', label: 'Quality Assured' },
              ].map((stat, i) => (
                <motion.div
                  key={stat.label}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: i * 0.1 }}
                  className="border-l-2 border-gold pl-4"
                >
                  <span className="font-display text-2xl font-semibold text-charcoal">{stat.value}</span>
                  <p className="text-sm text-steel-gray">{stat.label}</p>
                </motion.div>
              ))}
            </div>
          </motion.div>
          <motion.div
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, margin: '-100px' }}
            transition={{ duration: 0.6 }}
            className="relative aspect-[4/3] bg-steel-gray/10"
          >
            <div className="absolute inset-0 flex items-center justify-center">
              <div className="text-center p-8">
                <div className="w-24 h-24 mx-auto rounded-full bg-gold/20 flex items-center justify-center mb-4">
                  <svg className="w-12 h-12 text-gold" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M19 21V5a2 2 0 00-2-2H7a2 2 0 00-2 2v16m14 0h2m-2 0h-5m-9 0H3m2 0h5M9 7h1m-1 4h1m4-4h1m-1 4h1m-5 10v-5a1 1 0 011-1h2a1 1 0 011 1v5m-4 0h4" />
                  </svg>
                </div>
                <p className="text-steel-gray font-medium">Industrial Excellence</p>
              </div>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
