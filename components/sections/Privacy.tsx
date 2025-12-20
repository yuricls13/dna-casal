import React from 'react';
import { motion } from 'framer-motion';
import { Check, Lock } from 'lucide-react';
import { Section } from '../ui/Section';

export const Privacy: React.FC = () => {
  const privacyItems = [
    "Análise 100% automatizada por IA - Nenhum humano lê suas mensagens",
    "Dados não ficam salvos - Após gerar o relatório, tudo é apagado automaticamente",
    "Criptografia de ponta a ponta - Mesma segurança usada por bancos",
    "Conformidade LGPD - Seus dados são seus, sempre",
    "Relatório privado - Só vai pro SEU e-mail, mais ninguém tem acesso"
  ];

  return (
    <Section background="white">
      <div className="max-w-3xl mx-auto">
        <div className="text-center mb-10">
          <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
            🔒 Sua Privacidade é Sagrada
          </h2>
          <p className="text-lg text-gray-600 font-medium">
            Nós levamos segurança MUITO a sério:
          </p>
        </div>

        <div className="bg-white rounded-2xl mb-8 pl-4 md:pl-0">
          <div className="space-y-4">
            {privacyItems.map((item, index) => (
              <motion.div 
                key={index}
                initial={{ opacity: 0, x: -10 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.3, delay: index * 0.1 }}
                className="flex items-start gap-3"
              >
                <div className="mt-1 flex-shrink-0">
                   <div className="bg-green-100 rounded-full p-1">
                      <Check className="w-4 h-4 text-[#10b981]" strokeWidth={3} />
                   </div>
                </div>
                <span className="text-gray-700 text-lg leading-snug">{item}</span>
              </motion.div>
            ))}
          </div>
        </div>

        <motion.div 
          initial={{ opacity: 0, y: 10 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="bg-[#f9fafb] p-5 rounded-lg flex items-center justify-center gap-2 text-gray-500 font-medium text-sm md:text-base border border-gray-100"
        >
          <Lock className="w-5 h-5 text-gray-400" />
          <span>Certificado SSL 256-bit | Conforme LGPD</span>
        </motion.div>
      </div>
    </Section>
  );
};
