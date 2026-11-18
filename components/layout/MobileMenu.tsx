"use client";

import Link from "next/link";
import { useEffect, useState } from "react";

export function MobileMenu({
  links,
  phone,
  phoneLabel,
}: {
  links: { href: string; label: string }[];
  phone: string;
  phoneLabel: string;
}) {
  const [open, setOpen] = useState(false);

  useEffect(() => {
    if (!open) return;
    const onKey = (e: KeyboardEvent) => e.key === "Escape" && setOpen(false);
    window.addEventListener("keydown", onKey);
    return () => window.removeEventListener("keydown", onKey);
  }, [open]);

  return (
    <div className="md:hidden">
      <button
        type="button"
        onClick={() => setOpen((o) => !o)}
        aria-expanded={open}
        aria-controls="mobile-menu"
        aria-label={open ? "Zatvori meni" : "Otvori meni"}
        className="flex h-11 w-11 items-center justify-center rounded-full text-moss hover:bg-moss/10"
      >
        <svg
          width="24"
          height="24"
          viewBox="0 0 24 24"
          fill="none"
          stroke="currentColor"
          strokeWidth="2"
          strokeLinecap="round"
          aria-hidden
        >
          {open ? <path d="M6 6l12 12M18 6L6 18" /> : <path d="M4 7h16M4 12h16M4 17h16" />}
        </svg>
      </button>

      {open && (
        <nav
          id="mobile-menu"
          aria-label="Mobilna navigacija"
          className="absolute inset-x-0 top-full z-50 border-b border-moss/10 bg-cream px-4 pb-6 pt-2 shadow-lg"
        >
          <ul className="divide-y divide-moss/10">
            {links.map((l) => (
              <li key={l.href}>
                <Link
                  href={l.href}
                  onClick={() => setOpen(false)}
                  className="block py-4 text-lg font-medium text-moss"
                >
                  {l.label}
                </Link>
              </li>
            ))}
          </ul>
          <a
            href={`tel:${phone}`}
            className="mt-4 block rounded-full bg-moss py-3 text-center font-semibold text-white"
          >
            Pozovite {phoneLabel}
          </a>
        </nav>
      )}
    </div>
  );
}
