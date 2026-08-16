const sampleArticles = [
  {
    title: 'AI helps farmers increase crop yields',
    description: 'A new AI-driven platform helps farmers monitor crops and improve yields with minimal input.',
    content: 'Researchers have developed lightweight AI tools that analyze satellite imagery and weather patterns to recommend precise irrigation and fertilization schedules. Early trials show yield improvements and water savings. Farmers report easier planning and reduced guesswork.',
    urlToImage: 'https://images.unsplash.com/photo-1501004318641-b39e6451bec6?w=1200&q=80&auto=format&fit=crop',
    publishedAt: new Date().toISOString(),
    source: { name: 'Demo News' },
    author: 'Jane Doe',
    url: 'https://example.com/demo-ai-farmers'
  },
  {
    title: 'Breakthrough battery extends EV range',
    description: 'A material science advancement increases energy density for electric vehicle batteries.',
    content: 'Scientists report a modified anode-cathode pairing that provides safer and more energy-dense storage. Prototype testing validated longer range on a single charge. Industry partners are planning pilot production runs.',
    urlToImage: 'https://images.unsplash.com/photo-1549921296-3a9bfc1f6a7b?w=1200&q=80&auto=format&fit=crop',
    publishedAt: new Date(Date.now() - 1000 * 60 * 60 * 24).toISOString(),
    source: { name: 'Demo Tech' },
    author: 'John Smith',
    url: 'https://example.com/demo-ev-battery'
  },
  {
    title: 'Local community garden feeds hundreds',
    description: 'Volunteers transformed an empty lot into a productive garden that donates fresh produce to nearby shelters.',
    content: 'The project started as a small neighborhood effort and has grown into a weekly food distribution hub. Organizers teach gardening skills and composting to volunteers. Recipients praise the freshness and variety of produce.',
    urlToImage: 'https://images.unsplash.com/photo-1501004318641-b39e6451bec6?w=1200&q=80&auto=format&fit=crop',
    publishedAt: new Date(Date.now() - 1000 * 60 * 60 * 48).toISOString(),
    source: { name: 'Community Post' },
    author: 'Alex Green',
    url: 'https://example.com/demo-community-garden'
  }
];

export default sampleArticles;
