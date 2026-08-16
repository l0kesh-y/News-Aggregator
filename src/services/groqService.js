const GROQ_API_KEY = import.meta.env.VITE_GROQ_API_KEY;
const GROQ_API_URL = 'https://api.groq.com/openai/v1/chat/completions';

export async function generateInsight(article) {
  if (!GROQ_API_KEY) {
    throw new Error('Groq API key is missing');
  }

  const prompt = `Summarize this news article in exactly 3 lines:

Title: ${article.title}
Content: ${article.description || ''} ${article.content || ''}

Provide a clear, concise 3-line summary.`;

  try {
    const response = await fetch(GROQ_API_URL, {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
        'Authorization': `Bearer ${GROQ_API_KEY}`
      },
      body: JSON.stringify({
        model: 'llama-3.3-70b-versatile',
        messages: [
          {
            role: 'user',
            content: prompt
          }
        ],
        temperature: 0.5,
        max_tokens: 300
      })
    });

    if (!response.ok) {
      const errorData = await response.json();
      throw new Error(errorData.error?.message || `API error: ${response.status}`);
    }

    const data = await response.json();
    const summary = data.choices[0].message.content.trim();
    
    return { summary };
  } catch (error) {
    console.error('Groq API error:', error);
    throw error;
  }
}
