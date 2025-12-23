import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { X, ShieldCheck } from 'lucide-react';
import { Button } from './Button';

export const CookieConsent: React.FC = () => {
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    // Verifica se o usuário já aceitou os cookies anteriormente
    const consent = localStorage.getItem('dna_casal_cookie_consent');
    if (!consent) {
      // Pequeno delay para não aparecer imediatamente ao carregar a página
      const timer = setTimeout(() => setIsVisible(true), 1500);
      return () => clearTimeout(timer);
    }
  }, []);

  const handleAccept = () => {
    localStorage.setItem('dna_casal_cookie_consent', 'true');
    setIsVisible(false);
  };

  return (
    <AnimatePresence>
      {isVisible && (
        <motion.div
          initial={{ y: 100, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          exit={{ y: 100, opacity: 0 }}
          transition={{ duration: 0.5, ease: "easeOut" }}
          className="fixed bottom-0 left-0 right-0 z-40 p-4 md:p-6"
        >
          <div className="max-w-4xl mx-auto bg-white rounded-2xl shadow-[0_-10px_40px_-15px_rgba(0,0,0,0.1)] border border-gray-100 p-4 md:p-6 flex flex-col md:flex-row items-center gap-4 md:gap-6 relative">
            
            {/* Ícone */}
            <div className="hidden md:flex bg-brand-light p-3 rounded-full shrink-0">
              <ShieldCheck className="w-6 h-6 text-brand-purple" />
            </div>

            {/* Texto */}
            <div className="flex-1 text-center md:text-left">
              <p className="text-gray-900 font-bold mb-1">Nós valorizamos sua privacidade 🍪</p>
              <p className="text-sm text-gray-500 leading-relaxed">
                Utilizamos cookies e tecnologias de rastreamento (como o Pixel do Facebook) para melhorar sua experiência e oferecer conteúdos personalizados. Ao continuar navegando, você concorda com nossa{' '}
                <a href="#" className="text-brand-purple hover:underline font-medium">Política de Privacidade</a> e{' '}
                <a href="#" className="text-brand-purple hover:underline font-medium">Termos de Uso</a>.
              </p>
            </div>

            {/* Botões */}
            <div className="flex items-center gap-3 w-full md:w-auto">
              <Button 
                onClick={handleAccept} 
                className="w-full md:w-auto whitespace-nowrap py-3 px-6 text-sm"
              >
                Aceitar e Continuar
              </Button>
              <button 
                onClick={() => setIsVisible(false)}
                className="p-2 text-gray-400 hover:text-gray-600 md:absolute md:top-2 md:right-2"
                aria-label="Fechar"
              >
                <X className="w-5 h-5" />
              </button>
            </div>
          </div>
        </motion.div>
      )}
    </AnimatePresence>
  );
};