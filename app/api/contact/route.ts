import { Resend } from "resend";

function isEmail(v: unknown): v is string {
  return (
    typeof v === "string" && /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(v.trim())
  );
}

export async function POST(req: Request) {
  const apiKey = process.env.RESEND_API_KEY;
  const to = process.env.CONTACT_TO_EMAIL;

  if (!apiKey || !to) {
    return Response.json(
      { error: "contact form not configured (missing env)" },
      { status: 500 }
    );
  }

  let body: unknown;
  try {
    body = await req.json();
  } catch {
    return Response.json({ error: "invalid JSON body" }, { status: 400 });
  }

  const { name, email, message } =
    (body as { name?: unknown; email?: unknown; message?: unknown }) ?? {};

  if (typeof name !== "string" || name.trim().length < 2 || name.length > 80) {
    return Response.json({ error: "name must be 2–80 chars" }, { status: 400 });
  }
  if (!isEmail(email)) {
    return Response.json({ error: "valid email required" }, { status: 400 });
  }
  if (
    typeof message !== "string" ||
    message.trim().length < 10 ||
    message.length > 2000
  ) {
    return Response.json(
      { error: "message must be 10–2000 chars" },
      { status: 400 }
    );
  }

  const resend = new Resend(apiKey);
  const { error } = await resend.emails.send({
    from: "IZZUL-OS <onboarding@resend.dev>",
    to,
    subject: `portfolio contact: ${name.trim()} <${email.trim()}>`,
    text: message.trim(),
    replyTo: email.trim(),
  });

  if (error) {
    return Response.json(
      { error: "failed to send — try email instead" },
      { status: 502 }
    );
  }
  return Response.json({ ok: true });
}
