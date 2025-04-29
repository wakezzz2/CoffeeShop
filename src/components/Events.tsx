import React from 'react';
import { motion } from 'framer-motion';
import { getIcon } from '../config/icons';

interface Event {
  id: string;
  title: string;
  date: string;
  time: string;
  description: string;
  image: string;
  type: 'workshop' | 'music' | 'tasting';
}

const events: Event[] = [
  {
    id: '1',
    title: 'Latte Art Workshop',
    date: '2024-04-15',
    time: '2:00 PM',
    description: 'Learn the art of creating beautiful latte designs with our expert baristas.',
    image: '/assets/images/events/latte-art.jpg',
    type: 'workshop'
  },
  {
    id: '2',
    title: 'Live Jazz Night',
    date: '2024-04-20',
    time: '7:00 PM',
    description: 'Enjoy an evening of smooth jazz while sipping your favorite brew.',
    image: '/assets/images/events/jazz-night.jpg',
    type: 'music'
  },
  {
    id: '3',
    title: 'Coffee Tasting Experience',
    date: '2024-04-25',
    time: '3:00 PM',
    description: 'Join us for a guided tasting of our premium coffee selections.',
    image: '/assets/images/events/coffee-tasting.jpg',
    type: 'tasting'
  }
];

const Events: React.FC = () => {
  return (
    <section id="events" className="py-20 bg-gradient-to-b from-neutral-800 to-neutral-900">
      <div className="container mx-auto px-4">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
          className="max-w-4xl mx-auto text-center mb-16"
        >
          <h2 className="text-4xl md:text-5xl font-display font-bold text-neutral-100 mb-6">
            Upcoming Events
          </h2>
          <p className="text-lg text-neutral-300 leading-relaxed">
            Join us for special events, workshops, and live performances
          </p>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {events.map((event, index) => (
            <motion.div
              key={event.id}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8, delay: index * 0.1 }}
              className="group relative bg-neutral-800 rounded-xl overflow-hidden shadow-lg hover:shadow-xl transition-shadow duration-300"
            >
              <div className="relative h-48">
                <img
                  src={event.image}
                  alt={event.title}
                  className="w-full h-full object-cover transition-transform duration-300 group-hover:scale-110"
                />
                <div className="absolute top-4 right-4">
                  <span className={`px-3 py-1 rounded-full text-sm font-medium ${
                    event.type === 'workshop' ? 'bg-primary-500/90' :
                    event.type === 'music' ? 'bg-secondary-500/90' :
                    'bg-tertiary-500/90'
                  } text-neutral-100`}>
                    {event.type.charAt(0).toUpperCase() + event.type.slice(1)}
                  </span>
                </div>
              </div>
              <div className="p-6">
                <div className="flex items-center gap-4 mb-4">
                  <div className="flex items-center gap-2 text-primary-500">
                    {getIcon('calendar')({ className: 'text-xl' })}
                    <span className="text-sm font-medium">{event.date}</span>
                  </div>
                  <div className="flex items-center gap-2 text-primary-500">
                    {getIcon('clock')({ className: 'text-xl' })}
                    <span className="text-sm font-medium">{event.time}</span>
                  </div>
                </div>
                <h3 className="text-xl font-semibold text-neutral-100 mb-2">
                  {event.title}
                </h3>
                <p className="text-neutral-300 mb-4">
                  {event.description}
                </p>
                <button className="w-full px-4 py-2 bg-primary-500 text-neutral-100 rounded-lg hover:bg-primary-600 transition-colors duration-300">
                  Book Now
                </button>
              </div>
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
            className="inline-flex items-center px-8 py-4 bg-neutral-800 text-neutral-100 font-semibold rounded-full hover:bg-neutral-700 transition-colors duration-300"
          >
            {getIcon('calendar')({ className: 'text-xl mr-2' })}
            View All Events
          </a>
        </motion.div>
      </div>
    </section>
  );
};

export default Events; 