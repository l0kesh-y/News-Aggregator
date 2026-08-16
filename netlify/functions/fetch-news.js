const fetch = require('node-fetch');

exports.handler = async function(event) {
  try {
    const { category = 'general', page = '1', q = '' } = event.queryStringParameters || {};
    const NEWS_API_KEY = process.env.NEWS_API_KEY;
    if (!NEWS_API_KEY) {
      return {
        statusCode: 500,
        body: JSON.stringify({ error: 'Server missing NEWS_API_KEY' })
      };
    }

    let url;
    if (q) {
      url = `https://newsapi.org/v2/everything?q=${encodeURIComponent(q)}&pageSize=12&page=${page}&sortBy=publishedAt&apiKey=${NEWS_API_KEY}`;
    } else {
      url = `https://newsapi.org/v2/top-headlines?country=us&category=${category}&pageSize=12&page=${page}&apiKey=${NEWS_API_KEY}`;
    }

    const res = await fetch(url);
    const data = await res.json();

    return {
      statusCode: 200,
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify(data)
    };
  } catch (err) {
    return {
      statusCode: 500,
      body: JSON.stringify({ error: err.message })
    };
  }
};
