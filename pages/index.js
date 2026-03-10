import Head from 'next/head';
import Link from 'next/link';
import Layout from '../components/Layout';
import { useEffect, useState } from 'react';

function useReveal() {
  useEffect(() => {
    const els = document.querySelectorAll('.reveal, .reveal-slide-left, .reveal-slide-right, .reveal-scale, .reveal-rotate');
    const obs = new IntersectionObserver(entries => {
      entries.forEach(e => { if (e.isIntersecting) { e.target.classList.add('visible'); obs.unobserve(e.target); } });
    }, { threshold: 0.12 });
    els.forEach(el => obs.observe(el));
    return () => obs.disconnect();
  }, []);
}

function DynamicTypewriter() {
  const [currentText, setCurrentText] = useState('');
  const [currentIndex, setCurrentIndex] = useState(0);
  const [isDeleting, setIsDeleting] = useState(false);
  
  const texts = [
    'Building Personal Brand',
    'Sharing My Journey',
    'From Gaming to CEO',
    'Top 2% on TryHackMe',
    'Blue Belt in Karate',
    'Chess Enthusiast',
    'Harvard CS50 Graduate',
    'Leading Itovio Team'
  ];

  useEffect(() => {
    const timeout = setTimeout(() => {
      const current = texts[currentIndex];
      
      if (isDeleting) {
        setCurrentText(current.substring(0, currentText.length - 1));
      } else {
        setCurrentText(current.substring(0, currentText.length + 1));
      }

      if (!isDeleting && currentText === current) {
        setTimeout(() => setIsDeleting(true), 2000);
      } else if (isDeleting && currentText === '') {
        setIsDeleting(false);
        setCurrentIndex((currentIndex + 1) % texts.length);
      }
    }, isDeleting ? 50 : 100);

    return () => clearTimeout(timeout);
  }, [currentText, currentIndex, isDeleting, texts]);

  return (
    <span style={{ 
      background: 'linear-gradient(90deg, #8b5cf6, #7c3aed, #6d28d9, #7c3aed)',
      backgroundSize: '200% auto',
      WebkitBackgroundClip: 'text',
      WebkitTextFillColor: 'transparent',
      backgroundClip: 'text',
      animation: 'shine 3s linear infinite',
      display: 'inline-block',
      minHeight: '1.2em',
      borderRight: '3px solid #8b5cf6',
      paddingRight: '5px'
    }}>
      {currentText}
    </span>
  );
}

const projects = [
  { tag: 'Current Role', title: 'CEO at Itovio.com', desc: 'Leading a team delivering end-to-end IT solutions. My current focus and the culmination of my 5-year journey.', link: 'https://itovio.com' },
  { tag: 'AI Product', title: 'PrecisionFlow.io', desc: 'Autonomous AI agent I built that generates daily crypto content for Binance Square — my first successful AI automation.', link: 'https://precisionflow.io' },
  { tag: 'Company', title: 'PrecisionTechInsights', desc: 'The parent company I founded. Started as a solo venture, now evolved into Itovio with a full team.', link: 'https://precisiontechinsights.com' },
  { tag: 'Personal Brand', title: 'LinkedIn Journey', desc: 'Built 5K+ followers sharing my learning journey. Documented every step from gaming to CEO.', link: 'https://linkedin.com/in/itisharis' },
  { tag: 'Security Profile', title: 'TryHackMe - Top 2%', desc: 'Top 2% hacker on TryHackMe with 34 badges, 226 rooms completed, and 5 recognized premium certificates. Active in cybersecurity challenges.', link: 'https://tryhackme.com/p/M.Haris' },
  { tag: 'Development', title: 'GitHub Profile', desc: 'Active developer building guides and projects. Many repos are private, but I share useful tools and learning resources publicly.', link: 'https://github.com/harisxcyber' },
];

export default function Home() {
  useReveal();

  return (
    <Layout>
      <Head>
        <title>Haris — My Journey from Gaming to CEO</title>
        <meta name="description" content="5-year journey from casual gamer to CEO at Itovio. This is my personal story." />
        <meta name="viewport" content="width=device-width, initial-scale=1.0, maximum-scale=5.0" />
      </Head>

      {/* HERO */}
      <section style={{ minHeight: '100vh', display: 'flex', alignItems: 'center', padding: '120px 0 80px', position: 'relative', overflow: 'hidden' }}>
        {/* Animated gradient orbs */}
        <div style={{
          position: 'absolute',
          width: 500,
          height: 500,
          borderRadius: '50%',
          background: 'radial-gradient(circle, rgba(59,130,246,0.15) 0%, transparent 70%)',
          top: '10%',
          left: '-10%',
          animation: 'float 8s ease-in-out infinite',
          animationDelay: '0s'
        }} />
        <div style={{
          position: 'absolute',
          width: 400,
          height: 400,
          borderRadius: '50%',
          background: 'radial-gradient(circle, rgba(124,58,237,0.15) 0%, transparent 70%)',
          bottom: '10%',
          right: '-5%',
          animation: 'float 10s ease-in-out infinite',
          animationDelay: '2s'
        }} />
        
        <div style={{
          position: 'absolute', inset: 0, zIndex: 0,
          backgroundImage: 'linear-gradient(rgba(255,255,255,0.03) 1px, transparent 1px), linear-gradient(90deg, rgba(255,255,255,0.03) 1px, transparent 1px)',
          backgroundSize: '64px 64px',
          maskImage: 'radial-gradient(ellipse 80% 80% at 50% 40%, black 30%, transparent 100%)',
          WebkitMaskImage: 'radial-gradient(ellipse 80% 80% at 50% 40%, black 30%, transparent 100%)',
        }} />

        <div className="container" style={{ position: 'relative', zIndex: 1 }}>
          <div style={{ 
            display: 'inline-flex', 
            alignItems: 'center', 
            gap: 8, 
            fontSize: 11, 
            letterSpacing: '0.14em', 
            textTransform: 'uppercase', 
            color: 'var(--accent)', 
            border: '1px solid var(--accent)', 
            padding: '6px 16px', 
            borderRadius: 100, 
            marginBottom: 40,
            animation: 'fadeInUp 0.6s ease-out'
          }}>
            <span style={{ width: 6, height: 6, background: 'var(--accent)', borderRadius: '50%', animation: 'pulse 2s infinite' }} />
            CEO at Itovio.com
          </div>

          <h1 style={{ fontFamily: 'var(--font-display)', fontSize: 'clamp(42px, 8vw, 100px)', fontWeight: 700, letterSpacing: '-0.03em', lineHeight: 0.95, marginBottom: 32, animation: 'slideInUp 0.8s ease-out' }}>
            <span style={{ display: 'block', marginBottom: 8 }}>
              <span style={{ color: '#1f2937' }}>M</span>
              <span style={{ color: '#374151' }}>u</span>
              <span style={{ color: '#4b5563' }}>h</span>
              <span style={{ color: '#6b7280' }}>a</span>
              <span style={{ color: '#9ca3af' }}>m</span>
              <span style={{ color: '#6b7280' }}>m</span>
              <span style={{ color: '#4b5563' }}>a</span>
              <span style={{ color: '#374151' }}>d</span>
              <span style={{ color: 'var(--text)', marginLeft: '0.2em' }}>Haris</span>
            </span>
            <DynamicTypewriter />
          </h1>

          <p style={{ fontSize: 20, color: 'var(--text2)', maxWidth: 600, lineHeight: 1.75, fontWeight: 300, marginBottom: 32, animation: 'fadeInUp 0.8s ease-out' }}>
            My 5-year journey from casual gamer to CEO. This portfolio documents every step, failure, and breakthrough along the way.
          </p>

          <div style={{ display: 'flex', gap: 14, alignItems: 'center', flexWrap: 'wrap', marginBottom: 44, animation: 'fadeInUp 1s ease-out' }}>
            <Link href="/about" className="btn btn-primary" style={{ transition: 'all 0.3s ease', transform: 'translateY(0)' }} onMouseEnter={e => e.target.style.transform = 'translateY(-2px)'} onMouseLeave={e => e.target.style.transform = 'translateY(0)'}>Read My Story</Link>
            <Link href="/contact" className="btn btn-ghost" style={{ transition: 'all 0.3s ease', transform: 'translateY(0)' }} onMouseEnter={e => e.target.style.transform = 'translateY(-2px)'} onMouseLeave={e => e.target.style.transform = 'translateY(0)'}>Get In Touch</Link>
          </div>

          <div style={{ display: 'flex', gap: 12, flexWrap: 'wrap', animation: 'fadeInUp 1.2s ease-out' }}>
            {['Harvard CS50', 'TryHackMe Certified', 'Codecademy', '5K+ LinkedIn'].map((badge, i) => (
              <span key={i} style={{ 
                padding: '8px 16px', 
                background: 'var(--bg2)', 
                border: '1px solid var(--border)', 
                borderRadius: 20, 
                fontSize: 14, 
                color: 'var(--text2)',
                transition: 'all 0.3s ease',
                cursor: 'default'
              }}
              onMouseEnter={e => {
                e.target.style.borderColor = 'var(--accent)';
                e.target.style.transform = 'translateY(-2px)';
              }}
              onMouseLeave={e => {
                e.target.style.borderColor = 'var(--border)';
                e.target.style.transform = 'translateY(0)';
              }}>
                {badge}
              </span>
            ))}
          </div>

          <div style={{ display: 'flex', gap: 48, marginTop: 72, paddingTop: 40, borderTop: '1px solid var(--border)', flexWrap: 'wrap' }}>
            <div>
              <div style={{ fontFamily: 'var(--font-display)', fontSize: 40, fontWeight: 700, letterSpacing: '-0.02em', color: 'var(--text)' }}>2020-2026</div>
              <div style={{ fontSize: 13, color: 'var(--muted)', marginTop: 4 }}>Journey Timeline</div>
            </div>
            <div>
              <div style={{ fontFamily: 'var(--font-display)', fontSize: 40, fontWeight: 700, letterSpacing: '-0.02em', color: 'var(--text)' }}>5K+</div>
              <div style={{ fontSize: 13, color: 'var(--muted)', marginTop: 4 }}>LinkedIn Followers</div>
            </div>
            <div>
              <div style={{ fontFamily: 'var(--font-display)', fontSize: 40, fontWeight: 700, letterSpacing: '-0.02em', color: 'var(--text)' }}>CEO</div>
              <div style={{ fontSize: 13, color: 'var(--muted)', marginTop: 4 }}>at Itovio.com</div>
            </div>
          </div>
        </div>
      </section>

      {/* MY JOURNEY */}
      <section className="section" style={{ background: 'var(--bg2)' }}>
        <div className="container">
          <div style={{ marginBottom: 64 }}>
            <p className="section-tag reveal">Timeline</p>
            <h2 className="section-title reveal">My Journey</h2>
            <p style={{ fontSize: 16, color: 'var(--text2)', maxWidth: 600, marginTop: 16 }} className="reveal">
              From 2020 to 2026 — how I went from gaming to building a tech company.
            </p>
          </div>

          <div style={{ display: 'flex', flexDirection: 'column', gap: 0 }}>
            {[
              { year: '2020', title: 'Gaming Background', desc: 'Played competitive games like Age of Empires, Free Fire, King of Fighters. Good at gaming but realized it wasn\'t my long-term path.' },
              { year: '2021', title: 'Content Creation', desc: 'Started YouTube channel creating gaming and tech content. Learned video editing, storytelling, and audience building. First step into the digital world.' },
              { year: '2022', title: 'Tech Transition', desc: 'Shifted focus from gaming to tech. Started exploring web development and programming. Left gaming behind to build real skills.' },
              { year: '2023', title: 'Web Development', desc: 'Completed Coursera and Codecademy courses. Built my first websites, learned HTML, CSS, JavaScript, React. Countless late nights debugging code.' },
              { year: '2024', title: 'Harvard CS50 & Security', desc: 'Completed Harvard CS50 (Programming with Python). Started cybersecurity on TryHackMe. Deep dive into Kali Linux and penetration testing.' },
              { year: '2025', title: 'Certifications & AI', desc: 'Earned TryHackMe certifications. Built PrecisionFlow.io - my first AI agent. Founded PrecisionTechInsights. Explored crypto trading.' },
              { year: '2026', title: 'CEO at Itovio', desc: 'Launched Itovio.com as the commercial brand. Leading a team of specialists. Completed LinkedIn Learning certificates. Shifted from solo freelancer to CEO.' },
            ].map((item, i) => (
              <div key={i} className={`reveal-slide-${i % 2 === 0 ? 'left' : 'right'} reveal-delay-${i % 3}`}
                style={{ 
                  display: 'grid', 
                  gridTemplateColumns: '120px 1fr', 
                  gap: 32, 
                  padding: '32px 0', 
                  borderBottom: i < 6 ? '1px solid var(--border)' : 'none', 
                  alignItems: 'start',
                  position: 'relative'
                }}
                onMouseEnter={e => {
                  e.currentTarget.style.background = 'var(--bg2)';
                  e.currentTarget.style.borderRadius = '12px';
                  e.currentTarget.style.padding = '32px 24px';
                  e.currentTarget.style.margin = '0 -24px';
                  e.currentTarget.style.transform = 'translateX(8px)';
                }}
                onMouseLeave={e => {
                  e.currentTarget.style.background = 'transparent';
                  e.currentTarget.style.borderRadius = '0';
                  e.currentTarget.style.padding = '32px 0';
                  e.currentTarget.style.margin = '0';
                  e.currentTarget.style.transform = 'translateX(0)';
                }}>
                <div style={{ position: 'relative' }}>
                  <span style={{ 
                    fontFamily: 'var(--font-display)', 
                    fontSize: 18, 
                    color: 'var(--accent)', 
                    fontWeight: 700, 
                    paddingTop: 3,
                    position: 'relative',
                    zIndex: 2
                  }}>
                    {item.year}
                  </span>
                  <div style={{
                    position: 'absolute',
                    top: '50%',
                    right: '-16px',
                    width: 12,
                    height: 12,
                    borderRadius: '50%',
                    background: 'var(--accent)',
                    transform: 'translateY(-50%)',
                    boxShadow: '0 0 0 4px var(--bg), 0 0 0 6px var(--accent)20'
                  }} />
                </div>
                <div>
                  <h3 style={{ 
                    fontFamily: 'var(--font-display)', 
                    fontSize: 20, 
                    fontWeight: 700, 
                    marginBottom: 8,
                    transition: 'color 0.3s ease'
                  }}>
                    {item.title}
                  </h3>
                  <p style={{ fontSize: 15, color: 'var(--text2)', lineHeight: 1.7 }}>
                    {item.desc}
                  </p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* FEATURED */}
      <section className="section">
        <div className="container">
          <div style={{ marginBottom: 56 }}>
            <p className="section-tag reveal">Portfolio</p>
            <h2 className="section-title reveal">What I've Built</h2>
          </div>

          <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(320px, 1fr))', gap: 24 }}>
            {projects.map((project, i) => (
              <a key={i} href={project.link} target="_blank" rel="noreferrer"
                className={`card hover-lift reveal-scale reveal-delay-${i % 3}`}
                style={{ 
                  padding: 28, 
                  textDecoration: 'none', 
                  display: 'block',
                  background: 'var(--bg2)',
                  border: '1px solid var(--border)',
                  borderRadius: 16,
                  position: 'relative',
                  overflow: 'hidden'
                }}>
                <div style={{
                  position: 'absolute',
                  top: 0,
                  left: 0,
                  right: 0,
                  height: 4,
                  background: project.tag === 'Security Profile' ? 'linear-gradient(90deg, #ef4444, #dc2626)' : 
                             project.tag === 'Development' ? 'linear-gradient(90deg, #6b7280, #374151)' :
                             `linear-gradient(90deg, var(--accent), #7c3aed)`,
                  transform: 'translateX(-100%)',
                  transition: 'transform 0.3s ease'
                }} className="project-bar" />
                <div style={{ fontSize: 12, color: 'var(--accent)', fontWeight: 600, marginBottom: 12, textTransform: 'uppercase', letterSpacing: '0.1em' }}>
                  {project.tag}
                </div>
                <h3 style={{ 
                  fontFamily: 'var(--font-display)', 
                  fontSize: 20, 
                  fontWeight: 700, 
                  marginBottom: 12, 
                  color: 'var(--text)',
                  transition: 'color 0.3s ease'
                }}>
                  {project.title}
                </h3>
                <p style={{ fontSize: 14, color: 'var(--text2)', lineHeight: 1.7, marginBottom: 20 }}>
                  {project.desc}
                </p>
                <span style={{ 
                  fontSize: 14, 
                  color: 'var(--accent)', 
                  fontWeight: 600,
                  display: 'inline-flex',
                  alignItems: 'center',
                  gap: 4,
                  transition: 'transform 0.3s ease'
                }} className="visit-link">
                  Visit
                  <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                    <path d="M7 17L17 7M17 7H7M17 7V17"/>
                  </svg>
                </span>
              </a>
            ))}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section style={{ borderTop: '1px solid var(--border)', background: 'var(--bg2)' }}>
        <div style={{ padding: '80px 40px', textAlign: 'center' }} className="container">
          <h2 style={{ maxWidth: 600, margin: '0 auto 20px' }} className="section-title reveal">
            Want to know more?
          </h2>
          <p style={{ margin: '0 auto 36px', textAlign: 'center', fontSize: 16, color: 'var(--text2)', maxWidth: 500 }} className="reveal">
            Read my full story, see all my projects, or get in touch to work together.
          </p>
          <div style={{ display: 'flex', gap: 14, justifyContent: 'center', flexWrap: 'wrap' }}>
            <Link href="/about" className="btn btn-primary reveal">Full Story</Link>
            <Link href="/projects" className="btn btn-ghost reveal">All Projects</Link>
            <Link href="/contact" className="btn btn-ghost reveal">Contact Me</Link>
          </div>
        </div>
      </section>
    </Layout>
  );
}
