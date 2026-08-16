# 📰 NewsLens

A smart news platform with AI-powered insights using React, NewsAPI, and Groq AI.

## Features

### Module 1 - Smart News Feed
- Browse latest news by category (Technology, Business, Sports, etc.)
- Search articles by keyword
- Pagination support
- Bookmark/save articles (stored locally)
- Responsive design

### Module 2 - News Insight
When viewing an article, click "Get Insight" to generate:
- 3-line summary
- Key points (bullet format)
- Important entities (people, companies, locations)
- Simple explanation of complex topics

## Setup

1. **Install dependencies:**
```bash
npm install
```

2. **Get API Keys:**
   - NewsAPI: Get free key at https://newsapi.org/
   - Groq AI: Get free key at https://console.groq.com/

3. **Configure environment:**
```bash
cp .env.example .env
```

Edit `.env` and add your API keys:
```
VITE_NEWS_API_KEY=your_newsapi_key_here
VITE_GROQ_API_KEY=your_groq_api_key_here
```

4. **Run the application:**
```bash
npm run dev
```

Open http://localhost:3000 in your browser.

## Tech Stack

- React 18
- React Router for navigation
- Vite for build tooling
- NewsAPI for news content
- Groq AI (Mixtral model) for insights

## Usage

1. Browse news on the home page
2. Filter by category or search for specific topics
3. Click "Read Article" to view full details
4. Click "Get AI Insight" for intelligent analysis
5. Use the bookmark button (☆) to save articles

## Project Structure

```
newslens/
├── src/
│   ├── components/
│   │   ├── NewsFeed.jsx       # Main news listing
│   │   ├── NewsFeed.css
│   │   ├── ArticleDetail.jsx  # Article view with AI insights
│   │   └── ArticleDetail.css
│   ├── services/
│   │   ├── newsService.js     # NewsAPI integration
│   │   └── groqService.js     # Groq AI integration
│   ├── App.jsx
│   ├── App.css
│   ├── main.jsx
│   └── index.css
├── index.html
├── vite.config.js
└── package.json
```

## Notes

- NewsAPI free tier has rate limits (100 requests/day)
- Groq AI free tier is generous for testing
- Bookmarks are saved in browser localStorage
- Articles link to original sources for full content

## Netlify Deployment

**Demo Mode:** This deployment is configured to run in demo-only mode: the app uses bundled sample articles and a local AI-summary mock. No API keys are required.

If you want to re-enable live APIs later, remove the demo services in `src/services` and set the appropriate environment variables on Netlify.
