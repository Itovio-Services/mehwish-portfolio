import Head from 'next/head';
import Link from 'next/link';
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
  { year: '2022', title: 'Gaming & Tech Content', desc: 'Started YouTube channel creating gaming and tech content, building an audience and learning content creation.' },
  { year: '2023', title: 'Web Development Journey', desc: 'Created tech content on YouTube and completed web development courses from Coursera. Started building websites.' },
  { year: '2024', title: 'CS50 & Cybersecurity', desc: 'Completed CS50 (Programming with Python) and started learning cybersecurity on TryHackMe. Deep dive into programming fundamentals.' },
  { year: '2025', title: 'Founded PrecisionTechInsights', desc: 'Launched our tech company. Gained TryHackMe certifications, learned AI agent integration, and created PrecisionFlow.io — an AI-powered content agency.' },
  { year: '2025', title: 'First Portfolio Launch', desc: 'Developed and launched harishere.com as a personal portfolio showcasing skills and projects.' },
  { year: '2026', title: 'Team Expansion & Full Services', desc: 'Transformed harishere.com into a full-service platform. Built a team offering hosting, AI development, cybersecurity, Web3, and complete digital solutions.' },
];

export default function About() {
  useReveal();
  return (
    <Layout>
      <Head>
        <title>About — harishere</title>
        <meta name="description" content="Learn about our journey — from YouTube content creation to building a complete digital solutions team offering AI, cybersecurity, Web3, and hosting services." />
      </Head>

      {/* Hero */}
      <section style={{ padding: '100px 0 80px', borderBottom: '1px solid var(--border)', position: 'relative', overflow: 'hidden' }}>
        <div style={{ position: 'absolute', inset: 0, background: 'radial-gradient(ellipse 60% 60% at 30% 50%, rgba(59,130,246,0.07) 0%, transparent 70%)', pointerEvents: 'none' }} />
        <div className="container" style={{ position: 'relative' }}>
          <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: 80, alignItems: 'center' }}>
            <div>
              <p className="section-tag">About</p>
              <h1 className="section-title" style={{ fontSize: 'clamp(40px, 5vw, 68px)' }}>
                We're harishere.<br /><span style={{ color: 'var(--text2)' }}>We build what others imagine.</span>
              </h1>
              <p style={{ fontSize: 17, color: 'var(--text2)', lineHeight: 1.8, fontWeight: 300, marginTop: 20 }}>
                A team of developers, AI engineers, and cybersecurity experts based in Karachi, Pakistan. We operate at the intersection of AI, cybersecurity, Web3, and web infrastructure — delivering complete digital solutions for startups and businesses.
              </p>
              <div style={{ display: 'flex', gap: 14, marginTop: 32 }}>
                <Link href="/contact" className="btn btn-primary">Work With Us</Link>
                <a href="https://linkedin.com/in/itisharis" target="_blank" rel="noreferrer" className="btn btn-ghost">LinkedIn →</a>
              </div>
            </div>
            <div style={{ position: 'relative' }}>
              <div style={{ width: '100%', aspectRatio: '4/5', background: 'var(--bg2)', border: '1px solid var(--border)', borderRadius: 8, display: 'flex', alignItems: 'center', justifyContent: 'center', fontSize: 14, color: 'var(--muted)', letterSpacing: '0.08em', textTransform: 'uppercase', position: 'relative', overflow: 'hidden' }}>
                <div style={{ position: 'absolute', inset: 0, background: 'linear-gradient(135deg, rgba(59,130,246,0.05) 0%, transparent 60%)' }} />
                Team Photo
              </div>
              <div style={{ position: 'absolute', bottom: -16, right: -16, width: 72, height: 72, border: '2px solid var(--accent)', borderRadius: 8, zIndex: -1 }} />
            </div>
          </div>
        </div>
      </section>

      {/* Story */}
      <section className="section" style={{ background: 'var(--bg2)' }}>
        <div className="container">
          <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: 80 }}>
            <div>
              <p className="section-tag reveal">Our Story</p>
              <h2 className="section-title reveal" style={{ fontSize: 40 }}>Why we do this.</h2>
            </div>
            <div style={{ display: 'flex', flexDirection: 'column', gap: 20 }}>
              {[
                "We started with curiosity — about how systems work, how AI makes decisions, how to secure infrastructure. One question led to three more, and somewhere along the way we found ourselves building real solutions instead of just studying them.",
                "What began as a solo journey in 2022 with YouTube content has evolved into a complete digital solutions team. We've built AI products that run autonomously, set up hosting infrastructure that powers real businesses, and helped clients secure their systems.",
                "Today, harishere.com is both a personal brand and a team operation. We work under PrecisionTechInsights as our company structure, offering everything from managed hosting to AI development, cybersecurity audits, Web3 solutions, and personal branding.",
                "The goal isn't to be impressive. It's to be useful — to clients, to the community we're building, and to the problems that genuinely interest us.",
              ].map((p, i) => (
                <p key={i} className={`reveal reveal-delay-${i}`} style={{ fontSize: 16, color: i === 0 ? 'var(--text)' : 'var(--text2)', lineHeight: 1.8, fontWeight: 300 }}>{p}</p>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Timeline */}
      <section className="section">
        <div className="container">
          <p className="section-tag reveal">Journey</p>
          <h2 className="section-title reveal" style={{ marginBottom: 56 }}>How we got here.</h2>
          <div style={{ display: 'flex', flexDirection: 'column', gap: 0 }}>
            {timeline.map((item, i) => (
              <div key={i} className={`reveal reveal-delay-${i % 3}`}
                style={{ display: 'grid', gridTemplateColumns: '100px 1fr', gap: 32, padding: '28px 0', borderBottom: i < timeline.length - 1 ? '1px solid var(--border)' : 'none', alignItems: 'start' }}>
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

      {/* Tech Stack */}
      <section className="section" style={{ background: 'var(--bg2)' }}>
        <div className="container">
          <p className="section-tag reveal">Tech Stack</p>
          <h2 className="section-title reveal" style={{ marginBottom: 56 }}>What we work with.</h2>
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
                style={{ background: 'var(--bg)', border: '1px solid var(--border)', borderRadius: 8, padding: 24 }}>
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
      <section style={{ borderTop: '1px solid var(--border)' }}>
        <div style={{ padding: '80px 40px', textAlign: 'center' }} className="container">
          <h2 style={{ maxWidth: 600, margin: '0 auto 20px' }} className="section-title reveal">
            Ready to work together?
          </h2>
          <p style={{ margin: '0 auto 36px', textAlign: 'center', fontSize: 16, color: 'var(--text2)', maxWidth: 500 }} className="reveal">
            Whether you need hosting, AI development, security audits, or complete digital solutions — let's discuss your project.
          </p>
          <div style={{ display: 'flex', gap: 14, justifyContent: 'center', flexWrap: 'wrap' }}>
            <Link href="/contact" className="btn btn-primary reveal">Get Started</Link>
            <a href="https://wa.me/923481383350" target="_blank" rel="noreferrer" className="btn btn-ghost reveal" style={{ background: '#25D366', color: 'white', border: 'none' }}>
              WhatsApp Us
            </a>
          </div>
        </div>
      </section>
    </Layout>
  );
}
