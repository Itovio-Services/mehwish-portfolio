import Link from 'next/link';

export default function Footer() {
  return (
    <footer style={{ borderTop: '1px solid var(--border)', background: 'var(--bg)', padding: '60px 0 32px' }}>
      <div className="container">
        <div style={{ display: 'grid', gridTemplateColumns: '2fr 1fr 1fr 1fr', gap: 40, marginBottom: 48 }}>
          <div>
            <Link href="/" style={{ fontFamily: 'var(--font-display)', fontSize: 24, fontWeight: 700, color: 'var(--text)', display: 'block', marginBottom: 14, textDecoration: 'none' }}>
              mehwish<span style={{ color: 'var(--accent)' }}>.</span>
            </Link>
            <p style={{ fontSize: 14, color: 'var(--text2)', lineHeight: 1.7, maxWidth: 260 }}>
              Frontend Developer passionate about building beautiful, responsive web experiences.
            </p>
          </div>
          <div>
            <p style={{ fontSize: 12, letterSpacing: '0.12em', textTransform: 'uppercase', color: 'var(--muted)', marginBottom: 16 }}>Navigation</p>
            {[['/', 'Home'], ['/about', 'About'], ['/projects', 'Projects'], ['/skills', 'Skills'], ['/contact', 'Contact']].map(([href, label]) => (
              <Link key={href} href={href} style={{ display: 'block', fontSize: 14, color: 'var(--text2)', marginBottom: 10, textDecoration: 'none', transition: 'color 0.2s' }}
                onMouseEnter={e => e.target.style.color = 'var(--accent)'}
                onMouseLeave={e => e.target.style.color = 'var(--text2)'}>
                {label}
              </Link>
            ))}
          </div>
          <div>
            <p style={{ fontSize: 12, letterSpacing: '0.12em', textTransform: 'uppercase', color: 'var(--muted)', marginBottom: 16 }}>Skills</p>
            {['React.js', 'JavaScript', 'Tailwind CSS', 'Bootstrap', 'HTML & CSS'].map(s => (
              <p key={s} style={{ fontSize: 14, color: 'var(--text2)', marginBottom: 10 }}>{s}</p>
            ))}
          </div>
          <div>
            <p style={{ fontSize: 12, letterSpacing: '0.12em', textTransform: 'uppercase', color: 'var(--muted)', marginBottom: 16 }}>Connect</p>
            <a href="https://wa.me/923706586349" target="_blank" rel="noreferrer" style={{ fontSize: 14, color: 'var(--text2)', marginBottom: 10, display: 'block', textDecoration: 'none' }}>0370-6586349</a>
            <div style={{ display: 'flex', gap: 12, marginTop: 16 }}>
              {[
                { label: 'LI', href: 'https://www.linkedin.com/in/mehwish-riaz-40294b378' },
                { label: 'GH', href: 'https://github.com/Mehwish-riaz/' },
              ].map(s => (
                <a key={s.label} href={s.href} target="_blank" rel="noreferrer"
                  style={{ width: 36, height: 36, border: '1px solid var(--border)', borderRadius: '50%', display: 'flex', alignItems: 'center', justifyContent: 'center', fontSize: 11, color: 'var(--text2)', fontWeight: 600, transition: 'all 0.2s', textDecoration: 'none' }}
                  onMouseEnter={e => { e.currentTarget.style.borderColor = 'var(--accent)'; e.currentTarget.style.color = 'var(--accent)'; }}
                  onMouseLeave={e => { e.currentTarget.style.borderColor = 'var(--border)'; e.currentTarget.style.color = 'var(--text2)'; }}>
                  {s.label}
                </a>
              ))}
            </div>
          </div>
        </div>
        <div style={{ borderTop: '1px solid var(--border)', paddingTop: 24, display: 'flex', justifyContent: 'space-between', alignItems: 'center', flexWrap: 'wrap', gap: 12 }}>
          <p style={{ fontSize: 13, color: 'var(--muted)' }}>© 2026 Mehwish Riaz. All rights reserved.</p>
          <p style={{ fontSize: 13, color: 'var(--muted)' }}>Frontend Developer · Software Engineering Student</p>
          <p style={{ fontSize: 13, color: 'var(--muted)' }}>
            Built by{' '}
            <a href="https://itovio.com" target="_blank" rel="noreferrer" style={{ color: 'var(--accent)', fontWeight: 600, textDecoration: 'none' }}>Itovio</a>
            {' · '}
            <a href="https://itovio.com/special" target="_blank" rel="noreferrer" style={{ color: 'var(--accent)', textDecoration: 'none' }}>Build your own portfolio for free →</a>
          </p>
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
