// Demo-only Groq service: returns a simple 3-line summary generated locally.
export async function generateInsight(article) {
  const delay = (ms) => new Promise(res => setTimeout(res, ms));
  await delay(250);

  const text = `${article.title}. ${article.description || ''} ${article.content || ''}`.trim();
  // naive split into sentences, fallback to slicing if needed
  const sentences = text.split(/(?<=[.!?])\s+/).filter(Boolean);
  const lines = [];
  for (let i = 0; i < 3; i++) {
    if (sentences[i]) lines.push(sentences[i]);
    else if (text) lines.push(text.slice(i * 80, (i + 1) * 80));
  }

  const summary = lines.join('\n').trim();
  return { summary };
}
