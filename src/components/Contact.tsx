import React, { useState, FormEvent, ChangeEvent } from 'react';
import { motion } from 'framer-motion';
import { FaMapMarkerAlt, FaPhone, FaEnvelope, FaClock } from 'react-icons/fa';

interface FormData {
  name: string;
  email: string;
  subject: string;
  message: string;
}

interface ContactInfo {
  icon: React.ReactNode;
  title: string;
  details: string;
}

const Contact: React.FC = () => {
  const [formData, setFormData] = useState<FormData>({
    name: '',
    email: '',
    subject: '',
    message: ''
  });

  const handleSubmit = (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    // Handle form submission here
    console.log('Form submitted:', formData);
  };

  const handleChange = (e: ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target;
    setFormData(prev => ({
      ...prev,
      [name]: value
    }));
  };

  const contactInfo: ContactInfo[] = [
    {
      icon: <FaMapMarkerAlt className="w-6 h-6" />,
      title: 'Location',
      details: '123 Coffee Street, Brew City, BC 12345'
    },
    {
      icon: <FaPhone className="w-6 h-6" />,
      title: 'Phone',
      details: '+1 (555) 123-4567'
    },
    {
      icon: <FaEnvelope className="w-6 h-6" />,
      title: 'Email',
      details: 'info@coffeehaven.com'
    },
    {
      icon: <FaClock className="w-6 h-6" />,
      title: 'Hours',
      details: 'Mon-Sun: 7:00 AM - 9:00 PM'
    }
  ];

  return (
    <section id="contact" className="py-xl bg-cream">
      <div className="container">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="text-center mb-12"
        >
          <h2 className="text-3xl md:text-4xl font-bold text-coffee-dark mb-4">
            Contact Us
          </h2>
          <p className="text-lg text-coffee-medium max-w-2xl mx-auto">
            Have questions or feedback? We'd love to hear from you!
          </p>
        </motion.div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            viewport={{ once: true }}
            className="space-y-8"
          >
            {contactInfo.map((info, index) => (
              <motion.div
                key={index}
                whileHover={{ scale: 1.02 }}
                className="flex items-start gap-4 bg-white p-6 rounded-xl shadow-sm"
              >
                <div className="text-coffee-medium">{info.icon}</div>
                <div>
                  <h3 className="text-xl font-bold text-coffee-dark mb-1">
                    {info.title}
                  </h3>
                  <p className="text-coffee-medium">{info.details}</p>
                </div>
              </motion.div>
            ))}

            <motion.div
              whileHover={{ scale: 1.02 }}
              className="bg-white p-6 rounded-xl shadow-sm"
            >
              <h3 className="text-xl font-bold text-coffee-dark mb-4">
                Follow Us
              </h3>
              <div className="flex gap-4">
                {['Facebook', 'Instagram', 'Twitter'].map((social) => (
                  <button
                    key={social}
                    className="px-4 py-2 bg-coffee-light text-cream rounded-lg hover:bg-coffee-medium transition-colors duration-300"
                  >
                    {social}
                  </button>
                ))}
              </div>
            </motion.div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, x: 20 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8, delay: 0.4 }}
            viewport={{ once: true }}
            className="bg-white p-8 rounded-xl shadow-sm"
          >
            <form onSubmit={handleSubmit} className="space-y-6">
              <div>
                <label htmlFor="name" className="block text-coffee-dark font-medium mb-2">
                  Name
                </label>
                <input
                  type="text"
                  id="name"
                  name="name"
                  value={formData.name}
                  onChange={handleChange}
                  className="w-full px-4 py-2 border border-coffee-light rounded-lg focus:outline-none focus:ring-2 focus:ring-coffee-medium"
                  required
                />
              </div>

              <div>
                <label htmlFor="email" className="block text-coffee-dark font-medium mb-2">
                  Email
                </label>
                <input
                  type="email"
                  id="email"
                  name="email"
                  value={formData.email}
                  onChange={handleChange}
                  className="w-full px-4 py-2 border border-coffee-light rounded-lg focus:outline-none focus:ring-2 focus:ring-coffee-medium"
                  required
                />
              </div>

              <div>
                <label htmlFor="subject" className="block text-coffee-dark font-medium mb-2">
                  Subject
                </label>
                <input
                  type="text"
                  id="subject"
                  name="subject"
                  value={formData.subject}
                  onChange={handleChange}
                  className="w-full px-4 py-2 border border-coffee-light rounded-lg focus:outline-none focus:ring-2 focus:ring-coffee-medium"
                  required
                />
              </div>

              <div>
                <label htmlFor="message" className="block text-coffee-dark font-medium mb-2">
                  Message
                </label>
                <textarea
                  id="message"
                  name="message"
                  value={formData.message}
                  onChange={handleChange}
                  rows={4}
                  className="w-full px-4 py-2 border border-coffee-light rounded-lg focus:outline-none focus:ring-2 focus:ring-coffee-medium"
                  required
                ></textarea>
              </div>

              <button
                type="submit"
                className="btn btn-primary w-full"
              >
                Send Message
              </button>
            </form>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default Contact; 