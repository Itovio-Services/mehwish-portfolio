import Link from 'next/link';
import { useRouter } from 'next/router';
import { useState, useEffect } from 'react';

export default function Navbar() {
  const router = useRouter();
  const [theme, setTheme] = useState('light');
  const [mobileOpen, setMobileOpen] = useState(false);

  useEffect(() => {
    const saved = localStorage.getItem('theme') || 'light';
    setTheme(saved);
    document.documentElement.setAttribute('data-theme', saved);
  }, []);

  const toggleTheme = () => {
    const next = theme === 'light' ? 'dark' : 'light';
    setTheme(next);
    localStorage.setItem('theme', next);
    document.documentElement.setAttribute('data-theme', next);
  };

  const isActive = (path) => router.pathname === path;

  const links = [
    { href: '/', label: 'Home' },
    { href: '/about', label: 'About' },
    { href: '/projects', label: 'Projects' },
    { href: '/skills', label: 'Skills' },
    { href: '/experience', label: 'Experience' },
    { href: '/contact', label: 'Contact' },
  ];

  return (
    <nav style={{ position: 'fixed', top: 0, left: 0, right: 0, zIndex: 100, background: 'var(--bg)', borderBottom: '1px solid var(--border)', backdropFilter: 'blur(12px)' }}>
      <div className="container" style={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between', height: 72, padding: '0 20px' }}>
        <Link href="/" style={{ fontFamily: 'var(--font-display)', fontSize: 20, fontWeight: 700, color: 'var(--text)', textDecoration: 'none' }}>
          mehwish<span style={{ color: 'var(--accent)' }}>.</span>
        </Link>

        <div style={{ display: 'flex', alignItems: 'center', gap: 28 }} className="desktop-menu">
          {links.map(link => (
            <Link key={link.href} href={link.href} style={{ fontSize: 15, fontWeight: 500, color: isActive(link.href) ? 'var(--accent)' : 'var(--text2)', textDecoration: 'none', transition: 'color 0.2s' }}>
              {link.label}
            </Link>
          ))}
          <button onClick={toggleTheme} aria-label="Toggle theme" style={{ background: 'var(--bg2)', border: '1px solid var(--border)', borderRadius: 8, width: 40, height: 40, cursor: 'pointer', fontSize: 18, display: 'flex', alignItems: 'center', justifyContent: 'center' }}>
            {theme === 'light' ? '🌙' : '☀️'}
          </button>
        </div>

        <button onClick={() => setMobileOpen(!mobileOpen)} className="mobile-menu-btn" aria-label="Toggle menu" style={{ background: 'none', border: 'none', cursor: 'pointer', fontSize: 24, color: 'var(--text)', display: 'none' }}>
          {mobileOpen ? '✕' : '☰'}
        </button>
      </div>

      {mobileOpen && (
        <div style={{ background: 'var(--bg)', borderTop: '1px solid var(--border)', padding: '16px 20px' }}>
          {links.map(link => (
            <Link key={link.href} href={link.href} onClick={() => setMobileOpen(false)} style={{ display: 'block', padding: '12px 0', fontSize: 16, fontWeight: 500, color: isActive(link.href) ? 'var(--accent)' : 'var(--text)', textDecoration: 'none', borderBottom: '1px solid var(--border)' }}>
              {link.label}
            </Link>
          ))}
          <button onClick={toggleTheme} aria-label="Toggle theme" style={{ marginTop: 16, background: 'var(--bg2)', border: '1px solid var(--border)', borderRadius: 8, width: 40, height: 40, cursor: 'pointer', fontSize: 18, display: 'flex', alignItems: 'center', justifyContent: 'center' }}>
            {theme === 'light' ? '🌙' : '☀️'}
          </button>
        </div>
      )}

      <style jsx>{`
        @media (max-width: 768px) {
          .desktop-menu { display: none !important; }
          .mobile-menu-btn { display: flex !important; }
        }
      `}</style>
    </nav>
  );
}
