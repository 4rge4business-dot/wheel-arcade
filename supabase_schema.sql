-- Supabase SQL: unlocks and purchases table
create table public.unlocks (
  id bigserial primary key,
  user_id text,
  wheel_id text not null,
  purchased_at timestamptz default now()
);

create table public.purchases (
  id bigserial primary key,
  session_id text not null,
  price_id text,
  customer_email text,
  metadata jsonb,
  created_at timestamptz default now()
);
