
import Navigation from '@/components/Navigation';
import Hero from '@/components/Hero';
import PastorSection from '@/components/PastorSection';
import CoreSections from '@/components/CoreSections';
import Footer from '@/components/Footer';

const Index = () => {
  return (
    <div className="min-h-screen">
      <Navigation />
      <Hero />
      <PastorSection />
      <CoreSections />
      <Footer />
    </div>
  );
};

export default Index;
