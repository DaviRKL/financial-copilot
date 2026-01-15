import {http, HttpResponse} from 'msw';

export const handlers = [
    //Intercepta requisições POST para /api/analyze
    http.post('/api/analyze', async () => {
        return HttpResponse.json({
            essential: 1500,
            investment: 900,
            leisure: 600,
            message: "Com base na sua renda, recomendamos focar em investimentos de médio prazo para maximizar seus retornos."
        });
    }),
];