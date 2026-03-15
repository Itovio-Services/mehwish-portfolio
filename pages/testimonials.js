import Head from 'next/head';
import Layout from '../components/Layout';

export default function Testimonials() {
  return (
    <Layout>
      <Head><title>Testimonials — Mehwish Riaz</title></Head>
      <section className="section">
        <div className="container" style={{ textAlign: 'center', maxWidth: 600 }}>
          <p className="section-tag">Feedback</p>
          <h1 className="section-title" style={{ marginBottom: 16 }}>Testimonials</h1>
          <p style={{ fontSize: 16, color: 'var(--text2)', marginBottom: 40 }}>
            Feedback from colleagues and mentors I've worked with.
          </p>
          <div className="card" style={{ padding: 48 }}>
            <div style={{ fontSize: 48, marginBottom: 16 }}>💬</div>
            <h3 style={{ fontSize: 20, fontWeight: 700, marginBottom: 8 }}>Testimonials Coming Soon</h3>
            <p style={{ color: 'var(--text2)', fontSize: 14 }}>I'm actively collecting feedback from my internship and project collaborations.</p>
          </div>
        </div>
      </section>
    </Layout>
  );
}
