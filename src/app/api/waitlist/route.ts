import { NextResponse } from "next/server";
import { Resend } from "resend";
import { getSupabaseAdmin } from "@/lib/supabase/admin";

export const runtime = "nodejs";

function clean(value: unknown) {
  return typeof value === "string" ? value.trim() : "";
}

function getWaitlistToEmail() {
  return (
    process.env.WAITLIST_TO_EMAIL ||
    process.env.CONTACT_TO_EMAIL ||
    "hello@plantify.tech"
  );
}

function getResendFromEmail() {
  return process.env.RESEND_FROM_EMAIL || "onboarding@resend.dev";
}

export async function POST(request: Request) {
  try {
    const body = (await request.json().catch(() => null)) as Record<string, unknown> | null;
    if (!body) {
      return NextResponse.json({ error: "Invalid request body." }, { status: 400 });
    }

    const full_name = clean(
      body.full_name || body.fullName || body.f_name || body.fName,
    );
    const email = clean(body.email);
    const investment_interest = clean(
      body.investment_interest || body.investmentInterest,
    );
    const investment_level = clean(
      body.investment_level || body.investmentLevel,
    );
    const hear_about = clean(body.hear_about || body.hearAbout || body.howHeard);
    const phone = clean(body.phone || body.p_number || body.pNumber);
    const message = clean(body.message || "");
    const source = clean(body.source) || "investor_beta";

    if (!full_name || full_name.length < 2) {
      return NextResponse.json({ error: "Please provide a valid full name." }, { status: 400 });
    }

    const emailOk = /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email);
    if (!emailOk) {
      return NextResponse.json({ error: "Please provide a valid email address." }, { status: 400 });
    }

    if (!investment_interest) {
      return NextResponse.json({ error: "Investment interest is required." }, { status: 400 });
    }

    if (!investment_level) {
      return NextResponse.json({ error: "Investment level is required." }, { status: 400 });
    }

    const digits = phone.replace(/\D/g, "");
    if (phone && (digits.length < 7 || digits.length > 15)) {
      return NextResponse.json(
        { error: "Please provide a valid phone number (7–15 digits)." },
        { status: 400 },
      );
    }

    if (message && message.length > 2000) {
      return NextResponse.json(
        { error: "Message is too long. Please keep it under 2000 characters." },
        { status: 400 },
      );
    }

    const supabase = getSupabaseAdmin();
    const waitlistRow = {
      full_name,
      email,
      investment_interest,
      investment_level,
      hear_about: hear_about || null,
      phone: phone || null,
      message: message || null,
      source,
    };

    let { error } = await supabase.from("waitlist_submissions").insert(waitlistRow);

    if (error) {
      const missingTable =
        error.code === "PGRST205" ||
        error.message?.includes("waitlist_submissions") ||
        error.message?.includes("does not exist");

      if (missingTable) {
        const structuredMessage = [
          `Investment interest: ${investment_interest}`,
          `Investment level: ${investment_level}`,
          `How they heard: ${hear_about || "—"}`,
          message ? `Message: ${message}` : null,
          `Source: ${source}`,
        ]
          .filter(Boolean)
          .join("\n");

        ({ error } = await supabase.from("CTA_Clients").insert({
          f_name: full_name,
          email,
          p_number: phone || null,
          subject: "Investor beta waitlist",
          message: structuredMessage,
        }));
      }
    }

    if (error) {
      console.error("Supabase waitlist insert error:", error);
      return NextResponse.json({ error: "DB insert failed." }, { status: 500 });
    }

    const resendApiKey = process.env.RESEND_API_KEY;
    if (resendApiKey) {
      const resend = new Resend(resendApiKey);
      const toEmail = getWaitlistToEmail();
      const fromEmail = getResendFromEmail();

      const lines = [
        "New investor beta waitlist submission",
        "",
        `Full name: ${full_name}`,
        `Email: ${email}`,
        `Investment interest: ${investment_interest}`,
        `Investment level: ${investment_level}`,
        `How they heard about us: ${hear_about || "—"}`,
        `Phone: ${phone || "—"}`,
        `Message: ${message || "—"}`,
        `Source: ${source}`,
      ];

      const { error: emailError } = await resend.emails.send({
        from: fromEmail,
        to: toEmail,
        replyTo: email,
        subject: `Investor beta waitlist: ${full_name}`,
        text: lines.join("\n"),
      });

      if (emailError) {
        console.error("Resend waitlist email error:", emailError);
      }
    } else {
      console.warn("RESEND_API_KEY not set; skipping waitlist notification email.");
    }

    return NextResponse.json({ ok: true });
  } catch (err) {
    console.error("Waitlist route error:", err);
    return NextResponse.json({ error: "Server error." }, { status: 500 });
  }
}
