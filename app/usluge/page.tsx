import { buildMetadata } from "@/lib/metadata";
import { SITE_URL } from "@/lib/constants";
import { MIN_JOB, PRICING, PRICING_INTRO } from "@/lib/pricing";
import { SERVICE_DETAILS } from "@/lib/services";
import { CtaBand, PageHero } from "@/components/sections/PageHero";

export const metadata = buildMetadata({
  title: "Košenje trave, travnjaci, živa ograda i uređenje dvorišta – usluge i cenovnik",
  description:
    "Košenje trave, zasnivanje travnjaka, orezivanje žive ograde, sečenje drveća, sadnja i sveukupno uređenje dvorišta – opis usluga i orijentacioni cenovnik.",
  url: `${SITE_URL}/usluge`,
  image: "/IMG-20190921-WA0004.jpg",
});

export default function UslugePage() {
  return (
    <main>
      <PageHero
        eyebrow="Usluge i cenovnik"
        title="Košenje trave, sadnja travnjaka, orezivanje žive ograde i uređenje dvorišta"
        text="Paja Trava PR nudi košenje trave, zasnivanje i sadnju travnjaka, orezivanje žive ograde, sečenje grana i drveća, sadnju, prihranu i zaštitu bilja, kao i kompletno održavanje i uređenje dvorišta. Pogledajte šta tačno radimo u svakoj usluzi i orijentacione cene."
        image="/IMG-20190921-WA0004.jpg"
      />

      <section className="mx-auto max-w-6xl px-4 py-12">
        <div className="max-w-3xl space-y-2 text-ink/75">
          {PRICING_INTRO.map((p) => (
            <p key={p}>{p}</p>
          ))}
          <p className="font-semibold text-moss">{MIN_JOB}</p>
        </div>
        <nav aria-label="Kategorije usluga" className="mt-8 flex flex-wrap gap-2">
          {PRICING.map((c) => (
            <a
              key={c.id}
              href={`#${c.id}`}
              className="rounded-full border border-moss/20 bg-white px-4 py-1.5 text-sm font-medium text-moss hover:border-leaf hover:text-leaf"
            >
              {c.title}
            </a>
          ))}
        </nav>
      </section>

      {PRICING.map((cat, n) => {
        const d = SERVICE_DETAILS[cat.id];
        return (
          <section key={cat.id} id={cat.id} className={n % 2 === 0 ? "bg-sand" : ""}>
            <div className="mx-auto grid max-w-6xl gap-10 px-4 py-16 lg:grid-cols-5">
              <div className="lg:col-span-3">
                <div className="flex items-center gap-4">
                  <span className="font-display text-3xl font-semibold text-leaf">
                    {String(n + 1).padStart(2, "0")}
                  </span>
                  <h2 className="font-display text-3xl font-semibold text-moss">{cat.title}</h2>
                </div>
                {d && (
                  <>
                    <p className="mt-4 text-lg font-medium text-moss/90">{d.lead}</p>
                    {d.paragraphs.map((p) => (
                      <p key={p} className="mt-3 text-ink/75">
                        {p}
                      </p>
                    ))}
                    <h3 className="mt-6 text-sm font-semibold uppercase tracking-wider text-leaf">Šta obuhvata</h3>
                    <ul className="mt-2 space-y-1.5 text-sm">
                      {d.includes.map((i) => (
                        <li key={i} className="flex gap-2">
                          <span className="mt-2 h-1.5 w-1.5 shrink-0 rounded-full bg-leaf" />
                          {i}
                        </li>
                      ))}
                    </ul>
                  </>
                )}
              </div>
              <div className="lg:col-span-2">
                <div className="rounded-2xl bg-white p-6 shadow-sm">
                  <h3 className="font-display text-lg font-semibold text-moss">Orijentacione cene</h3>
                  <ul className="mt-3 divide-y divide-moss/10">
                    {cat.items.map((it) => (
                      <li key={it.label} className="flex items-start justify-between gap-4 py-3 text-sm">
                        <span>
                          {it.label}
                          {it.unit && <span className="text-ink/50"> · {it.unit}</span>}
                          {it.note && <span className="block text-xs text-ink/55">{it.note}</span>}
                        </span>
                        <span className="whitespace-nowrap font-semibold text-moss">{it.price}</span>
                      </li>
                    ))}
                  </ul>
                  {cat.footnote && <p className="mt-3 text-xs text-ink/60">* {cat.footnote}</p>}
                </div>
              </div>
            </div>
          </section>
        );
      })}

      <CtaBand title="Niste sigurni šta vam treba? Opišite nam posao, a mi dajemo ponudu." />
    </main>
  );
}
