import React from 'react';
import { motion } from 'framer-motion';
import { Check } from 'lucide-react';
import { Section } from '../ui/Section';

export const SocialProof: React.FC = () => {
  const checklistItems = [
    "Análise de Sentimentos",
    "Nuvem de Palavras",
    "Gráficos de Personalidade",
    "Cronologia das Brigas",
    "Scripts de Conversas Prontos",
    "Plano de Ação Semanal"
  ];

  return (
    <Section background="white">
      <div className="flex flex-col lg:flex-row items-center gap-12">
        {/* Left Column: Content & Checklist */}
        <div className="w-full lg:w-1/2 order-2 lg:order-1">
          <span className="text-brand-pink font-bold uppercase tracking-wider text-sm">NA PRÁTICA</span>
          <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mt-2 mb-6">
            Veja Como É o Relatório Por Dentro
          </h2>
          <p className="text-lg text-gray-600 mb-8 leading-relaxed">
            Não é um teste de internet genérico. É um dossiê completo de 10+ páginas analisando especificamente a SUA dinâmica de casal, com gráficos, explicações e orientações práticas.
          </p>
          
          <ul className="space-y-4">
            {checklistItems.map((item, i) => (
              <li key={i} className="flex items-center gap-3 text-gray-700 font-medium">
                <div className="w-6 h-6 rounded-full bg-green-100 flex items-center justify-center shrink-0">
                  <Check className="w-4 h-4 text-[#10b981]" strokeWidth={3} />
                </div>
                <span>{item}</span>
              </li>
            ))}
          </ul>
        </div>

        {/* Right Column: Mockup */}
        <motion.div 
          initial={{ opacity: 0, x: 50 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="w-full lg:w-1/2 relative order-1 lg:order-2"
        >
          {/* Mockup Container */}
          <div className="relative bg-gray-200 rounded-xl p-4 md:p-8 overflow-hidden shadow-2xl">
            {/* Abstract representation of a report page */}
            <div className="bg-white rounded shadow-lg aspect-[3/4] p-6 md:p-8 flex flex-col gap-4 transform rotate-[-2deg] hover:rotate-0 transition-transform duration-500 origin-bottom-left">
              <div className="h-4 bg-gray-200 rounded w-3/4 mb-4"></div>
              <div className="flex gap-4 mb-4">
                <div className="w-1/2 h-32 bg-indigo-50 rounded border border-indigo-100 flex items-center justify-center">
                  <div className="w-16 h-16 rounded-full border-4 border-indigo-200 border-t-brand-purple"></div>
                </div>
                <div className="w-1/2 flex flex-col gap-2">
                  <div className="h-2 bg-gray-100 rounded w-full"></div>
                  <div className="h-2 bg-gray-100 rounded w-5/6"></div>
                  <div className="h-2 bg-gray-100 rounded w-full"></div>
                </div>
              </div>
              <div className="h-2 bg-gray-100 rounded w-full"></div>
              <div className="h-2 bg-gray-100 rounded w-full"></div>
              <div className="h-2 bg-gray-100 rounded w-4/5"></div>
              
              <div className="mt-4 p-4 bg-brand-light rounded-lg border-l-4 border-brand-pink">
                <div className="h-2 bg-gray-200 rounded w-1/3 mb-2"></div>
                <div className="h-2 bg-gray-200 rounded w-full"></div>
              </div>
            </div>
            
            {/* Floating Badge */}
            <div className="absolute top-10 right-10 bg-white shadow-lg rounded-full px-4 py-2 text-xs font-bold text-brand-purple border border-gray-100 animate-bounce">
              10+ Páginas
            </div>
          </div>
        </motion.div>
      </div>
    </Section>
  );
};