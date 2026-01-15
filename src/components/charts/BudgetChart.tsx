import React, { useMemo } from "react";
import { PieChart, Pie, Cell, ResponsiveContainer, Tooltip, Legend } from "recharts";
import { useFinance } from "@/contexts/FinanceContext";

const COLORS = ['#3b82f6', '#10b981', '#ef4444']; // Azul (Essencial), Verde (Investimento), Vermelho (Lazer)

export default function BudgetChart() {
    const { suggestion, income } = useFinance();

    const chartData = useMemo(() => {
        if (!suggestion) return [];
        return [
            { name: 'Essencial', value: (suggestion.essential / 100) * income },
            { name: 'Investimento', value: (suggestion.investment / 100) * income },
            { name: 'Lazer', value: (suggestion.leisure / 100) * income },
        ];
    }, [suggestion, income]);

    if (!suggestion) {
        return (
            <div className="h-64 flex items-center justify-center bg-gray-50 rounded-xl border-2 border-dashed border-gray-200">
                <p className="text-center text-gray-500">Nenhuma sugestão de orçamento disponível.</p>
            </div>
        );
    }

    return (
        <div className="h-80 w-full">
            <ResponsiveContainer width="100%" height="100%">
                <PieChart>
                    <Pie
                        data={chartData}
                        cx="50%"
                        cy="50%"
                        innerRadius={60}
                        outerRadius={80}
                        paddingAngle={5}
                        dataKey="value"
                    >
                        {chartData.map((entry, index) => (
                            <Cell key={`cell-${index}`} fill={COLORS[index % COLORS.length]} />
                        ))}
                    </Pie>
                    <Tooltip
                        formatter={(value: number | string | undefined) => value ? `R$ ${value.toLocaleString('pt-BR')}` : 'R$ 0,00'}
                        contentStyle={{ borderRadius: '8px', border: 'none', boxShadow: '0 4px 6px -1px rgb(0 0 0 / 0.1)' }}
                    />
                    <Legend verticalAlign="bottom" height={36}/>
                </PieChart>
            </ResponsiveContainer>
        </div>
    );
}