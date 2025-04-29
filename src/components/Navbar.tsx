import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Link } from 'react-router-dom';
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
  { name: 'Events', href: '#events', icon: 'calendar' },
  { name: 'Blog', href: '#blog', icon: 'book' },
  { name: 'Contact', href: '#contact', icon: 'envelope' }
];

const Navbar: React.FC = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [activeItem, setActiveItem] = useState('Home');
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 50);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <nav className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
      scrolled 
        ? 'bg-neutral-900/95 backdrop-blur-lg shadow-lg' 
        : 'bg-transparent'
    }`}>
      <div className="container mx-auto px-4">
        <div className="flex items-center justify-between h-20">
          {/* Logo */}
          <Link to="/" className="flex items-center space-x-3 group">
            <motion.div
              whileHover={{ rotate: 15 }}
              transition={{ type: 'spring', stiffness: 300 }}
            >
              {getIcon('coffee')({ className: 'text-3xl text-primary-500 group-hover:text-primary-400 transition-colors' })}
            </motion.div>
            <span className="text-2xl font-display font-bold text-neutral-100 group-hover:text-primary-400 transition-colors">
              Almira May's
              <span className="text-primary-500 group-hover:text-primary-400"> Caffeine Bloom</span>
            </span>
          </Link>

          {/* Desktop Navigation */}
          <div className="hidden md:flex items-center space-x-1">
            {navItems.map((item) => (
              <motion.a
                key={item.name}
                href={item.href}
                className={`flex items-center space-x-2 px-4 py-2 rounded-lg transition-all duration-300 ${
                  activeItem === item.name
                    ? 'text-primary-500 bg-primary-900/50 shadow-lg'
                    : 'text-neutral-300 hover:text-primary-400 hover:bg-neutral-800/50'
                }`}
                onClick={() => setActiveItem(item.name)}
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
              >
                {getIcon(item.icon)({ 
                  className: `text-xl transition-colors ${
                    activeItem === item.name ? 'text-primary-500' : 'text-neutral-400'
                  }`
                })}
                <span className="font-medium">{item.name}</span>
              </motion.a>
            ))}
          </div>

          {/* Mobile Menu Button */}
          <motion.button
            className="md:hidden p-2 rounded-lg text-neutral-300 hover:text-primary-500 hover:bg-neutral-800/50 transition-colors"
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
              className="md:hidden bg-neutral-900/95 backdrop-blur-lg rounded-xl mt-2 mb-4"
            >
              <div className="p-2 space-y-1">
                {navItems.map((item) => (
                  <motion.a
                    key={item.name}
                    href={item.href}
                    className={`flex items-center space-x-3 px-4 py-3 rounded-lg transition-colors ${
                      activeItem === item.name
                        ? 'text-primary-500 bg-primary-900/50'
                        : 'text-neutral-300 hover:text-primary-400 hover:bg-neutral-800/50'
                    }`}
                    onClick={() => {
                      setActiveItem(item.name);
                      setIsOpen(false);
                    }}
                    whileHover={{ scale: 1.02 }}
                    whileTap={{ scale: 0.98 }}
                  >
                    {getIcon(item.icon)({ 
                      className: `text-xl ${
                        activeItem === item.name ? 'text-primary-500' : 'text-neutral-400'
                      }`
                    })}
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