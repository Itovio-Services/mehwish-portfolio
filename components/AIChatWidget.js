import { useState, useRef, useEffect } from 'react';

export default function AIChatWidget() {
  const [open, setOpen] = useState(false);
  const [messages, setMessages] = useState([
    { role: 'assistant', content: "Hi! I'm Haris's AI assistant. Ask me anything about his services, projects, or how to get in touch." }
  ]);
  const [input, setInput] = useState('');
  const [loading, setLoading] = useState(false);
  const bottomRef = useRef(null);

  useEffect(() => {
    if (open) bottomRef.current?.scrollIntoView({ behavior: 'smooth' });
  }, [messages, open]);

  const send = async () => {
    if (!input.trim() || loading) return;
    const userMsg = { role: 'user', content: input };
    setMessages(prev => [...prev, userMsg]);
    setInput('');
    setLoading(true);

    try {
      const res = await fetch('/api/chat', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ messages: [...messages, userMsg] }),
      });
      const data = await res.json();
      setMessages(prev => [...prev, { role: 'assistant', content: data.reply }]);
    } catch {
      setMessages(prev => [...prev, { role: 'assistant', content: "Sorry, I'm having trouble connecting right now. Please email contact@harishere.com directly." }]);
    }
    setLoading(false);
  };

  return (
    <>
      {/* Floating button */}
      <button onClick={() => setOpen(!open)} style={{
        position: 'fixed', bottom: 28, right: 28, zIndex: 9999,
        width: 56, height: 56, borderRadius: '50%',
        background: 'var(--accent)', color: '#fff',
        display: 'flex', alignItems: 'center', justifyContent: 'center',
        boxShadow: '0 8px 32px rgba(123,97,255,0.4)',
        transition: 'transform 0.3s, box-shadow 0.3s',
        border: 'none', cursor: 'pointer', fontSize: 22,
      }}
        onMouseEnter={e => { e.currentTarget.style.transform = 'scale(1.08)'; }}
        onMouseLeave={e => { e.currentTarget.style.transform = 'scale(1)'; }}>
        {open ? '✕' : '💬'}
      </button>

      {/* Chat window */}
      {open && (
        <div style={{
          position: 'fixed', bottom: 96, right: 28, zIndex: 9999,
          width: 360, height: 480,
          background: 'var(--bg2)', border: '1px solid var(--border)',
          borderRadius: 12, display: 'flex', flexDirection: 'column',
          overflow: 'hidden', boxShadow: '0 24px 64px rgba(0,0,0,0.6)',
        }}>
          {/* Header */}
          <div style={{ padding: '16px 20px', borderBottom: '1px solid var(--border)', display: 'flex', alignItems: 'center', gap: 12 }}>
            <div style={{ width: 36, height: 36, borderRadius: '50%', background: 'var(--accent-light)', border: '1px solid var(--accent)', display: 'flex', alignItems: 'center', justifyContent: 'center', fontSize: 16 }}>⚡</div>
            <div>
              <p style={{ fontSize: 14, fontWeight: 600, color: 'var(--white)' }}>Haris AI Assistant</p>
              <p style={{ fontSize: 12, color: 'var(--accent)' }}>● Online</p>
            </div>
          </div>

          {/* Messages */}
          <div style={{ flex: 1, overflowY: 'auto', padding: '16px 20px', display: 'flex', flexDirection: 'column', gap: 12 }}>
            {messages.map((m, i) => (
              <div key={i} style={{
                maxWidth: '85%',
                alignSelf: m.role === 'user' ? 'flex-end' : 'flex-start',
                background: m.role === 'user' ? 'var(--accent)' : 'var(--bg3)',
                color: m.role === 'user' ? '#fff' : 'var(--text)',
                padding: '10px 14px', borderRadius: m.role === 'user' ? '16px 16px 4px 16px' : '16px 16px 16px 4px',
                fontSize: 13, lineHeight: 1.6,
              }}>
                {m.content}
              </div>
            ))}
            {loading && (
              <div style={{ alignSelf: 'flex-start', background: 'var(--bg3)', padding: '10px 14px', borderRadius: '16px 16px 16px 4px', fontSize: 13, color: 'var(--text2)' }}>
                Thinking...
              </div>
            )}
            <div ref={bottomRef} />
          </div>

          {/* Input */}
          <div style={{ padding: '12px 16px', borderTop: '1px solid var(--border)', display: 'flex', gap: 10 }}>
            <input
              value={input}
              onChange={e => setInput(e.target.value)}
              onKeyDown={e => e.key === 'Enter' && send()}
              placeholder="Ask me anything..."
              style={{
                flex: 1, background: 'var(--bg3)', border: '1px solid var(--border)',
                borderRadius: 8, padding: '9px 14px', fontSize: 13,
                color: 'var(--text)', outline: 'none', fontFamily: 'var(--font-body)',
              }}
            />
            <button onClick={send} style={{
              background: 'var(--accent)', color: '#fff',
              border: 'none', borderRadius: 8, padding: '9px 16px',
              fontSize: 13, fontWeight: 600, cursor: 'pointer',
              transition: 'opacity 0.2s',
            }}>
              Send
            </button>
          </div>
        </div>
      )}
    </>
  );
}
