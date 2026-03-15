import Head from 'next/head';
import Layout from '../components/Layout';

export default function Blog() {
  return (
    <Layout>
      <Head><title>Blog — Mehwish Riaz</title></Head>
      <section className="section">
        <div className="container" style={{ textAlign: 'center', maxWidth: 600 }}>
          <p className="section-tag">Writing</p>
          <h1 className="section-title" style={{ marginBottom: 16 }}>Blog</h1>
          <p style={{ fontSize: 16, color: 'var(--text2)', marginBottom: 40 }}>
            Coming soon — I'll be sharing my learning journey, frontend tips, and experiences as a developer.
          </p>
          <div className="card" style={{ padding: 48 }}>
            <div style={{ fontSize: 48, marginBottom: 16 }}>✍️</div>
            <h3 style={{ fontSize: 20, fontWeight: 700, marginBottom: 8 }}>Posts Coming Soon</h3>
            <p style={{ color: 'var(--text2)', fontSize: 14 }}>Stay tuned for articles on React.js, frontend development, and my journey in tech.</p>
          </div>
        </div>
      </section>
    </Layout>
  );
}
