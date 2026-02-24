import Head from 'next/head';
import Link from 'next/link';
import Layout from '../components/Layout';
import { useEffect } from 'react';

function useReveal() {
  useEffect(() => {
    const els = document.querySelectorAll('.reveal');
    const obs = new IntersectionObserver(entries => {
      entries.forEach(e => { if (e.isIntersecting) { e.target.classList.add('visible'); obs.unobserve(e.target); } });
    }, { threshold: 0.12 });
    els.forEach(el => obs.observe(el));
    return () => obs.disconnect();
  }, []);
}

export default function Home() {
  useReveal();

  const skills = [
    { icon: '⚡', title: 'AI & Agents', desc: 'Building autonomous AI agents and intelligent automation systems that work 24/7.' },
    { icon: '🔐', title: 'Cybersecurity', desc: 'Penetration testing, security audits, and infrastructure hardening with Kali Linux.' },
    { icon: '⛓', title: 'Web3 & Blockchain', desc: 'Smart contracts, DeFi platforms, and decentralized application development.' },
    { icon: '🌐', title: 'Web Development', desc: 'Full-stack development with React, Next.js, Node.js, and modern frameworks.' },
    { icon: '🖥', title: 'Server Infrastructure', desc: 'White-label hosting, DNS management, and enterprise server operations.' },
    { icon: '📈', title: 'Personal Branding', desc: 'Building technical audiences on LinkedIn with 5K+ followers and growing.' },
  ];

  const projects = [
    { tag: 'AI Product', title: 'PrecisionFlow.io', desc: 'Autonomous AI agent generating daily crypto content for Binance Square — analyzing markets and posting 24/7.', link: 'https://precisionflow.io' },
    { tag: 'Company', title: 'PrecisionTechInsights', desc: 'My tech company offering AI development, cybersecurity, Web3, and complete digital solutions.', link: 'https://precisiontechinsights.com' },
    { tag: 'Personal Brand', title: 'LinkedIn Profile', desc: 'Building my personal brand on LinkedIn with 5K+ followers — sharing insights on AI, cybersecurity, and Web3.', link: 'https://linkedin.com/in/itisharis' },
  ];

  return (
    <Layout>
      <Head>
        <title>Haris — AI Engineer, Cybersecurity & Web3 Developer</title>
        <meta name="description" content="CEO of PrecisionTechInsights. Building intelligent systems at the intersection of AI, Web3, and security." />
        <meta name="viewport" content="width=device-width, initial-scale=1.0, maximum-scale=5.0" />
      </Head>

      {/* HERO */}
      <section style={{ minHeight: '100vh', display: 'flex', alignItems: 'center', padding: '120px 0 80px', position: 'relative', overflow: 'hidden' }}>
        <div style={{
          position: 'absolute', inset: 0, zIndex: 0,
          backgroundImage: 'linear-gradient(rgba(255,255,255,0.03) 1px, transparent 1px), linear-gradient(90deg, rgba(255,255,255,0.03) 1px, transparent 1px)',
          backgroundSize: '64px 64px',
          maskImage: 'radial-gradient(ellipse 80% 80% at 50% 40%, black 30%, transparent 100%)',
          WebkitMaskImage: 'radial-gradient(ellipse 80% 80% at 50% 40%, black 30%, transparent 100%)',
        }} />
        <div style={{ position: 'absolute', width: 700, height: 700, borderRadius: '50%', background: 'radial-gradient(circle, rgba(59,130,246,0.08) 0%, transparent 70%)', top: '50%', left: '50%', transform: 'translate(-50%,-50%)', pointerEvents: 'none' }} />

        <div className="container" style={{ position: 'relative', zIndex: 1 }}>
          <div style={{ display: 'inline-flex', alignItems: 'center', gap: 8, fontSize: 11, letterSpacing: '0.14em', textTransform: 'uppercase', color: 'var(--accent)', border: '1px solid var(--accent)', padding: '6px 16px', borderRadius: 100, marginBottom: 40 }}>
            <span style={{ width: 6, height: 6, background: 'var(--accent)', borderRadius: '50%', animation: 'pulse 2s infinite' }} />
            Available for projects worldwide (remote)
          </div>

          <h1 style={{ fontFamily: 'var(--font-display)', fontSize: 'clamp(52px, 9vw, 120px)', fontWeight: 700, letterSpacing: '-0.03em', lineHeight: 0.95, marginBottom: 32 }}>
            <span className="typewriter" style={{ display: 'block' }}>Building</span>
            <span style={{ color: 'var(--text2)' }}>intelligent</span><br />
            <span style={{ color: 'var(--accent)' }}>systems.</span>
          </h1>

          <p style={{ fontSize: 18, color: 'var(--text2)', maxWidth: 500, lineHeight: 1.75, fontWeight: 300, marginBottom: 32 }}>
            AI engineer, cybersecurity expert, and Web3 developer. CEO of PrecisionTechInsights. I build, secure, and scale digital infrastructure for the modern internet.
          </p>

          <div className="floating-skills" style={{ marginBottom: 44 }}>
            <span className="skill-badge">AI Development</span>
            <span className="skill-badge">Cybersecurity</span>
            <span className="skill-badge">Web3</span>
            <span className="skill-badge">Full-Stack</span>
            <span className="skill-badge">Infrastructure</span>
            <span className="skill-badge">Branding</span>
          </div>

          <div style={{ display: 'flex', gap: 14, alignItems: 'center', flexWrap: 'wrap' }}>
            <Link href="/services" className="btn btn-primary">My Services</Link>
            <Link href="/contact" className="btn btn-ghost">Get In Touch →</Link>
          </div>

          <div style={{ display: 'flex', gap: 48, marginTop: 72, paddingTop: 40, borderTop: '1px solid var(--border)', flexWrap: 'wrap' }}>
            <div>
              <div style={{ fontFamily: 'var(--font-display)', fontSize: 40, fontWeight: 700, letterSpacing: '-0.02em', color: 'var(--text)' }}>5K+</div>
              <div style={{ fontSize: 13, color: 'var(--muted)', marginTop: 4 }}>LinkedIn Followers</div>
            </div>
            <div>
              <div style={{ fontFamily: 'var(--font-display)', fontSize: 40, fontWeight: 700, letterSpacing: '-0.02em', color: 'var(--text)' }}>3+</div>
              <div style={{ fontSize: 13, color: 'var(--muted)', marginTop: 4 }}>Years Building</div>
            </div>
            <div>
              <div style={{ fontFamily: 'var(--font-display)', fontSize: 40, fontWeight: 700, letterSpacing: '-0.02em', color: 'var(--text)' }}>50+</div>
              <div style={{ fontSize: 13, color: 'var(--muted)', marginTop: 4 }}>Projects Delivered</div>
            </div>
          </div>
        </div>
      </section>

      {/* SKILLS */}
      <section className="section" style={{ background: 'var(--bg2)' }}>
        <div className="container">
          <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: 60, alignItems: 'end', marginBottom: 64 }}>
            <div>
              <p className="section-tag reveal">Expertise</p>
              <h2 className="section-title reveal">What I do.</h2>
            </div>
            <p style={{ marginLeft: 'auto', fontSize: 16, color: 'var(--text2)', maxWidth: 400 }} className="reveal">
              Six core domains. One developer. Building at the intersection of AI, security, and Web3.
            </p>
          </div>
          <div style={{ display: 'grid', gridTemplateColumns: 'repeat(3, 1fr)', gap: 1, background: 'var(--border)', border: '1px solid var(--border)', borderRadius: 8, overflow: 'hidden' }}>
            {skills.map((skill, i) => (
              <div key={i} className={`reveal reveal-delay-${i % 3}`}
                style={{ background: 'var(--bg2)', padding: '36px 32px', transition: 'all 0.3s', cursor: 'default', position: 'relative' }}
                onMouseEnter={e => e.currentTarget.style.transform = 'translateY(-4px)'}
                onMouseLeave={e => e.currentTarget.style.transform = 'translateY(0)'}>
                <div style={{ width: 42, height: 42, background: 'var(--accent-light)', borderRadius: 8, display: 'flex', alignItems: 'center', justifyContent: 'center', fontSize: 18, marginBottom: 16, transition: 'transform 0.3s' }}>
                  {skill.icon}
                </div>
                <h3 style={{ fontFamily: 'var(--font-display)', fontSize: 17, fontWeight: 700, marginBottom: 8 }}>{skill.title}</h3>
                <p style={{ fontSize: 14, color: 'var(--text2)', lineHeight: 1.7 }}>{skill.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* PROJECTS */}
      <section className="section">
        <div className="container">
          <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'flex-end', marginBottom: 56 }}>
            <div>
              <p className="section-tag reveal">Work</p>
              <h2 className="section-title reveal">Featured Projects</h2>
            </div>
            <Link href="/projects" className="btn btn-ghost reveal" style={{ flexShrink: 0 }}>All Projects →</Link>
          </div>
          <div style={{ display: 'grid', gridTemplateColumns: 'repeat(3, 1fr)', gap: 20 }}>
            {projects.map((project, i) => (
              <a key={i} href={project.link} target="_blank" rel="noreferrer"
                className={`reveal reveal-delay-${i}`}
                style={{ padding: '32px 28px', display: 'block', textDecoration: 'none', background: 'var(--bg2)', border: '1px solid var(--border)', borderRadius: 8, transition: 'all 0.3s' }}
                onMouseEnter={e => { e.currentTarget.style.transform = 'translateY(-4px)'; e.currentTarget.style.boxShadow = '0 8px 24px rgba(0,0,0,0.1)'; }}
                onMouseLeave={e => { e.currentTarget.style.transform = 'translateY(0)'; e.currentTarget.style.boxShadow = 'none'; }}>
                <span style={{ fontSize: 11, letterSpacing: '0.12em', textTransform: 'uppercase', color: 'var(--accent)', display: 'block', marginBottom: 12 }}>
                  {project.tag}
                </span>
                <h3 style={{ fontFamily: 'var(--font-display)', fontSize: 20, fontWeight: 700, marginBottom: 10, letterSpacing: '-0.01em' }}>
                  {project.title}
                </h3>
                <p style={{ fontSize: 14, color: 'var(--text2)', lineHeight: 1.7 }}>{project.desc}</p>
                <div style={{ marginTop: 20, fontSize: 13, color: 'var(--accent)', display: 'flex', alignItems: 'center', gap: 6 }}>
                  Visit →
                </div>
              </a>
            ))}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section style={{ background: 'var(--bg2)', borderTop: '1px solid var(--border)', borderBottom: '1px solid var(--border)' }}>
        <div style={{ padding: '80px 40px', textAlign: 'center' }} className="container">
          <h2 style={{ maxWidth: 600, margin: '0 auto 20px' }} className="section-title reveal">
            Ready to build something real?
          </h2>
          <p style={{ margin: '0 auto 36px', textAlign: 'center', fontSize: 16, color: 'var(--text2)', maxWidth: 500 }} className="reveal">
            Whether it's AI development, security audits, Web3 solutions, or complete digital infrastructure — let's discuss your project.
          </p>
          <div style={{ display: 'flex', gap: 14, justifyContent: 'center', flexWrap: 'wrap' }}>
            <Link href="/contact" className="btn btn-primary reveal">Start a Conversation</Link>
            <a href="https://wa.me/923481383350" target="_blank" rel="noreferrer" className="btn btn-ghost reveal" style={{ background: '#25D366', color: 'white', border: 'none' }}>
              WhatsApp Me
            </a>
          </div>
        </div>
      </section>
    </Layout>
  );
}
