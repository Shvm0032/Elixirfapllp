import HeroSlider from "../components/Home/HeroSlider";
import AboutSection from "../components/Home/AboutSection";
// import AllProducts from "../components/Home/AllProducts";
import Achievement from "../components/Home/Achievement";
import Accredition from "../components/Home/Accredition";
import Testimonial from "../components/Home/Testimonial";
import CTA from "../components/Home/CTA";
import OurProducts from "../components/Home/OurProducts";
import VeterinaryCategories from "../components/Home/VeterinaryCategories";



export default function Home() {
  return (
    <main>
      <HeroSlider />
      <AboutSection />
      <OurProducts/>
      <VeterinaryCategories/>
      {/* <AllProducts/> */}
      <Achievement />
      <Accredition />
      <Testimonial />
      <CTA />
    </main>
  );
}
