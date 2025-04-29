import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { getIcon } from '../config/icons';

interface MenuItem {
  id: string;
  name: string;
  description: string;
  price: number;
  category: string;
  image: string;
}

const menuItems: MenuItem[] = [
  {
    id: '1',
    name: 'Espresso',
    description: 'A rich and bold shot of our finest coffee beans',
    price: 3.50,
    category: 'coffee',
    image: '/assets/images/menu/espresso.jpg'
  },
  {
    id: '2',
    name: 'Cappuccino',
    description: 'Perfectly balanced espresso with steamed milk and foam',
    price: 4.50,
    category: 'coffee',
    image: '/assets/images/menu/cappucino.jpg'
  },
  {
    id: '3',
    name: 'Avocado Toast',
    description: 'Sourdough bread with smashed avocado, cherry tomatoes, and feta',
    price: 8.50,
    category: 'food',
    image: '/assets/images/menu/avocado toast.jpg'
  },
  {
    id: '4',
    name: 'Blueberry Muffin',
    description: 'Freshly baked muffin with juicy blueberries',
    price: 4.00,
    category: 'pastry',
    image: '/assets/images/menu/blueberry muffin.jpg'
  }
];

const categories = ['all', 'coffee', 'food', 'pastry'];

const Menu: React.FC = () => {
  const [activeCategory, setActiveCategory] = useState('all');
  const [favorites, setFavorites] = useState<string[]>([]);

  const filteredItems = activeCategory === 'all'
    ? menuItems
    : menuItems.filter(item => item.category === activeCategory);

  const toggleFavorite = (id: string) => {
    setFavorites(prev =>
      prev.includes(id)
        ? prev.filter(itemId => itemId !== id)
        : [...prev, id]
    );
  };

  return (
    <section id="menu" className="py-20 bg-gradient-to-b from-neutral-800 to-neutral-900">
      <div className="container mx-auto px-4">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
          className="max-w-4xl mx-auto text-center mb-16"
        >
          <h2 className="text-4xl md:text-5xl font-display font-bold text-neutral-100 mb-6">
            Our Menu
          </h2>
          <p className="text-lg text-neutral-300 leading-relaxed">
            Discover our selection of handcrafted beverages and delicious treats
          </p>
        </motion.div>

        {/* Category Filter */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8, delay: 0.2 }}
          className="flex flex-wrap justify-center gap-4 mb-12"
        >
          {categories.map(category => (
            <button
              key={category}
              onClick={() => setActiveCategory(category)}
              className={`px-6 py-2 rounded-full font-medium transition-colors duration-300 ${
                activeCategory === category
                  ? 'bg-primary-500 text-neutral-100'
                  : 'bg-neutral-800 text-neutral-300 hover:bg-neutral-700 hover:text-neutral-100'
              }`}
            >
              {category.charAt(0).toUpperCase() + category.slice(1)}
            </button>
          ))}
        </motion.div>

        {/* Menu Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {filteredItems.map((item, index) => (
            <motion.div
              key={item.id}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8, delay: index * 0.1 }}
              className="bg-neutral-800 rounded-xl overflow-hidden shadow-lg hover:shadow-xl transition-shadow duration-300"
            >
              <div className="relative h-48">
                <img
                  src={item.image}
                  alt={item.name}
                  className="w-full h-full object-cover"
                />
                <button
                  onClick={() => toggleFavorite(item.id)}
                  className="absolute top-4 right-4 p-2 bg-neutral-900/80 rounded-full hover:bg-neutral-900 transition-colors duration-300"
                >
                  {getIcon(favorites.includes(item.id) ? 'heart' : 'heartOutline')({
                    className: `text-xl ${favorites.includes(item.id) ? 'text-primary-500' : 'text-neutral-300'}`
                  })}
                </button>
              </div>
              <div className="p-6">
                <div className="flex justify-between items-start mb-2">
                  <h3 className="text-xl font-semibold text-neutral-100">
                    {item.name}
                  </h3>
                  <span className="text-lg font-bold text-primary-500">
                    ${item.price.toFixed(2)}
                  </span>
                </div>
                <p className="text-neutral-300">
                  {item.description}
                </p>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Menu; 