import React from 'react';
import { motion } from 'framer-motion';
import { Section } from '../ui/Section';
import { PAIN_POINTS } from '../../constants';

export const Problems: React.FC = () => {
  return (
    <Section background="light">
      <div className="text-center mb-12">
        <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
          Você Se Reconhece em Alguma Dessas Situações?
        </h2>
        <div className="w-24 h-1 bg-gradient-to-r from-brand-purple to-brand-pink mx-auto rounded-full"></div>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        {PAIN_POINTS.map((item, index) => (
          <motion.div
            key={index}
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.4, delay: index * 0.1 }}
            className="bg-white p-6 rounded-xl shadow-sm border border-gray-100 hover:shadow-md transition-shadow"
          >
            <div className="flex items-start gap-4">
              <div className="bg-red-50 p-3 rounded-lg flex-shrink-0">
                <item.icon className="w-6 h-6 text-red-500" />
              </div>
              <p className="text-gray-700 font-medium leading-relaxed">
                {item.text}
              </p>
            </div>
          </motion.div>
        ))}
      </div>
    </Section>
  );
};