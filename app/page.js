import Header from '../components/Header';
import HeroSlider from '@/components/HeroSlider';
import OverlayCards from '@/components/OverlayCards';
import AboutSection from '@/components/AboutSection';
import ProductsCarousel from '@/components/ProductsCarousel';
import Footer from '@/components/Footer';

export default function Home() {
  return (
    <div className="min-h-screen">
      <Header />
      <main>
        <div className="relative">
          <HeroSlider />
          <OverlayCards />
        </div>
        <AboutSection />
        <ProductsCarousel />
      </main>
      <Footer />
    </div>
  );
}