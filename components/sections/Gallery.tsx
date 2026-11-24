"use client";

import Image from "next/image";
import { useCallback, useEffect, useState } from "react";
import { GALLERY } from "@/lib/pricing";

type GalleryItem = { src: string; w: number; h: number; alt: string };

export function Gallery({ items = GALLERY }: { items?: GalleryItem[] }) {
  const [open, setOpen] = useState<number | null>(null);
  const close = useCallback(() => setOpen(null), []);
  const step = useCallback(
    (d: number) =>
      setOpen((i) => (i === null ? i : (i + d + items.length) % items.length)),
    [],
  );

  useEffect(() => {
    if (open === null) return;
    const onKey = (e: KeyboardEvent) => {
      if (e.key === "Escape") close();
      if (e.key === "ArrowRight") step(1);
      if (e.key === "ArrowLeft") step(-1);
    };
    window.addEventListener("keydown", onKey);
    return () => window.removeEventListener("keydown", onKey);
  }, [open, close, step]);

  const current = open === null ? null : items[open];

  return (
    <>
      <div className="columns-2 gap-3 md:columns-3 lg:columns-4 [&>button]:mb-3">
        {items.map((g, i) => (
          <button
            key={g.src}
            type="button"
            onClick={() => setOpen(i)}
            className="block w-full overflow-hidden rounded-xl"
            aria-label={`Uvećaj sliku: ${g.alt}`}
          >
            <Image
              src={g.src}
              alt={g.alt}
              width={g.w}
              height={g.h}
              sizes="(min-width:1024px) 25vw, (min-width:768px) 33vw, 50vw"
              className="h-auto w-full transition-transform duration-500 hover:scale-105"
            />
          </button>
        ))}
      </div>

      {current && (
        <div
          role="dialog"
          aria-modal="true"
          aria-label={current.alt}
          className="fixed inset-0 z-50 flex items-center justify-center bg-black/90 p-4"
          onClick={close}
        >
          <Image
            src={current.src}
            alt={current.alt}
            width={current.w}
            height={current.h}
            sizes="100vw"
            className="max-h-[90vh] w-auto rounded-lg object-contain"
            onClick={(e) => e.stopPropagation()}
          />
          <button
            type="button"
            onClick={(e) => { e.stopPropagation(); step(-1); }}
            className="absolute left-3 top-1/2 -translate-y-1/2 rounded-full bg-white/20 px-4 py-3 text-2xl text-white hover:bg-white/30"
            aria-label="Prethodna slika"
          >
            ‹
          </button>
          <button
            type="button"
            onClick={(e) => { e.stopPropagation(); step(1); }}
            className="absolute right-3 top-1/2 -translate-y-1/2 rounded-full bg-white/20 px-4 py-3 text-2xl text-white hover:bg-white/30"
            aria-label="Sledeća slika"
          >
            ›
          </button>
          <button
            type="button"
            onClick={close}
            className="absolute right-3 top-3 rounded-full bg-white/20 px-4 py-2 text-white hover:bg-white/30"
            aria-label="Zatvori"
          >
            ✕
          </button>
        </div>
      )}
    </>
  );
}
