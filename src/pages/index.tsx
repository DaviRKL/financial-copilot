import React from 'react';
import Link from 'next/link';
import { ChartPieIcon, ShieldCheckIcon, SparklesIcon } from '@heroicons/react/24/outline';

export default function Home() {
  return (
    <div className="min-h-screen bg-white text-gray-900 font-sans">
      

      <main className="max-w-7xl mx-auto px-8 pt-20 pb-32 grid lg:grid-cols-2 gap-12 items-center">
        <div>
          <h1 className="text-5xl md:text-6xl font-extrabold tracking-tight mb-6">
            Sua saúde financeira guiada por <span className="text-blue-600">IA.</span>
          </h1>
          <p className="text-lg text-gray-600 mb-10 max-w-lg leading-relaxed">
            O Financial Copilot utiliza inteligência artificial de ponta para analisar seus gastos e sugerir a melhor estratégia para você investir, economizar e viver melhor.
          </p>
          
          <div className="flex flex-col sm:flex-row gap-4">
            <Link 
              href="/onboarding"
              className="px-8 py-4 bg-blue-600 text-white font-bold rounded-xl hover:bg-blue-700 transition-all text-center shadow-lg shadow-blue-200"
            >
              Começar Agora
            </Link>
            <Link 
              href="/dashboard"
              className="px-8 py-4 border border-gray-200 text-gray-700 font-bold rounded-xl hover:bg-gray-50 transition-all text-center"
            >
              Ver Dashboard
            </Link>
          </div>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
          <div className="p-6 bg-blue-50 rounded-3xl border border-blue-100">
            <ChartPieIcon className="h-10 w-10 text-blue-600 mb-4" />
            <h3 className="font-bold text-lg mb-2">Análise Inteligente</h3>
            <p className="text-gray-600 text-sm">Divisão automática do seu orçamento baseada no modelo 50/30/20.</p>
          </div>
          <div className="p-6 bg-green-50 rounded-3xl border border-green-100 mt-0 sm:mt-8">
            <ShieldCheckIcon className="h-10 w-10 text-green-600 mb-4" />
            <h3 className="font-bold text-lg mb-2">Segurança Total</h3>
            <p className="text-gray-600 text-sm">Seus dados são processados com criptografia e privacidade absoluta.</p>
          </div>
        </div>
      </main>

    </div>
  );
}