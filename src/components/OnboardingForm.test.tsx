import { render, screen, fireEvent, waitFor } from '@testing-library/react';
import OnboardingForm from './OnboardingForm';
import { FinanceProvider } from '@/contexts/FinanceContext';
import { describe, it, expect, vi } from 'vitest';
import React from 'react';
import { useRouter } from 'next/router';

// Mock do useRouter do Next.js
vi.mock('next/router', () => ({
    useRouter: vi.fn()
}));

describe('OnboardingForm Navigation', () => {
    it('deve navegar para /dashboard após submissão bem-sucedida', async () => {
        const pushMock = vi.fn();
        
        vi.mocked(useRouter).mockReturnValue({
            push: pushMock,
        } as any);

        render(
            <FinanceProvider>
                <OnboardingForm />
            </FinanceProvider>
        );

        // 3. Preenchimento e clique no botão de submissão
        fireEvent.change(screen.getByLabelText(/Renda Mensal/i), { target: { value: '5000' } });
        fireEvent.change(screen.getByLabelText(/Gastos Mensais Fixos/i), { target: { value: '2000' } });
        fireEvent.click(screen.getByRole('button', { name: /Gerar Estratégia Financeira/i }));

        // Verifica se o loading aparece
        expect(screen.getByText(/Analisando perfil.../i)).toBeInTheDocument();

        // Verificação final: A função push foi chamada com o caminho correto?
        await waitFor(() => {
            expect(pushMock).toHaveBeenCalledWith('/dashboard');
        });

    });
});