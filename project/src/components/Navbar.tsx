import React, { useState, useEffect, useRef } from 'react';
import { Link, useLocation, useNavigate } from 'react-router-dom';
import { motion } from 'framer-motion';
import { Menu, X, Search, Zap, Sun, Moon } from 'lucide-react';
import { categories, getAllArticles } from '../data/articles';

interface NavbarProps {
  darkMode: boolean;
  toggleDarkMode: () => void;
}

const Navbar: React.FC<NavbarProps> = ({ darkMode, toggleDarkMode }) => {
  const [isOpen, setIsOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);
  const [searchOpen, setSearchOpen] = useState(false);
  const [query, setQuery] = useState('');
  const [suggestions, setSuggestions] = useState<any[]>([]);
  const searchRef = useRef<HTMLDivElement>(null);
  const location = useLocation();
  const navigate = useNavigate();

  const isHome = location.pathname === '/';
  const allArticles = getAllArticles();
  const keywordSuggestions = ['5G', 'AI', 'Blockchain', 'Cybersecurity', 'Cloud', 'Web3'];

  useEffect(() => {
    const handleScroll = () => {
      if (isHome) setIsScrolled(window.scrollY > 50);
    };
    if (isHome) {
      window.addEventListener('scroll', handleScroll);
      return () => window.removeEventListener('scroll', handleScroll);
    } else {
      setIsScrolled(true);
    }
  }, [isHome]);

  // Close search dropdown on outside click
  useEffect(() => {
    const handleClickOutside = (e: MouseEvent) => {
      if (searchRef.current && !searchRef.current.contains(e.target as Node)) {
        setSearchOpen(false);
        setSuggestions([]);
      }
    };
    document.addEventListener('mousedown', handleClickOutside);
    return () => document.removeEventListener('mousedown', handleClickOutside);
  }, []);

  // Handle search suggestions
  useEffect(() => {
    if (query.trim() === '') return setSuggestions([]);
    const matchedArticles = allArticles.filter(article =>
      article.title.toLowerCase().includes(query.toLowerCase())
    );
    const matchedKeywords = keywordSuggestions.filter(kw =>
      kw.toLowerCase().startsWith(query.toLowerCase())
    );
    setSuggestions([...matchedKeywords.map(k => ({ keyword: k })), ...matchedArticles]);
  }, [query]);

  const handleNavigate = (articleId: string) => {
    setSearchOpen(false);
    setQuery('');
    setSuggestions([]);
    navigate(`/article/${articleId}`);
  };

  const handleKeywordClick = (keyword: string) => setQuery(keyword);

  const baseText =
    isHome && !isScrolled
      ? 'text-white hover:text-blue-300'
      : 'text-blue-800 dark:text-gray-200 hover:text-blue-600 dark:hover:text-blue-400';
  const baseBg =
    isHome && !isScrolled
      ? 'bg-transparent'
      : 'bg-white dark:bg-gray-800 shadow-md';

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
          <div className="hidden md:flex items-center space-x-6">
            <Link to="/" className={`font-medium transition-colors ${baseText}`}>Home</Link>

            {/* Categories */}
            <div className="relative group">
              <button className={`font-medium transition-colors ${baseText}`}>Categories</button>
              <div className="absolute top-full left-0 mt-2 w-48 bg-white dark:bg-gray-800 rounded-lg shadow-lg opacity-0 invisible group-hover:opacity-100 group-hover:visible transition-all duration-200 z-50">
                {categories.map(category => (
                  <Link
                    key={category}
                    to={`/category/${category.toLowerCase()}`}
                    className="block px-4 py-2 text-gray-800 dark:text-gray-200 hover:bg-blue-50 dark:hover:bg-gray-700 hover:text-blue-600 dark:hover:text-blue-400 transition-colors first:rounded-t-lg last:rounded-b-lg"
                  >
                    {category}
                  </Link>
                ))}
              </div>
            </div>

            <Link to="/about" className={`font-medium transition-colors ${baseText}`}>About</Link>
            <Link to="/contact" className={`font-medium transition-colors ${baseText}`}>Contact</Link>
            <Link to="/saved" className={`font-medium transition-colors ${baseText}`}>Saved</Link>
            {/* QNA Link */}
            <Link to="/qna" className={`font-medium transition-colors ${baseText}`}>QNA</Link>

            {/* Search */}
            <div className="relative" ref={searchRef}>
              <motion.button
                whileHover={{ scale: 1.1 }}
                onClick={() => setSearchOpen(!searchOpen)}
                className={`p-2 rounded-lg transition-colors ${isHome && !isScrolled ? 'text-white hover:bg-white/20' : 'text-blue-800 dark:text-gray-200 hover:bg-gray-100 dark:hover:bg-gray-700'}`}
              >
                <Search className="h-5 w-5" />
              </motion.button>

              {searchOpen && (
                <div className="absolute right-0 mt-2 w-80 bg-white dark:bg-gray-800 shadow-lg rounded-lg p-4 z-50 transition-colors">
                  <input
                    type="text"
                    value={query}
                    onChange={e => setQuery(e.target.value)}
                    placeholder="Search articles..."
                    className="w-full border border-gray-300 dark:border-gray-600 rounded-lg p-2 mb-2 focus:outline-none focus:border-blue-500 dark:focus:border-blue-400 bg-white dark:bg-gray-700 text-gray-900 dark:text-gray-200"
                  />
                  {suggestions.length > 0 && (
                    <ul className="max-h-64 overflow-y-auto">
                      {suggestions.map((item, idx) =>
                        item.keyword ? (
                          <li
                            key={`kw-${idx}`}
                            onClick={() => handleKeywordClick(item.keyword)}
                            className="p-2 hover:bg-gray-100 dark:hover:bg-gray-700 cursor-pointer text-blue-600 dark:text-blue-400 font-medium"
                          >
                            {item.keyword}
                          </li>
                        ) : (
                          <li
                            key={item.id}
                            onClick={() => handleNavigate(item.id)}
                            className="flex items-center gap-3 p-2 hover:bg-gray-100 dark:hover:bg-gray-700 cursor-pointer"
                          >
                            <img
                              src={item.image}
                              alt={item.title}
                              className="w-12 h-12 object-cover rounded"
                            />
                            <span className="text-gray-800 dark:text-gray-200">{item.title}</span>
                          </li>
                        )
                      )}
                    </ul>
                  )}
                </div>
              )}
            </div>

            {/* Dark Mode Toggle */}
            <button
              onClick={toggleDarkMode}
              className="p-2 rounded-lg transition-colors text-gray-800 dark:text-gray-200 hover:bg-gray-100 dark:hover:bg-gray-700"
            >
              {darkMode ? <Sun className="h-5 w-5" /> : <Moon className="h-5 w-5" />}
            </button>
          </div>

          {/* Mobile Menu Button */}
          <div className="md:hidden flex items-center space-x-2">
            <button
              onClick={toggleDarkMode}
              className="p-2 rounded-lg transition-colors text-gray-800 dark:text-gray-200 hover:bg-gray-100 dark:hover:bg-gray-700"
            >
              {darkMode ? <Sun className="h-5 w-5" /> : <Moon className="h-5 w-5" />}
            </button>
            <button
              onClick={() => setIsOpen(!isOpen)}
              className={`p-2 transition-colors ${isHome && !isScrolled ? 'text-white hover:bg-white/20' : 'text-blue-800 dark:text-gray-200 hover:bg-gray-100 dark:hover:bg-gray-700'} rounded-lg`}
            >
              {isOpen ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
            </button>
          </div>
        </div>

        {/* Mobile Menu */}
        {isOpen && (
          <motion.div
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            className="md:hidden bg-white dark:bg-gray-800 rounded-lg shadow-lg mt-2 py-2 transition-colors"
          >
            <Link
              to="/"
              className="block px-4 py-2 text-gray-800 dark:text-gray-200 hover:bg-blue-50 dark:hover:bg-gray-700 hover:text-blue-600 dark:hover:text-blue-400 transition-colors"
              onClick={() => setIsOpen(false)}
            >
              Home
            </Link>
            {categories.map(category => (
              <Link
                key={category}
                to={`/category/${category.toLowerCase()}`}
                className="block px-4 py-2 text-gray-800 dark:text-gray-200 hover:bg-blue-50 dark:hover:bg-gray-700 hover:text-blue-600 dark:hover:text-blue-400 transition-colors"
                onClick={() => setIsOpen(false)}
              >
                {category}
              </Link>
            ))}
            <Link
              to="/about"
              className="block px-4 py-2 text-gray-800 dark:text-gray-200 hover:bg-blue-50 dark:hover:bg-gray-700 hover:text-blue-600 dark:hover:text-blue-400 transition-colors"
              onClick={() => setIsOpen(false)}
            >
              About
            </Link>
            <Link
              to="/contact"
              className="block px-4 py-2 text-gray-800 dark:text-gray-200 hover:bg-blue-50 dark:hover:bg-gray-700 hover:text-blue-600 dark:hover:text-blue-400 transition-colors"
              onClick={() => setIsOpen(false)}
            >
              Contact
            </Link>
            <Link
              to="/saved"
              className="block px-4 py-2 text-gray-800 dark:text-gray-200 hover:bg-blue-50 dark:hover:bg-gray-700 hover:text-blue-600 dark:hover:text-blue-400 transition-colors"
              onClick={() => setIsOpen(false)}
            >
              Saved
            </Link>
            {/* QNA Link */}
            <Link
              to="/qna"
              className="block px-4 py-2 text-gray-800 dark:text-gray-200 hover:bg-blue-50 dark:hover:bg-gray-700 hover:text-blue-600 dark:hover:text-blue-400 transition-colors"
              onClick={() => setIsOpen(false)}
            >
              QNA
            </Link>
          </motion.div>
        )}
      </div>
    </motion.nav>
  );
};

export default Navbar;
