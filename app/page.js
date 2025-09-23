import Header from '../components/Header';
import HeroSlider from '../components/Home/HeroSlider';
import AboutSection from '../components/Home/AboutSection';
import ProductsCarousel from '../components/Home/ProductsCarousel';
import Footer from '../components/Footer';


export default function Home() {
  return (
    <div className="min-h-screen">
      <Header />
      <main>
        <HeroSlider/>
        <AboutSection />
        <ProductsCarousel />
      </main>
      <Footer />
    </div>
  );
}