import { motion } from 'framer-motion';

const quickLinks = [
  { label: 'Home', href: '#home' },
  { label: 'About', href: '#about' },
  { label: 'Products', href: '#products' },
  { label: 'Contact', href: '#contact' },
];

export default function Footer() {
  return (
    <motion.footer
      initial={{ opacity: 0 }}
      whileInView={{ opacity: 1 }}
      viewport={{ once: true }}
      className="bg-charcoal text-off-white py-16"
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex flex-col md:flex-row justify-between items-center md:items-start gap-8">
          <div>
            <a href="#home" className="font-display text-2xl font-semibold text-off-white">
              Premier<span className="text-gold">Materials</span>
            </a>
            <p className="mt-3 text-steel-gray text-sm max-w-xs">
              Built with strength and trust.
            </p>
          </div>
          <nav className="flex flex-wrap justify-center md:justify-end gap-6">
            {quickLinks.map((link) => (
              <a
                key={link.href}
                href={link.href}
                className="text-steel-gray hover:text-gold transition-colors duration-200 text-sm font-medium"
              >
                {link.label}
              </a>
            ))}
          </nav>
        </div>
        <div className="mt-12 pt-8 border-t border-steel-gray/30 text-center">
          <p className="text-steel-gray text-sm">
            © {new Date().getFullYear()} Premier Materials. All rights reserved.
          </p>
        </div>
      </div>
    </motion.footer>
  );
}
