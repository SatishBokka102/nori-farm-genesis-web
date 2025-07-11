
import { useState, useEffect } from 'react';
import { HeroSection } from '@/components/HeroSection';
import { ServiceSection } from '@/components/ServiceSection';
import { MissionSection } from '@/components/MissionSection';
import { EmotionalNarrativeSection } from '@/components/EmotionalNarrativeSection';
import { HowItWorksSection } from '@/components/HowItWorksSection';
import { CropMapperSection } from '@/components/CropMapperSection';
import { ContactSection } from '@/components/ContactSection';
import { Footer } from '@/components/Footer';

const Index = () => {
  const [darkMode, setDarkMode] = useState(false);

  useEffect(() => {
    if (darkMode) {
      document.documentElement.classList.add('dark');
    } else {
      document.documentElement.classList.remove('dark');
    }
  }, [darkMode]);

  return (
    <div className={`min-h-screen transition-colors duration-300 ${darkMode ? 'dark' : ''}`}>
      <div className="bg-background text-foreground">
        <HeroSection darkMode={darkMode} setDarkMode={setDarkMode} />
        <ServiceSection />
        <MissionSection />
        <EmotionalNarrativeSection />
        <HowItWorksSection />
        <CropMapperSection />
        <ContactSection />
        <Footer />
      </div>
    </div>
  );
};

export default Index;
