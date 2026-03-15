import Head from 'next/head';
import Layout from '../components/Layout';
import { useEffect } from 'react';

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

const certs = [
  { name: 'Legacy Responsive Web Design V8', issuer: 'freeCodeCamp', date: 'Nov 2025', color: '#3b82f6' },
  { name: 'Programming Fundamentals', issuer: '10Pearls University', date: 'Aug 2025', color: '#8b5cf6' },
  { name: 'Object-Oriented Programming', issuer: '10Pearls University', date: 'Aug 2025', color: '#8b5cf6' },
  { name: 'Frontend Internship Completion', issuer: 'U Devs', date: 'Dec 2025', color: '#10b981' },
  { name: 'Making Web Apps With Streamlit Masterclass', issuer: 'DataCrumbs', date: 'Nov 2025', color: '#f59e0b' },
  { name: 'Building AI Voice Agent Masterclass', issuer: 'DataCrumbs', date: 'Oct 2025', color: '#f59e0b' },
  { name: 'AI Driven DevOps AIOps', issuer: 'University of Mianwali', date: 'Mar 2026', color: '#ef4444' },
  { name: 'Modern DevOps Practices Powered by AWS', issuer: 'University of Mianwali', date: 'Jan 2026', color: '#ef4444' },
  { name: 'Software Engineering Roles — Web App via Prompt Engineering', issuer: 'University of Mianwali', date: 'Feb 2026', color: '#ef4444' },
  { name: 'The Deal-Winning Framework Masterclass', issuer: 'DataCrumbs', date: 'Feb 2026', color: '#f59e0b' },
  { name: 'Digital Marketing', issuer: 'Learning With Earning', date: 'Oct 2025', color: '#06b6d4' },
  { name: 'SEO Content Writing', issuer: 'Learning With Earning', date: 'Oct 2025', color: '#06b6d4' },
  { name: 'Getting Started with Microsoft Excel', issuer: 'United Latino Students Association', date: 'Aug 2025', color: '#64748b' },
  { name: 'Computer Application', issuer: 'PBTE Lahore', date: 'Oct 2024', color: '#64748b' },
  { name: 'From Zero to Gamer: Rock Paper Scissors in Python', issuer: 'SkillEcted', date: 'Dec 2025', color: '#84cc16' },
  { name: 'Computational Intelligence & Data Science Conference', issuer: 'University of Mianwali', date: 'Feb 2025', color: '#ef4444' },
];

export default function About() {
  useReveal();

  return (
    <Layout>
      <Head>
        <title>About — Mehwish Riaz</title>
      </Head>

      {/* Hero */}
      <section className="section">
        <div className="container">
          <p className="section-tag reveal">About Me</p>
          <h1 className="section-title reveal" style={{ marginBottom: 24 }}>Who I Am</h1>

          <div style={{ display: 'grid', gridTemplateColumns: '1fr 1.6fr', gap: 60, alignItems: 'start' }}>
            <div className="reveal-slide-left">
              <div className="card" style={{ padding: 32, marginBottom: 24 }}>
                <h3 style={{ fontSize: 18, fontWeight: 700, marginBottom: 20, color: 'var(--accent)' }}>Personal Info</h3>
                {[
                  ['Name', 'Mehwish Riaz'],
                  ['Age', '20'],
                  ['Phone', '0370-6586349'],
                  ['Role', 'Frontend Developer'],
                  ['Experience', '0–1 Years'],
                  ['Education', "BS Software Engineering"],
                  ['University', 'University of Mianwali'],
                  ['Specialization', 'Web Development'],
                ].map(([k, v]) => (
                  <div key={k} style={{ display: 'flex', justifyContent: 'space-between', padding: '10px 0', borderBottom: '1px solid var(--border)' }}>
                    <span style={{ fontSize: 13, color: 'var(--muted)', fontWeight: 500 }}>{k}</span>
                    <span style={{ fontSize: 13, color: 'var(--text)', fontWeight: 600, textAlign: 'right', maxWidth: '60%' }}>{v}</span>
                  </div>
                ))}
              </div>
              <div className="card" style={{ padding: 24 }}>
                <h3 style={{ fontSize: 16, fontWeight: 700, marginBottom: 16 }}>Connect</h3>
                <div style={{ display: 'flex', flexDirection: 'column', gap: 10 }}>
                  <a href="https://www.linkedin.com/in/mehwish-riaz-40294b378" target="_blank" rel="noreferrer" className="btn btn-primary" style={{ justifyContent: 'center', fontSize: 14 }}>LinkedIn</a>
                  <a href="https://github.com/Mehwish-riaz/" target="_blank" rel="noreferrer" className="btn btn-ghost" style={{ justifyContent: 'center', fontSize: 14 }}>GitHub</a>
                </div>
              </div>
            </div>

            <div className="reveal-slide-right">
              <h2 style={{ fontSize: 26, fontWeight: 700, marginBottom: 16 }}>Frontend Developer & Software Engineering Student</h2>
              <p style={{ fontSize: 15, color: 'var(--text2)', lineHeight: 1.9, marginBottom: 16 }}>
                I'm a Software Engineering student and Frontend Developer skilled in HTML, CSS, Bootstrap, JavaScript, and React.js. I build responsive and user-friendly web interfaces and am currently expanding into Full-Stack Web Development.
              </p>
              <p style={{ fontSize: 15, color: 'var(--text2)', lineHeight: 1.9, marginBottom: 16 }}>
                I also have knowledge of C++ and Java, which strengthens my problem-solving and logical thinking. I use Git and GitHub to manage projects and maintain clean code.
              </p>
              <p style={{ fontSize: 15, color: 'var(--text2)', lineHeight: 1.9, marginBottom: 32 }}>
                I'm also proficient in MS Office and have experience creating functional, creative designs in Canva. I bring strong communication, teamwork, and problem-solving skills and am open to internships, freelance work, and remote projects.
              </p>

              <div style={{ display: 'flex', flexWrap: 'wrap', gap: 10 }}>
                {['React.js', 'JavaScript', 'HTML5', 'CSS3', 'Tailwind CSS', 'Bootstrap', 'Git & GitHub', 'Canva', 'MS Office', 'C++', 'Java', 'SEO Writing'].map(s => (
                  <span key={s} className="skill-badge">{s}</span>
                ))}
              </div>
            </div>
          </div>
        </div>
        <style jsx>{`
          @media (max-width: 768px) {
            div[style*="grid-template-columns: 1fr 1.6fr"] { grid-template-columns: 1fr !important; }
          }
        `}</style>
      </section>

      {/* Education */}
      <section style={{ padding: '80px 0', background: 'var(--bg2)', borderTop: '1px solid var(--border)' }}>
        <div className="container">
          <p className="section-tag reveal" style={{ textAlign: 'center' }}>Education</p>
          <h2 className="section-title reveal" style={{ textAlign: 'center', marginBottom: 48 }}>Academic Background</h2>
          <div style={{ maxWidth: 700, margin: '0 auto', display: 'flex', flexDirection: 'column', gap: 20 }}>
            {[
              {
                degree: 'BS Software Engineering',
                institution: 'University of Mianwali',
                period: 'Sep 2024 – Sep 2028',
                skills: ['OOP', 'Programming Fundamentals', 'Web Development', 'Software Design'],
                status: 'In Progress',
                color: '#3b82f6',
              },
              {
                degree: 'Computer Application (TEVTA Short Course)',
                institution: 'District Industrial Home Sanatzar, Mianwali',
                period: 'Jul 2024 – Sep 2024',
                skills: ['Computer Application', 'Microsoft Word', 'Microsoft Excel', 'Microsoft PowerPoint'],
                status: 'Grade: A+',
                color: '#10b981',
              },
            ].map((edu, i) => (
              <div key={i} className={`card reveal reveal-delay-${i}`} style={{ padding: 32, borderLeft: `4px solid ${edu.color}` }}>
                <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'start', flexWrap: 'wrap', gap: 8, marginBottom: 12 }}>
                  <div>
                    <h3 style={{ fontSize: 18, fontWeight: 700 }}>{edu.degree}</h3>
                    <p style={{ fontSize: 14, color: 'var(--text2)', marginTop: 4 }}>{edu.institution}</p>
                    <p style={{ fontSize: 13, color: 'var(--muted)', marginTop: 2 }}>{edu.period}</p>
                  </div>
                  <span style={{ fontSize: 12, color: edu.color, background: `${edu.color}15`, padding: '4px 12px', borderRadius: 20, fontWeight: 600, whiteSpace: 'nowrap' }}>{edu.status}</span>
                </div>
                <div style={{ display: 'flex', flexWrap: 'wrap', gap: 8, marginTop: 12 }}>
                  {edu.skills.map(s => (
                    <span key={s} style={{ fontSize: 12, padding: '3px 10px', background: 'var(--bg)', border: '1px solid var(--border)', borderRadius: 20, color: 'var(--text2)' }}>{s}</span>
                  ))}
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Certifications */}
      <section style={{ padding: '80px 0' }}>
        <div className="container">
          <p className="section-tag reveal" style={{ textAlign: 'center' }}>Credentials</p>
          <h2 className="section-title reveal" style={{ textAlign: 'center', marginBottom: 48 }}>Certifications ({certs.length})</h2>
          <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fill, minmax(280px, 1fr))', gap: 16 }}>
            {certs.map((cert, i) => (
              <div key={i} className={`card reveal reveal-delay-${i % 4}`} style={{ padding: '18px 20px', borderLeft: `4px solid ${cert.color}` }}>
                <p style={{ fontSize: 14, fontWeight: 700, marginBottom: 6, lineHeight: 1.4 }}>{cert.name}</p>
                <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center' }}>
                  <p style={{ fontSize: 12, color: 'var(--muted)' }}>{cert.issuer}</p>
                  <p style={{ fontSize: 11, color: 'var(--muted)' }}>{cert.date}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>
    </Layout>
  );
}
