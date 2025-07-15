import React from 'react';
import { motion } from 'framer-motion';
import { Link } from 'react-router-dom';
import { Clock, Eye, User } from 'lucide-react';
import { Article } from '../data/articles';

interface ArticleCardProps {
  article: Article;
  featured?: boolean;
}

const ArticleCard: React.FC<ArticleCardProps> = ({ article, featured = false }) => {
  return (
    <motion.div
      whileHover={{ y: -5 }}
      className={`bg-white rounded-xl shadow-lg overflow-hidden transition-all duration-300 hover:shadow-xl ${
        featured ? 'md:col-span-2 md:row-span-2' : ''
      }`}
    >
      <Link to={`/article/${article.id}`}>
        <div className="relative overflow-hidden">
          <motion.img
            src={article.image}
            alt={article.title}
            className={`w-full object-cover transition-transform duration-300 hover:scale-105 ${
              featured ? 'h-64 md:h-80' : 'h-48'
            }`}
            whileHover={{ scale: 1.05 }}
          />
          
          {/* Category badge */}
          <div className="absolute top-4 left-4">
            <span className={`px-3 py-1 text-xs font-semibold rounded-full ${
              article.category === 'AI' ? 'bg-blue-100 text-blue-800' :
              article.category === 'Gadgets' ? 'bg-green-100 text-green-800' :
              article.category === 'Programming' ? 'bg-purple-100 text-purple-800' :
              article.category === 'Cybersecurity' ? 'bg-red-100 text-red-800' :
              'bg-gray-100 text-gray-800'
            }`}>
              {article.category}
            </span>
          </div>

          {/* Trending badge */}
          {article.isTrending && (
            <div className="absolute top-4 right-4">
              <span className="bg-orange-500 text-white px-2 py-1 text-xs font-semibold rounded-full">
                Trending
              </span>
            </div>
          )}
        </div>

        <div className={`p-6 ${featured ? 'md:p-8' : ''}`}>
          <h3 className={`font-bold text-gray-900 mb-3 line-clamp-2 hover:text-blue-600 transition-colors ${
            featured ? 'text-xl md:text-2xl' : 'text-lg'
          }`}>
            {article.title}
          </h3>
          
          <p className={`text-gray-600 mb-4 line-clamp-3 ${
            featured ? 'text-base md:text-lg' : 'text-sm'
          }`}>
            {article.summary}
          </p>

          <div className="flex items-center justify-between text-sm text-gray-500">
            <div className="flex items-center space-x-4">
              <div className="flex items-center">
                <img
                  src={article.authorAvatar}
                  alt={article.author}
                  className="w-6 h-6 rounded-full mr-2"
                />
                <span>{article.author}</span>
              </div>
              
              <div className="flex items-center">
                <Clock className="h-4 w-4 mr-1" />
                <span>{article.readTime}</span>
              </div>
            </div>

            <div className="flex items-center">
              <Eye className="h-4 w-4 mr-1" />
              <span>{article.views.toLocaleString()}</span>
            </div>
          </div>

          <div className="mt-4 text-sm text-gray-500">
            {new Date(article.publishedDate).toLocaleDateString('en-US', {
              year: 'numeric',
              month: 'long',
              day: 'numeric'
            })}
          </div>
        </div>
      </Link>
    </motion.div>
  );
};

export default ArticleCard;