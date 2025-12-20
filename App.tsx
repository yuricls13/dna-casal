import React, { useEffect } from 'react';
import { Hero } from './components/sections/Hero';
import { StatsBar } from './components/sections/StatsBar';
import { Problems } from './components/sections/Problems';
import { TargetAudience } from './components/sections/TargetAudience';
import { HowItWorks } from './components/sections/HowItWorks';
import { Benefits } from './components/sections/Benefits';
import { SocialProof } from './components/sections/SocialProof';
import { Testimonials } from './components/sections/Testimonials';
import { Comparison } from './components/sections/Comparison';
import { Privacy } from './components/sections/Privacy';
import { Guarantee } from './components/sections/Guarantee';
import { WhatItIsNot } from './components/sections/WhatItIsNot';
import { FAQ } from './components/sections/FAQ';
import { FinalCTA } from './components/sections/FinalCTA';
import { Footer } from './components/sections/Footer';

function App() {
  useEffect(() => {
    const handleSmoothScroll = (e: MouseEvent) => {
      const target = e.target as HTMLElement;
      const anchor = target.closest('a[href^="#"]');
      if (anchor) {
        const href = anchor.getAttribute('href');
        if (href && href.startsWith('#') && href.length > 1) {
          e.preventDefault();
          const element = document.querySelector(href);
          if (element) {
            element.scrollIntoView({ behavior: 'smooth', block: 'start' });
          }
        }
      }
    };
    document.addEventListener('click', handleSmoothScroll as any);
    return () => document.removeEventListener('click', handleSmoothScroll as any);
  }, []);

  return (
    <main className="min-h-screen font-sans text-gray-900 bg-white selection:bg-brand-pink selection:text-white">
      <Hero />
      <StatsBar />
      <Problems />
      <TargetAudience />
      <HowItWorks />
      <Benefits />
      <SocialProof />
      <Testimonials />
      <Comparison />
      <Privacy />
      <Guarantee />
      <WhatItIsNot />
      <FAQ />
      <FinalCTA />
      <Footer />
    </main>
  );
}

export default App;