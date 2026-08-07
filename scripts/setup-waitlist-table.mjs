#!/usr/bin/env node
/**
 * One-time setup: creates waitlist_submissions via Supabase SQL API.
 * Requires SUPABASE_ACCESS_TOKEN (Personal Access Token from supabase.com/dashboard/account/tokens)
 * and SUPABASE_PROJECT_REF in env or .env.local.
 *
 * Usage:
 *   SUPABASE_ACCESS_TOKEN=... node scripts/setup-waitlist-table.mjs
 */
import { readFileSync, existsSync } from "node:fs";
import { resolve, dirname } from "node:path";
import { fileURLToPath } from "node:url";

const __dirname = dirname(fileURLToPath(import.meta.url));
const root = resolve(__dirname, "..");

function loadEnvLocal() {
  const envPath = resolve(root, ".env.local");
  if (!existsSync(envPath)) return;
  for (const line of readFileSync(envPath, "utf8").split("\n")) {
    const trimmed = line.trim();
    if (!trimmed || trimmed.startsWith("#")) continue;
    const eq = trimmed.indexOf("=");
    if (eq === -1) continue;
    const key = trimmed.slice(0, eq).trim();
    const value = trimmed.slice(eq + 1).trim();
    if (!process.env[key]) process.env[key] = value;
  }
}

loadEnvLocal();

const accessToken = process.env.SUPABASE_ACCESS_TOKEN;
const projectRef =
  process.env.SUPABASE_PROJECT_REF ||
  process.env.SUPABASE_URL?.match(/https:\/\/([^.]+)\.supabase\.co/)?.[1];

const sql = readFileSync(
  resolve(root, "supabase/migrations/20250807000000_create_waitlist_submissions.sql"),
  "utf8",
);

if (!accessToken || !projectRef) {
  console.error(
    "Missing SUPABASE_ACCESS_TOKEN or project ref.\n" +
      "Set SUPABASE_ACCESS_TOKEN and run again, or paste the SQL from\n" +
      "supabase/migrations/20250807000000_create_waitlist_submissions.sql\n" +
      "into the Supabase SQL Editor for project " +
      (projectRef || "aslljatyvsfxsmtehtea") +
      ".",
  );
  process.exit(1);
}

const res = await fetch(`https://api.supabase.com/v1/projects/${projectRef}/database/query`, {
  method: "POST",
  headers: {
    Authorization: `Bearer ${accessToken}`,
    "Content-Type": "application/json",
  },
  body: JSON.stringify({ query: sql }),
});

const body = await res.text();
if (!res.ok) {
  console.error("Failed to create table:", res.status, body);
  process.exit(1);
}

console.log("waitlist_submissions table ready.");
