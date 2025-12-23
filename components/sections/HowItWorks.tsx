import React from 'react';
import { Smartphone, Brain, FileText, ArrowRight, ArrowDown } from 'lucide-react';
import { motion } from 'framer-motion';
import { Section } from '../ui/Section';
import { Button } from '../ui/Button';

interface HowItWorksProps {
  onCtaClick?: () => void;
}

export const HowItWorks: React.FC<HowItWorksProps> = ({ onCtaClick }) => {
  const steps = [
    {
      icon: Smartphone,
      title: "Exporte a conversa",
      desc: "Vá no WhatsApp > Exportar conversa > Sem mídia. Leva 30 segundos."
    },
    {
      icon: Brain,
      title: "Análise com IA",
      desc: "Envie o arquivo. Nosso sistema processa e aplica testes de personalidade."
    },
    {
      icon: FileText,
      title: "Libere o relatório",
      desc: "Após a análise, pague para liberar o acesso ao dossiê completo de 10+ páginas."
    }
  ];

  return (
    <Section className="relative">
      <div className="text-center mb-16">
        <span className="text-brand-pink font-bold uppercase tracking-wider text-sm">Passo a Passo</span>
        <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mt-2 mb-4">
          Como funciona o <span className="text-brand-purple">DNA do Casal</span> 🧬
        </h2>
        <p className="text-gray-600 max-w-2xl mx-auto">
          A análise científica que revela os padrões invisíveis do seu relacionamento em 10 minutos
        </p>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-3 gap-8 relative mb-12">
        {steps.map((step, index) => (
          <motion.div
            key={index}
            initial={{ opacity: 0, scale: 0.95 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: index * 0.2 }}
            className="flex flex-col items-center text-center relative z-10"
          >
            <div className="w-20 h-20 bg-gradient-to-br from-brand-purple to-brand-pink rounded-2xl flex items-center justify-center shadow-xl mb-6 text-white transform rotate-3 hover:rotate-0 transition-transform duration-300">
              <step.icon className="w-10 h-10" />
            </div>
            
            <div className="bg-white p-6 rounded-2xl border border-gray-100 shadow-lg w-full min-h-[160px]">
              <div className="text-xs font-bold text-gray-400 uppercase mb-2">Passo 0{index + 1}</div>
              <h3 className="text-xl font-bold text-gray-900 mb-2">{step.title}</h3>
              <p className="text-gray-600 text-sm">{step.desc}</p>
            </div>

            {/* Arrows for desktop */}
            {index < steps.length - 1 && (
              <div className="hidden md:block absolute top-10 -right-[20%] text-gray-200">
                <ArrowRight className="w-12 h-12" />
              </div>
            )}
            {/* Arrows for mobile */}
            {index < steps.length - 1 && (
              <div className="md:hidden my-4 text-gray-200">
                <ArrowDown className="w-8 h-8" />
              </div>
            )}
          </motion.div>
        ))}
      </div>

      <div className="text-center">
        <Button onClick={onCtaClick}>Quero Começar Agora</Button>
        <p className="text-sm text-gray-500 mt-3 font-medium text-center">
          👇 Leva 2 minutos para começar
        </p>
      </div>
    </Section>
  );
};