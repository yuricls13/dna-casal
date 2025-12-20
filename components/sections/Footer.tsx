import React from 'react';

export const Footer: React.FC = () => {
  return (
    <footer className="bg-white border-t border-gray-100 py-[40px] px-[20px]">
      <div className="container mx-auto max-w-4xl text-center flex flex-col gap-4">
        
        {/* Linha 1: Logo */}
        <div className="flex items-center justify-center gap-2">
           <span className="text-2xl">🧬</span>
           <span className="font-bold text-gray-900 text-[20px]">DNA do Casal</span>
        </div>
        
        {/* Linha 2: Links */}
        <div className="flex flex-wrap justify-center items-center gap-2 text-sm text-[#6b7280]">
          <a href="#" className="hover:text-[#6366f1] transition-colors">Política de Privacidade</a>
          <span className="text-gray-300">|</span>
          <a href="#" className="hover:text-[#6366f1] transition-colors">Termos de Uso</a>
          <span className="text-gray-300">|</span>
          <a href="#" className="hover:text-[#6366f1] transition-colors">Contato</a>
        </div>

        {/* Linha 3: E-mail */}
        <div className="flex items-center justify-center gap-2 text-sm text-[#6b7280]">
          <span className="text-base">📧</span>
          <a href="mailto:suporte@dnadocasal.com.br" className="hover:text-[#6366f1] transition-colors font-medium">
            suporte@dnadocasal.com.br
          </a>
        </div>

        {/* Linha 4: Copyright & Disclaimer */}
        <div className="mt-4 text-[12px] text-gray-400 space-y-2 leading-relaxed max-w-2xl mx-auto">
          <p>© 2025 DNA do Casal. Todos os direitos reservados.</p>
          <p>
            Este site não faz parte do site do Facebook ou Facebook Inc. Além disso, este site NÃO é endossado pelo Facebook de forma alguma. Facebook é uma marca comercial da Facebook, Inc.
          </p>
        </div>

      </div>
    </footer>
  );
};
