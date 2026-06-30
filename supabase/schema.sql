create extension if not exists "pgcrypto";

create table if not exists public.leads (
  id uuid primary key default gen_random_uuid(),
  name text not null,
  phone text not null,
  email text not null,
  area text not null,
  message text not null,
  source text not null default 'site',
  created_at timestamptz not null default now()
);

create table if not exists public.agendamentos (
  id uuid primary key default gen_random_uuid(),
  name text not null,
  phone text not null,
  email text not null,
  area text not null,
  preferred_date date not null,
  preferred_time time not null,
  message text,
  status text not null default 'novo',
  created_at timestamptz not null default now()
);

alter table public.leads enable row level security;
alter table public.agendamentos enable row level security;

create policy "Allow anonymous lead inserts"
on public.leads
for insert
to anon
with check (true);

create policy "Allow anonymous appointment inserts"
on public.agendamentos
for insert
to anon
with check (true);
