import React from 'react';
import OnboardingForm from '@/components/OnboardingForm';
import { SparklesIcon, ChevronLeftIcon } from '@heroicons/react/24/outline';
import Link from 'next/link';

export default function OnboardingPage() {
  return (
    <div className="min-h-screen bg-gray-50 flex flex-col">
      {/* Header Simples */}
      <header className="p-6">
        <div className="max-w-7xl mx-auto flex justify-between items-center">
          <Link 
            href="/" 
            className="flex items-center text-gray-500 hover:text-blue-600 transition-colors"
          >
            <ChevronLeftIcon className="h-5 w-5 mr-1" />
            Voltar
          </Link>
          <div className="text-xl font-bold text-blue-600 flex items-center gap-2">
            <SparklesIcon className="h-6 w-6" />
            Financial Copilot
          </div>
        </div>
      </header>

      {/* Conteúdo Centralizado */}
      <main className="flex-1 flex items-center justify-center p-6">
        <div className="w-full max-w-lg">
          <div className="text-center mb-8">
            <h1 className="text-3xl font-bold text-gray-900 mb-2">Configuração Inicial</h1>
            <p className="text-gray-500">
              Precisamos de alguns dados para que a nossa IA possa gerar o seu plano personalizado.
            </p>
          </div>

          <OnboardingForm />
        </div>
      </main>

      {/* Footer Discreto */}
      <footer className="py-8 text-center text-gray-400 text-xs">
        Seus dados são utilizados apenas para o cálculo do planejamento financeiro.
      </footer>
    </div>
  );
}