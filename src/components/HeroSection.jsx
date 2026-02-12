import { useEffect, useState } from 'react';
import { motion } from 'framer-motion';

const slides = [
  {
    id: 1,
    image:
      'https://images.unsplash.com/photo-1581090700227-1e37b190418e?auto=format&fit=crop&w=1600&q=80',
    alt: 'Construction site with steel framework at sunset',
  },
  {
    id: 2,
    image:
      'https://images.unsplash.com/photo-1600585154340-be6161a56a0c?auto=format&fit=crop&w=1600&q=80',
    alt: 'Modern building under construction with scaffolding',
  },
  {
    id: 3,
    image:
      'https://images.unsplash.com/photo-1503387762-592deb58ef4e?auto=format&fit=crop&w=1600&q=80',
    alt: 'Heavy machinery working on a construction project',
  },
];

export default function HeroSection() {
  const [currentSlide, setCurrentSlide] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentSlide((prev) => (prev + 1) % slides.length);
    }, 5000);

    return () => clearInterval(interval);
  }, []);

  const goToSlide = (index) => {
    setCurrentSlide(index);
  };

  const goToPrev = () => {
    setCurrentSlide((prev) => (prev - 1 + slides.length) % slides.length);
  };

  const goToNext = () => {
    setCurrentSlide((prev) => (prev + 1) % slides.length);
  };

  return (
    <section id="home" className="relative min-h-screen flex items-center pt-20 overflow-hidden">
      {/* Background image carousel */}
      <div className="absolute inset-0 -z-10">
        {slides.map((slide, index) => (
          <motion.div
            key={slide.id}
            initial={{ opacity: 0, scale: 1.02 }}
            animate={{
              opacity: index === currentSlide ? 1 : 0,
              scale: index === currentSlide ? 1 : 1.02,
            }}
            transition={{ duration: 0.8 }}
            className="absolute inset-0 bg-cover bg-center"
            style={{ backgroundImage: `url(${slide.image})` }}
            aria-hidden={index !== currentSlide}
          />
        ))}
        {/* Dark overlay for readability */}
        <div className="absolute inset-0 bg-black/60" aria-hidden="true" />
      </div>

      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-24 lg:py-32">
        <div className="max-w-3xl">
            <motion.h1
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6 }}
              className="font-display text-4xl sm:text-5xl lg:text-6xl font-semibold text-white leading-tight tracking-tight"
            >
              Premium Construction Materials You Can Trust
            </motion.h1>
            <motion.p
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.15 }}
              className="mt-6 text-lg sm:text-xl text-off-white/80 max-w-2xl leading-relaxed"
            >
              Built for durability. Engineered for quality. Trusted by professionals worldwide.
              We deliver the strongest, most reliable materials for your most demanding projects.
            </motion.p>
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.3 }}
              className="mt-10 flex flex-col sm:flex-row gap-4"
            >
              <a
                href="#contact"
                className="inline-flex items-center justify-center px-8 py-4 bg-gold text-charcoal font-semibold hover:bg-gold/90 transition-colors duration-200 shadow-lg"
              >
                Get a Quote
              </a>
              <a
                href="#products"
                className="inline-flex items-center justify-center px-8 py-4 border-2 border-off-white text-off-white font-semibold hover:bg-off-white hover:text-charcoal transition-colors duration-200"
              >
                View Products
              </a>
            </motion.div>
        </div>
      </div>
    </section>
  );
}
