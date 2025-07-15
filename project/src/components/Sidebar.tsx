import React from 'react';
import { motion } from 'framer-motion';
import { Link } from 'react-router-dom';
import { Star, Eye, Calendar } from 'lucide-react';
import { getEditorsPicks, getMostReadArticles } from '../data/articles';

const Sidebar: React.FC = () => {
  const editorsPicks = getEditorsPicks();
  const mostRead = getMostReadArticles();

  return (
    <div className="space-y-8">
      {/* Editor's Picks */}
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        className="bg-white rounded-xl shadow-lg p-6"
      >
        <div className="flex items-center mb-6">
          <Star className="h-6 w-6 text-yellow-500 mr-2" />
          <h3 className="text-xl font-bold text-gray-900">Editor's Picks</h3>
        </div>
        
        <div className="space-y-4">
          {editorsPicks.map((article) => (
            <Link
              key={article.id}
              to={`/article/${article.id}`}
              className="block group"
            >
              <div className="flex space-x-3">
                <img
                  src={article.image}
                  alt={article.title}
                  className="w-16 h-16 rounded-lg object-cover group-hover:scale-105 transition-transform duration-200"
                />
                <div className="flex-1">
                  <h4 className="font-semibold text-gray-900 group-hover:text-blue-600 transition-colors line-clamp-2 text-sm">
                    {article.title}
                  </h4>
                  <div className="flex items-center text-xs text-gray-500 mt-1">
                    <Calendar className="h-3 w-3 mr-1" />
                    {new Date(article.publishedDate).toLocaleDateString()}
                  </div>
                </div>
              </div>
            </Link>
          ))}
        </div>
      </motion.div>

      {/* Most Read */}
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ delay: 0.2 }}
        className="bg-white rounded-xl shadow-lg p-6"
      >
        <div className="flex items-center mb-6">
          <Eye className="h-6 w-6 text-blue-500 mr-2" />
          <h3 className="text-xl font-bold text-gray-900">Most Read</h3>
        </div>
        
        <div className="space-y-4">
          {mostRead.map((article, index) => (
            <Link
              key={article.id}
              to={`/article/${article.id}`}
              className="block group"
            >
              <div className="flex items-start space-x-3">
                <div className="flex-shrink-0 w-8 h-8 bg-gradient-to-r from-blue-500 to-purple-500 rounded-full flex items-center justify-center">
                  <span className="text-white font-bold text-sm">{index + 1}</span>
                </div>
                <div className="flex-1">
                  <h4 className="font-semibold text-gray-900 group-hover:text-blue-600 transition-colors line-clamp-2 text-sm">
                    {article.title}
                  </h4>
                  <div className="flex items-center text-xs text-gray-500 mt-1">
                    <Eye className="h-3 w-3 mr-1" />
                    {article.views.toLocaleString()} views
                  </div>
                </div>
              </div>
            </Link>
          ))}
        </div>
      </motion.div>

      {/* Newsletter Signup */}
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ delay: 0.4 }}
        className="bg-gradient-to-r from-blue-600 to-purple-600 rounded-xl p-6 text-white"
      >
        <h3 className="text-xl font-bold mb-4">Stay Updated</h3>
        <p className="text-blue-100 mb-6">Get the latest tech news delivered to your inbox.</p>
        
        <div className="space-y-3">
          <input
            type="email"
            placeholder="Your email address"
            className="w-full px-4 py-3 rounded-lg text-gray-900 bg-white placeholder-gray-500 focus:outline-none focus:ring-2 focus:ring-blue-300"
          />
          <button className="w-full bg-white text-blue-600 py-3 rounded-lg font-semibold hover:bg-gray-100 transition-colors">
            Subscribe
          </button>
        </div>
      </motion.div>
    </div>
  );
};

export default Sidebar;