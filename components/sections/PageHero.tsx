import Image from "next/image";
import Link from "next/link";

export function PageHero({
  eyebrow,
  title,
  text,
  image,
}: {
  eyebrow: string;
  title: string;
  text: string;
  image: string;
}) {
  return (
    <section className="relative isolate overflow-hidden bg-moss-dark text-white">
      <Image src={image} alt="" fill priority sizes="100vw" className="-z-10 object-cover opacity-35" />
      <div className="mx-auto max-w-6xl px-4 py-20 sm:py-28">
        <p className="mb-3 text-sm font-semibold uppercase tracking-[0.2em] text-lime">{eyebrow}</p>
        <h1 className="font-display max-w-3xl text-4xl font-semibold leading-tight sm:text-5xl">{title}</h1>
        <p className="mt-5 max-w-2xl text-lg text-white/85">{text}</p>
      </div>
    </section>
  );
}

export function CtaBand({ title }: { title: string }) {
  return (
    <section className="bg-moss py-14 text-white">
      <div className="mx-auto flex max-w-6xl flex-col items-start justify-between gap-5 px-4 sm:flex-row sm:items-center">
        <h2 className="font-display max-w-xl text-2xl font-semibold sm:text-3xl">{title}</h2>
        <Link href="/#kontakt" className="rounded-full bg-lime px-7 py-3 font-semibold text-moss-dark hover:bg-white">
          Zatražite ponudu
        </Link>
      </div>
    </section>
  );
}
