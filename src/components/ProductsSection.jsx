import { motion } from 'framer-motion';
import { useState } from 'react';
import ProductCard from './ProductCard';

const products = [
  {
    name: 'Adjustable Scaffolding Jack Base',
    description: 'Heavy-duty adjustable jack base designed for accurate leveling and stable support of scaffolding systems.',
    image: '/src/assets/products/base_jack.jpeg',
  },
  {
    name: 'Structural Steel Clamp',
    description: 'High-strength clamp used for temporary and permanent structural steel connections.',
    image: '/src/assets/products/Structural_Steel_Clamp.jpeg',
  },
  {
    name: 'Waller Plate',
    description: 'Steel Waller plate for distributing load and stabilizing scaffolding standards.',
    image: '/src/assets/products/waller_plate.jpeg',
  },
  {
    name: 'Scaffold Pipe Clamp',
    description: 'Heavy-duty clamp for connecting scaffolding pipes securely.',
    image: '/src/assets/products/Scaffold_Pipe_Clamp.jpeg',
  },
  {
    name: 'Cuplock Bottom Cup',
    description: 'Bottom cup component used in cuplock scaffolding systems.',
    image: '/src/assets/products/Cuplock_Bottom_Cup.jpeg',
  },
  {
    name: 'Cuplock Top Cup',
    description: 'Top cup used to lock ledgers in cuplock scaffolding systems.',
    image: '/src/assets/products/Cuplock_Top_Cup.jpeg',
  },
  {
    name: 'Scaffolding Sleeve Coupler',
    description: 'Sleeve coupler used to join two scaffolding pipes end to end.',
    image: '/src/assets/products/Scaffolding_Sleeve_Coupler.jpeg',
  },
  {
    name: 'Right Angle Scaffolding Coupler',
    description: 'Fixed 90-degree coupler for rigid scaffolding pipe connections.',
    image: '/src/assets/products/Right_Angle_Scaffolding_Coupler.jpeg',
  },
  {
    name: 'Swivel Scaffolding Coupler',
    description: 'Swivel coupler allowing flexible angle connections between pipes.',
    image: '/src/assets/products/Swivel_Scaffolding_Coupler.jpeg',
  },
  {
    name: 'Scaffolding Joint Pin',
    description: 'Joint pin used to align and connect vertical scaffolding pipes.',
    image: '/src/assets/products/Scaffolding_Joint_Pin.jpeg',
  },
  {
    name: 'Cuplock Ledger Blade',
    description: 'Ledger blade used in cuplock systems to support horizontal members.',
    image: '/src/assets/products/Cuplock_Ledger_Blade.jpeg',
  },
  {
    name: 'Double Right Angle Scaffolding Coupler',
    description: 'High-load coupler designed for parallel pipe connections.',
    image: '/src/assets/products/Double_Right_Angle_Scaffolding_Coupler.jpeg',
  },
  {
    name: 'Ringlock Scaffolding Wedge',
    description: 'Locking wedge used in ringlock scaffolding systems.',
    image: '/src/assets/products/Ringlock_Wedge_Lock_Scaffolding_Wedge.jpeg',
  },
  {
    name: 'Shuttering Column Clamp',
    description: 'Clamp designed to hold column shuttering panels securely.',
    image: '/src/assets/products/Shuttering_Column_Clamp.jpeg',
  },
  {
    name: 'Girder Beam Clamp',
    description: 'Beam clamp used to fix girders without welding or drilling.',
    image: '/src/assets/products/Girder_Beam_Clamp.jpeg',
  },
  {
    name: 'Steel Scaffolding Plank (With Perforation)',
    description: 'Anti-slip perforated steel plank for safe scaffolding platforms.',
    image: '/src/assets/products/Steel_Scaffolding_Plank_(With Perforation).jpeg',
  },
  {
    name: 'GI Scaffolding Pipe',
    description: 'Galvanized steel pipe used in scaffolding structures.',
    image: '/src/assets/products/GI_Scaffolding_Pipe.jpeg',
  },
  {
    name: 'Scaffolding Base Plate',
    description: 'Standard base plate for vertical scaffolding support.',
    image: '/src/assets/products/Scaffolding_Base_Plate.jpeg',
  },
  {
    name: 'Adjustable Scaffolding Caster Wheel with Jack',
    description: 'Caster wheel with threaded jack and brake for mobile scaffolding.',
    image: '/src/assets/products/Adjustable_Scaffolding_Caster_Wheel_with_Jack_(With Brake).jpeg',
  },
  {
    name: 'Aluminium Scaffolding Frame',
    description: 'Lightweight aluminium frame for access and mobile scaffolding systems.',
    image: '/src/assets/products/Aluminium_Scaffolding_Frame.jpeg',
  },
  {
    name: 'Anchored Scaffolding Base Plate',
    description: 'Bolt-type base plate with welded pipe socket for fixed installations.',
    image: '/src/assets/products/Anchored_Scaffolding_Base_Plate_(With Pipe Socket).jpeg',
  },
  {
    name: 'H20 Timber Beam',
    description: 'Engineered timber beam used in slab and beam formwork systems.',
    image: '/src/assets/products/H20_Timber_Beam_(Formwork Beam).jpeg',
  },
  {
    name: 'Adjustable Steel Prop',
    description: 'Telescopic steel prop for slab and beam support in formwork.',
    image: '/src/assets/products/Adjustable_Steel_Prop_(Shuttering Prop).jpeg',
  },
  {
    name: 'Adjustable U-Head Jack',
    description: 'Threaded jack base for leveling scaffolding on uneven ground.',
    image: '/src/assets/products/Adjustable_uhead_jack.jpeg',
  },
];

export default function ProductsSection() {
  const [search, setSearch] = useState('');

  const filteredProducts = products.filter(
    (product) =>
      product.name.toLowerCase().includes(search.toLowerCase()) ||
      product.description.toLowerCase().includes(search.toLowerCase())
  );

  return (
    <section id="products" className="py-24 lg:py-32 bg-off-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">

        {/* HEADING */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center max-w-2xl mx-auto mb-10"
        >
          <h2 className="font-display text-3xl sm:text-4xl font-semibold text-charcoal">
            Our Products
          </h2>
          <p className="mt-4 text-steel-gray">
            Premium materials built for professionals who demand the best.
          </p>
        </motion.div>

        {/* SEARCH */}
        <div className="max-w-md mx-auto mb-12">
          <input
            type="text"
            value={search}
            onChange={(e) => setSearch(e.target.value)}
            placeholder="Search products (e.g. scaffolding, clamp, prop...)"
            className="w-full px-5 py-3 border border-steel-gray/20 rounded-lg
                       focus:border-gold focus:ring-1 focus:ring-gold
                       outline-none transition-colors bg-white"
          />
        </div>

        {/* PRODUCTS */}
        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-8">
          {filteredProducts.length > 0 ? (
            filteredProducts.map((product, index) => (
              <ProductCard key={product.name} product={product} index={index} />
            ))
          ) : (
            <p className="col-span-full text-center text-steel-gray">
              No products found matching your search.
            </p>
          )}
        </div>
      </div>
    </section>
  );
}
