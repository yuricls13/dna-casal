import React from 'react';
import { motion } from 'framer-motion';
import { Section } from '../ui/Section';
import { Button } from '../ui/Button';
import { BENEFITS } from '../../constants';

export const Benefits: React.FC = () => {
  return (
    <Section background="light">
      <div className="text-center mb-16">
        <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
          O Que Você Vai Descobrir no Seu Relatório 📊
        </h2>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
        {BENEFITS.map((benefit, index) => (
          <motion.div
            key={index}
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.4, delay: index * 0.1 }}
            className="bg-white p-8 rounded-2xl shadow-sm hover:shadow-xl transition-all duration-300 border border-gray-100 group"
          >
            <div className="w-12 h-12 bg-indigo-50 rounded-xl flex items-center justify-center mb-6 group-hover:bg-indigo-100 transition-colors">
              <benefit.icon className="w-6 h-6 text-brand-purple" />
            </div>
            <h3 className="text-xl font-bold text-gray-900 mb-3">{benefit.title}</h3>
            <p className="text-gray-600 leading-relaxed">{benefit.description}</p>
          </motion.div>
        ))}
      </div>

      <div className="mt-12 text-center">
        <Button>Quero Descobrir Meus Padrões</Button>
        <p className="text-sm text-gray-500 mt-3 font-medium text-center">
          👇 Leva 2 minutos para começar
        </p>
      </div>
    </Section>
  );
};
