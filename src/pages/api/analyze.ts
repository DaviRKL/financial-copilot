export default async function handler(req: any, res: any) {
  if (req.method !== 'POST') return res.status(405).json({ message: 'Method not allowed' });

  try {
    const { income, expenses, debts } = req.body;

    const response = await fetch("https://api.groq.com/openai/v1/chat/completions", {
      method: "POST",
      headers: {
        "Authorization": `Bearer ${process.env.GROQ_API_KEY}`,
        "Content-Type": "application/json",
      },
      body: JSON.stringify({
        messages: [
          {
            role: "system",
            content: "Retorne apenas um JSON válido no formato: { \"essential\": number, \"investment\": number, \"leisure\": number, \"message\": string }",
          },
          {
            role: "user",
            content: `Analise: Renda R$${income}, Gastos R$${expenses}, Dívidas R$${debts}.`,
          },
        ],
        model: "llama-3.1-8b-instant",
        response_format: { type: "json_object" },
      }),
    });

    const data = await response.json();

    // LOG DE DEPURAÇÃO: Se houver erro, veremos o que a Groq disse
    if (!response.ok) {
      console.error("Erro detalhado da Groq:", data);
      return res.status(response.status).json({ 
        error: "Erro na API da Groq", 
        details: data.error?.message || "Erro desconhecido" 
      });
    }

    // Verificação de segurança antes de acessar choices[0]
    if (!data.choices || data.choices.length === 0) {
      throw new Error("A API da Groq retornou uma estrutura inesperada (sem choices).");
    }

    const suggestion = JSON.parse(data.choices[0].message.content);
    return res.status(200).json(suggestion);

  } catch (error: any) {
    console.error("Erro no Servidor:", error.message);
    return res.status(500).json({ error: "Erro ao analisar dados financeiros" });
  }
}