
const sampleArticles = [
  {
    title: 'AI helps farmers increase crop yields',
    description: 'A new AI-driven platform helps farmers monitor crops and improve yields with minimal input.',
    content: 'Researchers developed lightweight AI tools that analyze satellite imagery and weather patterns to recommend irrigation and fertilization schedules. Early trials show yield improvements and water savings.',
    urlToImage: 'https://images.unsplash.com/photo-1501004318641-b39e6451bec6?w=1200&q=80&auto=format&fit=crop',
    publishedAt: new Date().toISOString(),
    source: { name: 'Demo News' },
    author: 'Jane Doe',
    url: 'https://example.com/demo-ai-farmers'
  },
  {
    title: 'Breakthrough battery extends EV range',
    description: 'A material science advancement increases energy density for electric vehicle batteries.',
    content: 'Scientists report a modified anode-cathode pairing that provides safer and more energy-dense storage. Prototype testing validated longer range on a single charge.',
    urlToImage: 'https://images.unsplash.com/photo-1549921296-3a9bfc1f6a7b?w=1200&q=80&auto=format&fit=crop',
    publishedAt: new Date(Date.now() - 1000 * 60 * 60 * 24).toISOString(),
    source: { name: 'Demo Tech' },
    author: 'John Smith',
    url: 'https://example.com/demo-ev-battery'
  },
  {
    title: 'Local community garden feeds hundreds',
    description: 'Volunteers transformed an empty lot into a productive garden that donates fresh produce to nearby shelters.',
    content: 'The project started as a small neighborhood effort and has grown into a weekly food distribution hub. Organizers teach gardening skills and composting to volunteers.',
    urlToImage: 'https://images.unsplash.com/photo-1501004318641-b39e6451bec6?w=1200&q=80&auto=format&fit=crop',
    publishedAt: new Date(Date.now() - 1000 * 60 * 60 * 48).toISOString(),
    source: { name: 'Community Post' },
    author: 'Alex Green',
    url: 'https://example.com/demo-community-garden'
  },
  {
    title: 'Startup launches green shipping initiative',
    description: 'A startup pilots wind-assisted cargo ships to cut emissions on major routes.',
    content: 'The company retrofits existing vessels with kite sails and efficient routing software to reduce fuel use. Early shipments report significant CO2 reductions.',
    urlToImage: 'https://images.unsplash.com/photo-1507525428034-b723cf961d3e?w=1200&q=80&auto=format&fit=crop',
    publishedAt: new Date(Date.now() - 1000 * 60 * 60 * 72).toISOString(),
    source: { name: 'Global Transport' },
    author: 'Maria Lopez',
    url: 'https://example.com/demo-green-shipping'
  },
  {
    title: 'City opens network of protected bike lanes',
    description: 'New infrastructure encourages cycling and reduces commute times across the downtown area.',
    content: 'The bike lanes connect residential neighborhoods to major employment centers, improving safety and increasing ridership.',
    urlToImage: 'https://images.unsplash.com/photo-1509395176047-4a66953fd231?w=1200&q=80&auto=format&fit=crop',
    publishedAt: new Date(Date.now() - 1000 * 60 * 60 * 96).toISOString(),
    source: { name: 'CityBeat' },
    author: 'Lina Park',
    url: 'https://example.com/demo-bike-lanes'
  },
  {
    title: 'New education program improves literacy rates',
    description: 'A community-led tutoring program helps children improve reading scores in under-resourced areas.',
    content: 'Volunteers provide after-school reading support and mentorship. Schools report measurable improvements in literacy after one semester.',
    urlToImage: 'https://images.unsplash.com/photo-1529070538774-1843cb3265df?w=1200&q=80&auto=format&fit=crop',
    publishedAt: new Date(Date.now() - 1000 * 60 * 60 * 120).toISOString(),
    source: { name: 'Education Daily' },
    author: 'Priya Nair',
    url: 'https://example.com/demo-literacy-program'
  },
  {
    title: 'Local cafe reduces waste with compostable packaging',
    description: 'A small business switches to compostable materials and partners with local composting services.',
    content: 'Customers respond positively and waste collection partners report higher diversion rates.',
    urlToImage: 'https://images.unsplash.com/photo-1504754524776-8f4f37790ca0?w=1200&q=80&auto=format&fit=crop',
    publishedAt: new Date(Date.now() - 1000 * 60 * 60 * 140).toISOString(),
    source: { name: 'Local Eats' },
    author: 'Samir Khan',
    url: 'https://example.com/demo-cafe-waste'
  },
  {
    title: 'Advances in water purification technology',
    description: 'Scientists design portable filters that remove contaminants at low cost.',
    content: 'The filters use novel membranes and passive flow designs to provide clean water for remote communities.',
    urlToImage: 'https://images.unsplash.com/photo-1501004318641-b39e6451bec6?w=1200&q=80&auto=format&fit=crop',
    publishedAt: new Date(Date.now() - 1000 * 60 * 60 * 200).toISOString(),
    source: { name: 'Science Today' },
    author: 'Dr. Emma Li',
    url: 'https://example.com/demo-water-tech'
  },
  {
    title: 'Concert series brings music to parks',
    description: 'Free summer concerts draw families and support local artists.',
    content: 'Organizers partner with parks departments to create safe, accessible events that highlight regional talent.',
    urlToImage: 'https://images.unsplash.com/photo-1504805572947-34fad45aed93?w=1200&q=80&auto=format&fit=crop',
    publishedAt: new Date(Date.now() - 1000 * 60 * 60 * 300).toISOString(),
    source: { name: 'Arts & Culture' },
    author: 'Oliver Reed',
    url: 'https://example.com/demo-concerts'
  },
  {
    title: 'Startup uses recycled plastic for building materials',
    description: 'An innovative process converts ocean plastics into durable construction panels.',
    content: 'Pilot projects demonstrate resilience and cost-effectiveness for low-cost housing.',
    urlToImage: 'https://images.unsplash.com/photo-1503341455253-b2e723bb3dbb?w=1200&q=80&auto=format&fit=crop',
    publishedAt: new Date(Date.now() - 1000 * 60 * 60 * 400).toISOString(),
    source: { name: 'GreenBuild' },
    author: 'Nora Patel',
    url: 'https://example.com/demo-recycled-plastic'
  }
];

export default sampleArticles;
