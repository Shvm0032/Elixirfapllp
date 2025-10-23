import Header from '../components/Header';
import HeroSlider from '../components/Home/HeroSlider';
import AboutSection from '../components/Home/AboutSection';
import ProductsCarousel from '../components/Home/ProductsCarousel';
import Footer from '../components/Footer';
import Achievement from '../components/Home/Achievement';
import Accredition from '../components/Home/Accredition';
import Testimonial from '../components/Home/Testimonial';
import CTA from '../components/Home/CTA'


export default function Home() {
  return (
    <div className="min-h-screen">
      <Header />
      <main>
        <HeroSlider/>
        <AboutSection />
        <ProductsCarousel />
        <Achievement/>
        <Accredition/>
        <Testimonial/>
        <CTA/>
      </main>
      <Footer />
    </div>
  );
}