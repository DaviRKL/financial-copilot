import React, {createContext, useContext, useState, useMemo, ReactNode} from "react";

export interface Transaction {
    id: string;
    description: string;
    amount: number;
    category: string;
    type: 'income' | 'expense';
    date: string;
}

export interface BudgetSuggestion {
    essential: number;
    investment: number;
    leisure: number;
    message: string;
}

interface FinanceContextData {
    income: number;
    transactions: Transaction[];
    suggestion: BudgetSuggestion | null;
    setIncome: (value: number) => void;
    setSuggestion: (suggestion: BudgetSuggestion) => void;
    addTransaction: (transaction: Omit<Transaction, 'id' | 'date'>) => void;
}

const FinanceContext = createContext<FinanceContextData>({} as FinanceContextData);

export const FinanceProvider = ({children}: {children: ReactNode}) => {
    const [income, setIncome] = useState<number>(0);
    const [transactions, setTransactions] = useState<Transaction[]>([]);
    const [suggestion, setSuggestion] = useState<BudgetSuggestion | null>(null);

    const addTransaction = (data: Omit<Transaction, 'id' | 'date'>) => {
        const newTransaction: Transaction = {
            ...data,
            id: crypto.randomUUID(),
            date: new Date().toISOString(),
        };
        setTransactions((prev) => [...prev, newTransaction]);
    };

    const value = useMemo(() => ({
        income,
        transactions,
        suggestion,
        setIncome,
        setSuggestion,
        addTransaction,
    }), [income, transactions, suggestion]);

    return (
        <FinanceContext.Provider value={value}>
            {children}
        </FinanceContext.Provider>
    );
}

export const useFinance = () => {
    const context = useContext(FinanceContext);
    if (!context) {
        throw new Error("useFinance deve ser usado dentro de um FinanceProvider");
    }
    return context;
}