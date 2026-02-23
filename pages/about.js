import Head from 'next/head';
import Link from 'next/link';
import Image from 'next/image';
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

const timeline = [
  { year: '2021 & Before', title: 'Gaming Era', desc: 'Deep into e-gaming as a pro player — Age of Empires, Free Fire, King of Fighters, and all Adobe games. Built competitive gaming skills and strategic thinking.' },
  { year: '2022', title: 'Gaming & Tech Content', desc: 'Started YouTube channel creating gaming and tech content. Transitioned from gaming to tech, left gaming behind to focus on building real skills.' },
  { year: '2023', title: 'Web Development Journey', desc: 'Created tech content on YouTube and completed web development courses from Coursera. Started building websites and learning programming fundamentals.' },
  { year: '2024', title: 'CS50 & Cybersecurity', desc: 'Completed CS50 (Programming with Python) and started learning cybersecurity on TryHackMe. Deep dive into Kali Linux and security tools.' },
  { year: '2025', title: 'Founded PrecisionTechInsights', desc: 'Launched my tech company. Gained TryHackMe certifications, learned AI agent integration, created PrecisionFlow.io, and explored crypto spot trading with reasonable profits.' },
  { year: '2026', title: 'Full-Service Platform', desc: 'Transformed into a complete digital solutions platform. CEO of PrecisionTechInsights offering AI, cybersecurity, Web3, and infrastructure services.' },
];

export default function About() {
  useReveal();
  return (
    <Layout>
      <Head>
        <title>About — Haris</title>
        <meta name="description" content="CEO of PrecisionTechInsights. My journey from gaming to building AI, cybersecurity, and Web3 solutions." />
      </Head>

      {/* Hero */}
      <section style={{ padding: '100px 0 80px', borderBottom: '1px solid var(--border)', position: 'relative', overflow: 'hidden' }}>
        <div style={{ position: 'absolute', inset: 0, background: 'radial-gradient(ellipse 60% 60% at 30% 50%, rgba(59,130,246,0.07) 0%, transparent 70%)', pointerEvents: 'none' }} />
        <div className="container" style={{ position: 'relative' }}>
          <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: 80, alignItems: 'center' }}>
            <div>
              <p className="section-tag">About</p>
              <h1 className="section-title" style={{ fontSize: 'clamp(40px, 5vw, 68px)' }}>
                I'm Haris.<br /><span style={{ color: 'var(--text2)' }}>Building intelligent systems.</span>
              </h1>
              <p style={{ fontSize: 17, color: 'var(--text2)', lineHeight: 1.8, fontWeight: 300, marginTop: 20 }}>
                CEO of PrecisionTechInsights. I operate at the intersection of AI, cybersecurity, Web3, and web infrastructure — delivering complete digital solutions from Karachi, Pakistan.
              </p>
              <div style={{ display: 'flex', gap: 14, marginTop: 32 }}>
                <Link href="/contact" className="btn btn-primary">Work With Me</Link>
                <a href="https://linkedin.com/in/itisharis" target="_blank" rel="noreferrer" className="btn btn-ghost">LinkedIn →</a>
              </div>
            </div>
            <div style={{ position: 'relative' }}>
              <div style={{ display: 'grid', gridTemplateColumns: 'repeat(3, 1fr)', gap: 8 }}>
                {[1, 2, 3, 4, 5].map(i => (
                  <div key={i} style={{ position: 'relative', aspectRatio: '1/1', borderRadius: 8, overflow: 'hidden', border: '2px solid var(--border)', background: 'var(--bg2)' }}>
                    <Image src={`/images/haris-${i}.${i === 1 ? 'png' : 'jpg'}`} alt="Haris" fill style={{ objectFit: 'cover' }} />
                  </div>
                ))}
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

      {/* Tech Stack */}
      <section className="section">
        <div className="container">
          <p className="section-tag reveal">Tech Stack</p>
          <h2 className="section-title reveal" style={{ marginBottom: 56 }}>What I work with.</h2>
          <div style={{ display: 'grid', gridTemplateColumns: 'repeat(4, 1fr)', gap: 20 }}>
            {[
              { cat: 'Languages', items: ['Python', 'JavaScript', 'TypeScript', 'PHP', 'Go', 'Rust'] },
              { cat: 'Frontend', items: ['React', 'Next.js', 'Vue.js', 'TailwindCSS', 'HTML/CSS'] },
              { cat: 'Backend', items: ['Node.js', 'Express', 'Django', 'Flask', 'Laravel'] },
              { cat: 'AI & Tools', items: ['OpenAI', 'Groq', 'Claude', 'LangChain', 'n8n'] },
              { cat: 'Databases', items: ['MongoDB', 'PostgreSQL', 'MySQL', 'SQLite', 'Redis'] },
              { cat: 'DevOps', items: ['Docker', 'AWS', 'Vercel', 'GitHub Actions', 'Linux'] },
              { cat: 'Security', items: ['Kali Linux', 'Burp Suite', 'Metasploit', 'Nmap', 'Wireshark'] },
              { cat: 'Web3', items: ['Solidity', 'Ethers.js', 'Web3.js', 'Hardhat', 'MetaMask'] },
            ].map((stack, i) => (
              <div key={i} className={`reveal reveal-delay-${i % 4}`}
                style={{ background: 'var(--bg2)', border: '1px solid var(--border)', borderRadius: 8, padding: 24 }}>
                <h3 style={{ fontFamily: 'var(--font-display)', fontSize: 14, fontWeight: 700, marginBottom: 12, color: 'var(--accent)' }}>
                  {stack.cat}
                </h3>
                <div style={{ display: 'flex', flexDirection: 'column', gap: 6 }}>
                  {stack.items.map((item, j) => (
                    <span key={j} style={{ fontSize: 13, color: 'var(--text2)' }}>• {item}</span>
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
