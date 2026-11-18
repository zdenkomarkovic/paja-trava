"use client";

import { useState } from "react";
import { PRICING } from "@/lib/pricing";

type Status = "idle" | "sending" | "ok" | "error";

const field =
  "w-full rounded-lg border border-moss/20 bg-white px-3 py-2.5 outline-none focus:border-leaf focus:ring-2 focus:ring-leaf/30";

export function ContactForm() {
  const [status, setStatus] = useState<Status>("idle");
  const [error, setError] = useState("");

  async function onSubmit(e: React.FormEvent<HTMLFormElement>) {
    e.preventDefault();
    const form = e.currentTarget;
    setStatus("sending");
    setError("");
    const data = Object.fromEntries(new FormData(form));
    try {
      const res = await fetch("/api/contact", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(data),
      });
      const json = await res.json().catch(() => ({}));
      if (!res.ok) throw new Error(json.error ?? "Slanje nije uspelo.");
      form.reset();
      setStatus("ok");
    } catch (err) {
      setError(err instanceof Error ? err.message : "Slanje nije uspelo.");
      setStatus("error");
    }
  }

  return (
    <form onSubmit={onSubmit} className="space-y-4" noValidate>
      <div className="grid gap-4 sm:grid-cols-2">
        <label className="block text-sm font-medium">
          Ime i prezime
          <input name="name" required minLength={2} autoComplete="name" className={`${field} mt-1`} />
        </label>
        <label className="block text-sm font-medium">
          Telefon
          <input name="phone" type="tel" required autoComplete="tel" className={`${field} mt-1`} />
        </label>
      </div>
      <label className="block text-sm font-medium">
        Email (opciono)
        <input name="email" type="email" autoComplete="email" className={`${field} mt-1`} />
      </label>
      <label className="block text-sm font-medium">
        Usluga
        <select name="service" className={`${field} mt-1`} defaultValue="">
          <option value="">Izaberite uslugu</option>
          {PRICING.map((c) => (
            <option key={c.id}>{c.title}</option>
          ))}
          <option>Automatski zalivni sistem</option>
          <option>Ostalo</option>
        </select>
      </label>
      <label className="block text-sm font-medium">
        Poruka (lokacija, površina, opis posla)
        <textarea name="message" required minLength={10} rows={5} className={`${field} mt-1`} />
      </label>
      {/* honeypot */}
      <input name="website" tabIndex={-1} autoComplete="off" className="hidden" aria-hidden />
      <button
        type="submit"
        disabled={status === "sending"}
        className="rounded-full bg-moss px-7 py-3 font-semibold text-white hover:bg-moss-dark disabled:opacity-60"
      >
        {status === "sending" ? "Šaljem…" : "Pošalji upit"}
      </button>
      <p role="status" aria-live="polite" className="text-sm">
        {status === "ok" && (
          <span className="font-medium text-leaf">Hvala! Upit je poslat, javićemo vam se uskoro.</span>
        )}
        {status === "error" && <span className="font-medium text-red-700">{error}</span>}
      </p>
    </form>
  );
}
