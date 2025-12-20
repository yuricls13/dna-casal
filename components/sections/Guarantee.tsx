import React from 'react';
import { motion } from 'framer-motion';

export const Guarantee: React.FC = () => {
  return (
    <section className="bg-gradient-to-br from-[#eef2ff] to-[#fce7f3] py-[60px] px-[30px]">
      <div className="max-w-[800px] mx-auto">
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
            💯 Garantia Blindada de 7 Dias
          </h2>
          <p className="text-lg md:text-xl text-gray-600 font-medium">
            Você não tem NADA a perder. Todo o risco é nosso.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-12">
          {[
            "Se por QUALQUER MOTIVO você não ficar satisfeito, mande um e-mail",
            "Sem perguntas, sem burocracia, sem enrolação",
            "100% do seu dinheiro de volta em até 3 dias úteis"
          ].map((step, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.2 }}
              className="flex flex-col items-center text-center group"
            >
              <div className="w-16 h-16 rounded-full bg-brand-purple text-white text-[40px] font-bold flex items-center justify-center mb-4 shadow-lg shrink-0 leading-none group-hover:scale-110 transition-transform duration-300">
                {index + 1}
              </div>
              <p className="text-gray-700 font-medium leading-relaxed">
                {step}
              </p>
            </motion.div>
          ))}
        </div>

        <motion.div
          initial={{ opacity: 0, scale: 0.95 }}
          whileInView={{ opacity: 1, scale: 1 }}
          viewport={{ once: true }}
          className="bg-white p-6 md:p-8 rounded-xl shadow-lg border border-white/50 text-center transform hover:shadow-xl transition-all duration-300"
        >
          <h3 className="text-xl font-bold text-gray-900 mb-3">
            Por que fazemos isso?
          </h3>
          <p className="text-gray-600 leading-relaxed">
            Porque temos certeza absoluta que o DNA do Casal vai revelar coisas que você NUNCA tinha percebido sobre seu relacionamento. A análise é tão boa que assumimos todo o risco.
          </p>
        </motion.div>
      </div>
    </section>
  );
};
