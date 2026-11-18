import Image from "next/image";
import Link from "next/link";
import { EMAIL, PHONE_DISPLAY, PHONE_TEL, SITE_NAME } from "@/lib/constants";
import { PRICING } from "@/lib/pricing";

const nav = [
  { href: "/", label: "Početna" },
  { href: "/usluge", label: "Usluge i cenovnik" },
  { href: "/zalivni-sistemi", label: "Zalivni sistemi" },
  { href: "/#galerija", label: "Galerija" },
  { href: "/#kontakt", label: "Kontakt" },
];

const featured = ["kosenje", "zivaograda", "secenje", "travnjak", "sadnja", "zima"];

const linkCls = "transition hover:text-lime";
const headCls = "font-display mb-4 text-lg font-semibold text-white";

export function Footer() {
  const services = PRICING.filter((c) => featured.includes(c.id));

  return (
    <footer className="bg-moss-dark text-sm text-white/75">
      <div className="mx-auto grid max-w-6xl gap-10 px-4 py-14 sm:grid-cols-2 lg:grid-cols-4">
        <div>
          <Link href="/" aria-label={SITE_NAME}>
            <Image
              src="/logo.jpg"
              alt={SITE_NAME}
              width={120}
              height={120}
              className="h-[120px] w-[120px] rounded-full"
            />
          </Link>
          <p className="mt-4 max-w-xs">
            Održavanje zelenih površina, zasnivanje travnjaka i automatski zalivni sistemi Hunter.
          </p>
        </div>

        <nav aria-label="Navigacija u podnožju">
          <h2 className={headCls}>Navigacija</h2>
          <ul className="space-y-2">
            {nav.map((l) => (
              <li key={l.href}>
                <Link href={l.href} className={linkCls}>
                  {l.label}
                </Link>
              </li>
            ))}
          </ul>
        </nav>

        <div>
          <h2 className={headCls}>Usluge</h2>
          <ul className="space-y-2">
            {services.map((c) => (
              <li key={c.id}>
                <Link href={`/usluge#${c.id}`} className={linkCls}>
                  {c.title}
                </Link>
              </li>
            ))}
            <li>
              <Link href="/zalivni-sistemi" className={linkCls}>
                Automatski zalivni sistemi
              </Link>
            </li>
          </ul>
        </div>

        <div>
          <h2 className={headCls}>Kontakt</h2>
          <ul className="space-y-3">
            <li>
              <span className="block text-xs uppercase tracking-wider text-white/50">Telefon</span>
              <a href={`tel:${PHONE_TEL}`} className={`${linkCls} text-base font-semibold text-white`}>
                {PHONE_DISPLAY}
              </a>
            </li>
            <li>
              <span className="block text-xs uppercase tracking-wider text-white/50">Email</span>
              <a href={`mailto:${EMAIL}`} className={`${linkCls} break-all`}>
                {EMAIL}
              </a>
            </li>
          </ul>
          <Link
            href="/#kontakt"
            className="mt-5 inline-block rounded-full bg-lime px-5 py-2.5 font-semibold text-moss-dark hover:bg-white"
          >
            Zatražite ponudu
          </Link>
        </div>
      </div>

      <div className="border-t border-white/10">
        <div className="mx-auto flex max-w-6xl flex-col gap-2 px-4 py-5 text-xs sm:flex-row sm:items-center sm:justify-between">
          <p>
            © {new Date().getFullYear()} {SITE_NAME}. Sva prava zadržana.
          </p>
          <p>
            Izrada sajta{" "}
            <a
              href="https://manikamwebsolutions.com/"
              target="_blank"
              rel="noopener noreferrer"
              className="underline hover:text-lime"
            >
              Manikam Web Solutions
            </a>
          </p>
        </div>
      </div>
    </footer>
  );
}
