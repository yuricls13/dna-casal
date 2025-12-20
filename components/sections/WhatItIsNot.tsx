import React from 'react';
import { X, Check } from 'lucide-react';
import { Section } from '../ui/Section';

export const WhatItIsNot: React.FC = () => {
  const notItems = [
    "Não é um teste de compatibilidade genérico da internet",
    "Não é um robô que dá respostas automáticas iguais pra todo mundo",
    "Não é leitura das suas mensagens por pessoas (é 100% automatizado por IA)",
    "Não substitui terapia profissional (mas complementa muito bem!)",
    "Não tem \"resposta certa\" - é sobre ENTENDER, não julgar",
    "Não é um verificador de traição (não fazemos isso)"
  ];

  return (
    <Section background="white" className="!py-[60px]">
      <div className="max-w-3xl mx-auto">
        <div className="text-center mb-10">
          <h2 className="text-2xl md:text-3xl font-bold text-gray-900 flex items-center justify-center gap-2">
            <span>⚠️</span> Importante: O Que o DNA do Casal NÃO É
          </h2>
        </div>

        <div className="mb-8 pl-2 md:pl-0">
          <div className="space-y-4">
            {notItems.map((item, index) => (
              <div key={index} className="flex items-start gap-3">
                <div className="mt-1 flex-shrink-0">
                  <div className="bg-red-50 rounded-full p-1">
                    <X className="w-4 h-4 text-[#ef4444]" strokeWidth={3} />
                  </div>
                </div>
                <span className="text-gray-700 text-lg leading-snug">{item}</span>
              </div>
            ))}
          </div>
        </div>

        <div className="bg-[#eef2ff] p-5 rounded-xl flex flex-col md:flex-row items-center justify-center gap-4 text-center md:text-left border border-indigo-100 shadow-sm">
           <div className="flex-shrink-0 bg-green-100 p-2 rounded-full">
             <Check className="w-6 h-6 text-green-600" strokeWidth={4} />
           </div>
           <p className="text-indigo-900 font-semibold text-lg">
             É uma análise científica PERSONALIZADA do SEU relacionamento único, baseada nas suas conversas reais
           </p>
        </div>
      </div>
    </Section>
  );
};
