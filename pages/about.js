import Head from 'next/head';
import Link from 'next/link';
import Image from 'next/image';
import Layout from '../components/Layout';
import { useEffect } from 'react';
import React from 'react';

function useReveal() {
  useEffect(() => {
    const els = document.querySelectorAll('.reveal, .reveal-slide-left, .reveal-slide-right, .reveal-scale, .reveal-rotate');
    const obs = new IntersectionObserver(entries => {
      entries.forEach(e => { if (e.isIntersecting) { e.target.classList.add('visible'); obs.unobserve(e.target); } });
    }, { threshold: 0.1 });
    els.forEach(el => obs.observe(el));
    return () => obs.disconnect();
  }, []);
}

const timeline = [
  { year: '2020', title: 'Gaming Background', desc: 'Played competitive games like Age of Empires, Free Fire, King of Fighters. Good at gaming but realized it wasn\'t my long-term path.' },
  { year: '2021', title: 'Content Creation Journey', desc: 'Started YouTube channel creating gaming and tech content. Learned video editing, storytelling, and audience building. First step into the digital world.' },
  { year: '2022', title: 'Tech Transition', desc: 'Shifted focus from gaming content to tech content. Started exploring web development and programming. Left gaming behind to build real skills.' },
  { year: '2023', title: 'Web Development', desc: 'Completed courses from Coursera and Codecademy. Built my first websites, learned HTML, CSS, JavaScript, React. Countless late nights debugging code.' },
  { year: '2024', title: 'Harvard CS50 & Security', desc: 'Completed Harvard CS50 (Programming with Python). Started cybersecurity journey on TryHackMe. Deep dive into Kali Linux, penetration testing, and security tools.' },
  { year: '2025', title: 'Certifications & AI', desc: 'Earned TryHackMe certifications, LinkedIn Learning certificates. Built PrecisionFlow.io - my first AI agent. Founded PrecisionTechInsights. Explored crypto trading.' },
  { year: '2026', title: 'CEO at Itovio', desc: 'Launched Itovio.com as the commercial brand. Leading a team of specialists. Shifted from solo freelancer to CEO managing multiple projects and clients.' },
];

export default function About() {
  useReveal();
  const [lightboxImage, setLightboxImage] = React.useState(null);

  const images = [
    '/haris-professional.jpg',
  ];

  return (
    <Layout>
      <Head>
        <title>About — Haris</title>
        <meta name="description" content="CEO of PrecisionTechInsights. My journey from gaming to building AI, cybersecurity, and Web3 solutions." />
      </Head>

      {/* Lightbox */}
      {lightboxImage && (
        <div 
          onClick={() => setLightboxImage(null)}
          style={{
            position: 'fixed',
            top: 0,
            left: 0,
            right: 0,
            bottom: 0,
            background: 'rgba(0,0,0,0.95)',
            zIndex: 9999,
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'center',
            padding: 20,
          }}
        >
          <button
            onClick={() => setLightboxImage(null)}
            style={{
              position: 'absolute',
              top: 20,
              right: 20,
              background: 'white',
              border: 'none',
              borderRadius: '50%',
              width: 40,
              height: 40,
              fontSize: 24,
              cursor: 'pointer',
              display: 'flex',
              alignItems: 'center',
              justifyContent: 'center',
              color: '#000',
              fontWeight: 'bold',
            }}
          >
            ✕
          </button>
          <img 
            src={lightboxImage} 
            alt="Full size" 
            style={{
              maxWidth: '100%',
              maxHeight: '100%',
              objectFit: 'contain',
              borderRadius: 8,
            }}
            onClick={(e) => e.stopPropagation()}
          />
        </div>
      )}

      {/* Hero */}
      <section style={{ padding: '100px 0 80px', borderBottom: '1px solid var(--border)', position: 'relative', overflow: 'hidden' }}>
        {/* Animated background elements */}
        <div style={{ 
          position: 'absolute', 
          inset: 0, 
          background: 'radial-gradient(ellipse 60% 60% at 30% 50%, rgba(59,130,246,0.07) 0%, transparent 70%)', 
          pointerEvents: 'none',
          animation: 'float 8s ease-in-out infinite'
        }} />
        <div style={{
          position: 'absolute',
          width: 300,
          height: 300,
          borderRadius: '50%',
          background: 'radial-gradient(circle, rgba(124,58,237,0.1) 0%, transparent 70%)',
          top: '20%',
          right: '10%',
          animation: 'float 10s ease-in-out infinite reverse'
        }} />
        
        <div className="container" style={{ position: 'relative' }}>
          <div className="about-hero-grid">
            <div>
              <p className="section-tag reveal-slide-left">About</p>
              <h1 className="section-title reveal-slide-left reveal-delay-1" style={{ fontSize: 'clamp(32px, 5vw, 68px)' }}>
                I'm Haris.<br /><span style={{ color: 'var(--text2)' }}>Building my story, one step at a time.</span>
              </h1>
              <p className="reveal-slide-left reveal-delay-2" style={{ fontSize: 17, color: 'var(--text2)', lineHeight: 1.8, fontWeight: 300, marginTop: 20 }}>
                This is my personal story — 5 years of ups, downs, failures, and breakthroughs. From casual gaming to building AI systems. Currently CEO at Itovio.com, but this site is about the journey, not the destination.
              </p>
              <div className="about-buttons reveal-slide-left reveal-delay-3">
                <Link href="/contact" className="btn btn-primary hover-lift">Work With Me</Link>
                <a href="https://linkedin.com/in/itisharis" target="_blank" rel="noreferrer" className="btn btn-ghost hover-lift">LinkedIn →</a>
              </div>
            </div>
            <div className="about-images">
              <div className="image-grid reveal-scale reveal-delay-2" style={{ display: 'flex', justifyContent: 'center', alignItems: 'center' }}>
                <div className="img-box hover-glow" onClick={() => setLightboxImage(images[0])} style={{ 
                  cursor: 'pointer', 
                  width: '100%', 
                  maxWidth: '400px', 
                  aspectRatio: '1', 
                  borderRadius: '50%', 
                  overflow: 'hidden', 
                  boxShadow: '0 20px 60px rgba(59,130,246,0.3)',
                  transition: 'all 0.3s ease',
                  border: '4px solid var(--accent)'
                }}>
                  <img src={images[0]} alt="Muhammad Haris - CEO of PrecisionTechInsights" style={{ width: '100%', height: '100%', objectFit: 'cover', transition: 'transform 0.3s ease' }} 
                    onMouseEnter={e => e.target.style.transform = 'scale(1.05)'}
                    onMouseLeave={e => e.target.style.transform = 'scale(1)'}
                  />
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Story */}
      <section className="section" style={{ background: 'var(--bg2)' }}>
        <div className="container">
          <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: 80 }}>
            <div>
              <p className="section-tag reveal">My Story</p>
              <h2 className="section-title reveal" style={{ fontSize: 40 }}>Why I do this.</h2>
            </div>
            <div style={{ display: 'flex', flexDirection: 'column', gap: 20 }}>
              {[
                "I started with curiosity — about how systems work, how AI makes decisions, how to secure infrastructure. One question led to three more, and somewhere along the way I found myself building real solutions instead of just studying them.",
                "What began as a gaming journey evolved into tech content creation, then web development, and finally into building PrecisionTechInsights. I've built AI products that run autonomously, set up hosting infrastructure that powers real businesses, and helped clients secure their systems.",
                "Today, I lead PrecisionTechInsights as CEO, offering everything from AI development to cybersecurity audits, Web3 solutions, and complete brand creation. The goal isn't to be impressive — it's to be useful.",
                "I work with a team of specialists when projects demand it, but I'm hands-on with every client. You work with me directly, not through layers of account managers.",
              ].map((p, i) => (
                <p key={i} className={`reveal reveal-delay-${i % 3}`} style={{ fontSize: 16, color: i === 0 ? 'var(--text)' : 'var(--text2)', lineHeight: 1.8, fontWeight: 300 }}>{p}</p>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Timeline */}
      <section className="section">
        <div className="container">
          <p className="section-tag reveal">Journey</p>
          <h2 className="section-title reveal" style={{ marginBottom: 56 }}>How I got here.</h2>
          <div style={{ display: 'flex', flexDirection: 'column', gap: 0 }}>
            {timeline.map((item, i) => (
              <div key={i} className={`reveal reveal-delay-${i % 3}`}
                style={{ display: 'grid', gridTemplateColumns: '140px 1fr', gap: 32, padding: '28px 0', borderBottom: i < timeline.length - 1 ? '1px solid var(--border)' : 'none', alignItems: 'start' }}>
                <span style={{ fontFamily: 'var(--font-display)', fontSize: 14, color: 'var(--accent)', fontWeight: 600, paddingTop: 3 }}>{item.year}</span>
                <div>
                  <h3 style={{ fontFamily: 'var(--font-display)', fontSize: 18, fontWeight: 700, marginBottom: 6 }}>{item.title}</h3>
                  <p style={{ fontSize: 14, color: 'var(--text2)', lineHeight: 1.7 }}>{item.desc}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Personal Life */}
      <section className="section" style={{ background: 'var(--bg2)' }}>
        <div className="container">
          <p className="section-tag reveal">Beyond Tech</p>
          <h2 className="section-title reveal" style={{ marginBottom: 56 }}>Life outside code.</h2>
          <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: 60 }}>
            <div className="reveal">
              <h3 style={{ fontFamily: 'var(--font-display)', fontSize: 20, fontWeight: 700, marginBottom: 16, color: 'var(--accent)' }}>Education & Sports</h3>
              <p style={{ fontSize: 15, color: 'var(--text2)', lineHeight: 1.8, marginBottom: 16 }}>
                Currently pursuing my A Levels (2026-2028), balancing academics with building a tech company. Blue belt in Karate with 5 years of experience and competitive fights under my belt.
              </p>
              <p style={{ fontSize: 15, color: 'var(--text2)', lineHeight: 1.8 }}>
                Strong player in football, badminton, and table tennis. Regular chess player — <a href="https://link.chess.com/friend/2ittI5" target="_blank" rel="noreferrer" style={{ color: 'var(--accent)', textDecoration: 'underline' }}>connect with me on Chess.com</a>.
              </p>
            </div>
            <div className="reveal reveal-delay-1">
              <h3 style={{ fontFamily: 'var(--font-display)', fontSize: 20, fontWeight: 700, marginBottom: 16, color: 'var(--accent)' }}>Interests & Background</h3>
              <p style={{ fontSize: 15, color: 'var(--text2)', lineHeight: 1.8, marginBottom: 16 }}>
                Avid book reader and ex-gamer. Left gaming in 2023 after being deep into e-sports — pro player in Age of Empires, Free Fire, King of Fighters, and all Adobe games before 2020.
              </p>
              <p style={{ fontSize: 15, color: 'var(--text2)', lineHeight: 1.8 }}>
                Bilingual in Urdu, proficient in English, learning Arabic, and know basics of Turkish. Using Linux for the past 2 years — mainly Kali and Ubuntu.
              </p>
            </div>
          </div>
          <div style={{ marginTop: 40, padding: 32, background: 'var(--bg)', border: '1px solid var(--border)', borderRadius: 8, textAlign: 'center' }} className="reveal reveal-delay-2">
            <p style={{ fontSize: 16, color: 'var(--text2)', marginBottom: 20 }}>
              Want to connect casually or collaborate on something interesting?
            </p>
            <a href="https://instagram.com/m.h.aris" target="_blank" rel="noreferrer" className="btn btn-primary">
              Let's chat on Instagram →
            </a>
          </div>
        </div>
      </section>

      {/* Certifications & Achievements */}
      <section className="section" style={{ background: 'var(--bg2)' }}>
        <div className="container">
          <p className="section-tag reveal">Certifications</p>
          <h2 className="section-title reveal" style={{ marginBottom: 56 }}>What I've earned along the way.</h2>
          <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(300px, 1fr))', gap: 32 }}>
            {[
              { 
                institution: 'Harvard University', 
                cert: 'CS50: Programming with Python', 
                year: '2024',
                desc: 'Comprehensive computer science fundamentals, algorithms, data structures, and Python programming.',
                icon: <div style={{width: 48, height: 48, background: 'linear-gradient(135deg, #667eea 0%, #764ba2 100%)', borderRadius: 12, display: 'flex', alignItems: 'center', justifyContent: 'center', color: 'white', fontSize: 20, fontWeight: 'bold'}}>H</div>
              },
              { 
                institution: 'TryHackMe', 
                cert: 'Cybersecurity Certifications', 
                year: '2024-2025',
                desc: 'Multiple certifications in penetration testing, ethical hacking, and cybersecurity fundamentals.',
                icon: <div style={{width: 48, height: 48, background: 'linear-gradient(135deg, #fa709a 0%, #fee140 100%)', borderRadius: 12, display: 'flex', alignItems: 'center', justifyContent: 'center', color: 'white', fontSize: 20, fontWeight: 'bold'}}>T</div>
              },
              { 
                institution: 'Codecademy', 
                cert: 'Full-Stack Web Development', 
                year: '2023',
                desc: 'Complete web development track covering HTML, CSS, JavaScript, React, Node.js, and databases.',
                icon: <div style={{width: 48, height: 48, background: 'linear-gradient(135deg, #4facfe 0%, #00f2fe 100%)', borderRadius: 12, display: 'flex', alignItems: 'center', justifyContent: 'center', color: 'white', fontSize: 20, fontWeight: 'bold'}}>C</div>
              },
              { 
                institution: 'Coursera', 
                cert: 'Web Development Specialization', 
                year: '2023',
                desc: 'University-level courses in web technologies, responsive design, and modern development practices.',
                icon: <div style={{width: 48, height: 48, background: 'linear-gradient(135deg, #a8edea 0%, #fed6e3 100%)', borderRadius: 12, display: 'flex', alignItems: 'center', justifyContent: 'center', color: '#333', fontSize: 20, fontWeight: 'bold'}}>C</div>
              },
              { 
                institution: 'LinkedIn Learning', 
                cert: 'Multiple Technology Courses', 
                year: '2026',
                desc: 'Continuous learning in AI, cybersecurity, business development, and leadership skills.',
                icon: <div style={{width: 48, height: 48, background: 'linear-gradient(135deg, #ffecd2 0%, #fcb69f 100%)', borderRadius: 12, display: 'flex', alignItems: 'center', justifyContent: 'center', color: '#333', fontSize: 20, fontWeight: 'bold'}}>L</div>
              },
              { 
                institution: 'Personal Achievement', 
                cert: '5K+ LinkedIn Followers', 
                year: '2025-2026',
                desc: 'Built a technical audience by sharing my learning journey, insights, and authentic experiences.',
                icon: <div style={{width: 48, height: 48, background: 'linear-gradient(135deg, #667eea 0%, #764ba2 100%)', borderRadius: 12, display: 'flex', alignItems: 'center', justifyContent: 'center', color: 'white', fontSize: 20, fontWeight: 'bold'}}>5K</div>
              },
            ].map((cert, i) => (
              <div key={i} className={`reveal reveal-delay-${i % 3}`}
                style={{ 
                  background: 'var(--bg)', 
                  border: '1px solid var(--border)', 
                  borderRadius: 12, 
                  padding: 24,
                  transition: 'all 0.3s ease',
                  cursor: 'pointer'
                }}
                onMouseEnter={(e) => {
                  e.target.style.borderColor = 'var(--accent)';
                  e.target.style.transform = 'translateY(-4px)';
                }}
                onMouseLeave={(e) => {
                  e.target.style.borderColor = 'var(--border)';
                  e.target.style.transform = 'translateY(0)';
                }}
              >
                <div style={{ fontSize: 32, marginBottom: 16 }}>{cert.icon}</div>
                <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'start', marginBottom: 8 }}>
                  <h3 style={{ fontFamily: 'var(--font-display)', fontSize: 16, fontWeight: 700, color: 'var(--text)' }}>
                    {cert.cert}
                  </h3>
                  <span style={{ fontSize: 12, color: 'var(--accent)', fontWeight: 600 }}>{cert.year}</span>
                </div>
                <p style={{ fontSize: 13, color: 'var(--accent)', marginBottom: 8, fontWeight: 600 }}>
                  {cert.institution}
                </p>
                <p style={{ fontSize: 14, color: 'var(--text2)', lineHeight: 1.6 }}>
                  {cert.desc}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Tech Stack */}
      <section className="section">
        <div className="container">
          <p className="section-tag reveal">Tech Stack</p>
          <h2 className="section-title reveal" style={{ marginBottom: 16 }}>What I've Worked With</h2>
          <p style={{ fontSize: 16, color: 'var(--text2)', maxWidth: 600, marginBottom: 56 }} className="reveal">
            Technologies and tools I've used throughout my journey from 2020 to 2026.
          </p>
          <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(280px, 1fr))', gap: 24 }}>
            {[
              { cat: 'Languages', items: ['Python', 'JavaScript', 'TypeScript', 'PHP', 'Go', 'Rust'], color: '#667eea' },
              { cat: 'Frontend', items: ['React', 'Next.js', 'Vue.js', 'TailwindCSS', 'HTML/CSS'], color: '#f093fb' },
              { cat: 'Backend', items: ['Node.js', 'Express', 'Django', 'Flask', 'Laravel'], color: '#4facfe' },
              { cat: 'AI & Tools', items: ['OpenAI', 'Groq', 'Claude', 'LangChain', 'n8n'], color: '#fa709a' },
              { cat: 'Databases', items: ['MongoDB', 'PostgreSQL', 'MySQL', 'SQLite', 'Redis'], color: '#a8edea' },
              { cat: 'DevOps', items: ['Docker', 'AWS', 'Vercel', 'GitHub Actions', 'Linux'], color: '#ffecd2' },
              { cat: 'Security', items: ['Kali Linux', 'Burp Suite', 'Metasploit', 'Nmap', 'Wireshark'], color: '#ff9a9e' },
              { cat: 'Web3', items: ['Solidity', 'Ethers.js', 'Web3.js', 'Hardhat', 'MetaMask'], color: '#a18cd1' },
            ].map((stack, i) => (
              <div key={i} className={`reveal reveal-delay-${i % 4}`}
                style={{ 
                  background: 'var(--bg2)', 
                  border: '1px solid var(--border)', 
                  borderRadius: 16, 
                  padding: 28,
                  transition: 'all 0.3s ease',
                  cursor: 'default',
                  position: 'relative',
                  overflow: 'hidden'
                }}
                onMouseEnter={e => {
                  e.target.style.transform = 'translateY(-4px)';
                  e.target.style.borderColor = stack.color;
                  e.target.style.boxShadow = `0 8px 32px ${stack.color}20`;
                }}
                onMouseLeave={e => {
                  e.target.style.transform = 'translateY(0)';
                  e.target.style.borderColor = 'var(--border)';
                  e.target.style.boxShadow = 'none';
                }}>
                <div style={{
                  position: 'absolute',
                  top: 0,
                  left: 0,
                  right: 0,
                  height: 4,
                  background: `linear-gradient(90deg, ${stack.color}, ${stack.color}80)`,
                  borderRadius: '16px 16px 0 0'
                }} />
                <h3 style={{ 
                  fontFamily: 'var(--font-display)', 
                  fontSize: 18, 
                  fontWeight: 700, 
                  marginBottom: 16, 
                  color: stack.color,
                  display: 'flex',
                  alignItems: 'center',
                  gap: 8
                }}>
                  <div style={{
                    width: 8,
                    height: 8,
                    borderRadius: '50%',
                    background: stack.color
                  }} />
                  {stack.cat}
                </h3>
                <div style={{ display: 'flex', flexDirection: 'column', gap: 8 }}>
                  {stack.items.map((item, j) => (
                    <span key={j} style={{ 
                      fontSize: 14, 
                      color: 'var(--text2)',
                      padding: '4px 0',
                      borderLeft: `2px solid ${stack.color}20`,
                      paddingLeft: 12,
                      transition: 'all 0.2s ease'
                    }}
                    onMouseEnter={e => {
                      e.target.style.borderLeftColor = stack.color;
                      e.target.style.color = 'var(--text)';
                    }}
                    onMouseLeave={e => {
                      e.target.style.borderLeftColor = `${stack.color}20`;
                      e.target.style.color = 'var(--text2)';
                    }}>
                      {item}
                    </span>
                  ))}
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section style={{ borderTop: '1px solid var(--border)', background: 'var(--bg2)' }}>
        <div style={{ padding: '80px 40px', textAlign: 'center' }} className="container">
          <h2 style={{ maxWidth: 600, margin: '0 auto 20px' }} className="section-title reveal">
            Ready to work together?
          </h2>
          <p style={{ margin: '0 auto 36px', textAlign: 'center', fontSize: 16, color: 'var(--text2)', maxWidth: 500 }} className="reveal">
            Whether you need AI development, security audits, Web3 solutions, or complete digital infrastructure — let's discuss your project.
          </p>
          <div style={{ display: 'flex', gap: 14, justifyContent: 'center', flexWrap: 'wrap' }}>
            <Link href="/contact" className="btn btn-primary reveal">Get Started</Link>
            <a href="https://wa.me/923481383350" target="_blank" rel="noreferrer" className="btn btn-ghost reveal" style={{ background: '#25D366', color: 'white', border: 'none' }}>
              WhatsApp Me
            </a>
          </div>
        </div>
      </section>
    </Layout>
  );
}
