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
    const newTheme = theme === 'light' ? 'dark' : 'light';
    setTheme(newTheme);
    localStorage.setItem('theme', newTheme);
    document.documentElement.setAttribute('data-theme', newTheme);
  };

  const isActive = (path) => router.pathname === path;

  return (
    <nav style={{
      position: 'fixed',
      top: 0,
      left: 0,
      right: 0,
      zIndex: 100,
      background: 'var(--bg)',
      borderBottom: '1px solid var(--border)',
      backdropFilter: 'blur(12px)',
    }}>
      <div className="container" style={{
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'space-between',
        height: 72,
      }}>
        <Link href="/" style={{
          fontFamily: 'var(--font-display)',
          fontSize: 20,
          fontWeight: 700,
          color: 'var(--text)',
          textDecoration: 'none',
        }}>
          haris<span style={{ color: 'var(--accent)' }}>.</span>
        </Link>

        {/* Desktop Menu */}
        <div style={{ display: 'flex', alignItems: 'center', gap: 32 }} className="desktop-menu">
          {[
            { href: '/services', label: 'Services' },
            { href: '/projects', label: 'Projects' },
            { href: '/about', label: 'About' },
            { href: '/contact', label: 'Contact' },
          ].map(link => (
            <Link key={link.href} href={link.href} style={{
              fontSize: 15,
              fontWeight: 500,
              color: isActive(link.href) ? 'var(--accent)' : 'var(--text2)',
              textDecoration: 'none',
              transition: 'color 0.2s',
            }}>
              {link.label}
            </Link>
          ))}

          <button
            onClick={toggleTheme}
            style={{
              background: 'var(--bg2)',
              border: '1px solid var(--border)',
              borderRadius: 8,
              width: 40,
              height: 40,
              display: 'flex',
              alignItems: 'center',
              justifyContent: 'center',
              cursor: 'pointer',
              transition: 'all 0.2s',
            }}
            title="Toggle theme"
          >
            {theme === 'light' ? '🌙' : '☀️'}
          </button>
        </div>

        {/* Mobile Menu Button */}
        <button
          onClick={() => setMobileOpen(!mobileOpen)}
          className="mobile-menu-btn"
          style={{
            display: 'none',
            background: 'var(--bg2)',
            border: '1px solid var(--border)',
            borderRadius: 8,
            width: 40,
            height: 40,
            alignItems: 'center',
            justifyContent: 'center',
            cursor: 'pointer',
            fontSize: 20,
          }}
        >
          {mobileOpen ? '✕' : '☰'}
        </button>
      </div>

      {/* Mobile Menu */}
      {mobileOpen && (
        <div className="mobile-menu" style={{
          background: 'var(--bg)',
          borderTop: '1px solid var(--border)',
          padding: '20px 0',
        }}>
          <div className="container" style={{ display: 'flex', flexDirection: 'column', gap: 16 }}>
            {[
              { href: '/services', label: 'Services' },
              { href: '/projects', label: 'Projects' },
              { href: '/about', label: 'About' },
              { href: '/contact', label: 'Contact' },
            ].map(link => (
              <Link key={link.href} href={link.href} onClick={() => setMobileOpen(false)} style={{
                fontSize: 16,
                fontWeight: 500,
                color: isActive(link.href) ? 'var(--accent)' : 'var(--text2)',
                textDecoration: 'none',
                padding: '8px 0',
              }}>
                {link.label}
              </Link>
            ))}
            <button
              onClick={toggleTheme}
              style={{
                background: 'var(--bg2)',
                border: '1px solid var(--border)',
                borderRadius: 8,
                padding: '12px',
                cursor: 'pointer',
                fontSize: 14,
                color: 'var(--text)',
                textAlign: 'left',
              }}
            >
              {theme === 'light' ? '🌙 Dark Mode' : '☀️ Light Mode'}
            </button>
          </div>
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
