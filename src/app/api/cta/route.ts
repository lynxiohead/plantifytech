import { NextResponse } from "next/server";
import { supabaseAdmin } from "@/lib/supabase/admin";

export const runtime = "nodejs";

function clean(value: unknown) {
  return typeof value === "string" ? value.trim() : "";
}

export async function POST(request: Request) {
  try {
    const body = (await request.json().catch(() => null)) as Record<string, unknown> | null;
    if (!body) {
      return NextResponse.json({ error: "Invalid request body." }, { status: 400 });
    }

    const f_name = clean(body.f_name || body.fName || body.fullName);
    const email = clean(body.email);
    const p_number = clean(body.p_number || body.phone || "");
    const subject = clean(body.subject || "");
    const message = clean(body.message || "");

    if (!f_name || !email) {
      return NextResponse.json({ error: "Name and email are required." }, { status: 400 });
    }

    const { error } = await supabaseAdmin.from("CTA_Clients").insert({
      f_name,
      email,
      p_number: p_number || null,
      subject: subject || null,
      message: message || null,
    });

    if (error) {
      console.error("Supabase insert error:", error);
      return NextResponse.json({ error: "DB insert failed." }, { status: 500 });
    }

    return NextResponse.json({ ok: true });
  } catch (err) {
    console.error("CTA route error:", err);
    return NextResponse.json({ error: "Server error." }, { status: 500 });
  }
}
