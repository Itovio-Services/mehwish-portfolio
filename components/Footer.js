import Link from 'next/link';

export default function Footer() {
  return (
    <footer style={{ borderTop: '1px solid var(--border)', background: 'var(--bg)', padding: '60px 0 32px' }}>
      <div className="container">
        <div style={{ display: 'grid', gridTemplateColumns: '2fr 1fr 1fr 1fr', gap: 40, marginBottom: 48 }}>
          {/* Brand */}
          <div>
            <Link href="/" style={{ fontFamily: 'var(--font-display)', fontSize: 24, fontWeight: 700, color: 'var(--white)', display: 'block', marginBottom: 14 }}>
              haris<span style={{ color: 'var(--accent)' }}>.</span>
            </Link>
            <p style={{ fontSize: 14, color: 'var(--text2)', lineHeight: 1.7, maxWidth: 260 }}>
              Building intelligent, secure systems at the intersection of AI, cybersecurity, and Web3.
            </p>
          </div>

          {/* Quick Links */}
          <div>
            <p style={{ fontSize: 12, letterSpacing: '0.12em', textTransform: 'uppercase', color: 'var(--muted)', marginBottom: 16 }}>Navigation</p>
            {['/', '/services', '/projects', '/about', '/contact'].map((href, i) => (
              <Link key={href} href={href} style={{ display: 'block', fontSize: 14, color: 'var(--text2)', marginBottom: 10, transition: 'color 0.2s' }}
                onMouseEnter={e => e.target.style.color = 'var(--accent)'}
                onMouseLeave={e => e.target.style.color = 'var(--text2)'}>
                {['Home', 'Services', 'Projects', 'About', 'Contact'][i]}
              </Link>
            ))}
          </div>

          {/* Services */}
          <div>
            <p style={{ fontSize: 12, letterSpacing: '0.12em', textTransform: 'uppercase', color: 'var(--muted)', marginBottom: 16 }}>Services</p>
            {['AI Agent Development', 'Cybersecurity', 'Web3 Development', 'Web Hosting', 'Web Development'].map(s => (
              <p key={s} style={{ fontSize: 14, color: 'var(--text2)', marginBottom: 10 }}>{s}</p>
            ))}
          </div>

          {/* Contact */}
          <div>
            <p style={{ fontSize: 12, letterSpacing: '0.12em', textTransform: 'uppercase', color: 'var(--muted)', marginBottom: 16 }}>Contact</p>
            <p style={{ fontSize: 14, color: 'var(--text2)', marginBottom: 10 }}>contact@harishere.com</p>
            <p style={{ fontSize: 14, color: 'var(--text2)', marginBottom: 10 }}>Karachi, Pakistan</p>
            <div style={{ display: 'flex', gap: 12, marginTop: 16 }}>
              {[
                { label: 'LI', href: 'https://linkedin.com/in/itisharis' },
                { label: 'GH', href: 'https://github.com/harisxcyber' },
                { label: 'WA', href: 'https://wa.me/923481383350' },
              ].map(s => (
                <a key={s.label} href={s.href} target="_blank" rel="noreferrer"
                  style={{ width: 36, height: 36, border: '1px solid var(--border)', borderRadius: '50%', display: 'flex', alignItems: 'center', justifyContent: 'center', fontSize: 11, color: 'var(--text2)', fontWeight: 600, transition: 'all 0.2s' }}
                  onMouseEnter={e => { e.currentTarget.style.borderColor = 'var(--accent)'; e.currentTarget.style.color = 'var(--accent)'; }}
                  onMouseLeave={e => { e.currentTarget.style.borderColor = 'var(--border)'; e.currentTarget.style.color = 'var(--text2)'; }}>
                  {s.label}
                </a>
              ))}
            </div>
          </div>
        </div>

        <div style={{ borderTop: '1px solid var(--border)', paddingTop: 24, display: 'flex', justifyContent: 'space-between', alignItems: 'center' }}>
          <p style={{ fontSize: 13, color: 'var(--muted)' }}>© 2026 Haris. All rights reserved.</p>
          <div style={{ display: 'flex', gap: 24 }}>
            {['PrecisionTechInsights', 'PrecisionFlow.io', 'Hosting'].map((l, i) => (
              <a key={l} href={['https://precisiontechinsights.com', 'https://precisionflow.io', 'https://hosting.harishere.com'][i]}
                target="_blank" rel="noreferrer"
                style={{ fontSize: 13, color: 'var(--muted)', transition: 'color 0.2s' }}
                onMouseEnter={e => e.target.style.color = 'var(--text)'}
                onMouseLeave={e => e.target.style.color = 'var(--muted)'}>
                {l}
              </a>
            ))}
          </div>
        </div>
      </div>

      <style jsx>{`
        @media (max-width: 768px) {
          div[style*="grid-template-columns"] { grid-template-columns: 1fr 1fr !important; }
          div[style*="justify-content: space-between"] { flex-direction: column; gap: 12px; }
        }
      `}</style>
    </footer>
  );
}
