export interface PriceItem {
  label: string;
  unit: string;
  price: string;
  note?: string;
}
export interface PriceCategory {
  id: string;
  title: string;
  items: PriceItem[];
  footnote?: string;
}

export const PRICING_INTRO = [
  "Cenovnik je orijentacionog karaktera. Pre uzimanja u obzir određenih cena, potrebno je da nas kontaktirate kako bismo sagledali obim posla.",
  "Za manje obime posla obračunava se trošak dolaska, dok je za veće površine moguća korekcija cena.",
];
export const MIN_JOB =
  "Minimalna količina radova obračunava se po jedinstvenoj tarifi od 15.000 dinara.";

export const PRICING: PriceCategory[] = [
  {
    id: "kosenje",
    title: "Košenje trave",
    items: [
      { label: "Ravne površine, trava do 10 cm visine", unit: "m²", price: "od 9 rsd" },
      { label: "Ravne površine, trava do 30 cm visine", unit: "m²", price: "od 11 rsd" },
      { label: "Košenje na kosinama", unit: "m²", price: "od 18 rsd" },
      { label: "Sakupljanje i odnos otkosa", unit: "m²", price: "Dogovor" },
    ],
  },
  {
    id: "zivaograda",
    title: "Orezivanje žive ograde",
    items: [
      { label: "Do 1,5 m visine, sa sakupljanjem", unit: "m²", price: "45 rsd", note: "Trn +20%" },
      { label: "Preko 1,5 m visine, sa sakupljanjem", unit: "m²", price: "55 rsd", note: "Trn +20%" },
      { label: "Skraćivanje žive ograde", unit: "m¹", price: "od 105 rsd" },
      { label: "Odvoženje na deponiju", unit: "", price: "Dogovor" },
    ],
  },
  {
    id: "secenje",
    title: "Sečenje grana i stabala",
    items: [
      { label: "Grane do 10 cm debljine", unit: "kom.", price: "od 350 rsd" },
      { label: "Grane od 10 do 20 cm debljine", unit: "kom.", price: "700 rsd" },
      { label: "Izdizanje krune stabla do 5 m visine", unit: "kom.", price: "4.200 rsd" },
      { label: "Obaranje stabla do 15 cm prečnika, seča na trupce", unit: "kom.", price: "3.000 rsd" },
      { label: "Obaranje stabla 16–30 cm prečnika, seča na trupce", unit: "kom.", price: "5.900 rsd" },
      { label: "Obaranje stabla 31–50 cm prečnika, seča na trupce", unit: "kom.", price: "11.900 rsd" },
    ],
    footnote:
      "Obaranje je slobodnim padom. Ne vršimo seču stabala uz objekte i na nepristupačnim pozicijama, kao ni seču iz korpe.",
  },
  {
    id: "lisce",
    title: "Sakupljanje suvog lišća",
    items: [
      { label: "Mašinsko nagomilavanje suvog lišća", unit: "m²", price: "9 rsd" },
      { label: "Ručno grabuljanje suvog lišća", unit: "m²", price: "15 rsd" },
    ],
  },
  {
    id: "travnjak",
    title: "Zasnivanje travnjaka",
    items: [
      {
        label: "Setvom semena",
        unit: "m²",
        price: "od 380 rsd",
        note: "Freziranje, grubo ravnanje, prihrana, setva, valjanje, prvo zalivanje",
      },
      { label: "Busenom, preko 250 m²", unit: "m²", price: "1.000 rsd", note: "Na pripremljenoj površini" },
      { label: "Busenom, 100–250 m²", unit: "m²", price: "1.200 rsd", note: "Na pripremljenoj površini" },
      { label: "Busenom, ispod 100 m²", unit: "m²", price: "1.300 rsd", note: "+ troškovi transporta" },
      { label: "Podsejavanje travnjaka", unit: "m²", price: "120 rsd" },
    ],
  },
  {
    id: "kopanje",
    title: "Kopanje i okopavanje",
    items: [
      { label: "Okopavanje žive ograde", unit: "m¹", price: "95 rsd" },
      { label: "Okopavanje sadnica drveća", unit: "kom.", price: "95 rsd" },
      { label: "Okopavanje žbunja", unit: "m²", price: "190 rsd" },
      { label: "Ručno prekopavanje i priprema za sadnju", unit: "m²", price: "200 rsd" },
      { label: "Freziranje", unit: "m²", price: "150 rsd" },
    ],
  },
  {
    id: "sadnja",
    title: "Sadnja",
    items: [
      { label: "Lišćari do 2 m visine", unit: "kom.", price: "1.230 rsd", note: "+ sadnica" },
      { label: "Lišćari 2–4 m visine", unit: "kom.", price: "od 1.600 rsd", note: "+ sadnica" },
      { label: "Lišćari 4–5 m visine", unit: "kom.", price: "Dogovor" },
      { label: "Četinari do 2 m visine", unit: "kom.", price: "1.800 rsd", note: "+ sadnica" },
      { label: "Četinari 2–4 m visine", unit: "kom.", price: "3.900 rsd", note: "+ sadnica" },
      { label: "Četinari 4–5 m visine", unit: "kom.", price: "Dogovor" },
      { label: "Ukrasno šiblje (3 sadnice po m²)", unit: "m²", price: "380 rsd", note: "+ sadnica" },
      { label: "Živa ograda (7 komada po metru)", unit: "m¹", price: "390 rsd", note: "+ sadnice" },
      { label: "Pokrivačice tla", unit: "", price: "Dogovor" },
      { label: "Sezonski rasad", unit: "", price: "Dogovor" },
    ],
  },
  {
    id: "zalivanje",
    title: "Zalivanje",
    items: [
      { label: "Zalivanje crevom (podrazumeva priključak)", unit: "sat", price: "750 rsd" },
      { label: "Zalivanje iz cisterne", unit: "m³", price: "5.500 rsd" },
    ],
  },
  {
    id: "prihrana",
    title: "Prihrana",
    items: [
      { label: "Folijarno đubrivo", unit: "1 L", price: "110 rsd" },
      { label: "Granulisana osnovna đubriva", unit: "kg", price: "220 rsd" },
      { label: "Spororazlažuće kompleksno đubrivo OSMOCOTE", unit: "kg", price: "1.500 rsd" },
      { label: "Hidrogel", unit: "kg", price: "3.500 rsd" },
    ],
  },
  {
    id: "zastita",
    title: "Zaštita bilja",
    items: [
      { label: "Osnovna zaštita", unit: "1 L", price: "250 rsd" },
      { label: "Hemijsko uništavanje korova", unit: "1 L", price: "200 rsd" },
    ],
  },
  {
    id: "zima",
    title: "Zimska služba",
    items: [
      { label: "Uklanjanje suvog snega sa staza i granja biljaka duvačem", unit: "sat", price: "3.600 rsd" },
    ],
  },
];

export const IRRIGATION_EQUIPMENT = [
  "Savitljiva creva za kap po kap",
  "Kapljači",
  "Konektori",
  "Rasprskivači",
  "Okiten",
  "Baštenski šahtovi",
  "Tajmeri",
  "Regulatori pritiska",
];

export const GALLERY = [
  { src: "/IMG-20190919-WA0013.jpg", w: 1600, h: 739, alt: "Zasnovan travnjak ispred kuće" },
  { src: "/IMG-20190919-WA0014.jpg", w: 1600, h: 739, alt: "Travnjak postavljen busenom u dvorištu" },
  { src: "/IMG-20190919-WA0007.jpg", w: 739, h: 1600, alt: "Travnjak pored staze" },
  { src: "/IMG-20190919-WA0008.jpg", w: 739, h: 1600, alt: "Trava pored popločane staze" },
  { src: "/IMG-20190919-WA0009.jpg", w: 900, h: 1600, alt: "Sveže postavljen busen i staza" },
  { src: "/IMG-20190921-WA0000.jpg", w: 739, h: 1600, alt: "Trava uz belu kamenu ivicu" },
  { src: "/IMG-20190921-WA0001.jpg", w: 739, h: 1600, alt: "Travnjak uz zid sa belim kamenom" },
  { src: "/IMG-20190921-WA0002.jpg", w: 739, h: 1600, alt: "Uređen travnjak u uskom dvorištu" },
  { src: "/IMG-20190921-WA0003.jpg", w: 739, h: 1600, alt: "Travnjak i ograda" },
  { src: "/IMG-20190921-WA0004.jpg", w: 739, h: 1600, alt: "Zasnovan travnjak u dvorištu" },
  { src: "/IMG-20190921-WA0005.jpg", w: 739, h: 1600, alt: "Dvorište sa novim travnjakom" },
];
