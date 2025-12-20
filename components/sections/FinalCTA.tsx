import React from 'react';
import { ORIGINAL_PRICE } from '../../constants';
import { Button } from '../ui/Button';

export const FinalCTA: React.FC = () => {
  return (
    <section className="bg-[#f9fafb] py-16 md:py-20 flex justify-center border-t border-gray-100">
      <div className="max-w-[700px] w-full px-8 flex flex-col items-center text-center">
        
        {/* Alerta de Urgência */}
        <div className="bg-[#fef2f2] border-l-4 border-[#ef4444] p-4 md:p-5 mb-10 w-full rounded-r-lg shadow-sm text-left">
          <p className="text-red-700 font-bold text-sm md:text-base leading-snug flex gap-3 md:gap-2">
            <span className="shrink-0 text-lg">⚠️</span>
            <span>ATENÇÃO: O desconto de 70% expira em breve e o preço volta para {ORIGINAL_PRICE}</span>
          </p>
        </div>

        <h2 className="text-3xl md:text-4xl lg:text-5xl font-extrabold text-gray-900 mb-4 leading-tight">
          Você Está a 1 Clique de Entender Seu Relacionamento
        </h2>

        <p className="text-xl text-gray-600 mb-8 font-medium">
          Enquanto você lê isso:
        </p>

        <div className="bg-white p-6 md:p-8 rounded-2xl shadow-sm border border-gray-100 w-full mb-8 text-left">
          <ul className="space-y-4">
            {[
              "Seu parceiro pode estar se sentindo da mesma forma que você",
              "Mais uma briga pode acontecer amanhã pelo MESMO motivo de sempre",
              "Vocês podem estar a poucos passos de se entenderem de verdade"
            ].map((item, i) => (
              <li key={i} className="flex items-start gap-3">
                <span className="text-xl shrink-0 mt-0.5">⚠️</span>
                <span className="text-gray-700 font-medium text-lg leading-relaxed">{item}</span>
              </li>
            ))}
          </ul>
        </div>

        <p className="text-xl md:text-2xl font-bold text-gray-800 mb-8">
          O que você decide AGORA pode mudar tudo.
        </p>

        {/* Usando o componente Button para garantir rastreamento n8n/Pixel */}
        <Button size="lg" className="w-full md:w-auto animate-pulse">
          🧬 Sim, Quero Meu Relatório Agora
        </Button>

        <p className="text-sm text-gray-500 mt-3 font-medium text-center">
          👇 Leva 2 minutos para começar
        </p>

        <div className="flex flex-col md:flex-row items-center justify-center gap-3 md:gap-6 mt-8 text-sm font-medium text-gray-500">
           <span className="flex items-center gap-1.5">✅ Resultado em 10 minutos</span>
           <span className="flex items-center gap-1.5">🔒 100% Confidencial</span>
           <span className="flex items-center gap-1.5">💯 Garantia de 7 dias</span>
        </div>

      </div>
    </section>
  );
};