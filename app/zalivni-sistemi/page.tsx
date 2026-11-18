import Image from "next/image";
import { buildMetadata } from "@/lib/metadata";
import { SITE_URL } from "@/lib/constants";
import { IRRIGATION_EQUIPMENT } from "@/lib/pricing";
import { IrrigationScheme } from "@/components/sections/IrrigationScheme";
import { CtaBand, PageHero } from "@/components/sections/PageHero";

export const metadata = buildMetadata({
  title: "Zalivni sistemi i oprema",
  description:
    "Projektovanje i ugradnja automatskih zalivnih sistema Hunter, kapsule za zalivanje u zoni korena i oprema za zalivanje.",
  url: `${SITE_URL}/zalivni-sistemi`,
  image: "/IMG-20190919-WA0014.jpg",
});

const benefits = [
  { t: "Pravo vreme", d: "Zalivanje u doba dana kada je temperatura optimalna i pritisak vode povoljan." },
  { t: "Ravnomerno", d: "Voda se raspoređuje ravnomerno, bez fleka i suvih mesta na travnjaku." },
  { t: "Bez vašeg truda", d: "Sistem radi i čuva biljke čak i kada ste na odmoru." },
  { t: "Ušteda vode", d: "Senzori i zalivanje u zoni korena troše samo onoliko vode koliko je potrebno." },
];

const equipment: Record<string, string> = {
  "Savitljiva creva za kap po kap": "Voda ide direktno do korena, idealno za žbunje i žive ograde.",
  Kapljači: "Tačno doziranje vode po biljci.",
  Konektori: "Spojevi i fitinzi za povezivanje cevi.",
  Rasprskivači: "Za ravnomerno zalivanje travnjaka.",
  Okiten: "Cevi za sisteme zalivanja.",
  "Baštenski šahtovi": "Zaštita ventila i spojeva ispod zemlje.",
  Tajmeri: "Automatsko pokretanje zalivanja po rasporedu.",
  "Regulatori pritiska": "Stabilan pritisak za pravilan rad sistema.",
};

export default function ZalivniSistemiPage() {
  return (
    <main>
      <PageHero
        eyebrow="Hunter® zalivni sistemi"
        title="Zalivni sistem je temelj zdravog vrta"
        text="Projektovanje i ugradnja automatskih zalivnih sistema marke HUNTER®, sa kompletnom opremom za zalivanje."
        image="/IMG-20190919-WA0014.jpg"
      />

      <section className="mx-auto grid max-w-6xl gap-10 px-4 py-16 lg:grid-cols-2">
        <div>
          <h2 className="font-display text-3xl font-semibold text-moss">
            Da li se svake godine razočarate kada travnjak požuti?
          </h2>
          <p className="mt-4 text-ink/75">
            Naš savet je da pre bilo kakvih radova u vrtu postavite zalivni sistem. Zalivni sistem daje život i
            vitalnost vašim biljkama. Važnije je imati kvalitetan zalivni sistem nego kvalitetne, skupe biljke,
            jer bez zalivanja vrt neće biti u punoj formi. Nekada je samo malo vode dovoljno da biljke ostanu u
            životu.
          </p>
          <p className="mt-3 text-ink/75">
            Iako uživamo u vrtu dok zalivamo biljke, vrlo često to ne uradimo na pravi način. Premalo vode,
            nepravilno raspoređeno, stvoriće fleke na travnjaku i on neće biti ni blizu onom koji je pokriven
            automatskim zalivnim sistemom.
          </p>
        </div>
        <Image
          src="/IMG-20190919-WA0014.jpg"
          alt="Travnjak u dvorištu"
          width={1600}
          height={739}
          sizes="(min-width:1024px) 50vw, 100vw"
          className="h-full max-h-96 w-full rounded-2xl object-cover"
        />
      </section>

      <section className="bg-sand py-16">
        <div className="mx-auto max-w-6xl px-4">
          <h2 className="font-display text-3xl font-semibold text-moss">Zašto automatsko zalivanje</h2>
          <div className="mt-8 grid gap-4 sm:grid-cols-2 lg:grid-cols-4">
            {benefits.map((b) => (
              <div key={b.t} className="rounded-2xl bg-white p-6">
                <span className="block h-1 w-10 rounded bg-leaf" />
                <h3 className="font-display mt-4 text-lg font-semibold text-moss">{b.t}</h3>
                <p className="mt-2 text-sm text-ink/70">{b.d}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="mx-auto max-w-6xl px-4 py-16">
        <h2 className="font-display text-3xl font-semibold text-moss">Kako se postavlja zalivni sistem</h2>
        <p className="mt-3 mb-8 max-w-2xl text-ink/75">
          Radimo od projekta do gotovog sistema. Šema prikazuje osnovni raspored, a ispod su koraci ugradnje.
        </p>
        <IrrigationScheme />
      </section>

      <section className="bg-moss py-16 text-white">
        <div className="mx-auto grid max-w-6xl gap-10 px-4 lg:grid-cols-2">
          <div>
            <h2 className="font-display text-3xl font-semibold">Pametno do uštede vode</h2>
            <p className="mt-4 text-white/85">
              Voda je dragocen resurs, pa posebnu pažnju posvećujemo njenoj uštedi. Zato razvijamo dva
              zanimljiva proizvoda.
            </p>
          </div>
          <div className="space-y-4">
            <div className="rounded-2xl bg-white/10 p-5">
              <h3 className="font-semibold text-lime">Kapsule za zalivanje u zoni korena</h3>
              <p className="mt-1 text-sm text-white/85">Voda stiže tačno tamo gde biljci treba.</p>
            </div>
            <div className="rounded-2xl bg-white/10 p-5">
              <h3 className="font-semibold text-lime">„Pametni“ softver sa senzorima</h3>
              <p className="mt-1 text-sm text-white/85">
                Određuje količinu zalivanja i može raditi automatski ili manuelno putem aplikacije.
              </p>
            </div>
          </div>
        </div>
      </section>

      <section className="mx-auto max-w-6xl px-4 py-16">
        <h2 className="font-display text-3xl font-semibold text-moss">Oprema za zalivanje</h2>
        <ul className="mt-8 grid gap-3 sm:grid-cols-2 lg:grid-cols-4">
          {IRRIGATION_EQUIPMENT.map((e) => (
            <li key={e} className="rounded-xl border border-moss/10 bg-white p-4">
              <p className="font-semibold text-moss">{e}</p>
              {equipment[e] && <p className="mt-1 text-sm text-ink/65">{equipment[e]}</p>}
            </li>
          ))}
        </ul>

        <div className="mt-12 rounded-2xl bg-sand p-6 sm:p-8">
          <h2 className="font-display text-2xl font-semibold text-moss">Cena automatskog zalivnog sistema</h2>
          <p className="mt-2 max-w-2xl text-ink/75">
            Cena se formira na osnovu broja prskalica, dužine rova i količine dodatne opreme. Pozovite nas ili
            pošaljite upit i dobićete ponudu prilagođenu vašem dvorištu.
          </p>
        </div>
      </section>

      <CtaBand title="Želite zalivni sistem? Javite nam se za ponudu." />
    </main>
  );
}
