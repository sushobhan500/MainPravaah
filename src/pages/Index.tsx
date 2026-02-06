import Scene3D from '@/components/three/Scene3D';
import Navbar from '@/components/layout/Navbar';
import HeroSection from '@/components/sections/HeroSection';
import QueryAnalyzerSection from '@/components/sections/QueryAnalyzerSection';
import AnalyticsSection from '@/components/sections/AnalyticsSection';
import FeaturesSection from '@/components/sections/FeaturesSection';
import Footer from '@/components/layout/Footer';

const Index = () => {
  return (
    <div className="min-h-screen bg-background overflow-hidden">
      <Scene3D />
      <Navbar />
      <main>
        <HeroSection />
        <QueryAnalyzerSection />
        <AnalyticsSection />
        <FeaturesSection />
      </main>
      <Footer />
    </div>
  );
};

export default Index;
