import sampleArticles from '../data/sampleArticles';

export async function fetchNews(category = 'general', page = 1, query = '') {
  // Demo-only: return filtered sample data with a tiny simulated delay
  const delay = (ms) => new Promise(res => setTimeout(res, ms));
  await delay(200);

  let results = sampleArticles.slice();

  if (query) {
    const q = query.toLowerCase();
    results = results.filter(a => (a.title + ' ' + a.description + ' ' + a.content).toLowerCase().includes(q));
  }

  if (category && category !== 'general') {
    // In demo data we don't have categories; keep for compatibility
    results = results;
  }

  // simple pagination
  const pageSize = 12;
  const start = (page - 1) * pageSize;
  return results.slice(start, start + pageSize);
}
