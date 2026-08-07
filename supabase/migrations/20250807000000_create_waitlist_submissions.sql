create table if not exists waitlist_submissions (
  id uuid primary key default gen_random_uuid(),
  created_at timestamptz default now(),
  full_name text not null,
  email text not null,
  investment_interest text,
  investment_level text,
  hear_about text,
  phone text,
  message text,
  source text default 'investor_beta'
);

alter table waitlist_submissions enable row level security;
