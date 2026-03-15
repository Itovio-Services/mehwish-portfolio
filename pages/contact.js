import Head from 'next/head';
import Layout from '../components/Layout';
import { useState } from 'react';

export default function Contact() {
  const [form, setForm] = useState({ name: '', email: '', message: '' });
  const [status, setStatus] = useState(null);

  const handleSubmit = async (e) => {
    e.preventDefault();
    setStatus('loading');
    // Simulate success (form not wired yet)
    setTimeout(() => setStatus('success'), 1000);
  };

  return (
    <Layout>
      <Head>
        <title>Contact — Mehwish Riaz</title>
      </Head>

      <section className="section">
        <div className="container">
          <p className="section-tag">Get In Touch</p>
          <h1 className="section-title" style={{ marginBottom: 16 }}>Contact Me</h1>
          <p style={{ fontSize: 16, color: 'var(--text2)', marginBottom: 56, maxWidth: 520 }}>
            I'm open to internship and entry-level frontend developer opportunities. Feel free to reach out!
          </p>

          <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: 60, alignItems: 'start' }}>
            {/* Contact Info */}
            <div>
              <div style={{ display: 'flex', flexDirection: 'column', gap: 20, marginBottom: 40 }}>
                {[
                  { label: 'Phone', value: '0370-6586349', href: 'https://wa.me/923706586349' },
                  { label: 'LinkedIn', value: 'mehwish-riaz-40294b378', href: 'https://www.linkedin.com/in/mehwish-riaz-40294b378' },
                  { label: 'GitHub', value: 'github.com/Mehwish-riaz', href: 'https://github.com/Mehwish-riaz/' },
                ].map(item => (
                  <div key={item.label} className="card" style={{ padding: '20px 24px' }}>
                    <p style={{ fontSize: 12, color: 'var(--muted)', textTransform: 'uppercase', letterSpacing: '0.1em', marginBottom: 6 }}>{item.label}</p>
                    <a href={item.href} target="_blank" rel="noreferrer" style={{ fontSize: 15, color: 'var(--accent)', fontWeight: 600, textDecoration: 'none' }}>{item.value}</a>
                  </div>
                ))}
              </div>

              <div className="card" style={{ padding: 24, background: 'var(--accent)', border: 'none' }}>
                <h3 style={{ fontSize: 18, fontWeight: 700, color: 'white', marginBottom: 8 }}>Open to Opportunities</h3>
                <p style={{ fontSize: 14, color: 'rgba(255,255,255,0.85)', lineHeight: 1.7 }}>
                  Looking for frontend developer internships or entry-level positions. Let's build something great together!
                </p>
              </div>
            </div>

            {/* Contact Form */}
            <div className="card" style={{ padding: 36 }}>
              {status === 'success' ? (
                <div style={{ textAlign: 'center', padding: '40px 0' }}>
                  <h3 style={{ fontSize: 22, fontWeight: 700, marginBottom: 8 }}>Message Sent!</h3>
                  <p style={{ color: 'var(--text2)' }}>Thanks for reaching out. I'll get back to you soon.</p>
                  <button onClick={() => { setStatus(null); setForm({ name: '', email: '', message: '' }); }} className="btn btn-primary" style={{ marginTop: 24 }}>Send Another</button>
                </div>
              ) : (
                <form onSubmit={handleSubmit}>
                  <h3 style={{ fontSize: 20, fontWeight: 700, marginBottom: 24 }}>Send a Message</h3>
                  {[
                    { name: 'name', label: 'Your Name', type: 'text', placeholder: 'John Doe' },
                    { name: 'email', label: 'Email Address', type: 'email', placeholder: 'john@example.com' },
                  ].map(field => (
                    <div key={field.name} style={{ marginBottom: 20 }}>
                      <label htmlFor={field.name} style={{ display: 'block', fontSize: 13, fontWeight: 600, marginBottom: 8, color: 'var(--text2)' }}>{field.label}</label>
                      <input
                        id={field.name}
                        type={field.type}
                        placeholder={field.placeholder}
                        value={form[field.name]}
                        onChange={e => setForm({ ...form, [field.name]: e.target.value })}
                        required
                        style={{ width: '100%', padding: '12px 16px', background: 'var(--bg)', border: '1px solid var(--border)', borderRadius: 8, fontSize: 14, color: 'var(--text)', outline: 'none', boxSizing: 'border-box', fontFamily: 'var(--font-body)', cursor: 'text', pointerEvents: 'all' }}
                      />
                    </div>
                  ))}
                  <div style={{ marginBottom: 24 }}>
                    <label htmlFor="message" style={{ display: 'block', fontSize: 13, fontWeight: 600, marginBottom: 8, color: 'var(--text2)' }}>Message</label>
                    <textarea
                      id="message"
                      placeholder="Tell me about the opportunity..."
                      value={form.message}
                      onChange={e => setForm({ ...form, message: e.target.value })}
                      required
                      rows={5}
                      style={{ width: '100%', padding: '12px 16px', background: 'var(--bg)', border: '1px solid var(--border)', borderRadius: 8, fontSize: 14, color: 'var(--text)', outline: 'none', resize: 'vertical', boxSizing: 'border-box', fontFamily: 'var(--font-body)', cursor: 'text', pointerEvents: 'all' }}
                    />
                  </div>
                  <button type="submit" className="btn btn-primary" style={{ width: '100%', justifyContent: 'center' }} disabled={status === 'loading'}>
                    {status === 'loading' ? 'Sending...' : 'Send Message'}
                  </button>
                </form>
              )}
            </div>
          </div>
        </div>
        <style jsx>{`
          @media (max-width: 768px) {
            div[style*="grid-template-columns: 1fr 1fr"] { grid-template-columns: 1fr !important; }
          }
        `}</style>
      </section>
    </Layout>
  );
}
