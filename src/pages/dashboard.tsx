import { useFinance } from "@/contexts/FinanceContext";
import BudgetChart from "@/components/charts/BudgetChart";

export default function Dashboard() {
    const { income, suggestion } = useFinance();

    return (
        <div className="min-h-screen bg-gray-50 p-6">
            <div className="max-w-6xl mx-auto">
                <header className="flex justify-between items-end mb-8">
                    <div>
                        <h1 className="text-3xl font-bold text-gray-900 mb-8">Seu Dashboard</h1>
                        <p className="text-gray-500">Gestão financeira personalizada para você.</p>
                    </div>
                    <div className="bg-white p-4 rounded-xl shadow-sm border border-gray-100 text-right">
                        <span className="text-sm text-gray-500 block">Renda Mensal</span>
                        <span className="text-2xl font-bold text-blue-600">
                            R$ {income?.toLocaleString('pt-BR') || '0,00'}
                        </span>
                    </div>
                </header>

                <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
                    {/* Gráfico Principal */}
                    <div className="md:col-span-2 bg-white p-6 rounded-2xl shadow-sm border border-gray-100">
                        <h3 className="text-lg font-semibold text-gray-800 mb-4">Sugestão de Investimento</h3>
                        <BudgetChart />
                    </div>

                    {/* Cards de Resumo */}
                    <div className="space-y-6">
                        <div className="bg-white p-6 rounded-2xl shadow-sm border border-l-4 border-l-4 border-blue-500">
                            <h4 className="text-sm font-medium text-gray-500">Essencial </h4>
                            <p className="text-2xl font-bold">R$ {((suggestion?.essential || 0) / 100 * income).toLocaleString('pt-BR')}</p>
                        </div>
                        <div className="bg-white p-6 rounded-2xl shadow-sm border border-l-4 border-l-4 border-green-500">
                            <h4 className="text-sm font-medium text-gray-500">Investimento</h4>
                            <p className="text-2xl font-bold">R$ {((suggestion?.investment || 0) / 100 * income).toLocaleString('pt-BR')}</p>
                        </div>
                        <div className="bg-white p-6 rounded-2xl shadow-sm border border-l-4 border-l-4 border-red-500">
                            <h4 className="text-sm font-medium text-gray-500">Lazer</h4>
                            <p className="text-2xl font-bold">R$ {((suggestion?.leisure || 0) / 100 * income).toLocaleString('pt-BR')}</p>
                        </div>
                    </div>
                </div>

                {/* Mensagem Personalizada */}
                {suggestion?.message && (
                    <div className="mt-8 bg-blue-50 p-6 rounded-2xl border border-blue-100">
                        <h3 className="font-semibold text-blue-800 mb-2 flex items-center">Mensagem
                            <span className="mr-2">💡</span> Insight da IA:
                        </h3>
                        <p className="text-blue-700 italic">"{suggestion.message}"</p>
                    </div>
                )}
            </div>
        </div>
    );
}