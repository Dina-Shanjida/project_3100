import React, { useState, useEffect } from 'react';
import { Link, useLocation } from 'react-router-dom';
import { motion } from 'framer-motion';
import { Menu, X, Search, Zap } from 'lucide-react';
import { categories } from '../data/articles';

const Navbar: React.FC = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);
  const location = useLocation();

  const isHome = location.pathname === '/';

  useEffect(() => {
    const handleScroll = () => {
      if (isHome) {
        setIsScrolled(window.scrollY > 50);
      }
    };

    if (isHome) {
      window.addEventListener('scroll', handleScroll);
      return () => window.removeEventListener('scroll', handleScroll);
    } else {
      setIsScrolled(true); // Force white navbar for other pages
    }
  }, [isHome]);

  const baseText = isHome && !isScrolled ? 'text-white hover:text-blue-300' : 'text-blue-800 hover:text-blue-600';
  const baseBg = isHome && !isScrolled ? 'bg-transparent' : 'bg-white shadow-md';

  return (
    <motion.nav
      initial={{ y: -100 }}
      animate={{ y: 0 }}
      className={`fixed w-full z-50 transition-all duration-300 ${baseBg}`}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-16">
          {/* Logo */}
          <Link to="/" className="flex items-center space-x-2">
            <motion.div
              whileHover={{ scale: 1.1 }}
              className="bg-gradient-to-r from-blue-600 to-purple-600 p-2 rounded-lg"
            >
              <Zap className="h-6 w-6 text-white" />
            </motion.div>
            <span className={`text-2xl font-bold ${baseText}`}>TechNova</span>
          </Link>

          {/* Desktop Navigation */}
          <div className="hidden md:flex items-center space-x-8">
            <Link to="/" className={`font-medium transition-colors ${baseText}`}>
              Home
            </Link>

            {/* Categories Dropdown */}
            <div className="relative group">
              <button className={`font-medium transition-colors ${baseText}`}>Categories</button>
              <div className="absolute top-full left-0 mt-2 w-48 bg-white rounded-lg shadow-lg opacity-0 invisible group-hover:opacity-100 group-hover:visible transition-all duration-200 z-50">
                {categories.map((category) => (
                  <Link
                    key={category}
                    to={`/category/${category.toLowerCase()}`}
                    className="block px-4 py-2 text-gray-800 hover:bg-blue-50 hover:text-blue-600 transition-colors first:rounded-t-lg last:rounded-b-lg"
                  >
                    {category}
                  </Link>
                ))}
              </div>
            </div>

            <Link to="/about" className={`font-medium transition-colors ${baseText}`}>
              About
            </Link>
            <Link to="/contact" className={`font-medium transition-colors ${baseText}`}>
              Contact
            </Link>

            {/* Search Icon */}
            <motion.button
              whileHover={{ scale: 1.1 }}
              className={`p-2 rounded-lg transition-colors ${isHome && !isScrolled ? 'text-white hover:bg-white/20' : 'text-blue-800 hover:bg-gray-100'}`}
            >
              <Search className="h-5 w-5" />
            </motion.button>
          </div>

          {/* Mobile menu button */}
          <div className="md:hidden">
            <button
              onClick={() => setIsOpen(!isOpen)}
              className={`p-2 transition-colors ${isHome && !isScrolled ? 'text-white hover:bg-white/20' : 'text-blue-800 hover:bg-gray-100'} rounded-lg`}
            >
              {isOpen ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
            </button>
          </div>
        </div>

        {/* Mobile Navigation */}
        {isOpen && (
          <motion.div
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            className="md:hidden bg-white rounded-lg shadow-lg mt-2 py-2"
          >
            <Link to="/" className="block px-4 py-2 text-gray-800 hover:bg-blue-50 hover:text-blue-600 transition-colors" onClick={() => setIsOpen(false)}>
              Home
            </Link>
            {categories.map((category) => (
              <Link
                key={category}
                to={`/category/${category.toLowerCase()}`}
                className="block px-4 py-2 text-gray-800 hover:bg-blue-50 hover:text-blue-600 transition-colors"
                onClick={() => setIsOpen(false)}
              >
                {category}
              </Link>
            ))}
            <Link to="/about" className="block px-4 py-2 text-gray-800 hover:bg-blue-50 hover:text-blue-600 transition-colors" onClick={() => setIsOpen(false)}>
              About
            </Link>
            <Link to="/contact" className="block px-4 py-2 text-gray-800 hover:bg-blue-50 hover:text-blue-600 transition-colors" onClick={() => setIsOpen(false)}>
              Contact
            </Link>
          </motion.div>
        )}
      </div>
    </motion.nav>
  );
};

export default Navbar;
