import Navbar from "./components/Navbar";
import HeroSection from "./components/HeroSection";
import FeatureSection from "./components/FeatureSection";
import WorkFlow from "./components/WorkFlow";
import Pricing from "./components/Pricing";
import Testimonals from "./components/Testimonals";

const App = () => {
  return (
    <>
      <Navbar />
      <div className="max-w-7xl mx-auto pt-20 px-6">
        <HeroSection />
        <FeatureSection />
        <WorkFlow />
        <Pricing />
        <Testimonals />
      </div>
    </>
  );
};

export default App;
