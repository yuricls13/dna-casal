import React from 'react';
import { Dna, Clock, Lock } from 'lucide-react';
import { motion } from 'framer-motion';
import { Button } from '../ui/Button';
import { Section } from '../ui/Section';

export const Hero: React.FC = () => {
  return (
    <Section className="pt-12 pb-16 md:pt-20 md:pb-20 overflow-hidden relative" enableAnimation={false}>
      <div className="flex flex-col items-center text-center relative z-10">
        <motion.div 
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          className="inline-flex items-center gap-2 bg-brand-light px-4 py-2 rounded-full mb-6 border border-gray-200"
        >
          <Dna className="w-5 h-5 text-brand-purple" />
          <span className="font-semibold text-brand-purple text-sm uppercase tracking-wide">DNA do Casal</span>
        </motion.div>

        <motion.h1 
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.1 }}
          className="text-4xl md:text-6xl font-extrabold text-gray-900 leading-tight mb-6 max-w-4xl"
        >
          Seu Relacionamento é Tóxico ou Vocês Só Não Sabem Se <span className="text-transparent bg-clip-text bg-gradient-to-r from-brand-purple to-brand-pink">Comunicar?</span>
        </motion.h1>

        <motion.p 
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.2 }}
          className="text-lg md:text-xl text-gray-600 mb-8 max-w-2xl"
        >
          Descubra em 10 minutos os padrões escondidos que fazem vocês brigarem sempre pelas mesmas coisas.
        </motion.p>

        <motion.div 
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.3 }}
          className="flex flex-col items-center w-full"
        >
          <Button className="w-full md:w-auto">
            🧬 Analisar Meu Relacionamento Agora
          </Button>

          <p className="text-sm text-gray-500 mt-3 mb-6 font-medium text-center">
            👇 Leva 2 minutos para começar
          </p>
          
          <div className="flex items-center gap-4 text-sm text-gray-500 font-medium">
            <span className="flex items-center gap-1"><Lock className="w-4 h-4 text-green-500" /> 100% Confidencial</span>
            <span className="flex items-center gap-1"><Clock className="w-4 h-4 text-brand-purple" /> Resultado em 10min</span>
          </div>
        </motion.div>
      </div>

      {/* Decorative background elements */}
      <div className="absolute top-0 left-0 w-full h-full overflow-hidden -z-10 pointer-events-none">
        <div className="absolute -top-[10%] -left-[10%] w-[40%] h-[40%] bg-brand-purple/5 rounded-full blur-3xl opacity-60"></div>
        <div className="absolute top-[20%] -right-[10%] w-[30%] h-[30%] bg-brand-pink/5 rounded-full blur-3xl opacity-60"></div>
      </div>
    </Section>
  );
};