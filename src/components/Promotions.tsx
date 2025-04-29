import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { getIcon } from '../config/icons';

interface Promotion {
  id: string;
  title: string;
  description: string;
  image: string;
  startDate: string;
  endDate: string;
  code: string;
}

const promotions: Promotion[] = [
  {
    id: '1',
    title: 'Happy Hour',
    description: 'Enjoy 20% off all beverages from 2pm to 5pm on weekdays',
    image: '/assets/images/promotions/happy-hour.jpg',
    startDate: '2024-04-01',
    endDate: '2024-04-30',
    code: 'HAPPY20'
  },
  {
    id: '2',
    title: 'Student Discount',
    description: 'Show your student ID and get 15% off your entire order',
    image: '/assets/images/promotions/student.jpg',
    startDate: '2024-04-01',
    endDate: '2024-12-31',
    code: 'STUDENT15'
  },
  {
    id: '3',
    title: 'Birthday Treat',
    description: 'Get a free pastry with any beverage purchase on your birthday',
    image: '/assets/images/promotions/birthday.jpg',
    startDate: '2024-01-01',
    endDate: '2024-12-31',
    code: 'BDAYGIFT'
  }
];

const Promotions: React.FC = () => {
  const [selectedPromotion, setSelectedPromotion] = useState<Promotion | null>(null);

  return (
    <section id="promotions" className="py-20 bg-gradient-to-b from-primary-50 to-neutral-50">
      <div className="container mx-auto px-4">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
          className="max-w-4xl mx-auto text-center mb-16"
        >
          <h2 className="text-4xl md:text-5xl font-display font-bold text-primary-800 mb-6">
            Special Offers
          </h2>
          <p className="text-lg text-neutral-600 leading-relaxed">
            Take advantage of our current promotions and save on your favorite items
          </p>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {promotions.map((promotion, index) => (
            <motion.div
              key={promotion.id}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8, delay: index * 0.1 }}
              className="group relative bg-white rounded-xl overflow-hidden shadow-lg hover:shadow-xl transition-shadow duration-300"
              onClick={() => setSelectedPromotion(promotion)}
            >
              <div className="relative aspect-video overflow-hidden">
                <img
                  src={promotion.image}
                  alt={promotion.title}
                  className="w-full h-full object-cover transition-transform duration-300 group-hover:scale-110"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-neutral-900/80 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
                <div className="absolute inset-0 flex items-end p-6 opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                  <div className="text-white">
                    <h3 className="text-xl font-semibold mb-2">{promotion.title}</h3>
                    <p className="text-sm text-neutral-200 mb-4">{promotion.description}</p>
                    <div className="flex items-center gap-4">
                      <span className="flex items-center gap-2 text-sm font-medium">
                        {getIcon('calendar')({ className: 'text-lg' })}
                        {new Date(promotion.startDate).toLocaleDateString()} - {new Date(promotion.endDate).toLocaleDateString()}
                      </span>
                    </div>
                  </div>
                </div>
              </div>
              <div className="p-6">
                <h3 className="text-xl font-semibold text-primary-800 mb-2">
                  {promotion.title}
                </h3>
                <p className="text-neutral-600 mb-4">
                  {promotion.description}
                </p>
                <div className="flex items-center justify-between">
                  <span className="text-sm text-neutral-500">
                    Code: {promotion.code}
                  </span>
                  <button
                    className="text-primary-600 hover:text-primary-700 transition-colors duration-300"
                    onClick={(e) => {
                      e.stopPropagation();
                      setSelectedPromotion(promotion);
                    }}
                  >
                    {getIcon('info')({ className: 'text-xl' })}
                  </button>
                </div>
              </div>
            </motion.div>
          ))}
        </div>

        {/* Promotion Modal */}
        <AnimatePresence>
          {selectedPromotion && (
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-neutral-900/90 backdrop-blur-sm"
              onClick={() => setSelectedPromotion(null)}
            >
              <motion.div
                initial={{ scale: 0.9, opacity: 0 }}
                animate={{ scale: 1, opacity: 1 }}
                exit={{ scale: 0.9, opacity: 0 }}
                className="relative max-w-2xl w-full bg-white rounded-xl overflow-hidden"
                onClick={e => e.stopPropagation()}
              >
                <div className="relative aspect-video">
                  <img
                    src={selectedPromotion.image}
                    alt={selectedPromotion.title}
                    className="w-full h-full object-cover"
                  />
                </div>
                <div className="p-6">
                  <h3 className="text-2xl font-semibold text-primary-800 mb-2">
                    {selectedPromotion.title}
                  </h3>
                  <p className="text-neutral-600 mb-4">
                    {selectedPromotion.description}
                  </p>
                  <div className="flex items-center gap-4 text-sm text-neutral-600 mb-4">
                    <span className="flex items-center gap-1">
                      {getIcon('calendar')({ className: 'text-lg' })}
                      {new Date(selectedPromotion.startDate).toLocaleDateString()} - {new Date(selectedPromotion.endDate).toLocaleDateString()}
                    </span>
                  </div>
                  <div className="bg-primary-50 p-4 rounded-lg">
                    <div className="flex items-center justify-between">
                      <span className="font-medium text-primary-800">
                        Promotion Code
                      </span>
                      <span className="font-bold text-primary-600">
                        {selectedPromotion.code}
                      </span>
                    </div>
                  </div>
                </div>
                <button
                  onClick={() => setSelectedPromotion(null)}
                  className="absolute top-4 right-4 p-2 bg-white rounded-full shadow-lg hover:bg-neutral-100 transition-colors duration-300"
                >
                  {getIcon('close')({ className: 'text-xl text-neutral-600' })}
                </button>
              </motion.div>
            </motion.div>
          )}
        </AnimatePresence>
      </div>
    </section>
  );
};

export default Promotions; 