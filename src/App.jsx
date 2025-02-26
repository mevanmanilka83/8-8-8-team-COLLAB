import Navbar from "./components/Navbar";
import HeroSection from "./components/HeroSection";
import FeatureSection from "./components/FeatureSection";
import WorkFlow from "./components/WorkFlow";
import Pricing from "./components/Pricing";
import Testimonals from "./components/Testimonals";
import Footer from "./components/Footer";

const App = () => {
  return (
    <div className="relative min-h-screen">
      <Navbar />
      <div className="relative z-0">
        <div className="max-w-7xl mx-auto pt-20 px-6">
          <HeroSection />
          <FeatureSection />
          <WorkFlow />
          <Pricing />
          <Testimonals />
          <Footer />
        </div>
      </div>
    </div>
  );
};

export default App;
