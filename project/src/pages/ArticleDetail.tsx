import React, { useState, useEffect } from 'react';
import { useParams, Link } from 'react-router-dom';
import { Share2, Bookmark, Eye, Trash2 } from 'lucide-react';
import { motion } from 'framer-motion';
import {
  Article,
  getArticleById,
  getMostReadArticles,
  getEditorsPicks,
  getArticleShareLink,
} from '../data/articles';

const ArticleDetail: React.FC = () => {
  const { id } = useParams<{ id: string }>();
  const [article, setArticle] = useState<Article | null>(null);
  const [copied, setCopied] = useState(false);
  const [saved, setSaved] = useState(false);
  const [isAlreadySaved, setIsAlreadySaved] = useState(false);

  useEffect(() => {
    const foundArticle = getArticleById(id!);
    if (foundArticle) setArticle(foundArticle);

    const savedPosts = JSON.parse(localStorage.getItem('savedPosts') || '[]');
    if (savedPosts.includes(id)) setIsAlreadySaved(true);

    window.scrollTo(0, 0);
  }, [id]);

  const handleShare = async () => {
    if (!article) return;
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
        console.error('Failed to copy link:', err);
      }
    }
  };

  const handleSave = () => {
    if (!article) return;
    const savedPosts = JSON.parse(localStorage.getItem('savedPosts') || '[]');
    if (!savedPosts.includes(article.id)) {
      savedPosts.push(article.id);
      localStorage.setItem('savedPosts', JSON.stringify(savedPosts));
      setSaved(true);
      setIsAlreadySaved(true);
      setTimeout(() => setSaved(false), 2000);
    }
  };

  const handleRemove = () => {
    if (!article) return;
    let savedPosts = JSON.parse(localStorage.getItem('savedPosts') || '[]');
    savedPosts = savedPosts.filter((postId: string) => postId !== article.id);
    localStorage.setItem('savedPosts', JSON.stringify(savedPosts));
    setIsAlreadySaved(false);
  };

  if (!article) return <div className="text-center py-10 text-gray-900 dark:text-gray-100">Article not found</div>;

  const mostRead = getMostReadArticles().filter((a) => a.id !== article.id).slice(0, 5);
  const editorsPicks = getEditorsPicks().filter((a) => a.id !== article.id).slice(0, 5);

  return (
    <div className="max-w-7xl mx-auto px-4 pt-24 pb-12 grid grid-cols-1 md:grid-cols-3 gap-8 bg-gray-50 dark:bg-gray-900 transition-colors duration-300">
      {/* Main Content */}
      <div className="md:col-span-2 text-gray-900 dark:text-gray-100">
        <img
          src={article.image}
          alt={article.title}
          className="w-full rounded-xl mb-6 object-contain"
        />
        <h1 className="text-3xl font-bold mb-4">{article.title}</h1>
        <p className="text-gray-500 dark:text-gray-400 mb-6">
          By {article.author} • {new Date(article.publishedDate).toLocaleDateString()}
        </p>

        {/* Share & Save */}
        <div className="flex items-center gap-4 mb-8">
          <button onClick={handleShare} className="flex items-center gap-2 bg-blue-600 text-white px-4 py-2 rounded-lg hover:bg-blue-700 transition">
            <Share2 size={18} /> Share
          </button>
          {!isAlreadySaved ? (
            <button onClick={handleSave} className="flex items-center gap-2 px-4 py-2 rounded-lg transition bg-green-600 text-white hover:bg-green-700">
              <Bookmark size={18} /> Save
            </button>
          ) : (
            <button onClick={handleRemove} className="flex items-center gap-2 px-4 py-2 rounded-lg transition bg-red-600 text-white hover:bg-red-700">
              <Trash2 size={18} /> Remove
            </button>
          )}
        </div>

        {/* Feedback Messages */}
        <div className="relative">
          {copied && (
            <motion.div initial={{ opacity: 0, y: 10 }} animate={{ opacity: 1, y: 0 }} exit={{ opacity: 0, y: 10 }} className="absolute top-0 right-0 bg-gray-900 text-white text-sm px-3 py-1 rounded-lg shadow-lg">
              Link copied!
            </motion.div>
          )}
          {saved && (
            <motion.div initial={{ opacity: 0, y: 10 }} animate={{ opacity: 1, y: 0 }} exit={{ opacity: 0, y: 10 }} className="absolute top-0 right-0 mt-10 bg-green-600 text-white text-sm px-3 py-1 rounded-lg shadow-lg">
              Post saved!
            </motion.div>
          )}
        </div>

        {/* Article Content */}
        <div className="mt-8 leading-relaxed">{article.content}</div>
      </div>

      {/* Sidebar */}
      <div className="md:col-span-1 space-y-10 pt-4 text-gray-900 dark:text-gray-100">
        {/* Most Read */}
        <div>
          <h2 className="text-xl font-bold mb-6 border-b border-gray-300 dark:border-gray-700 pb-2">Most Read</h2>
          <ul className="space-y-4">
            {mostRead.map((a) => (
              <li key={a.id}>
                <Link to={`/article/${a.id}`} className="flex items-center gap-3 hover:text-blue-600 dark:hover:text-blue-400 transition">
                  <img src={a.image} alt={a.title} className="w-16 h-16 object-cover rounded" />
                  <div className="flex-1">
                    <p className="line-clamp-2">{a.title}</p>
                    <div className="flex items-center text-xs text-gray-500 dark:text-gray-400 gap-2 mt-1">
                      <Eye size={12} /> {a.views.toLocaleString()}
                    </div>
                  </div>
                </Link>
              </li>
            ))}
          </ul>
        </div>

        {/* Editor's Picks */}
        <div>
          <h2 className="text-xl font-bold mb-6 border-b border-gray-300 dark:border-gray-700 pb-2">Editor's Picks</h2>
          <ul className="space-y-4">
            {editorsPicks.map((a) => (
              <li key={a.id}>
                <Link to={`/article/${a.id}`} className="flex items-center gap-3 hover:text-purple-600 dark:hover:text-purple-400 transition">
                  <img src={a.image} alt={a.title} className="w-16 h-16 object-cover rounded" />
                  <div className="flex-1">
                    <p className="line-clamp-2">{a.title}</p>
                    <div className="flex items-center text-xs text-gray-500 dark:text-gray-400 gap-2 mt-1">
                      <Eye size={12} /> {a.views.toLocaleString()}
                    </div>
                  </div>
                </Link>
              </li>
            ))}
          </ul>
        </div>
      </div>
    </div>
  );
};

export default ArticleDetail;
