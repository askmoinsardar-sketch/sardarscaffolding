import Navbar from './components/Navbar';
import HeroSection from './components/HeroSection';
import AboutSection from './components/AboutSection';
import ProductsSection from './components/ProductsSection';
import WhyChooseUs from './components/WhyChooseUs';
import Applications from './components/Applications';
import ContactSection from './components/ContactSection';
import Footer from './components/Footer';

function App() {
  return (
    <div className="min-h-screen">
      <Navbar />
      <main>
        <HeroSection />
        <AboutSection />
        <ProductsSection />
        <WhyChooseUs />
        <Applications />
        <ContactSection />
        <Footer />
      </main>
    </div>
  );
}

export default App;
