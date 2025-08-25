import React, { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import { getAllArticles } from '../data/articles';
import { motion } from 'framer-motion';
import { Trash } from 'lucide-react';

const SavedPosts: React.FC = () => {
  const [savedArticles, setSavedArticles] = useState<any[]>([]);

  useEffect(() => {
    const savedIds = JSON.parse(localStorage.getItem('savedPosts') || '[]');
    const allArticles = getAllArticles();
    const filtered = allArticles.filter(article => savedIds.includes(article.id));
    setSavedArticles(filtered);
  }, []);

  const handleRemove = (id: string) => {
    const updated = savedArticles.filter(article => article.id !== id);
    setSavedArticles(updated);

    const savedIds = JSON.parse(localStorage.getItem('savedPosts') || '[]');
    const newIds = savedIds.filter((savedId: string) => savedId !== id);
    localStorage.setItem('savedPosts', JSON.stringify(newIds));
  };

  return (
    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pt-28 pb-16 bg-gray-50 dark:bg-gray-900 transition-colors duration-300">
      <h1 className="text-3xl font-bold text-blue-800 dark:text-blue-400 mb-8">Saved Posts</h1>

      {savedArticles.length === 0 ? (
        <p className="text-gray-600 dark:text-gray-300 text-lg">You have no saved posts yet.</p>
      ) : (
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
          {savedArticles.map(article => (
            <motion.div
              key={article.id}
              whileHover={{ scale: 1.02 }}
              className="bg-white dark:bg-gray-800 rounded-xl shadow-md overflow-hidden relative transition-colors duration-300"
            >
              <Link to={`/article/${article.id}`}>
                <img
                  src={article.image}
                  alt={article.title}
                  className="w-full h-48 object-cover"
                />
              </Link>
              <div className="p-4">
                <Link to={`/article/${article.id}`}>
                  <h2 className="text-xl font-semibold text-blue-800 dark:text-blue-400 hover:text-blue-600 dark:hover:text-blue-300">
                    {article.title}
                  </h2>
                </Link>
                <p className="text-gray-600 dark:text-gray-300 text-sm mt-2 line-clamp-3">
                  {article.summary || article.content.slice(0, 100) + '...'}
                </p>
              </div>
              <button
                onClick={() => handleRemove(article.id)}
                className="absolute top-3 right-3 bg-red-500 text-white rounded-full p-2 hover:bg-red-600 transition"
              >
                <Trash size={18} />
              </button>
            </motion.div>
          ))}
        </div>
      )}
    </div>
  );
};

export default SavedPosts;
