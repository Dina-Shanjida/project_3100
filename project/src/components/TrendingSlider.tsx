import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { ChevronLeft, ChevronRight, TrendingUp } from 'lucide-react';
import { Link } from 'react-router-dom';
import { getTrendingArticles } from '../data/articles';

const TrendingSlider: React.FC = () => {
  const [currentSlide, setCurrentSlide] = useState(0);
  const trendingArticles = getTrendingArticles();

  useEffect(() => {
    const timer = setInterval(() => {
      setCurrentSlide((prev) => (prev + 1) % trendingArticles.length);
    }, 5000);
    return () => clearInterval(timer);
  }, [trendingArticles.length]);

  const nextSlide = () => {
    setCurrentSlide((prev) => (prev + 1) % trendingArticles.length);
  };

  const prevSlide = () => {
    setCurrentSlide((prev) => (prev - 1 + trendingArticles.length) % trendingArticles.length);
  };

  return (
    <section className="py-16 bg-gradient-to-r from-orange-50 to-red-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-12">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            className="inline-flex items-center px-4 py-2 bg-orange-100 text-orange-800 rounded-full text-sm font-medium mb-4"
          >
            <TrendingUp className="h-4 w-4 mr-2" />
            Trending Now
          </motion.div>
          <h2 className="text-3xl font-bold text-gray-900 mb-4">
            What's Hot in Tech
          </h2>
          <p className="text-lg text-gray-600 max-w-2xl mx-auto">
            Stay updated with the most popular stories that are shaping the tech world today
          </p>
        </div>

        <div className="relative">
          <div className="overflow-hidden rounded-2xl shadow-xl">
            <AnimatePresence mode="wait">
              <motion.div
                key={currentSlide}
                initial={{ opacity: 0, x: 100 }}
                animate={{ opacity: 1, x: 0 }}
                exit={{ opacity: 0, x: -100 }}
                transition={{ duration: 0.5 }}
                className="relative h-96 md:h-[500px]"
              >
                <img
                  src={trendingArticles[currentSlide].image}
                  alt={trendingArticles[currentSlide].title}
                  className="w-full h-full object-cover"
                />
                
                {/* Overlay */}
                <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-black/30 to-transparent"></div>
                
                {/* Content */}
                <div className="absolute bottom-0 left-0 right-0 p-8 text-white">
                  <div className="max-w-4xl">
                    <span className="inline-block bg-orange-500 text-white px-3 py-1 rounded-full text-sm font-semibold mb-4">
                      {trendingArticles[currentSlide].category}
                    </span>
                    
                    <h3 className="text-2xl md:text-4xl font-bold mb-4">
                      {trendingArticles[currentSlide].title}
                    </h3>
                    
                    <p className="text-gray-200 mb-6 text-lg max-w-2xl">
                      {trendingArticles[currentSlide].summary}
                    </p>
                    
                    <div className="flex items-center justify-between">
                      <div className="flex items-center space-x-4">
                        <img
                          src={trendingArticles[currentSlide].authorAvatar}
                          alt={trendingArticles[currentSlide].author}
                          className="w-10 h-10 rounded-full"
                        />
                        <div>
                          <div className="font-semibold">{trendingArticles[currentSlide].author}</div>
                          <div className="text-gray-300 text-sm">{trendingArticles[currentSlide].readTime}</div>
                        </div>
                      </div>
                      
                      <Link
                        to={`/article/${trendingArticles[currentSlide].id}`}
                        className="bg-white text-gray-900 px-6 py-3 rounded-lg font-semibold hover:bg-gray-100 transition-colors"
                      >
                        Read More
                      </Link>
                    </div>
                  </div>
                </div>
              </motion.div>
            </AnimatePresence>
          </div>

          {/* Navigation buttons */}
          <button
            onClick={prevSlide}
            className="absolute left-4 top-1/2 -translate-y-1/2 bg-white/80 hover:bg-white text-gray-900 p-3 rounded-full shadow-lg transition-all duration-200"
          >
            <ChevronLeft className="h-6 w-6" />
          </button>
          
          <button
            onClick={nextSlide}
            className="absolute right-4 top-1/2 -translate-y-1/2 bg-white/80 hover:bg-white text-gray-900 p-3 rounded-full shadow-lg transition-all duration-200"
          >
            <ChevronRight className="h-6 w-6" />
          </button>

          {/* Dots indicator */}
          <div className="flex justify-center mt-6 space-x-2">
            {trendingArticles.map((_, index) => (
              <button
                key={index}
                onClick={() => setCurrentSlide(index)}
                className={`w-3 h-3 rounded-full transition-all duration-200 ${
                  index === currentSlide ? 'bg-orange-500' : 'bg-gray-300'
                }`}
              />
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default TrendingSlider;