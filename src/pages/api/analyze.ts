import type { NextApiRequest, NextApiResponse } from "next";

export default async function handler(req: NextApiRequest, res: NextApiResponse) {
    if (req.method !== "POST") {
        return res.status(405).json({ error: "Método não permitido" });
    }

    const { income, expenses, debts } = req.body;

    try {
        const response = await fetch("https://api.groq.com/openai/v1/chat/completions", {
            method: "POST",
            headers: {
                "Content-Type": "application/json",
                "Authorization": `Bearer ${process.env.GROQ_API_KEY}`,
            },
            body: JSON.stringify({
                model: "llama3-8b-8192",
                messages: [
                    {
                        role: "system",
                        content: "Você é um consultor financeiro sênior especializado na realidade brasileira. Retorne apenas JSON."
                    },
                    {
                        role: "user",
                        content: `Com uma renda de R$ ${income} e gastos fixos de R$ ${expenses}, sugira uma divisão 50/30/20 personalizada. Responda estritamente no formato JSON: {"essential": number, "investment": number, "leisure": number, "message": string}`
                    }
                ],
                response_format: { type: "json_object" },
            })
        });

        const data = await response.json();
        const suggestion = JSON.parse(data.choices[0].message.content);
        return res.status(200).json({ analysis: suggestion });
    } catch (error) {
        console.error("Erro na API da Groq:", error);
        return res.status(500).json({ error: "Erro ao analisar dados financeiros" });
    }
}