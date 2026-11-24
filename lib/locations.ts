// Podaci za lokalne SEO stranice (gradovi u kojima najčešće radimo)
export interface Location {
  slug: string;
  city: string; // nominativ: Beograd
  inCity: string; // lokativ: u Beogradu
  menuLabel: string;
  title: string; // <title> bez imena sajta
  description: string;
  h1: string;
  eyebrow: string;
  heroText: string;
  image: string;
  intro: string[];
  areas: { name: string; text: string }[];
  faq: { q: string; a: string }[];
  ctaTitle: string;
}

export const LOCATIONS: Location[] = [
  {
    slug: "kosenje-trave-beograd",
    city: "Beograd",
    inCity: "u Beogradu",
    menuLabel: "Beograd",
    title: "Košenje trave i uređenje dvorišta u Beogradu",
    description:
      "Košenje trave, orezivanje žive ograde, sečenje stabala, zasnivanje travnjaka i zalivni sistemi Hunter u Beogradu i Zemunu. Izlazimo na teren, javite se za ponudu.",
    h1: "Košenje trave i uređenje dvorišta u Beogradu",
    eyebrow: "Radimo u Beogradu i Zemunu",
    heroText:
      "Održavanje zelenih površina, zasnivanje travnjaka i ugradnja zalivnih sistema u Beogradu, uključujući Zemun i ostale gradske opštine.",
    image: "/IMG-20190919-WA0013.jpg",
    intro: [
      "Paja Trava PR sedište ima u Staroj Pazovi, ali većinu poslova obavljamo upravo u Beogradu. Na teren izlazimo u svim delovima grada, od Zemuna i Novog Beograda do Voždovca, Zvezdare, Čukarice i prigradskih naselja.",
      "Bilo da vam treba redovno košenje trave, orezivanje žive ograde, sečenje grana i stabala ili kompletno uređenje novog dvorišta, dovoljno je da nas pozovete ili pošaljete upit sa opisom posla i površinom. Dolazimo da sagledamo obim posla, a zatim dobijate ponudu i dogovaramo termin.",
    ],
    areas: [
      {
        name: "Zemun",
        text: "Košenje travnjaka, orezivanje živih ograda i sečenje grana u kućama i dvorištima u Zemunu, Zemun Polju, Batajnici i okolini.",
      },
      {
        name: "Novi Beograd i Surčin",
        text: "Održavanje dvorišta i zelenih površina uz stambene objekte, kao i uređenje novih placeva i zasnivanje travnjaka busenom ili setvom.",
      },
      {
        name: "Ostale opštine Beograda",
        text: "Voždovac, Zvezdara, Čukarica, Rakovica, Palilula, Vračar i prigradska naselja. Za sve delove grada radimo po istom cenovniku.",
      },
    ],
    faq: [
      {
        q: "Da li radite u celom Beogradu?",
        a: "Da. Radimo u svim gradskim opštinama, uključujući Zemun, Novi Beograd, Voždovac, Zvezdaru i Čukaricu, kao i u prigradskim naseljima.",
      },
      {
        q: "Da li se u Beogradu plaća dolazak?",
        a: "Za veće obime posla ne. Za manje poslove obračunava se trošak dolaska, a minimalna količina radova je po jedinstvenoj tarifi od 15.000 dinara.",
      },
      {
        q: "Koliko košta košenje trave u Beogradu?",
        a: "Cene su iste kao u celoj Srbiji. Ravne površine sa travom do 10 cm kose se od 9 rsd po m². Tačnu cenu određujemo kad sagledamo površinu i teren, a ceo cenovnik je na stranici Usluge i cenovnik.",
      },
      {
        q: "Da li ugrađujete zalivne sisteme u Beogradu?",
        a: "Da. Projektujemo i ugrađujemo automatske zalivne sisteme Hunter u dvorištima širom Beograda. Najbolje je da se sistem postavi pre zasnivanja travnjaka.",
      },
    ],
    ctaTitle: "Treba vam košenje ili uređenje dvorišta u Beogradu?",
  },
  {
    slug: "kosenje-trave-novi-sad",
    city: "Novi Sad",
    inCity: "u Novom Sadu",
    menuLabel: "Novi Sad",
    title: "Košenje trave i uređenje dvorišta u Novom Sadu",
    description:
      "Košenje trave, orezivanje žive ograde, sečenje stabala, zasnivanje travnjaka i zalivni sistemi Hunter u Novom Sadu i okolini. Izlazimo na teren, javite se za ponudu.",
    h1: "Košenje trave i uređenje dvorišta u Novom Sadu",
    eyebrow: "Radimo u Novom Sadu",
    heroText:
      "Održavanje zelenih površina, zasnivanje travnjaka i ugradnja zalivnih sistema u Novom Sadu, Petrovaradinu, Sremskoj Kamenici i okolini.",
    image: "/IMG-20190919-WA0014.jpg",
    intro: [
      "Paja Trava PR sedište ima u Staroj Pazovi, a jedan od gradova u kojima najčešće radimo je Novi Sad. Izlazimo na teren u svim delovima grada i okolnim naseljima.",
      "Radimo redovno održavanje dvorišta, košenje trave, orezivanje žive ograde, sečenje grana i stabala, sadnju i zasnivanje novih travnjaka. Pozovite nas ili pošaljite upit sa opisom posla i površinom, pa dolazimo da sagledamo obim posla i dogovorimo cenu i termin.",
    ],
    areas: [
      {
        name: "Novi Sad",
        text: "Kuće i dvorišta u svim delovima grada, od Detelinare, Liman i Grbavice do Podbare i Telepa: košenje, orezivanje, sečenje grana i prihrana travnjaka.",
      },
      {
        name: "Petrovaradin i Sremska Kamenica",
        text: "Uređenje i održavanje dvorišta, zasnivanje travnjaka busenom ili setvom i ugradnja zalivnih sistema.",
      },
      {
        name: "Okolna naselja",
        text: "Veternik, Futog, Begeč, Čenej i druga naselja oko Novog Sada. Za sve lokacije radimo po istom cenovniku.",
      },
    ],
    faq: [
      {
        q: "Da li radite u celom Novom Sadu?",
        a: "Da. Radimo u svim delovima grada, uključujući Petrovaradin i Sremsku Kamenicu, kao i u okolnim naseljima.",
      },
      {
        q: "Da li se u Novom Sadu plaća dolazak?",
        a: "Za veće obime posla ne. Za manje poslove obračunava se trošak dolaska, a minimalna količina radova je po jedinstvenoj tarifi od 15.000 dinara.",
      },
      {
        q: "Koliko košta košenje trave u Novom Sadu?",
        a: "Cene su iste kao u celoj Srbiji. Ravne površine sa travom do 10 cm kose se od 9 rsd po m². Tačnu cenu određujemo kad sagledamo površinu i teren, a ceo cenovnik je na stranici Usluge i cenovnik.",
      },
      {
        q: "Da li ugrađujete zalivne sisteme u Novom Sadu?",
        a: "Da. Projektujemo i ugrađujemo automatske zalivne sisteme Hunter u dvorištima u Novom Sadu i okolini. Najbolje je da se sistem postavi pre zasnivanja travnjaka.",
      },
    ],
    ctaTitle: "Treba vam košenje ili uređenje dvorišta u Novom Sadu?",
  },
];

export function getLocation(slug: string): Location {
  const l = LOCATIONS.find((x) => x.slug === slug);
  if (!l) throw new Error(`Nepoznata lokacija: ${slug}`);
  return l;
}
