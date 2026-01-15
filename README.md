# 🚀 Financial Copilot

**Financial Copilot** é uma aplicação inteligente de planejamento financeiro pessoal que utiliza Inteligência Artificial para transformar dados brutos em estratégias acionáveis. Através da integração com a API da Groq, o app analisa a realidade financeira do usuário e sugere divisões orçamentárias personalizadas, promovendo saúde financeira com uma interface moderna e intuitiva.

---

## 📋 Sumário
- [Recursos Principais](#-recursos-principais)
- [Tecnologias Utilizadas](#-tecnologias-utilizadas)
- [Arquitetura e Decisões Técnicas](#-arquitetura-e-decisões-técnicas)
- [Como Executar o Projeto](#-como-executar-o-projeto)
- [Padrões de Desenvolvimento](#-padrões-de-desenvolvimento)
- [Sobre o Autor](#-sobre-o-autor)

---

## ✨ Recursos Principais

* **Análise Preditiva com IA:** Integração com o modelo Llama-3 (via Groq API) para gerar sugestões de orçamento baseadas na realidade brasileira (50/30/20).
* **Dashboard Interativo:** Visualização de dados financeiros através de gráficos dinâmicos.
* **Onboarding Inteligente:** Fluxo de coleta de dados com validação e feedback em tempo real.
* **Gestão de Transações:** Cadastro e categorização de entradas e saídas com persistência em estado global.
* **Segurança de Dados:** Implementação de API Routes para proteção de chaves sensíveis e processamento de dados no lado do servidor.

---

## 🛠 Tecnologias Utilizadas

* **Frontend:** [Next.js](https://nextjs.org/) (Pages Router), [React.js](https://reactjs.org/), [Tailwind CSS](https://tailwindcss.com/).
* **Linguagem:** [TypeScript](https://www.typescriptlang.org/) (Tipagem estrita para escalabilidade).
* **Gestão de Estado:** Context API com Custom Hooks.
* **IA:** [Groq Cloud API](https://console.groq.com/) (Llama-3-8b).
* **Visualização:** Recharts (Gráficos performáticos).
* **Testes:** [Vitest](https://vitest.dev/) e React Testing Library.

---

## 🏗 Arquitetura e Decisões Técnicas

O projeto foi construído focando em **performance** e **mantenibilidade**, seguindo requisitos de aplicações modernas de larga escala:

* **Renderização Híbrida:** * **SSG (Static Site Generation):** Utilizado na Landing Page para SEO e carregamento instantâneo.
    * **SSR (Server-Side Rendering):** Aplicado no Dashboard para garantir que os dados financeiros estejam atualizados a cada acesso.
    * **ISR (Incremental Static Regeneration):** Implementado em páginas de conteúdo educacional para atualização periódica sem necessidade de novos builds.
* **API Routes:** Centralização da lógica de comunicação com a IA no backend do Next.js, evitando a exposição de credenciais no cliente.
* **Performance com Hooks:** Uso estratégico de `useMemo` e `useCallback` para evitar re-renderizações desnecessárias em cálculos complexos de gráficos.
* **Clean Code:** Separação clara entre componentes de UI, lógica de negócios (Contexts) e serviços de API.

---

## 🚀 Como Executar o Projeto

### Pré-requisitos
* Node.js (v18 ou superior)
* Uma chave de API da [Groq Cloud](https://console.groq.com/)

### Instalação

#### 1. Clone o repositório:
   ```bash
   git clone [https://github.com/seu-usuario/financial-copilot.git](https://github.com/seu-usuario/financial-copilot.git)
```   

#### 2. Instale as dependências:

```Bash
npm install
```
#### 3. Configure as variáveis de ambiente: Crie um arquivo .env.local na raiz do projeto e adicione a sua chave da API:

```Bash
GROQ_API_KEY=sua_chave_aqui
```

#### 4. Inicie o servidor de desenvolvimento:

```Bash

npm run dev
```

#### 5. Para rodar os testes:

```Bash

npm run test
```

## 📌 Padrões de Desenvolvimento
Para garantir a colaboração e a qualidade do código, este projeto utiliza:

Conventional Commits: Histórico de mensagens claro e padronizado (feat, fix, docs, style, etc).

TypeScript Utility Types: Uso de Omit, Pick e Partial para interfaces mais limpas e seguras.

Path Aliases: Configuração de @/* para simplificar imports e facilitar refatorações.

## 👤 Sobre o Autor
Desenvolvedor focado no ecossistema React, com formação técnica sólida e experiência na construção de interfaces escaláveis.

Educação: Tecnólogo em Análise e Desenvolvimento de Sistemas — FATEC Sorocaba (2025).

Histórico: Técnico em Desenvolvimento de Sistemas — Etec Fernando Prestes (2023).

Experiência Anterior: Estagiário de Tecnologia na Climbz Consultoria (2024–2025).

Foco Atual: Especialização em Next.js, performance frontend e integração de IA em aplicações web.
