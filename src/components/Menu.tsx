import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { getIcon } from '../config/icons';

interface MenuItem {
  id: number;
  name: string;
  description: string;
  price: number;
  image: string;
  category: string;
  isPopular?: boolean;
  isNew?: boolean;
}

const menuItems: MenuItem[] = [
  {
    id: 1,
    name: "Espresso",
    description: "Rich, full-bodied espresso with a perfect crema",
    price: 3.50,
    image: "/assets/images/menu/espresso.jpg",
    category: "coffee",
    isPopular: true
  },
  {
    id: 2,
    name: "Cappuccino",
    description: "Espresso with steamed milk and velvety foam",
    price: 4.50,
    image: "/assets/images/menu/cappuccino.jpg",
    category: "coffee",
    isPopular: true
  },
  {
    id: 3,
    name: "Latte",
    description: "Smooth espresso with steamed milk and light foam",
    price: 4.75,
    image: "/assets/images/menu/latte.jpg",
    category: "coffee"
  },
  {
    id: 4,
    name: "Mocha",
    description: "Espresso with chocolate and steamed milk",
    price: 5.00,
    image: "/assets/images/menu/mocha.jpg",
    category: "coffee"
  },
  {
    id: 5,
    name: "Croissant",
    description: "Buttery, flaky pastry with a golden crust",
    price: 3.25,
    image: "/assets/images/menu/croissant.jpg",
    category: "pastries",
    isPopular: true
  },
  {
    id: 6,
    name: "Blueberry Muffin",
    description: "Moist muffin packed with fresh blueberries",
    price: 3.50,
    image: "/assets/images/menu/muffin.jpg",
    category: "pastries"
  },
  {
    id: 7,
    name: "Avocado Toast",
    description: "Sourdough toast with smashed avocado, cherry tomatoes, and microgreens",
    price: 8.50,
    image: "/assets/images/menu/avocado-toast.jpg",
    category: "breakfast",
    isNew: true
  },
  {
    id: 8,
    name: "Breakfast Burrito",
    description: "Scrambled eggs, black beans, cheese, and salsa in a warm tortilla",
    price: 9.00,
    image: "/assets/images/menu/burrito.jpg",
    category: "breakfast"
  }
];

const categories = [
  { id: 'all', name: 'All Items', icon: 'grid' },
  { id: 'coffee', name: 'Coffee', icon: 'coffee' },
  { id: 'pastries', name: 'Pastries', icon: 'cake' },
  { id: 'breakfast', name: 'Breakfast', icon: 'sun' }
];

const Menu: React.FC = () => {
  const [selectedCategory, setSelectedCategory] = useState('all');
  const [searchQuery, setSearchQuery] = useState('');

  const filteredItems = menuItems.filter(item => {
    const matchesCategory = selectedCategory === 'all' || item.category === selectedCategory;
    const matchesSearch = item.name.toLowerCase().includes(searchQuery.toLowerCase()) ||
                         item.description.toLowerCase().includes(searchQuery.toLowerCase());
    return matchesCategory && matchesSearch;
  });

  return (
    <section id="menu" className="py-20 bg-neutral-900">
      <div className="container mx-auto px-4">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl font-display font-bold text-neutral-100 mb-4">
            Our Menu
          </h2>
          <p className="text-xl text-neutral-300">
            Discover our carefully crafted selection of coffee and treats
          </p>
        </motion.div>

        {/* Search and Filter */}
        <div className="mb-12">
          <div className="max-w-md mx-auto mb-8">
            <div className="relative">
              <input
                type="text"
                placeholder="Search menu items..."
                value={searchQuery}
                onChange={(e) => setSearchQuery(e.target.value)}
                className="w-full px-4 py-3 pl-12 bg-neutral-800 border border-neutral-700 rounded-lg text-neutral-100 focus:outline-none focus:ring-2 focus:ring-primary-500"
              />
              <div className="absolute left-4 top-1/2 transform -translate-y-1/2">
                {getIcon('search')({ className: 'text-neutral-400 w-5 h-5' })}
              </div>
            </div>
          </div>

          <div className="flex flex-wrap justify-center gap-4">
            {categories.map(category => (
              <button
                key={category.id}
                onClick={() => setSelectedCategory(category.id)}
                className={`px-6 py-3 rounded-full flex items-center gap-2 transition-colors ${
                  selectedCategory === category.id
                    ? 'bg-primary-500 text-neutral-100'
                    : 'bg-neutral-800 text-neutral-300 hover:bg-neutral-700'
                }`}
              >
                {getIcon(category.icon)({ className: 'w-5 h-5' })}
                {category.name}
              </button>
            ))}
          </div>
        </div>

        {/* Menu Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {filteredItems.map((item, index) => (
            <motion.div
              key={item.id}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              viewport={{ once: true }}
              className="bg-neutral-800 rounded-2xl overflow-hidden group"
            >
              <div className="relative">
                <img
                  src={item.image}
                  alt={item.name}
                  className="w-full h-64 object-cover group-hover:scale-105 transition-transform duration-500"
                />
                <div className="absolute top-4 right-4 flex gap-2">
                  {item.isPopular && (
                    <span className="px-3 py-1 bg-primary-500 text-neutral-100 text-sm font-semibold rounded-full">
                      Popular
                    </span>
                  )}
                  {item.isNew && (
                    <span className="px-3 py-1 bg-green-500 text-neutral-100 text-sm font-semibold rounded-full">
                      New
                    </span>
                  )}
                </div>
              </div>

              <div className="p-6">
                <div className="flex items-start justify-between mb-4">
                  <h3 className="text-xl font-display font-bold text-neutral-100">
                    {item.name}
                  </h3>
                  <span className="text-primary-500 font-bold">
                    ${item.price.toFixed(2)}
                  </span>
                </div>
                <p className="text-neutral-400 mb-6">
                  {item.description}
                </p>
                <button className="w-full px-4 py-2 bg-primary-500 text-neutral-100 rounded-lg hover:bg-primary-600 transition-colors flex items-center justify-center gap-2">
                  {getIcon('add')({ className: 'w-5 h-5' })}
                  Add to Order
                </button>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Menu; 