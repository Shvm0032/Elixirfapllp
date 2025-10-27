import HeroSlider from "../components/Home/HeroSlider";
import AboutSection from "../components/Home/AboutSection";
import AllProducts from "../components/Home/AllProducts";
import Achievement from "../components/Home/Achievement";
import Accredition from "../components/Home/Accredition";
import Testimonial from "../components/Home/Testimonial";
import CTA from "../components/Home/CTA";



export default function Home() {
  return (
    <main>
      <HeroSlider />
      <AboutSection />
      <AllProducts/>
      <Achievement />
      <Accredition />
      <Testimonial />
      <CTA />
    </main>
  );
}
