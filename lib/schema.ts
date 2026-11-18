import { EMAIL, PHONE_TEL, SITE_DESCRIPTION, SITE_NAME, SITE_URL } from "./constants";
import { PRICING } from "./pricing";

export const BUSINESS_ID = `${SITE_URL}/#business`;

export function localBusinessSchema() {
  return {
    "@context": "https://schema.org",
    "@type": ["LocalBusiness", "HomeAndConstructionBusiness"],
    "@id": BUSINESS_ID,
    name: SITE_NAME,
    alternateName: "Paja Trava",
    url: SITE_URL,
    telephone: PHONE_TEL,
    email: EMAIL,
    description: SITE_DESCRIPTION,
    logo: `${SITE_URL}/logo.jpg`,
    image: [`${SITE_URL}/og-image.jpg`, `${SITE_URL}/IMG-20190919-WA0013.jpg`],
    address: { "@type": "PostalAddress", addressCountry: "RS" },
    areaServed: { "@type": "Country", name: "Srbija" },
    priceRange: "$$",
    knowsLanguage: "sr",
    hasOfferCatalog: {
      "@type": "OfferCatalog",
      name: "Usluge",
      itemListElement: [
        ...PRICING.map((c) => ({
          "@type": "Offer",
          itemOffered: { "@type": "Service", name: c.title, url: `${SITE_URL}/usluge#${c.id}` },
        })),
        {
          "@type": "Offer",
          itemOffered: {
            "@type": "Service",
            name: "Automatski zalivni sistemi Hunter",
            url: `${SITE_URL}/zalivni-sistemi`,
          },
        },
      ],
    },
  };
}

export function websiteSchema() {
  return {
    "@context": "https://schema.org",
    "@type": "WebSite",
    "@id": `${SITE_URL}/#website`,
    url: SITE_URL,
    name: SITE_NAME,
    inLanguage: "sr",
    publisher: { "@id": BUSINESS_ID },
  };
}

export function breadcrumbSchema(items: { name: string; path: string }[]) {
  return {
    "@context": "https://schema.org",
    "@type": "BreadcrumbList",
    itemListElement: [{ name: "Početna", path: "/" }, ...items].map((it, i) => ({
      "@type": "ListItem",
      position: i + 1,
      name: it.name,
      item: `${SITE_URL}${it.path === "/" ? "" : it.path}`,
    })),
  };
}

export function serviceSchema(name: string, description: string, path: string) {
  return {
    "@context": "https://schema.org",
    "@type": "Service",
    name,
    description,
    url: `${SITE_URL}${path}`,
    provider: { "@id": BUSINESS_ID },
    areaServed: { "@type": "Country", name: "Srbija" },
  };
}
