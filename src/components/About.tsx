import React from 'react';
import { motion } from 'framer-motion';
import { getIcon } from '../config/icons';

interface Feature {
  title: string;
  description: string;
  icon: string;
}

const features: Feature[] = [
  {
    title: 'Artisan Roasting',
    description: 'We carefully select and roast our beans to bring out their unique flavors and aromas.',
    icon: 'coffee'
  },
  {
    title: 'Fresh Ingredients',
    description: 'All our ingredients are sourced locally and prepared fresh daily for the best quality.',
    icon: 'leaf'
  },
  {
    title: 'Expert Baristas',
    description: 'Our skilled baristas are trained to craft the perfect cup of coffee every time.',
    icon: 'user'
  },
  {
    title: 'Cozy Atmosphere',
    description: 'Enjoy our warm and inviting space designed for comfort and relaxation.',
    icon: 'home'
  }
];

const About: React.FC = () => {
  return (
    <section id="about" className="py-20 bg-gradient-to-b from-neutral-900 to-neutral-800">
      <div className="container mx-auto px-4">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
          className="max-w-4xl mx-auto text-center mb-16"
        >
          <h2 className="text-4xl md:text-5xl font-display font-bold text-neutral-100 mb-6">
            Our Story
          </h2>
          <p className="text-lg text-neutral-300 leading-relaxed">
            Founded in 2010, our coffee shop has been serving the community with passion and dedication.
            We believe in creating memorable experiences through exceptional coffee and warm hospitality.
          </p>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {features.map((feature, index) => (
            <motion.div
              key={feature.title}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8, delay: index * 0.1 }}
              className="bg-neutral-800 p-6 rounded-xl shadow-lg hover:shadow-xl transition-shadow duration-300"
            >
              <div className="w-12 h-12 bg-primary-900/50 rounded-lg flex items-center justify-center mb-4">
                {getIcon(feature.icon)({ className: 'text-2xl text-primary-500' })}
              </div>
              <h3 className="text-xl font-semibold text-neutral-100 mb-2">
                {feature.title}
              </h3>
              <p className="text-neutral-300">
                {feature.description}
              </p>
            </motion.div>
          ))}
        </div>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8, delay: 0.4 }}
          className="mt-16 text-center"
        >
          <a
            href="#contact"
            className="inline-flex items-center px-8 py-4 bg-primary-500 text-neutral-100 font-semibold rounded-full hover:bg-primary-600 transition-colors duration-300"
          >
            {getIcon('envelope')({ className: 'text-xl mr-2' })}
            Get in Touch
          </a>
        </motion.div>
      </div>
    </section>
  );
};

export default About; 