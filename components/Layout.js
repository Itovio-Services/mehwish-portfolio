import Navbar from './Navbar';
import Footer from './Footer';
import AIChatWidget from './AIChatWidget';

export default function Layout({ children }) {
  return (
    <>
      <Navbar />
      <main style={{ paddingTop: 80 }}>{children}</main>
      <Footer />
      <AIChatWidget />
    </>
  );
}
