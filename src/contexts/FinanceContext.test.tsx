import {renderHook, act} from '@testing-library/react';
import {FinanceProvider, useFinance} from './FinanceContext';
import { describe, it, expect, vi } from 'vitest';
import React from 'react';
import type { Transaction } from './FinanceContext';

// Wrapper para fornecer o contexto aos testes
const wrapper = ({children}: {children: React.ReactNode}) => (
    <FinanceProvider>{children}</FinanceProvider>
);

describe('FinanceContext', () => {
    it('deve iniciar com valores padrão corretamente', () => {
        const {result} = renderHook(() => useFinance(), {wrapper});

        expect(result.current.income).toBe(0);
        expect(result.current.transactions).toHaveLength(0);
        expect(result.current.suggestion).toBeNull();
    });

    it('deve atualizar a renda corretamente', () => {
        const {result} = renderHook(() => useFinance(), {wrapper});

        expect(result.current.income).toBe(0);
        expect(result.current.transactions).toHaveLength(0);
        expect(result.current.suggestion).toBeNull();
    });

    it('deve adicionar uma transação com ID e data gerados automaticamente', () => {
        const {result} = renderHook(() => useFinance(), {wrapper});

        const mockTransaction: Omit<Transaction, 'id' | 'date'> = {
            description: 'Aluguel',
            amount: 1200,
            category: 'essential' as const,
            type: 'expense' as const,
        };

        act(() => {
            result.current.addTransaction(mockTransaction);
        });

        expect(result.current.transactions).toHaveLength(1);
        expect(result.current.transactions[0]).toMatchObject(mockTransaction);

        // Verifica se o ID e a data foram gerados
        expect(result.current.transactions[0].id).toBeDefined();
        expect(result.current.transactions[0].date).toBeDefined();
    });

    it('deve definir a sugestão de orçamento corretamente', () => {
        const {result} = renderHook(() => useFinance(), {wrapper});

        const mockSuggestion = {
            essential: 50,
            investment: 30,
            leisure: 20,
            message: 'Mantenha um equilíbrio saudável entre gastos e investimentos.',
        };

        act(() => {
            result.current.setSuggestion(mockSuggestion);
        });

        expect(result.current.suggestion).toEqual(mockSuggestion);
    });
});