import React from 'react';
import { motion } from 'framer-motion';
import { Section } from '../ui/Section';

export const TargetAudience: React.FC = () => {
  const cases = [
    {
      emoji: "💔",
      title: "Casais em Crise",
      text: "Vocês brigam tanto que já pensaram em terminar, mas ainda se amam e querem uma chance"
    },
    {
      emoji: "🤔",
      title: "Casais Curiosos",
      text: "Querem se conhecer melhor e prevenir problemas antes que eles apareçam"
    },
    {
      emoji: "😰",
      title: "Quem Suspeita de Toxicidade",
      text: "Precisa de uma análise objetiva pra saber se deve continuar ou não"
    },
    {
      emoji: "💸",
      title: "Quem Não Pode Pagar Terapia",
      text: "Quer ajuda profissional mas não tem R$ 2.000+ pra gastar em terapia"
    }
  ];

  return (
    <Section>
      <div className="text-center mb-12">
        <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
          Para Quem É o <span className="text-brand-purple">DNA do Casal</span>?
        </h2>
        <div className="w-24 h-1 bg-gradient-to-r from-brand-purple to-brand-pink mx-auto rounded-full"></div>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-6 max-w-4xl mx-auto">
        {cases.map((item, index) => (
          <motion.div
            key={index}
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.4, delay: index * 0.1 }}
            className="bg-white p-6 rounded-xl border border-gray-200 hover:shadow-lg transition-all duration-300 flex flex-col items-start text-left"
          >
            <div className="text-5xl mb-4">{item.emoji}</div>
            <h3 className="text-xl font-bold text-gray-900 mb-2">{item.title}</h3>
            <p className="text-gray-600 leading-relaxed">{item.text}</p>
          </motion.div>
        ))}
      </div>
    </Section>
  );
};
