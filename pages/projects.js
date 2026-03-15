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
    tag: 'HTML · CSS · Bootstrap',
    desc: 'Personal portfolio website built with HTML, CSS, and Bootstrap to showcase projects, skills, and achievements.',
    highlights: ['Responsive design', 'Bootstrap layout', 'Clean UI'],
    github: 'https://github.com/Mehwish-riaz/Personal-Portfolio-Website',
    live: null,
  },
  {
    title: 'Employee Management System',
    tag: 'React.js · JavaScript',
    desc: 'CRUD application to manage employee records using component-based architecture and React state management.',
    highlights: ['CRUD operations', 'React state', 'Component architecture'],
    github: 'https://github.com/Mehwish-riaz/employee-management-system',
    live: null,
  },
  {
    title: 'Mini Social Feed',
    tag: 'React · Tailwind CSS · React Router',
    desc: 'Modern Instagram-style social media dashboard with image/video posts, likes, comments, localStorage-based auth, and fully responsive UI.',
    highlights: ['React Router', 'Tailwind CSS', 'localStorage auth', 'Responsive'],
    github: 'https://github.com/Mehwish-riaz/mini-social-feed',
    live: 'https://mini-social-feed-psi.vercel.app',
  },
  {
    title: 'CGPA Calculator',
    tag: 'React.js · JavaScript',
    desc: 'React-based CGPA calculator for students to compute their cumulative GPA across multiple semesters.',
    highlights: ['React.js', 'GPA logic', 'Student utility'],
    github: 'https://github.com/Mehwish-riaz/cgpa-calculator-react',
    live: null,
  },
  {
    title: 'Bakery Website',
    tag: 'HTML · CSS · JavaScript',
    desc: 'Modern responsive pink-themed bakery website with hero slider, services section, menu, testimonials, and contact form.',
    highlights: ['Hero slider', 'Responsive layout', 'CSS animations'],
    github: 'https://github.com/Mehwish-riaz/Bakery-website',
    live: null,
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
                {(p.github || p.live) && (
                  <div style={{ display: 'flex', gap: 10, flexWrap: 'wrap' }}>
                    {p.github && (
                      <a href={p.github} target="_blank" rel="noreferrer" className="btn btn-ghost" style={{ alignSelf: 'flex-start', fontSize: 13 }}>
                        GitHub →
                      </a>
                    )}
                    {p.live && (
                      <a href={p.live} target="_blank" rel="noreferrer" className="btn btn-primary" style={{ alignSelf: 'flex-start', fontSize: 13 }}>
                        Live Preview →
                      </a>
                    )}
                  </div>
                )}
              </div>
            ))}
          </div>
        </div>
      </section>
    </Layout>
  );
}
