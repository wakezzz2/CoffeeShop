import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { getIcon } from '../config/icons';

interface BlogPost {
  id: number;
  title: string;
  excerpt: string;
  content: string;
  author: string;
  date: string;
  image: string;
  category: string;
  readTime: string;
}

const blogPosts: BlogPost[] = [
  {
    id: 1,
    title: "The Art of Coffee Brewing",
    excerpt: "Discover the secrets behind perfect coffee brewing techniques and how to elevate your home coffee experience.",
    content: "Lorem ipsum dolor sit amet, consectetur adipiscing elit...",
    author: "Sarah Johnson",
    date: "April 15, 2024",
    image: "/assets/images/blog/brewing.jpg",
    category: "Coffee Tips",
    readTime: "5 min read"
  },
  {
    id: 2,
    title: "Sustainable Coffee Practices",
    excerpt: "Learn about our commitment to sustainability and how we source our coffee beans responsibly.",
    content: "Lorem ipsum dolor sit amet, consectetur adipiscing elit...",
    author: "Michael Chen",
    date: "April 10, 2024",
    image: "/assets/images/blog/sustainability.jpg",
    category: "Sustainability",
    readTime: "4 min read"
  },
  {
    id: 3,
    title: "The Perfect Coffee Pairings",
    excerpt: "Explore the best food pairings for different coffee types and enhance your coffee experience.",
    content: "Lorem ipsum dolor sit amet, consectetur adipiscing elit...",
    author: "Emma Rodriguez",
    date: "April 5, 2024",
    image: "/assets/images/blog/pairings.jpg",
    category: "Food & Drink",
    readTime: "6 min read"
  },
  {
    id: 4,
    title: "Coffee Around the World",
    excerpt: "Take a journey through different coffee cultures and traditions from around the globe.",
    content: "Lorem ipsum dolor sit amet, consectetur adipiscing elit...",
    author: "David Kim",
    date: "March 28, 2024",
    image: "/assets/images/blog/world.jpg",
    category: "Culture",
    readTime: "7 min read"
  }
];

const categories = [
  { id: 'all', name: 'All Posts', icon: 'grid' },
  { id: 'Coffee Tips', name: 'Coffee Tips', icon: 'coffee' },
  { id: 'Sustainability', name: 'Sustainability', icon: 'leaf' },
  { id: 'Food & Drink', name: 'Food & Drink', icon: 'utensils' },
  { id: 'Culture', name: 'Culture', icon: 'globe' }
];

const Blog: React.FC = () => {
  const [selectedCategory, setSelectedCategory] = useState('all');
  const [searchQuery, setSearchQuery] = useState('');

  const filteredPosts = blogPosts.filter(post => {
    const matchesCategory = selectedCategory === 'all' || post.category === selectedCategory;
    const matchesSearch = post.title.toLowerCase().includes(searchQuery.toLowerCase()) ||
                         post.excerpt.toLowerCase().includes(searchQuery.toLowerCase());
    return matchesCategory && matchesSearch;
  });

  return (
    <section id="blog" className="py-20 bg-neutral-900">
      <div className="container mx-auto px-4">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl font-display font-bold text-neutral-100 mb-4">
            Our Blog
          </h2>
          <p className="text-xl text-neutral-300">
            Discover stories, tips, and insights from our coffee experts
          </p>
        </motion.div>

        {/* Search and Filter */}
        <div className="mb-12">
          <div className="max-w-md mx-auto mb-8">
            <div className="relative">
              <input
                type="text"
                placeholder="Search blog posts..."
                value={searchQuery}
                onChange={(e) => setSearchQuery(e.target.value)}
                className="w-full px-4 py-3 pl-12 bg-neutral-800 border border-neutral-700 rounded-lg text-neutral-100 focus:outline-none focus:ring-2 focus:ring-primary-500"
              />
              <div className="absolute left-4 top-1/2 transform -translate-y-1/2">
                {getIcon('search')({ className: 'text-neutral-400 w-5 h-5' })}
              </div>
            </div>
          </div>

          <div className="flex flex-wrap justify-center gap-4">
            {categories.map(category => (
              <button
                key={category.id}
                onClick={() => setSelectedCategory(category.id)}
                className={`px-6 py-3 rounded-full flex items-center gap-2 transition-colors ${
                  selectedCategory === category.id
                    ? 'bg-primary-500 text-neutral-100'
                    : 'bg-neutral-800 text-neutral-300 hover:bg-neutral-700'
                }`}
              >
                {getIcon(category.icon)({ className: 'w-5 h-5' })}
                {category.name}
              </button>
            ))}
          </div>
        </div>

        {/* Featured Post */}
        {filteredPosts.length > 0 && (
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
            className="mb-16"
          >
            <div className="bg-neutral-800 rounded-2xl overflow-hidden group">
              <div className="relative h-96">
                <img
                  src={filteredPosts[0].image}
                  alt={filteredPosts[0].title}
                  className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-neutral-900/90 to-transparent" />
                <div className="absolute bottom-0 left-0 right-0 p-8">
                  <span className="inline-block px-4 py-1 bg-primary-500 text-neutral-100 text-sm font-semibold rounded-full mb-4">
                    {filteredPosts[0].category}
                  </span>
                  <h3 className="text-3xl font-display font-bold text-neutral-100 mb-4">
                    {filteredPosts[0].title}
                  </h3>
                  <p className="text-neutral-300 mb-6">
                    {filteredPosts[0].excerpt}
                  </p>
                  <div className="flex items-center gap-4 text-neutral-400">
                    <span>{filteredPosts[0].author}</span>
                    <span>•</span>
                    <span>{filteredPosts[0].date}</span>
                    <span>•</span>
                    <span>{filteredPosts[0].readTime}</span>
                  </div>
                </div>
              </div>
            </div>
          </motion.div>
        )}

        {/* Blog Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {filteredPosts.slice(1).map((post, index) => (
            <motion.div
              key={post.id}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              viewport={{ once: true }}
              className="bg-neutral-800 rounded-2xl overflow-hidden group"
            >
              <div className="relative h-48">
                <img
                  src={post.image}
                  alt={post.title}
                  className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                />
                <div className="absolute top-4 right-4">
                  <span className="px-3 py-1 bg-primary-500 text-neutral-100 text-sm font-semibold rounded-full">
                    {post.category}
                  </span>
                </div>
              </div>

              <div className="p-6">
                <h3 className="text-xl font-display font-bold text-neutral-100 mb-4">
                  {post.title}
                </h3>
                <p className="text-neutral-400 mb-6">
                  {post.excerpt}
                </p>
                <div className="flex items-center justify-between">
                  <div className="flex items-center gap-4 text-neutral-400 text-sm">
                    <span>{post.author}</span>
                    <span>•</span>
                    <span>{post.readTime}</span>
                  </div>
                  <button className="text-primary-500 hover:text-primary-400 transition-colors">
                    Read More
                  </button>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Blog; 