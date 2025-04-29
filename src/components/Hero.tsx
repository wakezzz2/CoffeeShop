import React from 'react';
import { motion } from 'framer-motion';
import { getIcon } from '../config/icons';

const Hero: React.FC = () => {
  return (
    <section className="relative min-h-screen flex items-center justify-center overflow-hidden">
      {/* Background Elements */}
      <div className="absolute inset-0">
        <img
          src="/assets/images/hero/hero-bg.jpg"
          alt="Kape Ilongga Interior"
          className="w-full h-full object-cover"
        />
        <div className="absolute inset-0 bg-gradient-to-br from-neutral-900/90 via-neutral-900/80 to-neutral-900/90" />
        <div className="absolute inset-0 bg-[url('/src/assets/pattern.svg')] opacity-10" />
        
        {/* Animated Background Elements */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 1 }}
          className="absolute inset-0"
        >
          <div className="absolute top-1/4 left-1/4 w-64 h-64 bg-primary-500/20 rounded-full blur-3xl" />
          <div className="absolute bottom-1/4 right-1/4 w-64 h-64 bg-secondary-500/20 rounded-full blur-3xl" />
        </motion.div>
      </div>

      {/* Content */}
      <div className="container mx-auto px-4 relative z-10">
        <div className="max-w-4xl mx-auto text-center">
          <motion.h1
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, ease: 'easeOut' }}
            className="text-6xl md:text-7xl lg:text-8xl font-display font-black text-neutral-100 leading-tight tracking-tight"
          >
            Experience the Art of{' '}
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-primary-500 to-secondary-500">
              Coffee
            </span>
          </motion.h1>

          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.2, ease: 'easeOut' }}
            className="mt-6 text-xl md:text-2xl text-neutral-300 font-medium leading-relaxed"
          >
            Discover our handcrafted brews, artisanal pastries, and cozy atmosphere
            that makes every visit special.
          </motion.p>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.4, ease: 'easeOut' }}
            className="mt-12 flex flex-col sm:flex-row items-center justify-center gap-4"
          >
            <a
              href="#menu"
              className="group relative px-8 py-4 bg-primary-500 text-neutral-100 font-semibold rounded-full overflow-hidden transition-all duration-300 hover:bg-primary-600 hover:shadow-lg hover:shadow-primary-500/20"
            >
              <span className="relative z-10 flex items-center gap-2">
                {getIcon('coffee')({ className: 'text-xl' })}
                View Menu
              </span>
              <div className="absolute inset-0 bg-gradient-to-r from-primary-400 to-primary-600 opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
            </a>

            <a
              href="#contact"
              className="group relative px-8 py-4 bg-neutral-900/50 text-neutral-100 font-semibold rounded-full overflow-hidden transition-all duration-300 hover:bg-neutral-900/70 hover:shadow-lg hover:shadow-neutral-900/20"
            >
              <span className="relative z-10 flex items-center gap-2">
                {getIcon('location')({ className: 'text-xl' })}
                Find Us
              </span>
              <div className="absolute inset-0 bg-gradient-to-r from-neutral-800/50 to-neutral-900/50 opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
            </a>
          </motion.div>

          {/* Decorative Elements */}
          <motion.div
            initial={{ opacity: 0, scale: 0.8 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.8, delay: 0.6, ease: 'easeOut' }}
            className="mt-16 flex items-center justify-center gap-8 text-neutral-300"
          >
            <div className="flex items-center gap-2">
              {getIcon('star')({ className: 'text-xl text-primary-500' })}
              <span className="font-medium">4.9/5 Rating</span>
            </div>
            <div className="w-1 h-1 rounded-full bg-neutral-600" />
            <div className="flex items-center gap-2">
              {getIcon('clock')({ className: 'text-xl text-primary-500' })}
              <span className="font-medium">Open 7am-9pm</span>
            </div>
            <div className="w-1 h-1 rounded-full bg-neutral-600" />
            <div className="flex items-center gap-2">
              {getIcon('wifi')({ className: 'text-xl text-primary-500' })}
              <span className="font-medium">Free WiFi</span>
            </div>
          </motion.div>
        </div>
      </div>

      {/* Scroll Indicator */}
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8, delay: 0.8, ease: 'easeOut' }}
        className="absolute bottom-8 left-1/2 transform -translate-x-1/2"
      >
        <div className="flex flex-col items-center gap-2">
          <span className="text-sm font-medium text-neutral-300">Scroll to explore</span>
          {getIcon('arrowDown')({ className: 'text-xl text-neutral-300 animate-bounce' })}
        </div>
      </motion.div>
    </section>
  );
};

export default Hero; 