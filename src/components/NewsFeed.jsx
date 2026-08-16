import { useState, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import { fetchNews } from '../services/newsService';

const CATEGORIES = ['general', 'technology', 'business', 'sports', 'entertainment', 'health', 'science'];

function NewsFeed() {
  const [articles, setArticles] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);
  const [category, setCategory] = useState('general');
  const [searchQuery, setSearchQuery] = useState('');
  const [page, setPage] = useState(1);
  const [bookmarks, setBookmarks] = useState(() => {
    const saved = localStorage.getItem('bookmarks');
    return saved ? JSON.parse(saved) : [];
  });
  const navigate = useNavigate();

  useEffect(() => {
    loadNews();
  }, [category, page]);

  const loadNews = async () => {
    setLoading(true);
    setError(null);
    try {
      const data = await fetchNews(category, page);
      if (data.length === 0) {
        setError('No articles found. Please check your API key.');
      }
      setArticles(data);
    } catch (error) {
      console.error('Error fetching news:', error);
      setError(error.message || 'Failed to load news');
    }
    setLoading(false);
  };

  const handleSearch = async (e) => {
    e.preventDefault();
    if (!searchQuery.trim()) return;
    setLoading(true);
    setError(null);
    try {
      const data = await fetchNews(category, 1, searchQuery);
      if (data.length === 0) {
        setError('No articles found for your search.');
      }
      setArticles(data);
      setPage(1);
    } catch (error) {
      console.error('Error searching:', error);
      setError(error.message || 'Search failed');
    }
    setLoading(false);
  };

  const toggleBookmark = (article) => {
    const isBookmarked = bookmarks.some(b => b.url === article.url);
    let updated;
    if (isBookmarked) {
      updated = bookmarks.filter(b => b.url !== article.url);
    } else {
      updated = [...bookmarks, article];
    }
    setBookmarks(updated);
    localStorage.setItem('bookmarks', JSON.stringify(updated));
  };

  const isBookmarked = (article) => {
    return bookmarks.some(b => b.url === article.url);
  };

  return (
    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
      {/* Controls */}
      <div className="mb-8 space-y-4">
        {/* Categories */}
        <div className="flex flex-wrap gap-2">
          {CATEGORIES.map(cat => (
            <button
              key={cat}
              onClick={() => { setCategory(cat); setPage(1); }}
              className={`px-4 py-2 rounded-full font-medium transition-all duration-200 ${
                category === cat
                  ? 'bg-gradient-to-r from-blue-600 to-indigo-600 text-white shadow-lg scale-105'
                  : 'bg-white text-gray-700 hover:bg-gray-50 shadow-md hover:shadow-lg'
              }`}
            >
              {cat.charAt(0).toUpperCase() + cat.slice(1)}
            </button>
          ))}
        </div>

        {/* Search */}
        <form onSubmit={handleSearch} className="flex gap-2 max-w-2xl">
          <input
            type="text"
            placeholder="Search for news articles..."
            value={searchQuery}
            onChange={(e) => setSearchQuery(e.target.value)}
            className="flex-1 px-6 py-3 rounded-xl border-2 border-gray-200 focus:border-blue-500 focus:ring-2 focus:ring-blue-200 outline-none transition-all shadow-sm"
          />
          <button
            type="submit"
            className="px-8 py-3 bg-gradient-to-r from-blue-600 to-indigo-600 text-white rounded-xl font-semibold hover:shadow-lg transition-all duration-200 hover:scale-105"
          >
            Search
          </button>
        </form>
      </div>

      {/* Content */}
      {loading ? (
        <div className="flex justify-center items-center py-20">
          <div className="text-center">
            <div className="inline-block animate-spin rounded-full h-16 w-16 border-t-4 border-b-4 border-blue-600"></div>
            <p className="mt-4 text-gray-600 font-medium">Loading news...</p>
          </div>
        </div>
      ) : error ? (
        <div className="bg-red-50 border-l-4 border-red-500 rounded-lg p-6 shadow-md">
          <div className="flex items-center">
            <svg className="w-6 h-6 text-red-500 mr-3" fill="currentColor" viewBox="0 0 20 20">
              <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zM8.707 7.293a1 1 0 00-1.414 1.414L8.586 10l-1.293 1.293a1 1 0 101.414 1.414L10 11.414l1.293 1.293a1 1 0 001.414-1.414L11.414 10l1.293-1.293a1 1 0 00-1.414-1.414L10 8.586 8.707 7.293z" clipRule="evenodd" />
            </svg>
            <p className="text-red-700 font-medium">{error}</p>
          </div>
        </div>
      ) : (
        <>
          {/* Articles Grid */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 mb-8">
            {articles.map((article, idx) => (
              <div
                key={idx}
                className="bg-white rounded-2xl overflow-hidden shadow-md hover:shadow-2xl transition-all duration-300 hover:-translate-y-2 group"
              >
                {article.urlToImage && (
                  <div className="relative h-48 overflow-hidden bg-gray-200">
                    <img
                      src={article.urlToImage}
                      alt={article.title}
                      className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500"
                      onError={(e) => e.target.style.display = 'none'}
                    />
                  </div>
                )}
                <div className="p-5">
                  <h3 className="text-lg font-bold text-gray-900 mb-3 line-clamp-3 group-hover:text-blue-600 transition-colors">
                    {article.title}
                  </h3>
                  <p className="text-gray-600 text-sm mb-4 line-clamp-3">
                    {article.description}
                  </p>
                  <div className="flex items-center justify-between text-xs text-gray-500 mb-4 pb-4 border-b border-gray-100">
                    <span className="flex items-center">
                      <svg className="w-4 h-4 mr-1" fill="currentColor" viewBox="0 0 20 20">
                        <path fillRule="evenodd" d="M6 2a1 1 0 00-1 1v1H4a2 2 0 00-2 2v10a2 2 0 002 2h12a2 2 0 002-2V6a2 2 0 00-2-2h-1V3a1 1 0 10-2 0v1H7V3a1 1 0 00-1-1zm0 5a1 1 0 000 2h8a1 1 0 100-2H6z" clipRule="evenodd" />
                      </svg>
                      {new Date(article.publishedAt).toLocaleDateString()}
                    </span>
                    <span className="font-medium text-blue-600">{article.source.name}</span>
                  </div>
                  <div className="flex gap-2">
                    <button
                      onClick={() => navigate('/article/' + idx, { state: { article } })}
                      className="flex-1 px-4 py-2.5 bg-gradient-to-r from-blue-600 to-indigo-600 text-white rounded-lg font-semibold hover:shadow-lg transition-all duration-200 hover:scale-105"
                    >
                      Read More
                    </button>
                    <button
                      onClick={() => toggleBookmark(article)}
                      className={`px-4 py-2.5 rounded-lg font-semibold transition-all duration-200 hover:scale-110 ${
                        isBookmarked(article)
                          ? 'bg-yellow-400 text-white shadow-lg'
                          : 'bg-gray-100 text-gray-400 hover:bg-gray-200'
                      }`}
                    >
                      {isBookmarked(article) ? '★' : '☆'}
                    </button>
                  </div>
                </div>
              </div>
            ))}
          </div>

          {/* Pagination */}
          <div className="flex justify-center items-center gap-4">
            <button
              onClick={() => setPage(p => Math.max(1, p - 1))}
              disabled={page === 1}
              className="px-6 py-3 bg-white text-gray-700 rounded-xl font-semibold shadow-md hover:shadow-lg transition-all duration-200 disabled:opacity-50 disabled:cursor-not-allowed hover:scale-105"
            >
              ← Previous
            </button>
            <span className="px-6 py-3 bg-gradient-to-r from-blue-600 to-indigo-600 text-white rounded-xl font-bold shadow-lg">
              Page {page}
            </span>
            <button
              onClick={() => setPage(p => p + 1)}
              className="px-6 py-3 bg-white text-gray-700 rounded-xl font-semibold shadow-md hover:shadow-lg transition-all duration-200 hover:scale-105"
            >
              Next →
            </button>
          </div>
        </>
      )}
    </div>
  );
}

export default NewsFeed;
