import React from 'react';
import Link from 'next/link';
import { useRouter } from 'next/router';
import { ChevronRightIcon, HomeIcon } from '@heroicons/react/20/solid';

// Mapeamento de rotas para nomes amigáveis
const routeLabels: Record<string, string> = {
  onboarding: 'Cadastro Inicial',
  dashboard: 'Painel de Controle',
};

export default function Breadcrumbs() {
  const router = useRouter();
  const pathnames = router.pathname.split('/').filter((x) => x);

  // Não mostrar breadcrumbs na Home
  if (router.pathname === '/') return null;

  return (
    <nav className="flex px-6 py-3 text-gray-400 bg-gray-50/50 border-b border-gray-100" aria-label="Breadcrumb">
      <ol className="inline-flex items-center space-x-1 md:space-x-3 max-w-7xl mx-auto w-full">
        <li className="inline-flex items-center">
          <Link href="/" className="inline-flex items-center text-xs font-medium hover:text-blue-600 transition-colors">
            <HomeIcon className="w-3 h-3 mr-2" />
            Início
          </Link>
        </li>
        
        {pathnames.map((value, index) => {
          const last = index === pathnames.length - 1;
          const to = `/${pathnames.slice(0, index + 1).join('/')}`;
          const label = routeLabels[value] || value;

          return (
            <li key={to}>
              <div className="flex items-center">
                <ChevronRightIcon className="w-4 h-4 text-gray-300 mx-1" />
                {last ? (
                  <span className="ml-1 text-xs font-semibold text-gray-700 md:ml-2">
                    {label}
                  </span>
                ) : (
                  <Link
                    href={to}
                    className="ml-1 text-xs font-medium hover:text-blue-600 md:ml-2 transition-colors"
                  >
                    {label}
                  </Link>
                )}
              </div>
            </li>
          );
        })}
      </ol>
    </nav>
  );
}