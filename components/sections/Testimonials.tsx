import React from 'react';
import { Star } from 'lucide-react';
import { motion } from 'framer-motion';
import { Section } from '../ui/Section';

export const Testimonials: React.FC = () => {
  const testimonials = [
    {
      name: "Júlia & Rafa",
      text: "Eu e o Rafa estávamos brigando todo dia por bobagem. O relatório mostrou exatamente onde a gente errava na comunicação. Foi um divisor de águas!",
      stars: 5
    },
    {
      name: "Marcos Silva",
      text: "Impressionante como a IA acertou minha personalidade e a dela só com a conversa. As dicas práticas ajudaram demais a gente a se entender sem brigar.",
      stars: 5
    },
    {
      name: "Ana Paula",
      text: "Melhor investimento que fiz. Mais barato que uma sessão de terapia e abriu nossos olhos para padrões que a gente repetia há anos. Recomendo!",
      stars: 5
    }
  ];

  return (
    <Section background="light">
      <div className="text-center mb-12">
        <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
          O Que os Casais Estão Dizendo 💬
        </h2>
        <div className="w-24 h-1 bg-gradient-to-r from-brand-purple to-brand-pink mx-auto rounded-full"></div>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
        {testimonials.map((t, i) => (
          <motion.div
            key={i}
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: i * 0.1 }}
            className="bg-white p-6 rounded-xl shadow-sm border border-gray-100"
          >
            <div className="flex gap-1 mb-4">
              {[...Array(t.stars)].map((_, i) => (
                <Star key={i} className="w-5 h-5 fill-yellow-400 text-yellow-400" />
              ))}
            </div>
            <p className="text-gray-600 mb-4 italic">"{t.text}"</p>
            <p className="font-bold text-gray-900">{t.name}</p>
          </motion.div>
        ))}
      </div>
    </Section>
  );
};