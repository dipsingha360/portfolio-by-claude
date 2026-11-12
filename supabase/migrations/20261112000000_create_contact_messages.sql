-- Messages sent through the portfolio contact form.
-- The site (anon / publishable key) can only INSERT. Read them in the Supabase
-- dashboard (Table Editor), which bypasses row level security.

create table public.contact_messages (
  id uuid primary key default gen_random_uuid(),
  created_at timestamptz not null default now(),
  name text not null check (char_length(name) between 1 and 100),
  email text not null check (char_length(email) between 3 and 254),
  message text not null check (char_length(message) between 10 and 4000),
  read boolean not null default false
);

comment on table public.contact_messages is
  'Messages sent through the portfolio contact form. The site can only insert; read them in the dashboard.';

create index contact_messages_created_at_idx on public.contact_messages (created_at desc);

alter table public.contact_messages enable row level security;

-- Least privilege: the public (anon) key may add a row, and nothing else.
revoke all on table public.contact_messages from anon, authenticated;
grant insert on table public.contact_messages to anon;

create policy "Anyone can send a contact message"
  on public.contact_messages
  for insert
  to anon
  with check (true);
