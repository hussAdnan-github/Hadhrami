
import Header from '../../components/feature/Header';
import Footer from '../../components/feature/Footer';
import HeroSection from './components/HeroSection';
import AboutSection from './components/AboutSection';
import InitiativesSection from './components/InitiativesSection';
import GallerySection from './components/GallerySection';
import ContactSection from './components/ContactSection';

export default function Home() {
  return (
    <div className="min-h-screen">
      <Header />
      <main>
        <HeroSection />
        <AboutSection />
        <InitiativesSection />
        <GallerySection />
        <ContactSection />
      </main>
      <Footer />
    </div>
  );
}
