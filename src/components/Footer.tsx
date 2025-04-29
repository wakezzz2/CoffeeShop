import React from 'react';
import { motion } from 'framer-motion';
import { FaFacebook, FaInstagram, FaTwitter, FaYoutube } from 'react-icons/fa';

interface FooterLink {
  name: string;
  href: string;
}

interface FooterSection {
  title: string;
  links: FooterLink[];
}

interface SocialLink {
  icon: React.ReactNode;
  href: string;
}

const Footer: React.FC = () => {
  const currentYear = new Date().getFullYear();

  const footerLinks: FooterSection[] = [
    {
      title: 'Quick Links',
      links: [
        { name: 'Home', href: '#hero' },
        { name: 'Menu', href: '#menu' },
        { name: 'About', href: '#about' },
        { name: 'Gallery', href: '#gallery' },
        { name: 'Contact', href: '#contact' }
      ]
    },
    {
      title: 'Services',
      links: [
        { name: 'Catering', href: '#' },
        { name: 'Events', href: '#' },
        { name: 'Coffee Classes', href: '#' },
        { name: 'Gift Cards', href: '#' }
      ]
    },
    {
      title: 'Legal',
      links: [
        { name: 'Privacy Policy', href: '#' },
        { name: 'Terms of Service', href: '#' },
        { name: 'Cookie Policy', href: '#' }
      ]
    }
  ];

  const socialLinks: SocialLink[] = [
    { icon: <FaFacebook />, href: '#' },
    { icon: <FaInstagram />, href: '#' },
    { icon: <FaTwitter />, href: '#' },
    { icon: <FaYoutube />, href: '#' }
  ];

  return (
    <footer className="bg-coffee-dark text-cream">
      <div className="container py-xl">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
            className="space-y-4"
          >
            <h3 className="text-2xl font-bold font-primary">Coffee Haven</h3>
            <p className="text-cream/80">
              Experience the perfect blend of tradition and innovation in every cup.
            </p>
            <div className="flex space-x-4">
              {socialLinks.map((social, index) => (
                <motion.a
                  key={index}
                  href={social.href}
                  className="text-cream/80 hover:text-cream transition-colors duration-300"
                  whileHover={{ scale: 1.1 }}
                  whileTap={{ scale: 0.9 }}
                >
                  {social.icon}
                </motion.a>
              ))}
            </div>
          </motion.div>

          {footerLinks.map((section, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: index * 0.1 }}
              viewport={{ once: true }}
              className="space-y-4"
            >
              <h4 className="text-lg font-bold">{section.title}</h4>
              <ul className="space-y-2">
                {section.links.map((link, linkIndex) => (
                  <li key={linkIndex}>
                    <motion.a
                      href={link.href}
                      className="text-cream/80 hover:text-cream transition-colors duration-300"
                      whileHover={{ x: 5 }}
                    >
                      {link.name}
                    </motion.a>
                  </li>
                ))}
              </ul>
            </motion.div>
          ))}
        </div>

        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          transition={{ duration: 0.8, delay: 0.4 }}
          viewport={{ once: true }}
          className="mt-12 pt-8 border-t border-cream/20 text-center"
        >
          <p className="text-cream/60">
            © {currentYear} Coffee Haven. All rights reserved.
          </p>
        </motion.div>
      </div>
    </footer>
  );
};

export default Footer; 