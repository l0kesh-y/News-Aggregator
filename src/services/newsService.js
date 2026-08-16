const NEWS_API_KEY = import.meta.env.VITE_NEWS_API_KEY;
const BASE_URL = 'https://newsapi.org/v2';

export async function fetchNews(category = 'general', page = 1, query = '') {
  try {
    let url;
    if (query) {
      url = `${BASE_URL}/everything?q=${encodeURIComponent(query)}&pageSize=12&page=${page}&sortBy=publishedAt&apiKey=${NEWS_API_KEY}`;
    } else {
      // NewsAPI free tier requires country parameter for top-headlines
      url = `${BASE_URL}/top-headlines?country=us&category=${category}&pageSize=12&page=${page}&apiKey=${NEWS_API_KEY}`;
    }
    
    const response = await fetch(url);
    const data = await response.json();
    
    if (data.status === 'error') {
      console.error('NewsAPI Error:', data.message);
      throw new Error(data.message);
    }
    
    return data.articles || [];
  } catch (error) {
    console.error('News API error:', error);
    return [];
  }
}
