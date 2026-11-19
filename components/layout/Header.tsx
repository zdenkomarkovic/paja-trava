import Image from "next/image";
import Link from "next/link";
import { MobileMenu } from "./MobileMenu";
import { PHONE_DISPLAY, PHONE_TEL, SITE_NAME } from "@/lib/constants";

const links = [
  { href: "/", label: "Početna" },
  { href: "/usluge", label: "Usluge i cenovnik" },
  { href: "/zalivni-sistemi", label: "Zalivni sistemi" },
  { href: "/#galerija", label: "Galerija" },
  { href: "/#kontakt", label: "Kontakt" },
];

export function Header() {
  return (
    <header className="sticky top-0 z-40 border-b border-moss/10 bg-cream/90 backdrop-blur">
      <div className="mx-auto flex max-w-6xl items-center justify-between gap-4 px-4 py-1">
        <Link
          href="/"
          className="font-display flex items-center gap-3 text-xl font-semibold text-moss"
        >
          <Image
            src="/logo.jpg"
            alt=""
            width={56}
            height={56}
            priority
            className="h-14 w-14 rounded-full"
          />
          <span className="sr-only sm:not-sr-only">{SITE_NAME}</span>
        </Link>
        <nav className="hidden gap-6 text-sm font-medium md:flex" aria-label="Glavna navigacija">
          {links.map((l) => (
            <Link key={l.href} href={l.href} className="hover:text-leaf">
              {l.label}
            </Link>
          ))}
        </nav>
        <div className="flex items-center gap-2">
          <a
            href={`tel:${PHONE_TEL}`}
            className="hidden rounded-full bg-moss px-4 py-2 text-sm font-semibold text-white hover:bg-moss-dark sm:block"
          >
            {PHONE_DISPLAY}
          </a>
          <MobileMenu links={links} phone={PHONE_TEL} phoneLabel={PHONE_DISPLAY} />
        </div>
      </div>
    </header>
  );
}
