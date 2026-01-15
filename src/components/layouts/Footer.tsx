import React from 'react';

export default function Footer() {
  return (
    <footer className="bg-gray-50 border-t border-gray-100 py-12">
      <div className="max-w-7xl mx-auto px-6 flex flex-col md:flex-row justify-between items-center gap-6">
        <div className="text-center md:text-left">
          <p className="text-gray-900 font-semibold">Financial Copilot</p>
          <p className="text-gray-500 text-sm mt-1">
            Planejamento financeiro inteligente com Llama-3.
          </p>
        </div>

        <div className="text-sm text-gray-400 text-center">
          <p>&copy; 2026 Todos os direitos reservados.</p>
          <p className="mt-1">
            Desenvolvido por <span className="text-gray-600 font-medium">Davi Konuma</span> — FATEC Sorocaba.
          </p>
        </div>

        <div className="flex gap-4">
          <span className="px-3 py-1 bg-white border border-gray-200 rounded-full text-[10px] font-bold text-gray-400 uppercase tracking-widest">
            Next.js + Tailwind
          </span>
        </div>
      </div>
    </footer>
  );
}