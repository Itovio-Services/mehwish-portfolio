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

const projects = [
  {
    title: 'Personal Portfolio Website',
    tag: 'HTML · CSS · JavaScript',
    desc: 'Designed and developed a fully responsive personal portfolio website to showcase my skills, projects, and experience. Focused on clean UI and smooth user experience.',
    highlights: ['Responsive design', 'Clean UI/UX', 'Cross-browser compatible'],
    github: 'https://github.com/Mehwish-riaz/',
  },
  {
    title: 'Employee Management System',
    tag: 'React.js',
    desc: 'Built a CRUD application to manage employee records. Implemented component-based architecture, state management, and a clean dashboard interface.',
    highlights: ['CRUD operations', 'React state management', 'Component architecture'],
    github: 'https://github.com/Mehwish-riaz/',
  },
  {
    title: 'Frontend Internship — U Devs',
    tag: 'Internship · Oct–Dec 2025',
    desc: 'Contributed to building and improving responsive user interfaces during a 3-month frontend internship. Resolved UI layout issues and improved overall usability.',
    highlights: ['Responsive UI development', 'Bug fixing & layout improvements', 'Team collaboration'],
    github: null,
  },
];

export default function Projects() {
  useReveal();

  return (
    <Layout>
      <Head>
        <title>Projects — Mehwish Riaz</title>
      </Head>

      <section className="section">
        <div className="container">
          <p className="section-tag reveal">Portfolio</p>
          <h1 className="section-title reveal" style={{ marginBottom: 16 }}>My Projects</h1>
          <p className="reveal" style={{ fontSize: 16, color: 'var(--text2)', marginBottom: 56, maxWidth: 560 }}>
            A collection of projects I've built to strengthen my frontend development skills.
          </p>

          <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(320px, 1fr))', gap: 28 }}>
            {projects.map((p, i) => (
              <div key={i} className={`card reveal reveal-delay-${i}`} style={{ padding: 32, display: 'flex', flexDirection: 'column' }}>
                <span style={{ fontSize: 12, fontWeight: 600, color: 'var(--accent)', textTransform: 'uppercase', letterSpacing: '0.1em', marginBottom: 12 }}>{p.tag}</span>
                <h3 style={{ fontSize: 22, fontWeight: 700, marginBottom: 12 }}>{p.title}</h3>
                <p style={{ fontSize: 14, color: 'var(--text2)', lineHeight: 1.7, marginBottom: 20, flex: 1 }}>{p.desc}</p>
                <div style={{ display: 'flex', flexWrap: 'wrap', gap: 8, marginBottom: 20 }}>
                  {p.highlights.map(h => (
                    <span key={h} style={{ fontSize: 12, padding: '4px 10px', background: 'var(--accent-light)', color: 'var(--accent)', borderRadius: 20, fontWeight: 500 }}>{h}</span>
                  ))}
                </div>
                {p.github && (
                  <a href={p.github} target="_blank" rel="noreferrer" className="btn btn-ghost" style={{ alignSelf: 'flex-start', fontSize: 13 }}>
                    View on GitHub →
                  </a>
                )}
              </div>
            ))}
          </div>
        </div>
      </section>
    </Layout>
  );
}
