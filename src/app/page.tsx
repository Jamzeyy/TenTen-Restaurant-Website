import Navbar from "@/components/Navbar";
import Hero from "@/components/Hero";
import About from "@/components/About";
import FoodFeatures from "@/components/FoodFeatures";
import MenuHighlights from "@/components/MenuHighlights";
import Gallery from "@/components/Gallery";
import Testimonials from "@/components/Testimonials";
import Contact from "@/components/Contact";
import Footer from "@/components/Footer";

export default function Home() {
  return (
    <>
      <Navbar />
      {/* WCAG 2.2 2.4.1: Main landmark for skip-to-content target */}
      <main id="main-content">
        <Hero />
        <About />
        <FoodFeatures />
        <MenuHighlights />
        <Gallery />
        <Testimonials />
        <Contact />
      </main>
      <Footer />
    </>
  );
}
