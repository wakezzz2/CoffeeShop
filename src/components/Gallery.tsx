import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { getIcon } from '../config/icons';
import { Swiper, SwiperSlide } from 'swiper/react';
import { Navigation, Pagination, Autoplay, Thumbs } from 'swiper/modules';
import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/pagination';
import 'swiper/css/thumbs';

interface GalleryImage {
  id: string;
  src: string;
  alt: string;
  caption: string;
  category: string;
  description: string;
  date: string;
  location: string;
}

const galleryImages: GalleryImage[] = [
  {
    id: '1',
    src: '/assets/images/gallery/barista-768x512-1-604x270.jpg',
    alt: 'Barista at Work',
    caption: 'Our skilled barista crafting coffee',
    category: 'coffee',
    description: 'Watch our expert barista carefully prepare your coffee with precision and care.',
    date: '2024-03-15',
    location: 'Main Bar'
  },
  {
    id: '2',
    src: '/assets/images/gallery/raosted coffee beans.webp',
    alt: 'Roasted Coffee Beans',
    caption: 'Freshly roasted coffee beans',
    category: 'coffee',
    description: 'Our premium selection of freshly roasted coffee beans from around the world.',
    date: '2024-03-10',
    location: 'Roasting Room'
  },
  {
    id: '3',
    src: '/assets/images/gallery/pastries.jpg',
    alt: 'Pastries Display',
    caption: 'Delicious pastries and snacks',
    category: 'food',
    description: 'Our daily selection of freshly baked pastries and delicious snacks.',
    date: '2024-03-12',
    location: 'Display Counter'
  },
  {
    id: '4',
    src: '/assets/images/gallery/Relaxing-at-home.png',
    alt: 'Cozy Interior',
    caption: 'Cozy atmosphere',
    category: 'interior',
    description: 'Our warm and inviting space designed for comfort and relaxation.',
    date: '2024-03-08',
    location: 'Main Seating Area'
  },
  {
    id: '5',
    src: '/assets/images/gallery/images.jpg',
    alt: 'Coffee Shop Interior',
    caption: 'Beautiful coffee shop interior',
    category: 'interior',
    description: 'Experience our welcoming atmosphere and comfortable seating areas.',
    date: '2024-03-14',
    location: 'Main Area'
  },
  {
    id: '6',
    src: '/assets/images/gallery/WMF_Coffee_Machines_espresso_Usability_Mood_10380.png',
    alt: 'Professional Coffee Machine',
    caption: 'State-of-the-art coffee equipment',
    category: 'coffee',
    description: 'Our professional-grade coffee machines ensure the perfect brew every time.',
    date: '2024-03-16',
    location: 'Brewing Station'
  },
  {
    id: '7',
    src: '/assets/images/gallery/1000s.jpg',
    alt: 'Coffee Shop Ambiance',
    caption: 'Welcoming coffee shop environment',
    category: 'interior',
    description: 'Enjoy your coffee in our beautifully designed space with a warm and inviting atmosphere.',
    date: '2024-03-17',
    location: 'Main Lounge'
  },
  {
    id: '8',
    src: '/assets/images/gallery/ne2.jpg',
    alt: 'Coffee Shop Interior',
    caption: 'Modern coffee shop design',
    category: 'interior',
    description: 'Our contemporary space designed for both comfort and style.',
    date: '2024-03-18',
    location: 'Main Area'
  }
];

const categories = ['all', 'coffee', 'food', 'interior'];

const Gallery: React.FC = () => {
  const [activeCategory, setActiveCategory] = useState('all');
  const [selectedImage, setSelectedImage] = useState<GalleryImage | null>(null);
  const [showInfo, setShowInfo] = useState(false);
  const [searchQuery, setSearchQuery] = useState('');

  const filteredImages = galleryImages.filter(image => {
    const matchesCategory = activeCategory === 'all' || image.category === activeCategory;
    const matchesSearch = searchQuery === '' || 
      image.caption.toLowerCase().includes(searchQuery.toLowerCase()) ||
      image.description.toLowerCase().includes(searchQuery.toLowerCase());
    return matchesCategory && matchesSearch;
  });

  const downloadImage = (src: string, alt: string) => {
    const link = document.createElement('a');
    link.href = src;
    link.download = `coffee-shop-${alt.toLowerCase().replace(/\s+/g, '-')}-${Date.now()}.jpg`;
    document.body.appendChild(link);
    link.click();
    document.body.removeChild(link);
  };

  return (
    <section id="gallery" className="py-20 bg-gradient-to-b from-neutral-900 to-neutral-800">
      <div className="container mx-auto px-4">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
          className="max-w-4xl mx-auto text-center mb-16"
        >
          <h2 className="text-4xl md:text-5xl font-display font-bold text-neutral-100 mb-6">
            Our Gallery
          </h2>
          <p className="text-lg text-neutral-300 leading-relaxed">
            Take a visual journey through our coffee shop
          </p>
        </motion.div>

        {/* Search and Filter */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8, delay: 0.2 }}
          className="flex flex-col md:flex-row justify-center gap-4 mb-12"
        >
          <div className="relative flex-1 max-w-md">
            <input
              type="text"
              placeholder="Search images..."
              value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)}
              className="w-full px-4 py-2 rounded-full bg-neutral-800 border border-neutral-700 text-neutral-100 placeholder-neutral-500 focus:outline-none focus:ring-2 focus:ring-primary-500 focus:border-transparent"
            />
            {getIcon('search')({
              className: 'absolute right-3 top-1/2 transform -translate-y-1/2 text-neutral-500'
            })}
          </div>
          <div className="flex flex-wrap justify-center gap-2">
            {categories.map(category => (
              <button
                key={category}
                onClick={() => setActiveCategory(category)}
                className={`px-4 py-2 rounded-full font-medium transition-colors duration-300 ${
                  activeCategory === category
                    ? 'bg-primary-500 text-neutral-100'
                    : 'bg-neutral-800 text-neutral-300 hover:bg-neutral-700 hover:text-neutral-100'
                }`}
              >
                {category.charAt(0).toUpperCase() + category.slice(1)}
              </button>
            ))}
          </div>
        </motion.div>

        {/* Image Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {filteredImages.map((image, index) => (
            <motion.div
              key={image.id}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8, delay: index * 0.1 }}
              className="group relative bg-neutral-800 rounded-xl overflow-hidden shadow-lg hover:shadow-xl transition-shadow duration-300"
            >
              <div className="relative aspect-square overflow-hidden">
                <img
                  src={image.src}
                  alt={image.alt}
                  className="w-full h-full object-cover transition-transform duration-300 group-hover:scale-110"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-neutral-900/90 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
                <div className="absolute inset-0 flex items-end p-6 opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                  <div className="text-neutral-100">
                    <h3 className="text-xl font-semibold mb-2">{image.caption}</h3>
                    <p className="text-sm text-neutral-300 mb-4">{image.description}</p>
                    <div className="flex items-center gap-4">
                      <button
                        onClick={() => setSelectedImage(image)}
                        className="flex items-center gap-2 text-sm font-medium hover:text-primary-500 transition-colors duration-300"
                      >
                        {getIcon('expand')({ className: 'text-lg' })}
                        View Details
                      </button>
                      <button
                        onClick={() => downloadImage(image.src, image.alt)}
                        className="flex items-center gap-2 text-sm font-medium hover:text-primary-500 transition-colors duration-300"
                      >
                        {getIcon('download')({ className: 'text-lg' })}
                        Download
                      </button>
                    </div>
                  </div>
                </div>
              </div>
            </motion.div>
          ))}
        </div>

        {/* Image Modal */}
        <AnimatePresence>
          {selectedImage && (
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-neutral-900/90 backdrop-blur-sm"
              onClick={() => setSelectedImage(null)}
            >
              <motion.div
                initial={{ scale: 0.9, opacity: 0 }}
                animate={{ scale: 1, opacity: 1 }}
                exit={{ scale: 0.9, opacity: 0 }}
                className="relative max-w-4xl w-full bg-neutral-800 rounded-xl overflow-hidden"
                onClick={e => e.stopPropagation()}
              >
                <Swiper
                  modules={[Navigation, Pagination, Thumbs]}
                  navigation
                  pagination={{ clickable: true }}
                  className="w-full aspect-video"
                >
                  {filteredImages.map(image => (
                    <SwiperSlide key={image.id}>
                      <img
                        src={image.src}
                        alt={image.alt}
                        className="w-full h-full object-cover"
                      />
                    </SwiperSlide>
                  ))}
                </Swiper>

                <div className="p-6">
                  <div className="flex justify-between items-start mb-4">
                    <div>
                      <h3 className="text-2xl font-semibold text-neutral-100 mb-2">
                        {selectedImage.caption}
                      </h3>
                      <div className="flex items-center gap-4 text-sm text-neutral-300">
                        <span className="flex items-center gap-1">
                          {getIcon('calendar')({ className: 'text-lg' })}
                          {selectedImage.date}
                        </span>
                        <span className="flex items-center gap-1">
                          {getIcon('location')({ className: 'text-lg' })}
                          {selectedImage.location}
                        </span>
                      </div>
                    </div>
                    <button
                      onClick={() => setShowInfo(!showInfo)}
                      className="p-2 rounded-full hover:bg-neutral-700 transition-colors duration-300"
                    >
                      {getIcon(showInfo ? 'info' : 'infoOutline')({
                        className: 'text-xl text-primary-500'
                      })}
                    </button>
                  </div>

                  <AnimatePresence>
                    {showInfo && (
                      <motion.div
                        initial={{ opacity: 0, height: 0 }}
                        animate={{ opacity: 1, height: 'auto' }}
                        exit={{ opacity: 0, height: 0 }}
                        className="overflow-hidden"
                      >
                        <p className="text-neutral-300 mb-4">
                          {selectedImage.description}
                        </p>
                        <div className="flex items-center gap-4">
                          <button
                            onClick={() => downloadImage(selectedImage.src, selectedImage.alt)}
                            className="flex items-center gap-2 px-4 py-2 bg-primary-500 text-neutral-100 rounded-full hover:bg-primary-600 transition-colors duration-300"
                          >
                            {getIcon('download')({ className: 'text-lg' })}
                            Download Image
                          </button>
                        </div>
                      </motion.div>
                    )}
                  </AnimatePresence>
                </div>

                <button
                  onClick={() => setSelectedImage(null)}
                  className="absolute top-4 right-4 p-2 bg-neutral-900/80 rounded-full shadow-lg hover:bg-neutral-900 transition-colors duration-300"
                >
                  {getIcon('close')({ className: 'text-xl text-neutral-300' })}
                </button>
              </motion.div>
            </motion.div>
          )}
        </AnimatePresence>
      </div>
    </section>
  );
};

export default Gallery; 