// Detaljniji opisi usluga; ključ = id kategorije iz lib/pricing.ts
export interface ServiceDetail {
  lead: string;
  paragraphs: string[];
  includes: string[];
}

export const SERVICE_DETAILS: Record<string, ServiceDetail> = {
  kosenje: {
    lead: "Redovno košenje je osnova zdravog i gustog travnjaka.",
    paragraphs: [
      "Kosimo ravne površine i kosine, kako redovno održavane travnjake tako i zapuštene parcele na kojima je trava već visoka. Cena zavisi od visine trave i terena: do 10 cm, do 30 cm, a posebno se računa košenje na kosinama, gde je rad sporiji i zahtevniji.",
      "Redovno košenje podstiče busanje, travnjak postaje gušći i teže ga zauzimaju korov i mahovina. Zato preporučujemo da se košenje obavlja u ravnomernim razmacima tokom sezone, a ne tek kada trava pretera.",
      "Otkos može ostati na travnjaku ili ga sakupljamo i odnosimo, što se posebno dogovara.",
    ],
    includes: ["Ravne površine i kosine", "Trava do 10 cm i do 30 cm visine", "Sakupljanje i odnos otkosa po dogovoru"],
  },
  zivaograda: {
    lead: "Uredna živa ograda daje dvorištu oblik i privatnost.",
    paragraphs: [
      "Orezujemo žive ograde do 1,5 m i preko 1,5 m visine, uz sakupljanje orezanog materijala. Ako ograda ima trnje, cena se uvećava za 20% zbog sporijeg i opreznijeg rada.",
      "Pored oblikovanja, nudimo i skraćivanje žive ograde po dužnom metru, kao i odvoženje materijala na deponiju, što se dogovara prema količini.",
    ],
    includes: ["Orezivanje do i preko 1,5 m visine", "Sakupljanje orezanog materijala", "Skraćivanje žive ograde", "Odvoženje na deponiju po dogovoru"],
  },
  secenje: {
    lead: "Bezbedno uklanjanje grana i stabala uz kontrolisan pad.",
    paragraphs: [
      "Sečemo grane različite debljine, izdižemo krunu stabla do 5 m visine i obaramo stabla slobodnim padom prečnika do 50 cm, uz sečenje na trupce. Cena zavisi od debljine grane, odnosno prečnika stabla.",
      "Zbog bezbednosti ne vršimo seču stabala uz objekte i na nepristupačnim pozicijama, kao ni seču iz korpe. Ako niste sigurni da li je vaše stablo u dometu naše usluge, pošaljite fotografiju ili nas pozovite pa ćemo zajedno proceniti.",
    ],
    includes: ["Grane do 10 cm i od 10 do 20 cm", "Izdizanje krune do 5 m", "Obaranje stabala do 50 cm prečnika", "Sečenje na trupce"],
  },
  lisce: {
    lead: "Čisto dvorište bez lišća, mašinski ili ručno.",
    paragraphs: [
      "Na većim, otvorenim površinama lišće nagomilavamo mašinski, što je brže i povoljnije. Tamo gde je prostor tesan, ima žbunja ili osetljivih biljaka, lišće ručno grabuljamo.",
      "Sakupljanje lišća na vreme sprečava gušenje trave i pojavu bolesti na travnjaku tokom zime.",
    ],
    includes: ["Mašinsko nagomilavanje", "Ručno grabuljanje"],
  },
  travnjak: {
    lead: "Novi travnjak od pripreme zemljišta do prvog zalivanja.",
    paragraphs: [
      "Travnjak možemo zasnovati setvom semena ili polaganjem busena. Setva je povoljnija i obuhvata freziranje, grubo ravnanje, prihranu, setvu, valjanje i prvo zalivanje. Busen daje gotov travnjak odmah, a cena zavisi od veličine površine: što je površina veća, cena po m² je niža.",
      "Za površine do 100 m² uz cenu busena računaju se i troškovi transporta. Ako je travnjak ređi ili ima ćelavih mesta, nudimo i podsejavanje.",
      "Savetujemo da se pre zasnivanja travnjaka postavi zalivni sistem, jer se novi travnjak mora redovno zalivati.",
    ],
    includes: ["Setva: freziranje, ravnanje, prihrana, setva, valjanje, prvo zalivanje", "Polaganje busena na pripremljenu površinu", "Podsejavanje postojećeg travnjaka"],
  },
  kopanje: {
    lead: "Pripremljeno i okopano zemljište daje zdrave biljke.",
    paragraphs: [
      "Okopavamo žive ograde, sadnice drveća i žbunje, čime se razbija pokorica, uklanja korov i omogućava vodi i vazduhu da stignu do korena.",
      "Pre sadnje ili zasnivanja travnjaka nudimo ručno prekopavanje i freziranje, kako bi zemljište bilo rastresito i spremno.",
    ],
    includes: ["Okopavanje žive ograde, sadnica i žbunja", "Ručno prekopavanje", "Freziranje"],
  },
  sadnja: {
    lead: "Sadnja lišćara, četinara, šiblja i žive ograde.",
    paragraphs: [
      "Sadimo lišćare i četinare visine do 5 m, ukrasno šiblje (3 sadnice po m²) i živu ogradu (7 komada po dužnom metru). Cena se odnosi na rad, dok se sadnice plaćaju posebno.",
      "Za veće sadnice, pokrivačice tla i sezonski rasad cena se dogovara prema vrsti i količini.",
    ],
    includes: ["Lišćari i četinari do 5 m", "Ukrasno šiblje", "Živa ograda", "Pokrivačice tla i sezonski rasad po dogovoru"],
  },
  zalivanje: {
    lead: "Zalivanje za sve koji ne stižu ili nemaju sistem.",
    paragraphs: [
      "Zalivamo crevom, po satu rada (podrazumeva priključak na vodu), a za lokacije bez vode zalivanje vršimo iz cisterne, po m³.",
      "Za trajno rešenje preporučujemo automatski zalivni sistem.",
    ],
    includes: ["Zalivanje crevom po satu", "Zalivanje iz cisterne"],
  },
  prihrana: {
    lead: "Đubrivo prilagođeno biljkama i godišnjem dobu.",
    paragraphs: [
      "Nudimo folijarno đubrivo, granulisana osnovna đubriva, spororazlažuće kompleksno đubrivo OSMOCOTE i hidrogel koji zadržava vlagu u zemljištu.",
      "Pravilna prihrana daje gušću travu, intenzivniju boju i veću otpornost na sušu i bolesti.",
    ],
    includes: ["Folijarno đubrivo", "Granulisana osnovna đubriva", "OSMOCOTE", "Hidrogel"],
  },
  zastita: {
    lead: "Zaštita biljaka od bolesti, štetočina i korova.",
    paragraphs: [
      "Vršimo osnovnu zaštitu bilja i hemijsko uništavanje korova. Cena se računa po litru upotrebljenog sredstva.",
    ],
    includes: ["Osnovna zaštita bilja", "Hemijsko uništavanje korova"],
  },
  zima: {
    lead: "I zimi brinemo o vašem dvorištu.",
    paragraphs: [
      "Duvačem uklanjamo suvi sneg sa staza, kao i sa grana biljaka kako se ne bi lomile pod teretom. Usluga se naplaćuje po satu rada.",
    ],
    includes: ["Uklanjanje suvog snega sa staza", "Skidanje snega sa grana biljaka"],
  },
};
