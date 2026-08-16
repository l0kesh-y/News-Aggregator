export async function fetchNews(category = 'general', page = 1, query = '') {
  try {
    const params = new URLSearchParams();
    params.set('category', category);
    params.set('page', String(page));
    if (query) params.set('q', query);

    const url = `/ .netlify/functions/fetch-news?${params.toString()}`.replace('/ .netlify', '/.netlify');

    const response = await fetch(url);
    const data = await response.json();

    if (data.status === 'error' || data.error) {
      console.error('NewsAPI Error:', data.message || data.error);
      throw new Error(data.message || data.error || 'News API error');
    }

    return data.articles || [];
  } catch (error) {
    console.error('News API error:', error);
    return [];
  }
}
