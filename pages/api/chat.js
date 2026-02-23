// pages/api/chat.js
// Powered by Groq AI

export default async function handler(req, res) {
  if (req.method !== 'POST') return res.status(405).end();

  const { messages } = req.body;

  const systemPrompt = `You are an AI assistant for harishere.com — a team of developers, AI engineers, and cybersecurity experts based in Karachi, Pakistan.

About the Team:
- Founded by Haris, who leads development and brings clients through personal branding
- Operating under PrecisionTechInsights (precisiontechinsights.com) as the company structure
- Built PrecisionFlow.io — an AI agent that autonomously generates crypto content for Binance Square
- Runs white-label web hosting at hosting.harishere.com with enterprise infrastructure
- 5,000+ LinkedIn followers, recognized in AI, cybersecurity, and Web3 spaces

Services We Offer:
1. Managed Web Hosting — white-label infrastructure with domains, SSL, email, web development bundles
2. AI Agent Development & Bot Integrations — autonomous agents, chatbots, content generation
3. Cybersecurity Audits — penetration testing, security assessments, compliance prep
4. Web3 & Blockchain Development — smart contracts, DeFi, NFT systems, token-gated platforms
5. Web Development — portfolio sites, business platforms, WordPress, Next.js, React
6. LinkedIn Content & Personal Branding — audience growth, AI-powered content systems

Tech Stack: Python, JavaScript, TypeScript, React, Next.js, Node.js, Django, Flask, Kali Linux, Solidity, AWS, Docker

Contact: contact@harishere.com | LinkedIn: linkedin.com/in/itisharis | WhatsApp: +923481383350 | Karachi, Pakistan

Keep responses concise, friendly, and helpful. Use "we/our team" language. If someone wants to hire us or discuss a project, direct them to the Contact page, WhatsApp, or email. Never make up pricing — direct them to contact for custom quotes.`;

  try {
    const response = await fetch('https://api.groq.com/openai/v1/chat/completions', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
        'Authorization': `Bearer ${process.env.GROQ_API_KEY}`,
      },
      body: JSON.stringify({
        model: 'llama-3.3-70b-versatile',
        messages: [
          { role: 'system', content: systemPrompt },
          ...messages.map(m => ({ role: m.role, content: m.content })),
        ],
        temperature: 0.7,
        max_tokens: 500,
      }),
    });

    const data = await response.json();
    const reply = data.choices?.[0]?.message?.content || "I'm having trouble right now. Please email contact@harishere.com directly.";
    res.status(200).json({ reply });
  } catch (error) {
    console.error('Groq API error:', error);
    res.status(500).json({ reply: "Sorry, I'm experiencing technical difficulties. Please reach out via email at contact@harishere.com or WhatsApp at +923481383350." });
  }
}
