import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { Link } from 'react-router-dom';
import { Clock, Eye, Share2, Bookmark } from 'lucide-react';
import { Article, getArticleShareLink } from '../data/articles';

interface ArticleCardProps {
  article: Article;
  featured?: boolean;
}

const ArticleCard: React.FC<ArticleCardProps> = ({ article, featured = false }) => {
  const [copied, setCopied] = useState(false);
  const [saved, setSaved] = useState(false);

  const handleShare = async (e: React.MouseEvent) => {
    e.preventDefault(); 
    const link = getArticleShareLink(article.id);

    if (navigator.share) {
      try {
        await navigator.share({ title: article.title, text: article.summary, url: link });
      } catch (err) {
        console.error('Sharing failed:', err);
      }
    } else {
      try {
        await navigator.clipboard.writeText(link);
        setCopied(true);
        setTimeout(() => setCopied(false), 2000);
      } catch (err) {
        console.error('Failed to copy:', err);
      }
    }
  };

  const handleSave = (e: React.MouseEvent) => {
    e.preventDefault();
    const savedPosts = JSON.parse(localStorage.getItem('savedPosts') || '[]');
    if (!savedPosts.includes(article.id)) {
      savedPosts.push(article.id);
      localStorage.setItem('savedPosts', JSON.stringify(savedPosts));
      setSaved(true);
      setTimeout(() => setSaved(false), 2000);
    }
  };

  return (
    <motion.div
      whileHover={{ y: -5 }}
      className={`bg-white dark:bg-gray-800 rounded-xl shadow-lg overflow-hidden transition-all duration-300 hover:shadow-xl ${
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
            <span
              className={`px-3 py-1 text-xs font-semibold rounded-full ${
                article.category === 'AI'
                  ? 'bg-blue-100 text-blue-800 dark:bg-blue-700 dark:text-blue-200'
                  : article.category === 'Gadgets'
                  ? 'bg-green-100 text-green-800 dark:bg-green-700 dark:text-green-200'
                  : article.category === 'Programming'
                  ? 'bg-purple-100 text-purple-800 dark:bg-purple-700 dark:text-purple-200'
                  : article.category === 'Cybersecurity'
                  ? 'bg-red-100 text-red-800 dark:bg-red-700 dark:text-red-200'
                  : 'bg-gray-100 text-gray-800 dark:bg-gray-700 dark:text-gray-200'
              }`}
            >
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
          <h3
            className={`font-bold text-gray-900 dark:text-gray-100 mb-3 line-clamp-2 hover:text-blue-600 dark:hover:text-blue-400 transition-colors ${
              featured ? 'text-xl md:text-2xl' : 'text-lg'
            }`}
          >
            {article.title}
          </h3>

          <p
            className={`text-gray-600 dark:text-gray-300 mb-4 line-clamp-3 ${
              featured ? 'text-base md:text-lg' : 'text-sm'
            }`}
          >
            {article.summary}
          </p>

          <div className="flex items-center justify-between text-sm text-gray-500 dark:text-gray-400">
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

          <div className="mt-4 flex justify-between items-center text-sm text-gray-500 dark:text-gray-400 relative">
            <span>
              {new Date(article.publishedDate).toLocaleDateString('en-US', {
                year: 'numeric',
                month: 'long',
                day: 'numeric'
              })}
            </span>

            <div className="flex gap-3">
              <button
                onClick={handleShare}
                className="flex items-center gap-1 text-blue-600 hover:text-blue-800 dark:text-blue-400 dark:hover:text-blue-200"
              >
                <Share2 size={16} />
                Share
              </button>

              <button
                onClick={handleSave}
                className="flex items-center gap-1 text-green-600 hover:text-green-800 dark:text-green-400 dark:hover:text-green-200"
              >
                <Bookmark size={16} />
                Save
              </button>
            </div>

            {/* Feedback messages */}
            {copied && (
              <motion.div
                initial={{ opacity: 0, y: 10 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, y: 10 }}
                className="absolute right-0 bottom-10 bg-gray-900 dark:bg-gray-700 text-white text-xs px-3 py-1 rounded-lg shadow-lg"
              >
                Link copied!
              </motion.div>
            )}
            {saved && (
              <motion.div
                initial={{ opacity: 0, y: 10 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, y: 10 }}
                className="absolute right-0 bottom-20 bg-green-600 dark:bg-green-700 text-white text-xs px-3 py-1 rounded-lg shadow-lg"
              >
                Post saved!
              </motion.div>
            )}
          </div>
        </div>
      </Link>
    </motion.div>
  );
};

export default ArticleCard;
