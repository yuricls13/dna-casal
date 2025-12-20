import React, { useState } from 'react';
import { Check, X, ChevronDown, ChevronUp } from 'lucide-react';
import { motion, AnimatePresence } from 'framer-motion';
import { Section } from '../ui/Section';
import { Button } from '../ui/Button';
import { ORIGINAL_PRICE } from '../../constants';

interface Option {
  title: string;
  icon: string;
  time: string;
  price: string;
  custom: boolean;
  action: boolean;
  privacy: string;
  isHighlight: boolean;
  opacity: string;
}

const renderBoolean = (val: boolean) => {
  return val ? (
    <div className="flex justify-center">
      <div className="bg-green-100 rounded-full p-1">
        <Check className="w-4 h-4 text-green-600" strokeWidth={3} />
      </div>
    </div>
  ) : (
    <div className="flex justify-center">
      <div className="bg-red-50 rounded-full p-1">
        <X className="w-4 h-4 text-red-300" strokeWidth={3} />
      </div>
    </div>
  );
};

// Componente para Mobile: Card Compacto que expande
const MobileCompetitorCard = ({ opt }: { opt: Option }) => {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <div className="bg-white rounded-xl border border-gray-200 overflow-hidden mb-3">
      <button 
        onClick={() => setIsOpen(!isOpen)}
        className="w-full flex items-center justify-between p-4 bg-gray-50 active:bg-gray-100 transition-colors"
      >
        <div className="flex items-center gap-3">
          <span className="text-2xl">{opt.icon}</span>
          <div className="text-left">
            <span className="font-bold text-gray-700 block">{opt.title}</span>
            <span className="text-xs text-gray-500 font-medium">{opt.price}</span>
          </div>
        </div>
        {isOpen ? <ChevronUp className="text-gray-400" /> : <ChevronDown className="text-gray-400" />}
      </button>

      <AnimatePresence>
        {isOpen && (
          <motion.div
            initial={{ height: 0 }}
            animate={{ height: "auto" }}
            exit={{ height: 0 }}
            className="overflow-hidden"
          >
            <div className="p-4 border-t border-gray-100 bg-white grid grid-cols-2 gap-4 text-sm">
              <div className="flex flex-col items-center p-2 bg-gray-50 rounded-lg">
                <span className="text-[10px] uppercase text-gray-400 font-bold mb-1">Tempo</span>
                <span className="font-semibold text-gray-700 text-center leading-tight">{opt.time}</span>
              </div>
              <div className="flex flex-col items-center p-2 bg-gray-50 rounded-lg">
                <span className="text-[10px] uppercase text-gray-400 font-bold mb-1">Privacidade</span>
                <span className="font-semibold text-gray-700 text-center leading-tight">{opt.privacy}</span>
              </div>
              <div className="flex flex-col items-center">
                <span className="text-[10px] uppercase text-gray-400 font-bold mb-1">Personalizado?</span>
                {renderBoolean(opt.custom)}
              </div>
              <div className="flex flex-col items-center">
                <span className="text-[10px] uppercase text-gray-400 font-bold mb-1">Plano de Ação?</span>
                {renderBoolean(opt.action)}
              </div>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
};

export const Comparison: React.FC = () => {
  const options: Option[] = [
    {
      title: "DNA DO CASAL",
      icon: "🧬",
      time: "10 minutos",
      price: "R$ 29,97",
      custom: true,
      action: true,
      privacy: "100% Confidencial",
      isHighlight: true,
      opacity: "opacity-100"
    },
    {
      title: "Terapia de Casal",
      icon: "👨‍⚕️",
      time: "3-6 meses",
      price: "R$ 2.000+",
      custom: true,
      action: true,
      privacy: "Expõe p/ terceiro",
      isHighlight: false,
      opacity: "opacity-70"
    },
    {
      title: "Livros",
      icon: "📚",
      time: "Semanas lendo",
      price: "R$ 50-150",
      custom: false,
      action: false,
      privacy: "-",
      isHighlight: false,
      opacity: "opacity-70"
    },
    {
      title: "Testes Online",
      icon: "💻",
      time: "30 minutos",
      price: "R$ 0-50",
      custom: false,
      action: false,
      privacy: "Genérico",
      isHighlight: false,
      opacity: "opacity-70"
    }
  ];

  return (
    <Section className="bg-white overflow-hidden">
      <div className="text-center mb-8 md:mb-12">
        <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
          Por Que <span className="text-brand-purple">DNA do Casal</span> é Diferente?
        </h2>
        <p className="text-gray-500 max-w-2xl mx-auto">
          Compare e veja a diferença brutal de valor, tempo e resultado.
        </p>
      </div>

      {/* --- DESKTOP VIEW (GRID) --- */}
      <div className="hidden md:grid md:grid-cols-4 gap-6 items-end">
        {/* Renderiza na ordem original para desktop: Terapia, Livros, Testes, DNA */}
        {[options[1], options[2], options[3], options[0]].map((opt, idx) => (
          <div 
            key={idx} 
            className={`
              relative rounded-xl flex flex-col h-full w-auto
              ${opt.isHighlight ? 'transform scale-105 shadow-xl z-10' : 'opacity-100 hover:opacity-100 transition-opacity duration-300 border border-gray-200'}
            `}
          >
            {opt.isHighlight && (
              <div className="absolute inset-0 bg-gradient-to-br from-[#6366f1] to-[#ec4899] rounded-xl -m-[2px]" />
            )}

            <div className={`relative h-full flex flex-col p-6 rounded-[10px] ${
              opt.isHighlight ? 'bg-gradient-to-b from-purple-50 to-pink-50' : 'bg-white'
            }`}>
              
              {opt.isHighlight && (
                <div className="absolute -top-4 left-1/2 transform -translate-x-1/2 bg-gradient-to-r from-[#6366f1] to-[#ec4899] text-white text-xs font-bold px-4 py-1.5 rounded-full shadow-md whitespace-nowrap tracking-wider z-20">
                  MELHOR ESCOLHA
                </div>
              )}

              <div className="text-center mb-6 mt-2">
                <div className="text-4xl mb-3">{opt.icon}</div>
                <h3 className={`font-bold text-lg ${opt.isHighlight ? 'text-brand-purple' : 'text-gray-700'}`}>
                  {opt.title}
                </h3>
              </div>

              <div className="space-y-4 flex-grow">
                {/* Desktop Rows */}
                <div className="flex flex-col items-center text-center pb-3 border-b border-gray-200/50 last:border-0">
                  <span className="text-xs uppercase text-gray-400 font-semibold mb-1">Tempo</span>
                  <div className={`font-semibold ${opt.isHighlight ? 'text-green-600' : 'text-gray-600'}`}>
                    {opt.time}
                  </div>
                </div>

                <div className="flex flex-col items-center text-center pb-3 border-b border-gray-200/50 last:border-0 w-full">
                  {!opt.isHighlight && <span className="text-xs uppercase text-gray-400 font-semibold mb-1">Preço</span>}
                  
                  {opt.isHighlight ? (
                    <div className="flex flex-col items-center w-full py-2">
                      <div className="bg-[#10b981] text-white px-3 py-1 rounded-full text-xs font-bold mb-2">
                        70% OFF
                      </div>
                      <div className="flex flex-col items-center leading-none mb-1">
                        <span className="text-gray-400 line-through text-base font-medium">{ORIGINAL_PRICE}</span>
                      </div>
                      <div className="text-5xl font-extrabold text-brand-purple leading-none tracking-tighter my-1">
                        {opt.price.replace(' ', '')}
                      </div>
                      
                      {/* BOTÃO CTA DESKTOP */}
                      <div className="mt-2 w-full">
                        <Button fullWidth className="text-sm py-2 shadow-sm" variant="primary">
                          QUERO AGORA
                        </Button>
                      </div>

                    </div>
                  ) : (
                    <div className="font-semibold text-gray-600">{opt.price}</div>
                  )}
                </div>

                <div className="flex flex-col items-center text-center pb-3 border-b border-gray-200/50 last:border-0">
                  <span className="text-xs uppercase text-gray-400 font-semibold mb-1">Personalizado</span>
                  {renderBoolean(opt.custom)}
                </div>

                <div className="flex flex-col items-center text-center pb-3 border-b border-gray-200/50 last:border-0">
                  <span className="text-xs uppercase text-gray-400 font-semibold mb-1">Plano de Ação</span>
                  {renderBoolean(opt.action)}
                </div>

                <div className="flex flex-col items-center text-center">
                  <span className="text-xs uppercase text-gray-400 font-semibold mb-1">Privacidade</span>
                  <div className={`font-semibold text-sm ${opt.isHighlight ? 'text-green-600' : 'text-gray-500'}`}>
                    {opt.privacy}
                  </div>
                </div>
              </div>
            </div>
          </div>
        ))}
      </div>

      {/* --- MOBILE VIEW (STACKED) --- */}
      <div className="md:hidden flex flex-col">
        
        {/* 1. Card Principal (DNA DO CASAL) - Sempre Visível e Full Width */}
        <div className="relative rounded-xl mb-8 mt-2">
           <div className="absolute inset-0 bg-gradient-to-br from-[#6366f1] to-[#ec4899] rounded-xl -m-[2px] animate-pulse" />
           <div className="relative bg-white rounded-[10px] p-6 text-center shadow-2xl">
              
              <div className="absolute -top-4 left-1/2 transform -translate-x-1/2 bg-gradient-to-r from-[#6366f1] to-[#ec4899] text-white text-xs font-bold px-6 py-2 rounded-full shadow-lg z-20">
                  RECOMENDADO
              </div>

              <div className="mt-4 mb-4">
                <span className="text-5xl">🧬</span>
                <h3 className="text-2xl font-black text-brand-purple mt-2">DNA DO CASAL</h3>
              </div>

              {/* Preço Mobile Otimizado */}
              <div className="bg-brand-light rounded-xl p-4 mb-6 border border-brand-purple/20">
                <div className="flex items-center justify-center gap-2 mb-1">
                  <span className="text-gray-400 line-through font-medium">{ORIGINAL_PRICE}</span>
                  <span className="bg-green-100 text-green-700 text-xs font-bold px-2 py-0.5 rounded-full">
                    -70%
                  </span>
                </div>
                <div className="text-[52px] leading-none font-extrabold text-gray-900 tracking-tight">
                  {options[0].price.replace('R$ ', '')}
                  <span className="text-2xl font-bold text-gray-500 ml-1">,97</span>
                </div>
                <div className="text-xs text-gray-500 mt-2 font-medium">pagamento único</div>
              </div>
              
              {/* BOTÃO CTA MOBILE */}
              <div className="mb-6 w-full">
                <Button fullWidth className="shadow-lg text-lg animate-pulse" variant="primary">
                  QUERO MEU RELATÓRIO
                </Button>
              </div>

              {/* Grid de Benefícios Mobile */}
              <div className="grid grid-cols-2 gap-3 mb-4">
                 <div className="bg-gray-50 p-2 rounded-lg">
                    <span className="block text-xs text-gray-400 uppercase font-bold">Tempo</span>
                    <span className="font-bold text-gray-800">10 min</span>
                 </div>
                 <div className="bg-gray-50 p-2 rounded-lg">
                    <span className="block text-xs text-gray-400 uppercase font-bold">Privacidade</span>
                    <span className="font-bold text-green-600">Total</span>
                 </div>
                 <div className="bg-gray-50 p-2 rounded-lg">
                    <span className="block text-xs text-gray-400 uppercase font-bold">Personalizado</span>
                    <div className="flex justify-center mt-1"><Check className="w-4 h-4 text-green-600" /></div>
                 </div>
                 <div className="bg-gray-50 p-2 rounded-lg">
                    <span className="block text-xs text-gray-400 uppercase font-bold">Plano Prático</span>
                    <div className="flex justify-center mt-1"><Check className="w-4 h-4 text-green-600" /></div>
                 </div>
              </div>
           </div>
        </div>

        {/* 2. Divisor */}
        <div className="relative flex py-2 items-center mb-4">
            <div className="flex-grow border-t border-gray-200"></div>
            <span className="flex-shrink-0 mx-4 text-gray-400 text-sm font-medium">Comparado com outras opções</span>
            <div className="flex-grow border-t border-gray-200"></div>
        </div>

        {/* 3. Lista de Concorrentes (Acordeão) */}
        <div className="space-y-1">
          <MobileCompetitorCard opt={options[1]} /> {/* Terapia */}
          <MobileCompetitorCard opt={options[2]} /> {/* Livros */}
          <MobileCompetitorCard opt={options[3]} /> {/* Testes */}
        </div>

      </div>

    </Section>
  );
};