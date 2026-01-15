import React from 'react';
import Link from 'next/link';
import { useRouter } from 'next/router';
import { SparklesIcon } from '@heroicons/react/24/outline';

export default function Navbar() {
  const router = useRouter();

  const navLinks = [
    { name: 'Início', href: '/' },
    { name: 'Onboarding', href: '/onboarding' },
    { name: 'Dashboard', href: '/dashboard' },
  ];

  return (
    <nav className="sticky top-0 z-50 bg-white/80 backdrop-blur-md border-b border-gray-100">
      <div className="max-w-7xl mx-auto px-6 h-16 flex items-center justify-between">
        {/* Logo */}
        <Link href="/" className="flex items-center gap-2 group">
          <SparklesIcon className="h-7 w-7 text-blue-600 group-hover:rotate-12 transition-transform" />
          <span className="text-xl font-bold bg-clip-text text-transparent bg-gradient-to-r from-blue-600 to-blue-400">
            Financial Copilot
          </span>
        </Link>

        {/* Desktop Links */}
        <div className="hidden md:flex items-center gap-8">
          {navLinks.map((link) => (
            <Link
              key={link.href}
              href={link.href}
              className={`text-sm font-medium transition-colors ${
                router.pathname === link.href 
                  ? 'text-blue-600' 
                  : 'text-gray-500 hover:text-gray-900'
              }`}
            >
              {link.name}
            </Link>
          ))}
        </div>
      </div>
    </nav>
  );
}