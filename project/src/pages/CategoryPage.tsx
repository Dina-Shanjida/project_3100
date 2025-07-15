import React from 'react';
import { useParams } from 'react-router-dom';
import { motion } from 'framer-motion';
import { Tag } from 'lucide-react';
import { getArticlesByCategory } from '../data/articles';
import ArticleCard from '../components/ArticleCard';
import Sidebar from '../components/Sidebar';

const CategoryPage: React.FC = () => {
  const { category } = useParams<{ category: string }>();
  const categoryArticles = getArticlesByCategory(category?.charAt(0).toUpperCase() + category?.slice(1) || '');

  return (
    <div className="min-h-screen bg-gray-50 pt-16">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
        {/* Category Header */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          className="text-center mb-12"
        >
          <div className="inline-flex items-center px-4 py-2 bg-blue-100 text-blue-800 rounded-full text-sm font-medium mb-4">
            <Tag className="h-4 w-4 mr-2" />
            Category
          </div>
          <h1 className="text-4xl font-bold text-gray-900 mb-4 capitalize">
            {category} News
          </h1>
          <p className="text-lg text-gray-600 max-w-2xl mx-auto">
            Discover the latest developments and insights in {category}
          </p>
        </motion.div>

        <div className="grid grid-cols-1 lg:grid-cols-4 gap-8">
          {/* Articles Grid */}
          <div className="lg:col-span-3">
            {categoryArticles.length > 0 ? (
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                {categoryArticles.map((article) => (
                  <ArticleCard key={article.id} article={article} />
                ))}
              </div>
            ) : (
              <div className="text-center py-12">
                <div className="text-gray-400 mb-4">
                  <Tag className="h-16 w-16 mx-auto" />
                </div>
                <h3 className="text-xl font-semibold text-gray-900 mb-2">
                  No articles found
                </h3>
                <p className="text-gray-600">
                  We don't have any articles in this category yet. Check back later!
                </p>
              </div>
            )}
          </div>

          {/* Sidebar */}
          <div className="lg:col-span-1">
            <Sidebar />
          </div>
        </div>
      </div>
    </div>
  );
};

export default CategoryPage;