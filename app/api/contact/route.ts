import { NextResponse } from "next/server";
import { z } from "zod";

const schema = z.object({
  name: z.string().trim().min(2, "Unesite ime.").max(100),
  phone: z.string().trim().min(6, "Unesite ispravan telefon.").max(30),
  email: z.union([z.literal(""), z.string().trim().email("Neispravan email.")]).optional(),
  service: z.string().max(100).optional(),
  message: z.string().trim().min(10, "Poruka mora imati bar 10 karaktera.").max(2000),
  website: z.string().optional(), // honeypot
});

const esc = (s: string) =>
  s.replace(/&/g, "&amp;").replace(/</g, "&lt;").replace(/>/g, "&gt;");

export async function POST(req: Request) {
  let body: unknown;
  try {
    body = await req.json();
  } catch {
    return NextResponse.json({ error: "Neispravan zahtev." }, { status: 400 });
  }

  const parsed = schema.safeParse(body);
  if (!parsed.success) {
    return NextResponse.json(
      { error: parsed.error.issues[0]?.message ?? "Neispravni podaci." },
      { status: 400 },
    );
  }
  const d = parsed.data;
  if (d.website) return NextResponse.json({ ok: true }); // bot

  const { MAILJET_API_KEY, MAILJET_SECRET_KEY, SITE_MAIL_SENDER, SITE_MAIL_RECEIVER } =
    process.env;
  if (!MAILJET_API_KEY || !MAILJET_SECRET_KEY || !SITE_MAIL_SENDER || !SITE_MAIL_RECEIVER) {
    console.error("Mailjet env varijable nisu podešene");
    return NextResponse.json({ error: "Slanje trenutno nije dostupno. Pozovite nas telefonom." }, { status: 500 });
  }

  const html = `
    <h2>Novi upit sa sajta Paja Trava PR</h2>
    <p><b>Ime:</b> ${esc(d.name)}</p>
    <p><b>Telefon:</b> ${esc(d.phone)}</p>
    ${d.email ? `<p><b>Email:</b> ${esc(d.email)}</p>` : ""}
    ${d.service ? `<p><b>Usluga:</b> ${esc(d.service)}</p>` : ""}
    <p><b>Poruka:</b><br>${esc(d.message).replace(/\n/g, "<br>")}</p>`;

  const res = await fetch("https://api.mailjet.com/v3.1/send", {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
      Authorization:
        "Basic " + Buffer.from(`${MAILJET_API_KEY}:${MAILJET_SECRET_KEY}`).toString("base64"),
    },
    body: JSON.stringify({
      Messages: [
        {
          From: { Email: SITE_MAIL_SENDER, Name: "Paja Trava PR sajt" },
          To: [{ Email: SITE_MAIL_RECEIVER }],
          ...(d.email ? { ReplyTo: { Email: d.email, Name: d.name } } : {}),
          Subject: `Novi upit: ${d.name}${d.service ? ` – ${d.service}` : ""}`,
          TextPart: `Ime: ${d.name}\nTelefon: ${d.phone}\nEmail: ${d.email ?? ""}\nUsluga: ${d.service ?? ""}\n\n${d.message}`,
          HTMLPart: html,
        },
      ],
    }),
  }).catch(() => null);

  if (!res || !res.ok) {
    console.error("Mailjet greška", res?.status, await res?.text().catch(() => ""));
    return NextResponse.json({ error: "Slanje nije uspelo. Pozovite nas telefonom." }, { status: 502 });
  }
  return NextResponse.json({ ok: true });
}
