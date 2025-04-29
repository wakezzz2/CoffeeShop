import React from 'react';
import { motion } from 'framer-motion';
import { getIcon } from '../config/icons';

interface Offer {
  id: number;
  title: string;
  description: string;
  discount: string;
  icon: string;
  validUntil: string;
}

const offers: Offer[] = [
  {
    id: 1,
    title: "Morning Delight",
    description: "Get 20% off on all breakfast items from 7 AM to 10 AM",
    discount: "20% OFF",
    icon: "sun",
    validUntil: "Valid until June 30, 2024"
  },
  {
    id: 2,
    title: "Happy Hour",
    description: "Buy one coffee, get one free from 3 PM to 5 PM",
    discount: "BOGO",
    icon: "clock",
    validUntil: "Valid until June 30, 2024"
  },
  {
    id: 3,
    title: "Weekend Special",
    description: "Family bundle: 4 drinks + 4 pastries for the price of 3",
    discount: "25% OFF",
    icon: "users",
    validUntil: "Valid until June 30, 2024"
  }
];

const SpecialOffers: React.FC = () => {
  return (
    <section id="offers" className="py-20 bg-neutral-900">
      <div className="container mx-auto px-4">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl font-display font-bold text-neutral-100 mb-4">
            Special Offers
          </h2>
          <p className="text-xl text-neutral-300">
            Take advantage of our current promotions and save on your favorite items
          </p>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {offers.map((offer, index) => (
            <motion.div
              key={offer.id}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: index * 0.2 }}
              viewport={{ once: true }}
              className="bg-neutral-800 rounded-2xl p-8 relative overflow-hidden group"
            >
              <div className="absolute top-0 right-0 w-32 h-32 bg-primary-500/10 rounded-full blur-3xl transform translate-x-1/2 -translate-y-1/2 group-hover:scale-150 transition-transform duration-500" />
              
              <div className="relative z-10">
                <div className="flex items-center justify-between mb-6">
                  <div className="w-12 h-12 bg-primary-500/20 rounded-full flex items-center justify-center">
                    {getIcon(offer.icon)({ className: 'text-2xl text-primary-500' })}
                  </div>
                  <span className="px-4 py-2 bg-primary-500/20 text-primary-500 font-semibold rounded-full">
                    {offer.discount}
                  </span>
                </div>

                <h3 className="text-2xl font-display font-bold text-neutral-100 mb-4">
                  {offer.title}
                </h3>
                <p className="text-neutral-300 mb-6">
                  {offer.description}
                </p>
                <p className="text-sm text-neutral-400">
                  {offer.validUntil}
                </p>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default SpecialOffers; 