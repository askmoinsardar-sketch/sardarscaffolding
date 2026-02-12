import { motion } from 'framer-motion';

export default function ProductCard({ product, index }) {
  return (
    <motion.article
      initial={{ opacity: 0, y: 30 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: '-50px' }}
      transition={{ duration: 0.5, delay: index * 0.1 }}
      whileHover={{ y: -4 }}
      className="group bg-white border border-steel-gray/10 overflow-hidden transition-shadow duration-300 hover:shadow-xl hover:border-gold/50"
    >
      <div className="h-96 bg-steel-gray/5 overflow-hidden">
        <img
          src={product.image}
          alt={product.name}
          className="w-full h-full object-contain transition-transform duration-500 group-hover:scale-105"
        />
      </div>
      <div className="p-6">
        <h3 className="font-display text-xl font-semibold text-charcoal group-hover:text-gold transition-colors">
          {product.name}
        </h3>
        <p className="mt-2 text-steel-gray text-sm leading-relaxed">{product.description}</p>
      </div>
    </motion.article>
  );
}
