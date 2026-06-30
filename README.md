# Sidinei Lima - Advocacia

MVP institucional em Next.js para o escritório Sidinei Lima - Advocacia.

## Stack

- Next.js com App Router
- TypeScript
- CSS Modules
- Supabase
- React Hook Form
- Zod

## Como rodar

```bash
npm install
npm run dev
```

Acesse `http://localhost:3000`.

## Variáveis de ambiente

Copie `.env.example` para `.env.local` e preencha:

```bash
NEXT_PUBLIC_SUPABASE_URL=
NEXT_PUBLIC_SUPABASE_ANON_KEY=
```

## Supabase

Execute o SQL em `supabase/schema.sql` no SQL Editor do Supabase para criar as tabelas `leads` e `agendamentos`.

## Deploy

O projeto está pronto para deploy na Vercel. Configure as mesmas variáveis de ambiente no painel do projeto antes de publicar.
