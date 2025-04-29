import React from 'react';
import { motion } from 'framer-motion';
import { getIcon } from '../config/icons';

interface Reward {
  id: string;
  title: string;
  points: number;
  description: string;
  icon: string;
}

const rewards: Reward[] = [
  {
    id: '1',
    title: 'Free Coffee',
    points: 100,
    description: 'Get a free coffee of your choice',
    icon: 'coffee'
  },
  {
    id: '2',
    title: 'Pastry Combo',
    points: 200,
    description: 'Enjoy a coffee and pastry combo',
    icon: 'cake'
  },
  {
    id: '3',
    title: 'Workshop Pass',
    points: 500,
    description: 'Free entry to any coffee workshop',
    icon: 'workshop'
  },
  {
    id: '4',
    title: 'VIP Experience',
    points: 1000,
    description: 'Exclusive coffee tasting session',
    icon: 'star'
  }
];

const Loyalty: React.FC = () => {
  return (
    <section id="loyalty" className="py-20 bg-gradient-to-b from-neutral-900 to-neutral-800">
      <div className="container mx-auto px-4">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
          className="max-w-4xl mx-auto text-center mb-16"
        >
          <h2 className="text-4xl md:text-5xl font-display font-bold text-neutral-100 mb-6">
            Loyalty Program
          </h2>
          <p className="text-lg text-neutral-300 leading-relaxed">
            Join our rewards program and earn points with every purchase
          </p>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 mb-16">
          {rewards.map((reward, index) => (
            <motion.div
              key={reward.id}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8, delay: index * 0.1 }}
              className="group relative bg-neutral-800 p-6 rounded-xl shadow-lg hover:shadow-xl transition-shadow duration-300"
            >
              <div className="w-16 h-16 bg-primary-500/10 rounded-xl flex items-center justify-center mb-4">
                {getIcon(reward.icon)({ className: 'text-3xl text-primary-500' })}
              </div>
              <h3 className="text-xl font-semibold text-neutral-100 mb-2">
                {reward.title}
              </h3>
              <div className="flex items-center gap-2 mb-4">
                <span className="text-primary-500 font-bold">{reward.points}</span>
                <span className="text-neutral-400">points</span>
              </div>
              <p className="text-neutral-300">
                {reward.description}
              </p>
            </motion.div>
          ))}
        </div>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8, delay: 0.4 }}
          className="max-w-2xl mx-auto bg-neutral-800 rounded-xl p-8 shadow-lg"
        >
          <div className="flex flex-col md:flex-row items-center justify-between gap-6">
            <div>
              <h3 className="text-2xl font-semibold text-neutral-100 mb-2">
                Join Our Loyalty Program
              </h3>
              <p className="text-neutral-300">
                Sign up today and start earning rewards with every purchase
              </p>
            </div>
            <button className="px-8 py-4 bg-primary-500 text-neutral-100 font-semibold rounded-full hover:bg-primary-600 transition-colors duration-300">
              Sign Up Now
            </button>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default Loyalty; 