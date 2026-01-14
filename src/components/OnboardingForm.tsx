import React, { useState } from "react";
import { useFinance } from "@/contexts/FinanceContext";

export default function OnboardingForm() {
    const { setIncome, setSuggestion } = useFinance();

    const [formData, setFormData] = useState({
        income: '',
        expenses: '',
        debts: '',
    });

    const [isLoading, setIsLoading] = useState(false);
    const [error, setError] = useState<string | null>(null);

    const handleSubmit = async (e: React.FormEvent) => {
        e.preventDefault();
        setIsLoading(true);
        setError(null);

        try {
            const response = await fetch('/api/analyze', {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json',
                },
                body: JSON.stringify({
                    income: Number(formData.income),
                    expenses: Number(formData.expenses),
                    debts: Number(formData.debts),
                }),
            });

            if (!response.ok) {
                throw new Error('Falha na análise da IA');
            }

            const data = await response.json();
            setIncome(Number(formData.income));
            setSuggestion(data);

            console.log('Sugestão recebida:', data);
        } catch (err) {
            setError("Não conseguimos processar sua análise agora. Tente Novamente mais tarde.");
        } finally {
            setIsLoading(false);
        }
    };

    return (
        <div className="max-w-md mx-auto mt-10 p-6 bg-white rounded-2xl shadow-xl border-gray-100">
            <h2 className="text-2xl font-bold mb-2 text-gray-800">Bem-vindo ao Financial Copilot</h2>
            <p className="text-gray-500 mb-6 text-sm">Preencha os dados abaixo para nossa IA calcular sua estratégia financeira.</p>

            <form onSubmit={handleSubmit} className="space-y-5">
                <div>
                    <label className="block text-sm font-medium text-gray-700 mb-1">Renda Mensal (R$)</label>
                    <div className="relative">
                        <span className="absolute top-2 left-3 text-gray-400">R$</span>
                        <input 
                            type="number"
                            required
                            className="w-full pl-10 pr-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500"
                            placeholder="0,00"
                            value={formData.income}
                            onChange={(e) => setFormData({...formData, income: e.target.value})}
                        />
                    </div>
                </div> 

                <div>
                    <label className="block text-sm font-medium text-gray-700 mb-1">Gastos Mensais Fixos (R$)</label>
                    <div className="relative">
                        <span className="absolute top-2 left-3 text-gray-400">R$</span>
                        <input
                            type="number"
                            required
                            className="w-full pl-10 pr-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent outline-none transition" 
                            placeholder="Aluguel, contas, etc."
                            value={formData.expenses}
                            onChange={(e) => setFormData({...formData, expenses: e.target.value})}
                        />
                    </div>
                </div>

                <button
                    type="submit"
                    disabled={isLoading}
                    className="w-full bg-blue-600 hover:bg-blue-700 text-white font-semibold py-3 rounded-lg transition-all transform active:scale-95 disabled:opacity-50 disabled:cursor-not-allowed flex justify-center items-center"
                >
                    {isLoading ? (
                        <span className="animate-spin border-2 border-white border-t-transparent rounded-full h-5 w-5 mr-2"></span>
                     ) : null}
                    {isLoading ? 'Analisando perfil...' : 'Gerar Estratégia Financeira'}
                </button>

                {error && (
                    <p className="text-red-500 text-sm text-center mt-2 font-medium">{error}</p>
                )}
            </form>
        </div>
    );
} 