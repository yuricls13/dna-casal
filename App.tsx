import React, { useEffect, useState } from 'react';
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
import { UploadModal } from './components/ui/UploadModal';
import { CookieConsent } from './components/ui/CookieConsent';

function App() {
  const [isModalOpen, setIsModalOpen] = useState(false);

  const openModal = () => setIsModalOpen(true);
  const closeModal = () => setIsModalOpen(false);

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
      {/* Passando a função openModal para as seções que têm botões CTA */}
      <Hero onCtaClick={openModal} />
      <StatsBar />
      <Problems />
      <TargetAudience />
      <HowItWorks onCtaClick={openModal} />
      <Benefits onCtaClick={openModal} />
      <SocialProof />
      <Testimonials />
      <Comparison onCtaClick={openModal} />
      <Privacy />
      <Guarantee />
      <WhatItIsNot />
      <FAQ />
      <FinalCTA onCtaClick={openModal} />
      <Footer />

      {/* Componentes Globais / Sobrepostos */}
      <CookieConsent />
      <UploadModal isOpen={isModalOpen} onClose={closeModal} />
    </main>
  );
}

export default App;