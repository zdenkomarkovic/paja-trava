const steps = [
  { t: "Procena i razgovor", d: "Sagledavamo površinu, mesto priključka vode, pritisak i vaše želje." },
  { t: "Projekat", d: "Raspoređujemo prskalice tako da se krugovi zalivanja preklapaju i cela površina bude pokrivena." },
  { t: "Obeležavanje trase", d: "Na terenu obeležavamo položaj cevi, prskalica i šahta sa ventilima." },
  { t: "Kopanje rova", d: "Iskopavamo uske rovove za cevi, vodeći računa da travnjak i biljke ostanu što manje oštećeni." },
  { t: "Cevi i ventili", d: "Polažemo glavni vod do šahta sa ventilima i dalje razvodne cevi po zonama." },
  { t: "Rasprskivači i kapljači", d: "Postavljamo rasprskivače za travnjak i kap-po-kap creva za žbunje i žive ograde." },
  { t: "Tajmer", d: "Povezujemo ventile sa tajmerom, koji pokreće zalivanje po rasporedu." },
  { t: "Ispiranje i probni rad", d: "Ispiramo cevi, proveravamo pokrivenost i pritisak, a po potrebi podešavamo ugao i domet." },
  { t: "Zatrpavanje i program", d: "Zatrpavamo rovove, vraćamo površinu u red i podešavamo program zalivanja." },
];

const sprinklersTop = [120, 265, 410, 555, 700];

function Sprinkler({ x, y }: { x: number; y: number }) {
  return (
    <g>
      <circle cx={x} cy={y} r={64} fill="#4aa3d8" opacity={0.16} />
      <circle cx={x} cy={y} r={10} fill="#1f6fa8" />
      <circle cx={x} cy={y} r={3} fill="#fff" />
    </g>
  );
}

export function IrrigationScheme() {
  return (
    <div>
      <div className="-mx-4 border-y border-moss/10 bg-white px-1 py-2 sm:mx-0 sm:rounded-2xl sm:border sm:p-4">
        <svg
          viewBox="0 0 800 560"
          role="img"
          aria-label="Shema automatskog zalivnog sistema: priključak vode, glavni vod, šaht sa ventilima, razvodne cevi, rasprskivači i tajmer"
          className="mx-auto h-auto w-full"
          fontFamily="var(--font-inter), system-ui, sans-serif"
        >
          <rect x="10" y="10" width="780" height="540" rx="18" fill="#dcebc8" />

          {/* kuća */}
          <rect x="280" y="10" width="260" height="100" rx="6" fill="#f7f5ee" stroke="#1f4d2b" strokeWidth="3" />
          <text x="410" y="72" textAnchor="middle" fontSize="30" fontWeight="600" fill="#1f4d2b">Kuća</text>

          {/* krugovi pokrivenosti */}
          {sprinklersTop.map((x) => (
            <Sprinkler key={`a${x}`} x={x} y={340} />
          ))}
          {sprinklersTop.map((x) => (
            <Sprinkler key={`b${x}`} x={x} y={480} />
          ))}

          {/* cevi */}
          <path d="M60 190 H410 V220" fill="none" stroke="#1f6fa8" strokeWidth="8" strokeLinecap="round" strokeLinejoin="round" />
          <path d="M410 264 V340 M120 340 H700" fill="none" stroke="#2f8fc9" strokeWidth="6" strokeLinecap="round" />
          <path d="M410 340 V480 M120 480 H700" fill="none" stroke="#2f8fc9" strokeWidth="6" strokeLinecap="round" />
          {/* kabl do tajmera */}
          <path d="M615 86 V242 H474" fill="none" stroke="#d9822b" strokeWidth="4" strokeDasharray="10 8" strokeLinecap="round" strokeLinejoin="round" />

          {/* priključak */}
          <circle cx="60" cy="190" r="22" fill="#1f6fa8" />
          <text x="24" y="146" fontSize="26" fontWeight="600" fill="#143620">Priključak vode</text>

          {/* šaht sa ventilima */}
          <rect x="350" y="220" width="120" height="44" rx="8" fill="#1f4d2b" />
          <text x="410" y="251" textAnchor="middle" fontSize="22" fontWeight="600" fill="#fff">Ventili</text>
          <text x="334" y="252" textAnchor="end" fontSize="26" fontWeight="600" fill="#143620">Šaht</text>

          {/* tajmer */}
          <rect x="560" y="42" width="110" height="44" rx="8" fill="#d9822b" />
          <text x="615" y="73" textAnchor="middle" fontSize="22" fontWeight="700" fill="#fff">TAJMER</text>

          <text x="30" y="300" fontSize="26" fontWeight="600" fill="#143620">Zona 1</text>
          <text x="30" y="440" fontSize="26" fontWeight="600" fill="#143620">Zona 2</text>
        </svg>
        <p className="mt-3 px-3 text-xs text-ink/65 sm:text-sm">
          Plava linija su cevi, narandžasta isprekidana je upravljački kabl od tajmera do ventila, a plavi
          krugovi pokazuju domet rasprskivača.
        </p>
      </div>

      <ol className="mt-10 grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
        {steps.map((s, i) => (
          <li key={s.t} className="relative rounded-2xl border border-moss/10 bg-white p-6">
            <span className="font-display text-3xl font-semibold text-leaf">{String(i + 1).padStart(2, "0")}</span>
            <h3 className="mt-1 font-semibold text-moss">{s.t}</h3>
            <p className="mt-1 text-sm text-ink/70">{s.d}</p>
          </li>
        ))}
      </ol>
    </div>
  );
}
