# 🧬 DNA do Casal - Landing Page

Landing page de alta conversão para o produto "DNA do Casal". Desenvolvida com React, Vite, TailwindCSS e Framer Motion.

## 🚀 Como Rodar Localmente

1. **Instale as dependências:**
   ```bash
   npm install
   ```

2. **Rode o servidor de desenvolvimento:**
   ```bash
   npm run dev
   ```

3. Abra `http://localhost:5173` no seu navegador.

## ☁️ Como Fazer Deploy na Vercel

1. Suba este código para um repositório no **GitHub**.
2. Crie uma conta na [Vercel](https://vercel.com) e conecte seu GitHub.
3. Importe o projeto "dna-do-casal".
4. A Vercel detectará automaticamente que é um projeto Vite.
5. **Configuração de Variáveis (Opcional, mas recomendado):**
   Nas configurações do projeto na Vercel, vá em **Environment Variables** e adicione:
   
   - `VITE_CHECKOUT_URL`: O link do seu produto no Stripe (ex: https://buy.stripe.com/...)
   - `VITE_N8N_WEBHOOK_URL`: O link do seu Webhook do n8n para upload.

6. Clique em **Deploy**.

## 🎨 Personalização

- **Cores e Estilos:** Edite `tailwind.config.js` e `index.css`.
- **Textos e Preços:** Edite `constants.ts`.
- **Logo:** Substitua `public/logo.svg`.
