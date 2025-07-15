import React from 'react';
import { motion } from 'framer-motion';
import Hero from '../components/Hero';
import TrendingSlider from '../components/TrendingSlider';
import ArticleCard from '../components/ArticleCard';
import Sidebar from '../components/Sidebar';
import { articles, categories } from '../data/articles';
import { Link } from 'react-router-dom';

const Home: React.FC = () => {
  const featuredArticle = articles[0];
  const recentArticles = articles.slice(1, 7);

  return (
    <div className="min-h-screen bg-gray-50">
      <Hero />
      
      <TrendingSlider />

      {/* Categories Section */}
      <section className="py-16 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold text-gray-900 mb-4">
              Explore Categories
            </h2>
            <p className="text-lg text-gray-600">
              Discover stories that matter to you
            </p>
          </div>

          <div className="grid grid-cols-2 md:grid-cols-4 lg:grid-cols-8 gap-4">
            {categories.map((category) => (
              <motion.div
                key={category}
                whileHover={{ scale: 1.05 }}
                className="group"
              >
                <Link
                  to={`/category/${category.toLowerCase()}`}
                  className={`block p-6 rounded-xl text-center transition-all duration-200 ${
                    category === 'AI' ? 'bg-blue-50 text-blue-700 hover:bg-blue-100' :
                    category === 'Gadgets' ? 'bg-green-50 text-green-700 hover:bg-green-100' :
                    category === 'Programming' ? 'bg-purple-50 text-purple-700 hover:bg-purple-100' :
                    category === 'Cybersecurity' ? 'bg-red-50 text-red-700 hover:bg-red-100' :
                    'bg-gray-50 text-gray-700 hover:bg-gray-100'
                  }`}
                >
                  <div className="font-semibold text-sm">{category}</div>
                </Link>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Latest Articles */}
      <section className="py-16 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold text-gray-900 mb-4">
              Latest Articles
            </h2>
            <p className="text-lg text-gray-600">
              Stay informed with our most recent tech coverage
            </p>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-4 gap-8">
            {/* Main Content */}
            <div className="lg:col-span-3">
              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                {/* Featured Article */}
                <div className="md:col-span-2 lg:col-span-2">
                  <ArticleCard article={featuredArticle} featured />
                </div>

                {/* Recent Articles */}
                {recentArticles.map((article) => (
                  <ArticleCard key={article.id} article={article} />
                ))}
              </div>

              {/* Load More Button */}
              <motion.div
                whileHover={{ scale: 1.05 }}
                className="text-center mt-12"
              >
                <button className="bg-gradient-to-r from-blue-600 to-purple-600 text-white px-8 py-3 rounded-lg font-semibold hover:shadow-lg transition-all duration-200">
                  Load More Articles
                </button>
              </motion.div>
            </div>

            {/* Sidebar */}
            <div className="lg:col-span-1">
              <Sidebar />
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Home;