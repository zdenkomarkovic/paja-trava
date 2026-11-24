import Link from "next/link";
import { JsonLd } from "@/components/seo/JsonLd";
import { CtaBand, PageHero } from "@/components/sections/PageHero";
import { LOCATIONS, type Location } from "@/lib/locations";
import { PRICING } from "@/lib/pricing";
import { breadcrumbSchema, serviceSchema } from "@/lib/schema";
import { PHONE_DISPLAY, PHONE_TEL } from "@/lib/constants";

export function LocationPage({ loc }: { loc: Location }) {
  const other = LOCATIONS.filter((l) => l.slug !== loc.slug);
  const path = `/${loc.slug}`;

  return (
    <main>
      <JsonLd data={breadcrumbSchema([{ name: loc.city, path }])} />
      <JsonLd
        data={serviceSchema(
          `Održavanje zelenih površina i uređenje dvorišta ${loc.inCity}`,
          loc.description,
          path,
          loc.city,
        )}
      />
      <JsonLd
        data={{
          "@context": "https://schema.org",
          "@type": "FAQPage",
          mainEntity: loc.faq.map((f) => ({
            "@type": "Question",
            name: f.q,
            acceptedAnswer: { "@type": "Answer", text: f.a },
          })),
        }}
      />

      <PageHero eyebrow={loc.eyebrow} title={loc.h1} text={loc.heroText} image={loc.image} />

      <section className="mx-auto grid max-w-6xl gap-10 px-4 py-16 lg:grid-cols-5">
        <div className="lg:col-span-3">
          <h2 className="font-display text-3xl font-semibold text-moss">
            Paja Trava {loc.inCity}
          </h2>
          {loc.intro.map((p) => (
            <p key={p} className="mt-4 text-ink/75">
              {p}
            </p>
          ))}
        </div>
        <div className="rounded-2xl bg-sand p-6 lg:col-span-2">
          <h3 className="font-display text-xl font-semibold text-moss">Pozovite nas</h3>
          <a href={`tel:${PHONE_TEL}`} className="mt-2 block text-2xl font-semibold text-moss hover:text-leaf">
            {PHONE_DISPLAY}
          </a>
          <p className="mt-3 text-sm text-ink/70">
            Pre određivanja cene potrebno je da sagledamo obim posla. Opišite posao i površinu, a mi se javljamo.
          </p>
          <Link
            href="/#kontakt"
            className="mt-5 inline-block rounded-full bg-moss px-6 py-2.5 font-semibold text-white hover:bg-moss-dark"
          >
            Pošaljite upit
          </Link>
        </div>
      </section>

      <section className="bg-sand py-16">
        <div className="mx-auto max-w-6xl px-4">
          <h2 className="font-display text-3xl font-semibold text-moss">Gde radimo</h2>
          <div className="mt-8 grid gap-4 md:grid-cols-3">
            {loc.areas.map((a) => (
              <div key={a.name} className="rounded-2xl bg-white p-6">
                <span className="block h-1 w-10 rounded bg-leaf" />
                <h3 className="font-display mt-4 text-lg font-semibold text-moss">{a.name}</h3>
                <p className="mt-2 text-sm text-ink/70">{a.text}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="mx-auto max-w-6xl px-4 py-16">
        <h2 className="font-display text-3xl font-semibold text-moss">Naše usluge {loc.inCity}</h2>
        <div className="mt-8 grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
          {PRICING.map((c) => (
            <Link
              key={c.id}
              href={`/usluge#${c.id}`}
              className="group rounded-2xl border border-moss/10 bg-white p-5 transition hover:-translate-y-1 hover:border-leaf hover:shadow-lg"
            >
              <p className="font-semibold text-moss group-hover:text-leaf">{c.title}</p>
              <p className="mt-1 text-sm text-ink/60">Pogledajte opis i cene →</p>
            </Link>
          ))}
          <Link
            href="/zalivni-sistemi"
            className="group rounded-2xl bg-moss p-5 text-white transition hover:-translate-y-1 hover:shadow-lg"
          >
            <p className="font-semibold text-lime">Automatski zalivni sistemi Hunter</p>
            <p className="mt-1 text-sm text-white/80">Projektovanje i ugradnja →</p>
          </Link>
        </div>
      </section>

      <section className="mx-auto max-w-3xl px-4 pb-16">
        <h2 className="font-display text-3xl font-semibold text-moss">Česta pitanja</h2>
        <div className="mt-8 space-y-3">
          {loc.faq.map((f) => (
            <details key={f.q} className="group rounded-2xl border border-moss/10 bg-white p-5">
              <summary className="flex cursor-pointer list-none items-center justify-between gap-4 font-semibold text-moss">
                {f.q}
                <span className="text-2xl text-leaf transition-transform group-open:rotate-45" aria-hidden>
                  +
                </span>
              </summary>
              <p className="mt-3 text-sm text-ink/75">{f.a}</p>
            </details>
          ))}
        </div>
        <p className="mt-8 text-sm text-ink/70">
          Radimo i{" "}
          {other.map((o, i) => (
            <span key={o.slug}>
              {i > 0 && ", "}
              <Link href={`/${o.slug}`} className="font-semibold text-moss underline hover:text-leaf">
                {o.inCity}
              </Link>
            </span>
          ))}
          , a sedište nam je u Staroj Pazovi.
        </p>
      </section>

      <CtaBand title={loc.ctaTitle} />
    </main>
  );
}
