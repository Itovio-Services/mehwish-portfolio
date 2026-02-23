import Head from 'next/head';
import Layout from '../components/Layout';
import { useState, useEffect } from 'react';

function useReveal() {
  useEffect(() => {
    const els = document.querySelectorAll('.reveal');
    const obs = new IntersectionObserver(entries => {
      entries.forEach(e => { if (e.isIntersecting) { e.target.classList.add('visible'); obs.unobserve(e.target); } });
    }, { threshold: 0.1 });
    els.forEach(el => obs.observe(el));
    return () => obs.disconnect();
  }, []);
}

export default function Contact() {
  useReveal();
  const [form, setForm] = useState({ name: '', email: '', service: '', message: '' });
  const [status, setStatus] = useState('');

  const handleSubmit = async (e) => {
    e.preventDefault();
    setStatus('sending');
    
    try {
      const res = await fetch('/api/contact', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(form),
      });
      
      if (res.ok) {
        setStatus('sent');
        setForm({ name: '', email: '', service: '', message: '' });
      } else {
        setStatus('error');
      }
    } catch (error) {
      setStatus('error');
    }
  };

  const contacts = [
    { label: 'Email', value: 'contact@harishere.com', href: 'mailto:contact@harishere.com', icon: '✉' },
    { label: 'LinkedIn', value: 'linkedin.com/in/itisharis', href: 'https://linkedin.com/in/itisharis', icon: 'in' },
    { label: 'WhatsApp', value: '+92 348 1383350', href: 'https://wa.me/923481383350', icon: '💬' },
    { label: 'Location', value: 'Karachi, Pakistan', href: null, icon: '📍' },
  ];

  return (
    <Layout>
      <Head>
        <title>Contact — Haris</title>
        <meta name="description" content="Get in touch to discuss your project. Available for AI development, cybersecurity, Web3, and infrastructure work." />
      </Head>

      <section style={{ padding: '100px 0 80px' }}>
        <div className="container">
          <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: 80, alignItems: 'start' }}>
            {/* Left */}
            <div>
              <p className="section-tag reveal">Contact</p>
              <h1 className="section-title reveal" style={{ fontSize: 'clamp(40px, 5vw, 68px)', marginBottom: 24 }}>
                Let's build something together.
              </h1>
              <p style={{ fontSize: 17, color: 'var(--text2)', lineHeight: 1.8, fontWeight: 300, marginBottom: 40 }} className="reveal">
                Whether you need AI development, security audits, Web3 solutions, or complete digital infrastructure — I'm here to help. Fill out the form or reach out directly.
              </p>

              <div style={{ display: 'flex', flexDirection: 'column', gap: 20 }}>
                {contacts.map((c, i) => (
                  <div key={i} className={`reveal reveal-delay-${i}`}
                    style={{ display: 'flex', alignItems: 'center', gap: 16, padding: 20, background: 'var(--bg2)', border: '1px solid var(--border)', borderRadius: 8, transition: 'all 0.3s' }}
                    onMouseEnter={e => e.currentTarget.style.transform = 'translateX(4px)'}
                    onMouseLeave={e => e.currentTarget.style.transform = 'translateX(0)'}>
                    <div style={{ width: 48, height: 48, background: 'var(--accent-light)', borderRadius: 8, display: 'flex', alignItems: 'center', justifyContent: 'center', fontSize: 20, flexShrink: 0 }}>
                      {c.icon}
                    </div>
                    <div>
                      <p style={{ fontSize: 12, color: 'var(--muted)', marginBottom: 2, textTransform: 'uppercase', letterSpacing: '0.08em' }}>{c.label}</p>
                      {c.href ? (
                        <a href={c.href} target="_blank" rel="noreferrer" style={{ fontSize: 15, color: 'var(--text)', fontWeight: 500, textDecoration: 'none' }}>
                          {c.value}
                        </a>
                      ) : (
                        <p style={{ fontSize: 15, color: 'var(--text)', fontWeight: 500 }}>{c.value}</p>
                      )}
                    </div>
                  </div>
                ))}
              </div>
            </div>

            {/* Right - Form */}
            <div className="reveal" style={{ background: 'var(--bg2)', border: '1px solid var(--border)', borderRadius: 8, padding: 40 }}>
              <h3 style={{ fontFamily: 'var(--font-display)', fontSize: 24, fontWeight: 700, marginBottom: 24 }}>Send a Message</h3>
              <form onSubmit={handleSubmit} style={{ display: 'flex', flexDirection: 'column', gap: 20 }}>
                <div>
                  <label style={{ display: 'block', fontSize: 13, fontWeight: 600, marginBottom: 8, color: 'var(--text2)' }}>Name</label>
                  <input
                    type="text"
                    required
                    value={form.name}
                    onChange={e => setForm({ ...form, name: e.target.value })}
                    style={{ width: '100%', padding: '12px 16px', background: 'var(--bg)', border: '1px solid var(--border)', borderRadius: 6, fontSize: 15, color: 'var(--text)', transition: 'border 0.2s' }}
                    onFocus={e => e.target.style.borderColor = 'var(--accent)'}
                    onBlur={e => e.target.style.borderColor = 'var(--border)'}
                  />
                </div>
                <div>
                  <label style={{ display: 'block', fontSize: 13, fontWeight: 600, marginBottom: 8, color: 'var(--text2)' }}>Email</label>
                  <input
                    type="email"
                    required
                    value={form.email}
                    onChange={e => setForm({ ...form, email: e.target.value })}
                    style={{ width: '100%', padding: '12px 16px', background: 'var(--bg)', border: '1px solid var(--border)', borderRadius: 6, fontSize: 15, color: 'var(--text)', transition: 'border 0.2s' }}
                    onFocus={e => e.target.style.borderColor = 'var(--accent)'}
                    onBlur={e => e.target.style.borderColor = 'var(--border)'}
                  />
                </div>
                <div>
                  <label style={{ display: 'block', fontSize: 13, fontWeight: 600, marginBottom: 8, color: 'var(--text2)' }}>Service Interested In</label>
                  <select
                    required
                    value={form.service}
                    onChange={e => setForm({ ...form, service: e.target.value })}
                    style={{ width: '100%', padding: '12px 16px', background: 'var(--bg)', border: '1px solid var(--border)', borderRadius: 6, fontSize: 15, color: 'var(--text)', transition: 'border 0.2s' }}
                    onFocus={e => e.target.style.borderColor = 'var(--accent)'}
                    onBlur={e => e.target.style.borderColor = 'var(--border)'}>
                    <option value="">Select a service</option>
                    <option value="AI Development">AI Development</option>
                    <option value="Cybersecurity">Cybersecurity</option>
                    <option value="Web3 Development">Web3 Development</option>
                    <option value="Web Development">Web Development</option>
                    <option value="Infrastructure">Infrastructure</option>
                    <option value="Personal Branding">Personal Branding</option>
                    <option value="Other">Other</option>
                  </select>
                </div>
                <div>
                  <label style={{ display: 'block', fontSize: 13, fontWeight: 600, marginBottom: 8, color: 'var(--text2)' }}>Message</label>
                  <textarea
                    required
                    rows={5}
                    value={form.message}
                    onChange={e => setForm({ ...form, message: e.target.value })}
                    style={{ width: '100%', padding: '12px 16px', background: 'var(--bg)', border: '1px solid var(--border)', borderRadius: 6, fontSize: 15, color: 'var(--text)', fontFamily: 'inherit', resize: 'vertical', transition: 'border 0.2s' }}
                    onFocus={e => e.target.style.borderColor = 'var(--accent)'}
                    onBlur={e => e.target.style.borderColor = 'var(--border)'}
                  />
                </div>
                <button
                  type="submit"
                  disabled={status === 'sending'}
                  className="btn btn-primary"
                  style={{ width: '100%', justifyContent: 'center' }}>
                  {status === 'sending' ? 'Sending...' : status === 'sent' ? 'Message Sent! ✓' : status === 'error' ? 'Error - Try Again' : 'Send Message'}
                </button>
              </form>
            </div>
          </div>
        </div>
      </section>
    </Layout>
  );
}
