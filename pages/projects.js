import Head from 'next/head';
import Layout from '../components/Layout';
import { useEffect } from 'react';

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

const projects = [
  {
    tag: 'AI Product', title: 'PrecisionFlow.io',
    desc: 'An autonomous AI agent that generates daily crypto content for Binance Square — analyzing coins, tracking market sentiment, and publishing posts without human input. Built with Python and custom LLM pipelines.',
    tech: ['Python', 'AI Agents', 'LLM APIs', 'Crypto APIs', 'Automation'],
    link: 'https://precisionflow.io', status: 'Live',
  },
  {
    tag: 'Company', title: 'PrecisionTechInsights',
    desc: 'A full-stack tech company offering AI development, cybersecurity, Web3, and web services. Founded and operated solo — managing client relationships, project delivery, and product development simultaneously.',
    tech: ['Business', 'AI', 'Cybersecurity', 'Web3', 'Web Dev'],
    link: 'https://precisiontechinsights.com', status: 'Live',
  },
  {
    tag: 'Infrastructure', title: 'harishere Hosting Platform',
    desc: 'White-label reseller hosting infrastructure running on enterprise servers with custom nameservers (ns1/ns2/ns3.harishere.com), SSL management, DirectAdmin, and full client account isolation.',
    tech: ['DirectAdmin', 'DNS', 'SSL', 'Apache', 'Linux'],
    link: 'https://hosting.harishere.com', status: 'Live',
  },
  {
    tag: 'Personal Brand', title: 'harishere.com',
    desc: 'This very site — built with Next.js, hosted on my own infrastructure, featuring an AI assistant powered by Claude. Demonstrates my full-stack capabilities across design, development, and deployment.',
    tech: ['Next.js', 'React', 'CSS', 'Claude API', 'Self-hosted'],
    link: '#', status: 'Live',
  },
  {
    tag: 'Cybersecurity', title: 'Security Audits',
    desc: 'Web application security assessments for clients using Kali Linux, Burp Suite, and custom tooling. Reports include vulnerability findings, severity ratings, and actionable remediation steps.',
    tech: ['Kali Linux', 'Burp Suite', 'OWASP', 'Pen Testing', 'Reporting'],
    link: '/contact', status: 'Ongoing',
  },
  {
    tag: 'LinkedIn', title: 'AI Content System',
    desc: 'An AI-powered content pipeline that generates consistent, on-brand LinkedIn posts in my voice — helping maintain a 5K+ follower community in AI, cybersecurity, and Web3 without spending hours writing.',
    tech: ['AI Writing', 'LLMs', 'Automation', 'LinkedIn', 'Personal Brand'],
    link: 'https://linkedin.com', status: 'Running',
  },
];

export default function Projects() {
  useReveal();
  return (
    <Layout>
      <Head>
        <title>Projects — Haris</title>
        <meta name="description" content="Projects and products built by Haris — AI agents, cybersecurity, Web3, hosting infrastructure, and more." />
      </Head>

      {/* Hero */}
      <section style={{ padding: '100px 0 80px', borderBottom: '1px solid var(--border)', position: 'relative', overflow: 'hidden' }}>
        <div style={{ position: 'absolute', inset: 0, background: 'radial-gradient(ellipse 60% 60% at 50% 0%, rgba(123,97,255,0.07) 0%, transparent 70%)', pointerEvents: 'none' }} />
        <div className="container" style={{ position: 'relative' }}>
          <p className="section-tag">Projects</p>
          <h1 className="section-title" style={{ maxWidth: 700, fontSize: 'clamp(40px, 6vw, 72px)' }}>
            Things I've built.<br /><span style={{ color: 'var(--text2)' }}>And shipped.</span>
          </h1>
          <p className="section-sub" style={{ marginTop: 16 }}>Not mockups. Not concepts. Real products running on real infrastructure, serving real users.</p>
        </div>
      </section>

      {/* Projects grid */}
      <section className="section">
        <div className="container">
          <div style={{ display: 'grid', gridTemplateColumns: 'repeat(2, 1fr)', gap: 20 }}>
            {projects.map((p, i) => (
              <a key={p.title}
                href={p.link} target={p.link.startsWith('http') ? '_blank' : '_self'} rel="noreferrer"
                className={`card reveal reveal-delay-${i % 3}`}
                style={{ padding: '36px 32px', display: 'block', textDecoration: 'none', position: 'relative' }}>
                {/* Status badge */}
                <span style={{ position: 'absolute', top: 24, right: 24, fontSize: 11, letterSpacing: '0.1em', textTransform: 'uppercase', color: '#22c55e', background: 'rgba(34,197,94,0.1)', border: '1px solid rgba(34,197,94,0.2)', padding: '3px 10px', borderRadius: 100 }}>
                  {p.status}
                </span>
                <span style={{ fontSize: 11, letterSpacing: '0.12em', textTransform: 'uppercase', color: 'var(--accent)', display: 'block', marginBottom: 12 }}>{p.tag}</span>
                <h3 style={{ fontFamily: 'var(--font-display)', fontSize: 22, fontWeight: 700, marginBottom: 12, letterSpacing: '-0.01em' }}>{p.title}</h3>
                <p style={{ fontSize: 14, color: 'var(--text2)', lineHeight: 1.75, marginBottom: 24 }}>{p.desc}</p>
                <div style={{ display: 'flex', gap: 8, flexWrap: 'wrap' }}>
                  {p.tech.map(t => (
                    <span key={t} style={{ fontSize: 11, padding: '4px 10px', border: '1px solid var(--border)', borderRadius: 100, color: 'var(--muted)', letterSpacing: '0.04em' }}>{t}</span>
                  ))}
                </div>
              </a>
            ))}
          </div>
        </div>
      </section>

      <style jsx global>{`
        @media (max-width: 768px) {
          div[style*="repeat(2, 1fr)"] { grid-template-columns: 1fr !important; }
        }
      `}</style>
    </Layout>
  );
}
