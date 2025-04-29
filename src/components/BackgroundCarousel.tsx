import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';

const images = [
  '/assets/images/coffee/2.jpg',
  '/assets/images/coffee/3.jpg',
  '/assets/images/coffee/4.jpg',
  '/assets/images/coffee/coffee-beans-top-view-white-background-space-text_176474-5028.avif',
];

const BackgroundCarousel: React.FC = () => {
  const [currentIndex, setCurrentIndex] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentIndex((prevIndex) => (prevIndex + 1) % images.length);
    }, 5000); // Change image every 5 seconds

    return () => clearInterval(interval);
  }, []);

  return (
    <div className="absolute inset-0 overflow-hidden">
      <AnimatePresence mode="wait">
        <motion.div
          key={currentIndex}
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          transition={{ duration: 1 }}
          className="absolute inset-0"
          style={{
            backgroundImage: `url(${images[currentIndex]})`,
            backgroundSize: 'cover',
            backgroundPosition: 'center',
          }}
        >
          <div className="absolute inset-0 bg-gradient-to-b from-neutral-900/80 to-neutral-800/80" />
          <div className="absolute inset-0 bg-[url('/pattern.svg')] opacity-10" />
        </motion.div>
      </AnimatePresence>
    </div>
  );
};

export default BackgroundCarousel; 