export const FAQ = [
  {
    q: "Da li je cenovnik fiksan?",
    a: "Cenovnik je orijentacionog karaktera. Pre određivanja cene potrebno je da sagledamo obim posla, a za veće površine moguća je korekcija cena.",
  },
  {
    q: "Postoji li minimalna cena radova?",
    a: "Da, minimalna količina radova obračunava se po jedinstvenoj tarifi od 15.000 dinara. Za manje obime posla obračunava se i trošak dolaska.",
  },
  {
    q: "Da li odnosite pokošenu travu i orezane grane?",
    a: "Sakupljanje i odnos otkosa, kao i odvoženje orezane žive ograde na deponiju, radimo po dogovoru. Orezivanje žive ograde se računa sa sakupljanjem.",
  },
  {
    q: "Da li sečete stabla uz kuću?",
    a: "Ne. Ne vršimo seču stabala uz objekte i na nepristupačnim pozicijama, kao ni seču iz korpe. Stabla obaramo slobodnim padom, do 50 cm prečnika.",
  },
  {
    q: "Šta je bolje: setva semena ili busen?",
    a: "Setva je povoljnija, a busen daje gotov travnjak odmah. Cena busena zavisi od površine, pa je veća površina povoljnija po m².",
  },
  {
    q: "Kada je pravo vreme za zalivni sistem?",
    a: "Najbolje pre bilo kakvih radova u vrtu, odnosno pre zasnivanja travnjaka i sadnje. Cena se formira na osnovu broja prskalica, dužine rova i dodatne opreme.",
  },
];

const why = [
  { t: "Sve na jednom mestu", d: "Od košenja i sečenja do sadnje i zalivnih sistema, jedan izvođač za ceo vrt." },
  { t: "Cena unapred", d: "Orijentacioni cenovnik je javan, a tačnu ponudu dajemo kad sagledamo obim posla." },
  { t: "Hunter® oprema", d: "Projektujemo i ugrađujemo automatske zalivne sisteme poznatog proizvođača." },
  { t: "Dogovor bez komplikacija", d: "Pozovite nas ili pošaljite upit, a mi se javljamo da dogovorimo pregled i termin." },
];

const process = [
  { t: "Javite se", d: "Pozovite ili pošaljite upit sa opisom posla i površinom." },
  { t: "Procena", d: "Sagledavamo obim posla, jer cena zavisi od površine i terena." },
  { t: "Ponuda", d: "Dobijate cenu i dogovaramo termin." },
  { t: "Izvođenje", d: "Radimo posao i ostavljamo uredno dvorište." },
];

const seasons = [
  { name: "Proleće", tasks: ["Prvo košenje", "Prihrana travnjaka", "Podsejavanje", "Sadnja i okopavanje"] },
  { name: "Leto", tasks: ["Redovno košenje", "Zalivanje", "Orezivanje žive ograde", "Zaštita bilja"] },
  { name: "Jesen", tasks: ["Sakupljanje lišća", "Zasnivanje travnjaka", "Sadnja drveća i šiblja", "Prihrana"] },
  { name: "Zima", tasks: ["Zimska služba", "Sečenje i orezivanje grana", "Planiranje zalivnog sistema"] },
];

export function WhyUs() {
  return (
    <section className="bg-moss py-20 text-white">
      <div className="mx-auto max-w-6xl px-4">
        <h2 className="font-display text-3xl font-semibold sm:text-4xl">Zašto Paja Trava</h2>
        <div className="mt-10 grid gap-5 sm:grid-cols-2 lg:grid-cols-4">
          {why.map((w) => (
            <div key={w.t} className="rounded-2xl bg-white/10 p-6">
              <span className="block h-1 w-10 rounded bg-lime" />
              <h3 className="font-display mt-4 text-xl font-semibold">{w.t}</h3>
              <p className="mt-2 text-sm text-white/80">{w.d}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

export function Process() {
  return (
    <section className="mx-auto max-w-6xl px-4 py-20">
      <h2 className="font-display text-3xl font-semibold text-moss sm:text-4xl">Kako do ponude</h2>
      <ol className="mt-10 grid gap-5 sm:grid-cols-2 lg:grid-cols-4">
        {process.map((s, i) => (
          <li key={s.t} className="rounded-2xl border border-moss/10 bg-white p-6">
            <span className="font-display text-4xl font-semibold text-leaf">{i + 1}</span>
            <h3 className="mt-2 font-semibold text-moss">{s.t}</h3>
            <p className="mt-1 text-sm text-ink/70">{s.d}</p>
          </li>
        ))}
      </ol>
    </section>
  );
}

export function Seasons() {
  return (
    <section className="bg-sand py-20">
      <div className="mx-auto max-w-6xl px-4">
        <h2 className="font-display text-3xl font-semibold text-moss sm:text-4xl">Vrt kroz godinu</h2>
        <p className="mt-3 max-w-2xl text-ink/70">Šta je u kom godišnjem dobu najvažnije za zdrav i uredan vrt.</p>
        <div className="mt-10 grid gap-5 sm:grid-cols-2 lg:grid-cols-4">
          {seasons.map((s) => (
            <div key={s.name} className="rounded-2xl bg-white p-6 shadow-sm">
              <h3 className="font-display text-xl font-semibold text-moss">{s.name}</h3>
              <ul className="mt-3 space-y-2 text-sm">
                {s.tasks.map((t) => (
                  <li key={t} className="flex gap-2">
                    <span className="mt-2 h-1.5 w-1.5 shrink-0 rounded-full bg-leaf" />
                    {t}
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

export function Faq() {
  return (
    <section className="mx-auto max-w-3xl px-4 py-20">
      <h2 className="font-display text-3xl font-semibold text-moss sm:text-4xl">Česta pitanja</h2>
      <div className="mt-8 space-y-3">
        {FAQ.map((f) => (
          <details key={f.q} className="group rounded-2xl border border-moss/10 bg-white p-5">
            <summary className="flex cursor-pointer list-none items-center justify-between gap-4 font-semibold text-moss">
              {f.q}
              <span className="text-2xl text-leaf transition-transform group-open:rotate-45" aria-hidden>+</span>
            </summary>
            <p className="mt-3 text-sm text-ink/75">{f.a}</p>
          </details>
        ))}
      </div>
    </section>
  );
}
