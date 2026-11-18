import Image from "next/image";
import Link from "next/link";
import { buildMetadata } from "@/lib/metadata";
import { JsonLd } from "@/components/seo/JsonLd";
import { Gallery } from "@/components/sections/Gallery";
import { ContactForm } from "@/components/sections/ContactForm";
import { Faq, FAQ, Process, Seasons, WhyUs } from "@/components/sections/HomeExtras";
import { EMAIL, PHONE_DISPLAY, PHONE_TEL, SITE_DESCRIPTION, SITE_NAME, SITE_URL } from "@/lib/constants";

export const metadata = buildMetadata({
  title: "Košenje trave, uređenje dvorišta i zalivni sistemi",
  description: SITE_DESCRIPTION,
  image: "/IMG-20190919-WA0013.jpg",
});

const services = [
  { t: "Košenje trave", d: "Ravne površine i kosine, sa odnosom otkosa po dogovoru.", id: "kosenje" },
  { t: "Zasnivanje travnjaka", d: "Setvom semena ili busenom, uključujući pripremu zemljišta.", id: "travnjak" },
  { t: "Orezivanje žive ograde", d: "Precizno oblikovanje i skraćivanje, sa sakupljanjem.", id: "zivaograda" },
  { t: "Sečenje grana i stabala", d: "Grane, izdizanje krune i kontrolisano obaranje stabala.", id: "secenje" },
  { t: "Sadnja i okopavanje", d: "Lišćari, četinari, šiblje i žive ograde.", id: "sadnja" },
  { t: "Prihrana i zaštita bilja", d: "Đubriva, zaštita i uništavanje korova.", id: "prihrana" },
  { t: "Lišće i zimska služba", d: "Sakupljanje lišća i uklanjanje snega sa staza.", id: "lisce" },
  { t: "Zalivni sistemi", d: "Projektovanje i ugradnja Hunter sistema.", id: "zalivanje" },
];

export default function HomePage() {
  return (
    <main>
      <JsonLd
        data={{
          "@context": "https://schema.org",
          "@type": "LocalBusiness",
          name: SITE_NAME,
          url: SITE_URL,
          telephone: PHONE_TEL,
          email: EMAIL,
          description: SITE_DESCRIPTION,
          logo: `${SITE_URL}/logo.jpg`,
          image: `${SITE_URL}/IMG-20190919-WA0013.jpg`,
        }}
      />

      <JsonLd
        data={{
          "@context": "https://schema.org",
          "@type": "FAQPage",
          mainEntity: FAQ.map((f) => ({
            "@type": "Question",
            name: f.q,
            acceptedAnswer: { "@type": "Answer", text: f.a },
          })),
        }}
      />

      {/* Hero */}
      <section className="relative isolate overflow-hidden bg-moss-dark text-white">
        <Image
          src="/IMG-20190919-WA0013.jpg"
          alt=""
          fill
          priority
          sizes="100vw"
          className="-z-10 object-cover opacity-45"
        />
        <div className="mx-auto max-w-6xl px-4 py-24 sm:py-32 lg:py-40">
          <p className="mb-4 text-sm font-semibold uppercase tracking-[0.2em] text-lime">
            Održavanje zelenih površina
          </p>
          <h1 className="font-display max-w-3xl text-4xl font-semibold leading-tight sm:text-6xl">
            Košenje trave, travnjaci i zalivni sistemi – uređenje i održavanje vašeg dvorišta
          </h1>
          <p className="mt-6 max-w-xl text-lg text-white/85">
            Paja Trava PR: košenje trave, zasnivanje travnjaka, orezivanje žive ograde, sečenje
            drveća, sadnja i automatski zalivni sistemi Hunter. Sve za zeleno i uredno dvorište
            na jednom mestu.
          </p>
          <div className="mt-8 flex flex-wrap gap-3">
            <a href="#kontakt" className="rounded-full bg-lime px-7 py-3 font-semibold text-moss-dark hover:bg-white">
              Zatražite ponudu
            </a>
            <a
              href={`tel:${PHONE_TEL}`}
              className="rounded-full border border-white/50 px-7 py-3 font-semibold hover:bg-white/10"
            >
              Pozovite {PHONE_DISPLAY}
            </a>
          </div>
        </div>
      </section>

      {/* Cenovnik + zalivni sistemi: zasebne stranice */}
      <section className="pt-16 pb-4">
        <div className="mx-auto grid max-w-6xl gap-6 px-4 md:grid-cols-2">
          <Link href="/usluge" className="group rounded-2xl bg-white p-8 shadow-sm transition hover:-translate-y-1 hover:shadow-lg">
            <p className="text-sm font-semibold uppercase tracking-[0.2em] text-leaf">Usluge i cenovnik</p>
            <h2 className="font-display mt-2 text-2xl font-semibold text-moss sm:text-3xl">Detaljan opis svih usluga i cene</h2>
            <p className="mt-3 text-ink/70">Košenje, orezivanje, sečenje, travnjaci, sadnja, prihrana i još mnogo toga, uz orijentacione cene.</p>
            <span className="mt-5 inline-block font-semibold text-moss group-hover:text-leaf">Pogledajte usluge →</span>
          </Link>
          <Link href="/zalivni-sistemi" className="group rounded-2xl bg-moss p-8 text-white shadow-sm transition hover:-translate-y-1 hover:shadow-lg">
            <p className="text-sm font-semibold uppercase tracking-[0.2em] text-lime">Hunter® sistemi</p>
            <h2 className="font-display mt-2 text-2xl font-semibold sm:text-3xl">Zalivni sistemi i oprema</h2>
            <p className="mt-3 text-white/80">Projektovanje i ugradnja automatskih zalivnih sistema, da travnjak više nikad ne požuti.</p>
            <span className="mt-5 inline-block font-semibold text-lime group-hover:text-white">Saznajte više →</span>
          </Link>
        </div>
      </section>

      {/* Usluge */}
      <section id="usluge" className="mx-auto max-w-6xl px-4 py-20">
        <h2 className="font-display text-3xl font-semibold text-moss sm:text-4xl">Naše usluge</h2>
        <p className="mt-3 max-w-2xl text-ink/70">
          Od redovnog održavanja do kompletnog uređenja novog dvorišta.
        </p>
        <div className="mt-10 grid gap-4 sm:grid-cols-2 lg:grid-cols-4">
          {services.map((s) => (
            <Link
              key={s.t}
              href={s.id === "zalivanje" ? "/zalivni-sistemi" : `/usluge#${s.id}`}
              className="group rounded-2xl border border-moss/10 bg-white p-6 transition hover:-translate-y-1 hover:border-leaf hover:shadow-lg"
            >
              <span className="block h-1 w-10 rounded bg-leaf transition-all group-hover:w-16" />
              <h3 className="font-display mt-4 text-xl font-semibold text-moss">{s.t}</h3>
              <p className="mt-2 text-sm text-ink/70">{s.d}</p>
            </Link>
          ))}
        </div>
      </section>

      <WhyUs />
      <Process />
      <Seasons />

      {/* Galerija */}
      <section id="galerija" className="bg-sand py-20">
        <div className="mx-auto max-w-6xl px-4">
          <h2 className="font-display text-3xl font-semibold text-moss sm:text-4xl">Naši radovi</h2>
          <p className="mt-3 mb-10 text-ink/70">Travnjaci zasnovani busenom u novim dvorištima.</p>
          <Gallery />
        </div>
      </section>

      <Faq />

      {/* Kontakt */}
      <section id="kontakt" className="mx-auto max-w-6xl px-4 py-20">
        <div className="grid gap-12 lg:grid-cols-5">
          <div className="lg:col-span-2">
            <h2 className="font-display text-3xl font-semibold text-moss sm:text-4xl">Kontakt</h2>
            <p className="mt-4 text-ink/75">
              Pre određivanja cene potrebno je da sagledamo obim posla. Pošaljite upit ili nas pozovite.
            </p>
            <dl className="mt-6 space-y-3">
              <div>
                <dt className="text-xs font-semibold uppercase tracking-wider text-leaf">Telefon</dt>
                <dd>
                  <a href={`tel:${PHONE_TEL}`} className="text-xl font-semibold text-moss hover:text-leaf">
                    {PHONE_DISPLAY}
                  </a>
                </dd>
              </div>
              <div>
                <dt className="text-xs font-semibold uppercase tracking-wider text-leaf">Email</dt>
                <dd>
                  <a href={`mailto:${EMAIL}`} className="font-medium text-moss hover:text-leaf">
                    {EMAIL}
                  </a>
                </dd>
              </div>
            </dl>
          </div>
          <div className="rounded-2xl bg-white p-6 shadow-sm sm:p-8 lg:col-span-3">
            <ContactForm />
          </div>
        </div>
      </section>
    </main>
  );
}
