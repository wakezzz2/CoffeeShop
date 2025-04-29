import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { getIcon } from '../config/icons';

interface BookTableModalProps {
  isOpen: boolean;
  onClose: () => void;
}

const BookTableModal: React.FC<BookTableModalProps> = ({ isOpen, onClose }) => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    date: '',
    time: '',
    guests: '2',
    specialRequests: ''
  });

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    // Handle form submission here
    console.log('Booking submitted:', formData);
    onClose();
  };

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) => {
    const { name, value } = e.target;
    setFormData(prev => ({ ...prev, [name]: value }));
  };

  return (
    <AnimatePresence>
      {isOpen && (
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          className="fixed inset-0 z-50 flex items-center justify-center p-4"
        >
          {/* Backdrop */}
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="absolute inset-0 bg-neutral-900/80 backdrop-blur-sm"
            onClick={onClose}
          />

          {/* Modal */}
          <motion.div
            initial={{ scale: 0.9, opacity: 0 }}
            animate={{ scale: 1, opacity: 1 }}
            exit={{ scale: 0.9, opacity: 0 }}
            className="relative w-full max-w-2xl bg-neutral-800 rounded-2xl overflow-hidden"
          >
            {/* Header */}
            <div className="p-6 border-b border-neutral-700">
              <div className="flex items-center justify-between">
                <h2 className="text-2xl font-display font-bold text-neutral-100">
                  Book a Table
                </h2>
                <button
                  onClick={onClose}
                  className="p-2 rounded-full hover:bg-neutral-700 transition-colors"
                >
                  {getIcon('close')({ className: 'text-neutral-400 w-6 h-6' })}
                </button>
              </div>
              <p className="text-neutral-400 mt-2">
                Reserve your spot at Almira May's Caffeine Bloom
              </p>
            </div>

            {/* Form */}
            <form onSubmit={handleSubmit} className="p-6">
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <div>
                  <label className="block text-neutral-300 mb-2">Name</label>
                  <input
                    type="text"
                    name="name"
                    value={formData.name}
                    onChange={handleChange}
                    required
                    className="w-full px-4 py-3 bg-neutral-700 border border-neutral-600 rounded-lg text-neutral-100 focus:outline-none focus:ring-2 focus:ring-primary-500"
                  />
                </div>
                <div>
                  <label className="block text-neutral-300 mb-2">Email</label>
                  <input
                    type="email"
                    name="email"
                    value={formData.email}
                    onChange={handleChange}
                    required
                    className="w-full px-4 py-3 bg-neutral-700 border border-neutral-600 rounded-lg text-neutral-100 focus:outline-none focus:ring-2 focus:ring-primary-500"
                  />
                </div>
                <div>
                  <label className="block text-neutral-300 mb-2">Phone</label>
                  <input
                    type="tel"
                    name="phone"
                    value={formData.phone}
                    onChange={handleChange}
                    required
                    className="w-full px-4 py-3 bg-neutral-700 border border-neutral-600 rounded-lg text-neutral-100 focus:outline-none focus:ring-2 focus:ring-primary-500"
                  />
                </div>
                <div>
                  <label className="block text-neutral-300 mb-2">Date</label>
                  <input
                    type="date"
                    name="date"
                    value={formData.date}
                    onChange={handleChange}
                    required
                    className="w-full px-4 py-3 bg-neutral-700 border border-neutral-600 rounded-lg text-neutral-100 focus:outline-none focus:ring-2 focus:ring-primary-500"
                  />
                </div>
                <div>
                  <label className="block text-neutral-300 mb-2">Time</label>
                  <input
                    type="time"
                    name="time"
                    value={formData.time}
                    onChange={handleChange}
                    required
                    className="w-full px-4 py-3 bg-neutral-700 border border-neutral-600 rounded-lg text-neutral-100 focus:outline-none focus:ring-2 focus:ring-primary-500"
                  />
                </div>
                <div>
                  <label className="block text-neutral-300 mb-2">Number of Guests</label>
                  <select
                    name="guests"
                    value={formData.guests}
                    onChange={handleChange}
                    required
                    className="w-full px-4 py-3 bg-neutral-700 border border-neutral-600 rounded-lg text-neutral-100 focus:outline-none focus:ring-2 focus:ring-primary-500"
                  >
                    {[1, 2, 3, 4, 5, 6, 7, 8].map(num => (
                      <option key={num} value={num}>{num} {num === 1 ? 'Guest' : 'Guests'}</option>
                    ))}
                  </select>
                </div>
              </div>

              <div className="mt-6">
                <label className="block text-neutral-300 mb-2">Special Requests</label>
                <textarea
                  name="specialRequests"
                  value={formData.specialRequests}
                  onChange={handleChange}
                  rows={3}
                  className="w-full px-4 py-3 bg-neutral-700 border border-neutral-600 rounded-lg text-neutral-100 focus:outline-none focus:ring-2 focus:ring-primary-500"
                  placeholder="Any special requirements or requests?"
                />
              </div>

              <div className="mt-8 flex justify-end gap-4">
                <button
                  type="button"
                  onClick={onClose}
                  className="px-6 py-3 bg-neutral-700 text-neutral-100 rounded-lg hover:bg-neutral-600 transition-colors"
                >
                  Cancel
                </button>
                <button
                  type="submit"
                  className="px-6 py-3 bg-primary-500 text-neutral-100 rounded-lg hover:bg-primary-600 transition-colors flex items-center gap-2"
                >
                  {getIcon('calendar')({ className: 'w-5 h-5' })}
                  Book Now
                </button>
              </div>
            </form>
          </motion.div>
        </motion.div>
      )}
    </AnimatePresence>
  );
};

export default BookTableModal; 