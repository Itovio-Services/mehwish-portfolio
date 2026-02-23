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

const services = [
  {
    num: '01', icon: '🚀', title: 'Complete Brand & Digital Infrastructure Package',
    short: 'Everything your startup needs — from brand identity to live infrastructure.',
    desc: 'The ultimate all-in-one solution for startups and businesses. I handle your complete digital presence from scratch: brand entity creation, professional website development, domain registration and configuration, custom hosting setup, brand logo design, social media handles setup across all platforms, security audit, SSL certificates, professional email, ongoing maintenance, and technical support. You get a complete, production-ready digital presence without managing multiple vendors.',
    features: [
      'Complete brand entity creation & strategy',
      'Professional website development (WordPress, Next.js, custom)',
      'Domain registration & DNS configuration',
      'White-label hosting with custom nameservers',
      'Professional brand logo & visual identity',
      'Social media handles setup (Instagram, LinkedIn, Twitter, etc.)',
      'Security audit & SSL certificate setup',
      'Professional email hosting & configuration',
      'SEO optimization & Google Analytics setup',
      'Content management system training',
      'Ongoing maintenance & technical support',
      'Regular backups & security monitoring'
    ],
    cta: { label: 'View Complete Package →', href: 'https://hosting.harishere.com' },
  },
  {
    num: '02', icon: '⚡', title: 'AI Agent Development & Automation',
    short: 'Autonomous AI systems that work 24/7.',
    desc: 'I design and build custom AI agents for businesses that want to automate workflows, generate content at scale, process data autonomously, or run intelligent customer interactions. PrecisionFlow.io is my live proof — an autonomous agent generating daily crypto content.',
    features: [
      'Custom AI agent development',
      'Chatbot integrations (website, WhatsApp, Telegram)',
      'Content generation pipelines',
      'Workflow automation systems',
      'Data processing & analysis bots',
      'API integrations & triggers',
      'Multi-agent orchestration',
      'Groq, OpenAI, Claude integrations'
    ],
  },
  {
    num: '03', icon: '🔐', title: 'Cybersecurity Audit & Penetration Testing',
    short: 'Find vulnerabilities before attackers do.',
    desc: 'Using Kali Linux and industry-standard tools, I conduct comprehensive web application security assessments that identify real vulnerabilities in your systems. I provide detailed reports with severity ratings and actionable fixes — not just a list of problems.',
    features: [
      'Web application penetration testing',
      'Vulnerability assessment & reporting',
      'WordPress security hardening',
      'DNS & SSL security review',
      'Server configuration audit',
      'API security testing',
      'Compliance preparation (GDPR, SOC2)',
      'Ongoing security monitoring'
    ],
  },
  {
    num: '04', icon: '⛓', title: 'Web3 & Blockchain Development',
    short: 'Build on the decentralized web.',
    desc: 'I help businesses and projects enter the Web3 space with smart contract interfaces, token-gated platforms, NFT systems, and DeFi tooling. I understand the full stack — from Solidity contracts to the frontend that interacts with them.',
    features: [
      'Smart contract development & auditing',
      'Token-gated content systems',
      'NFT minting & marketplace builds',
      'DeFi dashboard development',
      'Crypto payment integrations',
      'Wallet connection systems',
      'Blockchain data indexing',
      'Web3 consulting & strategy'
    ],
  },
  {
    num: '05', icon: '🌐', title: 'Full-Stack Web Development',
    short: 'Professional websites that perform.',
    desc: 'From fast-loading portfolio sites to complex business platforms, I build websites that look sharp, load fast, and work on every device. I work with WordPress, Next.js, React, and custom stacks depending on what the project needs.',
    features: [
      'Portfolio & personal brand sites',
      'Business websites & landing pages',
      'WordPress development & theming',
      'Next.js & React applications',
      'E-commerce platforms',
      'Performance optimization',
      'SEO implementation',
      'Mobile-responsive design'
    ],
  },
  {
    num: '06', icon: '📈', title: 'LinkedIn Content & Personal Branding',
    short: 'Build your technical audience.',
    desc: 'I help technical founders and professionals build their personal brand on LinkedIn through strategic content, AI-powered writing systems, and audience growth strategies. I have grown to 5,000+ followers and bring that expertise to help you.',
    features: [
      'LinkedIn content strategy',
      'AI-powered content generation',
      'Profile optimization',
      'Audience growth tactics',
      'Engagement automation',
      'Personal brand positioning',
      'Content calendar planning',
      'Analytics & optimization'
    ],
  },
];

export default function Services() {
  useReveal();
  return (
    <Layout>
      <Head>
        <title>Services — Haris</title>
        <meta name="description" content="Complete digital solutions: brand creation, AI development, cybersecurity, Web3, full-stack development, and personal branding." />
      </Head>

      {/* Hero */}
      <section style={{ padding: '100px 0 80px', borderBottom: '1px solid var(--border)' }}>
        <div className="container">
          <p className="section-tag">Services</p>
          <h1 style={{ fontFamily: 'var(--font-display)', fontSize: 'clamp(40px, 5vw, 68px)', fontWeight: 700, lineHeight: 1.1, marginBottom: 20, maxWidth: 800 }}>
            <span className="typewriter" style={{ fontSize: 'clamp(32px, 4vw, 48px)' }}>Build. Secure. Scale.</span>
          </h1>
          <p style={{ fontSize: 17, color: 'var(--text2)', lineHeight: 1.8, fontWeight: 300, marginTop: 20, maxWidth: 600 }}>
            From complete brand creation to AI development, cybersecurity to Web3 — I provide end-to-end technical solutions for startups and businesses.
          </p>
          <div className="floating-skills" style={{ marginTop: 32 }}>
            <span className="skill-badge">Brand Creation</span>
            <span className="skill-badge">AI Development</span>
            <span className="skill-badge">Cybersecurity</span>
            <span className="skill-badge">Web3</span>
            <span className="skill-badge">Full-Stack</span>
            <span className="skill-badge">Branding</span>
          </div>
        </div>
      </section>

      {/* Services */}
      <section className="section">
        <div className="container">
          <div style={{ display: 'flex', flexDirection: 'column', gap: 80 }}>
            {services.map((service, i) => (
              <div key={i} className={`reveal reveal-delay-${i % 3}`}
                style={{ display: 'grid', gridTemplateColumns: '80px 1fr', gap: 40, paddingBottom: 80, borderBottom: i < services.length - 1 ? '1px solid var(--border)' : 'none' }}>
                <div style={{ fontFamily: 'var(--font-display)', fontSize: 48, fontWeight: 700, color: 'var(--accent)', opacity: 0.3 }}>
                  {service.num}
                </div>
                <div>
                  <div style={{ fontSize: 40, marginBottom: 12 }}>{service.icon}</div>
                  <h2 style={{ fontFamily: 'var(--font-display)', fontSize: 32, fontWeight: 700, marginBottom: 12 }}>
                    {service.title}
                  </h2>
                  <p style={{ fontSize: 18, color: 'var(--accent)', marginBottom: 20, fontWeight: 500 }}>
                    {service.short}
                  </p>
                  <p style={{ fontSize: 16, color: 'var(--text2)', lineHeight: 1.8, marginBottom: 24 }}>
                    {service.desc}
                  </p>
                  <div style={{ display: 'grid', gridTemplateColumns: 'repeat(2, 1fr)', gap: 12, marginBottom: 24 }}>
                    {service.features.map((feature, j) => (
                      <div key={j} style={{ display: 'flex', alignItems: 'start', gap: 10 }}>
                        <span style={{ color: 'var(--accent)', fontSize: 18, marginTop: 2 }}>✓</span>
                        <span style={{ fontSize: 14, color: 'var(--text2)' }}>{feature}</span>
                      </div>
                    ))}
                  </div>
                  {service.cta && (
                    <a href={service.cta.href} target="_blank" rel="noreferrer" className="btn btn-primary">
                      {service.cta.label}
                    </a>
                  )}
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section style={{ background: 'var(--bg2)', borderTop: '1px solid var(--border)', borderBottom: '1px solid var(--border)' }}>
        <div style={{ padding: '80px 40px', textAlign: 'center' }} className="container">
          <h2 style={{ maxWidth: 600, margin: '0 auto 20px' }} className="section-title reveal">
            Ready to work together?
          </h2>
          <p style={{ margin: '0 auto 36px', textAlign: 'center', maxWidth: 500, fontSize: 16, color: 'var(--text2)' }} className="reveal">
            Whether you need complete brand creation, AI development, security audits, or Web3 solutions — let's discuss your project.
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
