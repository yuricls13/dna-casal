import React from 'react';

export const StatsBar: React.FC = () => {
  return (
    <div className="bg-[#f9fafb] py-5 border-y border-[#e5e7eb] flex items-center justify-center px-4">
      <div className="flex items-center gap-3 text-center justify-center">
        <span className="text-[24px] leading-none shrink-0">📊</span>
        <p className="text-base font-semibold text-gray-900">
          Mais de <span className="text-[#6366f1]">247</span> casais já descobriram seus padrões invisíveis
        </p>
      </div>
    </div>
  );
};
