import { BrowserRouter, Routes, Route } from 'react-router-dom';
import NewsFeed from './components/NewsFeed';
import ArticleDetail from './components/ArticleDetail';

function App() {
  return (
    <BrowserRouter>
      <div className="min-h-screen bg-gradient-to-br from-slate-50 via-blue-50 to-indigo-50">
        <header className="bg-gradient-to-r from-blue-600 via-indigo-600 to-purple-600 shadow-lg sticky top-0 z-50">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-6">
            <div className="flex items-center justify-center space-x-3">
              <div className="bg-white/10 backdrop-blur-sm p-3 rounded-xl">
                <svg className="w-8 h-8 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 20H5a2 2 0 01-2-2V6a2 2 0 012-2h10a2 2 0 012 2v1m2 13a2 2 0 01-2-2V7m2 13a2 2 0 002-2V9a2 2 0 00-2-2h-2m-4-3H9M7 16h6M7 8h6v4H7V8z" />
                </svg>
              </div>
              <div>
                <h1 className="text-3xl sm:text-4xl font-bold text-white tracking-tight">NewsLens</h1>
                <p className="text-blue-100 text-sm sm:text-base">AI-Powered News Insights</p>
              </div>
            </div>
          </div>
        </header>
        <Routes>
          <Route path="/" element={<NewsFeed />} />
          <Route path="/article/:id" element={<ArticleDetail />} />
        </Routes>
      </div>
    </BrowserRouter>
  );
}

export default App;
