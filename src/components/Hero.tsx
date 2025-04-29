import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { getIcon } from '../config/icons';
import useTypewriter from '../hooks/useTypewriter';
import BackgroundCarousel from './BackgroundCarousel';
import BookTableModal from './BookTableModal';

const Hero: React.FC = () => {
  const [isModalOpen, setIsModalOpen] = useState(false);
  const welcomeText = useTypewriter("Welcome to ", 100);
  const nameText = useTypewriter("Almira May's", 100);
  const cafeText = useTypewriter("Caffeine Bloom", 100);
  const taglineText = useTypewriter("Where every cup tells a story, and every moment is a celebration of coffee", 50);

  return (
    <section id="home" className="relative min-h-screen flex items-center justify-center overflow-hidden">
      {/* Background Carousel */}
      <BackgroundCarousel />

      {/* Content */}
      <div className="container mx-auto px-4 relative z-10">
        <div className="max-w-4xl mx-auto text-center">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
          >
            <h1 className="text-5xl md:text-7xl font-display font-bold text-neutral-100 mb-6">
              <span>{welcomeText}</span>
              <span className="text-primary-500">{nameText}</span>
              <br />  
              <span>{cafeText}</span>
            </h1>
            <p className="text-xl text-neutral-300 mb-8">
              {taglineText}
            </p>
          </motion.div>

          {/* CTA Buttons */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="flex flex-col sm:flex-row justify-center gap-4"
          >
            <a
              href="#menu"
              className="group relative px-8 py-4 bg-primary-500 text-neutral-100 font-semibold rounded-full overflow-hidden hover:bg-primary-600 transition-colors duration-300"
            >
              <span className="relative z-10 flex items-center justify-center">
                {getIcon('coffee')({ className: 'text-xl mr-2' })}
                View Our Menu
              </span>
              <motion.div
                className="absolute inset-0 bg-primary-600"
                initial={{ x: '-100%' }}
                whileHover={{ x: 0 }}
                transition={{ duration: 0.3 }}
              />
            </a>
            <button
              onClick={() => setIsModalOpen(true)}
              className="group relative px-8 py-4 bg-neutral-800 text-neutral-100 font-semibold rounded-full overflow-hidden hover:bg-neutral-700 transition-colors duration-300"
            >
              <span className="relative z-10 flex items-center justify-center">
                {getIcon('calendar')({ className: 'text-xl mr-2' })}
                Book a Table
              </span>
              <motion.div
                className="absolute inset-0 bg-neutral-700"
                initial={{ x: '-100%' }}
                whileHover={{ x: 0 }}
                transition={{ duration: 0.3 }}
              />
            </button>
          </motion.div>

          {/* Floating Elements */}
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 1, delay: 0.5 }}
            className="absolute bottom-8 left-1/2 transform -translate-x-1/2"
          >
            <motion.div
              animate={{ y: [0, 10, 0] }}
              transition={{ duration: 2, repeat: Infinity }}
            >
              {getIcon('arrowDown')({ className: 'text-2xl text-neutral-300' })}
            </motion.div>
          </motion.div>
        </div>
      </div>

      {/* Decorative Elements */}
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 1, delay: 0.5 }}
        className="absolute top-1/4 right-1/4 w-32 h-32 bg-primary-500/10 rounded-full blur-3xl"
      />
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 1, delay: 0.7 }}
        className="absolute bottom-1/4 left-1/4 w-48 h-48 bg-primary-500/10 rounded-full blur-3xl"
      />

      {/* Book Table Modal */}
      <BookTableModal isOpen={isModalOpen} onClose={() => setIsModalOpen(false)} />
    </section>
  );
};

export default Hero; 