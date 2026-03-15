import Head from 'next/head';
import Link from 'next/link';
import Layout from '../components/Layout';
import { useEffect, useState } from 'react';

function useReveal() {
  useEffect(() => {
    const els = document.querySelectorAll('.reveal, .reveal-slide-left, .reveal-slide-right, .reveal-scale');
    const obs = new IntersectionObserver(entries => {
      entries.forEach(e => { if (e.isIntersecting) { e.target.classList.add('visible'); obs.unobserve(e.target); } });
    }, { threshold: 0.12 });
    els.forEach(el => obs.observe(el));
    return () => obs.disconnect();
  }, []);
}

function Typewriter() {
  const [text, setText] = useState('');
  const [idx, setIdx] = useState(0);
  const [deleting, setDeleting] = useState(false);
  const words = ['Frontend Developer', 'React.js Enthusiast', 'UI/UX Focused', 'Problem Solver', 'Software Engineering Student'];

  useEffect(() => {
    const current = words[idx];
    const timeout = setTimeout(() => {
      if (deleting) {
        setText(current.substring(0, text.length - 1));
        if (text.length === 1) { setDeleting(false); setIdx((idx + 1) % words.length); }
      } else {
        setText(current.substring(0, text.length + 1));
        if (text === current) setTimeout(() => setDeleting(true), 2000);
      }
    }, deleting ? 50 : 100);
    return () => clearTimeout(timeout);
  }, [text, idx, deleting]);

  return (
    <span style={{ color: 'var(--accent)', borderRight: '3px solid var(--accent)', paddingRight: 4 }}>
      {text}
    </span>
  );
}

export default function Home() {
  useReveal();

  return (
    <Layout>
      <Head>
        <title>Mehwish Riaz — Frontend Developer</title>
        <meta name="description" content="Frontend Developer specializing in React.js, JavaScript, and responsive web design." />
      </Head>

      {/* Hero */}
      <section className="section" style={{ minHeight: '90vh', display: 'flex', alignItems: 'center' }}>
        <div className="container">
          <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: 60, alignItems: 'center' }}>
            <div>
              <p className="section-tag reveal">Frontend Developer</p>
              <h1 className="reveal" style={{ fontFamily: 'var(--font-display)', fontSize: 'clamp(40px, 5vw, 64px)', fontWeight: 700, lineHeight: 1.1, marginBottom: 16 }}>
                Hi, I'm<br />
                <span style={{ color: 'var(--accent)' }}>Mehwish Riaz</span>
              </h1>
              <h2 className="reveal reveal-delay-1" style={{ fontSize: 'clamp(18px, 2.5vw, 26px)', fontWeight: 400, color: 'var(--text2)', marginBottom: 24, minHeight: 36 }}>
                <Typewriter />
              </h2>
              <p className="reveal reveal-delay-2" style={{ fontSize: 16, color: 'var(--text2)', lineHeight: 1.8, marginBottom: 36, maxWidth: 480 }}>
                A passionate frontend developer with hands-on experience building responsive, user-friendly interfaces. Currently pursuing a Bachelor's in Software Engineering and seeking internship or entry-level opportunities.
              </p>
              <div className="reveal reveal-delay-3" style={{ display: 'flex', gap: 16, flexWrap: 'wrap' }}>
                <Link href="/projects" className="btn btn-primary">View My Work</Link>
                <Link href="/contact" className="btn btn-ghost">Get In Touch</Link>
                <a href="https://github.com/Mehwish-riaz/" target="_blank" rel="noreferrer" className="btn btn-ghost">GitHub</a>
              </div>
            </div>

            <div className="reveal-slide-right" style={{ display: 'flex', flexDirection: 'column', gap: 16 }}>
              {/* Stats */}
              {[
                { label: 'Projects Completed', value: '5+' },
                { label: 'Internship Experience', value: 'U Devs' },
                { label: 'Certifications', value: '16+' },
                { label: 'Specialization', value: 'Web Dev' },
              ].map((stat, i) => (
                <div key={i} className="card" style={{ padding: '20px 24px', display: 'flex', justifyContent: 'space-between', alignItems: 'center' }}>
                  <span style={{ fontSize: 14, color: 'var(--text2)' }}>{stat.label}</span>
                  <span style={{ fontSize: 18, fontWeight: 700, color: 'var(--accent)' }}>{stat.value}</span>
                </div>
              ))}
            </div>
          </div>
        </div>
        <style jsx>{`
          @media (max-width: 768px) {
            div[style*="grid-template-columns: 1fr 1fr"] { grid-template-columns: 1fr !important; }
          }
        `}</style>
      </section>

      {/* Skills Preview */}
      <section style={{ padding: '80px 0', background: 'var(--bg2)', borderTop: '1px solid var(--border)', borderBottom: '1px solid var(--border)' }}>
        <div className="container">
          <p className="section-tag reveal" style={{ textAlign: 'center' }}>Tech Stack</p>
          <h2 className="section-title reveal" style={{ textAlign: 'center', marginBottom: 48 }}>Skills & Technologies</h2>
          <div className="reveal" style={{ display: 'flex', flexWrap: 'wrap', gap: 12, justifyContent: 'center' }}>
            {['React.js', 'JavaScript', 'HTML5', 'CSS3', 'Tailwind CSS', 'Bootstrap', 'Git & GitHub', 'Responsive Design', 'C++', 'Java'].map(skill => (
              <span key={skill} className="skill-badge">{skill}</span>
            ))}
          </div>
        </div>
      </section>

      {/* Projects Preview */}
      <section className="section">
        <div className="container">
          <p className="section-tag reveal">Portfolio</p>
          <h2 className="section-title reveal" style={{ marginBottom: 48 }}>Featured Projects</h2>
          <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(300px, 1fr))', gap: 24 }}>
            {[
              { title: 'Personal Portfolio Website', tag: 'HTML/CSS/JS', desc: 'Fully responsive portfolio website showcasing skills and projects with clean, modern design.' },
              { title: 'Employee Management System', tag: 'React.js', desc: 'CRUD application to manage employee records using component-based architecture and state management.' },
              { title: 'Frontend Internship Projects', tag: 'U Devs · 2025', desc: 'Contributed to building and improving responsive UIs during internship at U Devs (Oct–Dec 2025).' },
            ].map((p, i) => (
              <div key={i} className={`card reveal reveal-delay-${i}`} style={{ padding: 28 }}>
                <span style={{ fontSize: 12, fontWeight: 600, color: 'var(--accent)', textTransform: 'uppercase', letterSpacing: '0.1em' }}>{p.tag}</span>
                <h3 style={{ fontSize: 20, fontWeight: 700, margin: '12px 0 10px' }}>{p.title}</h3>
                <p style={{ fontSize: 14, color: 'var(--text2)', lineHeight: 1.7 }}>{p.desc}</p>
              </div>
            ))}
          </div>
          <div className="reveal" style={{ textAlign: 'center', marginTop: 40 }}>
            <Link href="/projects" className="btn btn-primary">View All Projects</Link>
          </div>
        </div>
      </section>

      {/* Certifications Preview */}
      <section style={{ padding: '80px 0', background: 'var(--bg2)', borderTop: '1px solid var(--border)', borderBottom: '1px solid var(--border)' }}>
        <div className="container">
          <p className="section-tag reveal" style={{ textAlign: 'center' }}>Credentials</p>
          <h2 className="section-title reveal" style={{ textAlign: 'center', marginBottom: 12 }}>16+ Certifications</h2>
          <p className="reveal" style={{ textAlign: 'center', color: 'var(--text2)', marginBottom: 40, fontSize: 15 }}>
            From freeCodeCamp, 10Pearls University, DataCrumbs, University of Mianwali, and more.
          </p>
          <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(240px, 1fr))', gap: 14, marginBottom: 36 }}>
            {[
              { name: 'Legacy Responsive Web Design', issuer: 'freeCodeCamp', color: '#3b82f6' },
              { name: 'Programming Fundamentals', issuer: '10Pearls University', color: '#8b5cf6' },
              { name: 'Object-Oriented Programming', issuer: '10Pearls University', color: '#8b5cf6' },
              { name: 'Frontend Internship Completion', issuer: 'U Devs', color: '#10b981' },
              { name: 'Making Web Apps With Streamlit', issuer: 'DataCrumbs', color: '#f59e0b' },
              { name: 'Building AI Voice Agent Masterclass', issuer: 'DataCrumbs', color: '#f59e0b' },
            ].map((cert, i) => (
              <div key={i} className={`card reveal reveal-delay-${i % 3}`} style={{ padding: '14px 18px', borderLeft: `3px solid ${cert.color}` }}>
                <p style={{ fontSize: 13, fontWeight: 700, marginBottom: 4, lineHeight: 1.4 }}>{cert.name}</p>
                <p style={{ fontSize: 12, color: 'var(--muted)' }}>{cert.issuer}</p>
              </div>
            ))}
          </div>
          <div className="reveal" style={{ textAlign: 'center' }}>
            <a href="https://www.linkedin.com/in/mehwish-riaz-40294b378/details/certifications/" target="_blank" rel="noreferrer" className="btn btn-primary">
              View All 16 Verified Certificates on LinkedIn →
            </a>
          </div>
        </div>
      </section>

      {/* CTA */}
      <section style={{ padding: '80px 0', background: 'var(--accent)', color: 'white' }}>
        <div className="container" style={{ textAlign: 'center' }}>
          <h2 className="reveal" style={{ fontFamily: 'var(--font-display)', fontSize: 'clamp(28px, 4vw, 48px)', fontWeight: 700, marginBottom: 16, color: 'white' }}>
            Open to Opportunities
          </h2>
          <p className="reveal" style={{ fontSize: 18, marginBottom: 36, opacity: 0.9 }}>
            Looking for internship or entry-level frontend developer roles.
          </p>
          <div className="reveal" style={{ display: 'flex', gap: 16, justifyContent: 'center', flexWrap: 'wrap' }}>
            <Link href="/contact" style={{ background: 'white', color: 'var(--accent)', padding: '14px 28px', borderRadius: 8, fontWeight: 600, textDecoration: 'none', fontSize: 15 }}>
              Hire Me
            </Link>
            <a href="https://www.linkedin.com/in/mehwish-riaz-40294b378" target="_blank" rel="noreferrer" style={{ background: 'transparent', color: 'white', padding: '14px 28px', borderRadius: 8, fontWeight: 600, textDecoration: 'none', fontSize: 15, border: '2px solid white' }}>
              LinkedIn Profile
            </a>
          </div>
        </div>
      </section>
    </Layout>
  );
}
