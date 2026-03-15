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

const skillGroups = [
  {
    category: 'Frontend Development',
    color: '#3b82f6',
    skills: [
      { name: 'React.js', level: 75 },
      { name: 'JavaScript', level: 80 },
      { name: 'HTML5', level: 92 },
      { name: 'CSS3', level: 90 },
    ],
  },
  {
    category: 'CSS Frameworks',
    color: '#8b5cf6',
    skills: [
      { name: 'Tailwind CSS', level: 80 },
      { name: 'Bootstrap', level: 85 },
      { name: 'Responsive Design', level: 88 },
    ],
  },
  {
    category: 'Tools & Productivity',
    color: '#10b981',
    skills: [
      { name: 'Git & GitHub', level: 72 },
      { name: 'Canva', level: 85 },
      { name: 'MS Office', level: 88 },
    ],
  },
  {
    category: 'Programming Languages',
    color: '#f59e0b',
    skills: [
      { name: 'C++', level: 55 },
      { name: 'Java', level: 50 },
      { name: 'Python (basic)', level: 40 },
    ],
  },
  {
    category: 'Digital Skills',
    color: '#06b6d4',
    skills: [
      { name: 'SEO Content Writing', level: 70 },
      { name: 'Digital Marketing', level: 65 },
      { name: 'OOP Concepts', level: 72 },
    ],
  },
  {
    category: 'Soft Skills',
    color: '#ef4444',
    skills: [
      { name: 'Communication', level: 90 },
      { name: 'Teamwork', level: 88 },
      { name: 'Problem Solving', level: 82 },
    ],
  },
];

export default function Skills() {
  useReveal();

  return (
    <Layout>
      <Head>
        <title>Skills — Mehwish Riaz</title>
      </Head>

      <section className="section">
        <div className="container">
          <p className="section-tag reveal">Expertise</p>
          <h1 className="section-title reveal" style={{ marginBottom: 16 }}>Skills & Technologies</h1>
          <p className="reveal" style={{ fontSize: 16, color: 'var(--text2)', marginBottom: 56, maxWidth: 520 }}>
            Technologies and tools I've worked with across frontend development, productivity, and beyond.
          </p>

          <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(300px, 1fr))', gap: 24 }}>
            {skillGroups.map((group, i) => (
              <div key={i} className={`card reveal reveal-delay-${i % 3}`} style={{ padding: 28 }}>
                <h3 style={{ fontSize: 16, fontWeight: 700, marginBottom: 24, color: group.color }}>{group.category}</h3>
                {group.skills.map(skill => (
                  <div key={skill.name} style={{ marginBottom: 18 }}>
                    <div style={{ display: 'flex', justifyContent: 'space-between', marginBottom: 6 }}>
                      <span style={{ fontSize: 14, fontWeight: 600 }}>{skill.name}</span>
                      <span style={{ fontSize: 12, color: 'var(--muted)' }}>{skill.level}%</span>
                    </div>
                    <div style={{ height: 6, background: 'var(--border)', borderRadius: 3, overflow: 'hidden' }}>
                      <div style={{ height: '100%', width: `${skill.level}%`, background: group.color, borderRadius: 3 }} />
                    </div>
                  </div>
                ))}
              </div>
            ))}
          </div>

          {/* All skills as badges */}
          <div style={{ marginTop: 64 }}>
            <p className="section-tag reveal" style={{ textAlign: 'center' }}>All Skills</p>
            <div className="reveal" style={{ display: 'flex', flexWrap: 'wrap', gap: 12, justifyContent: 'center', marginTop: 24 }}>
              {['React.js', 'JavaScript', 'HTML5', 'CSS3', 'Tailwind CSS', 'Bootstrap', 'Responsive Design', 'Git & GitHub', 'Canva', 'MS Word', 'MS Excel', 'MS PowerPoint', 'C++', 'Java', 'Python', 'OOP', 'SEO Writing', 'Digital Marketing', 'Communication', 'Teamwork', 'Problem Solving'].map(skill => (
                <span key={skill} className="skill-badge">{skill}</span>
              ))}
            </div>
          </div>
        </div>
      </section>
    </Layout>
  );
}
