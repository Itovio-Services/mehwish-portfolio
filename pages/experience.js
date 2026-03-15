import Head from 'next/head';
import Layout from '../components/Layout';
import { useEffect } from 'react';

function useReveal() {
  useEffect(() => {
    const els = document.querySelectorAll('.reveal, .reveal-slide-left, .reveal-slide-right');
    const obs = new IntersectionObserver(entries => {
      entries.forEach(e => { if (e.isIntersecting) { e.target.classList.add('visible'); obs.unobserve(e.target); } });
    }, { threshold: 0.12 });
    els.forEach(el => obs.observe(el));
    return () => obs.disconnect();
  }, []);
}

const experiences = [
  {
    title: 'Campus Ambassador',
    company: 'DataCrumbs',
    period: 'Feb 2026 – Present',
    location: 'Remote · Karachi, Pakistan',
    type: 'Internship',
    color: '#f59e0b',
    status: 'Current',
    bullets: [
      'Representing DataCrumbs as a campus ambassador',
      'Promoting tech learning and masterclass programs',
      'Building community engagement in the tech space',
    ],
    tags: ['Community Building', 'Communication', 'Marketing'],
  },
  {
    title: 'Frontend Developer Intern',
    company: 'U Devs',
    period: 'Oct 2025 – Dec 2025',
    location: 'Remote · Lahore, Pakistan',
    type: 'Internship',
    color: '#3b82f6',
    status: '3 months',
    bullets: [
      'Built and improved responsive user interfaces using HTML, CSS, JavaScript, and React.js',
      'Resolved UI layout issues to improve overall usability',
      'Collaborated with team members using Git and GitHub for version control',
      'Gained hands-on experience in real-world frontend development workflows',
    ],
    tags: ['HTML', 'CSS', 'JavaScript', 'React.js', 'Git'],
  },
];

export default function Experience() {
  useReveal();

  return (
    <Layout>
      <Head>
        <title>Experience — Mehwish Riaz</title>
      </Head>

      <section className="section">
        <div className="container" style={{ maxWidth: 800 }}>
          <p className="section-tag reveal">Career</p>
          <h1 className="section-title reveal" style={{ marginBottom: 56 }}>Experience</h1>

          <div style={{ position: 'relative', paddingLeft: 32 }}>
            <div style={{ position: 'absolute', left: 0, top: 0, bottom: 0, width: 2, background: 'var(--border)' }} />

            {experiences.map((exp, i) => (
              <div key={i} className="reveal" style={{ position: 'relative', marginBottom: i < experiences.length - 1 ? 48 : 0 }}>
                <div style={{ position: 'absolute', left: -39, top: 4, width: 16, height: 16, borderRadius: '50%', background: exp.color, border: '3px solid var(--bg)' }} />
                <div className="card" style={{ padding: 32 }}>
                  <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'start', flexWrap: 'wrap', gap: 8, marginBottom: 8 }}>
                    <div>
                      <h3 style={{ fontSize: 20, fontWeight: 700 }}>{exp.title}</h3>
                      <p style={{ fontSize: 15, color: exp.color, fontWeight: 600, marginTop: 4 }}>{exp.company} · {exp.type}</p>
                      <p style={{ fontSize: 13, color: 'var(--muted)', marginTop: 2 }}>{exp.location}</p>
                    </div>
                    <div style={{ display: 'flex', flexDirection: 'column', alignItems: 'flex-end', gap: 6 }}>
                      <span style={{ fontSize: 13, color: 'var(--muted)', background: 'var(--bg)', border: '1px solid var(--border)', padding: '4px 12px', borderRadius: 20, whiteSpace: 'nowrap' }}>{exp.period}</span>
                      <span style={{ fontSize: 12, color: exp.color, background: `${exp.color}15`, padding: '3px 10px', borderRadius: 20, fontWeight: 600 }}>{exp.status}</span>
                    </div>
                  </div>
                  <ul style={{ paddingLeft: 20, margin: '16px 0', display: 'flex', flexDirection: 'column', gap: 8 }}>
                    {exp.bullets.map((b, j) => (
                      <li key={j} style={{ fontSize: 14, color: 'var(--text2)', lineHeight: 1.7 }}>{b}</li>
                    ))}
                  </ul>
                  <div style={{ display: 'flex', flexWrap: 'wrap', gap: 8 }}>
                    {exp.tags.map(t => (
                      <span key={t} style={{ fontSize: 12, padding: '4px 10px', background: 'var(--accent-light)', color: 'var(--accent)', borderRadius: 20, fontWeight: 500 }}>{t}</span>
                    ))}
                  </div>
                </div>
              </div>
            ))}
          </div>

          {/* Education Timeline */}
          <div style={{ marginTop: 64 }}>
            <p className="section-tag reveal">Education</p>
            <h2 className="section-title reveal" style={{ marginBottom: 40 }}>Academic Background</h2>
            <div style={{ position: 'relative', paddingLeft: 32 }}>
              <div style={{ position: 'absolute', left: 0, top: 0, bottom: 0, width: 2, background: 'var(--border)' }} />
              {[
                { degree: 'BS Software Engineering', institution: 'University of Mianwali', period: 'Sep 2024 – Sep 2028', status: 'In Progress', color: '#3b82f6' },
                { degree: 'Computer Application (TEVTA)', institution: 'District Industrial Home Sanatzar, Mianwali', period: 'Jul 2024 – Sep 2024', status: 'Grade: A+', color: '#10b981' },
              ].map((edu, i) => (
                <div key={i} className="reveal" style={{ position: 'relative', marginBottom: i === 0 ? 32 : 0 }}>
                  <div style={{ position: 'absolute', left: -39, top: 4, width: 16, height: 16, borderRadius: '50%', background: edu.color, border: '3px solid var(--bg)' }} />
                  <div className="card" style={{ padding: 24 }}>
                    <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'start', flexWrap: 'wrap', gap: 8 }}>
                      <div>
                        <h3 style={{ fontSize: 17, fontWeight: 700 }}>{edu.degree}</h3>
                        <p style={{ fontSize: 14, color: 'var(--text2)', marginTop: 4 }}>{edu.institution}</p>
                        <p style={{ fontSize: 13, color: 'var(--muted)', marginTop: 2 }}>{edu.period}</p>
                      </div>
                      <span style={{ fontSize: 12, color: edu.color, background: `${edu.color}15`, padding: '4px 12px', borderRadius: 20, fontWeight: 600 }}>{edu.status}</span>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>
    </Layout>
  );
}
