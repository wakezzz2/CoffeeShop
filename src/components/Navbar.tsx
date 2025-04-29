import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { getIcon } from '../config/icons';

interface NavItem {
  name: string;
  href: string;
  icon: string;
}

const navItems: NavItem[] = [
  { name: 'Home', href: '#home', icon: 'home' },
  { name: 'Menu', href: '#menu', icon: 'coffee' },
  { name: 'Gallery', href: '#gallery', icon: 'image' },
  { name: 'About', href: '#about', icon: 'info' },
  { name: 'Promotions', href: '#promotions', icon: 'gift' },
  { name: 'Contact', href: '#contact', icon: 'envelope' }
];

const Navbar: React.FC = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [activeItem, setActiveItem] = useState('Home');

  return (
    <nav className="fixed top-0 left-0 right-0 z-50 bg-neutral-900/80 backdrop-blur-md border-b border-neutral-800">
      <div className="container mx-auto px-4">
        <div className="flex items-center justify-between h-16">
          {/* Logo */}
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.5 }}
            className="flex items-center"
          >
            <a href="#home" className="flex items-center space-x-2">
              {getIcon('coffee')({ className: 'text-2xl text-primary-500' })}
              <span className="text-xl font-display font-bold text-neutral-100">Coffee Shop</span>
            </a>
          </motion.div>

          {/* Desktop Navigation */}
          <div className="hidden md:flex items-center space-x-8">
            {navItems.map((item) => (
              <motion.a
                key={item.name}
                href={item.href}
                className={`flex items-center space-x-2 px-3 py-2 rounded-md transition-colors duration-200 ${
                  activeItem === item.name
                    ? 'text-primary-500 bg-primary-900/50'
                    : 'text-neutral-300 hover:text-primary-500 hover:bg-primary-900/30'
                }`}
                onClick={() => setActiveItem(item.name)}
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
              >
                {getIcon(item.icon)({ className: 'text-lg' })}
                <span className="font-medium">{item.name}</span>
              </motion.a>
            ))}
          </div>

          {/* Mobile Menu Button */}
          <motion.button
            className="md:hidden p-2 rounded-md text-neutral-300 hover:text-primary-500 hover:bg-primary-900/30"
            onClick={() => setIsOpen(!isOpen)}
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
          >
            {getIcon(isOpen ? 'close' : 'menu')({ className: 'text-2xl' })}
          </motion.button>
        </div>

        {/* Mobile Navigation */}
        <AnimatePresence>
          {isOpen && (
            <motion.div
              initial={{ opacity: 0, height: 0 }}
              animate={{ opacity: 1, height: 'auto' }}
              exit={{ opacity: 0, height: 0 }}
              transition={{ duration: 0.3 }}
              className="md:hidden"
            >
              <div className="px-2 pt-2 pb-3 space-y-1">
                {navItems.map((item) => (
                  <motion.a
                    key={item.name}
                    href={item.href}
                    className={`flex items-center space-x-2 px-3 py-2 rounded-md transition-colors duration-200 ${
                      activeItem === item.name
                        ? 'text-primary-500 bg-primary-900/50'
                        : 'text-neutral-300 hover:text-primary-500 hover:bg-primary-900/30'
                    }`}
                    onClick={() => {
                      setActiveItem(item.name);
                      setIsOpen(false);
                    }}
                    whileHover={{ scale: 1.02 }}
                    whileTap={{ scale: 0.98 }}
                  >
                    {getIcon(item.icon)({ className: 'text-lg' })}
                    <span className="font-medium">{item.name}</span>
                  </motion.a>
                ))}
              </div>
            </motion.div>
          )}
        </AnimatePresence>
      </div>
    </nav>
  );
};

export default Navbar; 